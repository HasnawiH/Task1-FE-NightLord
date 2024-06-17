import ImgMixing from "../assets/img/mixing.png";
import ImgMenuCategory from "../assets/img/menu-category.png";

const ListCategory = [
    "Kombucha",
    "Cocktail",
    "Bottled Beer",
    "Shooters",
    "Premium Spirits",
    "Soft drink",
    "Tea",
    "Coffee",
    "Coffee Cocktail",
    "Traditional Alcohol",
]

const CategoryComponent = () => { 
    return (
        <div className="container-category" >
            <div style={{ width: "50%" }} >
                <img src={ImgMenuCategory} alt="" style={{ width: "8rem" }}/>
                <div>
                    <img src={ImgMixing} alt="" style={{ width: "23rem", marginTop: "1rem" }} />
                </div>
                <p style={{ width: "25rem" }}>Elevate Your Place with a Customized Beverage Selection. From Signature Cocktails to Premium Spirits, Create a Memorable Drink Menu That Wows Your Guests.</p>
            </div>
            <div className="container-select-cat">
                <h4 className="select-cat">Select category</h4>
                <div className="container-list-cat" >
                    <div style={{ width: "800px", textAlign: "center", }}>
                        {ListCategory.map((category: any, index) => (
                            <button className="item-list" key={index}>
                                {category}
                            </button>
                        ))}
                        <button className="item-list" style={{ border: "1px dashed #FFF" }} >
                            Add Custom Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryComponent