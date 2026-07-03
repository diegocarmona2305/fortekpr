export function WebIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="4.5" width="19" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 8.5H21.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5.3" cy="6.5" r="0.6" fill="currentColor" />
      <circle cx="7.3" cy="6.5" r="0.6" fill="currentColor" />
      <path d="M8 22H16M12 18.5V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ContentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16.5 10.5L20.5 8V16L16.5 13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PortfolioIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="7" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 7V5.5C8 4.67 8.67 4 9.5 4H14.5C15.33 4 16 4.67 16 5.5V7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M2.5 12.5H21.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
