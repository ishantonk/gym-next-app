import { Divider } from "./components";
import { Banner, Pricing, Program, Reason, CalculateBMI } from "./components/sections";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Banner />
      <Divider />
      <Program />
      <Divider />
      <Reason />
      <Divider />
      <Pricing />
      <Divider />
      <CalculateBMI />
    </main>
  )
}
