import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import '../Task.css';
import '../Button.css';

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
    const history = useHistory();
    const historiClick = () => {
        history.push(`/${task.title}`); 
    }

    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: "6px  solid chartreuse" } : {}}
        >

            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button className="button-info" onClick={historiClick}>
                    <CgInfo />
                </button>
                <button className="button-remove" onClick={() => handleTaskDelete(task.id)}>
                    <CgClose />
                </button>
            </div>
            
            
        </ div >
    )
}

export default Task;