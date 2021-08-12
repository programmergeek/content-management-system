import React from "react";
import "./App.css";
import { Table } from "./Components";

const data = {
  records: [
    {
      postID: 0,
      postTitle: "Test Title 1",
      publishDate: "12/12/2015",
      lastUpdate: "05/02/2016",
      views: 125,
      isVisible: true,
    },
    {
      postID: 1,
      postTitle: "Test Title 2",
      publishDate: "01/10/2016",
      lastUpdate: "03/13/2016",
      views: 15,
      isVisible: true,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Table records={data.records} />
    </div>
  );
};

export default App;
