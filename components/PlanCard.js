export default function PlanCard({ plan, isSelected, onSelect }) {
    return (
      <div
        className={`border rounded-lg p-6 cursor-pointer transition duration-200 ${
          isSelected
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-300'
        }`}
        onClick={onSelect}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{plan.name}</h3>
          {isSelected && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Selected
            </span>
          )}
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-2">{plan.price}</p>
        <p className="text-gray-600 mb-4">{plan.data} data</p>
        <div className="border-t border-gray-200 pt-4">
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Validity: {plan.validity}</li>
            <li>Speed: {plan.speed}</li>
            {plan.support && <li>Support: {plan.support}</li>}
            {plan.roaming && <li>Roaming included</li>}
          </ul>
        </div>
      </div>
    );
  }