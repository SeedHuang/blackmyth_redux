import classes from './index.module.scss';

export default function PageView(props) {
    const { footer } = props;
    return (
        <div className={classes.pageview}>
            {props.children}
            {
                footer && (<div className={classes.pageview__footer}>{footer}</div>)
            }
        </div>
    );
}