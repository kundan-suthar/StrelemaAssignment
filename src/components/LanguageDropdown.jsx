import { useState } from "react";
import { ChevronDown } from "lucide-react"; // optional icon library

export default function LanguageDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("EN");

    const languages = ["EN", "FR", "ES", "DE"];

    const handleSelect = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 rounded-md text-sm font-medium text-gray-800 bg-transparent hover:cursor-pointer"
            >
                {selectedLang}
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute right-0 mt-1 w-20 bg-white border border-gray-200 rounded-md shadow-md z-10">
                    {languages.map((lang) => (
                        <li
                            key={lang}
                            onClick={() => handleSelect(lang)}
                            className={`px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-100 ${selectedLang === lang ? "font-semibold text-blue-600" : ""
                                }`}
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
