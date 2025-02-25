'use client';

import { useState } from 'react';
import { checkAddress, SanctionsResponse } from '@/src/utils/chainalysis';

// 0x1da5821544e25c636c1417ba96ade4cf6d2f9b5a

export default function Home() {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState<SanctionsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const response = await checkAddress(address);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Chainalysis Sanctions Check</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter cryptocurrency address"
            className="flex-1 p-2 border rounded"
          />
          <button 
            type="submit"
            disabled={loading || !address}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
          >
            {loading ? 'Checking...' : 'Check'}
          </button>
        </div>
      </form>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
          {error}
        </div>
      )}

      {result && (
        <div className="p-4 bg-gray-100 rounded">
          {result.identifications.length === 0 ? (
            <p className="text-green-600">✓ Address is not sanctioned</p>
          ) : (
            <div>
              <p className="text-red-600 font-bold mb-4">⚠️ Address is sanctioned</p>
              {result.identifications.map((identification, index) => (
                <div key={index} className="mb-4">
                  <p><strong>Category:</strong> {identification.category}</p>
                  {identification.name && <p><strong>Name:</strong> {identification.name}</p>}
                  {identification.description && (
                    <p><strong>Description:</strong> {identification.description}</p>
                  )}
                  {identification.url && (
                    <p>
                      <strong>More info:</strong>{' '}
                      <a 
                        href={identification.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View source
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}