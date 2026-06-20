import { spawnSync } from "node:child_process";

const html = `<!doctype html>
<html>
  <head>
    <style>
      html,
      body {
        width: 1600px;
        height: 900px;
        margin: 0;
        overflow: hidden;
        background: #141413;
      }

      .stage {
        position: relative;
        width: 1600px;
        height: 900px;
        background:
          radial-gradient(circle at 82% 20%, rgba(15, 118, 110, 0.32), transparent 28%),
          radial-gradient(circle at 72% 78%, rgba(162, 65, 23, 0.22), transparent 24%),
          linear-gradient(100deg, #111110 0%, #171716 42%, #21344c 100%);
      }

      .quiet {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          rgba(10, 10, 9, 0.82) 0%,
          rgba(10, 10, 9, 0.62) 38%,
          rgba(10, 10, 9, 0.1) 74%
        );
      }

      .grain {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
        background-size: 46px 46px;
        mask-image: linear-gradient(90deg, transparent 0%, #000 36%, #000 100%);
      }

      .panel {
        position: absolute;
        border: 1px solid rgba(255, 253, 250, 0.22);
        background: linear-gradient(
          145deg,
          rgba(255, 253, 250, 0.12),
          rgba(255, 253, 250, 0.035)
        );
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
      }

      .p1 {
        left: 760px;
        top: 105px;
        width: 610px;
        height: 260px;
      }

      .p2 {
        left: 910px;
        top: 420px;
        width: 500px;
        height: 320px;
      }

      .p3 {
        left: 590px;
        top: 500px;
        width: 330px;
        height: 210px;
      }

      .node {
        position: absolute;
        width: 112px;
        height: 112px;
        border-radius: 999px;
        border: 1px solid rgba(217, 238, 232, 0.5);
        background: radial-gradient(
          circle at 32% 28%,
          rgba(217, 238, 232, 0.34),
          rgba(15, 118, 110, 0.12) 56%,
          rgba(15, 118, 110, 0.04)
        );
        box-shadow: 0 0 60px rgba(15, 118, 110, 0.18);
      }

      .n1 {
        left: 840px;
        top: 180px;
      }

      .n2 {
        left: 1110px;
        top: 185px;
      }

      .n3 {
        left: 1010px;
        top: 555px;
      }

      .n4 {
        left: 1265px;
        top: 570px;
      }

      .gate {
        position: absolute;
        width: 168px;
        height: 88px;
        border: 1px solid rgba(162, 65, 23, 0.58);
        background: rgba(162, 65, 23, 0.12);
        transform: rotate(-8deg);
      }

      .g1 {
        left: 690px;
        top: 610px;
      }

      .g2 {
        left: 1185px;
        top: 325px;
      }

      .line {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 253, 250, 0.55), transparent);
        transform-origin: left center;
      }

      .l1 {
        left: 948px;
        top: 236px;
        width: 170px;
      }

      .l2 {
        left: 1145px;
        top: 290px;
        width: 250px;
        transform: rotate(48deg);
      }

      .l3 {
        left: 880px;
        top: 550px;
        width: 190px;
        transform: rotate(-42deg);
      }

      .l4 {
        left: 1105px;
        top: 615px;
        width: 170px;
      }

      .trace {
        position: absolute;
        top: 118px;
        right: 110px;
        width: 300px;
        height: 650px;
        border-right: 1px solid rgba(255, 253, 250, 0.08);
        border-left: 1px solid rgba(255, 253, 250, 0.22);
      }

      .trace i {
        display: block;
        height: 1px;
        margin: 28px 0;
        background: linear-gradient(
          90deg,
          rgba(255, 253, 250, 0.12),
          rgba(217, 238, 232, 0.52),
          rgba(255, 253, 250, 0.04)
        );
      }

      .arc {
        position: absolute;
        border: 1px solid rgba(217, 238, 232, 0.26);
        border-radius: 50%;
        transform: rotate(-22deg);
      }

      .a1 {
        left: 665px;
        top: 145px;
        width: 770px;
        height: 520px;
      }

      .a2 {
        left: 735px;
        top: 210px;
        width: 610px;
        height: 390px;
      }

      .accent {
        position: absolute;
        right: 210px;
        bottom: 100px;
        width: 320px;
        height: 10px;
        background: linear-gradient(90deg, #0f766e, #a24117);
        opacity: 0.75;
      }
    </style>
  </head>
  <body>
    <div class="stage">
      <div class="grain"></div>
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
      <div class="trace">${"<i></i>".repeat(18)}</div>
      <div class="accent"></div>
      <div class="quiet"></div>
    </div>
  </body>
</html>`;

const url = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
const result = spawnSync(
  "npx",
  [
    "playwright",
    "screenshot",
    "--viewport-size=1600,900",
    url,
    "static/img/ai-platform-hero.png",
  ],
  { stdio: "inherit" },
);

process.exit(result.status ?? 1);
