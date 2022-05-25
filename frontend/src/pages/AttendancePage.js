import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../components/Title";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import styles from "../styles/AttendancePage.module.css";

export default function QrcodePage() {
  const [showAll, setShowAll] = useState(false);

  const handleChange = (event) => {
    setShowAll(event.target.checked);
  };

  // TODO: Apply colors to the rows
  // const attended = <span className={styles.yes}></span>;
  // const didnt_attend = <span className={styles.no}></span>;

  const participants = [
    { id: 1, name: "Momen", col1: "Yes", col2: "No" },
    { id: 2, name: "Hamdi" },
    { id: 3, name: "Nihal" },
    { id: 4, name: "Setay" },
    { id: 5, name: "Sara" },
  ];
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "col1", headerName: "Column 1", width: 140 },
    { field: "col2", headerName: "Column 2", width: 140 },
    { field: "col3", headerName: "Column 3", width: 140 },
    { field: "col4", headerName: "Column 4", width: 140 },
    { field: "col5", headerName: "Column 5", width: 140 },
    { field: "col6", headerName: "Column 6", width: 140 },
    { field: "col7", headerName: "Column 7", width: 140 },
    { field: "col8", headerName: "Column 8", width: 140 },
    { field: "col9", headerName: "Column 9", width: 140 },
    { field: "col10", headerName: "Column 10", width: 140 },
    { field: "col11", headerName: "Column 11", width: 140 },
    { field: "col12", headerName: "Column 12", width: 140 },
    { field: "col13", headerName: "Column 13", width: 140 },
    { field: "col14", headerName: "Column 14", width: 140 },
    { field: "col15", headerName: "Column 15", width: 140 },
    { field: "col16", headerName: "Column 16", width: 140 },
    { field: "col17", headerName: "Column 17", width: 140 },
    { field: "col18", headerName: "Column 18", width: 140 },
    { field: "col19", headerName: "Column 19", width: 140 },
    { field: "col20", headerName: "Column 20", width: 140 },
    { field: "col21", headerName: "Column 21", width: 140 },
    { field: "col22", headerName: "Column 22", width: 140 },
    { field: "col23", headerName: "Column 23", width: 140 },
    { field: "col24", headerName: "Column 24", width: 140 },
    { field: "col25", headerName: "Column 25", width: 140 },
  ];

  return (
    <div className="main">
      <Title
        title="Take Attendance"
        caption="Attendance is an easier process now ;)"
      ></Title>
      <FormControlLabel
        control={
          <Switch color="primary" checked={showAll} onChange={handleChange} />
        }
        label="Show all lectures"
      />
      <div className={styles.table_container}>
        <DataGrid
          rows={participants}
          columns={
            showAll ? columns : columns.slice(0, 1).concat(columns.slice(-5))
          }
          pageSize={10}
        ></DataGrid>
      </div>
    </div>
  );
}
