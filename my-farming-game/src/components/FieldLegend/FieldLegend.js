import React from 'react'
import FieldTile from '../FieldTile/FieldTile';

//CSS
import "./FieldLegend.css";

const FieldLegend = () => {
  return (
    <div className='fieldLegendContainer'>
        <div className='fieldLegendContainer__title'>Farming Legend</div>
        <div className='fieldLegendContainer__land'>
            <FieldTile tile="L"/>
            <div className='fieldLegendContainer__label'>LAND</div>
        </div>
        <div className='fieldLegendContainer__house'>
            <FieldTile tile="H"/>
            <div className='fieldLegendContainer__label'>HOUSE</div>
        </div>
        <div className='fieldLegendContainer__water'>
            <FieldTile tile="W"/>
            <div className='fieldLegendContainer__label'>WATER</div>
        </div>
        <div className='fieldLegendContainer__forest'>
            <FieldTile tile="F"/>
            <div className='fieldLegendContainer__label'>FOREST</div>
        </div>

    </div>
  )
}

export default FieldLegend;