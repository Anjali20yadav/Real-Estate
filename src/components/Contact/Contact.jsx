import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left*/}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            we are always ready to help by providing the best service to you.we
            believe a good place to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/*first row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">099 678 456</span>
                  </div>
                </div>
                <div className="flexCenter button">call now</div>
              </div>
               <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">chat</span>
                    <span className="secondaryText">099 678 456</span>
                  </div>
                </div>
                <div className="flexCenter button">chat now</div>
              </div>
            </div>
             <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> video call</span>
                    <span className="secondaryText">099 678 456</span>
                  </div>
                </div>
                <div className="flexCenter button">video call now</div>
              </div>
               <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">099 678 456</span>
                  </div>
                </div>
                <div className="flexCenter button">message now</div>
              </div>
            </div>
          </div>
        </div>
        {/*right*/}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
