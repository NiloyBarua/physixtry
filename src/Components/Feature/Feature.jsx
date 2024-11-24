import Scch from "../SCCH/Scch";


const Feature = ({ feature }) => {
    const { feature_id, feature_name, feature_img, feature_details } = feature;
    console.log(feature_id);
    

    if (!feature) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <section>
            <div className="card card-compact  w-96 border h-full">
                <figure>
                    <img
                        src={feature_img}
                       />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{feature_name}</h2>
                    <p>{feature_details}</p>
                </div>
            </div>

          
        </section>
    );
};

export default Feature;