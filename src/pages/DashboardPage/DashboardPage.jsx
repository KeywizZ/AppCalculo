import React from 'react'
import { ActivityList } from '../../components/ActivityList/ActivityList'

export const DashboardPage = () => {
  return (
    <div className='dashboard'>
        <div>Hola desde Dashboard</div>
        <ActivityList />
    </div>
  )
}
