import { Player } from "../players/types";
import { ErrorResponse } from "../types";

type Event = {
  ID: string;
  createdAt: Date;
  type: EventType;
  playerId: string;
  player: Player;
  assistentId: string;
  assistent: Player;
};

export enum EventType {
  GOAL,
  ASSIST,
  DRIBBLE,
  DISARM,
}

export type GetEventsByPlayerIdRequest = {
  playerId: string;
};

export type CreateEventRequest = {
  type: string;
  playerId: string;
  assistentId?: string;
  matchId?: string;
};

export type GetEventsResponse = {
  data: Event[];
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
  };
  error: ErrorResponse | null;
  total: number;
};
