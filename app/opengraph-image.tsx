import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Aman Khan - Frontend Developer & Tech Lead | Khan Builds Tech';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.khanbuilds.tech";

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: 'white',
                        textAlign: 'center',
                        padding: '40px',
                    }}
                >
                    {/* Actual Logo */}
                    <div
                        style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '70px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '30px',
                        }}
                    >
                        <img
                            src={`${siteUrl}/images/AK_Dark.png`}
                            width={116}
                            height={116}
                            alt="AK Logo"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>

                    {/* Main Title */}
                    <h1
                        style={{
                            fontSize: '60px',
                            fontWeight: 'bold',
                            margin: '0 0 20px 0',
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            lineHeight: 1.2,
                        }}
                    >
                        Aman Khan
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: '32px',
                            margin: '0 0 20px 0',
                            color: '#e5e7eb',
                            fontWeight: '600',
                        }}
                    >
                        Frontend Developer & Tech Lead
                    </p>

                    {/* Brand */}
                    <p
                        style={{
                            fontSize: '24px',
                            margin: '0',
                            color: '#9ca3af',
                            fontWeight: '500',
                        }}
                    >
                        Khan Builds Tech
                    </p>

                    {/* Tech Stack */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '30px',
                            fontSize: '16px',
                            color: '#6b7280',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        <span>React</span>
                        <span>•</span>
                        <span>Next.js</span>
                        <span>•</span>
                        <span>Node.js</span>
                        <span>•</span>
                        <span>Express.js</span>
                        <span>•</span>
                        <span>AWS</span>
                    </div>

                    {/* Call-to-Action */}
                    <div
                        style={{
                            marginTop: '40px',
                            padding: '12px 24px',
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >
                        View Portfolio →
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}