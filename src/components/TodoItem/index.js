// Write your code here

import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {id, title} = details

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="backgroundContainer">
      <p className="para">{title}</p>
      <button className="btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
