import { api } from "../api-client";
import { GetAllPlayersResponse } from "./types";

export async function getPlayersService(): Promise<GetAllPlayersResponse> {
  const result = await api.get("players").json<GetAllPlayersResponse>();

  console.log(result);

  return result;
}
