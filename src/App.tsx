import "./styles.css";
import React from "react";
import ListGroup from "./ListGroup";

const rows = new Array(10000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 100));

const RowComp: React.FC = ({ number }: any) => <div>hello world {number}!</div>;
export default function App() {
  return (
    <div className="App">
      <ListGroup listItem={RowComp} maxHeight={400} rows={rows} />
    </div>
  );
}
