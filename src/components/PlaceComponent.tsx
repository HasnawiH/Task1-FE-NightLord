import ImgShare from "../assets/img/share-place.png";

const Place = () => {
    return (
        <div className="container-place">
            <div style={{ width: "50%" }} >
                <img  src={ImgShare} alt="" style={{ width: "25rem" }}/>
                <p style={{ width: "25rem" }}>
                    Start by sharing essential details about your nightclub, including its name, location, and type. Whether you're a trendy dance club, an intimate lounge, or a lively bar, let guests know what sets your venue apart from the rest.
                </p>
            </div>
            <div className="container-information">
                <div className="title-information">Place Information</div>
                <div style={{ marginBottom: "1rem" }}>
                    <div>Your place name</div>
                    <input className="input-information" placeholder="Write your store name here" />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <div>Address</div>
                    <input className="input-information" placeholder="Click to find in map" />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <div>Category</div>
                    <input className="input-information" placeholder="Select category" />
                </div>

                <div className="section-input-email">
                    <div>
                        <div>Email</div>
                        <input className="input-information" style={{ width: "100%" }} placeholder="Email" />
                    </div>
                    <div>
                        <div>Phone</div>
                        <input className="input-information" style={{ width: "100%" }} placeholder="Phone Number" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place