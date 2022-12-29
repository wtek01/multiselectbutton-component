import React from "react";
import ImageSearch from "./ImageSearch";

import moment from "moment";

function App() {
  const searchCriterias = {
    startDate: moment(),
    endDate: moment(),
    recorderSites: [],
    recorderZones: []
  };

  return <ImageSearch {...searchCriterias} />;
}

export default App;
