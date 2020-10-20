import {useState} from 'react';

const useInputState = () => {
    const [value, updatValue] = useState("");

    const handleChange = (e) => {
        updatValue(e.target.value);
    };

    const reset = () => {
        updatValue("");
    };

    return [value, handleChange, reset];
};

export default useInputState;
