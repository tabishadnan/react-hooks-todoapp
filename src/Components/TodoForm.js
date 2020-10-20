import React from 'react';
import useInputState from '../Hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const TodoForm = (props) => {

    const [value, handleChange, reset] = useInputState("");

    const addTodo = () => {
        props.addTodos(value);
        reset();
    };

    return (
        <React.Fragment>
            <Box mt={2}>
                <TextField id="standard-basic" label="Standard" value={value} onChange={handleChange} />
                <Button onClick={addTodo} className="MuiBox-root-1" size="small" variant="outlined" color="primary">
                    Add
                </Button>
            </Box>
        </React.Fragment>
    )
};

export default TodoForm;
