import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Compliance Check Platform
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Crypto Section */}
        <Link 
          href="/crypto" 
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Crypto</h2>
            <p className="text-gray-600">
              Check cryptocurrency addresses against sanctions lists and compliance databases
            </p>
          </div>
        </Link>

        {/* FCC Section */}
        <Link 
          href="/fcc" 
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">FCC</h2>
            <p className="text-gray-600">
              Federal Communications Commission compliance and regulatory checks
            </p>
          </div>
        </Link>

        {/* General Section */}
        <Link 
          href="/general" 
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">General</h2>
            <p className="text-gray-600">
              General compliance checks and regulatory information
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}