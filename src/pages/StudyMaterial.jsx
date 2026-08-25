import React from 'react';

const StudyMaterial = () => {

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Tution Publications Section */}
        <div className="mb-20">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-6">Tution Publications</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Exclusive study material by Saraswati IAS. To purchase these books, please contact the coaching center directly.
            </p>
          </div>

          {/* Mobile: Horizontal scroll with snap, Desktop: Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { title: "सामान्य विज्ञान एवं प्रौद्योगिकी", desc: "UPSC & UPPSC", img: "/img5.jpeg" },
              { title: "पर्यावरण एवं पारिस्थितिकी", desc: "For Civil Services Preliminary & Mains", img: "/img6.jpeg" },
              { title: "कला एवं संस्कृति", desc: "For Civil Services Preliminary & Mains", img: "/img7.jpeg" },
              { title: "Environment & Ecology", desc: "For Civil Services Preliminary & Mains", img: "/img8.jpeg" },
              { title: "General Studies At A Glance", desc: "Prelims Examination", img: "/img9.jpeg" },
              { title: "Saraswati IAS Publication", desc: "Study Material", img: "/img3.jpeg" },
              { title: "Saraswati IAS Publication", desc: "Study Material", img: "/img4.jpeg" },
              { title: "Saraswati IAS Publication", desc: "Study Material", img: "/WhatsApp Image 2026-08-23 at 22.57.15.jpeg" },
              { title: "Saraswati IAS Publication", desc: "Study Material", img: "/WhatsApp Image 2026-08-23 at 22.57.16.jpeg" }
            ].map((book, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col min-w-[75vw] sm:min-w-[280px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink">
                <div className="h-56 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                  <img src={book.img} alt={book.title} className="h-full object-contain shadow-sm" />
                </div>
                <div className="p-5 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-bold font-poppins text-navy-900 mb-2 leading-tight">{book.title}</h3>
                  <p className="text-xs text-gray-500 mb-4 flex-grow">{book.desc}</p>
                  <a href="/contact" className="btn-secondary text-sm py-2 px-4 w-full">Contact to Buy</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Books Section */}
        <div>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-6">Recommended Books</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Authored by Rakesh Saraswat (McGraw Hill) for comprehensive UPSC & UPPSC preparation.
            </p>
          </div>

          {/* Mobile: Horizontal scroll with snap, Desktop: Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Book 1 */}
            <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink h-full">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                  <img src="https://static.wixstatic.com/media/97db43_7aebfc04b4f3411aac4721459dade721~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="सामान्य अध्ययन — प्रश्न पत्र 1" className="h-full object-contain shadow-md" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">सामान्य अध्ययन — प्रश्न पत्र 1</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-grow">IAS / UP PCS | Mains Examination</p>
                  <a href="https://www.araavat.com/product-page/samanya-adhyayan-mukhya-pariksha-upsc-cse-uppsc-pcs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink h-full">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                  <img src="https://static.wixstatic.com/media/97db43_aa51dbec89b04c36a47546bbba5c5b8d~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="सामान्य अध्ययन — प्रश्न पत्र 2" className="h-full object-contain shadow-md" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">सामान्य अध्ययन — प्रश्न पत्र 2</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-grow">Author: Rakesh Saraswat | Publisher: McGraw Hill</p>
                  <a href="https://www.araavat.com/product-page/samanya-adhyayan-mukhya-pariksha-paper-2-upsc-cse-uppsc-pcs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink h-full">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                  <img src="https://static.wixstatic.com/media/97db43_7001644d73df4b469caf07c145ea0e22~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="सामान्य अध्ययन — प्रश्न पत्र 3" className="h-full object-contain shadow-md" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">सामान्य अध्ययन — प्रश्न पत्र 3</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-grow">Author: Rakesh Saraswat | Publisher: McGraw Hill</p>
                  <a href="https://www.araavat.com/product-page/samanya-adhyayan-mukhya-pariksha-paper-3-upsc-cse-uppsc-pcs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
                </div>
              </div>
            </div>

            {/* Book 4 */}
            <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink h-full">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                  <img src="https://gkpublications.com/cdn/shop/files/EthicsIntegrityAptitudeBookforUPSCIASCivilServicesMainsExaminationGSPaper4PrelimsMains9thEdition.jpg?v=1773912962" alt="नीतिशास्त्र, सत्यनिष्ठा एवं अभिवृत्ति (Ethics, Integrity & Aptitude)" className="h-full object-contain shadow-md" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">नीतिशास्त्र, सत्यनिष्ठा एवं अभिवृत्ति (Paper 4)</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-grow">Authors: G. Subba Rao & P. N. Roy Chowdhury | Publisher: GK Publications</p>
                  <a href="https://gkpublications.com/products/ethics-integrity-aptitude-book-for-upsc-ias-civil-services-mains-examination-gs-paper-4-prelims-mains-9th-edition-2025-previous-year-solved-papers-g-subba-rao-p-n-roychowdhury-gkp" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
                </div>
              </div>
            </div>

            {/* Book 5 */}
            <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink h-full">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="h-64 bg-gray-100 overflow-hidden relative flex justify-center p-4">
                  <img src="https://idealbookdepot.com/wp-content/uploads/2023/10/ibd_9789355324962.png" alt="Uttar Pradesh: A Comprehensive Study" className="h-full object-contain shadow-md" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-poppins text-navy-900 mb-2">Uttar Pradesh: A Comprehensive Study</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-grow">Author: Rakesh Saraswat</p>
                  <a href="https://idealbookdepot.com/product/uttar-pradesh-samagra-adhyayan-3e-uppsc-uppcs-ro-aro-upsssc-pet-lower-pcs-vdo-upprpb/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm w-full">Buy Now</a>
                </div>
              </div>
            </div>

            {/* Book 6 */}
            <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink h-full">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full">
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
    </div>
  );
};

export default StudyMaterial;
