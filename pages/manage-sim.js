


import Link from 'next/link';

export default function ManageSim() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo and Logout */}
      <Header showBack={true} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Back to Dashboard Link */}
        <Link href="/dashboard" className="flex items-center text-blue-600 mb-6">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg> */}
          Back to Dashboard
        </Link>

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Manage SIM</h1>

        {/* Current Plan Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Plan Name: Price</p>
              <p className="text-lg font-medium">Premium Monthly: <span className="text-blue-600">$29.99/month</span></p>
            </div>
            <div>
              <p className="text-gray-600">Validity: Remaining Data</p>
              <p className="text-lg font-medium">3/1/2024 - 3/31/2024: <span className="text-blue-600">5.8 GB</span></p>
            </div>
          </div>
        </div>

        {/* Available Plans Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Available Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold">Basic Monthly</h3>
              <p className="text-xl font-bold text-blue-600 my-2">$19.99/month</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="mr-2">☉</span> 5GB Data
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> 30 Days Validity
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> Standard Speed
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Select Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold">Premium Monthly</h3>
              <p className="text-xl font-bold text-blue-600 my-2">$29.99/month</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="mr-2">☉</span> 10GB Data
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> 30 Days Validity
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> High Speed
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> Priority Support
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Select Plan
              </button>
            </div>

            {/* Unlimited Plan */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold">Unlimited Monthly</h3>
              <p className="text-xl font-bold text-blue-600 my-2">$49.99/month</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="mr-2">☉</span> Unlimited Data
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> 30 Days Validity
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> Maximum Speed
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> 24/7 Support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☉</span> Global Roaming
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}