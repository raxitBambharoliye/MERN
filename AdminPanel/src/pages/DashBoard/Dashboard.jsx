import React from 'react'
import { Input, PasswordInput } from '../../components/form'

export default function Dashboard() {
  return (
    <div>
      <h2 className='my-3'>Dashboard</h2>
      <Input label="Password" placeholder='Enter your password ... ' inputClass="themInput" />
    </div>
  )
}
