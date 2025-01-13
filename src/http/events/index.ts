import { api } from "../api-client";
import { CreateEventRequest, GetEventsResponse } from "./types";

export async function getEventsByPlayerIdService(
  id: string
): Promise<GetEventsResponse> {
  return await api.get(`events/${id}`).json<GetEventsResponse>();
}

export async function createEventService(
  data: CreateEventRequest
): Promise<Event> {
  return await api
    .post("events", {
      body: JSON.stringify(data),
    })
    .json<Event>();
}
