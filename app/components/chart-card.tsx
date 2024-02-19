import React from "react"
import data from "../data.json"
import Chart from "./chart"

interface ChartCardProps {
  title: string
  total: number
  change: number
}

const ChartCard: React.FC<ChartCardProps> = ({ title, total, change }) => {
  const sum = data.reduce((total, item) => total + item.amount, 0)
  console.log(sum)

  return (
    <div className="rounded-[0.625rem] bg-very-pale-orange px-5 py-6 lg:rounded-[1.25rem] lg:px-10 lg:py-8">
      <h3 className="pt-[0.3rem] text-2xl font-bold lg:text-[2rem]">{title}</h3>
      <Chart data={data} />
      <div className="border-t-2 border-cream pt-6 text-medium-brown lg:pt-8">
        <p className="mb-1 text-[0.9375rem] lg:mb-0 lg:text-lg">
          Total this month
        </p>
        <div className="flex items-start">
          <p className="text-[1.875rem] font-bold text-dark-brown lg:-mt-2 lg:self-start lg:text-[3rem]">
            ${total}
          </p>
          <div className="ml-auto flex flex-col items-end text-[0.9375rem]  lg:text-lg">
            <p className="font-bold text-dark-brown">
              {change > 0 && "+"}
              {change}%
            </p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartCard
