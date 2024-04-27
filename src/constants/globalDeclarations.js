import AnimationList from '@components/AnimationList/AnimationList'
import Ripple from '@components/Ripple'
import SpacerView from '@components/SpacerView'
import AppText from '@components/AppText/AppText'
import { cn } from '@libs/Styling'
import { useState, useEffect, useCallback, useContext, createContext, useRef } from 'react'
import { View } from 'react-native'
//TODO add to main repo
global.GLOBAL_VALUE = 'global VALUEx'
global.useState = useState
global.useEffect = useEffect
global.useCallback = useCallback
global.useContext = useContext
global.useRef = useRef
global.createContext = createContext

global.cn = cn
global.View = View
// global.AppText = AppText
// global.Ripple = Ripple
// global.AnimationList = AnimationList
// global.SpacerView = SpacerView
