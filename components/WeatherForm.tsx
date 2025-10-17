'use client';

import { useState } from 'react';

interface WeatherFormProps {
    onCityChange: (city: string) => void;
}

export default function WeatherForm({ onCityChange }: WeatherFormProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onCityChange(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='mb-6'>
            <div className='flex gap-2'>
                <input
                    type='text'
                    placeholder='Enter city name...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
                <button
                    type='submit'
                    className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                >
                    Search
                </button>
            </div>
        </form>
    );
}