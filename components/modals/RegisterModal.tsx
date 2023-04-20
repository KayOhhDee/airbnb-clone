'use client';

import { useState, useCallback } from 'react';
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/input';

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    // axios call goes here
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading 
        title='Welcome to Airbnb'
        subtitle='Create an account!'
      />
      <Input 
        id='email'
        label='Email'
        disabled={isLoading}
        register={register} 
        errors={errors}
        required
      />
      <Input 
        id='name'
        label='Name'
        disabled={isLoading}
        register={register} 
        errors={errors}
        required
      />
      <Input 
        id='password'
        label='Password'
        disabled={isLoading}
        register={register} 
        errors={errors}
        required
      />
    </div>
  )

  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}

export default RegisterModal