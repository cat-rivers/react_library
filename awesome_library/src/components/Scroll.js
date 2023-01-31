import React from "react";

const Scroll = (props) => {
  return (
    <div style = {{ overflowY: "auto", height: "60vh" }}>{props.children}</div>
  );
};

export default Scroll;
