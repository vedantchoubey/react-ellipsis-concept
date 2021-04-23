import React, { Component } from 'react';


class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  render() {
    
    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="ellipsis" >
              <p style={{
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis',
            width:'150px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis',
            width:'150px'}}>{todo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }              
              </h6>
            </div>
          </div>

        ))}
        </div>
       </div>
    );
  }
}

export default App;
