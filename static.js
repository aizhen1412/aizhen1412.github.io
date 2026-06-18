const EMAIL = "hezhu@ucas.ac.cn";

const researchDirections = [
  {
    title: "计算光谱系统及应用",
    short: "红外光谱芯片、计算光谱成像、深度学习光谱超分辨。",
    image: "./assets/lab/research-computational-spectroscopy.png",
    details: [
      "在光电响应调控基础上，制备计算光谱芯片及系统。",
      "使用压缩感知类算法、ResNet、生成模型等深度学习方法进行智能化数据处理。",
      "应用场景包括气体探测、挥发性有机物探测、生物医学监测等。",
      "当前课题包括红外光谱芯片设计、计算光谱成像系统、基于深度学习的光谱超分辨算法。",
      "实验室搭建有光电芯片综合性能表征平台：傅里叶光谱仪、黑体响应测试、光电流显微成像、带宽测量、噪声测量等。"
    ],
    tasks: ["光谱芯片设计", "光谱成像实验", "深度学习光谱重建"]
  },
  {
    title: "光电编码及感知器件",
    short: "微纳光学结构、电/热调控、低维材料光电响应和感算一体。",
    image: "./assets/lab/research-optoelectronic-encoding.png",
    details: [
      "通过光电响应优化、多维探测、感算一体等方式构建新型感知器件。",
      "使用微纳光学结构、电调控、热调控等方式调控传统体材料或低维材料的光电响应。",
      "面向光谱探测、可重构视觉等新型感知任务。",
      "获得国家自然科学基金、浙江省基金重大项目等支持。",
      "实验室搭建光电材料平台：自主设计材料生长设备、半导体参数分析仪、光谱显微测试设备等。"
    ],
    tasks: ["微纳结构仿真", "薄膜和器件制备", "光电响应测试"]
  },
  {
    title: "智能光电探测器件与芯片基础研究",
    short: "面向环境、生命、气体探测、挥发性有机物和生物医学监测。",
    image: "./assets/lab/research-intelligent-detector.png",
    details: [
      "围绕智能光电探测器件、芯片基础研究开展长期课题布局。",
      "结合物理机制、芯片平台、光谱系统和 AI 数据处理方法。",
      "面向环境、生命等领域开展应用研究。",
      "参与微纳光子芯片集成光谱分析与成像技术、长波红外焦平面器件等国家级项目。",
      "适合希望在器件、系统、算法和应用之间做交叉研究的学生。"
    ],
    tasks: ["探测器表征", "系统标定", "智能感知算法验证"]
  }
];

