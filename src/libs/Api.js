import AppConfig from '@constants/AppConfig'
import axios from 'axios'
import useSWR from 'swr'
import { pushErrorToast } from './Toaster'
import Consoler from './Consoler'

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
  let merged = {
    ...backendDefProps,
    ...opts,
  }
  return appFetch({
    ...merged,
    baseURL: AppConfig.API_BASE_URL,
    onError: (p) => {
      if (p.status === 401) pushErrorToast('Session expired or jwt is malformated')
      else if (p.status !== 422) pushErrorToast(p.message)
      merged.onError(p)
    },
  })
}
export const appFetchDefOpts = {
  endpoint: '',
  method: 'get',
  body: {},
  headers: {},
  jwt: '',
  onSuccess: () => '',
  onError: () => '',
  baseURL: '',
}

export function appFetch(opts = appFetchDefOpts) {
  opts = { ...appFetchDefOpts, ...opts }
  const defMsg = 'Default error from front-end';
  let endpoint = opts.baseURL + opts.endpoint
  fetch(endpoint, {
    method: opts.method,
    ...getBodyByMethod(),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.jwt || ''}`,
      ...opts.headers,
    },
  })
    .then(async (r) => ({ status: r.status, response: await r.json() }))
    .then((result) => {
      let message = result.response?.message || ''
      const status  = result.status;
      Consoler.logHttpReq({ method: opts.method, endpoint, status, message })

      if (result.status > 299) {
        let res = result.response
        opts.onError({
          error: { ...(res?.error || {}), message: message || defMsg },
          message: message || defMsg,
          status,
        })
      } else opts.onSuccess({ data: result.response })
    })
    .catch((res) => {
      opts.onError({
        error: { ...(res?.error || {}), message: res?.message || '' },
        message: res?.message || '',
        status: res?.error?.status || 500,
      })
    })

  function getBodyByMethod() {
    return ['get', 'head'].findIndex((v) => opts.method.toLowerCase() === v) > -1
      ? {}
      : { body: JSON.stringify(opts.body) }
  }
}
