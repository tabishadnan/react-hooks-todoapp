import React from 'react';
import TodoItem from './TodoItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const TodoList = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.todos.length > 0 && <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        TodoList
          </Typography>
                    <div className={classes.demo}>
                        <List>
                            {props.todos.map((todo, index) => <TodoItem todo={todo} todoIndex={index} />)}
                        </List>
                    </div>
                </Grid>
            </Grid>}
        </div>
    );
}

export default TodoList;