import { useState, useEffect, memo, useCallback } from 'react';
import Button from '@components/button';
import FileUploader from '@components/fileUploader';
import { addUnitInfo, getCategories, getUnitById, updateUnitInfo } from '@api';
import { useGetUnitById } from '@hooks/fetchs/units';
import { 
    setId, setTitle, setBreif, setDetail, setCate, setImageUrl, setCurrentRecord, resetCurrentRecord,
    fetchAddUnitInfo, fetchUpdateUnitInfo, fetchGetCategories, fetchGetUnitById, fetchGetUnits 
} from '@store/modules/editor';
import { useSelector, useDispatch } from 'react-redux';
import PageView from '@components/pageView';
import { useShowMessageBox } from '@hooks/global';

import classes from './index.module.scss';

function EditorPage(props) {
    const {onConfirmClick, onCancelClick } = props;
    const showMessageBox = useShowMessageBox();
    const dispatch = useDispatch();
    const {
        categories,
        currentRecord,
        errorMessage
    } = useSelector(( state )=> {
        return state.editor;
    });
    const {
        id,
        title,
        breif,
        detail,
        cate,
        imageurl
    } = currentRecord;
    
    const onAddClick = useCallback(() => {
        (async function() {
            let response = null;
            if (!!id) {
                response = await dispatch(fetchUpdateUnitInfo())
            } else {
                response = await dispatch(fetchAddUnitInfo());
            }
            if (!response.error) {
                dispatch(resetCurrentRecord());
                onConfirmClick();
            } else {
                showMessageBox({content: response.error.message});
            }
        })();
    }, [id]);

    const onResetClick =  useCallback(() => {
        dispatch(resetCurrentRecord())
        onCancelClick();
    }, []);

    const onTitleChange = useCallback( e => {
       dispatch(setTitle(e.target.value));
    }, []);
    const onBreifChange = useCallback( e => {
        dispatch(setBreif(e.target.value));
    }, []);
    const onDetailChange = useCallback( e => {
        dispatch(setDetail(e.target.value));
    }, []);
    const onCateChange = useCallback( e =>{
        dispatch(setCate(e.target.value));
    }, []);
    const onImageUrlChange = useCallback( newUrl => {
        dispatch(setImageUrl(newUrl))
    }, []);
    
    useEffect(()=>{
        (async function (){
            await dispatch(fetchGetCategories());
            if(props.id) {
                await dispatch(fetchGetUnitById(props.id));
            }
        })()
    }, [props.id]);


    return (
        <PageView footer={
            [
                (<Button type="confirm" text={!!id ? "修改" : "添加"} key="key__button__add" onClick={onAddClick}/>),
                (<Button type="cancel" text="取消" key="key__button__reset" onClick={onResetClick}/>)
            ]
        }>
            <div className={classes.pageForm}>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>名称</div>    
                    <div className={classes.pageForm__row__td}>
                        <input type="text" value={title}  onChange={onTitleChange}/>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>简介</div>    
                    <div className={classes.pageForm__row__td}>
                        <textarea value={breif} style={{height: '100px'}} onChange={ onBreifChange }></textarea>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>详情</div>    
                    <div className={classes.pageForm__row__td}>
                        <textarea value={detail} onChange={ onDetailChange }></textarea>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>类别</div>    
                    <div className={classes.pageForm__row__td}>
                        <select value={cate}  onChange={ onCateChange }>
                            {
                                categories.map(({label, value}, index) => {
                                    return (<option key={`key_option_${value}`} value={value}>{label}</option>)
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className={classes.pageForm__row}>
                    <div className={classes.pageForm__row__th}>图片</div>    
                    <div className={classes.pageForm__row__td}>
                        <FileUploader value={imageurl} onChange={ onImageUrlChange }/>
                    </div>
                </div>
            </div>
        </PageView>
    );
}

export default memo(EditorPage);