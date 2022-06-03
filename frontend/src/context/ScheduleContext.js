import React, { createContext, useState } from "react";

export const ScheduleContext = createContext({
  today: true,
  list: [],
});

export default function ScheduleContextWrapper(props) {
  const [today, setToday] = useState(false);
  // Generate Order Data
  function createData(id, name, time, category, notes, task) {
    return { id, name, time, category, notes, task };
  }
  let rows = [
    createData(
      1,
      "Django",
      "16 May, 2022",
      "Programming",
      "some notes",
      "FizzBuzz"
    ),
    createData(
      2,
      "SQL",
      "17 May, 2022",
      "Data Analytics",
      "some notes",
      "group by"
    ),
    createData(
      3,
      "Content writing",
      "20 May, 2022",
      "Professional development",
      "some notes",
      ""
    ),
    createData(
      4,
      "Django",
      "13 May, 2022",
      "Programming",
      "some notes",
      "airport"
    ),
  ];
  let context = {
    today: today,
    list: rows,
  };

  return (
    <ScheduleContext.Provider value={context}>
      {props.children}
    </ScheduleContext.Provider>
  );
}
