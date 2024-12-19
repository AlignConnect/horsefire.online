"use client"
import { store } from '@/redux/store'
import MiddleCalled from '@/statemanage/MiddleCalled'
import React from 'react'
import { Provider } from 'react-redux'

const Wrapper = ({ children }) => {
    return (

        <Provider store={store}>
            <MiddleCalled>
                {children}
            </MiddleCalled>
        </Provider>


    )
}

export default Wrapper