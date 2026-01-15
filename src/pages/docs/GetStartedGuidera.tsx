import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Registration', anchor: 'guidera-registration' },
    { label: 'Platform Features', anchor: 'guidera-features' },
    { label: 'Adding Models', anchor: 'guidera-add-models' },
];

const GetStartedGuidera: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 className="text-primary font-extrabold text-4xl mb-6">Get Started with Guidera</h1>

            <h2 id="guidera-registration" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Registration</h2>
            <p className="text-base mb-6 leading-relaxed">
                To begin using Guidera, first register with us at <a href="https://guidera.tilantra.com/login" className="text-primary hover:underline font-semibold" target="_blank" rel="noreferrer">https://guidera.tilantra.com/login</a>.
            </p>
            <p className="text-base mb-6 leading-relaxed">
                Once you login, you will be greeted by the Guidera chatbot interface.
            </p>

            <h2 id="guidera-features" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Platform Features</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-4 text-base">
                <li>
                    <strong>Policy Management:</strong> You can manage policies under the <strong>Policies Tab</strong>. These policies are actively enforced on the chat when the compliance toggle is switched on.
                </li>
                <li>
                    <strong>Control Grid:</strong> Manage your cost and performance efficiency per prompt using the <strong>Control Grid</strong> feature.
                </li>
                <li>
                    <strong>Redaction:</strong> You can choose to redact sensitive information before it is sent to the model by switching on the redaction toggle.
                </li>
                <li>
                    <strong>Analytics:</strong> View detailed usage analytics on the <strong>Dashboard Tab</strong>.
                </li>
            </ul>

            <h2 id="guidera-add-models" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Adding Models</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Note:</strong> Only one model is registered at the beginning for a user. To add more models, you can request them through the <a href="/contact" className="text-primary hover:underline font-semibold">Contact Us</a> page.
                </p>
            </div>
        </div>
    );
};

export default GetStartedGuidera;
