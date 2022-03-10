import React from "react";
import Card from "./Card";

function Cards() {
  const result: any = [];
  const element = () => {
    for (var i = 0; i < 10; i++) result.push(<Card />);
    return result;
  };
  return <div className="card-columns">{element()}</div>;
}

export default Cards;
