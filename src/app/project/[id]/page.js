import React, { use } from 'react'
import ProjectClient from './ProjectClientComponant'
export default function ProjectPage({ params }) {
  const { id } = use(params)

  return (
      <ProjectClient id={id}/>
  )
}
