import React from 'react';

class HelloWorld extends React.Component {
    state = {
    who: "World!",
    }

  updateStatement(input){
    this.setState({
      who: input
    })
  }

  render() {
    return (
    <div>
      <p>Hello, {this.state.who}</p>
      <button className="world" onClick={() => this.updateStatement("World!")}>World</button>
      <button className="friend" onClick={() => this.updateStatement("Friend!")}>Friend</button>
      <button className="react" onClick={() => this.updateStatement("React!")}>React</button>
    </div>
      
      )
  }
}

export default HelloWorld;