const programs = [
  {
    title: "诚聘优秀博士后",
    audience: "诚聘优秀博士后",
    stipend: "年薪 36W+; 出站补贴 180W",
    requirements: [
      "博后招聘要求：具备微电子、物理、光学、计算机、人工智能、电子和材料等专业博士学位，35周岁以下，毕业不超过3年；",
      "有进取心、具有严谨科学态度且可以全职从事博士后研究工作的人员；",
      "毕业于211高校及中科院体系者优先；"
    ],
    directions: ["光谱编码薄膜及微结构研究", "光电探测器及光谱芯片研究", "微型光谱仪器及算法应用"],
    notes: "【博后待遇】\n1.在站两年，年薪不低于36万，额外叠加课题组补充津贴；\n2.应届毕业生可申领免税补贴10万元，全球前百强高校毕业生额外可申领5万元，国（境）外博士后再增加5万元生活补贴；\n3.出站留杭工作的，可申领免税补助40万，留杭高院可额外申领专项补助40万元；\n4.博士后出站可申请认定杭州市D类人才，申领购房补贴100万元；\n5.充足的研究生助手和科研经费；"
  },
  {
    title: "交流博士生项目",
    audience: "交流博士生项目",
    stipend: "津贴：2500-4500/月+奖励",
    requirements: [
      "客座博士要求：在读优秀博士生，已完成基础课程学习；",
      "征得校方及导师同意，来我院实习期不少于一年半;",
      "微电子，光学工程，电子信息，物理，材料，计算机，人工智能等专业;"
    ],
    directions: ["光谱编码薄膜及微结构研究", "光电探测器及光谱芯片研究", "微型光谱仪器及算法应用"],
    notes: "光学结构设计、算法、电路设计可远程\n1.每月提供助学金：2500-4500元/月；\n2.可报销往返交通费（实报实销）；\n3.充足的研究生助手和科研经费；\n4.部分科研成果以原单位为第一单位，原单位导师为通讯作者；"
  },
  {
    title: "优秀研究生(夏令营)招生",
    audience: "优秀研究生(夏令营)招生",
    stipend: "津贴：平均3K/月+奖励+绿色通道",
    requirements: [
      "微电子，光学工程，电子信息，物理，材料，计算机，人工智能等专业",
      "品学兼优，保研优先"
    ],
    directions: ["微电子与固体电子学（光谱芯片）", "光电工程（光谱仪器）", "人工智能（光谱算法）"],
    notes: "1.研究生平均每月3K+奖励；\n2.完善的培训体系，充足的科研经费；\n3.升学杭高院绿色护航通道；"
  },
  {
    title: "本科实习生项目",
    audience: "本科实习生项目",
    stipend: "待遇：1-2K/月+奖励+读研绿色通道",
    requirements: [
      "本科实习生要求：杭州市内重点高校（浙大、西湖、北航、浙工大、杭电、浙理工、计量等）大三在校学生；",
      "微电子、物理、光学、计算机、人工智能、电子和材料等专业，学习成绩优秀，读研意志坚定；",
      "积极主动，做事可靠，大三每周至少可实习两天，寒暑假可实习，三分钟热度勿扰。"
    ],
    directions: ["微电子与固体电子学（光谱芯片）", "光电工程（光谱仪器）", "人工智能（光谱算法）"],
    notes: "1.在校实习生助学金：1000元/月+奖励；\n2.毕业实习生助学金：2000元/月+奖励；\n3.在校生可报销往返交通费；\n4.完善的培训体系，充足的科研经费；\n5.升学杭高院绿色护航通道；"
  }
];

const supportItems = [
  ["稳定课题与经费支撑", "围绕光电探测、计算光谱、微纳光学和智能感知方向开展长期研究，相关课题具有持续项目基础。"],
  ["实验平台与测试条件", "可接触材料生长、器件制备、光电表征、光谱系统搭建和数据处理等科研环节。"],
  ["交叉训练路径", "根据学生基础匹配器件、系统、算法、应用等任务，鼓励逐步建立完整科研问题意识。"],
  ["科研写作与工具支持", "在文献整理、代码辅助、科研写作和实验记录等方面提供规范训练和必要工具支持。"],
  ["申请与发展支持", "表现优秀者可获得后续科研训练、组内交流和申请支持，具体以实际贡献和阶段表现为准。"],
  ["规范沟通与合作边界", "博士联合培养和交流申请需尊重原导师与培养单位，提前明确任务、署名、经费和成果归属。"]
];

const resources = [
  ["实验平台", [
    "光电芯片综合性能表征平台：傅里叶光谱仪、黑体响应测试、光电流显微成像、带宽测量、噪声测量等。",
    "光电材料平台：自主设计材料生长设备、半导体参数分析仪、光谱显微测试设备等。"
  ]],
  ["合作资源", [
    "与清华大学、浙江大学、西湖大学、中国科学院上海技术物理所等开展光电探测芯片等联合研究。",
    "与海康微影、与光科技、杭州高谱成像、启思（杭州）、杭州树芯科技等企业开展光电传感器等联合研究。"
  ]]
];

const achievements = [
  "代表论文包括 Advanced Functional Materials 2026：A High-Resolution Miniaturized Mid-Wave Infrared Spectrometer Operating at Room Temperature。",
  "Optics Letters 2026：Monolithic photon-trapping Si detector for high-efficiency ultra-broadband infrared detection。",
  "Optics Express 2024：Rapid in-situ Deviation Calibration of Computational Micro-spectrometer with Few-shot Meta-learning。",
  "Optics Express 2023：General-purpose mid-infrared micro-spectrometer based on hierarchical residual CNN and data augmentation。",
  "IEEE Transactions on Geoscience and Remote Sensing 2021：Radar HRRP Target Recognition Model Based on a Stacked CNN-Bi-RNN With Attention Mechanism。",
  "主持国家自然科学基金面上项目、青年项目、浙江省重点研发项目等；参与国家重点研发计划、国自然重大项目、核高基重大专项等。"
];

