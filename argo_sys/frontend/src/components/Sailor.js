import React from 'react'
import { DeleButton, UpdateButton } from './Button'

const Sailor = (props) => {
  return (
    <div className='SailorContainer'>
        <div className='leftSide'>
            <div className='fullName'>
                <h1>Ariel Desir Essadjo Mboma</h1>
            </div>
            <div className='dob'>
                <h4>05/07/1991</h4>
            </div>
        <div className='sizes'>
            <div className='height_user'>
            <h3>1.73 m </h3>
            </div>
            <div className='weight_user'>
            <h3>72 kg</h3>
            </div>
        </div>
        <div className='origin'>
            <div className='origine_user'>
            <h3>Cameroon </h3>
            </div>
            <div className='language_user'>
            <h3>Douala</h3>
            </div>
        </div>
        </div>

        <div className='rightSide'>
        <div className="ButtonSection">
            <UpdateButton width_={60} action="update" name_="update" />
        </div> 

        <div className="ButtonSection">
            <DeleButton width_={60} action="delete" name_="delete" />
        </div> 
        </div>

    </div>
  )
}

export default Sailor