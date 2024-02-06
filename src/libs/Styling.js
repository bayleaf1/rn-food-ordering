import { twMerge } from 'tw-merge'

export function cn(...classes) {
  return twMerge(clsx(classes))
}
