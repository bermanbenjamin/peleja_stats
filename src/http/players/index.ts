import { api } from "../api-client";
import { GetAllPlayersResponse } from "./types";

export async function getPlayersService(): Promise<GetAllPlayersResponse> {
  return await api.get("players").json<GetAllPlayersResponse>();
}
