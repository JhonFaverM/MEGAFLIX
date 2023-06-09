import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container'>
                <div className='box'>
                    <ul className='flex'>
                        <li>Terminos de uso</li>
                        <li>Politicas de privacidad</li>
                       
                    </ul>
                </div>
                <div className='box'>
                    <h3>Siguenos</h3>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-github'></i>
                    <i className='fab fa-instagram'></i>
                </div>
                <div className='box'>
                    <h3>Megaflix App</h3>
                    <div className='img flesSB'>
                        <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
                        <span>Google Play Store</span>
                    </div>
                    <p>© 2022 MEGAFLIX. All Rights Reserved. Duplication 
                            and copy of this is strictly prohibited.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
