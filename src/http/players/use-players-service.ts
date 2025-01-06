import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { HTTPError } from "ky";
import { getPlayersService } from ".";
import { ErrorResponse } from "../types";
import { GetAllPlayersResponse } from "./types";

export function useGetPlayersService(
  options?: UseQueryOptions<GetAllPlayersResponse, HTTPError<ErrorResponse>>
) {
  return useQuery({
    queryKey: ["getPlayersService"],
    queryFn: async () => await getPlayersService(),
    ...options,
  });
}
