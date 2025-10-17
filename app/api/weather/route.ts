import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');

    if (!city) {
        return NextResponse.json({ error: 'City is required' }, { status: 400 });
    }

    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const baseUrl = process.env.NEXT_PUBLIC_WEATHER_API_BASE_URL;

        const response = await fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            if (response.status === 404) {
                return NextResponse.json({ error: 'City not found' }, { status: 404 });
            }
            return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}