import { useState } from "react"
import "../assets/global.css";

import Navbar from "../components/Navbar";
import PlaceComponent from "../components/PlaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import CategoryComponent from "../components/CategoryComponent";

const ListNavigation = [
    "Nightclub Profile",
    "Featured",
    "Categories",
    "Beverages",
    "Table Information",
    "Operational Hour",
]

const Onboarding = () => {

    const [step, setStep] = useState<number>(0)

    const handleNext = () => {
        if (step < ListNavigation.length) {
            setStep(step + 1);
        }
    }

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
        else alert("Exit")
    }

    return (
        <>
            <Navbar step={step} handleBack={handleBack} />

            {/* Tab List */}
            <div className="tab-list-container" >
                {ListNavigation.map((nav: string, index) => {
                    let active = false;
                    if (index <= step) active = true;

                    return <div className={active ? "tab-active" : "tab-item"} key={index}>{nav}</div>
                })}
                <div onClick={handleNext} className="tab-next">NEXT</div>
            </div>

            {/* Tab Content */}
            {step === 0 && <PlaceComponent />}
            {step === 1 && <FeatureComponent />}
            {step === 2 && <CategoryComponent />}
        </>
    )
}

export default Onboarding