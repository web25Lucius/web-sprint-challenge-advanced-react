// write your custom hook here to control your checkout form
import {useState} from 'react';
import {useLocalStorage} from './useLocalStorage';

// write your custom hook here to control your checkout form
export function useForm(initialValue={}){
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useLocalStorage('form-data',initialValue);

    const changeHandler = event => {
        const {name, value} = event.target;
        setValues(values=> {
            return {...values, [name]:value};
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setShowSuccessMessage(true);
        
        // setValues(initialValue);
      };

    return {
        values, 
        showSuccessMessage,
        handleChanges:changeHandler, 
        handleSubmit: submitHandler
    };
}