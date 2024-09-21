import React from 'react'
import HomePage from '@/components/maincomponent/page'
import Courses from './courses/page'


const page = () => {
  return (
    <div  className="flex flex-col items-center justify-center">
      <HomePage />

      <Courses />

    </div>
  )
}

export default page
