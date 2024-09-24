import styles from './Login.module.css'


function Login({isLogged, setIsLogged}) {

  const toggleLogged = () => {
    setIsLogged(prev => !prev)
  }

  return (
    <div className={styles.background}>

      <img src="logo_login.png" alt="Logo retrô do cavernoso!" className={styles.logo_login} onClick={toggleLogged}/>

      <div className={styles.container_login}>
        <input type="text" className={styles.retro_input} placeholder="Who are you?"/>
        <input type="password" className={styles.retro_input} placeholder="Password here!"/>
        <button className={styles.retro_button}>enter</button>


      </div>
      
    </div>
  )
}

export default Login
