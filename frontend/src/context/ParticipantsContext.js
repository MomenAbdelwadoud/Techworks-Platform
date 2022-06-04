import React, { createContext, useState } from "react";

export const ParticipantsContext = createContext({ list: [] });

export default function ParticipantsContextWrapper(props) {
  const [list, setList] = useState([
    {
      name: "Momen Abdelwadoud",
      group: "C",
      phone: "0912345678",
      batch: 1,
      status: "student",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
    {
      name: "Momen Abdelwadoud",
      group: "C",
      phone: "0912345678",
      batch: 1,
      status: "student",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
    {
      name: "Momen Abdelwadoud",
      group: "C",
      phone: "0912345678",
      batch: 1,
      status: "student",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
    {
      name: "Momen Abdelwadoud",
      group: "C",
      phone: "0912345678",
      batch: 1,
      status: "student",
      email: "momenwadoudg@gmail.com",
      overall_score: 100,
      attendance_percentage: 86,
    },
  ]);
  let context = { list: list };

  return (
    <ParticipantsContext.Provider value={context}>
      {props.children}
    </ParticipantsContext.Provider>
  );
}
