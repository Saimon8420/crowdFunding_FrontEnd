import { useState } from 'react';
import "./BackProjectModel.css"
import closeIcon from "../../assets/images/icon-close-menu.svg";
const BackProjectModel = ({ value, total }) => {
    const [openProjectModal, setOpenProjectModal, openModal, setOpenModal, setBookMark] = value;
    const [totalAmount, setTotalAmount, totalBackers, setTotalBackers, bambooLeft, setBambooLeft, blackLeft, setBlackLeft] = total;
    const [bambooStand, setBambooStand] = useState(25);
    const [blackStand, setBlackStand] = useState(75);
    // select
    const [selectNoRewards, setSelectNoRewards] = useState(false);
    const [selectBamboo, setSelectBamboo] = useState(false);
    const [selectBlack, setSelectBlack] = useState(false);
    return (
        <div className='backProjectDiv'>
            <div className='closeDiv' onClick={() => setOpenProjectModal(false)}>
                <img src={closeIcon} alt="" />
            </div>
            <h2>Back this project</h2>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <div className="BackCategory">

                {/* No Rewards */}
                <div className={`${selectNoRewards && "active"} eachBack`}>
                    <div className="BackEachCategory">
                        <div className="noRewards">
                            <input type="radio" name="" id="noRewardsCheck" checked={selectNoRewards} />
                            <h3 onClick={() => { setSelectNoRewards(true), setSelectBamboo(false), setSelectBlack(false) }}>Pledge with no reward</h3>
                        </div>
                        <div>
                            <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                        </div>
                        {selectNoRewards && <>
                            <hr />
                            <div className="BackTitle-Rewards BackTitleMobile">
                                <div className="pledgeInput noRewardsBtn">
                                    <div>
                                        <button onClick={() => { if (selectNoRewards === true) { setSelectNoRewards(false), setOpenModal(!openModal), setBookMark(true) } }}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </div>

                {/* Bamboo Stand */}
                <div className={`${selectBamboo && "active"} eachBack`}>
                    <div className="BackEachCategory">
                        <div className="BackTitle-Rewards">
                            <div className='titleRewards'>
                                <div className='titleWithSelect'>
                                    <input type="radio" name="" id="bambooCheck" checked={selectBamboo} />
                                    <h3 onClick={() => { setSelectBamboo(true), setSelectBlack(false), setSelectNoRewards(false) }}>Bamboo Stand</h3>
                                </div>
                                <p className="BackPledge">Pledge $25 or more</p>
                            </div>
                            <div className='BackLeftCountDiv'>
                                <h3>{bambooLeft}</h3>
                                <p>left</p>
                            </div>
                        </div>
                        <div>
                            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                        </div>
                        <div className='CountDivMobile'>
                            <h3>{bambooLeft}</h3>
                            <p>left</p>
                        </div>
                        {selectBamboo && <>
                            <hr />
                            <div className="BackTitle-Rewards BackTitleMobile">
                                <p>Enter your pledge</p>
                                <div className="pledgeInput">
                                    <div>
                                        <label className='dollarSign' htmlFor="number">$</label>
                                        <input type="number" name="" id="" min={25} value={bambooStand} onChange={(e) => {
                                            setBambooStand(e.target.value);
                                        }} />
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                            if (selectBamboo === true) {
                                                setSelectBamboo(false);
                                                setOpenModal(!openModal);
                                                setBookMark(true)
                                            }
                                            if (bambooLeft > 0) {
                                                setBambooLeft(bambooLeft - 1);
                                                setTotalBackers(totalBackers + 1);
                                                setTotalAmount(totalAmount + parseInt(bambooStand));
                                            }
                                        }}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </div>

                {/* Black Stand */}
                <div className={`${selectBlack && "active"} eachBack`}>
                    <div className="BackEachCategory">
                        <div className="BackTitle-Rewards">
                            <div className='titleRewards'>
                                <div className='titleWithSelect'>
                                    <input type="radio" name="" id="blackCheck" checked={selectBlack} />
                                    <h3 onClick={() => { setSelectBlack(true), setSelectBamboo(false), setSelectNoRewards(false) }}>Black Edition Stand</h3>
                                </div>

                                <p className="BackPledge">Pledge $75 or more</p>
                            </div>
                            <div className='BackLeftCountDiv'>
                                <h3>{blackLeft}</h3>
                                <p>left</p>
                            </div>
                        </div>
                        <div>
                            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                        </div>
                        <div className='CountDivMobile'>
                            <h3>{blackLeft}</h3>
                            <p>left</p>
                        </div>
                        {selectBlack && <>
                            <hr />
                            <div className="BackTitle-Rewards BackTitleMobile">
                                <div>
                                    <p>Enter your pledge</p>
                                </div>
                                <div className="pledgeInput">
                                    <div>
                                        <label className='dollarSign' htmlFor="number">$</label>
                                        <input type="number" name="" id="" min={75} value={blackStand} onChange={(e) => {
                                            setBlackStand(e.target.value);
                                        }} />
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                            if (selectBlack === true) {
                                                setSelectBlack(false),
                                                    setOpenModal(!openModal),
                                                    setBookMark(true)
                                            }
                                            if (bambooLeft > 0) {
                                                setBlackLeft(blackLeft - 1);
                                                setTotalBackers(totalBackers + 1);
                                                setTotalAmount(totalAmount + parseInt(blackStand));
                                            }
                                        }}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </div>

                {/* Mahogany Stock Out */}
                <div className="eachCategory stockOut">
                    <div className="BackTitle-Rewards">
                        <div className='titleRewards'>
                            <h3>Mahogany Special Edition</h3>
                            <p className="BackPledge">Pledge $200 or more</p>
                        </div>
                        <div className='BackLeftCountDiv'>
                            <h3>0</h3>
                            <p>left</p>
                        </div>
                    </div>
                    <div>
                        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    </div>
                    <div className='CountDivMobile'>
                        <h3>0</h3>
                        <p>left</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BackProjectModel;