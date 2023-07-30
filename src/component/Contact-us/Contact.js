import React from 'react'
import "./Contact.css"
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='contact'>
        <h3>Reach out to us:</h3>
        <div>
            <h4>Email</h4>
            <p>pragati.688643@gmail.com</p>
            <h4>WhatsApp</h4>
            <p>9329024974</p>
            <h4>Address</h4>
            <p>Juni Line, Bilaspur CG, 495001</p>
        </div>
    </div> 
  )
}

export default Contact