import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        Why This Summer Matters
      </h1>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
        From next year onward, you'll be occupied with internships, placements,
        and other responsibilities. You won't get this much uninterrupted free
        time again — nearly 45 days of pure potential.
      </p>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
        It's hard to master a skill between semesters. These 45 days are perfect
        for deep-diving into a skill, exploring career paths, and gaining real
        clarity.
      </p>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
        Later, if you're not skilled, you'll feel FOMO. But if you're skilled,
        you'll feel confident. So, why not use this time to boost your
        confidence and future?
      </p>
      <p className="text-xl font-semibold text-emerald-400 mt-6">
        This summer isn't just a break — it's a launchpad. 🚀
      </p>
    </section>
  );
};