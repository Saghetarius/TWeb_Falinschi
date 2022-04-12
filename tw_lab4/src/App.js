import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Falinschi Serghei CR-193 </h1>
      </header>
       <h1 align="left">Five fields</h1>
        <FormFiveField></FormFiveField>
        <h1 align="left">Seven fields (5+2)</h1>    
        <FormSevenField></FormSevenField>
        </div>
  );
}

export default App;

function FullWidthTextField() {
    const [input, setInput] = useState('');
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <input value={input} onInput={e => setInput(e.target.value)}/>
        </Box>
    );
}

function FormFiveField() {
    return (
        <form>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            
        </form>
        );
}

function FormSevenField() {
    return (
        <form>
            <FormFiveField></FormFiveField>
            <FullWidthTextField></FullWidthTextField>
            <FullWidthTextField></FullWidthTextField>
            
        </form>
    );
}