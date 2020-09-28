import React, { useEffect } from 'react'
import Desmos from 'desmos'



const DesmosGraph = ({ graphfunction, graphid }) => {

    const elt = document.createElement('div')
    elt.style.width = '500px'
    elt.style.height = '350px'

    const calculator = Desmos.GraphingCalculator(elt)
    calculator.setExpression({ id: 'graph1', latex: graphfunction })
    
    document.body.prepend(elt)

return (
        <>
        </>
    )
}

export default DesmosGraph