import { featureData } from "./featureData";
import "../styles/Home.css";
function Features(){
    return(
        <div className="features-container">
            { featureData.map((data, index) => (
                <div className="feature-card" key={index}>
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
           ))}  

        </div>
    );
}

export default Features;