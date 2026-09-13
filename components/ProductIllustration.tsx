type ProductType = "uniform" | "tracksuit" | "tshirt" | "shoes";

export default function ProductIllustration({ type }: { type: ProductType }) {
  if (type === "uniform") {
    return (
      <svg viewBox="0 0 200 160" className="h-full w-full">
        <rect width="200" height="160" fill="#f2eee3" />
        <path d="M70 30 C70 20, 90 22, 100 22 C110 22, 130 20, 130 30 L138 90 L62 90 Z" fill="#c7a76a" />
        <rect x="72" y="90" width="56" height="55" fill="#b3925a" />
        <rect x="80" y="90" width="8" height="55" fill="#8a7040" />
        <rect x="112" y="90" width="8" height="55" fill="#8a7040" />
        <rect x="128" y="46" width="14" height="8" fill="#8a2432" />
      </svg>
    );
  }
  if (type === "tracksuit") {
    return (
      <svg viewBox="0 0 200 160" className="h-full w-full">
        <rect width="200" height="160" fill="#eef1f8" />
        <path d="M70 26 C70 18, 130 18, 130 26 L140 80 L110 80 L100 60 L90 80 L60 80 Z" fill="#1e3a75" />
        <path d="M70 26 L60 60" stroke="#c1272d" strokeWidth="4" fill="none" />
        <path d="M130 26 L140 60" stroke="#c1272d" strokeWidth="4" fill="none" />
        <rect x="70" y="95" width="24" height="55" fill="#1e3a75" />
        <rect x="106" y="95" width="24" height="55" fill="#1e3a75" />
        <rect x="70" y="95" width="6" height="55" fill="#c1272d" />
        <rect x="124" y="95" width="6" height="55" fill="#c1272d" />
      </svg>
    );
  }
  if (type === "tshirt") {
    return (
      <svg viewBox="0 0 200 160" className="h-full w-full">
        <rect width="200" height="160" fill="#f7f7f7" />
        <path d="M75 38 L60 30 L45 48 L58 60 L65 54 L65 120 L135 120 L135 54 L142 60 L155 48 L140 30 L125 38 C120 46, 80 46, 75 38 Z" fill="#1e3a75" />
        <rect x="90" y="60" width="20" height="16" fill="#ffffff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect width="200" height="160" fill="#f2f2f2" />
      <path
        d="M40 110 C40 95, 55 90, 68 92 L72 78 C80 70, 100 70, 108 80 L140 100 C150 104, 160 104, 160 116 C160 122, 152 124, 140 124 L44 124 C38 124, 38 116, 40 110 Z"
        fill="#1a1a1a"
      />
      <rect x="40" y="118" width="120" height="8" rx="2" fill="#0a0a0a" />
    </svg>
  );
}
