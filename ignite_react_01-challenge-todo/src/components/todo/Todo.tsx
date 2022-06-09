import React from 'react'

import check from '../../assets/check.svg'
import checkDone from '../../assets/checkDone.svg'
import trash from '../../assets/trash.svg'

import './Todo.scss'

type TodoProps = {
  todoText: string;
  isCompleted: boolean;
  handleCompleteTodoItem: (todoText: string) => void;
  handleDeleteTodoItem: (todoText: string) => void;
}

export function Todo({todoText, isCompleted, handleCompleteTodoItem, handleDeleteTodoItem}: TodoProps) {

  return (
    <div className='todo_item'>
      <button onClick={() => handleCompleteTodoItem(todoText)}>
        {isCompleted ? <img src={checkDone} /> : <img src={check} />}
      </button>
      <p className={isCompleted ? 'todo_completed': ''}>{todoText}</p>
      <button onClick={() => handleDeleteTodoItem(todoText)}>
        <img src={trash} />
      </button>
    </div>
  )
}
