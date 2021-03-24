import { useEffect, useState } from 'react';
import logo from './components/logo.svg';
import './styles/App.css';

import  Button  from './components/Button'


function App() {
    
  const [text_anchor, setText_anchor] = useState("anchor")
  const [title_h1, setTitle_h1] = useState()
  const [state_a, setState] = useState(true)

  const handleClick = () =>{  
    setText_anchor("WHATSAPP 2")
  }
  const handleClick2 = () =>{
    setTitle_h1("Questão E")
  }
  useEffect(()=>{ state_a ? setState(false) : console.log("Texto do anchor mudou")}, [text_anchor])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title_h1}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button func={handleClick2} text="Title Generator" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >  
        {text_anchor}
        </a>
        <p></p>
        <Button func={handleClick} text="Link Generator"/>
      </header>
    </div>
  );
}

export default App;
