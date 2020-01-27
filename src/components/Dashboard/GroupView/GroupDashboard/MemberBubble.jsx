import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const MemberBubble = ({ member }) => {
  return (
    <ListItem>
      <ListItemText primary={member.user.firstName} secondary={member.role} />
    </ListItem>
  );
};

export default MemberBubble;
