// Função de escape para garantir que nenhum caractere quebre o XML
const xmlEscape = (str) => {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
};

export function buildCardSvg(data) {
  const { user, rpg, stats, top_languages, avatarBase64 } = data;

    console.log("Dados para SVG:", { user, rpg, stats, top_languages });

  const colors = {
    Legendary: "#ff335f",
    Diamond: "#9900ff",
    Platinum: "#00c3ff",
    Gold: "#ffd700",
    Silver: "#c0c0c0",
    Bronze: "#cd7f32"
  };

  const themeColor = colors[rpg.tier] || "#00ff88";
  const xpBarWidth = (rpg.xp / 50) * 100;

  return `
    <svg width="450" height="200" viewBox="0 0 450 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .header { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: #fff; }
        .stat { font: 400 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #a9a9a9; }
        .rank { font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${themeColor}; }
        .bold { font-weight: 700; fill: #fff; }
        .tier-label { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${themeColor}; }
      </style>
      
      <rect width="450" height="200" rx="15" fill="#0d1117" stroke="#30363d" stroke-width="2"/>
      
      <clipPath id="circleView">
        <circle cx="60" cy="60" r="40" />
      </clipPath>
      
      <!-- USANDO O BASE64 AQUI -->
      <image href="${avatarBase64}" x="20" y="20" width="80" height="80" clip-path="url(#circleView)" />

      <text x="120" y="45" class="header">@${xmlEscape(user)}</text>
      <text x="120" y="65" class="tier-label">${xmlEscape(rpg.tier)} ${xmlEscape(rpg.devClass)}</text>
      
      <text x="120" y="95" class="stat">Level: <tspan class="bold">${rpg.level}</tspan></text>
      
      <rect x="200" y="85" width="100" height="10" rx="5" fill="#333" />
      <rect x="200" y="85" width="${xpBarWidth}" height="10" rx="5" fill="${themeColor}" />

      <line x1="20" y1="120" x2="430" y2="120" stroke="#30363d" stroke-width="1" />

        <text x="20" y="130" class="stat">Followers: <tspan class="bold">${stats.followers}</tspan></text>


      <text x="20" y="155" class="stat">Commits: <tspan class="bold">${stats.commits}</tspan></text>
      <text x="150" y="155" class="stat">Stars: <tspan class="bold">${stats.stars}</tspan></text>
      <text x="260" y="155" class="stat">Repos: <tspan class="bold">${stats.repos}</tspan></text>

      <text x="20" y="180" class="stat">Top Languages: <tspan class="bold">${xmlEscape(top_languages.join(", "))}</tspan></text>
      
      <text x="380" y="70" class="rank" text-anchor="middle">${rpg.level}</text>
      <text x="380" y="85" class="stat" text-anchor="middle" font-size="10">LEVEL</text>
    </svg>
  `.trim();
}