import { useState, memo } from 'react';
import DialogBg from './dialogBg';
import classes from './halfScreenDialog.module.scss';

function HalfScreen(props) {
    const { isShow } = props;
    // console.count('halfscreen')
    return (
        <DialogBg isShow={isShow}>
            <div className={classes.dialog__halfscreen}>
                { props.children }
            </div>
        </DialogBg>        
    );
}

export default memo(HalfScreen);