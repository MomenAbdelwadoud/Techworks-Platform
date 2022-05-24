import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Title from "../components/Title";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataGrid } from "@mui/x-data-grid";

import styles from "../styles/SchedulePage.module.css";

export default function SchedulePage() {
  // Generate Order Data
  function createData(id, name, date, type, category) {
    return { id, name, date, type, category };
  }
  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
  ];
  let rows = [
    createData(1, "Django", "16 May, 2022", "Session", "Programming"),
    createData(2, "SQL", "17 May, 2022", "Session", "Data Analytics"),
    createData(3, "Content writing", "20 May, 2022", "Session", "Session"),
    createData(4, "Django", "13 May, 2022", "Task", "Programming"),
  ];
  return (
    <>
      <main className="main">
        <Title title="Schedule" caption="Hello Momen"></Title>
        <div className={styles.table_container}>
          <DataGrid rows={rows} columns={columns} pageSize={5}></DataGrid>
        </div>
      </main>
    </>
  );
}
