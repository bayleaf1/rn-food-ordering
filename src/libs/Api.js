import AppConfig from '@constants/AppConfig'
import axios from 'axios'
import useSWR from 'swr'

//Endpoints for when back-end no involved
export const Endpoints = {
  me: {
    value: () => '/me',
    response: () => ({ name: 'Darius' }),
  },
}
async function fetcherWithoutAnApi(endpoint) {
  let endpointObject = Object.values(Endpoints).find((end) => end.value() === endpoint) // || defaultEndpoint

  if (!endpointObject) throw new Error(`Missing endpoint (${endpoint}). Please add in libs/Api.js`)

  return Promise.resolve(endpointObject.response())
}

// export const Endpoints = {
//   me: '/me',
//   products: (id) => '/product/' + id,
// }

const instance = axios.create({ baseURL: AppConfig.API_BASE_URL })

async function fetcher(endpoint) {
  return instance.get(endpoint)
}

function useApi(endpoint = '', opts = { defaultData: null }) {
  let { data, error, isLoading } = useSWR(endpoint, fetcher)

  return { data: data?.data || opts?.defaultData, isLoading, errorMsg: error?.message, statusCode: data?.status }
}

export default useApi
