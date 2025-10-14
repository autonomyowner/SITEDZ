import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Perfect Events',
  description: 'Privacy Policy for Perfect Events - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          Last Updated: October 14, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Perfect Events (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Information You Provide to Us
            </h3>
            <p className="text-gray-700 mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Fill out contact forms or request quotes</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Communicate with us via email, phone, or WhatsApp</li>
              <li>Engage with our social media pages</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Name and contact information (email address, phone number)</li>
              <li>Event details and preferences</li>
              <li>Budget information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Click patterns and website navigation</li>
            </ul>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Meta Pixel and Third-Party Tracking Technologies
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.1 Meta Pixel (Facebook Pixel)
            </h3>
            <p className="text-gray-700 mb-4">
              Our website uses the Meta Pixel (Facebook Pixel ID: 752192693921476), a tracking technology provided by Meta Platforms, Inc. The Meta Pixel allows us and Meta to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Track conversions:</strong> Measure the effectiveness of our advertising by understanding the actions people take on our website</li>
              <li><strong>Build audiences:</strong> Create custom audiences for targeted advertising on Facebook and Instagram</li>
              <li><strong>Optimize ads:</strong> Improve ad delivery to people who are most likely to be interested in our services</li>
              <li><strong>Remarket to visitors:</strong> Show relevant ads to people who have previously visited our website</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              3.2 Information Collected by Meta Pixel
            </h3>
            <p className="text-gray-700 mb-4">
              The Meta Pixel collects the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Event Data:</strong> Information about your interactions with our website, such as pages visited, buttons clicked, forms submitted, and other actions</li>
              <li><strong>Device and Browser Information:</strong> Your IP address, browser type, operating system, device identifiers, and screen resolution</li>
              <li><strong>Cookie Data:</strong> Information stored in cookies and similar technologies placed on your device</li>
              <li><strong>URL Information:</strong> The web pages you visit on our site and the referring URL</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              3.3 How Meta Uses This Information
            </h3>
            <p className="text-gray-700 mb-4">
              Meta uses the information collected through the Meta Pixel to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide measurement, analytics, and reporting services to us</li>
              <li>Improve and optimize ad delivery on Facebook, Instagram, and other Meta platforms</li>
              <li>Show you personalized ads based on your interests and browsing behavior</li>
              <li>Enhance the security and integrity of Meta&apos;s services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Meta&apos;s use of your information is also governed by Meta&apos;s Privacy Policy and the Meta Business Tools Terms. For more information, please visit:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Meta Privacy Policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.facebook.com/privacy/policy</a></li>
              <li>Meta Business Tools Terms: <a href="https://www.facebook.com/legal/terms/businesstools" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.facebook.com/legal/terms/businesstools</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              3.4 Cookies and Similar Technologies
            </h3>
            <p className="text-gray-700 mb-4">
              We and our third-party partners (including Meta) use cookies, web beacons, pixels, and other storage technologies to collect information about your use of our website. Cookies are small text files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve your user experience</li>
              <li>Deliver relevant advertising</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>To respond to your inquiries and provide customer service</li>
              <li>To process event bookings and deliver our services</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To analyze website usage and trends</li>
              <li>To deliver targeted advertising on Meta platforms and other websites</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., hosting, analytics, email delivery)</li>
              <li><strong>Meta Platforms, Inc.:</strong> Through the Meta Pixel as described in Section 3</li>
              <li><strong>Business Partners:</strong> Vendors and suppliers who help us deliver events and services</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Privacy Rights and Choices
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.1 Opt-Out of Targeted Advertising
            </h3>
            <p className="text-gray-700 mb-4">
              You have the right to opt out of interest-based advertising. You can control how Meta uses your information for advertising by:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Adjusting your ad preferences in your Facebook account settings: <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.facebook.com/ads/preferences</a></li>
              <li>Using industry opt-out tools:
                <ul className="list-circle pl-6 mt-2">
                  <li>Digital Advertising Alliance: <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">http://www.aboutads.info/choices</a></li>
                  <li>European Interactive Digital Advertising Alliance: <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">http://www.youronlinechoices.eu/</a></li>
                  <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">http://www.networkadvertising.org/choices/</a></li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              6.2 Cookie Controls
            </h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>View and delete cookies</li>
              <li>Block all cookies or specific cookies</li>
              <li>Receive notifications when cookies are set</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Please note that blocking cookies may affect your ability to use certain features of our website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              6.3 Additional Rights
            </h3>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have additional rights, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to our processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where we rely on consent</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us using the information in Section 10.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Event data collected through the Meta Pixel may be retained by Meta for up to two years as described in the Meta Business Tools Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700"><strong>Perfect Events</strong></p>
              <p className="text-gray-700">Email: autonomy.owner@gmail.com</p>
              <p className="text-gray-700">Phone: 0797339451</p>
              <p className="text-gray-700">Address: Ben Aknoun, Algeria</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. International Data Transfers
            </h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. By using our website and services, you consent to the transfer of your information to these countries. We take steps to ensure that your information receives an adequate level of protection in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-gray-700 mb-4">
              If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal information based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li><strong>Consent:</strong> Where you have given consent for specific processing activities</li>
              <li><strong>Contract Performance:</strong> Where processing is necessary to fulfill our contract with you</li>
              <li><strong>Legal Obligation:</strong> Where processing is necessary to comply with legal requirements</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, such as improving our services and marketing, provided these interests do not override your rights and freedoms</li>
            </ul>
          </section>

          <section className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Your Consent
            </h3>
            <p className="text-gray-700">
              By using our website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described herein, including the use of Meta Pixel and other tracking technologies for analytics and advertising purposes.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

