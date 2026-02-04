"use client";

import { sendGAEvent } from '@next/third-parties/google';
// import { div } from 'framer-motion/client';

interface GAWrapperProps {
    children: React.ReactNode;
    event?: string;
    value?: string;
}

export function GAWrapper({ children, event, value }: GAWrapperProps) {
    const handleClick = () => {
        if (typeof window === "undefined" || !("gtag" in window)) return;
        sendGAEvent({
            event: event ?? "interaction", 
            event_category: "navigation",
            event_label: value
        });
    };

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
}