import Logo from "../assets/img/logo.png";
import IconArrowLeft from "../assets/img/arrow-left.png";
import IconArrowDown from "../assets/img/arrow-down.png"
import IconNotif from "../assets/img/icon-notif.png";

const Navbar = ({ step, handleBack }: any) => {
    return (
        <div className="navbar">
            <div onClick={handleBack} style={{ width: "50%", display: "flex", alignItems: "center", cursor: "pointer" }}>
                <img src={IconArrowLeft} alt="arrow" style={{ marginRight: "5px" }} />
                {step > 0 ? "BACK" : "EXIT"}
            </div>
            <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ marginLeft: "-8rem" }}>
                    <img src={Logo} alt="logo" />
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                    <div style={{ padding: "8px", background: "#221F26", borderRadius: "7px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={IconNotif} alt="" style={{ marginRight: "5px" }} />
                        Sami El Hadery
                        <img src={IconArrowDown} alt="" style={{ marginLeft: "5px" }} />
                    </div>
                    <div style={{ padding: "8px", background: "#221F26", borderRadius: "7px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        En
                        <img src={IconArrowDown} alt="" style={{ marginLeft: "5px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar