import clsx from 'clsx'
import { twMerge } from 'tw-merge'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export const hp = heightPercentageToDP
export const wp = widthPercentageToDP

export const hpWithMax = (percentage, max) => {
  let result = hp(percentage)
  // console.log(`result:`, result)

  return result > max ? max : result;
}
export function cn(...classes) {
  return twMerge(clsx(classes))
}
