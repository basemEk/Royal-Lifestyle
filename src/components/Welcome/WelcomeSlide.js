import React from "react";

function WelcomeSlide({ image, header, body, footer }) {
  return (
    <div className="WelcomeSliderDiv">
      <div>
        <img src={image} className="personImage" alt="avatar" />
        <section className="sectionHead">
          <h1>{header}</h1>
        </section>
        <section>
          <article className="sectionParagraph">
            <p>
              {body}
            </p>
          </article>
          <article className="sectionParagraph">
            <h4>{footer}</h4>
          </article>
        </section>
      </div>
    </div>
  );
}

export default WelcomeSlide;
