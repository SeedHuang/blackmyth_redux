import HalfScreenDialog from './halfScreenDialog';
import Alert from './alert';


function dialog (props) {
    const { mode = 'halfScreen', isShow = false } = props;
    switch(mode) {
        case 'halfScreen':
            return (
                <HalfScreenDialog isShow={ isShow }>
                    { props.children }
                </HalfScreenDialog>
            )
            break;
        case 'alert':
            const { onConfirmClick, onCancelClick } = props;
            return (
                <Alert isShow={ isShow } onConfirmClick={onConfirmClick} onCancelClick={onCancelClick}>
                    { props.children }
                </Alert>
                // <div>2</div>
            );
            break;
    }
}

export default dialog;