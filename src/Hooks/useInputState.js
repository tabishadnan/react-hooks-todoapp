import {useState} from 'react';

const useInputState = (initialVal) => {
    const [value, updatValue] = useState(initialVal);

    const handleChange = (e) => {
        updatValue(e.target.value);
    };

    const reset = () => {
        updatValue("");
    };

    return [value, handleChange, reset];
};

export default useInputState;
