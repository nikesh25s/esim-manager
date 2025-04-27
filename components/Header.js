
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ showBack = false }) {
  const router = useRouter();

  const handleLogout = () => {
    
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <h3 className="text-xl font-bold text-blue-600 ml-2">eSIM Manager</h3>
         
        </div>

        <div className="flex items-center space-x-4">
          {/* Conditional back button */}
          {showBack && (
            <button 
              onClick={() => router.push('/dashboard')}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              ← Back to Dashboard
            </button>
          )}
          
         
          <button 
            onClick={handleLogout}
            className="text-gray-600 hover:text-blue-600 px-3 py-1 rounded-md hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}