/**
 * IYAL STUDIOS | 3D & Game Art Career Directory Application
 * Core Interactive Logic, Mobile State Controller & Responsive Engine
 */

(function () {
  'use strict';

  // Application State
  const state = {
    activeSoftware: 'all',
    searchQuery: '',
    selectedIndustry: 'all',
    selectedHub: 'all',
    sortBy: 'default',
    activeView: 'cards', // 'cards' | 'table' | 'analytics' | 'roadmaps' | 'compare'
    bookmarks: new Set(JSON.parse(localStorage.getItem('iyal_bookmarks') || localStorage.getItem('nexus3d_bookmarks') || '[]')),
    compareList: new Set(JSON.parse(localStorage.getItem('iyal_compare') || localStorage.getItem('nexus3d_compare') || '[]')),
    wizardStep: 1,
    wizardAnswers: {}
  };

  // DOM Elements Cache
  const DOM = {
    rolesGrid: document.getElementById('rolesGrid'),
    matrixTableBody: document.getElementById('matrixTableBody'),
    rolesCountDisplay: document.getElementById('rolesCountDisplay'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    industryFilter: document.getElementById('industryFilter'),
    hubFilter: document.getElementById('hubFilter'),
    sortSelect: document.getElementById('sortSelect'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    softwareStrip: document.getElementById('softwareStrip'),
    activeFilterChips: document.getElementById('activeFilterChips'),
    navTabs: document.querySelectorAll('.nav-tab-btn'),
    mobileNavItems: document.querySelectorAll('.mobile-nav-item'),
    viewToggles: document.querySelectorAll('.btn-view-toggle'),
    views: {
      cards: document.getElementById('viewCards'),
      table: document.getElementById('viewTable'),
      analytics: document.getElementById('viewAnalytics'),
      roadmaps: document.getElementById('viewRoadmaps'),
      compare: document.getElementById('viewCompare')
    },
    bookmarkCountBadge: document.getElementById('bookmarkCountBadge'),
    compareCountBadge: document.getElementById('compareCountBadge'),
    mobileSavedBadge: document.getElementById('mobileSavedBadge'),
    mobileFilterIndicator: document.getElementById('mobileFilterIndicator'),
    roleModal: document.getElementById('roleModal'),
    roleModalContent: document.getElementById('roleModalContent'),
    bookmarksModal: document.getElementById('bookmarksModal'),
    bookmarksModalContent: document.getElementById('bookmarksModalContent'),
    wizardModal: document.getElementById('wizardModal'),
    wizardModalContent: document.getElementById('wizardModalContent'),
    mobileFilterModal: document.getElementById('mobileFilterModal'),
    mobileSwSelect: document.getElementById('mobileSwSelect'),
    mobileIndSelect: document.getElementById('mobileIndSelect'),
    mobileHubSelect: document.getElementById('mobileHubSelect'),
    mobileSortSelect: document.getElementById('mobileSortSelect'),
    toastContainer: document.getElementById('toastContainer'),
    themeToggleBtn: document.getElementById('themeToggleBtn')
  };

  /**
   * Initialize Application
   */
  function init() {
    initTheme();
    renderSoftwareFilterStrip();
    populateDropdowns();
    renderAnalytics();
    renderRoadmaps();
    updateBadges();
    applyFilters();
    bindEvents();
  }

  /**
   * Theme Support
   */
  function initTheme() {
    const savedTheme = localStorage.getItem('iyal_theme') || localStorage.getItem('nexus3d_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('iyal_theme', next);
    showToast(`Switched to ${next} theme mode`, 'info');
  }

  /**
   * Render Top Software Filter Strip (Swipeable on Mobile)
   */
  function renderSoftwareFilterStrip() {
    if (!DOM.softwareStrip) return;

    let html = `
      <button class="software-filter-pill ${state.activeSoftware === 'all' ? 'active' : ''}" data-sw="all">
        <span>All Software</span>
        <span class="sw-count">44 Roles</span>
      </button>
    `;

    Object.values(SOFTWARE_METADATA).forEach(sw => {
      const isActive = state.activeSoftware === sw.id;
      html += `
        <button class="software-filter-pill ${isActive ? 'active' : ''}" data-sw="${sw.id}">
          <span class="sw-dot" style="background: ${sw.color}; box-shadow: 0 0 8px ${sw.color};"></span>
          <span>${sw.shortName}</span>
          <span class="sw-count">${sw.roleCount}</span>
        </button>
      `;
    });

    DOM.softwareStrip.innerHTML = html;

    // Attach click listeners
    DOM.softwareStrip.querySelectorAll('.software-filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const sw = btn.getAttribute('data-sw');
        setSoftwareFilter(sw);
      });
    });
  }

  /**
   * Populate Industry & Hub Dropdowns Dynamically
   */
  function populateDropdowns() {
    // Extract unique industries
    const industrySet = new Set();
    ROLES_DATA.forEach(r => {
      const parts = r.industry.split(',').map(s => s.trim());
      parts.forEach(p => industrySet.add(p));
    });

    const sortedIndustries = Array.from(industrySet).sort();

    // Populate Desktop & Mobile Industry Dropdowns
    sortedIndustries.forEach(ind => {
      if (DOM.industryFilter) {
        const opt = document.createElement('option');
        opt.value = ind;
        opt.textContent = ind;
        DOM.industryFilter.appendChild(opt);
      }
      if (DOM.mobileIndSelect) {
        const opt2 = document.createElement('option');
        opt2.value = ind;
        opt2.textContent = ind;
        DOM.mobileIndSelect.appendChild(opt2);
      }
    });

    // Top Production Hubs
    const hubs = [
      "Bengaluru",
      "Mumbai",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Delhi NCR",
      "Gurugram",
      "Remote"
    ];

    hubs.forEach(h => {
      if (DOM.hubFilter) {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h;
        DOM.hubFilter.appendChild(opt);
      }
      if (DOM.mobileHubSelect) {
        const opt2 = document.createElement('option');
        opt2.value = h;
        opt2.textContent = h;
        DOM.mobileHubSelect.appendChild(opt2);
      }
    });
  }

  /**
   * Filter and Sort Roles based on State
   */
  function getFilteredRoles() {
    return ROLES_DATA.filter(role => {
      // Software Suite Filter
      if (state.activeSoftware !== 'all' && role.softwareKey !== state.activeSoftware) {
        return false;
      }

      // Industry Filter
      if (state.selectedIndustry !== 'all') {
        const indLower = role.industry.toLowerCase();
        if (!indLower.includes(state.selectedIndustry.toLowerCase())) {
          return false;
        }
      }

      // Hub Filter
      if (state.selectedHub !== 'all') {
        const hubQuery = state.selectedHub.toLowerCase();
        const matchesHub = role.hubs.some(h => h.toLowerCase().includes(hubQuery));
        if (!matchesHub) return false;
      }

      // Search Query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const inId = role.id.toLowerCase().includes(q);
        const inTitle = role.title.toLowerCase().includes(q);
        const inSoftware = role.software.toLowerCase().includes(q);
        const inIndustry = role.industry.toLowerCase().includes(q);
        const inResp = role.responsibilities.toLowerCase().includes(q);
        const inTools = role.companionTools.some(t => t.toLowerCase().includes(q));
        const inHubs = role.hubs.some(h => h.toLowerCase().includes(q));

        if (!inId && !inTitle && !inSoftware && !inIndustry && !inResp && !inTools && !inHubs) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      switch (state.sortBy) {
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'demand-desc':
          const demandRank = { 'Explosive': 4, 'Very High': 3, 'High': 2, 'Moderate': 1 };
          return (demandRank[b.demandLevel] || 0) - (demandRank[a.demandLevel] || 0);
        case 'software':
          return a.software.localeCompare(b.software);
        case 'id-asc':
        default:
          return a.id.localeCompare(b.id, undefined, { numeric: true });
      }
    });
  }

  /**
   * Apply Filter Pipeline and Re-render Views
   */
  function applyFilters() {
    const filtered = getFilteredRoles();

    // Update Counter Display
    if (DOM.rolesCountDisplay) {
      DOM.rolesCountDisplay.innerHTML = `Showing <span>${filtered.length}</span> of <span>${ROLES_DATA.length}</span> roles`;
    }

    // Check if any filter is active for mobile indicator
    const hasActiveFilters = state.activeSoftware !== 'all' || state.selectedIndustry !== 'all' || state.selectedHub !== 'all' || state.sortBy !== 'default';
    if (DOM.mobileFilterIndicator) {
      DOM.mobileFilterIndicator.style.display = hasActiveFilters ? 'inline-block' : 'none';
    }

    renderActiveFilterChips();
    renderCardsView(filtered);
    renderTableView(filtered);
    renderComparisonView();

    // Show/hide search clear button
    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.style.display = state.searchQuery ? 'flex' : 'none';
    }
  }

  /**
   * Render Active Filter Chips Row
   */
  function renderActiveFilterChips() {
    if (!DOM.activeFilterChips) return;

    let chips = [];

    if (state.activeSoftware !== 'all') {
      const swMeta = SOFTWARE_METADATA[state.activeSoftware];
      chips.push({
        label: `Software: ${swMeta ? swMeta.shortName : state.activeSoftware}`,
        onClear: () => setSoftwareFilter('all')
      });
    }

    if (state.selectedIndustry !== 'all') {
      chips.push({
        label: `Industry: ${state.selectedIndustry}`,
        onClear: () => {
          state.selectedIndustry = 'all';
          if (DOM.industryFilter) DOM.industryFilter.value = 'all';
          if (DOM.mobileIndSelect) DOM.mobileIndSelect.value = 'all';
          applyFilters();
        }
      });
    }

    if (state.selectedHub !== 'all') {
      chips.push({
        label: `Hub: ${state.selectedHub}`,
        onClear: () => {
          state.selectedHub = 'all';
          if (DOM.hubFilter) DOM.hubFilter.value = 'all';
          if (DOM.mobileHubSelect) DOM.mobileHubSelect.value = 'all';
          applyFilters();
        }
      });
    }

    if (state.searchQuery) {
      chips.push({
        label: `Search: "${state.searchQuery}"`,
        onClear: () => {
          state.searchQuery = '';
          DOM.searchInput.value = '';
          applyFilters();
        }
      });
    }

    if (chips.length === 0) {
      DOM.activeFilterChips.innerHTML = '';
      return;
    }

    DOM.activeFilterChips.innerHTML = chips.map((chip, idx) => `
      <span class="filter-chip">
        ${chip.label}
        <button data-chip-idx="${idx}" title="Remove filter">
          <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </span>
    `).join('');

    DOM.activeFilterChips.querySelectorAll('button').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        chips[idx].onClear();
      });
    });
  }

  /**
   * Render Role Cards Grid (View 1) - Touch-Optimized for Mobile
   */
  function renderCardsView(roles) {
    if (!DOM.rolesGrid) return;

    if (roles.length === 0) {
      DOM.rolesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.25rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
          <svg viewBox="0 0 24 24" width="44" height="44" stroke="var(--text-dim)" stroke-width="1.5" fill="none" style="margin-bottom: 0.85rem;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">No matching roles found</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 440px; margin: 0 auto 1.25rem;">Try clearing current filters to discover more career paths at IYAL STUDIOS.</p>
          <button class="btn-primary-action" id="emptyResetBtn" style="margin: 0 auto;">Reset All Filters</button>
        </div>
      `;
      const btn = document.getElementById('emptyResetBtn');
      if (btn) btn.addEventListener('click', resetAllFilters);
      return;
    }

    DOM.rolesGrid.innerHTML = roles.map(role => {
      const sw = SOFTWARE_METADATA[role.softwareKey] || {};
      const isBookmarked = state.bookmarks.has(role.id);
      const isCompared = state.compareList.has(role.id);

      const companionToolTags = role.companionTools.map(tool => `
        <span class="tool-tag" onclick="window.IyalStudios.filterByTool('${escapeQuotes(tool)}')">${tool}</span>
      `).join('');

      return `
        <article class="role-card" style="--accent-color: ${sw.color}; --accent-glow: ${sw.accentGlow};" data-role-id="${role.id}">
          <div class="role-card-accent-bar"></div>
          
          <div>
            <div class="role-card-header">
              <span class="role-id-badge">${role.id}</span>
              <span class="role-sw-badge ${sw.badgeClass}">
                ${sw.shortName}
              </span>
            </div>

            <h3 class="role-title">${role.title}</h3>
            
            <div class="role-industry">
              <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>${role.industry}</span>
            </div>

            <p class="role-resp">${role.responsibilities}</p>

            <div class="role-tools-section">
              <div class="section-micro-label">Companion Software & Tools</div>
              <div class="tools-chips-list">
                ${companionToolTags}
              </div>
            </div>

            <div class="role-hubs-section">
              <div class="section-micro-label">Top Hiring Hubs</div>
              <div class="hubs-text">
                <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${role.hubs.join(', ')}</span>
              </div>
            </div>
          </div>

          <div class="role-card-footer">
            <button class="btn-card-details" onclick="window.IyalStudios.openRoleModal('${role.id}')">
              <span>View Blueprint</span>
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            
            <button class="btn-card-action-icon ${isCompared ? 'active-compare' : ''}" 
                    title="${isCompared ? 'Remove from Compare' : 'Add to Compare'}"
                    onclick="window.IyalStudios.toggleCompare('${role.id}')">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
            </button>

            <button class="btn-card-action-icon ${isBookmarked ? 'active-bookmark' : ''}" 
                    title="${isBookmarked ? 'Remove Bookmark' : 'Save to Shortlist'}"
                    onclick="window.IyalStudios.toggleBookmark('${role.id}')">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="${isBookmarked ? 'currentColor' : 'none'}"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  /**
   * Render Master Spreadsheet Matrix Table (View 2)
   */
  function renderTableView(roles) {
    if (!DOM.matrixTableBody) return;

    if (roles.length === 0) {
      DOM.matrixTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--text-dim);">No matching records found.</td>
        </tr>
      `;
      return;
    }

    DOM.matrixTableBody.innerHTML = roles.map(role => {
      const sw = SOFTWARE_METADATA[role.softwareKey] || {};

      return `
        <tr>
          <td class="col-id">${role.id}</td>
          <td>
            <span class="role-sw-badge ${sw.badgeClass}" style="font-size: 0.68rem; padding: 2px 7px;">
              ${sw.shortName}
            </span>
          </td>
          <td class="col-role">
            <a href="javascript:void(0)" onclick="window.IyalStudios.openRoleModal('${role.id}')" style="color: var(--text-highlight); text-decoration: none; border-bottom: 1px dotted var(--border-medium);">
              ${role.title}
            </a>
          </td>
          <td class="col-industry">${role.industry}</td>
          <td class="col-resp">${role.responsibilities}</td>
          <td>
            <div style="display: flex; flex-wrap: wrap; gap: 4px; max-width: 240px;">
              ${role.companionTools.map(t => `<span class="tool-tag" style="font-size: 0.65rem; padding: 1px 5px;" onclick="window.IyalStudios.filterByTool('${escapeQuotes(t)}')">${t}</span>`).join('')}
            </div>
          </td>
          <td style="font-size: 0.78rem; color: var(--text-dim); max-width: 190px;">
            ${role.hubs.join(', ')}
          </td>
        </tr>
      `;
    }).join('');
  }

  /**
   * Render Ecosystem Analytics (View 3)
   */
  function renderAnalytics() {
    const swContainer = document.getElementById('analyticsSoftwareBars');
    const hubsContainer = document.getElementById('analyticsHubsList');
    const toolsContainer = document.getElementById('analyticsToolsGrid');

    if (swContainer) {
      swContainer.innerHTML = Object.values(SOFTWARE_METADATA).map(sw => `
        <div class="software-share-item">
          <div class="share-meta">
            <span class="share-sw-name" style="color: ${sw.color};">${sw.name}</span>
            <span class="share-percentage">${sw.roleCount} Roles • ${sw.sharePercent}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${sw.sharePercent}%; background: ${sw.color}; box-shadow: 0 0 10px ${sw.color};"></div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 4px;">
            ${sw.focus}
          </div>
        </div>
      `).join('');
    }

    if (hubsContainer) {
      hubsContainer.innerHTML = ECOSYSTEM_STATS.topHubs.map((hub, idx) => `
        <div class="hub-rank-row" onclick="window.IyalStudios.filterByHub('${hub.name}')" style="cursor: pointer;">
          <div class="hub-rank-left">
            <span class="hub-index">#${idx + 1}</span>
            <div>
              <div class="hub-name">${hub.name}</div>
              <div class="hub-note">${hub.note}</div>
            </div>
          </div>
          <span class="hub-count-badge">${hub.count} Roles Active</span>
        </div>
      `).join('');
    }

    if (toolsContainer) {
      toolsContainer.innerHTML = ECOSYSTEM_STATS.popularCompanionTools.map(tool => `
        <div class="synergy-tool-box" onclick="window.IyalStudios.filterByTool('${escapeQuotes(tool.name)}')" style="cursor: pointer;">
          <div class="synergy-tool-count">${tool.count}</div>
          <div class="synergy-tool-name">${tool.name}</div>
        </div>
      `).join('');
    }
  }

  /**
   * Render Career Pathways & Roadmaps (View 4)
   */
  function renderRoadmaps() {
    const container = document.getElementById('pipelinesContainer');
    if (!container) return;

    container.innerHTML = ECOSYSTEM_STATS.pipelines.map(pipe => `
      <section class="pipeline-card">
        <div class="pipeline-header">
          <div class="pipeline-tag">Studio Pipeline Blueprint</div>
          <h3 class="pipeline-title">${pipe.title}</h3>
          <p class="pipeline-desc">${pipe.description}</p>
        </div>

        <div class="pipeline-steps-flow">
          ${pipe.steps.map((st, i) => `
            <div class="step-card">
              <span class="step-number">PHASE 0${i + 1}</span>
              <div class="step-phase">${st.phase}</div>
              <div class="step-role">${st.role}</div>
              <div class="step-sw">${st.software}</div>
            </div>
          `).join('')}
        </div>
      </section>
    `).join('');
  }

  /**
   * Render Role Comparison Tray (View 5)
   */
  function renderComparisonView() {
    const container = document.getElementById('comparisonContainer');
    if (!container) return;

    const list = Array.from(state.compareList);

    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3.5rem 1.25rem;">
          <svg viewBox="0 0 24 24" width="44" height="44" stroke="var(--text-dim)" stroke-width="1.5" fill="none" style="margin-bottom: 0.85rem;"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">No roles selected for comparison</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 440px; margin: 0 auto 1.25rem;">Tap the compare icon on any role card to compare up to 3 roles side-by-side.</p>
          <button class="btn-primary-action" onclick="window.IyalStudios.switchView('cards')" style="margin: 0 auto;">Browse All Roles</button>
        </div>
      `;
      return;
    }

    const comparedRoles = list.map(id => ROLES_DATA.find(r => r.id === id)).filter(Boolean);

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <h3 style="font-size: 1.2rem;">Side-by-Side Role Matrix</h3>
          <p style="color: var(--text-muted); font-size: 0.82rem;">Comparing ${comparedRoles.length} of 3 maximum roles</p>
        </div>
        <button class="btn-reset-filters" onclick="window.IyalStudios.clearCompare()">Clear Comparison</button>
      </div>

      <div class="comparison-grid">
        ${comparedRoles.map(role => {
          const sw = SOFTWARE_METADATA[role.softwareKey] || {};
          return `
            <div class="compare-column" style="border-top: 3px solid ${sw.color};">
              <button class="compare-remove-btn" onclick="window.IyalStudios.toggleCompare('${role.id}')" title="Remove role">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <span class="role-id-badge" style="width: fit-content; margin-bottom: 0.4rem;">${role.id}</span>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;">${role.title}</h4>
              <span class="role-sw-badge ${sw.badgeClass}" style="width: fit-content; margin-bottom: 1.1rem;">${sw.name}</span>

              <div class="compare-metric-block">
                <div class="compare-metric-title">Primary Industry</div>
                <div class="compare-metric-val" style="color: #38bdf8;">${role.industry}</div>
              </div>

              <div class="compare-metric-block">
                <div class="compare-metric-title">Core Responsibilities</div>
                <div class="compare-metric-val">${role.responsibilities}</div>
              </div>

              <div class="compare-metric-block">
                <div class="compare-metric-title">Companion Software</div>
                <div class="tools-chips-list">
                  ${role.companionTools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
                </div>
              </div>

              <div class="compare-metric-block">
                <div class="compare-metric-title">High-Demand Hubs</div>
                <div class="compare-metric-val" style="font-size: 0.8rem; color: var(--text-dim);">${role.hubs.join(', ')}</div>
              </div>

              <div class="compare-metric-block">
                <div class="compare-metric-title">Demand Rating</div>
                <div class="compare-metric-val" style="color: #22c55e; font-weight: 700;">${role.demandLevel}</div>
              </div>

              <button class="btn-primary-action" style="margin-top: auto;" onclick="window.IyalStudios.openRoleModal('${role.id}')">
                Open Blueprint
              </button>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  /**
   * Open Detailed Role Modal (Blueprint)
   */
  function openRoleModal(roleId) {
    const role = ROLES_DATA.find(r => r.id === roleId);
    if (!role || !DOM.roleModal || !DOM.roleModalContent) return;

    const sw = SOFTWARE_METADATA[role.softwareKey] || {};
    const isBookmarked = state.bookmarks.has(role.id);

    DOM.roleModalContent.innerHTML = `
      <div class="modal-header">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
            <span class="role-id-badge" style="font-size: 0.8rem;">${role.id}</span>
            <span class="role-sw-badge ${sw.badgeClass}">${sw.name}</span>
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: #22c55e; background: rgba(34, 197, 94, 0.1); padding: 2px 7px; border-radius: var(--radius-full); border: 1px solid rgba(34, 197, 94, 0.25);">
              ● ${role.demandLevel} Demand
            </span>
          </div>
          <h2 style="font-size: 1.45rem;">${role.title}</h2>
          <div style="color: #38bdf8; font-size: 0.85rem; margin-top: 0.2rem;">${role.industry}</div>
        </div>
        <button class="modal-close-btn" onclick="window.IyalStudios.closeModal('roleModal')">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="modal-detail-row">
          <div class="modal-section-title">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Core Industry Responsibilities
          </div>
          <p class="modal-text" style="font-size: 1rem; font-weight: 500;">${role.responsibilities}</p>
        </div>

        <div class="modal-detail-row">
          <div class="modal-section-title">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Day-In-The-Life & Production Workflow
          </div>
          <p class="modal-text">${role.dayInTheLife || 'Active daily pipeline involvement in multi-department asset creation, code integration, and director milestone reviews.'}</p>
        </div>

        <div class="modal-detail-row">
          <div class="modal-section-title">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            Full Companion Software Ecosystem
          </div>
          <div class="tools-chips-list" style="margin-top: 0.4rem;">
            ${role.companionTools.map(tool => `<span class="tool-tag" style="font-size: 0.8rem; padding: 0.3rem 0.7rem;">${tool}</span>`).join('')}
          </div>
        </div>

        <div class="modal-detail-row">
          <div class="modal-highlight-box">
            <div class="modal-section-title" style="color: #a5b4fc;">
              <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Hiring Portfolio Recommendation
            </div>
            <p class="modal-text" style="color: #e2e8f0; font-size: 0.88rem;">
              ${role.portfolioTip || 'Build a cohesive 3-piece portfolio project showing high-to-low poly workflow, clean topology, and real-time engine integration.'}
            </p>
          </div>
        </div>

        <div class="modal-detail-row">
          <div class="modal-section-title">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Key Production Hubs & Markets
          </div>
          <p class="modal-text" style="color: var(--text-dim); font-size: 0.85rem;">${role.hubs.join(' • ')}</p>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn-card-action-icon ${isBookmarked ? 'active-bookmark' : ''}" 
                onclick="window.IyalStudios.toggleBookmark('${role.id}'); window.IyalStudios.openRoleModal('${role.id}');"
                title="Save to My Shortlist">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="${isBookmarked ? 'currentColor' : 'none'}"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        </button>

        <div style="display: flex; gap: 0.6rem;">
          <button class="btn-reset-filters" onclick="window.IyalStudios.copyRoleShareText('${role.id}')">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button class="btn-primary-action" onclick="window.IyalStudios.closeModal('roleModal')">
            Close
          </button>
        </div>
      </div>
    `;

    DOM.roleModal.classList.add('active');
  }

  /**
   * Mobile Filter Sheet Trigger
   */
  function openMobileFilterModal() {
    if (!DOM.mobileFilterModal) return;

    if (DOM.mobileSwSelect) DOM.mobileSwSelect.value = state.activeSoftware;
    if (DOM.mobileIndSelect) DOM.mobileIndSelect.value = state.selectedIndustry;
    if (DOM.mobileHubSelect) DOM.mobileHubSelect.value = state.selectedHub;
    if (DOM.mobileSortSelect) DOM.mobileSortSelect.value = state.sortBy;

    DOM.mobileFilterModal.classList.add('active');
  }

  function applyMobileFilters() {
    if (DOM.mobileSwSelect) {
      state.activeSoftware = DOM.mobileSwSelect.value;
      renderSoftwareFilterStrip();
    }
    if (DOM.mobileIndSelect) {
      state.selectedIndustry = DOM.mobileIndSelect.value;
      if (DOM.industryFilter) DOM.industryFilter.value = state.selectedIndustry;
    }
    if (DOM.mobileHubSelect) {
      state.selectedHub = DOM.mobileHubSelect.value;
      if (DOM.hubFilter) DOM.hubFilter.value = state.selectedHub;
    }
    if (DOM.mobileSortSelect) {
      state.sortBy = DOM.mobileSortSelect.value;
      if (DOM.sortSelect) DOM.sortSelect.value = state.sortBy;
    }

    if (state.activeView !== 'cards' && state.activeView !== 'table') {
      switchView('cards');
    }
    applyFilters();
    showToast('Applied custom filters', 'info');
  }

  /**
   * Open Career Matcher Wizard
   */
  function openCareerWizard() {
    state.wizardStep = 1;
    state.wizardAnswers = {};
    renderWizardStep();
    DOM.wizardModal.classList.add('active');
  }

  function renderWizardStep() {
    if (!DOM.wizardModalContent) return;

    if (state.wizardStep === 1) {
      DOM.wizardModalContent.innerHTML = `
        <div class="modal-header">
          <div>
            <div class="pipeline-tag">Step 1 of 3</div>
            <h2 style="font-size: 1.3rem;">What drives your creative passion?</h2>
          </div>
          <button class="modal-close-btn" onclick="window.IyalStudios.closeModal('wizardModal')">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="wizard-step-indicator">
            <div class="wizard-step-dot active"></div>
            <div class="wizard-step-dot"></div>
            <div class="wizard-step-dot"></div>
          </div>
          <div class="wizard-options-list">
            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('passion', 'realtime_games')">
              <div>
                <strong>Interactive Games & Real-Time Worlds</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">C++, Blueprints, Level Design, Niagara VFX, Nanite environments</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('passion', 'vfx_film')">
              <div>
                <strong>Cinematic Characters, Animation & Film VFX</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">Creature rigging, keyframe acting, lookdev, Arnold, nCloth simulation</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('passion', 'texturing_surfacing')">
              <div>
                <strong>PBR Materials, Texturing & Surfacing</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">Substance Painter smart masks, photorealism, weathering, UDIM workflows</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('passion', 'archviz_spaces')">
              <div>
                <strong>Photorealistic Architecture & Spaces</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">3ds Max, V-Ray, Corona, CAD blueprints, lighting & interior luxury styling</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('passion', 'digital_fashion')">
              <div>
                <strong>Digital Fashion & Virtual Garments</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">Marvelous Designer pattern cuts, dynamic cloth physics, avatar costumes</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      `;
    } else if (state.wizardStep === 2) {
      DOM.wizardModalContent.innerHTML = `
        <div class="modal-header">
          <div>
            <div class="pipeline-tag">Step 2 of 3</div>
            <h2 style="font-size: 1.3rem;">What is your technical / artistic preference?</h2>
          </div>
          <button class="modal-close-btn" onclick="window.IyalStudios.closeModal('wizardModal')">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="wizard-step-indicator">
            <div class="wizard-step-dot active"></div>
            <div class="wizard-step-dot active"></div>
            <div class="wizard-step-dot"></div>
          </div>
          <div class="wizard-options-list">
            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('profile', 'pure_artistic')">
              <div>
                <strong>100% Pure Artistic & Aesthetics</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">Sculpting, texturing, animation timing, color harmony, visual mood</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('profile', 'technical_code')">
              <div>
                <strong>Technical Artist & Programming</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">Python scripting, shaders, C++, rig mechanics, pipeline automation</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <button class="wizard-option-btn" onclick="window.IyalStudios.setWizardAnswer('profile', 'hybrid')">
              <div>
                <strong>Balanced Hybrid (Art + Logic)</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">Blueprints, node graph shaders, level assembly, physical lighting</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      `;
    } else if (state.wizardStep === 3) {
      const matches = calculateWizardMatches(state.wizardAnswers);

      DOM.wizardModalContent.innerHTML = `
        <div class="modal-header">
          <div>
            <div class="pipeline-tag" style="color: #22c55e;">Match Results</div>
            <h2 style="font-size: 1.3rem;">Top Career Matches for Your Profile</h2>
          </div>
          <button class="modal-close-btn" onclick="window.IyalStudios.closeModal('wizardModal')">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="wizard-step-indicator">
            <div class="wizard-step-dot active"></div>
            <div class="wizard-step-dot active"></div>
            <div class="wizard-step-dot active"></div>
          </div>

          <p style="color: var(--text-muted); margin-bottom: 1.25rem; font-size: 0.9rem;">
            Based on your passion for <strong>${formatAnswer(state.wizardAnswers.passion)}</strong> and your <strong>${formatAnswer(state.wizardAnswers.profile)}</strong> style, here are your best-aligned industry paths:
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${matches.map(role => {
              const sw = SOFTWARE_METADATA[role.softwareKey] || {};
              return `
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-medium); border-left: 4px solid ${sw.color}; border-radius: var(--radius-md); padding: 1.15rem;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.4rem;">
                    <div>
                      <span class="role-id-badge" style="font-size: 0.7rem;">${role.id}</span>
                      <span class="role-sw-badge ${sw.badgeClass}" style="margin-left: 0.35rem;">${sw.name}</span>
                    </div>
                    <span style="font-size: 0.72rem; font-weight: 700; color: #22c55e;">${role.demandLevel} Demand</span>
                  </div>
                  <h4 style="font-size: 1.05rem; margin-bottom: 0.35rem;">${role.title}</h4>
                  <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">${role.responsibilities}</p>
                  
                  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="font-size: 0.75rem; color: var(--text-dim);">${role.hubs.slice(0, 3).join(', ')}</div>
                    <button class="btn-card-details" style="flex: 0 0 auto; padding: 0.35rem 0.75rem;" onclick="window.IyalStudios.closeModal('wizardModal'); window.IyalStudios.openRoleModal('${role.id}')">
                      Explore Role
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-reset-filters" onclick="window.IyalStudios.openCareerWizard()">Restart Quiz</button>
          <button class="btn-primary-action" onclick="window.IyalStudios.closeModal('wizardModal')">Done</button>
        </div>
      `;
    }
  }

  function setWizardAnswer(key, val) {
    state.wizardAnswers[key] = val;
    state.wizardStep++;
    renderWizardStep();
  }

  function calculateWizardMatches(answers) {
    let swKey = 'unreal';
    if (answers.passion === 'vfx_film') swKey = 'maya';
    else if (answers.passion === 'texturing_surfacing') swKey = 'substance';
    else if (answers.passion === 'archviz_spaces') swKey = 'max';
    else if (answers.passion === 'digital_fashion') swKey = 'marvelous';

    let candidates = ROLES_DATA.filter(r => r.softwareKey === swKey);

    if (answers.profile === 'technical_code') {
      const techRoles = candidates.filter(r => r.category === 'Tech Art & Code' || r.category === 'VFX & Sim');
      if (techRoles.length > 0) candidates = techRoles;
    } else if (answers.profile === 'pure_artistic') {
      const artRoles = candidates.filter(r => r.category !== 'Tech Art & Code');
      if (artRoles.length > 0) candidates = artRoles;
    }

    return candidates.slice(0, 3);
  }

  function formatAnswer(str) {
    if (!str) return '';
    return str.replace(/_/g, ' ').toUpperCase();
  }

  /**
   * Shortlist / Bookmarks Drawer
   */
  function openBookmarksModal() {
    const list = Array.from(state.bookmarks);
    const bookmarkedRoles = list.map(id => ROLES_DATA.find(r => r.id === id)).filter(Boolean);

    DOM.bookmarksModalContent.innerHTML = `
      <div class="modal-header">
        <div>
          <div class="pipeline-tag">IYAL STUDIOS Portfolio</div>
          <h2 style="font-size: 1.3rem;">Saved Roles Shortlist (${bookmarkedRoles.length})</h2>
        </div>
        <button class="modal-close-btn" onclick="window.IyalStudios.closeModal('bookmarksModal')">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="modal-body">
        ${bookmarkedRoles.length === 0 ? `
          <div style="text-align: center; padding: 2.75rem 1rem;">
            <svg viewBox="0 0 24 24" width="40" height="40" stroke="var(--text-dim)" stroke-width="1.5" fill="none" style="margin-bottom: 0.85rem;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            <h4 style="margin-bottom: 0.35rem;">Your shortlist is empty</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Bookmark roles while exploring to build your targeted career roadmap at IYAL STUDIOS.</p>
          </div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;">
            ${bookmarkedRoles.map(role => {
              const sw = SOFTWARE_METADATA[role.softwareKey] || {};
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.8rem 0.95rem;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.15rem;">
                      <span class="role-id-badge" style="font-size: 0.68rem;">${role.id}</span>
                      <span class="role-sw-badge ${sw.badgeClass}" style="font-size: 0.65rem; padding: 1px 6px;">${sw.shortName}</span>
                    </div>
                    <div style="font-weight: 700; color: var(--text-highlight); font-size: 0.95rem;">${role.title}</div>
                    <div style="font-size: 0.75rem; color: #38bdf8;">${role.industry}</div>
                  </div>
                  <div style="display: flex; gap: 0.4rem;">
                    <button class="btn-card-details" style="padding: 0.3rem 0.65rem; font-size: 0.78rem;" onclick="window.IyalStudios.closeModal('bookmarksModal'); window.IyalStudios.openRoleModal('${role.id}')">View</button>
                    <button class="btn-card-action-icon active-bookmark" onclick="window.IyalStudios.toggleBookmark('${role.id}'); window.IyalStudios.openBookmarksModal();" title="Remove">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 0.65rem;">
            <button class="btn-primary-action" onclick="window.IyalStudios.exportShortlistCSV()">
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export CSV
            </button>
            <button class="btn-reset-filters" onclick="window.IyalStudios.exportShortlistJSON()">Export JSON</button>
            <button class="btn-reset-filters" onclick="window.print()">Print</button>
            <button class="btn-reset-filters" style="margin-left: auto; color: #f87171;" onclick="window.IyalStudios.clearBookmarks()">Clear All</button>
          </div>
        `}
      </div>
    `;

    DOM.bookmarksModal.classList.add('active');
  }

  /**
   * Bookmark Toggling
   */
  function toggleBookmark(roleId) {
    if (state.bookmarks.has(roleId)) {
      state.bookmarks.delete(roleId);
      showToast(`Removed ${roleId} from your shortlist`, 'info');
    } else {
      state.bookmarks.add(roleId);
      showToast(`Saved ${roleId} to your IYAL STUDIOS shortlist!`, 'success');
    }
    localStorage.setItem('iyal_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
    updateBadges();
    applyFilters();
  }

  function clearBookmarks() {
    state.bookmarks.clear();
    localStorage.removeItem('iyal_bookmarks');
    localStorage.removeItem('nexus3d_bookmarks');
    updateBadges();
    applyFilters();
    openBookmarksModal();
    showToast('Cleared all saved bookmarks', 'info');
  }

  /**
   * Compare Toggling
   */
  function toggleCompare(roleId) {
    if (state.compareList.has(roleId)) {
      state.compareList.delete(roleId);
      showToast(`Removed ${roleId} from comparison matrix`, 'info');
    } else {
      if (state.compareList.size >= 3) {
        showToast('You can compare a maximum of 3 roles at a time', 'warning');
        return;
      }
      state.compareList.add(roleId);
      showToast(`Added ${roleId} to role compare!`, 'success');
    }
    localStorage.setItem('iyal_compare', JSON.stringify(Array.from(state.compareList)));
    updateBadges();
    applyFilters();
  }

  function clearCompare() {
    state.compareList.clear();
    localStorage.removeItem('iyal_compare');
    localStorage.removeItem('nexus3d_compare');
    updateBadges();
    renderComparisonView();
    showToast('Comparison matrix cleared', 'info');
  }

  /**
   * Badges Count Updater
   */
  function updateBadges() {
    if (DOM.bookmarkCountBadge) {
      DOM.bookmarkCountBadge.textContent = state.bookmarks.size;
      DOM.bookmarkCountBadge.style.display = state.bookmarks.size > 0 ? 'flex' : 'none';
    }
    if (DOM.mobileSavedBadge) {
      DOM.mobileSavedBadge.textContent = state.bookmarks.size;
      DOM.mobileSavedBadge.style.display = state.bookmarks.size > 0 ? 'inline-block' : 'none';
    }
    if (DOM.compareCountBadge) {
      DOM.compareCountBadge.textContent = state.compareList.size;
      DOM.compareCountBadge.style.display = state.compareList.size > 0 ? 'flex' : 'none';
    }
  }

  /**
   * Modal Close Helper
   */
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  /**
   * View Switcher Handler
   */
  function switchView(viewName) {
    state.activeView = viewName;

    // Toggle desktop nav tab active classes
    DOM.navTabs.forEach(btn => {
      const v = btn.getAttribute('data-view');
      if (v === viewName) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    // Toggle mobile bottom nav items active classes
    DOM.mobileNavItems.forEach(item => {
      const v = item.getAttribute('data-view');
      if (v === viewName) item.classList.add('active');
      else item.classList.remove('active');
    });

    // Toggle view container visibility
    Object.keys(DOM.views).forEach(key => {
      if (DOM.views[key]) {
        if (key === viewName) {
          DOM.views[key].style.display = 'block';
        } else {
          DOM.views[key].style.display = 'none';
        }
      }
    });

    // Toggle view toggles on controls bar
    DOM.viewToggles.forEach(t => {
      if (t.getAttribute('data-view') === viewName) t.classList.add('active');
      else t.classList.remove('active');
    });

    if (DOM.views[viewName]) {
      const targetY = Math.max(0, DOM.views[viewName].offsetTop - 90);
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }

  /**
   * Filter Helpers
   */
  function setSoftwareFilter(swId) {
    state.activeSoftware = swId;
    renderSoftwareFilterStrip();
    if (DOM.mobileSwSelect) DOM.mobileSwSelect.value = swId;
    applyFilters();
  }

  function filterByTool(toolName) {
    state.searchQuery = toolName;
    if (DOM.searchInput) DOM.searchInput.value = toolName;
    if (state.activeView !== 'cards' && state.activeView !== 'table') {
      switchView('cards');
    }
    applyFilters();
    showToast(`Filtering roles using tool: "${toolName}"`, 'info');
  }

  function filterByHub(hubName) {
    state.selectedHub = hubName;
    if (DOM.hubFilter) DOM.hubFilter.value = hubName;
    if (DOM.mobileHubSelect) DOM.mobileHubSelect.value = hubName;
    if (state.activeView !== 'cards' && state.activeView !== 'table') {
      switchView('cards');
    }
    applyFilters();
    showToast(`Filtered by hub: ${hubName}`, 'info');
  }

  function resetAllFilters() {
    state.activeSoftware = 'all';
    state.searchQuery = '';
    state.selectedIndustry = 'all';
    state.selectedHub = 'all';
    state.sortBy = 'default';

    if (DOM.searchInput) DOM.searchInput.value = '';
    if (DOM.industryFilter) DOM.industryFilter.value = 'all';
    if (DOM.hubFilter) DOM.hubFilter.value = 'all';
    if (DOM.sortSelect) DOM.sortSelect.value = 'default';

    if (DOM.mobileSwSelect) DOM.mobileSwSelect.value = 'all';
    if (DOM.mobileIndSelect) DOM.mobileIndSelect.value = 'all';
    if (DOM.mobileHubSelect) DOM.mobileHubSelect.value = 'all';
    if (DOM.mobileSortSelect) DOM.mobileSortSelect.value = 'id-asc';

    renderSoftwareFilterStrip();
    applyFilters();
    showToast('All filters reset to default', 'info');
  }

  /**
   * Export Utilities
   */
  function exportShortlistCSV() {
    const list = Array.from(state.bookmarks).map(id => ROLES_DATA.find(r => r.id === id)).filter(Boolean);
    if (list.length === 0) return;

    let csv = "Role ID,Software,Job Role,Primary Industry,Core Responsibilities,Companion Tools,High-Demand Hubs\n";
    list.forEach(r => {
      csv += `"${r.id}","${r.software}","${r.title}","${r.industry}","${r.responsibilities.replace(/"/g, '""')}","${r.companionTools.join(', ')}","${r.hubs.join(', ')}"\n`;
    });

    downloadFile(csv, 'IYAL_Studios_3D_Career_Shortlist.csv', 'text/csv;charset=utf-8;');
    showToast('Downloaded career shortlist CSV!', 'success');
  }

  function exportShortlistJSON() {
    const list = Array.from(state.bookmarks).map(id => ROLES_DATA.find(r => r.id === id)).filter(Boolean);
    const jsonStr = JSON.stringify(list, null, 2);
    downloadFile(jsonStr, 'IYAL_Studios_3D_Career_Shortlist.json', 'application/json');
    showToast('Downloaded career shortlist JSON!', 'success');
  }

  function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function copyRoleShareText(roleId) {
    const role = ROLES_DATA.find(r => r.id === roleId);
    if (!role) return;

    const text = `IYAL STUDIOS | 3D & GAME ART CAREER BLUEPRINT\nRole: ${role.title} (${role.id})\nSoftware Suite: ${role.software}\nIndustry: ${role.industry}\nResponsibilities: ${role.responsibilities}\nCompanion Tools: ${role.companionTools.join(', ')}\nProduction Hubs: ${role.hubs.join(', ')}`;
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${role.id} specification to clipboard!`, 'success');
    });
  }

  /**
   * Toast Notifications
   */
  function showToast(message, type = 'info') {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    if (type === 'success') {
      icon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="#22c55e" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    }

    toast.innerHTML = `${icon}<span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /**
   * Escape quotes helper
   */
  function escapeQuotes(str) {
    return str.replace(/'/g, "\\'");
  }

  /**
   * Event Listeners Binding
   */
  function bindEvents() {
    // Search input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.activeView !== 'cards' && state.activeView !== 'table') {
          switchView('cards');
        }
        applyFilters();
      });
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener('click', () => {
        state.searchQuery = '';
        DOM.searchInput.value = '';
        DOM.searchInput.focus();
        if (state.activeView !== 'cards' && state.activeView !== 'table') {
          switchView('cards');
        }
        applyFilters();
      });
    }

    // Dropdowns
    if (DOM.industryFilter) {
      DOM.industryFilter.addEventListener('change', (e) => {
        state.selectedIndustry = e.target.value;
        if (state.activeView !== 'cards' && state.activeView !== 'table') {
          switchView('cards');
        }
        applyFilters();
      });
    }

    if (DOM.hubFilter) {
      DOM.hubFilter.addEventListener('change', (e) => {
        state.selectedHub = e.target.value;
        if (state.activeView !== 'cards' && state.activeView !== 'table') {
          switchView('cards');
        }
        applyFilters();
      });
    }

    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        applyFilters();
      });
    }

    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // Nav Tabs
    DOM.navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const view = tab.getAttribute('data-view');
        switchView(view);
      });
    });

    // View Toggles
    DOM.viewToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        switchView(view);
      });
    });

    // Theme Toggle
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && document.activeElement !== DOM.searchInput) {
        e.preventDefault();
        DOM.searchInput.focus();
      }
      if (e.key === 'Escape') {
        closeModal('roleModal');
        closeModal('bookmarksModal');
        closeModal('wizardModal');
        closeModal('mobileFilterModal');
      }
    });

    // Click outside modal dialog to close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });
  }

  // Expose Global Public API for IYAL STUDIOS
  window.IyalStudios = {
    openRoleModal,
    closeModal,
    toggleBookmark,
    toggleCompare,
    clearCompare,
    clearBookmarks,
    openBookmarksModal,
    openCareerWizard,
    openMobileFilterModal,
    applyMobileFilters,
    setWizardAnswer,
    exportShortlistCSV,
    exportShortlistJSON,
    copyRoleShareText,
    filterByTool,
    filterByHub,
    switchView,
    resetAllFilters
  };

  // Backwards compatibility alias
  window.Nexus3D = window.IyalStudios;

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
