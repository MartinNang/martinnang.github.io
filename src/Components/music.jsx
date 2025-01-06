/**
 * Music page
 */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Music = () => {
  return (
    <div>
      <article class="content-wrapper">
        <h1>Music</h1>

        <Container>
          <section class="music-panel align-items-center">
            <Row>
              <Col>
                <h2>dreamtape</h2>
              </Col>
              <Col>
                <iframe
                  height="450"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1852827546&color=%23d828d9&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily:
                      "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: "100",
                  }}>
                  <a
                    href="https://soundcloud.com/user-0_0y"
                    title="Mad Ambassador"
                    target="_blank"
                    style={{
                      color: "#cccccc",
                      textDecoration: "none",
                    }}>
                    Mad Ambassador
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://soundcloud.com/user-0_0y/sets/dreamtape"
                    title="dreamtape"
                    target="_blank"
                    style={{
                      color: "#cccccc",
                      textDecoration: "none",
                    }}>
                    dreamtape
                  </a>
                </div>
              </Col>
            </Row>
          </section>

          <section class="music-panel align-items-center">
            <Row>
              <Col>
                <h2>noiseless</h2>
              </Col>
              <Col>
                <iframe
                  height="450"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1714863627&color=%23020202&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily:
                      "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: "100",
                  }}>
                  <a
                    href="https://soundcloud.com/user-0_0y"
                    title="Mad Ambassador"
                    target="_blank"
                    style={{
                      color: "#cccccc",
                      textDecoration: "none",
                    }}>
                    Mad Ambassador
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://soundcloud.com/user-0_0y/sets/noiseless"
                    title="noiseless"
                    target="_blank"
                    style={{
                      color: "#cccccc",
                      textDecoration: "none",
                    }}>
                    noiseless
                  </a>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </article>
    </div>
  );
};

export default Music;
