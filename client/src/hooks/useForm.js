import {useState, useEffect} from 'react';

export const useForm = ()=>{
   
    const useLocalStorage = (key, initialValue) => {
    const[storedValue, setStoredValue] = useState(()=>{
        const element = window.localStorage.getItem(key);
        return element ? JSON.parse(element) : initialValue;
    });

    const setValue = v => {
        setStoredValue(v);
        window.localStorage.setItem(key, JSON.stringify(v));
    };
   return [storedValue, setValue];
    } //end useLocalStorage
  
    const [formState, setFormState] = useLocalStorage();
    

    useEffect(
        ()=>{
           



        },[formState]
    );


   

    

    return 

}
// write your custom hook here to control your checkout form

