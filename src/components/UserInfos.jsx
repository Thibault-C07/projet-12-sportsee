import React from 'react'
import '../styles/UserInfos.css'

const UserInfos = ({ firstName }) => {
  return (
    <div className="user-infos">
      <h1>
        Bonjour <span className="firstname">{firstName}</span>
      </h1>

      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default UserInfos
