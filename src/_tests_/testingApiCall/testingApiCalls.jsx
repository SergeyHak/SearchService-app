import React, { useEffect, useState } from "react";
import { FetchData } from "./request";

const TestingAPICalls = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  });

  return (
    <div>
      {data.map((item) => (
        <li key = {item.name}>{item.name}</li>
      ))}
    </div>
  );
};

export default TestingAPICalls;
