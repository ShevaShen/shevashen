import { spawnSync } from "node:child_process";

const html = `<!doctype html>
<html>
  <head>
    <style>
      html,
      body {
        width: 1200px;
        height: 630px;
        margin: 0;
        overflow: hidden;
        background: #f5f5f4;
        font-family:
          Inter,
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          sans-serif;
      }

      .poster {
        position: relative;
        width: 1200px;
        height: 630px;
        overflow: hidden;
        background:
          radial-gradient(circle at 83% 17%, rgba(55, 91, 119, 0.2), transparent 30%),
          radial-gradient(circle at 83% 84%, rgba(184, 120, 71, 0.16), transparent 28%),
          linear-gradient(130deg, #faf9f7 0%, #f2f0ed 48%, #e7ecec 100%);
        color: #171717;
      }

      .grain {
        position: absolute;
        inset: 0;
        opacity: 0.42;
        background-image:
          linear-gradient(rgba(23, 23, 23, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(23, 23, 23, 0.03) 1px, transparent 1px);
        background-size: 36px 36px;
        mask-image: linear-gradient(90deg, transparent 0%, #000 45%, #000 100%);
      }

      .system {
        position: absolute;
        inset: 0;
      }

      .panel {
        position: absolute;
        border: 1px solid rgba(23, 23, 23, 0.13);
        background: rgba(255, 255, 255, 0.34);
        box-shadow: 0 24px 70px rgba(23, 23, 23, 0.06);
      }

      .p1 {
        left: 700px;
        top: 80px;
        width: 330px;
        height: 170px;
      }

      .p2 {
        left: 825px;
        top: 315px;
        width: 260px;
        height: 205px;
      }

      .p3 {
        left: 600px;
        top: 370px;
        width: 185px;
        height: 120px;
      }

      .node {
        position: absolute;
        width: 78px;
        height: 78px;
        border-radius: 999px;
        border: 1px solid rgba(55, 91, 119, 0.46);
        background: radial-gradient(
          circle at 34% 28%,
          rgba(255, 255, 255, 0.8),
          rgba(55, 91, 119, 0.12) 62%,
          rgba(55, 91, 119, 0.04)
        );
      }

      .n1 {
        left: 727px;
        top: 126px;
      }

      .n2 {
        left: 902px;
        top: 130px;
      }

      .n3 {
        left: 830px;
        top: 410px;
      }

      .n4 {
        left: 1015px;
        top: 412px;
      }

      .gate {
        position: absolute;
        width: 120px;
        height: 60px;
        border: 1px solid rgba(184, 120, 71, 0.56);
        background: rgba(184, 120, 71, 0.1);
        transform: rotate(-7deg);
      }

      .g1 {
        left: 615px;
        top: 455px;
      }

      .g2 {
        left: 982px;
        top: 242px;
      }

      .line {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(23, 23, 23, 0.38), transparent);
        transform-origin: left center;
      }

      .l1 {
        left: 805px;
        top: 165px;
        width: 110px;
      }

      .l2 {
        left: 938px;
        top: 210px;
        width: 185px;
        transform: rotate(47deg);
      }

      .l3 {
        left: 740px;
        top: 410px;
        width: 130px;
        transform: rotate(-40deg);
      }

      .l4 {
        left: 908px;
        top: 450px;
        width: 120px;
      }

      .arc {
        position: absolute;
        border: 1px solid rgba(55, 91, 119, 0.14);
        border-radius: 50%;
        transform: rotate(-22deg);
      }

      .a1 {
        left: 540px;
        top: 70px;
        width: 600px;
        height: 410px;
      }

      .a2 {
        left: 640px;
        top: 150px;
        width: 430px;
        height: 290px;
      }

      .content {
        position: absolute;
        left: 74px;
        top: 70px;
        width: 675px;
      }

      .name {
        margin: 0 0 46px;
        color: rgba(23, 23, 23, 0.58);
        font-size: 28px;
        font-weight: 600;
        letter-spacing: 0;
      }

      h1 {
        width: 670px;
        margin: 0;
        color: #171717;
        font-size: 74px;
        font-weight: 650;
        line-height: 0.98;
        letter-spacing: 0;
      }

      .dek {
        width: 575px;
        margin: 34px 0 0;
        color: rgba(23, 23, 23, 0.66);
        font-size: 28px;
        line-height: 1.34;
        letter-spacing: 0;
      }

      .rule {
        position: absolute;
        left: 74px;
        bottom: 62px;
        width: 418px;
        height: 2px;
        background: linear-gradient(90deg, #375b77, #b87847);
      }

      .topics {
        position: absolute;
        right: 72px;
        bottom: 55px;
        display: flex;
        gap: 10px;
        color: rgba(23, 23, 23, 0.6);
        font-size: 18px;
        font-weight: 600;
      }

      .topics span:not(:last-child)::after {
        content: "/";
        margin-left: 10px;
        color: rgba(23, 23, 23, 0.28);
      }
    </style>
  </head>
  <body>
    <main class="poster">
      <div class="grain"></div>
      <div class="system">
        <div class="arc a1"></div>
        <div class="arc a2"></div>
        <div class="panel p1"></div>
        <div class="panel p2"></div>
        <div class="panel p3"></div>
        <div class="node n1"></div>
        <div class="node n2"></div>
        <div class="node n3"></div>
        <div class="node n4"></div>
        <div class="gate g1"></div>
        <div class="gate g2"></div>
        <div class="line l1"></div>
        <div class="line l2"></div>
        <div class="line l3"></div>
        <div class="line l4"></div>
      </div>
      <section class="content">
        <p class="name">Sheva Shen</p>
        <h1>Software Engineering → AI Systems</h1>
        <p class="dek">Engineering notes on agent systems, enterprise AI adoption, and reliable business systems.</p>
      </section>
      <div class="rule"></div>
      <div class="topics">
        <span>Agent Systems</span>
        <span>Enterprise AI</span>
        <span>Harness Engineering</span>
      </div>
    </main>
  </body>
</html>`;

const url = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
const result = spawnSync(
  "npx",
  [
    "playwright",
    "screenshot",
    "--viewport-size=1200,630",
    url,
    "static/img/shevashen-og-poster.png",
  ],
  { stdio: "inherit" },
);

process.exit(result.status ?? 1);
