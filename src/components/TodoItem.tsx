const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.children}</li>
}

export default TodoItem
