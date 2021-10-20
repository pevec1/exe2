import React from "react";

function Photo(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <figure>
        <img src={props.item.src} alt={props.item.alt} />
        <figcaption>
          {props.item.title}
          <small>{props.item.label}</small>
        </figcaption>
      </figure>
    </div>
  );
}

export default Photo;
