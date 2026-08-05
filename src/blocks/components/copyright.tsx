import React from 'react'

/*
  Local override of @luxfi/ui's <Copyright>, which hardcodes a different legal entity.
  Substituted for the upstream module by the NormalModuleReplacementPlugin in next.config.js,
  so <Footer> picks it up without us having to fork the whole footer.

  The operating entity is "Lux Industries Inc". If that ever changes, the durable fix is to
  parameterise Copyright upstream in @luxfi/ui, since every Lux site shares that footer.
*/
const FIRST = 2020

const Copyright: React.FC<{
  className?: string
}> = ({
  className = ''
}) => {
  const year = new Date().getFullYear()
  const yearString = (year > FIRST) ? `${FIRST} - ${year}` : FIRST.toString()

  return (
    <div className={className}>
      {`Copyright © ${yearString}`}&nbsp;<br className='sm:hidden' />Lux Industries Inc.&nbsp;<br className='md:hidden' />&nbsp;All rights reserved.
    </div>
  )
}

export default Copyright
