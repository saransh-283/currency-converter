const API_KEY = '050169e9c5476bf00f3d439d'

export default async function getConversionRate(from, to) {
  const response = await api.getConversionRate(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`)
  return response
}
