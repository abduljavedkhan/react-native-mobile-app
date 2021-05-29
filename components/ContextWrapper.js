import React, { Children } from 'react'
import {AppProvider} from '../Context/AppContext'
const ContextWrapper = (props) => {
    return (
<AppProvider>
    {props.Children}
</AppProvider>
    )
}

export default ContextWrapper
