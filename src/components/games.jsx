/**
 * Games page.
 */
import React from "react";
import Automaton from "./automaton";

const Games = () => {
  return (
    <div>
      <Automaton></Automaton>

      <article
        class="content-wrapper text-white"
        style={{ marginBottom: "0px" }}>
        <h1>Games</h1>

        <section>
          <h2 class="game-header">Dreamscape</h2>
          <div class="game-body">
            <iframe
              src="https://itch.io/embed/1875299"
              width="552"
              height="167"></iframe>
          </div>
        </section>

        <section>
          <h2 class="game-header">SpacePlatformShooting</h2>
          <div class="game-body">
            <iframe
              src="https://itch.io/embed/1366206?linkback=true"
              width="552"
              height="167"></iframe>
          </div>
        </section>

        <section>
          <h2 class="game-header">Consequences</h2>
          <div class="game-body">
            <iframe
              src="https://itch.io/embed/1831382?linkback=true"
              width="552"
              height="167"></iframe>
          </div>
        </section>
      </article>
      <div class="bg-rect"></div>
    </div>
  );
};

export default Games;
