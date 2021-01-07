import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
const Error = ({ mensaje }) => {
  return (
    <Fragment>
      <ReactCSSTransitionGroup
        transitionName="anim"
        transitionAppear={true}
        transitionAppearTimeout={350}
        transitionEnter={true}
        transitionLeave={true}
      >
        <p className="error-principal alert alert-danger text-center p-2">
          {mensaje}
        </p>
      </ReactCSSTransitionGroup>
    </Fragment>
  );
};

export default Error;
