import Link from "next/link"

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Legal Information</h1>

        <section id="terms" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
          <div className="prose prose-slate max-w-none">
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h3>
            <p>
              Welcome to ai-coding-assistant.com. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">2. Definitions</h3>
            <p>
              <strong>"Service"</strong> refers to the website operated by ai-coding-assistant.com, including all content, features, and functionality offered.<br />
              <strong>"User"</strong> refers to the individual accessing or using the Service.<br />
              <strong>"Content"</strong> refers to all information displayed, generated, or otherwise accessible through our Service.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">3. Use of Service</h3>
            <p>
              Our service provides AI-powered coding assistance. You agree to use the service only for lawful purposes and in accordance with these Terms. You are responsible for all activity that occurs under your account.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h3>
            <p>
              The Service and its original content, features, and functionality are owned by ai-coding-assistant.com and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">5. User Content</h3>
            <p>
              You retain ownership of any intellectual property rights you hold in content you submit to our service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">6. Termination</h3>
            <p>
              We reserve the right to terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h3>
            <p>
              In no event shall ai-coding-assistant.com, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including loss of profits, data, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h3>
            <p>
              We reserve the right to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at appsplosion.help@gmail.com.
            </p>
          </div>
        </section>
        
        <section id="privacy" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <div className="prose prose-slate max-w-none">
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h3>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h3>
            <p>
              <strong>Personal Data:</strong> We may collect personally identifiable information, such as your name, email address, and other contact details when you register or use certain features.<br />
              <strong>Usage Data:</strong> We may collect information on how the Service is accessed and used. This may include your computer's IP address, browser type, pages visited, time spent on pages, and other diagnostic data.<br />
              <strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h3>
            <p>
              We may use the information we collect for various purposes, including:<br />
              - To provide and maintain our Service<br />
              - To notify you about changes to our Service<br />
              - To provide customer support<br />
              - To gather analysis or valuable information to improve our Service<br />
              - To monitor the usage of our Service<br />
              - To detect, prevent, and address technical issues
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h3>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Services</h3>
            <p>
              Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">6. Children's Privacy</h3>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at appsplosion.help@gmail.com.
            </p>
          </div>
        </section>
        
        <div className="mt-12 border-t pt-8">
          <Link href="/" className="text-teal-600 hover:text-teal-700">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}