import { useContext } from 'react';
//Im using the useContext hook to get the value of the GlobalContext.Provider
import { GlobalContext } from './GlobalProvider';

export default function useGlobal() {
    return useContext(GlobalContext);
}