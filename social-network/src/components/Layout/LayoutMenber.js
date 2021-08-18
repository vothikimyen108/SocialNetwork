import React, { useState } from "react";

import LayoutMenberStyles from "./LayoutMenberStyles";
import { useSpring, animated, config } from "react-spring";
export default function LayoutMenber() {
  const classes = LayoutMenberStyles();
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 30,
    delay: 500,
    onfig: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <div className={classes.layout}>
      <animated.h1>{number.to((n) => n.toFixed())}</animated.h1>
      <p>Thành viên tham gia</p>
    </div>
  );
}
