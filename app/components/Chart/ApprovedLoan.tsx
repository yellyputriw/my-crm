'use client'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

export const Data = [
  {
    id: 1,
    percentage: '20',
    amount: 20,
  },
  {
    id: 2,
    percentage: '30',
    amount: 30,
  },
]

Chart.register(CategoryScale)

const ApprovedLoan = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.percentage),
    datasets: [
      {
        label: 'Pinjaman',
        data: Data.map((data) => data.amount),
        backgroundColor: ['#17A9E2', '#C1C1C1'],
      },
    ],
  })

  return (
    <div className="relative">
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold">
        40%
      </p>
      <Doughnut
        width={250}
        height={250}
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

export default ApprovedLoan
