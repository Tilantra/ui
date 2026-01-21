import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Interpretation and Definitions', anchor: 'interpretation-definitions' },
    { label: 'Collecting and Using Your Personal Data', anchor: 'collecting-data' },
    { label: 'Usage of Your Personal Data', anchor: 'usage-data' },
    { label: 'Sharing of Your Personal Data', anchor: 'sharing-data' },
    { label: 'Retention of Your Personal Data', anchor: 'retention-data' },
    { label: 'Transfer of Your Personal Data', anchor: 'transfer-data' },
    { label: 'Delete Your Personal Data', anchor: 'delete-data' },
    { label: 'Disclosure of Your Personal Data', anchor: 'disclosure-data' },
    { label: 'Security of Your Personal Data', anchor: 'security-data' },
    { label: 'Privacy-Specific Features', anchor: 'privacy-features' },
    { label: 'Children\'s Privacy', anchor: 'children-privacy' },
    { label: 'Links to Other Websites', anchor: 'links-websites' },
    { label: 'Changes to this Privacy Policy', anchor: 'policy-changes' },
    { label: 'Contact Us', anchor: 'contact-us' },
    { label: 'Chrome Web Store Policy Compliance', anchor: 'chrome-compliance' }
];

const PrivacyPolicy: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 className="text-primary font-extrabold text-4xl mb-6">Privacy Policy for Capsule Hub</h1>
            <p className="text-lg font-semibold text-muted-foreground mb-8">
                Last updated: January 21, 2026
            </p>

            <p className="text-base mb-6 leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p className="text-base mb-6 leading-relaxed">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 id="interpretation-definitions" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Interpretation and Definitions</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Interpretation</h3>
            <p className="text-base mb-6 leading-relaxed">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Definitions</h3>
            <p className="text-base mb-4 leading-relaxed">For the purposes of this Privacy Policy:</p>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>AI Platform</strong> refers to supported third-party artificial intelligence services including ChatGPT (OpenAI), Google Gemini, Anthropic Claude, and DeepSeek where the Extension operates.</li>
                <li><strong>Capsule</strong> means a user-generated collection of conversation messages and context that can be stored, managed, and reused across AI Platforms.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Tilantra, operating at https://tilantra.com and https://guidera.tilantra.com.</li>
                <li><strong>Country</strong> refers to the jurisdiction where Tilantra operates.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Extension</strong> or <strong>Service</strong> refers to Capsule Hub by Tilantra, a Chrome browser extension that enables users to capture and reuse AI conversation context across multiple platforms.</li>
                <li><strong>Google Account</strong> refers to the authentication service provided by Google LLC used for OAuth authentication within the Extension.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                <li><strong>Team</strong> refers to a collaborative workspace within the Extension where multiple users can share and manage Capsules collectively.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically when using the Service, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong>Website</strong> refers to Capsule Hub's web presence, accessible from https://guidera.tilantra.com and https://tilantra.com.</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>

            <h2 id="collecting-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Types of Data Collected</h3>

            <h4 className="text-lg font-semibold mb-3 mt-4">Personal Data</h4>
            <p className="text-base mb-4 leading-relaxed">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>Email address (when you sign in with email/password or Google OAuth)</li>
                <li>Full name (when provided during registration or obtained from Google profile)</li>
                <li>Username (created during registration or derived from Google account)</li>
                <li>Profile information (obtained from Google OAuth, including profile photo URL)</li>
                <li>Team membership information (teams you create, join, or administer)</li>
                <li>Authentication tokens (OAuth access tokens and JWT bearer tokens for session management)</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3 mt-4">Capsule Content Data</h4>
            <p className="text-base mb-4 leading-relaxed">Capsule Hub only reads and processes conversation content <strong>when you explicitly trigger</strong> one of the following actions:</p>
            <ol className="list-decimal list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Generate Capsule</strong>: Clicking the "Generate Capsule" button in the Extension popup or using the in-chat capsule button</li>
                <li><strong>Create New Version</strong>: Updating an existing capsule with new conversation content</li>
                <li><strong>Drop Capsule</strong>: Injecting a previously saved capsule into an AI conversation</li>
            </ol>

            <p className="text-base mb-4 leading-relaxed"><strong>What We Collect:</strong></p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>User messages</strong>: Text content you write in AI chat interfaces</li>
                <li><strong>Assistant responses</strong>: AI-generated text responses from supported platforms</li>
                <li><strong>Conversation metadata</strong>: Platform source, conversation ID (for version tracking), timestamp</li>
                <li><strong>Capsule tags</strong>: User-defined labels or auto-generated titles for organizing capsules</li>
                <li><strong>Team assignment</strong>: Whether a capsule is private or shared with a specific team</li>
            </ul>

            <p className="text-base mb-4 leading-relaxed"><strong>What We Do NOT Collect:</strong></p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>We do NOT monitor, read, or collect conversation content unless you explicitly initiate a capsule generation action</li>
                <li>We do NOT track your browsing history outside of supported AI platforms</li>
                <li>We do NOT access conversations, chats, or content on unrelated websites</li>
                <li>We do NOT automatically capture every message you send or receive</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3 mt-4">Storage Location Data</h4>
            <p className="text-base mb-4 leading-relaxed">The Extension uses Chrome's local storage API to store:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>UI preferences</strong>: Selected team, filter settings, search history</li>
                <li><strong>Session cache</strong>: Temporary copies of team lists and capsule lists for faster loading</li>
                <li><strong>Authentication state</strong>: Login tokens, token expiration times, currently logged-in email</li>
                <li><strong>Temporary injection context</strong>: Capsule IDs queued for injection (cleared after use)</li>
            </ul>

            <p className="text-base mb-6 leading-relaxed">
                This data is stored <strong>locally in your browser</strong> and is not transmitted to our servers except when necessary to fulfill your explicit actions (such as generating a capsule or fetching your capsule library).
            </p>

            <h4 className="text-lg font-semibold mb-3 mt-4">Usage Data</h4>
            <p className="text-base mb-4 leading-relaxed">Usage Data is collected automatically when using the Service. Usage Data may include information such as:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Extension version number</li>
                <li>Frequency of capsule generation, injection, and library access</li>
                <li>Error logs and debugging information</li>
                <li>API request patterns</li>
            </ul>

            <p className="text-base mb-6 leading-relaxed">
                We do NOT use Usage Data for advertising, behavioral profiling, or cross-site tracking.
            </p>

            <h4 className="text-lg font-semibold mb-3 mt-4">Information from Third-Party Social Media Services</h4>
            <p className="text-base mb-4 leading-relaxed">The Company allows You to create an account and log in to use the Service through Google OAuth 2.0. If You decide to register through or otherwise grant us access to Google OAuth, We may collect Personal Data that is already associated with Your Google Account, such as:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>Your email address</li>
                <li>Your name (first and last name)</li>
                <li>Your profile picture URL</li>
                <li>Your Google User ID (used only for internal account linking)</li>
            </ul>

            <p className="text-base mb-6 leading-relaxed">
                <strong>Important:</strong> We only use Google OAuth for authentication purposes. We do NOT access your Gmail messages, Google Drive files, Calendar events, or any other Google services beyond basic profile information required for login.
            </p>

            <h2 id="usage-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Usage of Your Personal Data</h2>

            <p className="text-base mb-4 leading-relaxed">The Company may use Personal Data for the following purposes:</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Core Service Functionality</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>To provide and maintain our Service</strong>: Including monitoring the usage of our Service, managing user authentication, storing and retrieving capsules.</li>
                <li><strong>To manage Your Account</strong>: To manage Your registration as a user of the Service.</li>
                <li><strong>Capsule Generation and Storage</strong>: When you click "Generate Capsule," we process conversation messages to create a reusable context summary.</li>
                <li><strong>Capsule Injection</strong>: When you drag-and-drop or click to inject a capsule, we retrieve the stored capsule content from our servers.</li>
                <li><strong>Team Collaboration</strong>: To enable team-based capsule sharing.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Communication and Support</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>To contact You</strong>: By email regarding updates, security updates, product announcements, and account-related notifications.</li>
                <li><strong>To provide You with news and special offers</strong>: Unless You have opted not to receive such information.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Product Improvement</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>To manage Your requests</strong>: Including support inquiries, feature requests, and bug reports.</li>
                <li><strong>For data analysis</strong>: We may use aggregated, anonymized data to identify usage trends.</li>
                <li><strong>To improve our Service</strong>: Based on usage patterns, error logs, and user feedback.</li>
            </ul>

            <h2 id="sharing-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Sharing of Your Personal Data</h2>

            <p className="text-base mb-4 leading-relaxed">We may share Your personal information in the following situations:</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Authorized Sharing</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>With Service Providers</strong>: To monitor and analyze the use of our Service, securely host our backend infrastructure, provide customer support, and send service-related communications. <strong>We do NOT share your data with advertising networks, marketing platforms, or data brokers.</strong></li>
                <li><strong>With Your Team Members</strong>: If you join or create a Team, your username, email address, and shared capsules may be visible to other team members. <strong>Private capsules are NEVER shared with team members.</strong></li>
                <li><strong>For business transfers</strong>: In connection with any merger, sale, financing, or acquisition of our business.</li>
                <li><strong>With Your consent</strong>: For any other purpose with Your consent.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">What We Do NOT Share</h3>
            <p className="text-base mb-6 leading-relaxed">
                We do <strong>NOT</strong> sell, rent, trade, or license personal data to third parties for monetary gain. We do <strong>NOT</strong> share Your data with advertising networks, marketing agencies, social media platforms (beyond OAuth authentication), or AI platforms for training purposes or analytics.
            </p>

            <h2 id="retention-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Retention of Your Personal Data</h2>

            <p className="text-base mb-4 leading-relaxed">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Specific Retention Periods</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Capsules</strong>: Persist indefinitely until you manually delete them</li>
                <li><strong>Authentication tokens</strong>: Persist until you log out or the token expires (typically 30-90 days)</li>
                <li><strong>Account data</strong>: Persists until you delete your account</li>
                <li><strong>Team data</strong>: Persists until the team admin deletes the team or you leave the team</li>
                <li><strong>Usage logs and error reports</strong>: Retained for 90 days for debugging and security monitoring</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Account Deletion</h3>
            <p className="text-base mb-4 leading-relaxed">When you delete your account:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>All capsules you created are permanently deleted within 30 days</li>
                <li>Your authentication tokens are immediately invalidated</li>
                <li>Your email, username, and profile data are permanently deleted within 30 days</li>
                <li>Team memberships are removed</li>
                <li>Cached data in your browser is cleared</li>
            </ul>

            <h2 id="transfer-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Transfer of Your Personal Data</h2>

            <p className="text-base mb-6 leading-relaxed">
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>

            <p className="text-base mb-6 leading-relaxed">
                The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy.
            </p>

            <h2 id="delete-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Delete Your Personal Data</h2>

            <p className="text-base mb-4 leading-relaxed">You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Self-Service Deletion</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Delete Capsules</strong>: Click the delete button on any capsule in your library</li>
                <li><strong>Leave Teams</strong>: Exit any team you are a member of via the team management interface</li>
                <li><strong>Delete Teams</strong>: If you are a team admin, you can delete the entire team</li>
                <li><strong>Log Out</strong>: Removes authentication tokens and clears local session data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Account Deletion Request</h3>
            <p className="text-base mb-4 leading-relaxed">You may delete Your account by:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>Contacting us at <a href="mailto:tech@tilantra.com" className="text-primary hover:underline">tech@tilantra.com</a> with the subject line "Account Deletion Request"</li>
                <li>Providing your registered email address for verification</li>
            </ul>

            <h2 id="disclosure-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Disclosure of Your Personal Data</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Business Transactions</h3>
            <p className="text-base mb-6 leading-relaxed">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Law Enforcement</h3>
            <p className="text-base mb-6 leading-relaxed">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.
            </p>

            <h2 id="security-data" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Security of Your Personal Data</h2>

            <p className="text-base mb-6 leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Security Measures We Employ</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Encryption in Transit</strong>: All data transmitted between your browser and our backend servers uses HTTPS/TLS encryption</li>
                <li><strong>Encryption at Rest</strong>: Personal data stored in our databases is encrypted using industry-standard encryption algorithms</li>
                <li><strong>OAuth 2.0 Authentication</strong>: We use Google's secure OAuth 2.0 protocol for authentication</li>
                <li><strong>JWT Bearer Tokens</strong>: Session tokens are short-lived and cryptographically signed</li>
                <li><strong>Secure Local Storage</strong>: Chrome's local storage API is isolated per-extension</li>
                <li><strong>Access Controls</strong>: Backend API endpoints require valid authentication tokens</li>
            </ul>

            <h2 id="privacy-features" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Privacy-Specific Features</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Stealth Injection & Privacy Masking</h3>
            <p className="text-base mb-6 leading-relaxed">
                Capsule Hub includes automatic privacy protection when injecting capsules into AI platforms to prevent leaking metadata or detection. Our privacy masking ensures that your capsule usage remains private and cannot be distinguished from normal interaction.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Conversation Mapping & Versioning</h3>
            <p className="text-base mb-6 leading-relaxed">
                To support the "New Version" vs "New Capsule" feature, we track conversation IDs extracted from AI platform URLs. We store a mapping between conversation IDs and capsule IDs. We do NOT store the conversation content, titles, or any messages beyond what you explicitly generate as a capsule.
            </p>

            <h2 id="children-privacy" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Children's Privacy</h2>

            <p className="text-base mb-6 leading-relaxed">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us at <a href="mailto:tech@tilantra.com" className="text-primary hover:underline">tech@tilantra.com</a>.
            </p>

            <h2 id="links-websites" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Links to Other Websites</h2>

            <p className="text-base mb-6 leading-relaxed">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>

            <p className="text-base mb-6 leading-relaxed">
                <strong>Important Note on AI Platform Privacy:</strong> When you inject a capsule into an AI chat interface, the capsule content becomes part of your conversation with that platform and is subject to that platform's privacy policy, not ours.
            </p>

            <h2 id="policy-changes" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Changes to this Privacy Policy</h2>

            <p className="text-base mb-4 leading-relaxed">We may update Our Privacy Policy from time to time. We will notify You of any changes by:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>Updating the "Last updated" date at the top of this Privacy Policy</li>
                <li>Sending an email notification to your registered email address (for material changes)</li>
                <li>Displaying a prominent notice in the Extension popup (for significant policy changes)</li>
            </ul>

            <h2 id="contact-us" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Contact Us</h2>

            <p className="text-base mb-4 leading-relaxed">If you have any questions about this Privacy Policy, data deletion requests, or privacy concerns, You can contact us:</p>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Email</strong>: <a href="mailto:tech@tilantra.com" className="text-primary hover:underline">tech@tilantra.com</a></li>
                <li><strong>Website</strong>: <a href="https://tilantra.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tilantra.com</a>, <a href="https://guidera.tilantra.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">guidera.tilantra.com</a></li>
            </ul>

            <h2 id="chrome-compliance" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">Chrome Web Store Policy Compliance</h2>

            <p className="text-base mb-4 leading-relaxed">Capsule Hub complies with Google Chrome Web Store's User Data, Permissions, and Limited Use policies. We certify that:</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Data Collection & Usage</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li>✅ <strong>No advertising or ad targeting</strong>: We do NOT use your data for advertising purposes</li>
                <li>✅ <strong>No behavioral profiling</strong>: We do NOT create behavioral profiles for marketing</li>
                <li>✅ <strong>No sale, rental, or licensing of data</strong>: We NEVER sell user data to third parties</li>
                <li>✅ <strong>No cross-user data exposure</strong>: Private capsules are never visible to other users</li>
                <li>✅ <strong>No data used for model training</strong>: We do NOT use your capsule content to train AI models</li>
            </ul>

            <div className="mt-12 border-t border-border pt-8 text-muted-foreground text-sm">
                <p className="mb-4"><strong>By using Capsule Hub, you acknowledge that you have read and understood this Privacy Policy.</strong></p>
                <p>© 2026 Tilantra. All rights reserved.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
