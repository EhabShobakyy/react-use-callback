import React, {useState, useCallback} from 'react';
import Button from './Button';

function App() {
  const [count , setCount] = useState(0);

  function increment(){
    setCount(s => s + 1);
  }

  const incrementCallback = useCallback(increment, []);

  return (
    <div>
      count: {count}
      <Button onClick={incrementCallback}>
        Increment
      </Button>
    </div>
  )
}


class AppClass extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  render(){
    return (
      <div>
        count: {this.state.count}
        <Button onClick={this.increment}>
          Increment
        </Button>
      </div>
    );
  }
}

export default App;
