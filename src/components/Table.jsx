import React, { useState } from "react";

import CellModal from "./Modal";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableComponent = ({ tableHeader, tableRows }) => {
  const [open, setOpen] = useState(false);
  const [patientId, setPatientId] = useState();
  const handleClose = () => setOpen(false);

  const handleRowClick = (patientId) => {
    setPatientId(patientId);
    setOpen(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((header, idx) => (
                <TableCell key={`${idx}-${header}`}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, idx) => (
              <TableRow key={idx} onClick={() => handleRowClick(row[0])}>
                {row.map((cell, idx) => (
                  <TableCell key={`${idx}-${cell}`}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <CellModal
          patientId={patientId}
          handleClose={handleClose}
          open={open}
        />
      )}
    </>
  );
};

export default TableComponent;
