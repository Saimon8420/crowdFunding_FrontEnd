import "./Banner.css";
import logo from "../../assets/images/logo.svg";
import useScreenSize from "../../Hooks/useScreenSize";
import menuOpen from "../../assets/images/icon-hamburger.svg";
import menuClose from "../../assets/images/icon-close-menu.svg";
import masterCraftLogo from "../../assets/images/logo-mastercraft.svg"
import { useState } from "react";
import ButtonIcon from "../../assets/images/icon-bookmark.svg";
const Banner = ({ value }) => {
    const screenSize = useScreenSize();
    const [menu, setMenu] = useState(false);
    const [openModal, setOpenModal, bookMark, setBookMark, setOpenProjectModal] = value;
    return (
        <div className='bannerDiv'>
            <div className='nav'>
                <div className="logo">
                    <img src={logo} alt="crowdfunding" />
                </div>
                {/* Desktop */}
                {
                    screenSize.innerWidth > 577 &&
                    <div className='navigation'>
                        <a href="">About</a>
                        <a href="">Discover</a>
                        <a href="">Get Started</a>
                    </div>
                }
                {/* Mobile Menu */}
                {
                    screenSize.innerWidth < 577 && <div className="mobile-menu">
                        {
                            menu ? <img src={menuClose} alt="" onClick={() => setMenu(!menu)} /> : <img src={menuOpen} onClick={() => setMenu(!menu)} alt="" />
                        }
                    </div>
                }
            </div>
            {/* Mobile Navigation */}
            {
                menu && screenSize.innerWidth < 577 &&
                <div className='mobile-nav'>
                    <a href="">About</a>
                    <p></p>
                    <a href="">Discover</a>
                    <p></p>
                    <a href="">Get Started</a>
                </div>
            }

            <div className="title">
                <div className="titleLogo">
                    <img src={masterCraftLogo} alt="" />
                </div>
                <div className="titleInfo">
                    <h2>MasterCraft Bamboo Monitor Riser</h2>
                    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
                </div>
                <div className="titleBtnDiv">
                    <div>
                        <button onClick={() => setOpenProjectModal(true)} className="titleBtn">Back this project</button>
                    </div>

                    <div onClick={() => { setBookMark(!bookMark), setOpenModal(!openModal) }} className="bookmarkBtn">
                        <div className="bookmark">

                            <img src={ButtonIcon} alt="" />

                            <p className={!bookMark && "marked"}> {bookMark ? "Bookmarked" : "Bookmark"}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;