import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  ChevronLeft, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Scale, 
  UserCheck, 
  Music, 
  MapPin, 
  Shield, 
  Ban, 
  CreditCard,
  RefreshCw,
  MessageSquare,
  Copyright,
  Gavel,
  Globe,
  Mail,
  Heart
} from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = "December 25, 2024";
  const effectiveDate = "December 25, 2024";

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full bg-orange-600/5 blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl mb-6">
            <FileText className="h-8 w-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Please read these terms carefully before using melOwi. By using our service, you agree to be bound by these terms.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>Last Updated: {lastUpdated}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span>Effective: {effectiveDate}</span>
          </div>
        </header>

        {/* Quick Summary */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-orange-400" />
              Quick Summary (The Human Version)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">Share your music moments at locations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">Connect with other music lovers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">Discover trending music in your city</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">Your content belongs to you</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">No harassment or hate speech</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">No spam or fake accounts</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">No illegal content or activities</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">No impersonating others</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {[
                { num: '1', title: 'Acceptance of Terms' },
                { num: '2', title: 'Eligibility' },
                { num: '3', title: 'Account Registration' },
                { num: '4', title: 'The melOwi Service' },
                { num: '5', title: 'User Content' },
                { num: '6', title: 'Acceptable Use Policy' },
                { num: '7', title: 'Intellectual Property' },
                { num: '8', title: 'Third-Party Services' },
                { num: '9', title: 'Termination' },
                { num: '10', title: 'Disclaimers' },
                { num: '11', title: 'Limitation of Liability' },
                { num: '12', title: 'Indemnification' },
                { num: '13', title: 'Dispute Resolution' },
                { num: '14', title: 'General Provisions' },
                { num: '15', title: 'Contact Information' },
              ].map((item) => (
                <a 
                  key={item.num}
                  href={`#section-${item.num}`}
                  className="text-gray-400 hover:text-orange-400 transition-colors py-1"
                >
                  {item.num}. {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Section 1: Acceptance of Terms */}
          <section id="section-1" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-xl">
                <CheckCircle className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Welcome to melOwi! These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "User") and melOwi ("we," "us," "our," or "melOwi") governing your access to and use of the melOwi mobile application, website, and related services (collectively, the "Service").
              </p>
              <p>
                By creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Service.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on the Service and updating the "Last Updated" date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </section>

          {/* Section 2: Eligibility */}
          <section id="section-2" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <UserCheck className="h-5 w-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">2. Eligibility</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>To use the Service, you must:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Be at least <strong className="text-white">13 years of age</strong>. If you are under 18, you must have permission from a parent or legal guardian to use the Service.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Have the legal capacity to enter into a binding agreement.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Not be prohibited from using the Service under applicable laws.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Not have been previously banned or removed from the Service.</div>
                </li>
              </ul>
              <p>
                If you are using the Service on behalf of a business or other entity, you represent that you have the authority to bind that entity to these Terms.
              </p>
            </div>
          </section>

          {/* Section 3: Account Registration */}
          <section id="section-3" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-xl">
                <Shield className="h-5 w-5 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold">3. Account Registration</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">3.1 Creating an Account</h3>
                <p>
                  To access most features of the Service, you must create an account. When you register, you agree to provide accurate, current, and complete information. You must keep your account information updated.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">3.2 Account Security</h3>
                <p>You are responsible for:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Maintaining the confidentiality of your password</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>All activities that occur under your account</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Notifying us immediately of any unauthorized access or security breach</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">3.3 Username Guidelines</h3>
                <p>Your username must not:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Impersonate any person, brand, or organization</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Contain offensive, vulgar, or inappropriate language</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Violate any trademark or intellectual property rights</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Be misleading or deceptive</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: The melOwi Service */}
          <section id="section-4" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-xl">
                <Music className="h-5 w-5 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">4. The melOwi Service</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">4.1 Service Description</h3>
                <p>
                  melOwi is a social music discovery platform that enables users to:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div><strong className="text-white">Check in:</strong> Share what music you're listening to at specific locations</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div><strong className="text-white">Discover:</strong> Explore trending music at venues, neighborhoods, and cities</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div><strong className="text-white">Connect:</strong> Follow other users, like and comment on check-ins, and build a music community</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div><strong className="text-white">Share:</strong> Share music moments on social media platforms</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">4.2 Location Features</h3>
                <p>
                  The Service uses location data to provide core functionality. By using location-based features, you consent to our collection and use of location data as described in our Privacy Policy. You can disable location services at any time, though this may limit functionality.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">4.3 Service Availability</h3>
                <p>
                  We strive to keep the Service available 24/7, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue any part of the Service at any time without notice. We are not liable for any modification, suspension, or discontinuation of the Service.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: User Content */}
          <section id="section-5" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-500/20 rounded-xl">
                <MessageSquare className="h-5 w-5 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold">5. User Content</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">5.1 Your Content</h3>
                <p>
                  "User Content" includes check-ins, comments, profile information, and any other content you submit to the Service. You retain ownership of your User Content, but you grant us certain rights to use it.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">5.2 License Grant</h3>
                <p>
                  By posting User Content, you grant melOwi a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, distribute, display, and perform your User Content in connection with operating and promoting the Service.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-3">
                  <p className="text-green-300 text-sm">
                    <strong>Plain English:</strong> We need this license to show your check-ins to other users, display them on maps, include them in trending lists, and let you share them. We won't sell your content or use it for purposes unrelated to the Service.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">5.3 Content Responsibility</h3>
                <p>You are solely responsible for your User Content. You represent and warrant that:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>You own or have the necessary rights to post the content</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Your content does not violate any third-party rights</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Your content complies with these Terms and applicable laws</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">5.4 Content Removal</h3>
                <p>
                  We reserve the right to remove any User Content that violates these Terms or that we find objectionable, without prior notice. We may also remove content in response to valid legal requests or reports from other users.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Acceptable Use Policy */}
          <section id="section-6" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-xl">
                <Ban className="h-5 w-5 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold">6. Acceptable Use Policy</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You agree not to engage in any of the following prohibited activities:
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">6.1 Prohibited Content</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Hate speech or discrimination',
                    'Harassment, bullying, or threats',
                    'Sexually explicit or pornographic content',
                    'Violence or graphic content',
                    'Illegal activities or content',
                    'Spam or misleading content',
                    'Malware or malicious code',
                    'Private information of others',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 bg-red-500/10 rounded-lg px-3 py-2">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">6.2 Prohibited Activities</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Creating fake accounts or impersonating others</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Using bots, scripts, or automated tools to access the Service</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Attempting to gain unauthorized access to other accounts or systems</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Interfering with or disrupting the Service</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Circumventing security features or restrictions</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Scraping or harvesting data from the Service</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Using the Service for commercial purposes without permission</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    <div>Violating any applicable laws or regulations</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-yellow-200 text-sm">
                    <strong>Violation Consequences:</strong> Violating these policies may result in content removal, account suspension, or permanent ban from the Service. We may also report illegal activities to law enforcement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Intellectual Property */}
          <section id="section-7" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/20 rounded-xl">
                <Copyright className="h-5 w-5 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">7.1 melOwi's Intellectual Property</h3>
                <p>
                  The Service and its original content (excluding User Content), features, and functionality are owned by melOwi and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="mt-3">
                  The melOwi name, logo (the owl), and all related names, logos, product and service names, designs, and slogans are trademarks of melOwi. You may not use these marks without our prior written permission.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">7.2 Music Content</h3>
                <p>
                  Song titles, artist names, album artwork, and other music-related content displayed on the Service are the property of their respective owners. melOwi does not claim ownership of any music content. We display this information for identification and discovery purposes only.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">7.3 Copyright Complaints (DMCA)</h3>
                <p>
                  If you believe that content on the Service infringes your copyright, please send a DMCA notice to our designated agent at{' '}
                  <a href="mailto:dmca@melowi.app" className="text-orange-400 hover:text-orange-300">
                    dmca@melowi.app
                  </a>
                  {' '}with the following information:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Identification of the copyrighted work</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Identification of the infringing material and its location</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Your contact information</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>A statement of good faith belief that the use is not authorized</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>A statement, under penalty of perjury, that the information is accurate</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Your physical or electronic signature</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Third-Party Services */}
          <section id="section-8" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/20 rounded-xl">
                <Globe className="h-5 w-5 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold">8. Third-Party Services</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The Service integrates with or links to third-party services, including:
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Spotify:</strong> For music data, playback, and authentication</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Apple Music:</strong> For music data and authentication (where available)</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Google Places:</strong> For location and venue information</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">ACRCloud:</strong> For music recognition</div>
                </li>
              </ul>
              <p className="mt-4">
                Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the content, privacy practices, or actions of these third parties.
              </p>
            </div>
          </section>

          {/* Section 9: Termination */}
          <section id="section-9" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/20 rounded-xl">
                <RefreshCw className="h-5 w-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold">9. Termination</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">9.1 Termination by You</h3>
                <p>
                  You may delete your account at any time through the app settings. Upon deletion, your profile and check-ins will be removed from the Service. Some information may be retained as described in our Privacy Policy.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">9.2 Termination by Us</h3>
                <p>
                  We may suspend or terminate your account at any time, with or without cause, with or without notice. Reasons for termination may include:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Violation of these Terms</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Conduct harmful to other users or the Service</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Extended period of inactivity</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>Legal or regulatory requirements</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">9.3 Effect of Termination</h3>
                <p>
                  Upon termination, your right to use the Service immediately ceases. Provisions of these Terms that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Disclaimers */}
          <section id="section-10" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-500/20 rounded-xl">
                <AlertTriangle className="h-5 w-5 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold">10. Disclaimers</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 uppercase text-sm">
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
              <p>We do not warrant that:</p>
              <ul className="space-y-2 mt-2">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>The Service will be uninterrupted, secure, or error-free</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Results obtained from the Service will be accurate or reliable</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>The quality of the Service will meet your expectations</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Any errors in the Service will be corrected</div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 11: Limitation of Liability */}
          <section id="section-11" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-rose-500/20 rounded-xl">
                <Scale className="h-5 w-5 text-rose-400" />
              </div>
              <h2 className="text-2xl font-bold">11. Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 uppercase text-sm">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, MELOWI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                </p>
              </div>
              <ul className="space-y-2 mt-2">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Your access to or use of (or inability to access or use) the Service</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Any conduct or content of any third party on the Service</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Any content obtained from the Service</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Unauthorized access, use, or alteration of your content</div>
                </li>
              </ul>
              <p className="mt-4">
                In no event shall our total liability exceed the amount you paid us, if any, in the past twelve months, or $100, whichever is greater.
              </p>
            </div>
          </section>

          {/* Section 12: Indemnification */}
          <section id="section-12" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-500/20 rounded-xl">
                <Shield className="h-5 w-5 text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold">12. Indemnification</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless melOwi and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with:
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Your access to or use of the Service</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Your User Content</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Your violation of these Terms</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Your violation of any third-party rights</div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 13: Dispute Resolution */}
          <section id="section-13" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-violet-500/20 rounded-xl">
                <Gavel className="h-5 w-5 text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold">13. Dispute Resolution</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">13.1 Informal Resolution</h3>
                <p>
                  Before filing a formal legal claim, you agree to try to resolve any dispute informally by contacting us at{' '}
                  <a href="mailto:legal@melowi.app" className="text-orange-400 hover:text-orange-300">
                    legal@melowi.app
                  </a>
                  . We will try to resolve the dispute within 30 days.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">13.2 Arbitration Agreement</h3>
                <p>
                  If we cannot resolve the dispute informally, you and melOwi agree to resolve any claims through final and binding arbitration, except as set forth below. The arbitration will be conducted by JAMS under its Streamlined Arbitration Rules.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">13.3 Exceptions</h3>
                <p>
                  Either party may bring claims in small claims court if eligible. Either party may seek injunctive relief in any court of competent jurisdiction to prevent infringement of intellectual property rights.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">13.4 Class Action Waiver</h3>
                <p>
                  You agree to resolve disputes with us on an individual basis and waive the right to participate in class actions, class arbitrations, or representative actions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 14: General Provisions */}
          <section id="section-14" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-500/20 rounded-xl">
                <FileText className="h-5 w-5 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold">14. General Provisions</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">14.1 Governing Law</h3>
                <p>
                  These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">14.2 Entire Agreement</h3>
                <p>
                  These Terms, together with the Privacy Policy, constitute the entire agreement between you and melOwi regarding the Service and supersede all prior agreements.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">14.3 Severability</h3>
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">14.4 Waiver</h3>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">14.5 Assignment</h3>
                <p>
                  You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
                </p>
              </div>
            </div>
          </section>

          {/* Section 15: Contact Information */}
          <section id="section-15" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-xl">
                <Mail className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold">15. Contact Information</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Mail className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-sm text-gray-400 mb-1">General</div>
                  <a href="mailto:hello@melowi.app" className="text-orange-400 hover:text-orange-300 font-medium">
                    hello@melowi.app
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Mail className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-sm text-gray-400 mb-1">Legal</div>
                  <a href="mailto:legal@melowi.app" className="text-orange-400 hover:text-orange-300 font-medium">
                    legal@melowi.app
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Mail className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-sm text-gray-400 mb-1">Support</div>
                  <a href="mailto:support@melowi.app" className="text-orange-400 hover:text-orange-300 font-medium">
                    support@melowi.app
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}