import React from "react";
import Bubble from "../components/Bubble";
import Circle from "../components/Circle";
import Header from "../components/Header";
import Routes from "../routes/Routers";

const Home = () => {
  return (
    <div className="w-4/5 flex justify-around items-center">
      <div className="basis-1/4">
        <Header></Header>
      </div>
      <div className="basis-3/5">
        <Routes></Routes>
      </div>

      <Circle></Circle>
      <Bubble></Bubble>
    </div>
  );
};

export default Home;
