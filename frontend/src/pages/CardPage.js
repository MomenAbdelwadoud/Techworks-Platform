import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import { ParticipantsContext } from "../context/ParticipantsContext";

import Grid from "@mui/material/Grid";

export default function CardPage() {
  const participants = React.useContext(ParticipantsContext);
  const card_list = participants.list;
  return (
    <div className="main">
      <Title title="All Participants" caption="Welcome back :)"></Title>
      <Grid container spacing={5} style={{ marginTop: "5px" }}>
        {card_list.map((card) => {
          return (
            <Grid item xs={4}>
              <Card
                data={card}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
