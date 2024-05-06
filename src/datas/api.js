import { fetchData } from './utils/fetch.js'
import UserInfo from './models/User.js'
import Activity from './models/Activity.js'
import Performance from './models/Performance.js'
import Average from './models/Average.js'
import User from './user.json'
import UserActivity from './user_activity.json'
import UserPerformances from './user_performance.json'
import UserAverageSession from './user_average-sessions.json'

const BASE_URL = 'http://localhost:3001'
const USE_MOCKED_DATA = false

// export const getUserInfo = async (userId) => {
//   if (USE_MOCKED_DATA) {
//     return User.data
//   }
//   const data = await fetchData(`${BASE_URL}/user/${userId}`)

//   const user = new UserInfo(data)
//   return user
// }
export const getUserInfo = async (userId) => {
  let userData
  let error = null

  try {
    if (USE_MOCKED_DATA) {
      userData = User.data
    } else {
      const data = await fetchData(`${BASE_URL}/user/${userId}`)
      if (!data) {
        throw new Error('User data is undefined')
      }
      userData = new UserInfo(data)
    }
  } catch (err) {
    error = err.message
  }

  return { userData, error }
}

export const getUserActivity = async (userId) => {
  if (USE_MOCKED_DATA) {
    return UserActivity.data
  }

  const data = await fetchData(`${BASE_URL}/user/${userId}/activity`)
  const activity = new Activity(data)
  return activity
}

export const getUserPerformances = async (userId) => {
  if (USE_MOCKED_DATA) {
    return UserPerformances.data
  }
  const data = await fetchData(`${BASE_URL}/user/${userId}/performance`)
  const performance = new Performance(data)
  return performance
}

export const getUserAverageSession = async (userId) => {
  if (USE_MOCKED_DATA) {
    return UserAverageSession.data
  }
  const data = await fetchData(`${BASE_URL}/user/${userId}/average-sessions`)
  const average = new Average(data)
  return average
}
