import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Header from './components/Header'
import Details from './components/Details';


const App = () => {

    const [tasks, setTask] = useState([
        {
            id: 1,
            title: "Estudar programacao",
            completed:false,
        },
        {
            id: 2,
            title: "Ler livros",
            completed: true,
        },

    ]);

    const handleTaskAddicion = (taskTitle) => {
        const newTask = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
            },
        ];

        setTask(newTask);
    }

    const handleTaskClick = (idTask) => {
        const newTask = tasks.map((task) => {
            if (task.id === idTask) return { ...task, completed: !task.completed};

            return task;
        });
        setTask(newTask);
    }

    const handleTaskDelete = (id) => {
        const newTask = tasks.filter(task => task.id !== id);
        setTask(newTask);
    }
    return (
        <Router>
            <div className='container'>
                <Header />
                <Route
                    path="/"
                    exact
                    render={() => (
                        <>
                            <AddTask handleTaskAddicion={handleTaskAddicion} />
                            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
                        </>
                    )}
                />
                <Route
                    path="/:taskTitle"
                    exact
                    component={Details}
                />

            </div>
        </Router>

    );
}

export default App;