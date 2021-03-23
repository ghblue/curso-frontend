import { useState } from 'react';
import logo from './components/logo.svg';
import './styles/App.css';

import { Button } from './components/Button'


function App() {
    
    const [title, setTitle] = useState("anchor")
    const [title2, setTitle2] = useState()
    const [showTitle, setShowTitle] = useState(false);

    const handleClick = () =>{
    setTitle("WHATSAPP 2")
    setShowTitle(!showTitle)
  }
  const handleClick2 = () =>{
    setTitle2("Questão E")
    setShowTitle(!showTitle)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title2}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button func={handleClick2} text = "Title Generator" textH1 = {title2} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >  
        {title}
        </a>
        <p></p>
         <Button func={handleClick} text = "Link Generator" text2 = {title} />
      </header>
    </div>
  );
}

export default App;
