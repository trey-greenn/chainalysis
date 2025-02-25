import Link from 'next/link';

interface ToolCard {
  title: string;
  description: string;
  marketSize: string;
  examples: Array<{
    name: string;
    url: string;
  }>;
  route: string;
}

export default function FCCHome() {
  const tools: ToolCard[] = [
    {
      title: "CTF Screening Tool",
      description: "Real-time counter-terrorism financing screening tool integrated with FinCEN's 314(a) list and global sanctions lists. Offers automated transaction screening and compliance reporting capabilities.",
      marketSize: "Growing focus area for financial institutions with increasing global terrorism threats.",
      examples: [
        { name: "Refinitiv", url: "https://www.refinitiv.com/en/products/world-check-kyc-screening" },
        { name: "Acuris", url: "https://www.acuris.com/aml-ctf-monitoring" },
        { name: "ShipSure", url: "https://www.shipsure.com/" }
      ],
      route: "/fcc/ctf-screening"
    },
    {
      title: "Financial Crime Investigation Tool",
      description: "A central hub for financial crime investigators to securely share, analyze, and track investigative data in real-time.",
      marketSize: "$4.5 billion by 2026 (Global AML Software Market)",
      examples: [
        { name: "Chainalysis", url: "https://www.chainalysis.com/" },
        { name: "NICE Actimize", url: "https://www.niceactimize.com/" },
        { name: "Palantir", url: "https://www.palantir.com/" }
      ],
      route: "/fcc/investigation"
    },
    {
      title: "KYC/AML API Hub",
      description: "Centralized platform for FinTechs to integrate multiple compliance features including identity verification, transaction monitoring, and sanction screening.",
      marketSize: "$4.5 billion by 2026, CAGR of 13.6%",
      examples: [
        { name: "Trulioo", url: "https://www.trulioo.com/" },
        { name: "Sygna", url: "https://www.sygna.io/" },
        { name: "Jumio", url: "https://www.jumio.com/" }
      ],
      route: "/fcc/kyc-hub"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Financial Crime Compliance Tools
            </h1>
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              ← Back to Home
            </Link>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive suite of tools for financial crime prevention, investigation, and compliance
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {tool.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {tool.description}
                </p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Market Size
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tool.marketSize}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Example Companies
                  </h3>
                  <ul className="space-y-1">
                    {tool.examples.map((example, i) => (
                      <li key={i}>
                        <a
                          href={example.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          {example.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <Link
                  href={tool.route}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}