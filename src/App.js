import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavComponent from './components/NavComponent';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent isFluid={true}/>
      </header>
      <footer>
        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
