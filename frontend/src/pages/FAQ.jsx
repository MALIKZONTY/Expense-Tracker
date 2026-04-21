import React from 'react';
import { ShieldCheck, HelpCircle, Lock, BarChart3, Globe, Smartphone } from 'lucide-react';

const FAQ = () => {
    const faqSections = [
        {
            title: "1. Account & Security",
            icon: <Lock style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "How does Expensico protect my sensitive data?",
                    a: "Security is our core pillar. We implement AES-256 encryption for data at rest and TLS 1.3/SSL for all data in transit. Furthermore, our architecture utilizes JSON Web Tokens (JWT) for secure session management and follows strict OWASP guidelines to prevent common vulnerabilities like XSS and SQL Injection."
                },
                {
                    q: "What is the 'Soft-Delete' system?",
                    a: "To protect you from accidental data loss, Expensico uses a soft-delete mechanism. When you delete a transaction, it is moved to a secure archive for 30 days before being permanently purged. This allows for data recovery in case of mistakes."
                },
                {
                    q: "Does Expensico support Multi-Factor Authentication (MFA)?",
                    a: "Currently, we rely on secure email-based authentication and robust password hashing. We are actively developing a dedicated TOTP-based MFA (e.g., Google Authenticator) layer to be released in the upcoming Q3 update."
                }
            ]
        },
        {
            title: "2. Financial Tracking Features",
            icon: <BarChart3 style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "Can I track multiple currencies simultaneously?",
                    a: "Yes. Expensico allows you to designate a primary base currency while logging transactions in any global currency. Our system uses real-time exchange rate logic (cached daily) to give you a unified view of your net worth across different denominations."
                },
                {
                    q: "Is there a limit to the number of transactions I can log?",
                    a: "Absolutely not. Expensico is built on a high-performance PostgreSQL backend designed to handle millions of records. Whether you log ten transactions or ten thousand, your dashboard will remain responsive."
                },
                {
                    q: "How does 'Intelligent Categorization' work?",
                    a: "Our system analyzes your historical spending patterns to predict the category of new entries. If you frequently log 'Starbucks' as 'Food,' the system will learn this behavior and suggest that category automatically for future entries, saving you time."
                },
                {
                    q: "Can I import data from my bank or other apps?",
                    a: "We provide a robust CSV import tool in your settings. This allows you to migrate data from bank statements or other trackers directly into Expensico. We are also building out a specialized JSON-API for power users."
                }
            ]
        },
        {
            title: "3. Privacy & Transparency",
            icon: <Globe style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "Why is Expensico free? Where is the catch?",
                    a: "There is no 'catch.' We use a monetization model based on non-intrusive Google AdSense advertisements. This allows us to provide institutional-grade tracking tools to everyone for free. We do NOT sell your identifiable financial data to third parties."
                },
                {
                    q: "How do I exercise my 'Right to be Forgotten' (GDPR)?",
                    a: "You can initiate a full account deletion from your profile settings. This triggers a permanent purge of all your personal data, transaction history, and metadata from our primary databases in compliance with global privacy laws."
                },
                {
                    q: "Are the blog articles written by financial experts?",
                    a: "All our content is researched and drafted by a team of financial analysts and technical writers to ensure accuracy. However, please remember that our content is for educational purposes and does not constitute professional investment advice."
                }
            ]
        },
        {
            title: "4. Technical Support & Platform",
            icon: <Smartphone style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "Does Expensico have an offline mode?",
                    a: "As a Progressive Web App (PWA), Expensico can be added to your home screen and caches core UI elements. While transaction syncing requires an internet connection, you can view your cached history even when offline."
                },
                {
                    q: "Is my data backed up against server failures?",
                    a: "Yes. Our databases (hosted on Neon/Railway) feature point-in-time recovery and are geographically redundant. We perform automated nightly backups to ensure your financial history is protected from catastrophic infrastructure events."
                },
                {
                    q: "What browsers are officially supported?",
                    a: "We support all modern browsers that utilize the Chromium engine (Chrome, Edge, Brave), as well as Safari (iOS/macOS) and Firefox. We recommend keeping your browser updated for the best security and performance."
                },
                {
                    q: "How do I report a bug or suggest a feature?",
                    a: "We love user feedback. Use the 'Contact Support' button in your dashboard side-bar. Our engineering team reviews every submission and frequently implements user-suggested features in our bi-weekly updates."
                },
                {
                    q: "Can I share my account with a spouse or partner?",
                    a: "Currently, accounts are individual. However, we are finalizing a 'Shared Wallet' feature that will allow two separate accounts to view and manage a consolidated budget—perfect for joint household management."
                },
                {
                    q: "How do I reset my password if I lose access?",
                    a: "Click 'Forgot Password' on the login screen. We will send a secure, time-limited reset link to your registered email address. For security reasons, we cannot reset passwords over the phone or via social media."
                }
            ]
        }
    ];

    return (
        <div className="auth-container page-container py-16 px-8 bg-slate-50 min-h-screen">
            <div className="container mx-auto max-w-[1000px]">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', background: 'var(--primary-color)', color: 'white', padding: '0.75rem', borderRadius: '15px', marginBottom: '1.5rem' }}>
                        <ShieldCheck size={32} />
                    </div>
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.04em', marginBottom: '1rem' }}>
                        Knowledge Hub
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Everything you need to know about managing your financial intelligence on Expensico.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {faqSections.map((section, idx) => (
                        <div key={idx} className="faq-section-card" style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem', borderRadius: '10px' }}>
                                    {section.icon}
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{section.title}</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {section.items.map((item, i) => (
                                    <div key={i} className="faq-item" style={{ borderBottom: i === section.items.length - 1 ? 'none' : '1px solid #f1f5f9', paddingBottom: i === section.items.length - 1 ? '0' : '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                            <HelpCircle size={18} style={{ color: 'var(--primary-color)', marginTop: '0.15rem' }} />
                                            {item.q}
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem', paddingLeft: '1.6rem' }}>
                                            {item.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="page-card" style={{ marginTop: '5rem', textAlign: 'center', background: 'white', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>Still have questions?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Our technical specialists are ready to help you optimize your financial workflow.</p>
                    <a href="/contact" className="btn btn-primary" style={{ textDecoration: 'none', minWidth: '200px' }}>
                        Contact Expert Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
