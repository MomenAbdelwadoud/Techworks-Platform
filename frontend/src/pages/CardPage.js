import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";

import Grid from "@mui/material/Grid";

export default function CardPage() {
  let card_list = [
    "Momen",
    "Hamdi",
    "Setay",
    "Sara",
    "Nihal",
    "someone",
    "someone",
  ];
  return (
    <div className="main">
      <Title title="All Participants" caption="Welcome back :)"></Title>
      <Grid container spacing={5} style={{ marginTop: "5px" }}>
        {card_list.map((card) => {
          return (
            <Grid item xs={3}>
              <Card name={card}></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
