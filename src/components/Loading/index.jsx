import React from "react";

import "./load.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="progresser">
        <div className="progresser__bar">
          <div className="progresser__bar-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
