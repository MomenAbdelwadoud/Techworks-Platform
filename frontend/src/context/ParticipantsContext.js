import React, { createContext, useState } from "react";

// import React from "react";

let ParticipantsContext = createContext({ list: [] });

export default function ParticipantsContextWrapper(props) {
  const [list, setList] = useState([]);
  list = [
    {
      name: "Momen Abdelwadoud",
      group: "C",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
    {
      name: "Momen Abdelwadoud",
      group: "C",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
    {
      name: "Momen Abdelwadoud",
      group: "C",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
    {
      name: "Momen Abdelwadoud",
      group: "C",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
  ];
  let context = { list: list };

  return (
    <ParticipantsContext.Provider value={context}>
      {props.children}
    </ParticipantsContext.Provider>
  );
}
