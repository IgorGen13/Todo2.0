import React, { useState } from "react"
import './TodoForm.css'

interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: React.FC<TodoFormProps> = props => {

    const [title, setTitle] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key==='Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="todo"> 
        <div className="input-field margint">
            <input 
            onChange={changeHandler} 
            value={title} 
            type="text" 
            id="title" 
            placeholder="Введите название дела"
            onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
        </div>
    )
}