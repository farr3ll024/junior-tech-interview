import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const ListDividers = ({ patient }) => {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <Divider />
      {Object.entries(patient).map(([description, value], idx) => {
        return (
          <ListItem button key={idx}>
            <ListItemText
              primary={`${description}: ${value ?? "Not Provided"}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListDividers;
