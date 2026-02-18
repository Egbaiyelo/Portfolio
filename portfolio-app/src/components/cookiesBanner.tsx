"use client";
import { useState, useEffect } from "react";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function CookieBanner({ gaId }: { gaId: string }) {
    const [consent, setConsent] = useState<string | null>(null);

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie_consent");
        setConsent(storedConsent);

        if (!storedConsent) {
            window.gtag?.("consent", "default", {
                analytics_storage: "denied",
                ad_storage: "denied",
                wait_for_update: 500,
            });
        } else {
            setConsent(storedConsent);
            window.gtag?.("consent", "update", {
                analytics_storage: storedConsent,
            });
        }
    }, []);

    // Unless an option is present
    if (consent !== null) return null;

    return (
        <div className="fixed bottom-0 p-4 bg-slate-900 text-white flex gap-4 w-full items-center justify-center">
            <p className="">I use cookies to check site analytics and subsequently improve your experience. Please accept</p>
            <button className="bg-transparent text-gray-300 px-4 py-2 rounded hover:bg-gray-800 transition"
                onClick={() => {
                    localStorage.setItem("cookie_consent", "granted");
                    window.gtag?.("consent", "update", {
                        analytics_storage: "granted"
                    });
                    setConsent("granted");
                }}
            >
                Accept
            </button>
            <button className="bg-transparent text-gray-300 px-4 py-2 rounded hover:bg-gray-800 transition"
                onClick={() => {
                    localStorage.setItem("cookie_consent", "denied");
                    window.gtag?.("consent", "update", {
                        analytics_storage: "denied"
                    });
                    setConsent("denied");
                }}
            >
                Essentials only
            </button>
        </div>
    );
}