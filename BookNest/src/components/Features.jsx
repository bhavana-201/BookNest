import { featureData } from "./featureData";
import "../styles/Home.css";
function Features(){
    return(
        <div className="features-container">
            { featureData.map((data) => (
                <div className="feature-card" key={data.id}>
                    <img src={data.iconPath} alt={data.alt}/>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
           ))}  

        </div>
    );
}

export default Features;