import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Hand, { CondensedHand } from "./Hand";
import { GameContext } from "./GameMaster";
import "./../styles/Board.css";

export default function Board() {
  const [gameState, functions] = useContext(GameContext);

  useEffect(() => {
    functions.deal();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={0}>
      {/* player2 */}
      <Grid
        className="player2"
        container
        item
        xs={2}
        alignContent="center"
        justify="center"
      >
        <CondensedHand values={gameState.player2} />
      </Grid>
      <Grid container item xs={8} style={{ background: "blue" }}>
        {/* player3 */}
        <Grid
          container
          item
          xs={12}
          className="player3"
          alignContent="center"
          justify="center"
        >
          <CondensedHand values={gameState.player3} horizontal />
        </Grid>
        {/* in play */}
        <Grid
          container
          item
          xs={12}
          alignContent="center"
          justify="center"
          className="inPlay"
        >
          {/* <Hand show values={gameState.inPlay} /> */}
        </Grid>
        {/* player1 */}
        <Grid
          container
          item
          xs={12}
          className="player player1"
          alignContent="center"
          justify="center"
        >
          <div>
            <div>
              <Grid container spacing={0} justify="center">
                <Grid item>
                  <Hand
                    values={gameState.player1}
                    cardActions={functions}
                    show
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* player4 */}
      <Grid container item xs={2} alignContent="center" justify="center">
        <CondensedHand values={gameState.player4} flip />
      </Grid>
    </Grid>
  );
}
