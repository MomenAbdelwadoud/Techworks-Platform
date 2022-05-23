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
  function createData(name, date, type, category) {
    return { name, date, type, category };
  }

  const rows = [
    createData("Django", "16 May, 2022", "Session", "Programming"),
    createData("SQL", "17 May, 2022", "Session", "Data Analytics"),
    createData("Content writing", "20 May, 2022", "Session", "Session"),
    createData("Django", "13 May, 2022", "Task", "Programming"),
  ];
  return (
    <>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <main className="main">
        <Title title="Schedule" caption="Hello Momen"></Title>
        <div className={styles.table_container}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
