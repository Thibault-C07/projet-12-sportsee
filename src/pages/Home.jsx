import React from 'react'
import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../datas/dataMocked'
import UserInfos from '../components/UserInfos'
import KeyData from '../components/KeyData'

const Home = () => {
  const userMainData = USER_MAIN_DATA[0]
  return (
    <React.StrictMode>
      <UserInfos firstName={userMainData.userInfos.firstName} />
      <div>
        <KeyData keyData={userMainData.keyData} />
      </div>
    </React.StrictMode>
  )
}

export default Home
