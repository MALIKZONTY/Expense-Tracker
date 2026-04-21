import React from 'react';
import { ShieldCheck, HelpCircle, Lock, BarChart3, Globe, Smartphone } from 'lucide-react';

const FAQ = () => {
    const faqSections = [
        {
            title: "1. Account & Security",
            icon: <Lock style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "How does Expensico protect my data?",
                    a: "I take security very seriously. Expensico uses the same high-level encryption standards as major banking apps to make sure your financial records stay private and visible only to you."
                },
                {
                    q: "What if I delete something by mistake?",
                    a: "Don't worry—Expensico has a 'safety net.' If you delete a transaction, it's held in a secure archive for 30 days before being permanently removed, giving you plenty of time to get it back."
                },
                {
                    q: "Is there an extra security layer?",
                    a: "I'm currently working on adding Two-Factor Authentication (MFA) to give you even more peace of mind. For now, your data is protected by secure, encrypted login sessions."
                }
            ]
        },
        {
            title: "2. Financial Tracking Features",
            icon: <BarChart3 style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "Can I use different currencies?",
                    a: "Yes! You can set your main currency and still log transactions in any other currency. Expensico handles the conversion for you so you can always see your total balance in one place."
                },
                {
                    q: "Is there a limit to how much I can track?",
                    a: "Not at all. I've engineered the system to handle thousands of entries without breaking a sweat. Whether you're tracking daily coffees or complex business expenses, it'll stay fast."
                },
                {
                    q: "Will the app learn my habits?",
                    a: "Yes, it actually gets smarter the more you use it. If you usually mark 'Starbucks' as 'Food,' the app will start suggesting that category for you automatically to save you time."
                },
                {
                    q: "Can I move my data from other apps?",
                    a: "I've included a simple CSV import tool. You can bring in your history from bank statements or other trackers so you don't have to start from scratch."
                }
            ]
        },
        {
            title: "3. Privacy & Transparency",
            icon: <Globe style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "Why is Expensico free? Where is the catch?",
                    a: "There is no 'catch.' I use a monetization model based on non-intrusive Google AdSense advertisements. This allows me to provide professional-grade tracking tools to everyone for free. I do NOT sell your identifiable financial data to third parties."
                },
                {
                    q: "How do I exercise my 'Right to be Forgotten' (GDPR)?",
                    a: "If you ever decide to leave, you can delete your account directly from your profile settings. This permanently wipes all your data from my servers—no questions asked."
                },
                {
                    q: "Are the blog articles written by financial experts?",
                    a: "I write and research the content myself, often with input from financial analysts to make sure the information is solid. Just keep in mind that this is for educational purposes and isn't professional financial advice."
                }
            ]
        },
        {
            title: "4. Technical Support & Platform",
            icon: <Smartphone style={{ color: 'var(--primary-color)' }} size={24} />,
            items: [
                {
                    q: "Does Expensico have an offline mode?",
                    a: "Yes! You can add Expensico to your phone's home screen like an app. While you need a connection to sync new transactions, you can still open the app and view your past history even when you're offline."
                },
                {
                    q: "Is my data backed up against server failures?",
                    a: "Definitely. I perform automated nightly backups and use reliable, redundant hosting services to make sure your financial history is safe and sound, no matter what happens."
                },
                {
                    q: "What browsers are officially supported?",
                    a: "We support all modern browsers that utilize the Chromium engine (Chrome, Edge, Brave), as well as Safari (iOS/macOS) and Firefox. We recommend keeping your browser updated for the best security and performance."
                },
                {
                    q: "How do I report a bug or suggest a feature?",
                    a: "I love user feedback. Use the 'Contact Support' button in your dashboard side-bar. I review every submission and frequently implement user-suggested features in my updates."
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
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>I'm always happy to help you get the most out of your tracking.</p>
                    <a href="/contact" className="btn btn-primary" style={{ textDecoration: 'none', minWidth: '200px' }}>
                        Send me a message
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
