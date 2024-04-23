import { useRouter } from 'expo-router'

export default function useLandingRedirectWithDelay(screenName, delayInMs) {
  const { replace } = useRouter()

  useEffect(() => {
    setTimeout(() => {
      replace(screenName)
    }, delayInMs)
  }, [])
}
