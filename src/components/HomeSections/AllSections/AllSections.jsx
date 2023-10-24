import React from 'react'

import '../AllSections/AllSection.css'

import Jumbotron from '../Jumbotron/Jumbotron'
import WhatDoWeDo from '../WhatDoWeDo/WhatDoWeDo'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Environment from '../Environment/Environment'

const AllSections = () => {
    return (
        <>
            <Jumbotron />
            <WhoWeAre />
            <WhatDoWeDo />
            <Environment />
        </>

    )
}

export default AllSections