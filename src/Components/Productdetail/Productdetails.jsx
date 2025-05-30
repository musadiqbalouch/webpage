import React from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const { id } = useParams();
    const name = ["musadiq", "hassann"]

    const findName = name.filter((nam) => nam.length > 5)
    console.log("these names are greater than 5 in length  ", { findName })

    return (
        <div>Productdetail {id}</div>

    )
}

export default Productdetails