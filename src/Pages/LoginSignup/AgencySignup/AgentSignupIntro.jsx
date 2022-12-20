import { Fragment } from "react";

export const AgentSignupIntro = ({
  bgImage,
  heading,
  introParagraph,
  divTop,
  paragraphMgTop,
}) => {
  return (
    <Fragment>
      <div
        className="agency-signup__img-container"
        style={{ marginTop: divTop }}
      >
        <div>
          {heading ? <h1>{heading}</h1> : null}
          {introParagraph ? (
            <p style={{ marginTop: paragraphMgTop }}>{introParagraph}</p>
          ) : null}
        </div>

        <img src={bgImage} alt="" />
      </div>
    </Fragment>
  );
};
