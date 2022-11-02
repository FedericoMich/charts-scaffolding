import React from 'react'
import ProAndConsStyle from './BaseProAndCons.module.scss';
import PropType from 'prop-types';




const BaseProAndCons = ({ Pro, Cons }) => {

    BaseProAndCons.propTypes = {
        Pro: PropType.array,
        Cons: PropType.array
    };


    const proMap = Pro.map((pro) =>
        <li key={pro.id}>{pro.txt}</li>
    )
    const consMap = Cons.map((cons) =>
        <li key={cons.id}>{cons.txt}</li>
    )

    return (
        <div className={ProAndConsStyle.wrapper}>
            <div className="proContainer">
                <h2>Pro</h2>
                <ul>
                    {proMap}
                </ul>
            </div>
            <div className="consContainer">
                <h2>Contro</h2>
                <ul>
                    {consMap}
                </ul>
            </div>
        </div>
    )
}

export default BaseProAndCons