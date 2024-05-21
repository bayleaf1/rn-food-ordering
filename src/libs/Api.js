import AppConfig from '@constants/AppConfig'
import axios from 'axios'
import useSWR from 'swr'

//Endpoints for when back-end no involved
// export const Endpoints = {
//   me: {
//     value: () => '/me',
//     response: () => ({ name: 'Darius' }),
//   },
// }
// async function fetcherWithoutAnApi(endpoint) {
//   let endpointObject = Object.values(Endpoints).find((end) => end.value() === endpoint) // || defaultEndpoint

//   if (!endpointObject) throw new Error(`Missing endpoint (${endpoint}). Please add in libs/Api.js`)

//   return Promise.resolve(endpointObject.response())
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

const backendDefProps = {
  endpoint: '',
  method: 'get',
  body: {},
  headers: {},
  jwt: '',
  onSuccess: () => '',
  onError: () => '',
}

export function fetchBackend(opts = backendDefProps) {
  return appFetch({ ...opts, baseURL: AppConfig.API_BASE_URL })
}
const appFetchDefProps = {
  ...backendDefProps,
  baseURL: '',
}

function appFetch(opts = appFetchDefProps) {
  opts = { ...appFetchDefProps, ...opts }
  
  let optionalBody  = ['get', 'head'].findIndex(v=>opts.method.toLowerCase() === v ) > -1 ? {} : {body:JSON.stringify(opts.body)} 
  
  fetch(opts.baseURL + opts.endpoint, {
    method: opts.method,
    ...optionalBody,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.jwt || ''}`,
      ...opts.headers,
    },
  })
    .then(async (r) => ({ status: r.status, response: await r.json() }))
    .then((result) => {
      if (result.status > 299) {
        let res = result.response
        let defMsg = 'Default message from front-end'
        opts.onError({
          error: { ...(res?.error || {}), message: res?.message || defMsg },
          message: res?.message || defMsg,
          status: result.status,
        })
      } else opts.onSuccess({ data: result.response })

      // console.log('44-58 success', res)
    })
    .catch((res) => {
      opts.onError({
        error: { ...(res?.error || {}), message: res?.message || '' },
        message: res?.message || '',
        status: res?.error?.status || 500,
      })
      // console.log('44-58 error', e)
    })
}
