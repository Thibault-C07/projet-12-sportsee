import React from 'react'
import CardKeyData from './CardKeyData'
import '../styles/KeyData.css'

const KeyData = ({ keyData }) => {
  return (
    <div className="keydata">
      <CardKeyData name="calorie" content={keyData.calorieCount} />
      <CardKeyData name="protein" content={keyData.proteinCount} />
      <CardKeyData name="carbohydrate" content={keyData.carbohydrateCount} />
      <CardKeyData name="lipid" content={keyData.lipidCount} />
    </div>
  )
}

export default KeyData
