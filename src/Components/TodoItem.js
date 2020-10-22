import React , {useState} from 'react';
import TodoEditForm from './TodoEditForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const TodoItem = (props) => {

    return (
        <ListItem>
            {!props.showInput && <>
                <Checkbox onClick={() => props.completeTodo(props.todoIndex)} />
                <ListItemText
                    style={{textDecoration : props.completed ? "line-through" : "none"}}
                    primary={`${props.todo.value}`}
                />
            </>}
            {props.showInput && <>
                <TodoEditForm todoVal={props.todo.value} todoIndex={props.todoIndex} saveTodo={props.saveTodo} />
            </>}
            <ListItemSecondaryAction>
                {!props.showInput && <IconButton edge="end" aria-label="edit" onClick={() => props.editTodo(props.todoIndex)}>
                    <EditIcon />
                </IconButton>}
                <IconButton edge="end" aria-label="delete" onClick={() => props.removeTodo(props.todoIndex)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem;
