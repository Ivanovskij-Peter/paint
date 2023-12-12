import React from "react";
import "../styles/toolbar.scss";
import toolState from "../store/toolState";

const Settings = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Line Width</label>
      <input
        onChange={(e) => toolState.setLineWidth(e.target.value)}
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        min={1}
        defaultValue={1}
        max={50}
      />
      <label htmlFor="stroke-color">Stroke Color</label>
      <input
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
        style={{ margin: "0 10px" }}
        id="stroke-color"
        type="color"
      />
    </div>
  );
};

export default Settings;
