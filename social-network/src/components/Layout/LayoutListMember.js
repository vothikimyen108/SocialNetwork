import React from "react";

import LayoutListMemberStyles from "./LayoutListMemberStyles";
import { PeopleItem } from "../Members/PeopleItem";
export default function LayoutListMember(props) {
  const classes = LayoutListMemberStyles();
  const dataMember = [
    {
      id: 1,
      name: "Lê Phước",
      createJoin: "12 ngày trước",
    },
    {
      id: 2,
      name: "Lê Phước",
      createJoin: "12 ngày trước",
    },
    {
      id: 3,
      name: "Lê Phước",
      createJoin: "12 ngày trước",
    },
    {
      id: 4,
      name: "Lê Phước",
      createJoin: "12 ngày trước",
    },
    {
      id: 5,
      name: "Lê Phước",
      createJoin: "12 ngày trước",
    },
  ];
  return (
    <div className={classes.layout}>
      <h4>Thành viên mới</h4>
      {dataMember.map((item) => (
        <PeopleItem key={item.id} name={item.name} createJoin={item.createJoin}>
          {" "}
        </PeopleItem>
      ))}
    </div>
  );
}
