import classes from './td.module.scss';
import globalClass from '@global/index.module.scss';
import classNames from 'classnames';

export default function td(props) {
    const { row, column } = props;
    const style = {};
    const { tdVisibleLine = 'auto' } = column;

    const classname = [classes.table__body__row__td];
    // console.log(column, tdVisibleLine, '???????')
    switch (tdVisibleLine + '') {
        case '1':
            classname.push(globalClass['word-ellipsis-1']);
            break;
        case '2':
            classname.push(globalClass['word-ellipsis-2']);
            break;
        case '3':
            classname.push(globalClass['word-ellipsis-3']);
            break;
    }


    if(column.width) {
        if(column.width !== 'auto') {
            style.flexBasis = column.width;
            style.flexShrink = 0
        } else {
            style.flexGrow = 1;
            style.flexShrink = 1;
        }
    }

    if(column.hAlign) {
        style['justify-content'] = 'center';
    }
    if(column.vAlign) {
        style['align-items'] = 'center';
    }

    if(column.type === 'option') {
        return (
            <div
                className={classNames(classname)}
                style={style}>
                { (column.setChildren && column.setChildren({row, column}))|| []}
            </div>
        );
    } else {
        return (
            <div
                className={classNames(classname)}
                style={style}>{row[column.field]}</div>
        );
    }
}