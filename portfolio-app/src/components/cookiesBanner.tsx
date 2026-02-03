"use client";
import { useState, useEffect } from "react";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function CookieBanner({ gaId }: { gaId: string }) {
    const [consent, setConsent] = useState<string | null>(null);

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie_consent");
        setConsent(storedConsent);
    }, []);

    if (consent === "granted") return <GoogleAnalytics gaId={gaId} />;
    if (consent === "denied") return null;

    return (
        <div className="fixed bottom-0 p-4 bg-slate-900 text-white flex gap-4 w-full items-center justify-center">
            <p className="">I use cookies to check site analytics and subsequently improve your experience. Please accept</p>
            <button className="bg-transparent text-gray-300 px-4 py-2 rounded hover:bg-gray-800 transition"
                onClick={() => { localStorage.setItem("cookie_consent", "granted"); setConsent("granted"); }}
            >
                Accept
            </button>
            <button
                onClick={() => { localStorage.setItem("cookie_consent", "denied"); setConsent("denied"); }}
                className="bg-transparent text-gray-300 px-4 py-2 rounded hover:bg-gray-800 transition"
            >
                Decline
            </button>
        </div>
    );
}