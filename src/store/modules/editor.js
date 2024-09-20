import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addUnitInfo, updateUnitInfo, getCategories, getUnitById } from '@api'; 


export const fetchAddUnitInfo = createAsyncThunk('unit/addUnitInfo', async function(state, thunkApi) {
    debugger;
    try {
        const {
            title,
            breif,
            detail,
            cate,
            imageurl
        } = thunkApi.getState().editor.currentRecord;
        const { data } = await addUnitInfo({
            title,
            breif,
            detail,
            cate,
            imageurl
        });
        return data.id;
    } catch (e) {
        throw e;
    }
});

export const fetchUpdateUnitInfo = createAsyncThunk('unit/updateUnitInfo', async function( state , thunkApi) {
    try {
        const {
            id,
            title,
            breif,
            detail,
            cate,
            imageurl
        } = thunkApi.getState().editor.currentRecord;
        const { data } = await updateUnitInfo({
            id,
            title,
            breif,
            detail,
            cate,
            imageurl
        });
        return data.id;
    } catch (e) {
        thunkApi.rejectWidthValue(e);
    }
});

export const fetchGetCategories = createAsyncThunk('unit/getCategories', async function(state, thunkApi) {
    try {
        const { data: {
            categories = []
        } } = await getCategories();
        return categories;
    } catch (e) {
        thunkApi.rejectWidthValue(e);
    }
});

export const fetchGetUnitById = createAsyncThunk('unit/getUnitById', async function(state, thunkApi) {
    try {
        const { data } = await getUnitById(state);
        return data;
    } catch (e) {
        thunkApi.rejectWidthValue(e);
    }
})

const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        currentRecord: {
            id: '',
            title: '',
            breif: '',
            detail: '',
            cate: '',
            imageurl: ''
        },
        categories: [],
        errorMessage: '',
        isLoading: false
    },
    reducers: {
        setId (state, action) {
            console.log(action.payload)
            state.currentRecord.id = action.payload;
        },
        setTitle (state, action) {
            state.currentRecord.title = action.payload;
        },
        setBreif (state, action) {
            state.currentRecord.breif = action.payload;
        },
        setDetail (state, action) {
            state.currentRecord.detail = action.payload;
        },
        setCate (state, action) {
            state.currentRecord.cate = action.payload;
        },
        setImageUrl (state, action) {
            state.currentRecord.imageurl = action.payload;
        },
        setCurrentRecord (state, { payload: {
            id,
            title,
            breif,
            detail,
            cate,
            imageurl
        }}) {
            const currentRecord = {
                id,
                title,
                breif,
                detail,
                cate,
                imageurl
            };
            state.currentRecord = currentRecord;
        },
        resetCurrentRecord (state) {
            state.currentRecord = {
                id: '',
                title: '',
                breif: '',
                detail: '',
                cate: '',
                imageurl: ''
            };
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAddUnitInfo.fulfilled, (state, action) => {
            console.log('fetchAddUnitInfo response:', action.payload);
            state.isLoading = false;
            state.currentRecord.id = action.payload;
        })
        .addCase(fetchAddUnitInfo.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchAddUnitInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error.message;
        })
        .addCase(fetchUpdateUnitInfo.fulfilled, (state, action) => {
            console.log('fetchUpdateUnitInfo response:', action.payload);
            state.currentRecord.id = action.payload;
        })
        .addCase(fetchUpdateUnitInfo.pending, (state, action) => {
            state.isLoading = true;
            
        })
        .addCase(fetchUpdateUnitInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error.message;
        })
        .addCase(fetchGetCategories.fulfilled, (state, action) => {
            console.log('fetchGetCategories response:', action.payload);
            state.categories = action.payload;
        })
        .addCase(fetchGetCategories.pending, (state, action) => {
            state.isLoading = true;
            
        })
        .addCase(fetchGetCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error.message;
        })
        .addCase(fetchGetUnitById.fulfilled, (state, action) => {
            console.log('fetchGetUnitById response:', action.payload);
            state.currentRecord = action.payload;
        })
        .addCase(fetchGetUnitById.pending, (state, action) => {
            state.isLoading = true;
            
        })
        .addCase(fetchGetUnitById.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.error.message;
        })
    }
});

export const { setId, setTitle, setBreif, setDetail, setCate, setImageUrl, setCurrentRecord, resetCurrentRecord } = editorSlice.actions;

export default editorSlice.reducer;