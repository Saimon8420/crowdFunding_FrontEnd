import './ThanksModal.css';
import CheckIcon from "../../assets/images/icon-check.svg";
const ThanksModal = ({ value }) => {
    const [openModal, setOpenModal, bookMark, setBookMark, openProjectModal, setOpenProjectModal] = value;
    return (
        <div className="thanksModalDiv">
            <img src={CheckIcon} alt="" />
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button onClick={() => {
                setOpenModal(!openModal);
                setBookMark(!bookMark);
                if (openProjectModal) { setOpenProjectModal(false) }
            }}>Got it!</button>
        </div>
    );
};

export default ThanksModal;