const outcomes = [
  ["盛渝淞", "2023 级硕士", "上海交通大学读博"],
  ["于忠洋", "2023 级硕士", "长江存储"],
  ["陈修腾", "2023 级硕士", "长江存储"],
  ["王茜", "2023 级硕士", "长鑫存储"],
  ["张璇", "2023 级硕士", "北京理工大学读博（计算机）"],
  ["杨美晨", "2021 级硕士", "成飞集团"],
  ["曾晨晨", "2021 级硕士", "上海技术物理研究所读博"],
  ["肖云龙", "2020 级硕士", "上海技术物理研究所读博"],
  ["刘婧", "2020 级硕士", "超聚变（华为服务器部门）"],
  ["赵志强", "2020 级硕士", "先临三维"],
  ["郝春慧", "2020 级硕士", "上海兴感半导体"],
  ["刘爱玲", "2017 级硕士", "字节跳动"]
];

const processItems = [
  ["01", "准备材料", "整理简历、成绩单、代表项目、代码或论文说明，以及拟申请方向。"],
  ["02", "邮件投递", "通过邮箱发送材料，并在邮件标题写明申请类型和姓名。"],
  ["03", "人工审核", "实验室结合研究方向、名额安排和材料质量进行人工判断。"],
  ["04", "后续沟通", "适合的申请人会收到进一步沟通、面谈或补充材料通知。"]
];

const faqItems = [
  ["没有光电背景可以申请吗？", "可以。物理、材料、电子信息、计算机、人工智能等背景均可尝试申请。建议在材料中说明已有基础，以及愿意补足的光学、器件或算法知识。"],
  ["本科实习需要满足什么条件？", "优先考虑能持续投入、有明确科研兴趣、每周能保证稳定时间的同学。短期参观交流也可以邮件咨询，但请说明时间安排。"],
  ["提交后多久会回复？", "实验室会根据方向匹配度和阶段安排集中查看材料，适合进一步沟通的申请人会通过邮箱联系。"],
  ["材料会如何使用？", "材料仅用于招生、科研交流初筛和后续联系。当前静态网页不收集、不上传、不保存个人材料。"],
  ["博士联合培养需要注意什么？", "需确保原导师和培养单位知情同意，并在交流前明确合作任务、经费安排、署名规则、知识产权和成果归属。"]
];

function $(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderResearch() {
  $("#research-grid").innerHTML = researchDirections.map((item, index) => `
    <article class="research-card" tabindex="0" data-index="${index}">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />
      <div>
        <span>0${index + 1}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.short)}</p>
        <button type="button">查看详细方向</button>
      </div>
    </article>
  `).join("");
}

function renderProgram(index = 0) {
  const program = programs[index];
  $("#program-detail").innerHTML = `
    <div class="program-detail-main">
      <span>${escapeHtml(program.audience)}</span>
      <h3>${escapeHtml(program.title)}</h3>
      <p class="program-stipend">${escapeHtml(program.stipend)}</p>
    </div>
    <div class="program-detail-grid">
      <div>
        <strong>适合人群</strong>
        <ul>${program.requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div>
        <strong>申请重点</strong>
        <ul>${program.directions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
    </div>
    <p class="program-note">${escapeHtml(program.notes)}</p>
  `;
  document.querySelectorAll("#program-tabs button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
    button.setAttribute("aria-selected", buttonIndex === index ? "true" : "false");
  });
}

function renderPrograms() {
  $("#program-tabs").innerHTML = programs.map((program, index) => `
    <button type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-index="${index}">
      <span>${escapeHtml(program.title)}</span>
      <strong>${escapeHtml(program.stipend)}</strong>
      <small>${escapeHtml(program.audience)}</small>
    </button>
  `).join("");
  $("#program-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) renderProgram(Number(button.dataset.index));
  });
  renderProgram(0);
}

