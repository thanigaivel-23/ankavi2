import { Helmet } from "react-helmet-async";
import React from 'react'

const MetaData = ({title}) => {

  return (
    <Helmet>
        <title>{title}</title>
    </Helmet>
  )

}

export default MetaData