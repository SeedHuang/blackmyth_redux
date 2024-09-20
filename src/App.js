import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '@store';
import routerConfig from '@router';
import { createContext, useState, useCallback } from 'react';
import classes from './app.module.scss';
import Alert from '@components/dialog/alert';
import MessageBox from '@components/messageBox';

export const GlobalContext = createContext();



function App() {
    const [ isShow, setIsShow ] = useState(false);
    const [ dialogContent, setDialogContent ] = useState([]);
    const [ dialogMethods, setDialogMethods ] = useState({});
    const [ messageBoxVisible, setMessageBoxVisible] = useState(false);
    const [ messageBoxContent , setMessageBoxContent] = useState([])
    const { onConfirmHandler, onCancelHandler } = dialogMethods;
    const onMessageBoxCloseClick = useCallback(() => {

    }, []);
    const globalValue = {
        // AlertDialog.show({
        //     content: (<div>Hello World</div>),
        //     onConfirmHandler: () => {
        //         console.log('confirm...');
        //         AlertDialog.hide();
        //     },
        //     onCancelHandler: () => {
        //         console.log('cancel...');
        //         AlertDialog.hide();
        //     }
        // });
        AlertDialog : {
            show ({content = [], onConfirmHandler = null, onCancelHandler = null}) {
                setIsShow(true);
                setDialogContent(content);
                setDialogMethods({
                    onConfirmHandler,
                    onCancelHandler
                });
            },
            hide () {
                setIsShow(false);
            }
        },
        MessageBox: {
            show({content = []}) {
                setMessageBoxVisible(true);
                setMessageBoxContent(content);
                setTimeout(()=>{
                    setMessageBoxVisible(false);
                }, 2000);
            }
        }
    };
    
    return (
        <Provider store={store}>
            <GlobalContext.Provider value={globalValue}>
                <>
                    <div className={classes.container}>
                        <div className={classes.container__menu}></div>
                        <div className={classes.container__content}>
                            <RouterProvider router={routerConfig} />  
                        </div>  
                        <Alert
                            isShow={isShow}
                            onConfirmClick={onConfirmHandler}
                            onCancelClick={onCancelHandler}>
                            { dialogContent }
                        </Alert>
                    </div>
                    <MessageBox
                        isShow={messageBoxVisible}
                        onCloseClick={onMessageBoxCloseClick}
                        type="error"
                    >
                        {messageBoxContent}
                    </MessageBox>
                </>
            </GlobalContext.Provider>
        </Provider>
    );
}
export default App;
