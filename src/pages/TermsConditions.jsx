import React from 'react';

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Terms & Conditions</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Last updated: August 2026</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 prose prose-navy max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">1. Welcome to Saraswati IAS!</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When you take admission with us or use our website, you agree to a few basic rules. We’ve kept them straightforward and easy to understand so we can maintain a focused, disciplined environment for all our aspirants. 
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">2. Admission & Fees</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Admissions are granted based on seat availability in your desired batch.</li>
              <li>Just a heads-up: once you pay your fees, we cannot offer any refunds or transfer the amount to another student. Please be sure about your decision before enrolling.</li>
              <li>If you are paying your fees in installments, please make sure to pay on time. Delaying payments might lead to an interruption in your classes or portal access.</li>
              <li>While our fee structure might change for upcoming new batches, it won't affect you if you've already enrolled in an ongoing program.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">3. Our Study Materials</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our faculty works really hard to create the best study materials, test series, and class notes for you. These resources are meant just for your personal preparation. Please don't copy, sell, or share them online (like on Telegram or WhatsApp groups) or with outside students. If an enrolled student is found doing this, we will unfortunately have to cancel their admission immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">4. Discipline & Conduct</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are serious about maintaining a peaceful and highly focused study environment for everyone. We expect all students to behave respectfully in class (both offline and online) and around the institute premises. If a student consistently disturbs the class or misbehaves, we may have to ask them to leave the institute permanently, and we won't be able to refund their fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">5. Class Schedules</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We try our absolute best to stick to the given class schedule. However, sometimes due to unavoidable reasons—like a teacher falling ill or an unexpected event in the city—we might have to change class timings, dates, or even faculty members. Whenever this happens, we will always try to inform you well in advance so your day isn't disrupted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">6. Jurisdiction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since we operate from Gorakhpur, any legal matters or disputes will fall under the jurisdiction of the courts located in Gorakhpur, Uttar Pradesh.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">7. Got Questions?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If anything in these rules is unclear to you, or if you have any questions before taking admission, just ask us at the front desk or contact us here:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Name:</strong> Saraswati IAS</li>
              <li><strong>Address:</strong> Gorakhpur, Uttar Pradesh, India</li>
              <li><strong>Phone:</strong> +91-9415273180</li>
              <li><strong>Email:</strong> info@saraswatiias.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
