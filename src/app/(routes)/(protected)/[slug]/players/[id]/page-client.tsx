"use client";

import { PageContent } from "@/components/page-content/page";
import { PageWrapper } from "@/components/page-content/page-wrapper";
import playerStore from "@/store/player-store";

export default function PlayerPageClient() {
  const player = playerStore((state) => state.selectedPlayer); // Subscribe to state

  if (!player) {
    return <p>Carregando...</p>;
  }

  return (
    <PageContent title={player.name}>
      <PageWrapper>
        <h1>Detalhes do Jogador</h1>
        <p>Nome: {player.name}</p>
      </PageWrapper>
    </PageContent>
  );
}
