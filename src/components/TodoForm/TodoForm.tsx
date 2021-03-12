import React from "react"
import './TodoForm.css'

export const TodoForm: React.FC = () => {
    return (
        <div className="todo"> 
        <div className="input-field margint">
            <input 
            
            type="text" 
            id="title" 
            placeholder="Введите название дела"

            />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
        </div>
    )
}