import React from 'react';
import { Download, FileText, Search } from 'lucide-react';

const StudyMaterial = () => {
  const materials = [
    { id: 1, title: "UPSC Current Affairs – August 2026", category: "Current Affairs", date: "Aug 10, 2026" },
    { id: 2, title: "Indian Polity Important Articles", category: "UPSC Notes", date: "Aug 05, 2026" },
    { id: 3, title: "UPPSC Special - UP GK Notes", category: "UPPSC Notes", date: "Aug 01, 2026" },
    { id: 4, title: "Geography Optional - Climatology", category: "Geography", date: "Jul 28, 2026" },
    { id: 5, title: "History Optional - Ancient India", category: "History", date: "Jul 25, 2026" },
    { id: 6, title: "Sociology Optional - Thinkers", category: "Sociology", date: "Jul 20, 2026" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Study Resources for Serious Aspirants</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Access our comprehensive collection of current affairs, class notes, and previous year papers.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search study material..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white w-full md:w-48">
            <option>All Categories</option>
            <option>Current Affairs</option>
            <option>UPSC Notes</option>
            <option>UPPSC Notes</option>
            <option>Optional Subjects</option>
          </select>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-50 text-navy-900 p-3 rounded-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-semibold">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold font-poppins text-navy-900 mb-2 flex-grow">{item.title}</h3>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">{item.date}</span>
                <button className="flex items-center text-gold hover:text-orange-600 font-semibold text-sm transition-colors">
                  <Download className="w-4 h-4 mr-1" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary">Load More Resources</button>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
