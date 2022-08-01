import React, { useEffect, useState } from "react";
import TableComponent from "./components/Table";
import { fetchPatients } from "./api/patients";

function App() {
  const [tableHeader, setTableHeader] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const results = await fetchPatients();
        if (!results || results?.length === 0)
          throw new Error("No patients found");
        createTableHeader(results[0]);
        createTableRows(results);
      } catch (err) {
        console.error("Something went wrong", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const createTableHeader = (patient) => {
    let colNames = [];
    for (const key of Object.keys(patient)) {
      colNames.push(key);
    }

    setTableHeader(colNames);
  };

  const createTableRows = (patients) => {
    let rows = [];
    for (const patient of patients) {
      let row = [];
      for (const value of Object.values(patient)) {
        row.push(value);
      }
      rows.push(row);
    }

    setTableRows(rows);
  };

  return (
    <div className="App">
      <div>
        <h1 style={{ textAlign: "center" }}>Patient Data!</h1>
        {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
        {tableHeader && tableRows && (
          <TableComponent tableHeader={tableHeader} tableRows={tableRows} />
        )}
      </div>
    </div>
  );
}

export default App;
