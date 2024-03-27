import calorieIcon from '../assets/icon-calorie.png'
import proteinIcon from '../assets/icon-protein.png'
import carbohydrateIcon from '../assets/icon-carbohydrate.png'
import lipidIcon from '../assets/icon-lipid.png'

const CardKeyData = ({ name, content }) => {
  let spanTraduction = ''
  let img = ''
  let unit = ''
  switch (name) {
    case 'calorie':
      spanTraduction = 'Calories'
      img = calorieIcon
      unit = 'Cal'
      break
    case 'protein':
      spanTraduction = 'Protéines'
      img = proteinIcon
      unit = 'g'
      break
    case 'carbohydrate':
      spanTraduction = 'Glucides'
      img = carbohydrateIcon
      unit = 'g'

      break
    case 'lipid':
      spanTraduction = 'Lipides'
      img = lipidIcon
      unit = 'g'

      break
    default:
      break
  }

  return (
    <div className={name}>
      <img src={img} alt="" />
      <div className="cardKeyData_content">
        {content}
        {unit} <br />
        <span className="cardKeyData_content_span">{spanTraduction}</span>
      </div>
    </div>
  )
}

export default CardKeyData
