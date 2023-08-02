import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Attain Assistance & Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Contact Form</h4> <br />
            <div className="start">
              <input className="input-1 me-2" type='text' placeholder='Name' />
              <input className="" type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Description' rows='8'></textarea>
            <button className="p-3">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
