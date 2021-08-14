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
        <p className="header-name" id="ID">
          ID
        </p>
        <p className="header-name" id="title">
          Title
        </p>
        <p className="header-name" id="pub-date">
          Publish Date
        </p>
        <p className="header-name" id="last-update">
          Last Update
        </p>
        <p className="header-name" id="views">
          Views
        </p>
        <p className="header-name" id="visible">
          Visible
        </p>
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
              <div className="visible">
                <div className="slider">
                  <Slider isOn={record.isVisible} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
