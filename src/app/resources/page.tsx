import Link from 'next/link'

const SHEET_LINK = "https://docs.google.com/spreadsheets/d/1vxOF12HoiI05V52l7ZJfJchKv36rGOSNdl_zJPZ2NMo/edit?gid=0#gid=0"

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">📚 Resources</h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Here you'll find a curated sheet of all useful resources across all profiles. Bookmark it and refer to it regularly.
      </p>
      <a
        href={SHEET_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-200 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
      >
        Open Resource Sheet
      </a>
      
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
} 