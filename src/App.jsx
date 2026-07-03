const destinations = [
  {
    id: 1,
    placeName: 'Beijing, China',
    budget: 200000,
    duration: '8 Days',
    season: 'Winter',
  },
  {
    id: 2,
    placeName: 'Abu Dhabi, UAE',
    budget: 100000,
    duration: '4 Days',
    season: 'Spring',
  },
  {
    id: 3,
    placeName: 'Riyadh, Saudi Arabia',
    budget: 450000,
    duration: '6 Days',
    season: 'Autumn',
  },,
 {
    id: 4,
    placeName: 'London, UK',
    budget: 700000,
    duration: '8 Days',
    season: 'Summer',
  },
];

function DestinationCard({ id, placeName, budget, duration, season }) {
  const isBudgetFriendly = budget < 50000;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/40">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{placeName}</h3>
        {isBudgetFriendly && (
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-300">
            Budget Friendly
          </span>
        )}
      </div>
      <div className="space-y-2 text-sm text-slate-300">
        <p>
          <span className="font-medium text-slate-100">Budget:</span> ₹{budget}
        </p>
        <p>
          <span className="font-medium text-slate-100">Duration:</span> {duration}
        </p>
        <p>
          <span className="font-medium text-slate-100">Season:</span> {season}
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Travel Inspiration
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Popular Travel Destinations</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Explore amazing places around the world with budget-friendly options and seasonal recommendations.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
