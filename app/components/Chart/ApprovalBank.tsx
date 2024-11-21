'use client'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

const Data = [
  {
    id: 1,
    label: 'KEB Hana Bank',
    percentage: '10%',
    amount: 10,
  },
  {
    id: 2,
    label: 'BRI',
    percentage: '30%',
    amount: 30,
  },
  {
    id: 3,
    label: 'Artha Graha',
    percentage: '25%',
    amount: 25,
  },
  {
    id: 4,
    label: 'BTN',
    percentage: '20%',
    amount: 20,
  },
  {
    id: 5,
    label: 'Mandiri',
    percentage: '15%',
    amount: 15,
  },
]

Chart.register(CategoryScale)

const ApprovalBank = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => `${data.label}`),
    datasets: [
      {
        label: 'Approval',
        data: Data.map((data) => data.amount),
        backgroundColor: ['#6150C1', '#4A3764', '#1FFFE1', '#51C4E9', '#2a71d0', '#146C94'],
      },
    ],
  })

  return (
    <div className="relative">
      <Doughnut
        width={250}
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  )
}

export default ApprovalBank
