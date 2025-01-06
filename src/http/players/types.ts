import { ErrorResponse } from "../types";

export type Player = {
  id: string;
  name: string;
  goals: number;
  assists: number;
  dribbles: number;
  saves: number;
  yellowCards: number;
  redCards: number;
  createdAt: number;
};

export type GetAllPlayersResponse = {
  data: Player[];
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
  };
  error: ErrorResponse | null;
  total: number;
};
