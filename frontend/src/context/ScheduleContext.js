import React, { createContext, useState } from "react";

export const ScheduleContext = createContext({
  today: true,
  list: [],
});

export default function ScheduleContextWrapper(props) {
  const [today, setToday] = useState(false);
  // Generate Order Data
  function createData(id, name, date, type, category) {
    return { id, name, date, type, category };
  }
  let rows = [
    createData(1, "Django", "16 May, 2022", "Session", "Programming"),
    createData(2, "SQL", "17 May, 2022", "Session", "Data Analytics"),
    createData(3, "Content writing", "20 May, 2022", "Session", "Session"),
    createData(4, "Django", "13 May, 2022", "Task", "Programming"),
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
