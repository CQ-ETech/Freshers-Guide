import Link from 'next/link'
import TechLayout from '../techLayout'
import { generals } from './data'

export default function DataProfile() {
  return (
    <div className='text-center min-h-screen text-white py-10 px-6'>
      <h1 className="text-6xl font-bold h-[200px] m-10 text-center text-[#ffd700]">Data Profile</h1>
      <TechLayout generals={generals} />
      <div className="mt-8 text-left">
        <Link href="/profiles/tech" className="text-yellow-300 underline hover:no-underline">
          ← Back to Tech
        </Link>
      </div>
    </div>
  )
} 