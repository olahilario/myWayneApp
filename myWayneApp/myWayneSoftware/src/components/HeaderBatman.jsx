import styles from './HeaderBatman.module.css'

function HeaderBatman() {
  return (
    <div>

      <div>

      <div className={styles.container_avatar}>
        <img src="batman_8bit.jpg" alt="8 Bitman" className={styles.avatar} />

      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>Home</li>
          <li>Lista Telefônica</li>
          <li>Mapa</li>
          <li>Deliverys</li>

        </ul>
      </nav>

    </div>
      
    </div>
  )
}

export default HeaderBatman
