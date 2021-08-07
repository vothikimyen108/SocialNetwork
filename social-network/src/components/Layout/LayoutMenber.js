import React from "react";

import LayoutMenberStyles from "./LayoutMenberStyles";

export default function LayoutMenber() {
  const classes = LayoutMenberStyles();

  return (
    <div className={classes.layout}>
      <h1>30</h1>
      <p>Thành viên tham gia</p>
    </div>
  );
}
