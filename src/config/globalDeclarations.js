import AnimationList from '@components/AnimationList/AnimationList'
import Ripple from '@components/Ripple'
import Writing from '@components/Writing/Writing'
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
global.Writing = Writing
global.Ripple = Ripple
global.AnimationList = AnimationList
