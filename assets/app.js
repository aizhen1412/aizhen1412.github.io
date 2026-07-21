const content = window.SITE_CONTENT;

function initTheme() {
  const saved = localStorage.getItem('writer-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  updateThemeIcon(theme);

  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('writer-theme', next);
      updateThemeIcon(next);
    });
  });
}

function updateThemeIcon(theme) {
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? '☀' : '☾';
    btn.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
  });
}

function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const check = () => header.classList.toggle('scrolled', window.scrollY > 12);
  check();
  window.addEventListener('scroll', check, { passive: true });
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(new Date(dateString));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  })[char]);
}

function renderBlocks(blocks) {
  return blocks.map(block => {
    const item = typeof block === 'string' ? { type: 'paragraph', text: block } : block;
    const text = escapeHtml(item.text);
    if (item.type === 'heading') return `<h2>${text}</h2>`;
    if (item.type === 'code') return `<pre><code>${text}</code></pre>`;
    return `<p>${text}</p>`;
  }).join('');
}

function essayCard(essay, index) {
  const coverStyle = essay.cover.startsWith('assets/')
    ? `background-image:url('${essay.cover}');background-size:cover;background-position:center;`
    : `background:${essay.cover}`;
  const coverClass = essay.cover.startsWith('assets/') ? ' image-cover' : '';
  return `
    <article class="essay-card">
      <a href="article.html?id=${essay.id}" aria-label="阅读《${essay.title}》">
        <div class="essay-cover${coverClass}" style="${coverStyle}">
          <span class="essay-index">${String(index + 1).padStart(2, '0')}</span>
        </div>
        <div class="essay-body">
          <div class="essay-meta"><span>${formatDate(essay.date)}</span><span>${essay.readingTime}</span></div>
          <h3>${essay.title}</h3>
          <p>${essay.excerpt}</p>
          <div class="tags">${essay.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        </div>
      </a>
    </article>`;
}

function renderHome() {
  const grid = document.querySelector('[data-essay-grid]');
  if (!grid) return;
  grid.innerHTML = content.essays.map(essayCard).join('');

  document.querySelector('[data-novel-title]').textContent = content.novel.title;
  document.querySelector('[data-novel-desc]').textContent = content.novel.description;
  document.querySelector('[data-novel-status]').textContent = content.novel.status;
  document.querySelector('[data-novel-words]').textContent = content.novel.wordCount;
  document.querySelector('[data-novel-updated]').textContent = `更新于 ${formatDate(content.novel.updated)}`;
  document.querySelector('[data-novel-card]').style.background = content.novel.cover;

  const search = document.querySelector('[data-search]');
  search?.addEventListener('input', e => {
    const keyword = e.target.value.trim().toLowerCase();
    const filtered = content.essays.filter(essay => {
      const haystack = [essay.title, essay.excerpt, ...essay.tags].join(' ').toLowerCase();
      return haystack.includes(keyword);
    });
    grid.innerHTML = filtered.length
      ? filtered.map((essay, index) => essayCard(essay, index)).join('')
      : '<div class="empty">没有找到匹配的文章。</div>';
  });
}

function renderArticle() {
  const root = document.querySelector('[data-article]');
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || content.essays[0].id;
  const essay = content.essays.find(item => item.id === id);

  if (!essay) {
    root.innerHTML = '<div class="reader-header"><h1 class="reader-title">文章不存在</h1><a class="button" href="index.html#essays">返回文章列表</a></div>';
    return;
  }

  document.title = essay.title;
  root.innerHTML = `
    <header class="reader-header">
      <div class="eyebrow">Essay</div>
      <h1 class="reader-title">${essay.title}</h1>
      <p class="reader-subtitle">${essay.excerpt}</p>
      <div class="reader-meta"><span>${formatDate(essay.date)}</span><span>${essay.readingTime}</span><span>${essay.tags.join(' · ')}</span></div>
    </header>
    <article class="reader-content">${renderBlocks(essay.content)}</article>
    <div class="reader-actions">
      <a class="button button-ghost" href="index.html#essays">← 返回文章列表</a>
      <a class="button" href="novel.html">阅读长篇小说 →</a>
    </div>`;
}

function renderNovel() {
  const nav = document.querySelector('[data-chapter-nav]');
  const main = document.querySelector('[data-chapter-main]');
  if (!nav || !main) return;

  const params = new URLSearchParams(location.search);
  const chapterNumber = Number(params.get('chapter')) || 1;
  const chapter = content.novel.chapters.find(item => item.number === chapterNumber) || content.novel.chapters[0];

  document.title = `${content.novel.title} · 第${chapter.number}章`;
  nav.innerHTML = content.novel.chapters.map(item => `
    <a class="chapter-link ${item.number === chapter.number ? 'active' : ''}" href="novel.html?chapter=${item.number}">
      ${String(item.number).padStart(2, '0')} · ${item.title}
    </a>`).join('');

  const currentIndex = content.novel.chapters.findIndex(item => item.number === chapter.number);
  const prev = content.novel.chapters[currentIndex - 1];
  const next = content.novel.chapters[currentIndex + 1];

  main.innerHTML = `
    <div class="reader-shell">
      <header class="reader-header">
        <div class="eyebrow">${content.novel.title}</div>
        <h1 class="reader-title">第${chapter.number}章<br>${chapter.title}</h1>
        <div class="reader-meta"><span>${content.novel.status}</span><span>${chapter.readingTime}</span><span>${content.novel.wordCount}</span><span>${formatDate(content.novel.updated)} 更新</span></div>
      </header>
      <article class="reader-content">${renderBlocks(chapter.content)}</article>
      <div class="reader-actions">
        ${prev ? `<a class="button button-ghost" href="novel.html?chapter=${prev.number}">← 上一章</a>` : '<a class="button button-ghost" href="index.html">← 返回首页</a>'}
        ${next ? `<a class="button" href="novel.html?chapter=${next.number}">下一章 →</a>` : '<a class="button" href="index.html#essays">阅读短文 →</a>'}
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeader();
  renderHome();
  renderArticle();
  renderNovel();
});
