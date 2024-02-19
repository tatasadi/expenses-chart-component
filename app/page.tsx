import ChartCard from "./components/chart-card"
import Header from "./components/header"

export default function Home() {
  return (
    <main className="flex h-full w-full max-w-[35.75em] flex-col px-4 py-[4.19rem] lg:py-[11.38rem]">
      <h1 className="sr-only">Expense Chart Component</h1>
      <Header balance={921.48} className="mb-4 lg:mb-6" />
      <ChartCard title="Spending - Last 7 days" total={478.33} change={2.4} />
    </main>
  )
}
