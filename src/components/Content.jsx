import React from 'react'
import ContentHeader from './ContentHeader'
import Card from '../components/Card'
import TeacherList from './TeacherList'
import '../styles/content.css'


const Content = () => {
  return (
    <div className='content'>
        <ContentHeader />
        <Card />
        <TeacherList />
    </div>
  )
}

export default Content