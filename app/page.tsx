"use client";

import { useEffect, type CSSProperties } from "react";

const navItems = [
  { id: "intro", label: "冯涛 | Theo", short: "00", hint: "首屏身份与作品入口" },
  { id: "about", label: "关于我", short: "01", hint: "学习速度与落地方式" },
  { id: "tech-map", label: "AI 技术图谱", short: "02", hint: "我的 AI 技术实践版图" },
  { id: "assistant", label: "个人助手", short: "03", hint: "重点作品：个人助手系统" },
  { id: "ops", label: "运维平台 Demo", short: "04", hint: "Agent 产品与运维闭环" },
  { id: "news", label: "AI Learning Pulse", short: "05", hint: "AI 资讯到学习闭环" },
  { id: "botc", label: "血染钟楼 RAG Agent", short: "06", hint: "本地知识库与规则问答" },
  { id: "travel", label: "出行准备工具", short: "07", hint: "场景化清单 MVP" },
  { id: "toolbox", label: "SnipClip", short: "08", hint: "截图与剪贴板小工具" },
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
    image: "/assets/personal-agent-rules.png",
    imageAlt: "个人助手 Agent Rules 与 Vault 目录结构截图",
    notes: [
      ["结构化记忆", "把项目、经验、技能、待审核内容分区管理，让助手能按场景调用材料。"],
      ["规则约束", "通过 Agent Rules 约束能读什么、何时确认、如何避免越权。"],
      ["持续复盘", "项目结束后沉淀可复用经验，让下一次 AI 协作更快、更稳。"],
    ],
  },
  {
    id: "ops",
    eyebrow: "Agent Product",
    title: "StorageOps Agent Demo",
    status: "已完成",
    summary: "面向 HDFS/HBase 场景的多 Agent 运维平台 Demo，覆盖风险预测、诊断、方案生成、人工 Review、执行验证和审计沉淀。",
    points: ["风险预测", "人工门禁", "执行验证"],
    heroImage: "/assets/projects/storageops-replay.gif",
    caption: "风险中心 → Agent 诊断 → 方案生成 → Review 门禁 → 人工执行回填 → 自动验证与审计。",
    evidence: [
      ["平台总览", "把存储 Agent 放进多 Agent 运维平台框架里，明确 Demo 边界和协作闭环。", "/assets/projects/storageops-overview.png", "StorageOps Agent Demo 平台总览截图"],
      ["风险中心", "围绕容量、阈值和趋势预测生成风险项，让运维问题先进入可追踪事件流。", "/assets/projects/storageops-risk-center.png", "StorageOps Agent Demo 风险中心截图"],
      ["运维方案", "Agent 输出命令草案、前置条件、适用范围和回滚计划，不自动执行命令。", "/assets/projects/storageops-operation-plan.png", "StorageOps Agent Demo 运维方案截图"],
      ["执行验证", "人工执行后回填结果，系统再做验证与状态更新。", "/assets/projects/storageops-execution.png", "StorageOps Agent Demo 执行验证截图"],
    ],
  },
  {
    id: "news",
    eyebrow: "Learning System",
    title: "AI Learning Pulse",
    status: "已完成",
    summary: "网页版 AI 资讯学习工具，自动采集多类信源，先由 AI 做筛选和摘要，再进入本人学习结论与脱敏展示闭环。",
    points: ["自动采集", "AI 筛选", "学习闭环"],
    video: "/assets/projects/ai-learning-loop.mp4",
    poster: "/assets/projects/ai-learning-dashboard.png",
    caption: "从资讯收件箱保存草稿 → 写本人结论 → 确认已学习 → 发布到公开预览。",
    evidence: [
      ["数据流架构", "RSS、GitHub Release、公众号与视频转写进入采集、去重、AI 分析和脱敏导出。", "/assets/projects/ai-learning-architecture.png", "AI Learning Pulse 数据流架构图"],
      ["总览仪表盘", "用统计瓦片、90 天热力图和主题分布展示学习节奏。", "/assets/projects/ai-learning-dashboard.png", "AI Learning Pulse 总览仪表盘截图"],
      ["资讯收件箱", "AI 生成中文标题、摘要、评分和标签，让信息筛选成为可排序的处理流。", "/assets/projects/ai-learning-inbox.png", "AI Learning Pulse 资讯收件箱截图"],
      ["学习时间线", "每条记录必须有本人结论才能发布，强调自动抓取不等于学习。", "/assets/projects/ai-learning-timeline.png", "AI Learning Pulse 学习时间线截图"],
    ],
  },
  {
    id: "botc",
    eyebrow: "RAG Agent",
    title: "血染钟楼 RAG Agent",
    status: "已完成",
    summary: "面向复杂桌游规则的本地 RAG 问答 Agent，基于官方中文 Wiki 构建知识库，通过多层检索与受限生成回答规则问题。",
    points: ["本地知识库", "引用溯源", "保守回答"],
    heroImage: "/assets/projects/botc-answer-philosopher.png",
    caption: "复杂问题不会直接拍脑袋回答，而是识别歧义、分支说明，并给出引用证据。",
    evidence: [
      ["分支回答", "复杂交互会被拆成不同前提，系统明确标注存在歧义。", "/assets/projects/botc-answer-philosopher.png", "血染钟楼 RAG Agent 哲学家问题完整回答截图"],
      ["知识库来源", "3019 个 chunks、362 个词条，按角色、规则、能力、剧本等类型分层入库。", "/assets/projects/botc-knowledge-base.png", "血染钟楼 RAG Agent 知识库概览截图"],
      ["复杂题边界", "遇到证据不足的选项会保守标注，不强行编造答案。", "/assets/projects/botc-hard-question.png", "血染钟楼 RAG Agent 复杂选择题回答截图"],
    ],
  },
  {
    id: "travel",
    eyebrow: "Mobile MVP",
    title: "出行清单工具",
    status: "已完成",
    display: "phone",
    summary: "手机端出行准备 MVP，通过对话补全目的地、时间、天数和出行目的，结合天气、交通与周边信息生成场景化清单。",
    points: ["多轮补全", "天气交通", "场景清单"],
    heroImage: "/assets/projects/travel-demo.gif",
    caption: "从一句自然语言出发，补全信息后生成出行清单，并支持车票、周边和出发前核对。",
    evidence: [
      ["轻量入口", "首页给出示例场景和输入框，降低从空白开始描述行程的成本。", "/assets/projects/travel-home.png", "出行清单工具首页入口截图"],
      ["对话补全", "当目的地、时间或目的不完整时，先追问关键信息，再生成清单。", "/assets/projects/travel-dialog.png", "出行清单工具对话追问补全截图"],
      ["天气影响清单", "把天气、温度和降雨概率直接转化为物品建议。", "/assets/projects/travel-weather-list.png", "出行清单工具天气影响清单截图"],
      ["场景差异", "支持 12306 查询，也能对亲子度假和商务出差生成不同清单。", "/assets/projects/travel-scenario-compare.png", "出行清单工具亲子度假和商务出差场景对比截图"],
    ],
  },
  {
    id: "toolbox",
    eyebrow: "Vibe Coding",
    title: "SnipClip",
    status: "已完成",
    summary: "macOS 菜单栏小工具，把剪贴板历史、区域截图、标注和贴图悬浮连成一个轻量工作流。",
    points: ["剪贴板历史", "截图标注", "贴图悬浮"],
    video: "/assets/projects/snipclip-flow.mp4",
    poster: "/assets/projects/snipclip-pin.png",
    caption: "F1 触发框选 → 标注 → 隐藏工具栏贴图 → 拖动悬浮 → 双击关闭。",
    evidence: [
      ["剪贴板历史", "文本、链接、代码和图片都能被记住，菜单栏里随时取回。", "/assets/projects/snipclip-clipboard.png", "SnipClip 剪贴板历史菜单截图"],
      ["截图标注", "矩形、箭头、文字、序号和马赛克等常用标注工具集中在截图窗口里。", "/assets/projects/snipclip-annotation.png", "SnipClip 截图标注工具截图"],
      ["贴图悬浮", "截图可以钉在所有窗口之上，用来对照资料、写文档或复盘问题。", "/assets/projects/snipclip-pin.png", "SnipClip 贴图悬浮截图"],
      ["复制闭环", "标注后复制的图片会进入历史记录，让截图和剪贴板能力打通。", "/assets/projects/snipclip-history.png", "SnipClip 截图复制到历史记录截图"],
    ],
  },
];

