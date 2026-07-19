import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /冯涛/);
  assert.match(html, /Theo/);
  assert.match(html, /AI 产品经理/);
  assert.match(html, /AI 技术图谱/);
  assert.match(html, /个人助手/);
  assert.match(html, /StorageOps Agent Demo|运维平台 Demo/);
  assert.match(html, /AI Learning Pulse|AI 资讯收集 Agent|AI 资讯 Agent/);
  assert.match(html, /血染钟楼 RAG Agent|血染钟楼问答助手|血染钟楼问答/);
  assert.match(html, /出行清单工具|出行准备工具/);
  assert.match(html, /fengtao97071/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/);
});

test("keeps the custom navigation and metadata in source", async () => {
  const [css, page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(css, /\.side-nav/);
  assert.match(css, /\.nav-rail/);
  assert.match(css, /\.nav-card/);
  assert.match(page, /跳转到/);
  assert.doesNotMatch(page, /固定导航|取消固定|side-nav--pinned|nav-tick--featured/);
  assert.match(layout, /冯涛 Theo \| AI 产品经理作品集/);
  assert.match(packageJson, /"name": "theo-ai-product-portfolio"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview|themeColor|\bViewport\b/);
});
