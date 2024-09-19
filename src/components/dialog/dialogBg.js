import classes from './dialogBg.module.scss';

export default function DialogBg (props) {
    const { isShow } = props;
    const style = {};
    if( !isShow ) {
        style.display = 'none';
    }
    return (
        <div className={classes.dialog__bg} style={style}>
            {props.children}
        </div>);
}