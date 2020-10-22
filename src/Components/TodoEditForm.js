import React from 'react';
import useInputState from '../Hooks/useInputState';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'; 
import SaveIcon from '@material-ui/icons/Save';

const TodoEditForm = (props) => {

    const [value, handleChange, reset] = useInputState(props.todoVal);

    const saveTodo = () => {
        props.saveTodo(value,props.todoIndex);
        reset();
    };

    return (
        <React.Fragment>
                <TextField style={{width : "100%"}} id="standard-basic" label="Standard" value={value} onChange={handleChange} />
                <IconButton edge="end" aria-label="save" onClick={saveTodo}>
                    <SaveIcon />
                </IconButton>
        </React.Fragment>
    )
};

export default TodoEditForm;