const techNodes = ["LLM", "RAG", "Agent", "Prompt", "多模态", "安全", "LangChain", "AIOps", "微调"];

type Project = (typeof projects)[number];

function ScrollGalleryMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>(".case-section"));
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;

      sections.forEach((section, index) => {
        const pin = section.querySelector<HTMLElement>(".case-pin");
        const media = section.querySelector<HTMLElement>(".case-media");
        const strip = section.querySelector<HTMLElement>(".evidence-strip");
        const phoneTrack = section.querySelector<HTMLElement>(".phone-track");
        const phoneShell = section.querySelector<HTMLElement>(".phone-shell");
        const phoneScreen = section.querySelector<HTMLElement>(".phone-screen");
        if (!pin || !media) return;

        const rect = pin.getBoundingClientRect();
        const travel = Math.max(1, rect.height - viewportHeight);
        const progress = clamp(-rect.top / travel);
        media.style.setProperty("--story-progress", progress.toFixed(3));

        if (phoneTrack && phoneShell && phoneScreen) {
          const maxX = Math.max(0, phoneTrack.scrollWidth - phoneScreen.clientWidth);
          const sway = Math.sin(progress * Math.PI * 3) * 10;
          const shellTilt = -2 + progress * 4;

          phoneTrack.style.transform = `translate3d(${-maxX * progress + sway}px, 0, 0)`;
          phoneShell.style.transform = `translate3d(${sway * 0.32}px, 0, 0) rotate(${shellTilt}deg)`;
          return;
        }

        if (!strip) return;

        const maxX = Math.max(0, strip.scrollWidth - media.clientWidth + 80);
        const isLeft = index % 2 === 0;
        const startX = isLeft ? media.clientWidth * 0.18 : -maxX;
        const endX = isLeft ? -maxX : media.clientWidth * 0.12;
        const x = startX + (endX - startX) * progress;
        const y = isLeft ? -30 + 70 * progress : 28 - 68 * progress;
        const rotate = isLeft ? -2.2 : 2.2;

        strip.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("load", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("load", requestUpdate);
    };
  }, []);

  return null;
}

