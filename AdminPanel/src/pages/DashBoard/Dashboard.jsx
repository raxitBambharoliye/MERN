import React from 'react'
import { Input, PasswordInput } from '../../components/form'
import TextEditor from '../../components/form/TextEditor'
import { useForm } from 'react-hook-form'

export default function Dashboard() {
  const { register, control, handleSubmit,formState:{errors} } = useForm();
  const testSub = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h2 className='pateTitle'>Dashboard</h2>
      <form action="" onSubmit={handleSubmit(testSub)}>

      <Input label="Password"  placeholder='Enter your password ... ' inputClass="themInput" />
        <TextEditor name={'textCheck'} control={control} />
        {console.log('errors', errors)}
        
        {errors.textCheck && <h1>{ errors.textCheck.message}</h1>}
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
