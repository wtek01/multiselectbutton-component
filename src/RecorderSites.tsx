import React from "react";
import ToggleButton from "./ToggleButton";

export type RecorderSitesProps = {
  list: string[];
  selected: string[];
  onSelectedChange: (selected: string[]) => void;
};
export default function RecorderSites(props: RecorderSitesProps) {
  const { list, selected, onSelectedChange } = props;

  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
      {list.map((site) => (
        <ToggleButton
          key={site}
          text={site}
          defaultValue={selected.includes(site)}
          onToggle={(toggled) => {
            let newSelected = [...selected];

            if (toggled && !newSelected.includes(site)) {
              newSelected.push(site);
            } else if (!toggled && newSelected.includes(site)) {
              newSelected = newSelected.filter((v) => v !== site);
            }

            onSelectedChange(newSelected);
          }}
        />
      ))}
    </div>
  );
}
