import React from 'react';

const ITALIC_TERMS = ['Business School', 'Tone at the top', 'due diligence', 'Compliance'];

export function renderItalics(text: string): React.ReactNode {
  const escapedTerms = ITALIC_TERMS.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'g');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    ITALIC_TERMS.includes(part) ? <em key={i}>{part}</em> : part
  );
}
