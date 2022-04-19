import React, { Fragment } from 'react'
import SoftwaresWeDevelop from '../shared-components/SoftwaresWeDevelop'
import TechnologiesWeUse from '../shared-components/TechnologiesWeUse'
import ClientSuccess from '../shared-components/ClientSuccess'
function Information() {
  return (
    <Fragment>
        <SoftwaresWeDevelop/>
        {/* <ClientSuccess/> */}
        <TechnologiesWeUse/>
    </Fragment>
  )
}

export default Information