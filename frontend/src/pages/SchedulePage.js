import React, { useState, useContext } from "react";

import Title from "../components/Title";
import { DataGrid } from "@mui/x-data-grid";

import styles from "../styles/SchedulePage.module.css";
import Lecture from "../components/Lecture";
import { ScheduleContext } from "../context/ScheduleContext";

export default function SchedulePage() {
  const [selection, setSelection] = useState([]);
  let schedule_context = useContext(ScheduleContext);
  let rows = schedule_context.list;

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
  ];

  const [selectedRow, setSelectedRow] = useState({});

  return (
    <>
      <main className="main">
        {/* TODO: Add button */}
        <Title title="Schedule" caption="Hello Momen"></Title>
        <div className={styles.table_container}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            isRowSelectable={(params) => params.row.type !== "Task"}
            selectionModel={selection}
            onSelectionModelChange={(newSelectionModel) => {
              setSelection(newSelectionModel);
              console.log(newSelectionModel);
            }}
          ></DataGrid>
        </div>
        <Lecture
          name={selectedRow.name}
          time={selectedRow.time}
          data={selectedRow.data}
        ></Lecture>
      </main>
    </>
  );
}
