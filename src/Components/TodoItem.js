import React , {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) => {

    const [secondary, setSecondary] = useState(false);

    return (
        <ListItem>
            <Checkbox
                checked={secondary}
                onChange={(event) => setSecondary(event.target.checked)}
            />
            <ListItemText
                primary={`${props.todo.value}`}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem;
