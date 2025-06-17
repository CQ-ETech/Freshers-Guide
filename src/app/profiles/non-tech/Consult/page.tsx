export default function ConsultProfile() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-6">Consulting Profile Overview</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Who should target this?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Enjoy problem solving and strategic thinking</li>
          <li>Comfortable with client interaction and presentations</li>
          <li>Can analyze business problems and suggest solutions</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Non-Tech Demands</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Strong communication and interpersonal skills</li>
          <li>Flexibility and adaptability to various industries</li>
          <li>Time management and leadership</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Career Opportunities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Management Consultant</li>
          <li>Strategy Analyst</li>
          <li>Operations Consultant</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Additional Notes</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Practice case studies for interviews</li>
          <li>Follow business news and trends</li>
          <li>Connect with seniors for guidance</li>
        </ul>
      </section>
    </div>
  );
}
