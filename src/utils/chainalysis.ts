export interface SanctionIdentification {
    category: string;
    name: string | null;
    description: string | null;
    url: string | null;
  }
  
  export interface SanctionsResponse {
    identifications: SanctionIdentification[];
  }
  
  export async function checkAddress(address: string): Promise<SanctionsResponse> {
    try {
      const response = await fetch(`/api/sanctions?address=${encodeURIComponent(address)}`);
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error checking address:', error);
      throw error;
    }
  }