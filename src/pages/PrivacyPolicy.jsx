import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Last updated: August 2026</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 prose prose-navy max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Saraswati IAS, we understand how important your privacy is. When you visit our website or walk into our Gorakhpur center, we want you to feel completely safe sharing your details with us. This page explains what information we collect, why we need it, and how we keep it secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">2. The Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To help you with your preparation and keep you updated, we might ask for a few details. Here's what we generally collect when you sign up or contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Basic Details:</strong> Your name, so we know what to call you.</li>
              <li><strong>Contact Info:</strong> Your phone number and email address, so we can reach you with important updates.</li>
              <li><strong>Academic Info:</strong> Your educational background and the courses or optional subjects you're interested in, so we can guide you better.</li>
              <li><strong>Technical Details:</strong> Standard things like your IP address or browser type when you browse our website, which helps us make sure the site works well for everyone.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">3. Why We Need This Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We only use your details for things related to your studies and to give you a better experience at our institute. For example, we use it to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Get you registered as a student in our batches.</li>
              <li>Provide you with course materials, schedules, and test series access.</li>
              <li>Reach out to you if there's a sudden change in class timings.</li>
              <li>Improve our website and make sure you're finding the study materials easily.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">4. Keeping Your Data Safe</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We take your data security very seriously. Your contact details and other information are kept safe and are only accessible to our staff members who actually need them—like our counselors or administrators helping you with your classes. We promise we will never sell or rent your personal information to outside marketing agencies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">5. How Long We Keep Your Data</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We hold onto your details as long as you are associated with Saraswati IAS, or as long as it's needed for basic administrative and legal reasons. Once we no longer need it, we make sure it is safely removed from our records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you ever have any questions about how we handle your data, or if you want us to update or remove your details, just ask us at the front desk or get in touch:
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

export default PrivacyPolicy;