function renderStaticSections() {
  $("#support-grid").innerHTML = supportItems.map(([title, body]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>`).join("");
  $("#resource-list").innerHTML = resources.map(([title, items]) => `
    <article><h3>${escapeHtml(title)}</h3><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>
  `).join("");
  $("#achievement-list").innerHTML = achievements.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#outcome-list").innerHTML = outcomes.map(([name, stage, destination]) => `
    <article><strong>${escapeHtml(name)}</strong><span>${escapeHtml(stage)}</span><p>${escapeHtml(destination)}</p></article>
  `).join("");
  $("#process-list").innerHTML = processItems.map(([index, title, body]) => `
    <article><span>${escapeHtml(index)}</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>
  `).join("");
  $("#faq-list").innerHTML = faqItems.map(([question, answer]) => `
    <details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>
  `).join("");
}

function openResearchModal(index) {
  const item = researchDirections[index];
  if (!item) return;
  $("#modal-image").src = item.image;
  $("#modal-image").alt = item.title;
  $("#modal-title").textContent = item.title;
  $("#modal-short").textContent = item.short;
  const tasks = item.tasks.length ? [`可能参与任务：${item.tasks.join("；")}`] : [];
  $("#modal-details").innerHTML = [...item.details, ...tasks].map((detail) => `<li>${escapeHtml(detail)}</li>`).join("");
  $("#research-modal").classList.add("active");
  $("#research-modal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeResearchModal() {
  $("#research-modal").classList.remove("active");
  $("#research-modal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initCanvas() {
  const canvas = $("#photonic-canvas");
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let raf = 0;
  const particles = Array.from({ length: 72 }, (_, index) => ({
    phase: index * 0.37,
    speed: 0.35 + (index % 7) * 0.035,
    lane: index % 9,
    size: 1.2 + (index % 4) * 0.55
  }));

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(86, 199, 222, 0.24)");
    gradient.addColorStop(0.5, "rgba(118, 232, 204, 0.12)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.05)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    for (let lane = 0; lane < 9; lane += 1) {
      const y = height * (0.2 + lane * 0.075);
      ctx.beginPath();
      for (let x = -20; x <= width + 20; x += 18) {
        const wave = Math.sin(x * 0.012 + t * 0.0012 + lane) * (14 + lane * 1.4);
        const curve = y + wave + Math.sin(t * 0.0008 + lane) * 18;
        if (x === -20) ctx.moveTo(x, curve);
        else ctx.lineTo(x, curve);
      }
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(170, 230, 242, 0.14)";
    for (let x = width * 0.56; x < width * 0.96; x += 34) {
      ctx.beginPath();
      ctx.moveTo(x, height * 0.16);
      ctx.lineTo(x - 120, height * 0.88);
      ctx.stroke();
    }
    particles.forEach((particle) => {
      const progress = (t * 0.00008 * particle.speed + particle.phase) % 1;
      const x = width * (0.08 + progress * 0.86);
      const baseY = height * (0.22 + particle.lane * 0.07);
      const y = baseY + Math.sin(progress * Math.PI * 5 + particle.phase) * 22;
      const pulse = 0.45 + Math.sin(t * 0.004 + particle.phase) * 0.25;
      ctx.beginPath();
      ctx.fillStyle = `rgba(151, 230, 244, ${pulse})`;
      ctx.arc(x, y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  raf = requestAnimationFrame(draw);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(draw);
  });
}

function bindEvents() {
  const navToggle = $(".nav-toggle");
  navToggle?.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    document.body.classList.toggle("nav-open", !expanded);
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
  $("#research-grid").addEventListener("click", (event) => {
    const card = event.target.closest(".research-card");
    if (card) openResearchModal(Number(card.dataset.index));
  });
  $("#research-grid").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".research-card");
    if (!card) return;
    event.preventDefault();
    openResearchModal(Number(card.dataset.index));
  });
  document.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", closeResearchModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeResearchModal();
  });
  $("#copy-email")?.addEventListener("click", async () => {
    await navigator.clipboard.writeText(EMAIL);
    $("#copy-email").textContent = "已复制";
    setTimeout(() => {
      $("#copy-email").textContent = "复制邮箱";
    }, 1400);
  });
}

renderResearch();
renderPrograms();
renderStaticSections();
bindEvents();
initCanvas();
