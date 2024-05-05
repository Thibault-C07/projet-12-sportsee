export default class Activity {
  constructor({ userId, sessions }) {
    this.userID = userId
    this.sessions = sessions.map((session, index) => {
      return {
        kilogram: session.kilogram,
        calories: session.calories,
        day: (index + 1).toString(),
      }
    })
  }
}
