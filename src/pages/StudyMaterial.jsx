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
        {/* Recommended Books Section */}
        <div className="mt-20">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-6">Recommended Books</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Authored by Rakesh Saraswat (McGraw Hill) for comprehensive UPSC & UPPSC preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                <img src="https://static.wixstatic.com/media/97db43_7aebfc04b4f3411aac4721459dade721~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="सामान्य अध्ययन — प्रश्न पत्र 1" className="h-full object-contain shadow-md" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">सामान्य अध्ययन — प्रश्न पत्र 1</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">IAS / UP PCS | Mains Examination</p>
                <a href="https://www.araavat.com/product-page/samanya-adhyayan-mukhya-pariksha-upsc-cse-uppsc-pcs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                <img src="https://static.wixstatic.com/media/97db43_aa51dbec89b04c36a47546bbba5c5b8d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="सामान्य अध्ययन — प्रश्न पत्र 2" className="h-full object-contain shadow-md" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">सामान्य अध्ययन — प्रश्न पत्र 2</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">Author: Rakesh Saraswat | Publisher: McGraw Hill</p>
                <a href="https://www.araavat.com/product-page/samanya-adhyayan-mukhya-pariksha-paper-2-upsc-cse-uppsc-pcs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                <img src="https://static.wixstatic.com/media/97db43_7001644d73df4b469caf07c145ea0e22~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="सामान्य अध्ययन — प्रश्न पत्र 3" className="h-full object-contain shadow-md" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">सामान्य अध्ययन — प्रश्न पत्र 3</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">Author: Rakesh Saraswat | Publisher: McGraw Hill</p>
                <a href="https://www.araavat.com/product-page/samanya-adhyayan-mukhya-pariksha-paper-3-upsc-cse-uppsc-pcs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
              </div>
            </div>

            {/* Book 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                <img src="https://gkpublications.com/cdn/shop/files/EthicsIntegrityAptitudeBookforUPSCIASCivilServicesMainsExaminationGSPaper4PrelimsMains9thEdition.jpg?v=1773912962" alt="नीतिशास्त्र, सत्यनिष्ठा एवं अभिवृत्ति (Ethics, Integrity & Aptitude)" className="h-full object-contain shadow-md" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">नीतिशास्त्र, सत्यनिष्ठा एवं अभिवृत्ति (Paper 4)</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">Authors: G. Subba Rao & P. N. Roy Chowdhury | Publisher: GK Publications</p>
                <a href="https://gkpublications.com/products/ethics-integrity-aptitude-book-for-upsc-ias-civil-services-mains-examination-gs-paper-4-prelims-mains-9th-edition-2025-previous-year-solved-papers-g-subba-rao-p-n-roychowdhury-gkp" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
              </div>
            </div>

            {/* Book 5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                <img src="https://idealbookdepot.com/wp-content/uploads/2023/10/ibd_9789355324962.png" alt="Uttar Pradesh: A Comprehensive Study" className="h-full object-contain shadow-md" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">Uttar Pradesh: A Comprehensive Study</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">Author: Rakesh Saraswat</p>
                <a href="https://idealbookdepot.com/product/uttar-pradesh-samagra-adhyayan-3e-uppsc-uppcs-ro-aro-upsssc-pet-lower-pcs-vdo-upprpb/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
              </div>
            </div>

            {/* Book 6 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                <img src="https://www.sparklecopier.com/wp-content/uploads/2025/10/rakesh-1.jpg" alt="उत्तर प्रदेश समग्र अध्ययन" className="h-full object-contain shadow-md" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">उत्तर प्रदेश समग्र अध्ययन</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">Author: राकेश सारस्वत / Rakesh Saraswat</p>
                <a href="https://www.sparklecopier.com/product/uppsc-uppcs-uttar-pradesh-ek-samagra-adhyayan-by-rakesh-saraswat-2nd-edition-book-mc-graw-hill/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
