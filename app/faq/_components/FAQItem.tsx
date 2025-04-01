"use client";

import { FAQItem as FAQItemType } from '../_data/faq-data';
import { useState } from 'react';

interface FAQItemProps {
  item: FAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to convert newlines to JSX breaks and handle special formatting
  const formatAnswer = (text: string) => {
    // Split by newline
    const parts = text.split('\n');
    
    // Map each part to appropriate JSX, preserving empty lines as breaks
    return parts.map((part, index) => {
      // Check if part contains markdown-style bold text with **
      const boldPattern = /\*\*(.*?)\*\*/g;
      const textWithBold = part.replace(boldPattern, '<strong>$1</strong>');
      
      // Check if part contains inline code with backticks
      const codePattern = /`(.*?)`/g;
      const formattedText = textWithBold.replace(codePattern, '<code class="bg-gray-900 px-2 py-1 rounded">$1</code>');
      
      // If empty line, return a spacer
      if (!part.trim()) {
        return <div key={index} className="h-4"></div>;
      }
      
      // Otherwise return a paragraph with formatted HTML
      return (
        <div key={index} 
          dangerouslySetInnerHTML={{ __html: formattedText }} 
          className="[&>strong]:font-bold [&>code]:bg-gray-900 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:font-mono"
        />
      );
    });
  };

  return (
    <div className="bg-gray-800/30 rounded-lg border border-gray-700 overflow-hidden">
      <button 
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <h2 className="text-xl font-bold">{item.question}</h2>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-6 w-6 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-300 border-t border-gray-700">
          {formatAnswer(item.answer)}
        </div>
      </div>
    </div>
  );
}