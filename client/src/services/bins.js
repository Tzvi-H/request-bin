import axios from 'axios'
const baseUrl = '/api/bins';

const create = async () => {
  const response = await axios.post(baseUrl)
  return response.data
}

const binService = { create }

export default binService