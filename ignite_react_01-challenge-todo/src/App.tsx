import TodoLogo from './assets/Logo.svg'
import ClipboardSVG from './assets/Clipboard.svg'
import './App.scss'
import { useState } from 'react'
import { Todo } from './components/todo/Todo'

type TodoProps = {
  todoText: string;
  isCompleted: boolean;
}

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todosList, setTodosList] = useState<TodoProps[]>([])

  const handleCreateTodoItem = () => {
    setTodoInput('')
    setTodosList([...todosList, { todoText: todoInput, isCompleted: false }])
  }

  const handleCompleteTodoItem = (todoText: string) => {
    const newTodosList = todosList.map(todo => {
      if (todo.todoText === todoText) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    setTodosList(newTodosList)
  }

  const handleDeleteTodoItem = (todoText: string) => {
    const newTodosList = todosList.filter(todo => todo.todoText !== todoText)
    setTodosList(newTodosList)
  }

  const getCompletedTodosCount = () => {
    return todosList.filter(todo => todo.isCompleted).length
  }

  return (
    <>
      <header className='header'>
        <img src={TodoLogo}/>
      </header>

      <div className='add_todo'>
        <input 
          type="text"
          className='add_todo_input'
          placeholder='Adicionar tarefa...'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className='add_todo_button' onClick={handleCreateTodoItem}>Criar +</button>
      </div>


      <div className='todo_container'>
        <div className='todo_status'>
          <p>Tarefas criadas <span>{todosList.length}</span></p>
          <p>Concluídas <span>{getCompletedTodosCount()}</span></p>
        </div>

        <div className='todos'>
          
            {
              todosList && todosList.map(todo => { 
                return <Todo
                  todoText={todo.todoText}
                  isCompleted={todo.isCompleted}
                  handleCompleteTodoItem={handleCompleteTodoItem}
                  handleDeleteTodoItem={handleDeleteTodoItem}
                />
              })
            }
            {
              todosList.length === 0 && (
              <>
                <img src={ClipboardSVG} />

                <div className='todos_empty_message'>
                  <p>Você ainda não tem tarefas cadastradas.</p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </>
              )
            }
        </div>
      </div>
    </>
  )
}

export default App
