import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const TodoApp = () => {

    const [todos, setTodos] = useState([]);

    const addTodos = (newTodoVal) => {

        setTodos([...todos, { value: newTodoVal, isShowInput: false, isComplete: false }]);

    }

    const removeTodo = (index) => {

        let todosArrCopy = [...todos];

        todosArrCopy.splice(index,1);

        setTodos(todosArrCopy);
    }

    const completeTodo = (index) => {

        let todosArrCopy = [...todos];

        todosArrCopy[index].isComplete = !todosArrCopy[index].isComplete;

        setTodos(todosArrCopy);
    }

    const editTodo = (index) => {

        let todosArrCopy = [...todos];

        todosArrCopy[index].isShowInput = true;

        setTodos(todosArrCopy);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <TodoForm addTodos={addTodos} />
                <TodoList todos={todos} 
                removeTodo={removeTodo} 
                completeTodo={completeTodo}
                editTodo={editTodo}
                />
            </Container>
        </React.Fragment>
    )
};

export default TodoApp;
