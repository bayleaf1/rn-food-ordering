import AppConfig from '@constants/AppConfig'
import { appFetch, appFetchDefOpts } from '@libs/Api'
import { pushErrorToast } from '@libs/Toaster'
import React, { useMemo } from 'react'
import { useSessionProvider } from './SessionProvider'

const copy = { ...appFetchDefOpts }
delete copy.baseURL

const fetchDefOpts = copy;

const Context = React.createContext({
  get: (opts = fetchDefOpts) => '',
  post: (opts = fetchDefOpts) => '',
  patch: (opts = fetchDefOpts) => '',
})

export const useApiProvider = () => React.useContext(Context)

function ApiProvider(props) {
  const { jwt, signOut } = useSessionProvider()

  const fetchers = useMemo(() => {
    const fet =
      (method) =>
      (opts = fetchDefOpts) => {
        let merged = { ...fetchDefOpts, ...opts }
        appFetch({
          ...merged,
          method,
          baseURL: AppConfig.API_BASE_URL,
          jwt,
          onError: (p) => {
            if (p.status === 401) {
              signOut()
              pushErrorToast('Session expired or jwt is malformated')
            } else if (p.status !== 422) pushErrorToast(p.message)
            merged.onError(p)
          },
        })
      }

    return { post: fet('post'), get: fet('get'), patch: fet('patch') }
  }, [jwt])

  return <Context.Provider value={{ ...fetchers }}>{props.children}</Context.Provider>
}

export default ApiProvider
