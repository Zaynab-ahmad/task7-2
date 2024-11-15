import './AboutHero.css';

export default function AboutHero({ title, sec }) {
  return (
    <div className="aboutHero position-relative">
      <img
        className="coverImg"
        src="/Images/breadcrumb.webp"
        alt="breadcrumb"
      />

      <div className="overlay"></div>

      <div className="content position-absolute d-flex flex-column text-center">
        <h3 className="fs-1">{title}</h3>
        <p>{sec}</p>
      </div>

      <img
        src="/Images/line-element.webp"
        alt="line-element"
        className="position-absolute"
        style={{ bottom: "0", right: "0", width: "300px" }}
      />
      <img
        src="/Images/element.webp"
        alt="element"
        className="position-absolute"
        style={{ bottom: "0", left: "7px" }}
      />
    </div>
  );
}

