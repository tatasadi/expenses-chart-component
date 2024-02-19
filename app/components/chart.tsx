import { cn } from "../lib/utils"

interface DataType {
  day: string
  amount: number
}

interface ChartProps {
  data: DataType[]
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  // Define a fixed height for the chart container
  const chartHeight = 9.5 //rem
  // Find the maximum amount to base the relative bar heights on
  const maxAmount = Math.max(...data.map((item) => item.amount))

  const currentDate = new Date()
  const currentDay = currentDate
    .toLocaleString("en-US", { weekday: "short" })
    .toLowerCase()

  return (
    <div className="mb-6 mt-[3.25rem] flex w-full items-end justify-between pt-[2rem] lg:mb-[2.1rem] lg:mt-[2.3rem]">
      {data.map((item, index) => (
        <div
          key={index}
          className="group relative flex flex-col items-center text-center"
        >
          <p className="absolute -left-[.75rem] -top-[3.3rem] z-10 mb-2 rounded-[0.3125rem] bg-dark-brown p-2 text-lg font-bold leading-normal text-white opacity-0 group-hover:opacity-100">
            ${item.amount.toFixed(2)}
          </p>

          <div
            className={cn(
              "mb-[0.69rem] w-[2.0625rem] cursor-pointer rounded-[0.1875rem] lg:w-[3.1rem]",
              currentDay === item.day
                ? "hover:bg-light-cyan bg-cyan"
                : "hover:bg-softer-red bg-soft-red",
            )}
            style={{
              height: `${(item.amount / maxAmount) * chartHeight}rem`,
            }}
            title={`$${item.amount.toFixed(2)}`}
          ></div>
          <p className="text-xs text-medium-brown lg:text-[0.9375rem]">
            {item.day}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Chart
