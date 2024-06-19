import logo from './logo.svg';
import './App.css';
import { ContainerGraficas } from './ContainerGraficas';
import { ContainerProcesos } from './ContainerProcesos';

function App() {
  return (
    <div className="App" style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   *  Primer proyecto SO 1  *
      </header>
      <div><br/></div>
      <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
        <ContainerGraficas/>        
      </div>
      <div><br/></div>
      <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
      <ContainerProcesos/>
      </div>
    </div>
  );
}

export default App;
