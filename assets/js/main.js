document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProjectFilters();
  initProjectModal();
  initContactTerminal();
  initCvModal();
  initPhoneMockupInteractions();
});

function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopLinks = document.querySelectorAll('.desktop-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        updateActiveNav(activeId);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  function updateActiveNav(activeId) {
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === activeId) {
        link.classList.remove('text-on-surface-variant');
        link.classList.add('bg-surface-container-high', 'text-on-surface', 'font-semibold');
      } else {
        link.classList.remove('bg-surface-container-high', 'text-on-surface', 'font-semibold');
        link.classList.add('text-on-surface-variant');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === activeId) {
        link.classList.add('text-secondary', 'font-semibold', 'bg-surface-container');
        link.classList.remove('text-on-surface-variant');
      } else {
        link.classList.remove('text-secondary', 'font-semibold', 'bg-surface-container');
        link.classList.add('text-on-surface-variant');
      }
    });
  }
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('text-on-surface-variant');
      });
      btn.classList.remove('text-on-surface-variant');
      btn.classList.add('bg-primary', 'text-on-primary');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

const projectData = {
  codeinko: {
    title: 'CodeIn Course Platform',
    category: 'Web Learning LMS',
    image: 'assets/images/project_codeinko.png',
    status: 'Production Ready',
    description: 'Platform kursus daring interaktif dengan katalog materi video, sistem checkout sertifikasi berstandar industri, progress tracker penyelesaian modul, dan web code sandbox terintegrasi.',
    features: [
      'Interactive Video Player & Timestamp Bookmarks',
      'Verifikasi E-Sertifikat dengan QR Code Unik',
      'Real-time Progress Tracker & Student Quizzes',
      'Responsive Web Editor & Code Syntax Highlight'
    ],
    tech: ['React / Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker']
  },
  evacollection: {
    title: 'Eva Collection',
    category: 'Fashion E-Commerce',
    image: 'assets/images/project_evacollection.png',
    status: 'Live Storefront',
    description: 'Portal etalase busana online stylish yang menghadirkan pengalaman berbelanja mulus, filtering kategori dinamis, manajemen keranjang cerdas, dan integrasi payment gateway otomatis.',
    features: [
      'Multi-Variant Product Selection (Size & Color)',
      'Instant Cart Syncing & Guest Checkout Option',
      'Automated Midtrans Snap Payment Gateway',
      'Admin Inventory & Sales Analytics Dashboard'
    ],
    tech: ['Web E-Commerce', 'PHP Laravel', 'Midtrans Gateway', 'Tailwind CSS', 'MySQL']
  },
  evapos: {
    title: 'Eva POS & ERP Dashboard',
    category: 'Point of Sale & ERP',
    image: 'assets/images/project_evapos.png',
    status: 'Enterprise Deploy',
    description: 'Sistem Point of Sale kasir dan ERP inventaris komprehensif. Menghitung mutasi stok, rekonsiliasi kasir harian per shift, grafik pendapatan real-time, serta multi-cabang terpusat.',
    features: [
      'Kasir Cepat dengan Dukungan Barcode Scanner & Thermal Printer',
      'Laporan Laba Rugi & Neraca Penjualan Otomatis',
      'Manajemen Piutang Pelanggan & Hutang Supplier',
      'Multi-User Roles & Permissions Berjenjang'
    ],
    tech: ['Laravel 11', 'Vue.js', 'Chart.js', 'MySQL', 'REST API']
  },
  webtopup: {
    title: 'WebTopup Game Online',
    category: 'High-Traffic Engine',
    image: 'assets/images/project_webtopup.png',
    status: '24/7 Auto-Dispatch',
    description: 'Layanan voucher dan diamond game online instan untuk Mobile Legends, Free Fire, PUBG Mobile, Genshin Impact, dan pulsa/PPOB dengan verifikasi User ID otomatis dan penyelesaian pesanan dalam hitungan detik.',
    features: [
      'Pemeriksaan Nickname & Server ID Game Otomatis',
      'Integrasi Multi-Payment (QRIS, E-Wallet, VA Bank)',
      'Queue Worker Redis untuk Eksekusi Order < 10 Detik',
      'Web & Mobile App Cross-Platform Architecture'
    ],
    tech: ['Flutter Web / Mobile', 'Tripay / Midtrans', 'Redis Queue', 'Node.js', 'PostgreSQL']
  }
};

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  const modalCloseBtn = document.getElementById('project-modal-close');
  const openTriggers = document.querySelectorAll('[data-project-trigger]');

  if (!modal) return;

  openTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project-trigger');
      const data = projectData[projectId];
      if (!data) return;

      renderProjectModal(data);
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  function renderProjectModal(item) {
    if (!modalContent) return;

    modalContent.innerHTML = `
      <div class="relative w-full rounded-2xl overflow-hidden bg-surface-container border border-white/10 shadow-2xl max-h-[90vh] flex flex-col">
        <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-surface-container-low">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded bg-surface-container font-label-mono text-label-badge text-secondary">${item.category}</span>
            <span class="px-2.5 py-1 rounded bg-surface-container font-label-mono text-label-badge text-primary">${item.status}</span>
          </div>
          <button id="modal-inner-close" class="text-on-surface-variant hover:text-on-surface transition-colors p-1.5 rounded-lg hover:bg-surface-container-high">
            <span class="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <div class="overflow-y-auto p-6 space-y-6">
          <div class="rounded-xl overflow-hidden border border-white/10 bg-surface-container-lowest max-h-80 flex items-center justify-center">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-contain max-h-80 hover:scale-105 transition-transform duration-500" />
          </div>

          <div>
            <h3 class="font-headline-lg text-headline-lg text-on-surface font-bold mb-2">${item.title}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">${item.description}</p>
          </div>

          <div class="p-4 rounded-xl bg-surface-container-lowest/80 border border-white/5 space-y-3">
            <h4 class="font-headline-sm text-sm font-semibold text-secondary uppercase tracking-wider font-label-mono">Fitur Utama & Keunggulan Arsitektur:</h4>
            <ul class="space-y-2">
              ${item.features.map(f => `
                <li class="flex items-center gap-2.5 font-body-sm text-body-sm text-on-surface">
                  <span class="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 class="font-headline-sm text-sm font-semibold text-on-surface-variant mb-2 font-label-mono">Teknologi yang Digunakan:</h4>
            <div class="flex flex-wrap gap-2">
              ${item.tech.map(t => `
                <span class="px-3 py-1 rounded-md font-label-mono text-label-mono bg-surface-container-high text-primary border border-white/5">
                  ${t}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('modal-inner-close')?.addEventListener('click', closeModal);
  }
}

function initPhoneMockupInteractions() {
  const toggleBtn = document.getElementById('phone-demo-action');
  const demoStatus = document.getElementById('phone-status-pill');
  const miniList = document.getElementById('phone-mini-list');

  if (!toggleBtn || !demoStatus || !miniList) return;

  let state = 0;
  const states = [
    { title: 'Topup Free Fire #8892', status: 'Pending', color: 'text-tertiary', icon: 'hourglass_top' },
    { title: 'POS Order #1042', status: 'Syncing', color: 'text-primary', icon: 'sync' },
    { title: 'Topup MLBB #7719', status: 'Berhasil', color: 'text-secondary', icon: 'check_circle' }
  ];

  toggleBtn.addEventListener('click', () => {
    state = (state + 1) % states.length;
    const current = states[state];

    toggleBtn.classList.add('scale-95');
    setTimeout(() => toggleBtn.classList.remove('scale-95'), 150);

    const newItem = document.createElement('div');
    newItem.className = 'flex items-center justify-between p-2 rounded bg-surface-container text-xs animate-fadeIn';
    newItem.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined ${current.color} text-[16px]">${current.icon}</span>
        <span class="font-label-mono text-label-badge text-on-surface">${current.title}</span>
      </div>
      <span class="font-label-badge text-label-badge ${current.color}">${current.status}</span>
    `;

    if (miniList.children.length >= 3) {
      miniList.removeChild(miniList.lastElementChild);
    }
    miniList.prepend(newItem);
  });
}

function initContactTerminal() {
  const form = document.getElementById('portfolio-contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!form || !feedback || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
      <span>Mengirimkan payload...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      feedback.classList.remove('hidden');

      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      form.reset();

      setTimeout(() => {
        feedback.classList.add('hidden');
      }, 7000);
    }, 1200);
  });
}

function initCvModal() {
  const cvButtons = document.querySelectorAll('[data-action="unduh-cv"]');
  const cvModal = document.getElementById('cv-modal');
  const cvClose = document.getElementById('cv-modal-close');
  const printBtn = document.getElementById('cv-print-btn');

  if (!cvModal) return;

  cvButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cvModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeCv() {
    cvModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (cvClose) cvClose.addEventListener('click', closeCv);
  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) closeCv();
  });
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
