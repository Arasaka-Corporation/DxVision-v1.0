"use client"

import React, { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  const [loadedRows, setLoadedRows] = useState(50);

  useEffect(() => {
    fetch(`/api/getData3?limit=${loadedRows}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [loadedRows]);

  const handleLoadMore = () => {
    setLoadedRows((prevLoadedRows) => prevLoadedRows + 50);
  };

  return (
    <div className="py-10">
      <div className="grid place-items-center">
        <div className="text-5xl text-center text-white font-tektur relative">All Sightings
        <h1 className="text-xl text-center text-secondary font-tektur absolute -top-4 -right-12">HATCH</h1>
        </div>
        <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
    
        <h4 className="text-xl text-center text-white font-tektur relative">Larry Hatch was a UFO researcher who created one of the most comprehensive databases of UFO sightings. He spent 20 years compiling this database and writing the associated mapping and analysis program. Over the years, there have been posts on various forums asking about it. Hatch’s life’s work was nearly lost after his death in 2018. However, dedicated researchers have obtained copies of the original DOS program, loaded it into emulator DOSBox, and programatically retrieved 18,123 of the 18,552 entries</h4>

        <h2 className="text-xl text-center text-white font-tektur relative">Click the page and use your keyboard to scroll to right for more information!</h2>

      </div>

      <div className="overflow-x-auto mx-4">
        <table className="w-full bg-white shadow-md rounded-lg mt-4">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-800">
              <th className="py-2 px-4 font-semibold text-sm">Attributes</th>
              <th className="py-2 px-4 font-semibold text-sm">Date</th>
              <th className="py-2 px-4 font-semibold text-sm">Description</th>
              <th className="py-2 px-4 font-semibold text-sm">Key Values</th>
              <th className="py-2 px-4 font-semibold text-sm">Location</th>
              <th className="py-2 px-4 font-semibold text-sm">Refrence</th>
              <th className="py-2 px-4 font-semibold text-sm">Source</th>
              <th className="py-2 px-4 font-semibold text-sm">Source ID</th>
              <th className="py-2 px-4 font-semibold text-sm">Time</th>
              <th className="py-2 px-4 font-semibold text-sm">Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={`border-b-2 border-gray-800 ${index % 2 === 0 ? 'bg-gray-500' : ''}`}>
                <td className="py-2 px-4 text-sm">{row.attributes}</td>
                <td className="py-2 px-4 text-sm">{row.date}</td>
                <td className="py-2 px-4 text-sm">{row.desc}</td>
                <td className="py-2 px-4 text-sm">{row.key_vals}</td>
                <td className="py-2 px-4 text-sm">{row.location}</td>
                <td className="py-2 px-4 text-sm">{row.ref}</td>
                <td className="py-2 px-4 text-sm">{row.source}</td>
                <td className="py-2 px-4 text-sm">{row.source_id}</td>
                <td className="py-2 px-4 text-sm">{row.time}</td>
                <td className="py-2 px-4 text-sm">{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
