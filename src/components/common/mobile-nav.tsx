'use client'

import React, { useState } from 'react'

import Hamburger from '../ui/hamburger-menu'

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <section className="mr-2 block md:mr-0 md:hidden">
      <Hamburger
        isActive={isActive}
        setIsActive={setIsActive}
        direction="right"
      />
    </section>
  )
}

export default MobileNav
