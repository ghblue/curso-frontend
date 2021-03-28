import styles from '../styles/Button.module.css'

const Button = ({func, text}) => <button onClick ={func} className={ styles.container }> {text} </button>

export default Button;