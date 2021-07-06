import {useState, useEffect} from 'react';

export function useLocalStorage(key, initialValue){
  const [data, setData] = useState(()=>{
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  useEffect(() => {
    const updatedData = JSON.stringify(data);
    window.localStorage.setItem(key, updatedData)
  }, [key, data]);

  return [data, setData];
}