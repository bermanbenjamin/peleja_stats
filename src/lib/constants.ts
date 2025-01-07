export const appRoutes = {
  signIn: "/auth/sign-in",
  players: (slug: string, playerId: string) => `/${slug}/players/${playerId}`,
};
