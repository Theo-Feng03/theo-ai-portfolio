"use client";

const navItems = [
  { id: "intro", label: "冯涛 | Theo", short: "00", hint: "回到首屏身份介绍" },
  { id: "about", label: "关于我", short: "01", hint: "学习能力与 AI 落地能力" },
  { id: "tech-map", label: "AI 技术图谱", short: "02", hint: "AI 技术探索路径与实践积累" },
  { id: "assistant", label: "个人助手", short: "03", hint: "重点作品：个人助手系统" },
  { id: "ops", label: "运维平台 Demo", short: "04", hint: "Agent 产品与运维流程" },
  { id: "news", label: "AI Learning Pulse", short: "05", hint: "AI 资讯到本人学习的闭环工具" },
  { id: "botc", label: "血染钟楼 RAG Agent", short: "06", hint: "本地知识库与规则问答" },
  { id: "travel", label: "出行准备工具", short: "07", hint: "场景化清单 MVP" },
  { id: "toolbox", label: "SnipClip", short: "08", hint: "剪贴板历史与截图标注工具" },
  { id: "contact", label: "联系我", short: "09", hint: "微信、邮箱与电话" },
];

const projects = [
  {
    id: "assistant",
    eyebrow: "Featured Project",
    title: "个人助手",
    status: "持续迭代中",
    summary: "一个本地 Demo 阶段的个人 AI 工作系统原型，用来验证项目复盘、手机控制、记忆治理和规则约束如何组合成长期可进化的个人助手。",
    points: ["项目复盘", "手机控制", "记忆治理"],
    accent: "mint",
    image: "/assets/personal-agent-rules.png",
    imageAlt: "个人助手 Agent Rules 与 Vault 目录结构截图",
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
    eyebrow: "Learning System",
    title: "AI Learning Pulse",
    status: "已完成",
    summary: "一个网页版 AI 资讯学习工具：自动采集多类信源，先由 AI 做筛选和摘要，再强制进入本人学习结论与脱敏展示闭环。",
    points: ["自动采集", "AI 筛选", "学习闭环"],
    accent: "amber",
    showcase: {
      video: "/assets/projects/ai-learning-loop.mp4",
      poster: "/assets/projects/ai-learning-dashboard.png",
      caption: "从资讯收件箱保存草稿 → 写本人结论 → 确认已学习 → 发布到公开预览。",
      evidence: [
        {
          title: "数据流架构",
          body: "从 RSS、GitHub Release、公众号与视频转写进入采集、去重、AI 分析和脱敏导出。",
          image: "/assets/projects/ai-learning-architecture.png",
          alt: "AI Learning Pulse 数据流架构图",
        },
        {
          title: "总览仪表盘",
          body: "用统计瓦片、90 天热力图和主题分布展示学习节奏，而不是只展示资讯数量。",
          image: "/assets/projects/ai-learning-dashboard.png",
          alt: "AI Learning Pulse 总览仪表盘截图",
        },
        {
          title: "资讯收件箱",
          body: "AI 生成中文标题、摘要、评分和标签，让信息筛选从人工扫标题变成可排序的处理流。",
          image: "/assets/projects/ai-learning-inbox.png",
          alt: "AI Learning Pulse 资讯收件箱截图",
        },
        {
          title: "学习时间线",
          body: "每条记录必须有本人结论才能发布，强调自动抓取不等于学习。",
          image: "/assets/projects/ai-learning-timeline.png",
          alt: "AI Learning Pulse 学习时间线截图",
        },
      ],
    },
  },
  {
    id: "botc",
    eyebrow: "RAG Agent",
    title: "血染钟楼 RAG Agent",
    status: "已完成",
    summary: "一个面向复杂桌游规则的本地 RAG 问答 Agent：基于官方中文 Wiki 构建知识库，通过多层检索与受限生成回答规则问题，并显式展示证据、不确定点和已知边界。",
    points: ["本地知识库", "引用溯源", "保守回答"],
    accent: "rose",
    showcase: {
      heroImage: "/assets/projects/botc-answer-philosopher.png",
      caption: "复杂问题不会直接拍脑袋回答，而是识别歧义、分支说明，并给出引用证据。",
      evidence: [
        {
          title: "分支回答",
          body: "哲学家与贤者的复杂交互会被拆成不同前提，系统明确标注“存在歧义”。",
          image: "/assets/projects/botc-answer-philosopher.png",
          alt: "血染钟楼 RAG Agent 哲学家问题完整回答截图",
        },
        {
          title: "知识库来源",
          body: "3019 个 chunks、362 个词条，按角色、规则、能力、剧本等类型分层入库。",
          image: "/assets/projects/botc-knowledge-base.png",
          alt: "血染钟楼 RAG Agent 知识库概览截图",
        },
        {
          title: "复杂题边界",
          body: "遇到证据不足的选项会保守标注，不强行编造答案，也保留已知缺陷用于迭代。",
          image: "/assets/projects/botc-hard-question.png",
          alt: "血染钟楼 RAG Agent 复杂选择题回答截图",
        },
      ],
    },
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
    title: "SnipClip",
    status: "已完成",
    summary: "一个 macOS 菜单栏小工具：把剪贴板历史、区域截图、标注和贴图悬浮连成一个轻量工作流，用 vibe coding 快速推进到可用形态。",
    points: ["剪贴板历史", "截图标注", "贴图悬浮"],
    accent: "lime",
    showcase: {
      video: "/assets/projects/snipclip-flow.mp4",
      poster: "/assets/projects/snipclip-pin.png",
      caption: "F1 触发框选 → 标注 → 隐藏工具栏贴图 → 拖动悬浮 → 双击关闭。",
      evidence: [
        {
          title: "剪贴板历史",
          body: "文本、链接、代码和图片都能被记住，菜单栏里随时取回。",
          image: "/assets/projects/snipclip-clipboard.png",
          alt: "SnipClip 剪贴板历史菜单截图",
        },
        {
          title: "截图标注",
          body: "矩形、箭头、文字、序号和马赛克等常用标注工具集中在截图窗口里。",
          image: "/assets/projects/snipclip-annotation.png",
          alt: "SnipClip 截图标注工具截图",
        },
        {
          title: "贴图悬浮",
          body: "截图可以钉在所有窗口之上，用来对照资料、写文档或复盘问题。",
          image: "/assets/projects/snipclip-pin.png",
          alt: "SnipClip 贴图悬浮截图",
        },
        {
          title: "复制闭环",
          body: "标注后复制的图片会进入历史记录，让截图和剪贴板能力真正打通。",
          image: "/assets/projects/snipclip-history.png",
          alt: "SnipClip 截图复制到历史记录截图",
        },
      ],
    },
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
      {"showcase" in project && project.showcase ? (
        <div className="project-showcase" aria-label={`${project.title} 作品展示`}>
          <figure className="showcase-main">
            {"video" in project.showcase ? (
              <video
                src={project.showcase.video}
                poster={project.showcase.poster}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={project.showcase.heroImage} alt={`${project.title} 主展示截图`} />
            )}
            <figcaption>{project.showcase.caption}</figcaption>
          </figure>
          <div className="evidence-grid">
            {project.showcase.evidence.map((item) => (
              <article className="evidence-card" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : project.image ? (
        <figure className="project-screenshot">
          <img src={project.image} alt={project.imageAlt} />
          <figcaption>Vault 目录结构 + Agent Rules 治理规则</figcaption>
          <div className="screenshot-notes" aria-label="截图解读">
            <span>
              <strong>左侧不是普通文件夹</strong>
              我把项目、经验、技能和待审核内容分区管理，让助手能按场景调用材料。
            </span>
            <span>
              <strong>右侧不是随手写的说明</strong>
              它是助手运行规则，用来约束能读什么、何时要确认、怎样避免越权。
            </span>
            <span>
              <strong>这张图想表达的价值</strong>
              把零散 AI 使用经验沉淀成可复用系统，让后续项目更快、更稳、更可控。
            </span>
          </div>
        </figure>
      ) : (
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
      )}
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
