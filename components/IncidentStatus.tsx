import React from 'react';

const IncidentStatus = () => {
  return (
    <div className="flex items-center gap-4 text-white px-3 py-1 ml-4">
      {/* Left: Overlapping Profile Icons */}
      <div className="flex -space-x-2">
        <img
          src="/Picture1.png"
          alt="icon1"
          className="w-6 h-6 rounded-full"
        />
        <img
          src="/Picture2.png"
          alt="icon2"
          className="w-6 h-6 rounded-full"
        />
        <img
          src="/Picture3.png"
          alt="icon3"
          className="w-6 h-6 rounded-full"
        />
      </div>

      {/* Right: Text */}
      <div className="flex items-center gap-1 text-sm bg-black rounded-full border border-gray-700 px-3 py-1 whitespace-nowrap">
        <span className="text-green-400">✓✓</span>
        <span>4 resolved incidents</span>
      </div>
    </div>
  );
};

export default IncidentStatus;
