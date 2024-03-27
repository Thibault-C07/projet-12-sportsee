import React from 'react'

const UserInfos = ({ firstName }) => {
  return (
    <div className="profil-title">
      <div className="title">
        <h1>Bonjour</h1>
        <span>
          <h1>{firstName}</h1>
        </span>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default UserInfos
