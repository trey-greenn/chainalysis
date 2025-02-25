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
              Latest Industry News & Developments
            </h1>
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* News Items */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}