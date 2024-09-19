import classes from './windowDialog.module.scss';
import DialogBg from './dialogBg';
import { combineComponentClass as ccc } from '@tool';
import classNames from 'classnames';
export default function WindowDialog(props) {
    const {isShow = false, footer = null } = props;
    const classnames = ccc(props, classes.windowDialog)
    return (
        <DialogBg isShow={isShow}>
            <div className={classNames(classnames)}>
                <div className={classes.windowDialog__content}>
                    { props.children }
                </div>
                {
                    (footer !== null) && (
                        <div className={classes.windowDialog__footer}>
                            { footer }
                        </div>
                    )
                }
            </div>
        </DialogBg>
        
    );
}