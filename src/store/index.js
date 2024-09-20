import { configureStore } from '@reduxjs/toolkit';
import unitsReducer from '@store/modules/units';
import editorReducer from '@store/modules/editor';

export default configureStore({
    reducer: {
        units: unitsReducer,
        editor: editorReducer
    }
})

// export const store = configureStore({
//     reducer: {
//         [unitsApi.reducerPath]: unitsApi.reducer
//     },
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware().concat(unitsApi.middleware)
//     }
// });


