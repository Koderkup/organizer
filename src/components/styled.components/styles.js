import styled from "styled-components";

export const ClockWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 16px;
  width: 150px;
  height: 150px;
  margin: 40px auto;
  padding: 0;
  border: 1px solid #e6b23b;
  border-radius: 50%;
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: #c1c1c1;
  opacity: 80%;
  border: 1px solid #c1c1c1;
`;

export const CellWrapper = styled.div`
  background-color: ${(props) => (props.isWeekEnd ? "#0000B4" : "#00072B")};
  min-width: 140px;
  min-height: ${(props) => (props.isHeader ? 40 : 80)}px;
  color: ${(props) => (props.isSelectedMonth ? "white" : "gray")};
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`};
`;

export const ShowDayWrapeer = styled("div")`
  display: flex;
  justify-content: flex-end;
`;
export const DayWrapper = styled.div`
  display: flex;
  width: 33px;
  height: 33px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ShadowWrapper = styled("div")`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1816a8, 8px 20px 6px #1816a8;
`;

export const MonitorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const TextWrapper = styled("span")`
  font-size: 32px;
  margin: 0 8px;
  color: #9c9c9d;
`;
export const ButtonWrapper = styled.button`
  border: unset;
  display: inline-block;
  background-color: #082368;
  height: 20px;
  border-radius: 4px;
  color: #9c9c9d;
  text-align: center;
  font-size: 20px;
  height: 30px;
  margin: 1px;
  font-weight: bold;
  cursor: pointer;
`;

export const CurrentDay = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f00;
  border-radius: 50%;
`;
export const EventListWrapper = styled("ul")`
  margin: unset;
  list-style-position: inside;
  padding-left: 4px;
`;

export const EventItemWrapper = styled("button")`
  position: relative;
  left: -14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 114px;
  border: unset;
  background: unset;
  color: wheat;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;
export const FormPositionWrapper = styled("div")`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormWrapper = styled(ShadowWrapper)`
  width: 200px;
  box-shadow: unset;
  background-color: #1e1f21;
  color: #dddddd;
`;

export const EventTitle = styled("input")`
  padding: 4px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
`;

export const ButtonsWrapper= styled("div")`
padding: 8px 14px;
display: flex;
justify-content: flex-end;
`
