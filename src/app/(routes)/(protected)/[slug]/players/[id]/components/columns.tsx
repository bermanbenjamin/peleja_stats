"use client";

import { EventType } from "@/http/events/types";
import { Player } from "@/http/players/types";
import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";

interface Event {
  ID: string;
  createdAt: Date;
  type: EventType;
  playerId: string;
  player: Player;
  assistentId: string;
  assistent: Player;
}

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
    cell: ({ row }) => {
      return (
        <div className="truncate max-w-xs">{row.getValue("createdAt")}</div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => {
      return <div>{row.getValue("type")}</div>;
    },
  },
  {
    accessorKey: "assistent.name",
    header: "Assistente",
    cell: ({ row }) => {
      return <div>{row.getValue("assistent.name")}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: () => {
      return <div className="flex justify-end pr-2">Opções</div>;
    },
    cell: ({ row }) => {
      return (
        <div className="flex justify-end pr-4">
          <RowActions row={row} />
        </div>
      );
    },
  },
];
