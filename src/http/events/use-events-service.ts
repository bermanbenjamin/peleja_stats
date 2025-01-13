import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { HTTPError } from "ky";
import { toast } from "sonner";
import { createEventService, getEventsByPlayerIdService } from ".";
import { ErrorResponse } from "../types";
import {
  CreateEventRequest,
  GetEventsByPlayerIdRequest,
  GetEventsResponse,
} from "./types";

export function useGetEventsByPlayerIdService(
  props: GetEventsByPlayerIdRequest,
  options?: UseQueryOptions<GetEventsResponse, HTTPError<ErrorResponse>>
) {
  return useQuery({
    queryKey: ["getEventsByPlayerIdService", props.playerId],
    queryFn: async () => await getEventsByPlayerIdService(props.playerId),
    ...options,
  });
}

export function useCreateEventService(
  options?: UseMutationOptions<
    Event,
    HTTPError<ErrorResponse>,
    CreateEventRequest
  >
) {
  return useMutation({
    mutationFn: async (request) => await createEventService(request),
    onSuccess: (event) => {
      console.log("Event created successfully:", event);
      toast.info("Event created successfully");
    },
    ...options,
  });
}
