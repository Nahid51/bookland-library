import './App.css';
import Books from './components/Books/Books';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header> {/* import header file */}
      <Books></Books> {/* import books file */}
    </div>
  );
}

export default App;
