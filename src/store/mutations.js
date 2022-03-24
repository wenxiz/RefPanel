export default {
  changeHomeTeam (state, homeTeam) {
    const {name, logoUrl} = homeTeam
    state.homeTeam.name = name
    state.homeTeam.logoUrl = logoUrl
    try {
      localStorage.homeTeamName = name
      localStorage.homeTeamLogo = logoUrl
    } catch (e) {}
  },
  changeAwayTeam (state, awayTeam) {
    const {name, logoUrl} = awayTeam
    state.awayTeam.name = name
    state.awayTeam.logoUrl = logoUrl
    try {
      localStorage.awayTeamName = name
      localStorage.awayTeamLogo = logoUrl
    } catch (e) {}
  },
  changeScore (state, team, pts) {
    console.log('team', team, 'pts', pts)
  }
}
