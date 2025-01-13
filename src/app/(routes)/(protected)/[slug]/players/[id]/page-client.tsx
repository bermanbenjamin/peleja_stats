"use client";

import { PageContent } from "@/components/page-content/page";
import { PageWrapper } from "@/components/page-content/page-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetEventsByPlayerIdService } from "@/http/events/use-events-service";
import playerStore from "@/store/player-store";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export default function PlayerPageClient() {
  const player = playerStore((state) => state.selectedPlayer);

  // Handle the case where the player is not yet available
  if (!player) {
    return <p>Carregando...</p>;
  }

  const { data: response, isLoading } = useGetEventsByPlayerIdService({
    playerId: player.ID,
  });

  return (
    <PageContent title={player.name}>
      <PageWrapper>
        <h1>Detalhes do Jogador</h1>
        <p>Nome: {player.name}</p> {/* Show player's name instead of ID */}
        {/* Handle loading and error states */}
        {isLoading ? (
          <Skeleton className="h-96 rounded-md w-full" />
        ) : (
          <DataTable columns={columns} data={response?.data || []} />
        )}
      </PageWrapper>
    </PageContent>
  );
}
