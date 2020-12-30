import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-radius: 2px;
`;

const Preloader = (props) => {

  return (
    <div className="sweet-loading">
      <BarLoader
        css={override}
        size={150}
        color={"dodgerblue"}
        loading={props.loading}
      />
    </div>
  );
}

export default Preloader;