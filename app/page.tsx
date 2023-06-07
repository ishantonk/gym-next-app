import { Divider } from "./components";
import { Banner, Pricing, Program, Reason, CalculateBMI } from "./components/sections";

export const metadata = {
    title: "MyGym",
    description: "connect with your gym anywhere ",
};

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
