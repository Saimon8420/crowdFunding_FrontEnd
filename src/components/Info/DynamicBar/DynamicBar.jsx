import "./DynamicBar.css";

const DynamicBar = ({ value }) => {
    const [totalAmount, limitAmount] = value;
    const percentage = (totalAmount / limitAmount) * 100;

    return (
        <div className="dynamic-bar" title={`Limit amount: ${limitAmount}`}>
            <p

                style={{
                    backgroundColor: `var(--ModerateCyan)`,
                    width: `${percentage}%`,
                    margin: 0,
                    height: "6px",
                    padding: '3px',
                    color: 'white',
                    textAlign: 'center',
                }}
                title={`Total amount: ${totalAmount}`}
            >
            </p>
        </div>
    );
};

export default DynamicBar;
