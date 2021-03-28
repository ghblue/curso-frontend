import Button from "../components/Button"
import logo from '../components/logo.svg'
import '../styles/App.css';

import { useState } from 'react'
import { useHistory } from "react-router-dom";


const Home = () =>{

    const [text_anchor, setText_anchor] = useState("anchor")
    const [title_h1, setTitle_h1] = useState()

    const history = useHistory();
  
    const handleClick = () =>{  
      setText_anchor("WHATSAPP 2")
    }
    const handleClick2 = () =>{
      setTitle_h1("Questão E")
    }
    const handleNavigation = () =>{
        history.push("/about")
    }
    const handleNavigationToComments = () => {
      history.push("/comments")
    }

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
        <p></p>
        <Button func={handleNavigation} text="About"/>
        <p></p>
        <Button func={handleNavigationToComments} text="Comments"/>
        <p></p>
      </header>
    </div>
    );
}

export default Home;