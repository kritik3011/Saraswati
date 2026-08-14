import React from 'react';
import { Award } from 'lucide-react';

const Results = () => {
  // Placeholder data as requested
  const results = [
    { id: 1, name: "Student Name", rank: "Rank — Information Coming Soon", exam: "UPSC CSE 2025" },
    { id: 2, name: "Student Name", rank: "Rank — Information Coming Soon", exam: "UPPSC 2025" },
    { id: 3, name: "Student Name", rank: "Rank — Information Coming Soon", exam: "UPSC CSE 2025" },
    { id: 4, name: "Student Name", rank: "Rank — Information Coming Soon", exam: "UPSC CSE 2024" },
    { id: 5, name: "Student Name", rank: "Rank — Information Coming Soon", exam: "UPPSC 2024" },
    { id: 6, name: "Student Name", rank: "Rank — Information Coming Soon", exam: "UPSC CSE 2024" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Our Students, Their Success Stories</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We are proud of our students who have consistently achieved top ranks in the Civil Services Examinations.
          </p>
        </div>

        {/* Filters Placeholder */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white">
            <option>All Examinations</option>
            <option>UPSC CSE</option>
            <option>UPPSC</option>
          </select>
          <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white">
            <option>All Years</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result) => (
            <div key={result.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center overflow-hidden border-4 border-gold/20">
                <Award className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-navy-900 mb-1">{result.name}</h3>
              <p className="text-gold font-semibold text-sm mb-2">{result.rank}</p>
              <p className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">{result.exam}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
