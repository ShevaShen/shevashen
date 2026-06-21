import sharp from "sharp";

const width = 1200;
const height = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#faf9f7"/>
      <stop offset="48%" stop-color="#f2f0ed"/>
      <stop offset="100%" stop-color="#e7ecec"/>
    </linearGradient>
    <radialGradient id="blueGlow" cx="83%" cy="17%" r="34%">
      <stop offset="0%" stop-color="#375b77" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#375b77" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amberGlow" cx="84%" cy="84%" r="32%">
      <stop offset="0%" stop-color="#b87847" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#b87847" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#171717" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#375b77"/>
      <stop offset="100%" stop-color="#b87847"/>
    </linearGradient>
    <linearGradient id="node" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#375b77" stop-opacity="0.12"/>
    </linearGradient>
    <style>
      .sans {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
        letter-spacing: 0;
      }
      .name {
        fill: rgba(23, 23, 23, 0.58);
        font-size: 28px;
        font-weight: 600;
      }
      .title {
        fill: #171717;
        font-size: 70px;
        font-weight: 650;
      }
      .dek {
        fill: rgba(23, 23, 23, 0.66);
        font-size: 28px;
        font-weight: 500;
      }
      .topic {
        fill: rgba(23, 23, 23, 0.6);
        font-size: 18px;
        font-weight: 600;
      }
      .slash {
        fill: rgba(23, 23, 23, 0.28);
        font-size: 18px;
        font-weight: 600;
      }
    </style>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#blueGlow)"/>
  <rect width="${width}" height="${height}" fill="url(#amberGlow)"/>
  <rect x="420" y="0" width="780" height="630" fill="url(#grid)" opacity="0.42"/>

  <g opacity="0.95">
    <ellipse cx="842" cy="270" rx="305" ry="196" fill="none" stroke="#375b77" stroke-opacity="0.14"/>
    <ellipse cx="860" cy="290" rx="220" ry="142" fill="none" stroke="#375b77" stroke-opacity="0.14"/>

    <rect x="700" y="80" width="330" height="170" fill="#ffffff" fill-opacity="0.34" stroke="#171717" stroke-opacity="0.13"/>
    <rect x="825" y="315" width="260" height="205" fill="#ffffff" fill-opacity="0.34" stroke="#171717" stroke-opacity="0.13"/>
    <rect x="600" y="370" width="185" height="120" fill="#ffffff" fill-opacity="0.32" stroke="#171717" stroke-opacity="0.12"/>

    <line x1="805" y1="165" x2="915" y2="165" stroke="#171717" stroke-opacity="0.38"/>
    <line x1="938" y1="210" x2="1063" y2="350" stroke="#171717" stroke-opacity="0.24"/>
    <line x1="740" y1="410" x2="870" y2="290" stroke="#171717" stroke-opacity="0.18"/>
    <line x1="908" y1="450" x2="1028" y2="450" stroke="#171717" stroke-opacity="0.28"/>

    <circle cx="766" cy="165" r="39" fill="url(#node)" stroke="#375b77" stroke-opacity="0.46"/>
    <circle cx="941" cy="169" r="39" fill="url(#node)" stroke="#375b77" stroke-opacity="0.46"/>
    <circle cx="869" cy="449" r="39" fill="url(#node)" stroke="#375b77" stroke-opacity="0.46"/>
    <circle cx="1054" cy="451" r="39" fill="url(#node)" stroke="#375b77" stroke-opacity="0.46"/>

    <rect x="615" y="455" width="120" height="60" fill="#b87847" fill-opacity="0.1" stroke="#b87847" stroke-opacity="0.56" transform="rotate(-7 675 485)"/>
    <rect x="982" y="242" width="120" height="60" fill="#b87847" fill-opacity="0.1" stroke="#b87847" stroke-opacity="0.56" transform="rotate(-7 1042 272)"/>
  </g>

  <g class="sans">
    <text x="74" y="97" class="name">Sheva Shen</text>
    <text x="74" y="211" class="title">Software</text>
    <text x="74" y="286" class="title">Engineering → AI Systems</text>
    <text x="74" y="430" class="dek">Engineering notes on agent systems, enterprise</text>
    <text x="74" y="467" class="dek">AI adoption, and reliable business systems.</text>
    <rect x="74" y="566" width="418" height="2" fill="url(#rule)"/>
    <text x="667" y="572" class="topic">Agent Systems</text>
    <text x="805" y="572" class="slash">/</text>
    <text x="820" y="572" class="topic">Enterprise AI</text>
    <text x="937" y="572" class="slash">/</text>
    <text x="954" y="572" class="topic">Harness Engineering</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile("static/img/shevashen-og-poster.png");
