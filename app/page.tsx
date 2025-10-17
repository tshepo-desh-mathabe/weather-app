'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import WeatherForm from '@/components/WeatherForm';
import WeatherDisplay from '@/components/WeatherDisplay';
import DayPartialCloud from '@/public/assets/day_partial_cloud.svg';
import Image from 'next/image';

const queryClient = new QueryClient();

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string>('');

  return (
    <QueryClientProvider client={queryClient}>
      <main className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
        <div className='max-w-md w-full bg-white rounded-xl shadow-lg p-8'>
          <h1 className='text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-2'>
            <Image src={DayPartialCloud} alt='Weather' width={42} height={42} />Weather App
          </h1>
          <WeatherForm onCityChange={setSelectedCity} />
          {selectedCity && <WeatherDisplay city={selectedCity} />}
        </div>
      </main>
    </QueryClientProvider>
  );
}