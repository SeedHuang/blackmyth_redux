import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUnits } from '@api'

export const fetchGetUnits = createAsyncThunk('/units/getunits', 
    async function(state, thunkApi) {
        try {
            const {data:{ rows = []} } = await getUnits();
            return rows;
        } catch(e) {
            thunkApi.rejectWithValue('MMMM');
            throw e;
        }
    }
);


export const unitsSlice = createSlice({
    name: 'units',
    initialState: {
        rows: [],
        id: '',
        showEditor: false,
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        setShowEditor(state, action) {
            state.showEditor = action.payload;
        },
        setId(state, action) {
            state.id = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetUnits.fulfilled, (state, action) => {
                state.rows = action.payload || [];
                state.isLoading = false;
                state.errorMessage = '';
            })
            .addCase(fetchGetUnits.pending, (state, action) => {
                state.isLoading = true;
                state.errorMessage = '';
            })
            .addCase(fetchGetUnits.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.error.message;
            })
    }
});

export const { setShowEditor, setId } = unitsSlice.actions;

export default unitsSlice.reducer;