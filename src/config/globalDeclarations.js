import { cn } from '@libs/Styling'
import { useState, useEffect, useCallback, useContext, createContext } from 'react'
import { View } from 'react-native'

global.GLOBAL_VALUE = 'global VALUEx'
global.useState = useState
global.useEffect = useEffect
global.useCallback = useCallback
global.useContext = useContext
global.cn = cn
global.View = View
global.createContext = createContext

