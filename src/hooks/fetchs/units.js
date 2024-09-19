import { useState, useEffect } from "react";
import { getUnits, getUnitById } from "@api";
export const useFetchUnit = () => {
    const [ rows , setRows ] = useState([]);
    
    async function fetchData() {
        const { data } = await getUnits();
        setRows(data.rows);
    }
    useEffect(()=>{
        fetchData();
    }, []);
    return [rows, fetchData]
}

export const useGetUnitById = (id) => {
    const [unit, setUnit] = useState({});

    async function fetchData () {
        const { data } = await getUnitById(id)
        setUnit(data)
    }

    useEffect(function() {
        fetchData();
    }, [id]);
    return unit;
}