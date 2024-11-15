import AboutCard from "../Cards/AboutCard/AboutCard";

import "./AboutTeam.css";
export default function AboutTeam() {
  return (
    <div className="p-5 exContainer">
      
      <div className="d-flex flex-wrap gap-2 justify-content-between">
        <AboutCard
          src="/Images/04.webp"
          name="Masirul Islam"
          role="web Designer"
        />
        <AboutCard
          src="/Images/05.webp"
          name="Masirul Islam"
          role="web Designer"
        />
        <AboutCard
          src="/Images/06.webp"
          name="Masirul Islam"
          role="web Designer"
        />
        <AboutCard
          src="/Images/07.webp"
          name="Masirul Islam"
          role="web Designer"
        />
      </div>
    </div>
  );
}
