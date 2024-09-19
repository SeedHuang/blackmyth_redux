// import { useFetchUnit } from '@hooks/fetchs/units'

const columns = [
    {
        field: 'title',
        fieldName: '名称',
        width: '100px'
    },
    {
        field: 'cate',
        fieldName: '类别',
        width: '100px'
    },
    {
        field: 'breif',
        fieldName: '简介',
        width: '200px'
    },
    {
        field: 'detail',
        fieldName: '详情',
        width: 'auto',
        tdVisibleLine: 3
    },
    {
        field: 'imageurl',
        fieldName: '图片',
        width: '200px'
    },
    {
        type: 'option',
        fieldName: '操作',
        width: '200px',
        setChildren: ({column, row})=> {
            return (
                [
                    (
                        <div key="td_option_update">
                            <div onClick={()=>{
                                alert(JSON.stringify(row))
                            }}>修改</div>
                        </div>
                    )
                ]
            );
        }
    }
];

export default columns;