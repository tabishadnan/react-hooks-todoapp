import React , {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) => {

    return (
        <ListItem>
            <Checkbox onClick={() => props.completeTodo(props.todoIndex)} />
            <ListItemText
                style={{textDecoration : props.completed ? "line-through" : "none"}}
                primary={`${props.todo.value}`}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => props.removeTodo(props.todoIndex)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem;
