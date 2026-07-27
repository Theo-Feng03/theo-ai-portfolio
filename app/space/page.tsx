import Link from "next/link";

const spaceWorks = [
  {
    title: "完整作品集",
    note: "进入当前已验收的 6 个沉浸式项目场景",
    href: "/",
    type: "portfolio",
    image: "/assets/projects/storageops-overview.png",
    alt: "完整作品集入口预览截图",
  },
  {
    title: "个人助手",
    note: "看我如何把长期记忆、规则约束和项目复盘做成 AI 工作系统",
    href: "/#assistant",
    type: "assistant",
    image: "/assets/personal-agent-rules.png",
    alt: "个人助手规则与记忆结构截图",
  },
  {
    title: "AI 学习雷达",
    note: "看我如何持续收集 AI 信息、筛选、摘要并沉淀学习记录",
    href: "/#news",
    type: "learning",
    image: "/assets/projects/ai-learning-dashboard.png",
    alt: "AI Learning Pulse 学习仪表盘截图",
  },
  {
    title: "联系我",
    note: "如果你在找 AI 产品经理，可以直接到出口终端复制联系方式",
    href: "#space-contact",
    type: "contact",
    image: "/assets/projects/snipclip-pin.png",
    alt: "联系入口预览截图",
  },
];

const spaceSignals = ["学习速度", "动手验证", "AI 落地"];
const spaceTech = ["LLM", "RAG", "Agent", "Prompt", "多模态", "AIOps"];

export const metadata = {
  title: "Theo Personal Space | AI 数字主页",
  description: "冯涛 Theo 的第二版个人数字空间原型，展示我是谁、我在做什么、作品入口和联系方式。",
};

export default function PersonalSpacePage() {
  return (
    <main className="space-page">
      <nav className="space-dock" aria-label="个人空间导航">
        <Link href="/">作品集版</Link>
        <a href="#identity">我是谁</a>
        <a href="#works">作品入口</a>
        <a href="#space-contact">联系</a>
      </nav>

      <section className="space-room space-room--hero" id="space-intro">
        <div className="space-copy">
          <span className="space-label">THEO PERSONAL SPACE</span>
          <h1>进入我的 AI 工作台。</h1>
          <p>这里不是项目展板，而是一个更像个人数字房间的主页原型：我是谁、我在做什么、做过什么、怎么联系我。</p>
          <a className="space-primary" href="#identity">进入空间</a>
        </div>

        <div className="space-stage" aria-label="Theo 的数字工作台">
          <div className="space-portal" aria-hidden="true" />
          <img className="space-character" src="/assets/theo-3d-character.png" alt="3D 卡通人物 Theo 拿着电脑站在数字空间中" />
          <div className="space-object space-object--browser">
            <span>WORKBENCH</span>
            <strong>把 AI 想法做成能跑的 Demo</strong>
            <img src="/assets/projects/storageops-overview.png" alt="StorageOps 产品总览截图" />
          </div>
          <div className="space-object space-object--host">
            <span>HOST</span>
            <strong>Theo</strong>
            <p>这个空间的主人，也负责把想法落地。</p>
          </div>
          <div className="space-object space-object--note">
            <span>NOW</span>
            <strong>AI 产品经理</strong>
            <p>快速学习，快速验证，快速落地。</p>
          </div>
          <div className="space-object space-object--map">
            {spaceTech.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="space-room space-room--identity" id="identity">
        <div className="space-person-card">
          <span>PERSON PROFILE</span>
          <h2>我是一个用 AI 快速学习、快速验证、快速落地产品的人。</h2>
          <p>我的优势不是只会讲概念，而是能把模糊想法拆成任务边界、交互流程和可运行原型。</p>
        </div>
        <div className="space-signal-board" aria-label="个人关键词">
          {spaceSignals.map((item) => (
            <article key={item}>
              <strong>{item}</strong>
              <span>{item === "学习速度" ? "拆新技术" : item === "动手验证" ? "跑通 Demo" : "进入流程"}</span>
            </article>
          ))}
        </div>
        <img className="space-identity-host" src="/assets/theo-3d-character.png" alt="Theo 站在个人空间中" />
      </section>

      <section className="space-room space-room--works" id="works">
        <div className="space-room-heading">
          <h2>作品不重复展开，只留下几个入口。</h2>
          <p>这里像工作台上的传送门：完整作品集、个人助手、AI 学习雷达和联系方式。</p>
        </div>
        <div className="space-workbench">
          {spaceWorks.map((work) => (
            <a className={`space-work-object space-work-object--${work.type}`} href={work.href} key={work.title}>
              <span>{work.title === "完整作品集" ? "MAIN ROOM" : work.title === "联系我" ? "EXIT" : "OPEN"}</span>
              <img src={work.image} alt={work.alt} />
              <div>
                <strong>{work.title}</strong>
                <span>{work.note}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="space-room space-room--contact" id="space-contact">
        <div className="space-contact-copy">
          <span>CONTACT TERMINAL</span>
          <h2>如果你在找 AI 产品经理，我们可以直接聊。</h2>
        </div>
        <div className="space-contact-terminal" aria-label="联系方式">
          <a href="mailto:18910212897@163.com"><span>邮箱</span><strong>18910212897@163.com</strong></a>
          <a href="tel:18910212897"><span>电话</span><strong>18910212897</strong></a>
          <div><span>微信</span><strong>fengtao97071</strong></div>
        </div>
      </section>
    </main>
  );
}
