import React from 'react'
import "katex/dist/katex.min.css"
import { InlineMath, BlockMath } from 'react-katex';
import { evaluate, sqrt, derivative, round } from 'mathjs'

let Latex = require('react-latex');

function Examples({columns = 1, qAndA=[{question: "x", answer: "y"}] }) {
    
    const derivativeExample =  derivative('x^2 + x', 'x', {simplify: true}).toTex()

    return (
        <div>

              
            <ol>


            {qAndA.map(item => 
                <li>
                    <InlineMath math={item.question} />
                    <InlineMath math={item.answer} />
                    <InlineMath math={derivativeExample} />
                </li>
            )}
            </ol>
        </div>
    )
}

export default Examples
