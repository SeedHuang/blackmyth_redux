import classes from './row.module.scss';
import Td from './td';
export default function Row(props) {
    const { row, columns } = props;
    return (
        <div className={classes.table__body__row}>
            {
                columns.map((column) => {
                    let key = '';
                    if(column.type === 'option') {
                        key = 'table__row__option_td';
                    } else {
                        key = `table__row__${column.field}_td`;
                    }
                    return (
                        <Td key={key} row={row} column={column} />
                    )
                })
            }
        </div>
    );
}