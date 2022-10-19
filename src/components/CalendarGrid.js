import React from "react";
import moment from "moment";
import { nanoid } from 'nanoid'
import {
  GridWrapper,
  CellWrapper,
  RowInCell,
  DayWrapper,
  CurrentDay,
  ShowDayWrapeer,
  EventListWrapper,
  EventItemWrapper,
} from "./styled.components/styles";

function CalendarGrid({
  startDay,
  today,
  events,
  eventMessage,
  totalDays,
  openFormHandler,
}) {
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");

  return (
    <div>
      <GridWrapper>
        {[...Array(7)].map((_, i) => (
          <CellWrapper key={i} isHeader isSelectedMonth={true}>
            <RowInCell justifyContent={"flex-end"} pr={1}>
              {moment()
                .day(i + 1)
                .format("ddd")}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>

      <GridWrapper>
        {daysMap.map((dayItem, i) => (
          <CellWrapper
            key={nanoid()}
            isWeekEnd={dayItem.day() === 6 || dayItem.day() === 0}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <RowInCell justifyContent={"flex-end"}>
              <ShowDayWrapeer>
                <DayWrapper
                  onDoubleClick={(e) =>
                    openFormHandler(
                      "Create",
                      dayItem.unix(),
                      "",
                      dayItem.unix()
                    )
                  }
                >
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format("D")}</CurrentDay>
                  ) : (
                    dayItem.format("D")
                  )}
                </DayWrapper>
              </ShowDayWrapeer>

              <EventListWrapper>
                {events
                  .filter((event) => {
                    return (
                      event.data >= dayItem.format("X") &&
                      event.data <= dayItem.clone().endOf("day").format("X")
                    );
                  })
                  .map((event) => (
                    <li key={nanoid()}>
                      <EventItemWrapper
                        onDoubleClick={() =>
                          openFormHandler(
                            "Update",
                            event.data,
                            event.text,
                            event.id
                          )
                        }
                      >
                        {event.text}
                      </EventItemWrapper>
                    </li>
                  ))}
              </EventListWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </div>
  );
}

export default CalendarGrid;
