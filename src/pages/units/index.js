import { useState } from 'react';
// import columns from './columns';
import Table from "@components/table";
import ToolBar from '@components/toolBar';
import Button from '@components/button';
import HalfScreenDialog from '@components/dialog/halfScreenDialog';
import Editor from '@pages/editor';
import PageView from '@components/pageView';
import { useFetchUnit } from '@hooks/fetchs/units';
import { useCallback } from 'react';
import classes from './index.module.scss';




export default function Units() {
    const [showEditor, setShowEditor] = useState(false);
    const [id, setId] = useState('');
    const onUpdateClick = useCallback((row)=> {
        setShowEditor(true);
        setId(row.id);
    }, []);

    const style = {
        color: 'blue',
        cursor: 'pointer'
    };

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
            hAlign: 'center',
            vAlign: 'center',
            setChildren: ({row})=> {
                return (
                    [
                        (
                            <div key="td_option_update">
                                <div style={style} onClick={()=>{
                                    onUpdateClick(row);
                                }}>修改</div>
                            </div>
                        )
                    ]
                );
            }
        }
    ];


    
    const [ rows, setRows ] = useFetchUnit();

    function onAddClick () {
        setShowEditor(true);
    }
    const onEditorConfirmClick =  useCallback(()=>{
        setShowEditor(false);
        (async function () {
            await setRows()
        })();
    }, []);

    const onEditroCancelClick = useCallback(() => {
        setShowEditor(false);
    }, []);
    
    return (
        <PageView>
            <ToolBar>
                <Button text="添加" onClick={onAddClick}/>
            </ToolBar>
            <div className={classes.container__wrap}>
                <Table columns={columns} rows={rows} />
            </div>
            
            {
                showEditor && (
                    <HalfScreenDialog isShow={showEditor}>
                        <Editor id={id} onConfirmClick={onEditorConfirmClick} onCancelClick={onEditroCancelClick}/>
                    </HalfScreenDialog>
                )
            }
        </PageView>
    );
}