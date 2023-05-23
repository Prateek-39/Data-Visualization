import React from "react";
import Areachart from "./components/Areachart.jsx";
import Barchart from "./components/Barchart.jsx";
import Linechart from "./components/Linechart.jsx";
import Piechart from "./components/Piechart.jsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Main({ data }) {
  const generatePDF = () => {
    const input = document.getElementById("Graph"); // Replace 'screen' with the ID of the container you want to capture
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // 'p' for portrait orientation, 'mm' for millimeters, 'a4' for page size

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("page.pdf"); // Replace 'page.pdf' with the desired filename for the PDF
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <div id="Graph">
        <Barchart data={data} />
        <br />
        <Linechart data={data} />
        <br />
        <Areachart data={data} />
        <br />
        <Piechart data={data} />
        <br />
        <br />
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}

export default Main;
