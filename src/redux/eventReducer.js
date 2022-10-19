import { EVENT_CREATE, EVENT_DELETE, EVENT_UPDATE } from "./types";

const initialState = {
  eventItems: [],
};

export const eventReducer = (state = initialState, action) => {
  const { eventItems } = state;

  switch (action.type) {
    case EVENT_CREATE:
      return {
        ...state,
        eventItems: [...state.eventItems, action.payload],
      };

    case EVENT_DELETE:
      return (() => {
        const { id } = action;
        const itemIndex = eventItems.findIndex((res) => res.id === id);
        const nextEvents = [
          ...eventItems.slice(0, itemIndex),
          ...eventItems.slice(itemIndex + 1),
        ];
        return {
          ...state,
          eventItems: nextEvents,
        };
      })();

    case EVENT_UPDATE:
      const { payload } = action;

      const itemIndex = eventItems.findIndex((res) => res.id === payload.id);

      const nextEvents = [
        ...eventItems.slice(0, itemIndex),
        payload,
        ...eventItems.slice(itemIndex + 1),
      ];

      return {
        ...state,
        eventItems: nextEvents,
      };
    default:
      return state;
  }
};
