import { useEffect } from "react"

export function useOnMount(callback) {
  return useEffect(callback, [])
}

export function useOnUnmount(callback) {
  return useEffect(() => callback, [])
}
