import { ChartRadialSimple } from "@/components/shadcnRadialChart"
import Link from "next/link"

const Homepage = () => {
  return (
    <div className=''><p>Home</p>
    <Link href={`/admin`} className="p-4 bg-AbduhSky m-2">go to admin</Link>
    <div className="m-10">
      <ChartRadialSimple/>
    </div>
    </div>

  )
}

export default Homepage