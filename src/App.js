import Example from 'components/Example';
import TextboxElement from 'components/TextboxElement';

const { Component } = React;

class App extends Component {
  render() {
    return (
      <div>
        <TextboxElement id         ="test"
                        className  ="input"
                        placeholder="Try me"
                        onChange   ={ ()=> {console.log('Hello')} } />

        <Example title="Ninajs"
                 list={['marifel', 'matt', 'manny']} />
      </div>
    );
  }
}

export default App;
