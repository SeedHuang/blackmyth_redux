import classes from './index.module.scss';
import { memo } from 'react';
function toolbar (props) {
    // const { children } = props;
    const leftChildren = [];
    const rightChildren = [];
    if(props.children && props.children.length > 1) {
        props.children.forEach((child)=>{
            if(child.props.right === true) {
                rightChildren.push(child);
            } else {
                leftChildren.push(child);
            }
        })
    } else {
        if(props.children.right === true) {
            rightChildren.push(props.children);
        } else {
            leftChildren.push(props.children);
        }
    }
    return (
        <div className={classes.toolbar}>
            <div className={classes.toolbar__left}>
                { leftChildren }
            </div>
            <div className={classes.toolbar__right}>
                { rightChildren }
            </div>
        </div>
    );
}

export default memo(toolbar);