import { Icons } from "@/components/icons";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Player } from "@/http/players/types";
import { appRoutes } from "@/lib/constants";
import playerStore from "@/store/player-store";
import type { Row } from "@tanstack/react-table";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DeletePlayerDialog } from "./delete-dialog";

type RowActionsProps<TData> = {
  row: Row<TData>;
};

export function RowActions<TData>({ row }: RowActionsProps<TData>) {
  const props = row.original as Player;
  const playerId = props.ID;
  const { slug } = useParams();
  const selectPlayer = playerStore((state) => state.selectPlayer);

  const handleSelectPlayer = () => {
    selectPlayer(props);
  };

  return (
    <AlertDialog>
      <div className="flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Ações da linha">
              <Icons.verticalEllipsis className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-44">
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="cursor-pointer"
                asChild
                onClick={handleSelectPlayer}
              >
                <Link href={appRoutes.players(slug, playerId)}>
                  Ver Detalhes
                  <DropdownMenuShortcut>
                    <Icons.moveUpRight className="size-4 mr-2" />
                  </DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>

              <AlertDialogTrigger asChild>
                <DropdownMenuItem className="cursor-pointer flex justify-between text-rose-500">
                  Remover
                  <Icons.delete className="size-4" />
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DeletePlayerDialog playerId={playerId} />
    </AlertDialog>
  );
}
