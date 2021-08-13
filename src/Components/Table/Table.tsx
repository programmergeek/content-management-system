import React from "react";
import { Slider } from "..";
import "./Table.css";

type Records = {
  records: {
    postID: number;
    postTitle: string;
    publishDate: string;
    lastUpdate: string;
    views: number;
    isVisible: boolean;
  }[];
};
export const Table: React.FC<Records> = ({ ...props }: Records) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <p className="header-name">ID</p>
        <p className="header-name">Title</p>
        <p className="header-name">Publish Date</p>
        <p className="header-name">Last Update</p>
        <p className="header-name">Views</p>
        <p className="header-name">Visible</p>
      </div>
      <div id="records">
        {props.records.map((record) => {
          return (
            <div className="record" key={record.postID}>
              <p className="id"> {record.postID} </p>
              <p className="title"> {record.postTitle} </p>
              <p className="pub-date"> {record.publishDate} </p>
              <p className="last-update"> {record.lastUpdate} </p>
              <p className="views"> {record.views} </p>
              <p className="visible">
                <div className="slider">
                  <Slider isOn={record.isVisible} />
                </div>
              </p>
              {console.log(props.records)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
