
import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Recharge() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Available plans data
  const plans = [
    {
      name: "Basic Monthly",
      price: "$19.99/month",
      features: [
        "5GB Data",
        "30 Days Validity",
        "Standard Speed"
      ]
    },
    {
      name: "Premium Monthly",
      price: "$29.99/month",
      features: [
        "10GB Data",
        "30 Days Validity",
        "High Speed",
        "Priority Support"
      ]
    },
    {
      name: "Unlimited Monthly",
      price: "$49.99/month",
      features: [
        "Unlimited Data",
        "30 Days Validity",
        "Maximum Speed",
        "24/7 Support",
        "Global Roaming"
      ]
    }
  ];

  const handleRecharge = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsSuccess(true);
      setTimeout(() => router.push('/dashboard'), 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack={true} />
      <div className="mx-auto px-[15%] py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recharge Plan</h1>
          
          {isSuccess ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Recharge Done!</h2>
              <p className="text-gray-500 mt-4">Redirecting to dashboard...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {plans.map((plan) => (
                  <div 
                    key={plan.name}
                    className={`border rounded-lg p-6 transition-all ${
                      selectedPlan?.name === plan.name 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-center">{plan.name}</h3>
                    <p className="text-xl font-bold text-blue-600 my-4 text-center">{plan.price}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2">☉</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setSelectedPlan(plan)}
                      className={`w-full py-2 rounded-md ${
                        selectedPlan?.name === plan.name
                          ? "bg-gray-300 text-gray-600 cursor-default"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {selectedPlan?.name === plan.name ? "Selected" : "Select Plan"}
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => router.push('/dashboard')}
                  className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 transition"
                >
                  Back
                </button>
                
                <button
                  onClick={handleRecharge}
                  disabled={!selectedPlan || isLoading}
                  className={`py-2 px-6 rounded-md transition ${
                    !selectedPlan || isLoading
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Confirm Recharge"
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}