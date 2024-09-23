import classes from './index.module.scss';
import classNames from 'classnames';
import { memo, useState } from 'react';

const outputObj = {};

export const showMessageBox = function ({content=[]}) {
    outputObj.setContent(content);
    outputObj.setType('error');
    outputObj.setIsShow(true);
    setTimeout(()=> {
        outputObj.setIsShow(false);
    }, 2000);
}

export default memo(function MessageBox() {
    // const { onCloseClick, content, type, isShow = false} = props;
    const [content, setContent] = useState([]);
    const [type, setType] = useState('');
    const [isShow, setIsShow] = useState(false);
    outputObj.setContent = setContent;
    outputObj.setType = setType;
    outputObj.setIsShow = setIsShow;
    const classname = {
        [classes.messagebox]: true,
        [classes['messagebox--visible']]: isShow,
        [classes['messagebox--error']]: type === 'error'
    }
    return (
        <div className={classNames(classname)}>
            <div className={classes.messagebox__close}></div>
            <div className={classes.messagebox__content}>
                { content }
            </div>
        </div>
    );
})