function SideNav() {
  return (
    <aside className="side-nav">
      <nav className="nav-rail" aria-label="作品导航">
        {navItems.map((item) => (
          <a key={item.id} className="nav-tick" href={`#${item.id}`} aria-label={`跳转到${item.label}`}>
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

function HeroMosaic() {
  return (
    <div className="hero-board" aria-label="作品截图预览">
      <figure className="hero-shot hero-shot--primary">
        <img src="/assets/personal-agent-rules.png" alt="个人助手规则与知识库截图" />
        <figcaption>Personal Agent</figcaption>
      </figure>
      <figure className="hero-shot hero-shot--ops">
        <img src="/assets/projects/storageops-overview.png" alt="StorageOps 平台总览截图" />
        <figcaption>Ops Agent</figcaption>
      </figure>
      <figure className="hero-shot hero-shot--news">
        <img src="/assets/projects/ai-learning-dashboard.png" alt="AI Learning Pulse 仪表盘截图" />
        <figcaption>Learning Pulse</figcaption>
      </figure>
      <div className="hero-console">
        <span>6 个作品案例</span>
        <strong>5 个已完成，1 个持续迭代</strong>
      </div>
    </div>
  );
}

function TechMap() {
  return (
    <section id="tech-map" className="tech-map-section">
      <div className="section-intro">
        <p className="eyebrow">AI Stack</p>
        <h2>AI 技术图谱不是罗列名词，而是我反复动手的路线。</h2>
        <p>从 RAG、Agent 到安全边界和 AIOps，我更关心这些能力如何被放进一个可使用、可验证、可复盘的产品流程里。</p>
      </div>
      <div className="tech-map-canvas" aria-label="AI 技术图谱">
        {techNodes.map((node, index) => (
          <span className={index === 0 ? "tech-pill tech-pill--core" : "tech-pill"} key={node}>
            {node}
          </span>
        ))}
      </div>
    </section>
  );
}

function MediaFrame({ project }: { project: Project }) {
  if ("video" in project && project.video) {
    return (
      <video src={project.video} poster={project.poster} autoPlay loop muted playsInline />
    );
  }

  if ("heroImage" in project && project.heroImage) {
    return <img src={project.heroImage} alt={`${project.title} 主展示截图`} loading="lazy" />;
  }

  return <img src={project.image} alt={project.imageAlt} loading="lazy" />;
}

function isPhoneProject(project: Project) {
  return "display" in project && project.display === "phone";
}

function PhoneCaseMedia({ project }: { project: Project }) {
  if (!("evidence" in project)) return null;

  return (
    <div className="phone-case-layout">
      <div className="phone-case-copy">
        <span>手机端证据流</span>
        <h3>把手机截图放回手机场景里看。</h3>
        <p>{project.caption}</p>
        <div className="phone-case-steps">
          {project.evidence.map(([title], index) => (
            <span key={title}>{String(index + 1).padStart(2, "0")} · {title}</span>
          ))}
        </div>
      </div>

      <div className="phone-stage" aria-label={`${project.title} 手机截图展示`}>
        <div className="phone-shell">
          <div className="phone-speaker" />
          <div className="phone-screen">
            <div
              className="phone-track"
              style={{ "--phone-count": project.evidence.length } as CSSProperties}
            >
              {project.evidence.map(([title, body, image, alt]) => (
                <article className="phone-shot" key={title}>
                  <img src={image} alt={alt} loading="lazy" />
                  <div>
                    <strong>{title}</strong>
                    <span>{body}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <p className="phone-caption">继续向下滚动，手机屏内截图会横向切换。</p>
      </div>
    </div>
  );
}

function FeaturedAssistant({ project }: { project: Project }) {
  if (!("notes" in project)) return null;

  return (
    <section id={project.id} className="assistant-feature">
      <div className="feature-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h2>{project.title}</h2>
        <span className="status-pill">{project.status}</span>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
      <figure className="assistant-shot">
        <img src={project.image} alt={project.imageAlt} />
        <figcaption>Vault 目录结构 + Agent Rules 治理规则</figcaption>
      </figure>
      <div className="assistant-notes">
        {project.notes.map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  if (!("evidence" in project)) return null;
  const storyHeight = `${126 + project.evidence.length * 78}vh`;
  const phoneProject = isPhoneProject(project);

  return (
    <section
      id={project.id}
      className={phoneProject ? "case-section case-section--phone" : "case-section"}
      style={{ "--story-height": storyHeight } as CSSProperties}
    >
      <div className="case-copy">
        <span className="case-index">{String(index).padStart(2, "0")}</span>
        <p className="eyebrow">{project.eyebrow}</p>
        <h2>{project.title}</h2>
        <span className="status-pill">{project.status}</span>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
      <div className="case-pin">
        <div className="case-media">
          {phoneProject ? (
            <PhoneCaseMedia project={project} />
          ) : (
            <>
              <figure className="media-main">
                <MediaFrame project={project} />
                <figcaption>{project.caption}</figcaption>
              </figure>
              <div className="carousel-header">
                <span>向下滚动时斜向掠过截图</span>
                <span>{project.evidence.length} 张</span>
              </div>
              <div className="evidence-strip" aria-label={`${project.title} 滚动截图带`}>
                {project.evidence.map(([title, body, image, alt]) => (
                  <article className="evidence-item" key={title}>
                    <img src={image} alt={alt} loading="lazy" />
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [assistant, ...caseProjects] = projects;

  return (
    <main>
      <ScrollGalleryMotion />
      <SideNav />
      <section id="intro" className="hero-section">
        <div className="hero-copy">
          <p className="hero-kicker">AI Product Manager Portfolio</p>
          <h1>我把 AI 想法做成能跑的产品。</h1>
          <p className="hero-lead">
            冯涛｜Theo，AI 产品经理。用 6 个作品展示学习速度、动手深度和 AI 落地能力。
          </p>
          <div className="hero-actions">
            <a href="#assistant" className="primary-action">先看个人助手</a>
            <a href="#contact" className="secondary-action">联系我</a>
          </div>
        </div>
        <HeroMosaic />
      </section>

      <section id="about" className="about-section">
        <div className="section-intro">
          <p className="eyebrow">Positioning</p>
          <h2>我更像一个把新技术拆开、接上、跑通，再变成产品判断的人。</h2>
        </div>
        <div className="proof-board">
          <article>
            <span>01</span>
            <h3>学习快</h3>
            <p>能快速把 RAG、Agent、Tool Calling、工作流编排这些技术转成可验证 Demo。</p>
          </article>
          <article>
            <span>02</span>
            <h3>落地实</h3>
            <p>不只追求模型回答漂亮，更关注任务边界、人工确认、异常兜底和结果验证。</p>
          </article>
          <article>
            <span>03</span>
            <h3>复盘强</h3>
            <p>会把项目经验沉淀成规则、素材、流程和下一次迭代可直接调用的结构。</p>
          </article>
        </div>
      </section>

      <TechMap />

      <FeaturedAssistant project={assistant} />

      <section className="work-section" aria-label="作品案例">
        <div className="section-intro">
          <p className="eyebrow">Case Studies</p>
          <h2>每个作品先介绍，再进入固定展示框看完整截图动线。</h2>
          <p>页面仍然正常向下滚动。进入项目展示后，大框会固定在屏幕里，截图轨道在框内移动，展示完一组后再进入下一个项目。</p>
        </div>
        <div className="case-stack">
          {caseProjects.map((project, index) => (
            <ProjectCase key={project.id} project={project} index={index + 2} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">Contact</p>
        <h2>如果你在找 AI 产品经理，我们可以直接聊。</h2>
        <div className="contact-grid">
          <a href="mailto:18910212897@163.com">18910212897@163.com</a>
          <a href="tel:18910212897">18910212897</a>
          <span>微信：fengtao97071</span>
        </div>
      </section>
    </main>
  );
}
