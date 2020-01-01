import React from "react";
import Grid from "@material-ui/core/Grid";
import GameMaster from "./../components/GameMaster";

export default function Home({ history }) {
  return (
    <div style={{ height: "100vh" }}>
      <Grid container spacing={0} style={{ height: "100%", background: "red" }}>
        <GameMaster />
      </Grid>
    </div>
  );
}
