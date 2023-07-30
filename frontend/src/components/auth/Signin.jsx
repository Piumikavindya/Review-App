import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'

export default function Signin() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center p-1">
     
      <Container>
        <form className='bg-secondary rounded p-8 w-72 sppace-y-'> 
         <Title Children='Sign in'> Sign in</Title>
         <FormInput label='Eamil' placeholder='abcd@gmail.com' name='email'/>
         <FormInput label='Password' placeholder='***********' name='Password'/>
         
         <Submit  value="Sign in"/>

         <div className='flex justify-between'>
          <a className='text-dark-subtle  hover:text-white transition p-2' href='#'> Forget Password</a>
          <a className='text-dark-subtle   hover:text-white  p-2 transition' href='#'> Sign up</a>
         </div>
        </form>
      </Container>
    </div>
  )
}
