import { Player } from "@/http/players/types";
import { create } from "zustand";

type PlayerStore = {
  selectedPlayer: Player | null;
  selectPlayer: (player: Player) => void;
};

const playerStore = create<PlayerStore>((set) => ({
  selectedPlayer: null,
  selectPlayer: (player: Player) => {
    set({ selectedPlayer: player });
  },
}));

export default playerStore;
