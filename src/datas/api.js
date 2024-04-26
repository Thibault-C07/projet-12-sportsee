const BASE_URL = 'http://localhost:3001'

export const getUserInfo = async (userId) => {
  if (!userId) {
    throw new Error("userId n'est pas défini")
  }

  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    const result = await response.json()
    return result.data
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données: ${error}`)
  }
}

export const getUserActivity = async (userId) => {
  if (!userId) {
    throw new Error("userId n'est pas défini")
  }

  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    const result = await response.json()
    return result.data
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données: ${error}`)
  }
}

export const getUserPerformances = async (userId) => {
  if (!userId) {
    throw new Error("userId n'est pas défini")
  }

  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    const result = await response.json()
    return result.data
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données: ${error}`)
  }
}

export const getUserAverageSession = async (userId) => {
  if (!userId) {
    throw new Error("userId n'est pas défini")
  }

  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    const result = await response.json()
    return result.data
  } catch (error) {
    throw new Error(`Erreur lors de la récupération des données: ${error}`)
  }
}
