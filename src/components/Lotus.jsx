export default function Lotus({ w = 40 }) {
  return (
    <svg width={w} height={(w * 26) / 38} viewBox="0 0 38 26" fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M19 3c-3 4-3 11 0 16 3-5 3-12 0-16z" />
      <path d="M19 19C14 17 11 12 12 7c4 2 6 6 7 12z" />
      <path d="M19 19c5-2 8-7 7-12-4 2-6 6-7 12z" />
      <path d="M19 19C12 19 6 16 4 11c5 0 11 3 15 8z" />
      <path d="M19 19c7 0 13-3 15-8-5 0-11 3-15 8z" />
    </svg>
  )
}
