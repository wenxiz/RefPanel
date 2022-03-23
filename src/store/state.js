let defaultHomeTeam = 'Miami Heat'
let defaultAwayTeam = 'Los Angeles Lakers'

try {
  if (localStorage.homeTeamName) {
    defaultHomeTeam = localStorage.homeTeamName
  }
  if (localStorage.awayTeamName) {
    defaultAwayTeam = localStorage.awayTeamName
  }
} catch (e) {}

export default {
  homeTeam: {
    name: defaultHomeTeam,
    score: 0,
    logoUrl: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/baike/g=0;w=268/sign=3cc44a4e3af33a878e6d0511b161220e/34fae6cd7b899e51e64ef36a42a7d933c9950d88.jpg'
  },
  awayTeam: {
    name: defaultAwayTeam,
    score: 0,
    logoUrl: 'https://img0.baidu.com/it/u=1966218152,3607118776&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=300'
  }
}
