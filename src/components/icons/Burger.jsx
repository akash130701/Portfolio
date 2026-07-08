export default function BurgerIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <rect x="6" y="3" width="2" height="7" rx="0.5" />
        <rect x="10" y="3" width="2" height="8" rx="0.5" />
        <rect x="14" y="3" width="2" height="7" rx="0.5" />
        <path d="M4 14c0-1.105 1.343-2 3-2h10c1.657 0 3 .895 3 2 0 1.105-1.343 2-3 2H7c-1.657 0-3-.895-3-2z" />
      </g>
    </svg>
  )
}
