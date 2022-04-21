import React, { Fragment } from 'react'
import SoftwaresWeDevelop from '../shared-components/SoftwaresWeDevelop'
import TechnologiesWeUse from '../shared-components/TechnologiesWeUse'
import OurClients from '../shared-components/OurClients'
function Information() {
  return (
    <Fragment>
        <SoftwaresWeDevelop/>
        {/* <ClientSuccess items={items}/> */}
        <TechnologiesWeUse/>
        <OurClients/>
    </Fragment>
  )
}

export default Information