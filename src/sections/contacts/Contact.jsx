import React, { useRef, useEffect } from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        emailjs.sendForm('service_b4s6ixg', 'template_1541ek9', form.current, {
          publicKey: 'yT_-pDVTrVsOdNtN_',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
          alert("Message send succesfully")
        );
    };
    
  return (
    <section id='contact'>
        <div className="contact">
            <h2 className='section_heading'>contact me</h2>
            <div className="contacts">
                <div className="contact_form">
                    <form ref={form} onSubmit={sendEmail} action="communication" className='form'>
                        <input id='fullNme' className='inputField' type="text" name='name' placeholder='Type your name' required />
                        <input id='email_id' className='inputField' type="email" name='email' placeholder='Type your email' required />
                        {/* <input id='suject' className='inputField' type="text" name='subject' placeholder='Subject'/> */}
                        <textarea className='inputField' name="message" id="areaField" spellCheck="false"  placeholder='Comments' rows="7"></textarea>
                        <button type='submit' className='sandBtn'>Sand message</button>
                    </form>
                </div>
                <div className="contact_icons">
                    <div className="contact_icon_part">
                        {/* ===================Email===================== */}
                        <div className="contact_links">
                            <div className="icon_wrapper">
                                <a href="#" className='email_icons'>
                                    <MdOutlineMail className='contact_icon'/>
                                </a>
                            </div>
                            <h3>Email</h3>
                            <h5>
                                <a href="mailto:emnos124@gmail.com" target="_blank" className='contact_link text_trans'>emnos124@gmail.com</a>
                            </h5>
                        </div>
                        {/* ===================Messenger===================== */}
                        <div className="contact_links">
                            <div className="icon_wrapper">
                                <a href="#" className='email_icons'>
                                    <RiMessengerLine className='contact_icon'/>
                                </a>
                            </div>
                            <h3>Messenger</h3>
                            <h5><a href="#" className='contact_link messenger'>Md Nuruddin Osman Sumon</a></h5>
                        </div>
                    </div>
                    <div className="contact_icon_part">
                        {/* ===================Telegram===================== */}
                        <div className="contact_links">
                            <div className="icon_wrapper">
                                <a href="#" className='email_icons'>
                                    <PiTelegramLogoLight className='contact_icon'/>
                                </a>
                            </div>
                            <h3>Telegram</h3>
                            <h5><a href="#" className='contact_link'>@Sumon2121</a></h5>
                        </div>
                        {/* ===================Twitter===================== */}
                        <div className="contact_links">
                            <div className="icon_wrapper">
                                <a href="#" className='email_icons'>
                                    <FaXTwitter className='contact_icon'/>
                                </a>
                            </div>
                            <h3>Twitter</h3>
                            <h5><a href="#" className='contact_link'>@NuruddinDev</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact