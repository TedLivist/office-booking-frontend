export const fetchItems = async () => {
  const response = await fetch('http://localhost:3000/api/v1/items')
  return response.json()
}