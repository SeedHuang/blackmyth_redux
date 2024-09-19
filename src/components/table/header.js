import classes from './header.module.scss'
import TH from './th';

export default function header (props) {
    const { columns } = props;
    return (
        <div className={classes.table__header}>
            {
                columns.map((column)=>{
                    const { width, type, field, fieldName, hAlign, vAlign  } = column;
                    let key = '';
                    if (type === 'option') {
                        key = 'key_theader_th_option';
                    } else {
                        key = `key_theader_th_${field}`;
                    }
                    return (
                        <TH key={key} width={width} type={type} field={field} fieldName={fieldName} hAlign={hAlign} vAlign={vAlign}  />
                    )
                })
            }
        </div>
    )
}