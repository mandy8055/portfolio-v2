import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Manuj Sankrit - Senior Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background:
            'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #10b981 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold' }}>Manuj Sankrit</div>
        <div style={{ fontSize: 40, marginTop: 20 }}>
          Senior Software Engineer
        </div>
        <div style={{ fontSize: 30, marginTop: 20, opacity: 0.9 }}>
          🌌 Arctic Code Vault Contributor
        </div>
        <div style={{ fontSize: 30, marginTop: 10, opacity: 0.9 }}>
          ⚡ React • Next.js • TypeScript
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
