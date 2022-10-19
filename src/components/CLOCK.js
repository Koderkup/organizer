import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { ClockWrapper } from "./styled.components/styles";

import styled from "styled-components";
function CLOCK() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div>
      <ClockWrapper>
        <Clock value={time} />
      </ClockWrapper>
    </div>
  );
}
export default CLOCK;
