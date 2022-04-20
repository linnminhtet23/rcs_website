import React, { Fragment } from 'react'
import SoftwaresWeDevelop from '../shared-components/SoftwaresWeDevelop'
import TechnologiesWeUse from '../shared-components/TechnologiesWeUse'
import ClientSuccess from '../shared-components/ClientSuccess'
import OurClients from '../shared-components/OurClients'
function Information({items}) {
  // console.log(items)
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