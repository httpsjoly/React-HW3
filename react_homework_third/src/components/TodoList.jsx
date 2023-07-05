import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  addTodo = () => {
    const { newTodo, todos } = this.state;
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        task: newTodo,
        completed: false
      };
      this.setState({
        todos: [...todos, newTodoItem],
        newTodo: ''
      });
    }
  };

  toggleTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  };

    inputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h2 className='mainText'>Список тудушек</h2>
        <ul className='todoStyle'>
          {todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => this.toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? "#7ee40b" : "#d3a014"}}
            >
              {todo.task}
            </li>
          ))}
        </ul>
        <div>
          <input className='styleInput'
            type="text"
            value={newTodo}
            onChange={this.inputChange}
          />
            <br />
          <button className='btnTodo' onClick={this.addTodo}>Добавить тудушку</button>
        </div>
      </div>
    );
  }
}

export default TodoList;