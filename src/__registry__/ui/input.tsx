'use client'

import React, { ChangeEvent, useState } from 'react'

import { Variants, motion } from 'framer-motion'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface GoogleInputProps {
  id?: string
  label: string
  type?: string
}

const AnimateInput: React.FC<GoogleInputProps> = ({
  id = 'googleInput',
  label = 'Email Address',
  type = 'email',
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const labelVariants: Variants = {
    default: { top: '12px', fontSize: '16px', color: '#999' },
    active: { top: '-10px', fontSize: '12px', color: '#4285f4' },
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="center size-full w-full">
      <div className="relative mx-auto w-full max-w-xl">
        <Input
          type={type}
          id={id}
          className="h-12 w-full rounded border border-gray-300 p-3 text-base transition-colors focus:border-blue-500 focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Label asChild>
          <motion.label
            htmlFor={id}
            className="pointer-events-none absolute left-3 bg-background p-1"
            initial="default"
            animate={isFocused || inputValue ? 'active' : 'default'}
            variants={labelVariants}
            transition={{ duration: 0.1 }}
          >
            {label}
          </motion.label>
        </Label>
      </div>
    </div>
  )
}

const AnimateInputDemo = () => {
  return (
    <div className="w-full p-3">
      <AnimateInput label="Input demo" id="input-demo" />
    </div>
  )
}

export default AnimateInputDemo
