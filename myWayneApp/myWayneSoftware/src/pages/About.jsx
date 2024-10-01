import styles from './About.module.css'
import { useState } from 'react'


function About({isLogged, setIsLogged}) {

  const toggleLogged = () => {
    setIsLogged(prev => !prev)
    console.log('cliquei!')
  }

  return (
    <div className={styles.background_about}>
      <img src="logo_login.png" alt="Logo retrô do cavernoso!" className={styles.logo_login} onClick={toggleLogged} />


      <p className={styles.text_about}>
      <h1 className={styles.h1}>.about</h1>
      Sejamos francos: Bruce Wayne é um herdeiro que se propõe ao papel de justiceiro.
      Seu super poder é ser rico e disso derivam aparatos tecnológicos que o capacitam para combater o crime.
      Coadjuvante à sua trama, o insosso e austero Batman sempre favoreceu os vilões da trama, que ganharam destaque e predileção do público.
      A humanidade de Batman nos faz pensar sobre a possibilidade de desconstrução desse lugar tecnológico que sempre lhe pertenceu.
      Dentro das Indústrias Wayne, o grande gênio desenvolvedor é Lucius Fox.
      Responsável pela criação e manutenção do sistema de gestão e monitoramento do patrimônio de seu patrão, sendo a cidade de Gotham City parte desse inventário.
      O problema é que Batman vive preso ao passado e não se adapta a nenhuma mudança na interface do myWayne Software
      É possível que AppWayne apareça na documentação, já que seria o novo nome da aplicação. Mas como reclama o próprio Batman: "Gothan City ficou desprotegida por 3 dias por uma besteira de nome que eu não conseguia lembrar".
      O resultado é um app/software de gestão e monitoramento com tecnologia de ponta... boas práticas de código... e interface heterogênea de acordo com cada usuário e permissão. Para o Batman, obsoleta, retrô, praticamente preservada em formol desde a década de 70. Para Lucius, contemporânea e inventiva. Para Alfred, sóbria e minimalista. E, por fim, uma interface reservada aos vilões, que se aproveitaram de uma brecha de segurança no local storage utilizado pelo nosso demasiadamente humano herói.
      </p>
    </div>
  )
}

export default About
