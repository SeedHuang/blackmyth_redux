import classes from './index.module.scss';
import classNames from 'classnames';

export default function MessageBox(props) {
    const { onCloseClick, content, type, isShow = false} = props;
    const classname = {
        [classes.messagebox]: true,
        [classes['messagebox--visible']]: isShow,
        [classes['messagebox--error']]: type === 'error'
    }
    return (
        <div className={classNames(classname)}>
            <div className={classes.messagebox__close}></div>
            <div className={classes.messagebox__content}>
                { props.children }
            </div>
        </div>
    );
}