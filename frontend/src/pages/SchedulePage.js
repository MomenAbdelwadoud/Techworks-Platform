import React, { useState, useContext } from "react";

import Title from "../components/Title";
import { DataGrid } from "@mui/x-data-grid";

import styles from "../styles/SchedulePage.module.css";
import Lecture from "../components/Lecture";
import { ScheduleContext } from "../context/ScheduleContext";

export default function SchedulePage() {
  const [selection, setSelection] = useState();
  const [show, setShow] = useState(false);
  let schedule_context = useContext(ScheduleContext);
  let rows = schedule_context.list;

  const columns = [
    { field: "name", headerName: "Name", width: 400 },
    { field: "time", headerName: "Date", width: 300 },
    { field: "category", headerName: "Category", width: 300 },
    { field: "task", headerName: "Task", width: 300 },
  ];

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
            selectionModel={selection}
            onSelectionModelChange={(newSelectionModel) => {
              setSelection(newSelectionModel);
              console.log(newSelectionModel);
              setShow(true);
            }}
          ></DataGrid>
        </div>
        {selection !== "" ? (
          <Lecture
            name={selection.name}
            time={selection.time}
            notes={selection.notes}
            category={selection.category}
            task={selection.task}
            show={show}
          ></Lecture>
        ) : null}
      </main>
    </>
  );
}
