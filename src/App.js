import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
