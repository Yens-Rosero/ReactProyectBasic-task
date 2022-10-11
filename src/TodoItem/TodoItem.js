import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

import "./TodoItem.css";
function TodoItem(props) {
    return (
        <div className='TodoItem-container'>
            <TextField
                InputProps={{
                    readOnly: true,
                }}
                variant='filled'
                sx={
                    props.completed == true
                        ? { textDecoration: "line-through", color: "green" }
                        : {}
                }
                value={props.text}
                className='input-item'
            />
            <div className='icons'>
                {props.completed == true ? (
                    <Button
                        onClick={props.completeTodos}
                        color='success'
                        className='icon-check'>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                ) : (
                    <Button
                        onClick={props.completeTodos}
                        color='error'
                        className='icon-check icon-check-false'>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                )}
                <Button
                    onClick={props.deleteTodo}
                    color='error'
                    size='large'
                    className='todo-icon-trash btn'>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </div>
        </div>
    );
}

export { TodoItem };
