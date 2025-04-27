import Header from './Header';

export default function Layout({ children, showBack = false }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Only one Header rendered here */}
    
      
      <main className="mx-auto px-[15%] py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}