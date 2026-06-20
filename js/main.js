const PROJECTS = [
  {
    featured: true,
    icon: '🔐',
    title: 'Acess Control',
    description:
      'Sistema SaaS multi-tenant de controle de acesso físico para condomínios, empresas e revendas. Gerencia pessoas, visitantes, veículos, equipamentos biométricos, regras de acesso, estacionamento e relatórios operacionais.',
    tags: ['Node.js', 'Express', 'SQLite', 'JWT', 'Swagger', 'PWA'],
    github: 'https://github.com/Virtus123/Acess-Control',
    demo: null,
    demoNote: 'Backend self-hosted',
  },
  {
    featured: true,
    icon: '🖥️',
    title: 'MAMDesk',
    description:
      'Plataforma de suporte remoto estilo AnyDesk com clientes Windows (.NET 8) e servidor centralizado self-hosted. Login JWT, compartilhamento de tela, controle remoto e chat em sessão.',
    tags: ['C#', '.NET 8', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket'],
    github: 'https://github.com/Virtus123/MAMDeskOpenSource',
    demo: null,
  },
  {
    icon: '📚',
    title: 'Plataforma Educacional',
    description:
      'Plataforma educacional interativa com quizzes, níveis de dificuldade, autenticação de usuários e integração com IA. Backend REST completo com SQLite.',
    tags: ['Node.js', 'Express', 'SQLite', 'REST API'],
    github: 'https://github.com/Virtus123/back-end-plataforma-educacional',
    demo: 'https://virtus123.github.io/back-end-plataforma-educacional/',
  },
  {
    icon: '📡',
    title: 'Leitor Px40',
    description:
      'Driver Windows em Python que lê dados seriais de leitor RFID/Arduino e injeta como entrada de teclado. Roda na bandeja do sistema com detecção automática de porta.',
    tags: ['Python', 'PySerial', 'PyStray', 'Hardware'],
    github: 'https://github.com/Virtus123/LeitorPx40',
    demo: null,
  },
  {
    icon: '✨',
    title: 'Ruah',
    description:
      'Assistente web de orientação espiritual com chat interativo, versículos bíblicos e respostas geradas por inteligência artificial via Google Gemini.',
    tags: ['Node.js', 'Express', 'Google Gemini', 'IA'],
    github: 'https://github.com/Virtus123/Ruah',
    demo: 'https://virtus123.github.io/Ruah/',
  },
  {
    icon: '🌱',
    title: 'Descomplicando o Agro',
    description:
      'Site educativo sobre práticas agrícolas sustentáveis — projeto desenvolvido para a Olimpíada Agrinho de programação.',
    tags: ['HTML5', 'CSS3', 'Responsivo'],
    github: 'https://github.com/Virtus123/Descomplicando-O-Agro',
    demo: 'https://virtus123.github.io/Descomplicando-O-Agro/',
  },
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => {
    const featuredClass = p.featured ? ' project-card--featured' : '';
    const tagsHtml = p.tags.map((t) => `<span>${t}</span>`).join('');
    const demoLink = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="demo">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
           Demo
         </a>`
      : '';

    const visualBlock = p.featured
      ? `<div class="project-card__visual" aria-hidden="true">${p.icon}</div>`
      : '';

    return `
      <article class="project-card${featuredClass} reveal">
        <div>
          ${p.featured ? '<span class="project-card__badge">Destaque</span>' : ''}
          <div class="project-card__header">
            <div>
              ${!p.featured ? `<div class="project-card__icon">${p.icon}</div>` : ''}
              <h3>${p.title}</h3>
            </div>
          </div>
          <p>${p.description}</p>
          <div class="tags">${tagsHtml}</div>
          <div class="project-card__links">
            <a href="${p.github}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              Código
            </a>
            ${demoLink}
          </div>
        </div>
        ${visualBlock}
      </article>
    `;
  }).join('');

  observeReveal(grid.querySelectorAll('.reveal'));
}

function observeReveal(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent(`Contato via Portfólio — ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`);
    window.location.href = `mailto:vitorfernandes.y02@gmail.com?subject=${subject}&body=${body}`;
  });
}

function initScrollReveal() {
  observeReveal(document.querySelectorAll('.reveal:not(.project-card)'));
}

document.getElementById('year').textContent = new Date().getFullYear();

renderProjects();
initNav();
initContactForm();
initScrollReveal();
