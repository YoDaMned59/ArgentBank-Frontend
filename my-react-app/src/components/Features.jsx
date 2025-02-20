import { featuresData } from "../data/featuresData";
import { FeatureItem } from "./FeatureItem";
import "../styles/features.css";

export const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  );
};
