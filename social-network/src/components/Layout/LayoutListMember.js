import React from "react";

import LayoutListMemberStyles from "./LayoutListMemberStyles";
import { PeopleItem } from "../Members/PeopleItem";
export default function LayoutListMember(props) {
  const classes = LayoutListMemberStyles();

  return (
    <div className={classes.layout}>
      <h4>Thành viên mới</h4>
      {props.data.map((item) => (
        <PeopleItem key={item.id} name={item.name} createJoin={item.createJoin}>
          {" "}
        </PeopleItem>
      ))}
    </div>
  );
}
