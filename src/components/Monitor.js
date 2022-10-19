import React from "react";
import {
  MonitorWrapper,
  TextWrapper,
  ButtonWrapper,
} from "./styled.components/styles";
function Monitor({today, prevHandler, nextHandler, todayHandler}) {
  return (
    <div>
      <MonitorWrapper>
        <div>
          <TextWrapper>
            <b>{today.format("MMMM")}</b>
          </TextWrapper>
          <TextWrapper>{today.format("YYYY")}</TextWrapper>
        </div>
        <div>
          <ButtonWrapper onClick={prevHandler}>&lt;&lt;</ButtonWrapper>
          <ButtonWrapper onClick={todayHandler}>Today</ButtonWrapper>
          <ButtonWrapper onClick={nextHandler}>&gt;&gt;</ButtonWrapper>
        </div>
      </MonitorWrapper>
    </div>
  );
}

export default Monitor;
