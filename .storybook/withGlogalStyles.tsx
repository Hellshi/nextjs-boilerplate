import React from 'react'
import GlobalStyles from '../src/styles/globalStyle'

const withGlobalStyles = (storyFn) => (
    <>
        <GlobalStyles />
        {storyFn()}
    </>
)

export default withGlobalStyles