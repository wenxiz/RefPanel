export default {
  changeHomeTeam (state, homeTeam) {
    state.homeTeam.name = homeTeam
    try {
      localStorage.homeTeamName = homeTeam
    } catch (e) {}
  },
  changeAwayTeam (state, awayTeam) {
    state.awayTeam.name = awayTeam
    try {
      localStorage.awayTeamName = awayTeam
    } catch (e) {}
  }
}
