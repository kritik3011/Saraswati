import React from 'react';

const StudyMaterial = () => {

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Recommended Books Section */}
        <div>
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
