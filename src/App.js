import { useState } from "react";
import "./App.css";
import Form from "./Form";
// import Form from "./Form";
import Main from "./Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const data = [
    { name: "Prateek", value: 500 },
    { name: "Sneh", value: 400 },
    { name: "Shreyansh", value: 300 },
    { name: "Swapnil", value: 600 },
    { name: "Shubham", value: 700 },
  ];

  const [graphData, setGraphData] = useState(data);

  const getData = (datas) => {
    console.log(datas);
    // setGraphData([...graphData, data]);
    setGraphData((graphData) => [...graphData, datas]);
  };

  return (
    <div className="App">
      <Header />

      <Form getData={getData} />

      {/* //////////////// */}

      <Main data={graphData} />

      {/* ///////////////////// */}

      <Footer />
    </div>
  );
}

export default App;
