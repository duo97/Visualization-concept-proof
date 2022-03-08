import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Scene from "./Scene";
import reportWebVitals from "./reportWebVitals";
// import { Container, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="overlay d-flex justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3">
        <Form.Group className="mb-3  d-flex flex-row  align-items-center">
          <Container className="range">
            <Form.Label>Density</Form.Label>
            <Form.Range />
          </Container>
          <Container className="range">
            <Form.Label>Density</Form.Label>
            <Form.Range />
          </Container>
          <Container className="range">
            <Form.Label>Density</Form.Label>
            <Form.Range />
          </Container>
        </Form.Group>
      </Form>
    </div> */}
    <Scene />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
