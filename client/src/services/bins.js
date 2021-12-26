import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/bins';

const create = async () => {
  const response = await axios.post(baseUrl)
  return response.data
}

const getBinRequests = async id => {
  const response = await axios.get(`${baseUrl}/${id}/inspect`)
  return response.data
}

const binService = { create, getBinRequests }

export default binService