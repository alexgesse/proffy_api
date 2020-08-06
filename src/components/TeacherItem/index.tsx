import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'


function TeacherItem(){
  return (
    <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/42190704?s=460&u=c0e9d5b762e199c1d59d926c8670a4c0a5978897&v=4" alt="Eu"/>
                        <div>
                            <strong>Alex Gis</strong>
                            <span>T.I</span>
                        </div>
                    </header>
                    <p>
                        Curso CS GO: PRO
                        <br /> <br/>
                        Smokes estratégicas mirage
                        <br/>
                        Controle de spray.
                        <br/>
                        Noções de retake
                        <br/>
                        Dicas em clutchs
                        <br/>
                        Apresentando pixels inusitados
                        <br/>
                        Técnicas de "QUÉOTA?" e quickshot/no scope/flick
                        <br/>
                        Famosa "Caranguejada", movimentação e strafe!
                        <br/>
                        Vai ficar de fora dessa? Vem aprender o melhor do CS GO, com o melhor!
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whats Icon"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
  )
}

export default TeacherItem