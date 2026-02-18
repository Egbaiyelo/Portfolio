'use client'
import { useEffect, useRef, useState } from "react";
import { MdCheck, MdContentCopy, MdEmail } from "react-icons/md";

export default async function ContactCard() {
    return (
        <footer style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
            <p>© {new Date().getFullYear()} My Next App</p>
        </footer>
    );
}

export function EmailPicker({ email }: { email: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="relative inline-block" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 hover:text-blue-400 transition"
            >
                <MdEmail size={20} />
                <span className="text-sm font-medium">{email}</span>
            </button>

            {/* The Popdown Menu */}
            {isOpen && (
                <div className="absolute left-0 bottom-full mb-2 flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg shadow-xl animate-in fade-in zoom-in duration-200 min-w-[250px] z-50">
                    <span className="text-sm font-medium border-r pr-3 border-gray-200">{email}</span>

                    <div className="flex gap-2">
                        <a href={`mailto:${email}`} title="Send Email" className="hover:text-blue-600 transition">
                            <MdEmail size={20} />
                        </a>
                        <button onClick={copyToClipboard} title="Copy to clipboard" className="hover:text-blue-600 transition">
                            {copied ? <MdCheck size={20} className="text-green-500" /> : <MdContentCopy size={18} />}
                        </button>
                    </div>

                    {/* Small arrow pointing down */}
                    <div className="absolute -bottom-1 left-4 w-2 h-2 bg-white rotate-45" />
                </div>
            )}
        </div>
    );
}