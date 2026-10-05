import type { ReactNode } from 'react';

export const ENETCOM_URL = 'https://enetcom.rnu.tn/fr';

export default function EnetLink({
  children = 'ENET’Com',
  href = ENETCOM_URL,
  className = '',
}: {
  children?: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Opens in a new tab"
      className={`underline decoration-emerald-400/40 underline-offset-4 transition-colors hover:decoration-emerald-300 ${className}`}
    >
      {children}
    </a>
  );
}