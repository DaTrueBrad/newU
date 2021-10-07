import React from "react";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #FFA620;`

function Spinner(props) {
  // let [loading, setLoading] = useState(props.loading);

  return (
    <div className="sweet-loading">
      <DotLoader color={'#FFA620'} loading={props.loading} css={override} size={150} />
    </div>
  );
}

export default Spinner
