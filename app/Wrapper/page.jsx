import MiddleCalled from '@/statemanage/MiddleCalled'
import React from 'react'

const page = ({ children }) => {
    return (
        <MiddleCalled>
            {children}
        </MiddleCalled>
    )
}

export default page