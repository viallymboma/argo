import React, { useEffect, useState } from 'react'
import { publicRequest } from '../utilities/requestMetho'
import Sailor from './Sailor'

const Sailors = (props) => {

    const [ sailors, setSailor ] = useState([])

    useEffect(() => {
        console.log("Sailor will be shown below: ")
        // console.log(filters)
        const getSailors = async () => {
    
            try {
                const res = await publicRequest.get("/matello");
                console.log("the data ", res)
                // feeding my meal state with data from database
                setSailor(res.data)
                console.log(res.data)
                console.log(sailors)
            } catch (err) {
                console.log("Here is the error: ", err)
            }
        };
    
        getSailors ();
        // increaseLoadNumber ();
      }, [props.reloadTable])
  return (
    <div className="MainBodyContent">
        {
            sailors.map(sailor => {
                return (
                    <Sailor />
                )
            })
        }
    </div>
  )
}

export default Sailors