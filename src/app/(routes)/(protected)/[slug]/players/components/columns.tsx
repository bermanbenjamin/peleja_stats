"use client";

import { Player } from "@/http/players/types";
import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => {
      return <div className="truncate max-w-xs">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "goals",
    header: "Gols",
    cell: ({ row }) => {
      const totalItems = row.getValue("goals");
      return <div>{totalItems?.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: "assists",
    header: "Assistências",
    cell: ({ row }) => {
      const totalItems = row.getValue("assists");
      return <div>{totalItems?.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: "yellow_cards",
    header: "Cartões Amarelos",
    cell: ({ row }) => {
      const totalItems = row.getValue("yellow_cards");
      return <div>{totalItems?.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: "red_cards",
    header: "Cartões Vermelhos",
    cell: ({ row }) => {
      const totalItems = row.getValue("red_cards");
      return <div>{totalItems?.toLocaleString()}</div>;
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
