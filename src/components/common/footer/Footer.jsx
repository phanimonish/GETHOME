import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>      
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
              <h2 className="mt-3">Looking for properties?</h2>
              <p className="mt-4">get notified by the recently added properties and explore the localities to make your choice!</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className="subscribe">Contact</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li className="footer-box"> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 @GETHOME. Developed By K.P.M</span>
      </div>
    </>
  )
}

export default Footer
