"use client";
import { PageContent } from "@/components/page-content/page";
import { PageWrapper } from "@/components/page-content/page-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetPlayersService } from "@/http/players/use-players-service";
import { useParams } from "next/navigation";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export default function PlayersPageClient() {
  const { data: players, isLoading } = useGetPlayersService();
  const { slug } = useParams();

  // Handle undefined slug or players
  const pageTitle = slug ? `Jogadores - ${formatSlug(slug)}` : "Jogadores";

  return (
    <PageContent title={pageTitle}>
      <PageWrapper>
        <div className="flex flex-wrap gap-y-4 items-center space-x-6 text-xs mb-4">
          {isLoading ? (
            <Skeleton className="w-20 h-6 rounded-md" />
          ) : (
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-md flex space-x-4 py-1 px-2">
              <span className="font-medium uppercase">Total</span>
              <span className="font-light">
                {players == null ? 0 : players.total}
              </span>
            </div>
          )}
        </div>

        {isLoading ? (
          <Skeleton className="h-96 rounded-md w-full" />
        ) : (
          <DataTable columns={columns} data={players?.data || []} />
        )}
      </PageWrapper>
    </PageContent>
  );
}
function formatSlug(slug: string | string[]) {
  return String(slug).charAt(0).toUpperCase() + String(slug).slice(1);
}
