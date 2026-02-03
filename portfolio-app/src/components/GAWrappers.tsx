"use client";

import { sendGAEvent } from '@next/third-parties/google';
// import { div } from 'framer-motion/client';
import { PropsWithChildren } from 'react'

interface GAWrapperProps {
  children: React.ReactNode;
  event?: string; 
  value?: string;
}

export function GAWrapper({ children, event, value }: GAWrapperProps) {
    const handleClick = () => {
        sendGAEvent({ event: {event}, value: {value} });
    };

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
}