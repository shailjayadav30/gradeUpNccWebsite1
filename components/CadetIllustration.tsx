export default function CadetIllustration() {
  return (
    <svg
      viewBox="0 0 600 460"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of NCC cadets in uniform standing in formation"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dce9f7" />
          <stop offset="100%" stopColor="#f3f0e6" />
        </linearGradient>
        <linearGradient id="khakiShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cdae78" />
          <stop offset="100%" stopColor="#b3925a" />
        </linearGradient>
      </defs>

      <rect width="600" height="460" fill="url(#sky)" />

      <g opacity="0.5">
        <rect x="70" y="60" width="4" height="220" fill="#8a8f98" />
        <path d="M74,60 L140,78 L74,96 Z" fill="#FF9933" />
        <path d="M74,74 L120,86 L74,98 Z" fill="#FFFFFF" opacity="0" />
        <rect x="500" y="40" width="4" height="240" fill="#8a8f98" />
        <path d="M504,40 L570,58 L504,76 Z" fill="#138808" />
      </g>

      
      <ellipse cx="120" cy="300" rx="70" ry="90" fill="#2f5233" opacity="0.35" />
      <ellipse cx="500" cy="300" rx="80" ry="100" fill="#2f5233" opacity="0.3" />

      <rect x="0" y="360" width="600" height="100" fill="#e7ded0" />

      
      {[
        { x: 430, scale: 0.72, opacity: 0.55 },
        { x: 500, scale: 0.65, opacity: 0.4 },
        { x: 150, scale: 0.8, opacity: 0.65 },
        { x: 300, scale: 1, opacity: 1 },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x - 60} 120) scale(${c.scale})`} opacity={c.opacity}>

          <path d="M20 18 C10 5, 55 -8, 75 12 C90 22, 85 32, 60 30 C40 28, 25 32, 20 18 Z" fill="#233a2e" />
          <circle cx="52" cy="10" r="4" fill="#d6d6d6" />
          <path d="M60 -6 C64 -14, 70 -14, 68 -4 C66 4, 60 4, 60 -6 Z" fill="#c1272d" />
          <ellipse cx="48" cy="45" rx="20" ry="24" fill="#c98a5e" />

          <rect x="40" y="64" width="18" height="14" fill="#c98a5e" />
      
          <path
            d="M10 90 C10 72, 30 78, 48 78 C66 78, 88 72, 88 90 L92 170 L6 170 Z"
            fill="url(#khakiShirt)"
          />

          <path d="M36 78 L48 96 L60 78" fill="none" stroke="#8a7040" strokeWidth="3" />
          
          <rect x="16" y="78" width="14" height="8" fill="#8a7040" />
          <rect x="68" y="78" width="14" height="8" fill="#8a7040" />

          <rect x="60" y="108" width="22" height="7" fill="#1a1a1a" rx="1" />
          
          <rect x="12" y="100" width="18" height="9" fill="#8a2432" rx="1" />
        </g>
      ))}
    </svg>
  );
}
