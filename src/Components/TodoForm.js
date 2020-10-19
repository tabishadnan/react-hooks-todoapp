import React , {useState} from 'react';
import useInputState from '../Hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TodoForm = (props) => {

    const [value, handleChange, reset] = useInputState("");

    const [todo, setTodo] = useState([]);

    const addTodo = () => {
        let todoObj = {
            value : value,
            isShowInput : false,
        }
        let addTodo = [...todo, todoObj];
        setTodo(addTodo);
        reset();
    };
 
    return (
        <>
            <TextField id="standard-basic" label="Standard" value={value} onChange={handleChange} />
            <Button variant="contained" color="primary" onClick={addTodo}>
                Secondary
            </Button>
        </>
    );
}

export default TodoForm;