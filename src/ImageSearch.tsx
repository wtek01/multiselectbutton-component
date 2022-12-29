import React, { useState } from "react";
import RecorderSites from "./RecorderSites";
import "./styles.css";
import moment from "moment";
import sitesMocks from "./sitesMocks";

interface SearchCriterias {
  startDate: moment.Moment | null;

  endDate: moment.Moment | null;

  recorderSites: string[];

  recorderZones: string[];
}

export default function ImageSearch(searchCriterias: SearchCriterias) {
  const [state, setState] = useState<SearchCriterias>(searchCriterias);
  const sitesList = sitesMocks
    .map((site) => site.name)
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className="App">
      <RecorderSites
        list={["Tous", ...sitesList.slice(0, 5)]}
        selected={state.recorderSites}
        onSelectedChange={(recorderSites) => {
          setState({
            ...state,
            recorderSites
          });
        }}
      />
    </div>
  );
}
