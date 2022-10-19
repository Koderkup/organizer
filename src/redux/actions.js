import { EVENT_CREATE, EVENT_DELETE, EVENT_UPDATE } from "./types";
export function eventCreate(text, id, data) {
  return {
    type: EVENT_CREATE,
    payload: {
      text,
      id,
      data
    },
  };
}
export function eventDelete(id) {
  return {
    type: EVENT_DELETE,
    id,
  };
}
export function eventUpdate(text, id, data) {
  return {
    type: EVENT_UPDATE,
    payload: {
      text,
      id,
      data
    },
  };
}
