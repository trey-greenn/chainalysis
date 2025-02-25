import type { NextApiRequest, NextApiResponse } from 'next';

const CHAINALYSIS_API_KEY = '0904e29ce073a35e5794f85f99935bbad987dddb90bdb594d9744d0fb7f79c0f';
const CHAINALYSIS_API_URL = 'https://public.chainalysis.com/api/v1/addresses';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.query;

  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    const response = await fetch(`${CHAINALYSIS_API_URL}/${encodeURIComponent(address)}`, {
      method: 'GET',
      headers: {
        'Token': CHAINALYSIS_API_KEY,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Chainalysis API error:', errorText);
      return res.status(response.status).json({ 
        error: `Chainalysis API Error: ${response.status}` 
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}