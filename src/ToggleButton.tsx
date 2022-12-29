import React from "react";

import "./ToggleButton.scss";

export type ToggleButtonProps = {
  text: string;
  defaultValue?: boolean;
  onToggle: (value: boolean) => void;
};
export default function ToggleButton(props: ToggleButtonProps) {
  const { text, onToggle, defaultValue } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      className={`toggle-button ${defaultValue ? "toggled" : ""}`}
      onClick={() => {
        onToggle(!defaultValue);
      }}
      onKeyPress={(ev) => {
        if (ev.code === "Enter" || ev.code === "Space") {
          onToggle(!defaultValue);
        }
      }}
    >
      {text}
    </div>
  );
}
