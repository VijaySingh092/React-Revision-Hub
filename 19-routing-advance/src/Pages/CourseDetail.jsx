import React from 'react'
import {useParams} from 'react-router-dom'

// useParams() is a React Router hook used to get dynamic values from the URL.

const CourseDetail = () => {
    
  // React Router → identifies the matching route → renders CourseDetail → useParams() receives the parameters of that matched route.

    const params = useParams()
    console.log(params)

  return (
    <div>
      <h1>{params.courseId} Course Detail</h1>
    </div>
  )
}

export default CourseDetail
