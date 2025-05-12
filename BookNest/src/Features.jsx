import FeatureCard from "./FeatureCard";
import { featureData } from "./featureData";

function Features(){
    const items = featureData.map( (data, index) => (
        <FeatureCard key={index} title={data.title} desc={data.desc}/>
    ));
    return <section className="features-section">{items}</section>;
}

export default Features;