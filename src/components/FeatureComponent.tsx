import ImgProfiling from "../assets/img/profiling.png";

const ListFeature = [
    "Roof Top",
    "VIP Lounge",
    "VIP Lounge",
    "Themed Nights",
    "Karaoke Nights",
    "LGBT",
    "Private Party Rooms:",
    "Roof Top",
    "Roof Top",
    "Indoor & Outdoor",
    "Smoke/Fog Effects",
    "Private Party Rooms",
    "Roof Top",
    "Roof Top",
    "Roof Top",
]

const FeatureComponent = () => {
    return (
        <div className="container-feature">
            <img src={ImgProfiling} alt="" />
            <p>Nightclub Features and Venue Detail</p>

            <div className="section-profiling">
                <div className="profiling">
                    {ListFeature.map((feature: any, index) => (
                        <button className="btn-feature" key={index}>
                            {feature}
                        </button>
                    ))}
                </div>
            </div>
            <p>You can change it later</p>
        </div>
    )
}

export default FeatureComponent