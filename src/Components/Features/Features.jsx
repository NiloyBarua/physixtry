import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";
import Scch from "../SCCH/Scch";


const Features = () => {
    const [features,setFeatures] = useState([])
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data.features))
            .catch(error => console.error('Error fetching features.json:', error));
    }, []);
    

    if (!features) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div className="pt-20  bg-blue-950 ">
            <h1 className="md:text-6xl text-4xl my-10 text-center text-white">কোর্সে যা কিছু থাকছে🔥</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-10 mt-24">
       {
                features.map(feature => <Feature key={feature.feature_id} feature = {feature}></Feature>)
            }
       </div>
     
     <div className="bg-white">
     <h1 className="text-center pt-20 text-black text-3xl md:text-5xl mt-32 font-extrabold">Biggest Surprise Of The Course</h1>
     <Scch></Scch>
     </div>
        </div>
    );
};

export default Features;