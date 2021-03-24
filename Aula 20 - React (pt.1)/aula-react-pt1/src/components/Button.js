import styles from '../styles/Button.module.css'

const Button = (props) => <button onClick ={ props.func } className={ styles.container }> { props.text } </button>

export default Button;