import fill from "../images/fill.png";

export default function Content(item) {
    const props = item.item;
    console.log(props)
  return (
    <section className="content">
      <img src={props.img} alt="image" className="contentImg"></img>
      <div className="details">
        <div className="location">
          <img src={fill} alt="fill" className="fill" />
          <span className="country">{props.location}</span>
          <a href={props.maplink} className="maplink">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <span className="dateContainer">
          {props.start} - {props.end}
        </span>
        <span className="description">{props.description}</span>
      </div>
    </section>
  );
}
