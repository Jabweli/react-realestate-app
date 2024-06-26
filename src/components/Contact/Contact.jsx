import React from 'react'
import "./Contact.css"
import { contact } from '../../assets'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="ct-wrapper" id='contact'>

        <div className="paddings innerWidth flexCenter ct-container">

            <div className="flexColStart ct-left">
                <span className="orangeText">Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className="secondaryText">
                We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                </span>

                <div className="flexColStart contact-nodes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter node">
                            <div className="flexStart node-head">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <button className='button'>Call now</button>
                        </div>

                        <div className="flexColCenter node">
                            <div className="flexStart node-head">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <button className='button'>Call now</button>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter node">
                            <div className="flexStart node-head">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <button className='button'>Call now</button>
                        </div>

                        <div className="flexColCenter node">
                            <div className="flexStart node-head">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <button className='button'>Call now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flexEnd ct-right">
                <div className="img-container">
                    <img src={contact} alt="contact-image" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact