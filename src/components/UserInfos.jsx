import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/UserInfos.css'
import User from './../datas/user.json'

const UserInfos = () => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    setUser(User)
  }, [])

  // const { firstName } = user?.data.userInfos

  return (
    <div className="user-infos">
      <h1>
        Bonjour{' '}
        <span className="firstname">{user?.data.userInfos.firstName}</span>
      </h1>

      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default UserInfos
