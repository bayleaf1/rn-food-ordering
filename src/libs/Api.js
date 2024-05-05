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

  return {
    data: data?.data || opts?.defaultData,
    isLoading,
    errorMsg: error?.message,
    statusCode: data?.status,
  }
}

export default useApi

export const AppFetcher = {
  get({
    endpoint,
    onSuccess = () => '',
    token,
    onError = ({ error }) => console.log('Error', error),
  }) {
    return instance
      .get(endpoint, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || ''}`,
        },
      })
      .then((r) => {
        onSuccess({ data: r.data })
      })
      .catch((e) => {
        onError({
          error: e.response.data.error,
          message: e?.response?.data?.message,
          status: e?.response?.status,
        })
      })
  },

  post({
    endpoint,
    body,
    token,
    onSuccess = () => '',
    onError = ({ error }) => console.log('Error', error),
  }) {
    // console.log(`token:`, token)
    return instance
      .post(endpoint, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || ''}`,
        },
      })
      .then((r) => {
        onSuccess({ data: r.data })
      })
      .catch((e) => {
        // console.log(`post error:`, e)
        onError({
          error: e?.response?.error || { message: e.message },
          data: e?.response?.data,
          status: e?.response?.status,
          message: e?.response?.data?.message || e.message,
        })
      })
  },

  patch({
    endpoint,
    body,
    token,
    onSuccess = () => '',
    onError = ({ error }) => console.log('Error', error),
  }) {
    return instance
      .patch(endpoint, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || ''}`,
        },
      })
      .then((r) => {
        onSuccess({ data: r.data })
      })
      .catch((e) => {
        onError({
          error: e?.response?.data,
          data: e?.response?.data,
          status: e?.response?.status,
          message: e.message,
        })
      })
  },

  getAsPromise({ endpoint, token }) {
    return new Promise((resolve, reject) => {
      AppFetcher.get({
        endpoint,
        token,
        onSuccess: ({ data }) => {
          resolve(data)
        },
        onError: ({ error }) => {
          reject(error)
        },
      })
    })
  },


  getForSwr(url) {
    return
  },
}
