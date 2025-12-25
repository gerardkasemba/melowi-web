import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Eye, Users, Mail, ChevronLeft, MapPin, Music, Database, Trash2, Download, Bell, Globe, Server, Clock } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 25, 2024";
  const effectiveDate = "December 25, 2024";

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/AYolA-Transparent-Orange-Owl.svg" 
                alt="melOwi" 
                width={120} 
                height={120}
              />
            </Link>
            <Link 
              href="/"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-1/4 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full bg-orange-600/5 blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl mb-6">
            <Shield className="h-8 w-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Your privacy matters to us. This policy explains how melOwi collects, uses, and protects your information.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>Last Updated: {lastUpdated}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span>Effective: {effectiveDate}</span>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {[
                { num: '1', title: 'Introduction' },
                { num: '2', title: 'Information We Collect' },
                { num: '3', title: 'How We Use Your Information' },
                { num: '4', title: 'Location Data' },
                { num: '5', title: 'Data Sharing & Third Parties' },
                { num: '6', title: 'Data Security' },
                { num: '7', title: 'Data Retention' },
                { num: '8', title: 'Your Rights & Choices' },
                { num: '9', title: 'Children\'s Privacy' },
                { num: '10', title: 'International Transfers' },
                { num: '11', title: 'Changes to This Policy' },
                { num: '12', title: 'Contact Us' },
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
          
          {/* Section 1: Introduction */}
          <section id="section-1" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-xl">
                <Shield className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold">1. Introduction</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Welcome to melOwi ("we," "our," or "us"). melOwi is a social music discovery platform that allows users to check in their music at locations, discover what others are listening to, and connect with fellow music lovers.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service"). Please read this privacy policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
              <p>
                If you do not agree with the terms of this privacy policy, please do not access the Service.
              </p>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section id="section-2" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-xl">
                <Database className="h-5 w-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">2.1 Information You Provide</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Account Information:</strong> When you create an account, we collect your email address, username, display name, and password. You may also provide a profile photo and bio.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Profile Information:</strong> Information you add to your profile, including your display name, avatar, bio, and any other information you choose to share.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Check-in Content:</strong> When you check in, we collect the song information, location data, any notes or captions you add, and the category/vibe you select.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">User Content:</strong> Comments, likes, and other interactions you make on the platform.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Communications:</strong> If you contact us directly, we may receive additional information such as your name, email, and the contents of your message.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">2.2 Information Collected Automatically</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Usage Data:</strong> Information about how you use the Service, including features accessed, pages viewed, and actions taken.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Log Data:</strong> IP address, browser type, access times, and referring URLs.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">2.3 Information from Third Parties</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Music Services:</strong> If you connect Spotify or other music services, we receive information about the songs you're listening to, including track name, artist, album art, and Spotify ID.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Music Recognition:</strong> If you use our song identification feature (powered by ACRCloud), audio fingerprints are processed to identify songs. We do not store audio recordings.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <div>
                      <strong className="text-white">Location Services:</strong> We use Google Places API to provide venue information and improve location accuracy.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section id="section-3" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/20 rounded-xl">
                <Lock className="h-5 w-5 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Provide the Service:</strong> Create and manage your account, process check-ins, display music moments, and enable social features.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Personalize Your Experience:</strong> Show you relevant content, trending music in your area, and personalized recommendations.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Enable Social Features:</strong> Allow you to follow other users, like and comment on check-ins, and share content.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Send Notifications:</strong> Notify you about likes, comments, follows, and other activity related to your account (with your permission).</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Improve the Service:</strong> Analyze usage patterns, troubleshoot issues, and develop new features.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Ensure Safety:</strong> Detect and prevent fraud, abuse, and violations of our Terms of Service.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Communicate:</strong> Send you service-related announcements, updates, and promotional content (which you can opt out of).</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Legal Compliance:</strong> Comply with legal obligations and respond to legal requests.</div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Location Data */}
          <section id="section-4" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/20 rounded-xl">
                <MapPin className="h-5 w-5 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold">4. Location Data</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Location is a core feature of melOwi. Here's how we handle location data:
              </p>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 my-4">
                <p className="text-orange-300 text-sm">
                  <strong>Important:</strong> We only access your location when you actively choose to check in or when you grant permission for location-based features. We do not track your location in the background.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Check-in Location:</strong> When you check in, we record the location (venue name, address, city, state, coordinates) to show where the music moment occurred.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Nearby Discovery:</strong> With your permission, we use your location to show you trending music and check-ins near you.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Venue Information:</strong> We use Google Places API to provide accurate venue names, addresses, and types (bar, restaurant, park, etc.).</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Privacy Controls:</strong> You can disable location services at any time in your device settings. You can also delete individual check-ins or your entire check-in history.</div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Data Sharing */}
          <section id="section-5" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 rounded-xl">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">5. Data Sharing & Third Parties</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-4">
                <p className="text-green-300 text-sm">
                  <strong>We do not sell your personal data.</strong> We never have and never will sell your information to third parties for advertising or any other purpose.
                </p>
              </div>
              
              <p>We may share your information in the following circumstances:</p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.1 Public Information</h3>
                  <p>Your profile information (username, display name, avatar, bio) and check-ins are public by default and visible to other users. You can control the visibility of certain information in your privacy settings.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.2 Service Providers</h3>
                  <p>We work with trusted third-party companies to help us operate the Service:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div><strong className="text-white">Supabase:</strong> Database hosting and authentication</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div><strong className="text-white">Spotify API:</strong> Music data and playback</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div><strong className="text-white">ACRCloud:</strong> Music recognition</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div><strong className="text-white">Google Places:</strong> Location and venue information</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <div><strong className="text-white">Expo:</strong> Push notifications</div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.3 Legal Requirements</h3>
                  <p>We may disclose your information if required by law, court order, or government request, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.4 Business Transfers</h3>
                  <p>If melOwi is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Data Security */}
          <section id="section-6" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/20 rounded-xl">
                <Server className="h-5 w-5 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold">6. Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Encryption:</strong> All data is encrypted in transit using TLS/SSL and at rest using AES-256 encryption.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Secure Authentication:</strong> We use secure password hashing and support multi-factor authentication.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Access Controls:</strong> We limit access to personal data to employees and contractors who need it to operate the Service.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Regular Audits:</strong> We regularly review our security practices and update them as needed.</div>
                </li>
              </ul>
              <p className="mt-4 text-gray-400">
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section 7: Data Retention */}
          <section id="section-7" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-500/20 rounded-xl">
                <Clock className="h-5 w-5 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold">7. Data Retention</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>We retain your information for as long as your account is active or as needed to provide you the Service.</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Account Data:</strong> Retained until you delete your account.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Check-ins:</strong> Retained until you delete them or delete your account.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">Usage Data:</strong> Generally retained for 24 months for analytics purposes.</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div><strong className="text-white">After Deletion:</strong> When you delete your account, we will delete your personal data within 30 days, except for data we are required to retain for legal or legitimate business purposes.</div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: Your Rights */}
          <section id="section-8" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-500/20 rounded-xl">
                <Eye className="h-5 w-5 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold">8. Your Rights & Choices</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>You have the following rights regarding your personal data:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-orange-400" />
                    <strong className="text-white">Access</strong>
                  </div>
                  <p className="text-sm">Request a copy of the personal data we hold about you.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="h-4 w-4 text-orange-400" />
                    <strong className="text-white">Correction</strong>
                  </div>
                  <p className="text-sm">Update or correct inaccurate personal data.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trash2 className="h-4 w-4 text-orange-400" />
                    <strong className="text-white">Deletion</strong>
                  </div>
                  <p className="text-sm">Request deletion of your personal data and account.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="h-4 w-4 text-orange-400" />
                    <strong className="text-white">Portability</strong>
                  </div>
                  <p className="text-sm">Export your data in a machine-readable format.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="h-4 w-4 text-orange-400" />
                    <strong className="text-white">Opt-Out</strong>
                  </div>
                  <p className="text-sm">Opt out of marketing communications and notifications.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-orange-400" />
                    <strong className="text-white">Location</strong>
                  </div>
                  <p className="text-sm">Disable location services at any time in device settings.</p>
                </div>
              </div>
              
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@melowi.app" className="text-orange-400 hover:text-orange-300">
                  privacy@melowi.app
                </a>
                {' '}or use the in-app settings.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-4">
                <p className="text-blue-300 text-sm">
                  <strong>California Residents (CCPA):</strong> You have additional rights under the California Consumer Privacy Act, including the right to know what personal information we collect and the right to opt out of the sale of personal information (which we do not do).
                </p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-blue-300 text-sm">
                  <strong>EU/EEA Residents (GDPR):</strong> You have additional rights under the General Data Protection Regulation, including the right to lodge a complaint with a supervisory authority.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Children's Privacy */}
          <section id="section-9" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/20 rounded-xl">
                <Users className="h-5 w-5 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold">9. Children's Privacy</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                melOwi is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at{' '}
                <a href="mailto:privacy@melowi.app" className="text-orange-400 hover:text-orange-300">
                  privacy@melowi.app
                </a>
                {' '}and we will delete such information.
              </p>
              <p>
                Users between 13 and 18 years of age should review this Privacy Policy with a parent or guardian to ensure they understand it.
              </p>
            </div>
          </section>

          {/* Section 10: International Transfers */}
          <section id="section-10" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-500/20 rounded-xl">
                <Globe className="h-5 w-5 text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold">10. International Data Transfers</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                melOwi is operated from the United States. If you are accessing the Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States or other countries where our service providers are located.
              </p>
              <p>
                By using the Service, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules. We take appropriate safeguards to ensure your personal data remains protected in accordance with this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 11: Changes */}
          <section id="section-11" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/20 rounded-xl">
                <Bell className="h-5 w-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold">11. Changes to This Policy</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. When we make changes, we will:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Update the "Last Updated" date at the top of this page</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Notify you via email or in-app notification for material changes</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <div>Give you the opportunity to review changes before they take effect</div>
                </li>
              </ul>
              <p>
                Your continued use of the Service after changes become effective constitutes acceptance of the revised Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 12: Contact Us */}
          <section id="section-12" className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/20 rounded-xl">
                <Mail className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold">12. Contact Us</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Mail className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-sm text-gray-400 mb-1">Privacy Inquiries</div>
                  <a href="mailto:privacy@melowi.app" className="text-orange-400 hover:text-orange-300 font-medium">
                    privacy@melowi.app
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Mail className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-sm text-gray-400 mb-1">General Support</div>
                  <a href="mailto:support@melowi.app" className="text-orange-400 hover:text-orange-300 font-medium">
                    support@melowi.app
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}