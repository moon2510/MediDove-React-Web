import axios from 'axios'

export const getNewsAndFeeds = async () => {
  const response = await axios.get(
    'https://642cd7c166a20ec9ce8f6e66.mockapi.io/api/medidove/data'
  )
  return response.data[0].news
}
