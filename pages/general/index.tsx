import Link from 'next/link';

export default function GeneralHome() {
  const newsItems = [
    "Bitcoin surges past $50,000, driven by institutional investments and rising adoption.",
    "Ethereum's transition to proof-of-stake reduces energy consumption by over 99%.",
    "Major banks like JPMorgan and Goldman Sachs expand crypto services for clients.",
    "DeFi (Decentralized Finance) platforms grow rapidly, offering alternative financial services.",
    "Central Bank Digital Currencies (CBDCs) gain traction, with China leading the charge.",
    "SEC continues its scrutiny of cryptocurrency regulations and potential ETFs.",
    "Stablecoins face increasing regulation amidst concerns over financial stability.",
    "AI-powered trading bots become more popular, driving innovations in algorithmic trading.",
    "Financial firms adopt AI to streamline operations and reduce compliance costs.",
    "AI models like GPT-4 are being used for financial risk assessments and predictions.",
    "Hedge funds leverage machine learning to optimize investment strategies.",
    "Decentralized Autonomous Organizations (DAOs) redefine governance in blockchain ecosystems.",
    "NFTs see explosive growth, impacting art, gaming, and digital assets markets.",
    "The metaverse economy expands, with virtual real estate and digital assets booming.",
    "AI-driven financial advisors grow in demand, offering personalized investment insights.",
    "The rise of Quantum Computing poses a potential challenge to current encryption standards in finance.",
    "Large financial institutions are exploring blockchain for cross-border payments.",
    "AI ethics and regulation come into focus as financial companies increase AI usage."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Crypto, Finance & AI News
            </h1>
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              ← Back to Home
            </Link>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Latest trends and developments in cryptocurrency, finance, and artificial intelligence
          </p>
        </div>

        {/* News Items */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Latest Developments
          </h2>
          
          <ul className="space-y-4">
            {newsItems.map((item, index) => (
              <li 
                key={index}
                className="flex items-start"
              >
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Cryptocurrency</h3>
            <p className="text-gray-600">
              Latest trends in Bitcoin, Ethereum, DeFi, NFTs, and regulatory developments in the crypto space.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Finance</h3>
            <p className="text-gray-600">
              Updates on traditional finance, banking innovations, and the integration of blockchain in financial services.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">AI & Technology</h3>
            <p className="text-gray-600">
              Developments in artificial intelligence, machine learning, and their applications in financial services.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}