import classNames from 'classnames';
import { combineComponentClass } from '@tool';
import classes from './index.module.scss';
import { memo } from 'react';

function Button(props) {
    const { type = 'normal' } = props;
    let buttonTypeClass = '';
    switch (type) {
        case 'normal':
            buttonTypeClass = 'button__type--normal';
            break;
        case 'confirm':
            buttonTypeClass = 'button__type--confirm';
            break;
        case 'cancel':
            buttonTypeClass = 'button__type--cancel';
    }
    const classnames = combineComponentClass(props, classes.button, classes[buttonTypeClass])
    return <button className={classNames(classnames)} onClick={props.onClick}>{props.text}</button>
}

export default memo(Button);