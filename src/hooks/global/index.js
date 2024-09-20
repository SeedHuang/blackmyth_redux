import { GlobalContext } from "@src/App";
import { useContext } from 'react';

export const useShowMessageBox = () => {
    const GlobalValue = useContext(GlobalContext);
    return GlobalValue.MessageBox.show;
}
