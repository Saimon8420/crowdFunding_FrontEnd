import React from 'react';
import "./About.css";
const About = ({ value }) => {
    const [openModal, setOpenModal, bambooLeft, setBambooLeft, blackLeft, setBlackLeft, totalAmount, setTotalAmount, totalBackers, setTotalBackers] = value;
    return (
        <div className='aboutDiv'>
            <div className='aboutProject'>
                <h2>About This project</h2>
                <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            </div>
            <div className="category">
                <div className="eachCategory">
                    <div className="title-Rewards">
                        <h3>Bamboo Stand</h3>
                        <p className="pledge">Pledge $25 or more</p>
                    </div>
                    <div>
                        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                    </div>
                    <div className="title-Rewards">
                        <div className='leftCountDiv'>
                            <h3>{bambooLeft}</h3>
                            <p>left</p>
                        </div>
                        <div>
                            <button onClick={() => { setOpenModal(!openModal); if (bambooLeft > 0) { setBambooLeft(bambooLeft - 1), setTotalAmount(totalAmount + 25), setTotalBackers(totalBackers + 1) } }}>Select Reward</button>
                        </div>
                    </div>
                </div>
                <div className="eachCategory">
                    <div className="title-Rewards">
                        <h3>Black Edition Stand</h3>
                        <p className="pledge">Pledge $75 or more</p>
                    </div>
                    <div>
                        <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    </div>
                    <div className="title-Rewards">
                        <div className="leftCountDiv">
                            <h3>{blackLeft}</h3>
                            <p>left</p>
                        </div>
                        <div>
                            <button onClick={() => { setOpenModal(!openModal); if (blackLeft > 0) { setBlackLeft(blackLeft - 1), setTotalAmount(totalAmount + 75), setTotalBackers(totalBackers + 1) } }}>Select Reward</button>
                        </div>
                    </div>
                </div>
                <div className="eachCategory stockOut">
                    <div className="title-Rewards">
                        <h3>Mahogany Special Edition</h3>
                        <p className="pledge">Pledge $200 or more</p>
                    </div>
                    <div>
                        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    </div>
                    <div className="title-Rewards">
                        <div className="leftCountDiv">
                            <h3>0</h3>
                            <p>left</p>
                        </div>
                        <div>
                            <button>Out of Stock</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;