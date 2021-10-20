import React from "react";
import $ from "jquery";

import "../css/Gallery.css";
import "../css/Photo.scss";

import Photo from "./Photo";
import dataPhotos from "./dataPhotos.json";

let popup = {
  init() {
    $(document).on("click", "figure", function () {
      popup.open($(this));
    });

    $(document)
      .on("click", ".popup img", () => {
        return false;
      })
      .on("click", ".popup", () => popup.close());
  },
  open(figure) {
    $(".gallery").addClass("pop");
    $('<div class="popup" />').appendTo($("body"));

    let fig = figure.clone().appendTo($(".popup"));
    $(
      '<div class="close"><svg><use xlink:href="#close"></use></svg></div>'
    ).appendTo(fig);

    let shadow = $('<div class="shadow" />').appendTo(fig);
    let src = $("img", fig).attr("src");
    shadow.css({ backgroundImage: "url(" + src + ")" });
    setTimeout(function () {
      $(".popup").addClass("pop");
    }, 250);
    $("body").addClass("scroll-hidden");
  },
  close() {
    $(".gallery, .popup").removeClass("pop");
    setTimeout(() => $(".popup").remove(), 100);
    $("body").removeClass("scroll-hidden");
  },
};

popup.init();

function Gallery() {
  let photos = dataPhotos["photos"].map((elem) => (
    <Photo item={elem} key={elem.id} />
  ));

  return (
    <section className="Gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Фото</h2>
        <div className="row gallery">{photos}</div>

        <svg className="hidden">
          <symbol id="close" viewBox="0 0 18 18">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#FFFFFF"
              d="M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507
			S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0
			l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507
			c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0
			s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z"
            />
          </symbol>
        </svg>
      </div>
    </section>
  );
}

export default Gallery;
