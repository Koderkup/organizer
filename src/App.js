import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CLOCK from "./components/CLOCK";
import "./App.css";
import moment from "moment";
import Monitor from "./components/Monitor";
import CalendarGrid from "./components/CalendarGrid";
import {
  ShadowWrapper,
  FormPositionWrapper,
  FormWrapper,
  EventTitle,
  ButtonsWrapper,
} from "./components/styled.components/styles";
import { eventCreate, eventDelete, eventUpdate } from "./redux/actions";

const totalDays = 42;

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const [events, setEvents] = useState([]);
  const [eventMessage, setEventMessage] = useState("");
  const [isShowForm, setShowForm] = useState(false);
  const [method, setMethod] = useState(null);
  const [dataEvent, setDataEvent] = useState(null);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  const eventList = useSelector((state) => {
    const { eventReducer } = state;
    return eventReducer.eventItems;
  });
  useEffect(() => {
    setEvents(eventList);
  }, [eventList]);
  const startDay = today.clone().startOf("month").startOf("week");

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    setToday(moment());
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  let startDateQuery = startDay.clone().format("X");
  let endDateQuery = startDay.clone().add(totalDays, "days").format("X");

  const openFormHandler = (methodName, dataTime, eventForUpdate, id) => {
    setDataEvent(dataTime);
    setEventMessage(eventForUpdate);
    setShowForm(true);
    setMethod(methodName);
    setId(id);
  };

  const cancelButtonHandler = () => {
    if (method === "Update") {
      dispatch(eventDelete(id));
    }
    setShowForm(false);
    setEventMessage(null);
  };

  const changeEventHandler = (text) => {
    setEventMessage(text);
  };

  const eventStoreHandler = () => {
    const data = dataEvent;
    if (method === "Create") {
      dispatch(eventCreate(eventMessage, id, data));
    } else {
      dispatch(eventUpdate(eventMessage, id, data));
    }
    setShowForm(false);
    setEventMessage(null);
  };

  return (
    <div className="App">
      <CLOCK />
      {isShowForm ? (
        <FormPositionWrapper>
          <FormWrapper>
            <EventTitle
              value={eventMessage}
              onChange={(e) => {
                changeEventHandler(e.target.value);
              }}
            />
            <ButtonsWrapper>
              <button onClick={cancelButtonHandler}>
                {method === "Create" ? "Cancel" : "Delete"}
              </button>
              <button onClick={eventStoreHandler}>{method}</button>
            </ButtonsWrapper>
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
      <ShadowWrapper>
        <Monitor
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
        />
        <CalendarGrid
          startDay={startDay}
          today={today}
          events={events}
          eventMessage={eventMessage}
          totalDays={totalDays}
          openFormHandler={openFormHandler}
        />
      </ShadowWrapper>
    </div>
  );
}

export default App;
