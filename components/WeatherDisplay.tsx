'use client';

import { useQuery } from '@tanstack/react-query';
import { getWeatherIcon } from '@/lib/utils';
import LoadingSpinner from './LoadingSpinner';

interface WeatherDisplayProps {
    city: string;
}

interface WeatherData {
    name: string;
    main: { temp: number };
    weather: Array<{ main: string; description: string; icon: string }>;
}

export default function WeatherDisplay({ city }: WeatherDisplayProps) {
    const { data, error, isLoading } = useQuery<WeatherData, Error>({
        queryKey: ['weather', city],
        queryFn: async () => {
            const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
            if (!response.ok) {
                if (response.status === 404) throw new Error('City not found');
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        },
        retry: 1,
    });

    if (isLoading) return <LoadingSpinner />;

    if (error) {
        return (
            <div className='text-center py-8'>
                <div className='text-red-500 text-lg mb-2'>❌ {error.message}</div>
                <button
                    onClick={() => globalThis.location.reload()}
                    className='text-blue-600 hover:underline'
                >
                    Try again
                </button>
            </div>
        );
    }

    if (!data) return null;

    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].main;
    const description = data.weather[0].description;
    const icon = getWeatherIcon(data.weather[0].icon);

    return (
        <div className='text-center space-y-4'>
            <div className='text-6xl'>{icon}</div>
            <div className='space-y-2'>
                <h2 className='text-3xl font-bold text-gray-800'>{data.name}</h2>
                <p className='text-5xl font-light text-gray-700'>{temp}°C</p>
                <p className='text-xl capitalize text-gray-600'>{condition}</p>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    );
}