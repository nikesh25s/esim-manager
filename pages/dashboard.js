

import { useRouter } from 'next/router';
import Header from '../components/Header';
import esimData from '../data/esimData.json';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setIsClient(true);
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  // Calculate percentage for progress bar
  const usedPercentage = (parseFloat(esimData.usage.usedData) / parseFloat(esimData.usage.totalData)) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack={false} />
      
      <div className="mx-auto px-[15%] py-8">
        <div className="max-w-6xl mx-auto">
          {/* Data Usage Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">

          <div className="mt-8 flex justify-end">
                <button
                  onClick={() => router.push('/recharge')}
                  className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition"
                >
                  Manage Sim
                </button>
              </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Data Usage</h3>
            <p className="text-gray-600 mb-4">{esimData.plan.name}</p>
            
            <div className="flex justify-between items-end mb-2">
              <span className="text-2xl font-bold">{esimData.usage.usedData}</span>
              <span className="text-gray-500">{esimData.usage.totalData}</span>
            </div>
            
            
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${usedPercentage}%` }}
              ></div>
              
            </div>
          </div>

          {/* Horizontal Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Remaining Data Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Remaining Data</h2>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-blue-600">{esimData.plan.remainingData}</p>
                <p className="text-gray-600">Available for use</p>
              </div>
              
              <table className="w-full">
                <tbody>
                  {[
                    ['Total Data', esimData.usage.totalData],
                    ['Used Data', esimData.usage.usedData],
                    ['SMS Total', esimData.usage.smsTotal],
                    ['SMS Used', esimData.usage.smsUsed],
                    ['Voice Total', esimData.usage.voiceTotal],
                    ['Voice Used', esimData.usage.voiceUsed],
                    ['Valid From', esimData.plan.validFrom],
                    ['Valid Until', esimData.plan.validUntil]
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">{label}</td>
                      <td className="py-2 text-right font-medium">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Current Session Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Session</h2>
              
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-blue-600">{esimData.currentSession.usageMB} MB</p>
                {isClient && (
                  <p className="text-gray-600">Last updated: {currentTime}</p>
                )}
              </div>
              
              <div className="space-y-4">
                {[
                  ['Session ID', esimData.currentSession.sessionId],
                  ['Started', isClient ? new Date(esimData.currentSession.started).toLocaleString() : esimData.currentSession.started],
                  ['Usage', `${esimData.currentSession.usageMB * 1024} KB`]
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-gray-600">{label}</span>
                    <span className="font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}