"use client";

const navItems = [
  { id: "intro", label: "冯涛 | Theo", short: "00", hint: "回到首屏身份介绍" },
  { id: "about", label: "关于我", short: "01", hint: "学习能力与 AI 落地能力" },
  { id: "tech-map", label: "AI 技术图谱", short: "02", hint: "AI 技术探索路径与实践积累" },
  { id: "assistant", label: "个人助手", short: "03", hint: "重点作品：个人助手系统" },
  { id: "ops", label: "运维平台 Demo", short: "04", hint: "Agent 产品与运维流程" },
  { id: "news", label: "AI 资讯 Agent", short: "05", hint: "近期完成的信息收集工具" },
  { id: "botc", label: "血染钟楼问答", short: "06", hint: "规则问答与兴趣场景应用" },
  { id: "travel", label: "出行准备工具", short: "07", hint: "场景化清单 MVP" },
  { id: "toolbox", label: "去 AI 工具", short: "08", hint: "vibe coding 小产品" },
  { id: "contact", label: "联系我", short: "09", hint: "微信、邮箱与电话" },
];

const projects = [
  {
    id: "assistant",
    eyebrow: "Featured Project",
    title: "个人助手",
    status: "已完成",
    summary: "长期自用的个人知识、任务和协作系统，后续会整理为首页最重点案例。",
    points: ["个人知识库", "任务协作", "Agent 化工作流"],
    accent: "mint",
  },
  {
    id: "ops",
    eyebrow: "Agent Product",
    title: "运维平台 Demo",
    status: "已完成",
    summary: "面向运维流程的 AI Agent 产品 Demo，重点展示流程拆解、人机协作与安全边界。",
    points: ["工单流转", "多 Agent 编排", "人工确认"],
    accent: "ink",
  },
  {
    id: "news",
    eyebrow: "Upcoming",
    title: "AI 资讯收集 Agent",
    status: "近期完成",
    summary: "网页版信息收集与筛选 Agent，预留为这两天补齐的新增作品。",
    points: ["信息聚合", "筛选摘要", "网页版体验"],
    accent: "amber",
  },
  {
    id: "botc",
    eyebrow: "Upcoming",
    title: "血染钟楼问答助手",
    status: "近期完成",
    summary: "兴趣场景驱动的 AI 问答助手，用来展示把 AI 能力落进具体使用场景的能力。",
    points: ["规则问答", "场景检索", "低门槛使用"],
    accent: "rose",
  },
  {
    id: "travel",
    eyebrow: "MVP",
    title: "出行准备工具",
    status: "已完成",
    summary: "AI 辅助的场景化打包清单 MVP，用作作品集里的可运行产品案例。",
    points: ["场景清单", "外部信息", "可运行 MVP"],
    accent: "sky",
  },
  {
    id: "toolbox",
    eyebrow: "Vibe Coding",
    title: "去 AI 工具",
    status: "已完成",
    summary: "基于 vibe coding 开发的小产品，支持复制和截图，作为快速构建能力展示。",
    points: ["轻量工具", "复制截图", "快速交付"],
    accent: "lime",
  },
];

const techNodes = [
  { label: "RAG", icon: "DB", className: "tech-node--rag" },
  { label: "多模态", icon: "IMG", className: "tech-node--multi" },
  { label: "Agent", icon: "BOT", className: "tech-node--agent" },
  { label: "Prompt", icon: "T", className: "tech-node--prompt" },
  { label: "安全", icon: "SEC", className: "tech-node--safe" },
  { label: "微调", icon: "FT", className: "tech-node--tune" },
  { label: "LangChain", icon: "LC", className: "tech-node--chain" },
  { label: "AIOps", icon: "OPS", className: "tech-node--aiops" },
];

function SideNav() {
  return (
    <aside className="side-nav">
      <nav className="nav-rail" aria-label="作品导航">
        {navItems.map((item) => (
          <a
            key={item.id}
            className="nav-tick"
            href={`#${item.id}`}
            aria-label={`跳转到${item.label}`}
          >
            <span className="nav-tick-line" />
            <span className="nav-card">
              <span>{item.short}</span>
              <strong>{item.label}</strong>
              <em>{item.hint}</em>
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

function TechMap() {
  return (
    <section id="tech-map" className="tech-map-section">
      <div className="tech-map-header">
        <h2>AI 技术图谱</h2>
        <p>我的 AI 技术探索路径与实践积累</p>
      </div>
      <div className="tech-map-canvas" aria-label="AI 技术图谱">
        <span className="tech-dot tech-dot--one" />
        <span className="tech-dot tech-dot--two" />
        <span className="tech-dot tech-dot--three" />
        <span className="tech-dot tech-dot--four" />
        <div className="tech-core">
          <span>LLM</span>
          <strong>LLM</strong>
        </div>
        {techNodes.map((node) => (
          <div className={`tech-node ${node.className}`} key={node.label}>
            <span>{node.icon}</span>
            <strong>{node.label}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <section id={project.id} className={`project-section project-section--${project.accent}`}>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <div className="project-heading">
          <h2>{project.title}</h2>
          <span>{project.status}</span>
        </div>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
      <div className="project-visual" aria-label={`${project.title} 内容占位`}>
        <div className="visual-index">{String(index + 1).padStart(2, "0")}</div>
        <div className="visual-lines">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-window">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <SideNav />
      <section id="intro" className="hero-section">
        <p className="hero-kicker">Portfolio / AI Product Manager</p>
        <h1>
          冯涛｜Theo
          <span>AI 产品经理</span>
        </h1>
        <p className="hero-lead">
          我希望通过这个作品集展示两件事：持续学习新技术的速度，以及把 AI 真正落到流程、工具和业务场景里的能力。
        </p>
        <div className="hero-actions">
          <a href="#assistant" className="primary-action">查看作品</a>
          <a href="#contact" className="secondary-action">联系我</a>
        </div>
      </section>

      <section id="about" className="about-section">
        <p className="eyebrow">About</p>
        <h2>学习快，动手深，能把 AI 从想法推进到可用产品。</h2>
        <div className="ability-grid">
          <article>
            <span>01</span>
            <h3>学习能力</h3>
            <p>从数据分析、数仓和运维场景一路延展到 RAG、Multi-Agent、Skill 与 Tool Calling。</p>
          </article>
          <article>
            <span>02</span>
            <h3>AI 落地能力</h3>
            <p>关注的不只是模型效果，而是任务边界、确认机制、异常兜底和真实使用链路。</p>
          </article>
          <article>
            <span>03</span>
            <h3>复杂流程产品化</h3>
            <p>擅长把散落的经验、规则和操作流程拆成状态、节点、权限与可验证结果。</p>
          </article>
        </div>
      </section>

      <TechMap />

      <section className="marquee-section" aria-label="作品集视觉节奏">
        <div className="marquee-track">
          {[...projects, ...projects].map((project, index) => (
            <span key={`${project.id}-${index}`}>{project.title}</span>
          ))}
        </div>
      </section>

      <div className="project-stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <section id="contact" className="contact-section">
        <p className="eyebrow">Contact</p>
        <h2>欢迎联系我聊 AI 产品经理机会。</h2>
        <div className="contact-grid">
          <a href="mailto:18910212897@163.com">18910212897@163.com</a>
          <a href="tel:18910212897">18910212897</a>
          <span>微信：fengtao97071</span>
        </div>
      </section>
    </main>
  );
}
