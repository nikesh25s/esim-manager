
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingId.trim() !== "") {
      router.push(`/dashboard?bookingId=${bookingId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-[25%]">
      <div className="w-full max-w-xs">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            eSIM Manager
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="bookingId" className="block text-xs font-medium text-gray-700 mb-1">
                Booking ID
              </label>
              <input
                type="text"
                id="bookingId"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Booking ID"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-xs font-semibold"
            >
              View Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 
