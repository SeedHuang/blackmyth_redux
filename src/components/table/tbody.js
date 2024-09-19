import classes from './tbody.module.scss';
import Row from './row';
export default function tbody (props) {
    const { rows, columns } = props;
    return (
        <div className={classes.table__body}>
            {
                rows.map((row) => {
                    return (<Row key={`key_row_${row.id}`} row={row} columns={columns}/>)
                })
            }
        </div>
    );
    
}