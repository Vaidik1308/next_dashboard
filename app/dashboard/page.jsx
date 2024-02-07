import React from 'react'
import Card from '../ui/dashborad/card/Card'
import Chart from '../ui/dashborad/chart/Chart'
import Transactions from '../ui/dashborad/transactions/Transactions'
import Rightbar from '../ui/dashborad/rightbar/Rightbar'

const Dashboard = () => {
  return (
    <div className='flex w-[98%] mt-5 mx-auto'>
      <div className='flex flex-col flex-[3] gap-4 '>
        <div className='flex gap-5 w-full'>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className='w-[98%]'>
          <Transactions/>
          <Chart/>
        </div>
      </div>
      <div className='flex-[1.5]'>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard