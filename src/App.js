import { RouterProvider } from 'react-router-dom';
import routerConfig from '@router';
import { createContext, useState } from 'react';
import classes from './app.module.scss';
import Alert from '@components/dialog/alert';

export const GlobalContext = createContext();



function App() {
    const [ isShow, setIsShow ] = useState(false);
    const [ dialogContent, setDialogContent ] = useState([]);
    const [ dialogMethods, setDialogMethods ] = useState({});
    const { onConfirmHandler, onCancelHandler } = dialogMethods;
    
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
        }
    };

    return (
        <GlobalContext.Provider value={globalValue}>
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
        </GlobalContext.Provider>
        
    );
}
export default App;
