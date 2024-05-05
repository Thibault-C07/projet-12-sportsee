export async function fetchData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.error('Error while fetching the data')
    }
    const result = await response.json()
    return result.data
  } catch {
    console.error('An error occurred please try again in a few moments')
  }
}

// export async function fetchData(url) {
//   try {
//     const response = await fetch(url)
//     if (!response.ok) {
//       console.error('Error while fetching the data')
//       throw new Error('Failed to fetch data')
//     }
//     const result = await response.json()
//     return result.data
//   } catch (error) {
//     console.error('An error occurred:', error.message)
//     return null // Ou une autre valeur par défaut selon votre besoin
//   }
// }
