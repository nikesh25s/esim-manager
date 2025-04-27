export default function UsageBar({ total, used, unit }) {
    const percentage = Math.min(100, Math.max(0, (used / total) * 100));
  
    return (
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>0 {unit}</span>
          <span>{total} {unit}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-600 mt-1">
          {used.toFixed(1)} {unit} used ({percentage.toFixed(0)}%)
        </div>
      </div>
    );
  }