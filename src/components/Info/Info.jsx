import "./Info.css";
import DynamicBar from "./DynamicBar/DynamicBar";
const Info = ({ value }) => {
    const [totalAmount, totalBackers] = value;
    let limitAmount = 100000;
    return (
        <div className="infoDiv">
            <div className='countDiv'>
                <div className="each border-right border-bottom">
                    <h2>${totalAmount.toLocaleString()}
                    </h2>
                    <p>of $100,000 backed</p>
                </div>
                <div className="each border-right border-bottom">
                    <h2>{totalBackers.toLocaleString()}</h2>
                    <p>total backers</p>
                </div>
                <div className="each">
                    <h2>56</h2>
                    <p>days left</p>
                </div>
            </div>
            {/* Dynamic bar */}
            <div>
                <DynamicBar value={[totalAmount, limitAmount]} />
            </div>
        </div>
    );
};

export default Info;