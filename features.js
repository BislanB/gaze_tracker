// ═══ GAZE GUARD — Extended Features Module ═══
// Features: Difficulty Levels, AI Tips, Dashboard, PDF Export, Onboarding, Heatmap

// ═══════════════════════════════════════
// 1. DIFFICULTY LEVELS
// ═══════════════════════════════════════
const DIFFICULTY = {
    easy: { labelKey: 'diff.easy', sensitivity: 8, threshold: 0.25, beepDelay: 2000, color: '#00e676' },
    normal: { labelKey: 'diff.normal', sensitivity: 15, threshold: 0.35, beepDelay: 900, color: '#ffc107' },
    hard: { labelKey: 'diff.hard', sensitivity: 25, threshold: 0.45, beepDelay: 500, color: '#ff9800' },
    expert: { labelKey: 'diff.expert', sensitivity: 40, threshold: 0.55, beepDelay: 300, color: '#ff3d5a' }
};

let currentDifficulty = localStorage.getItem('gaze_difficulty') || 'normal';

function setDifficulty(level) {
    if (!DIFFICULTY[level]) return;
    currentDifficulty = level;
    localStorage.setItem('gaze_difficulty', level);
    const d = DIFFICULTY[level];
    // Update sensitivity slider if it exists
    const sensEl = document.getElementById('sens');
    const svEl = document.getElementById('sv');
    if (sensEl) { sensEl.value = d.sensitivity; }
    if (svEl) { svEl.textContent = d.sensitivity; }
    // Update difficulty buttons
    document.querySelectorAll('.diff-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.diff === level);
    });
}

function createDifficultyUI(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'diff-row';
    Object.entries(DIFFICULTY).forEach(([key, val]) => {
        const btn = document.createElement('button');
        btn.className = 'diff-btn' + (key === currentDifficulty ? ' active' : '');
        btn.dataset.diff = key;
        btn.style.setProperty('--diff-color', val.color);
        btn.textContent = typeof t === 'function' ? t(val.labelKey) : key;
        btn.onclick = () => setDifficulty(key);
        wrapper.appendChild(btn);
    });
    // Re-render on language change
    window.addEventListener('langchange', () => createDifficultyUI(containerId));
    container.appendChild(wrapper);
}

// ═══════════════════════════════════════
// 2. SESSION HISTORY / DASHBOARD
// ═══════════════════════════════════════
function saveSession(data) {
    const sessions = JSON.parse(localStorage.getItem('gaze_sessions') || '[]');
    sessions.push({
        date: new Date().toISOString(),
        duration: data.duration || 0,
        focusPct: data.focusPct || 0,
        distractions: data.distractions || 0,
        questions: data.questions || 0,
        difficulty: currentDifficulty,
        results: data.results || []
    });
    // Keep last 100 sessions
    if (sessions.length > 100) sessions.splice(0, sessions.length - 100);
    localStorage.setItem('gaze_sessions', JSON.stringify(sessions));
}

function getSessions() {
    return JSON.parse(localStorage.getItem('gaze_sessions') || '[]');
}

function createDashboard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const sessions = getSessions();

    const _t = typeof t === 'function' ? t : (k) => k;

    if (!sessions.length) {
        container.innerHTML = `<div class="dash-empty">
      <div class="dash-empty-icon">📊</div>
      <p>${_t('dash.empty')}</p>
    </div>`;
        return;
    }

    const last7 = sessions.slice(-7);
    const avgFocus = Math.round(last7.reduce((s, x) => s + x.focusPct, 0) / last7.length);
    const totalSessions = sessions.length;
    const totalQ = sessions.reduce((s, x) => s + x.questions, 0);
    const trend = last7.length >= 2
        ? last7[last7.length - 1].focusPct - last7[0].focusPct
        : 0;

    // Build chart bars
    const maxFocus = 100;
    const chartBars = last7.map((s, i) => {
        const h = Math.max(4, (s.focusPct / maxFocus) * 100);
        const date = new Date(s.date);
        const label = (date.getMonth() + 1) + '/' + date.getDate();
        return `<div class="dash-bar-wrap">
      <div class="dash-bar" style="height:${h}%;background:${s.focusPct >= 80 ? 'var(--green)' : s.focusPct >= 50 ? 'var(--yellow)' : 'var(--red)'}">
        <span class="dash-bar-val">${s.focusPct}%</span>
      </div>
      <span class="dash-bar-label">${label}</span>
    </div>`;
    }).join('');

    container.innerHTML = `
    <div class="dash-stats">
      <div class="st"><div class="l">${_t('dash.sessions')}</div><div class="v g">${totalSessions}</div></div>
      <div class="st"><div class="l">${_t('dash.avgfocus')}</div><div class="v y">${avgFocus}%</div></div>
      <div class="st"><div class="l">${_t('dash.trend')}</div><div class="v ${trend >= 0 ? 'g' : 'r'}">${trend >= 0 ? '↑' : '↓'}${Math.abs(trend)}%</div></div>
    </div>
    <div class="dash-chart-title">${_t('dash.history')}</div>
    <div class="dash-chart">${chartBars}</div>
    <div class="dash-recent-title">${_t('dash.recent')}</div>
    <div class="dash-recent">${sessions.slice(-5).reverse().map(s => {
        const d = new Date(s.date);
        const dt = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `<div class="dash-session-row">
        <span class="dash-date">${dt}</span>
        <span class="dash-focus" style="color:${s.focusPct >= 80 ? 'var(--green)' : s.focusPct >= 50 ? 'var(--yellow)' : 'var(--red)'}">${s.focusPct}%</span>
        <span class="dash-info">${s.questions}Q · ${s.distractions}D · ${_t(DIFFICULTY[s.difficulty]?.labelKey || 'diff.normal')}</span>
      </div>`;
    }).join('')}</div>
    <button class="ghost dash-clear" onclick="if(confirm('Clear all history?')){localStorage.removeItem('gaze_sessions');createDashboard('${containerId}')}">${_t('dash.clear')}</button>
  `;
}

// ═══════════════════════════════════════
// 3. AI TIPS AFTER SESSION
// ═══════════════════════════════════════
function generateTips(results) {
    const tips = [];
    if (!results || !results.length) return tips;

    const avgFocus = Math.round(results.reduce((s, r) => s + r.focusPct, 0) / results.length);
    const totalDistr = results.reduce((s, r) => s + r.distractions, 0);
    const worstQ = results.reduce((w, r, i) => r.focusPct < w.focus ? { idx: i, focus: r.focusPct } : w, { idx: 0, focus: 100 });
    const emptyAnswers = results.filter(r => r.transcript === t('app.noanswer') || r.transcript.length < 10).length;

    // Focus tips
    if (avgFocus >= 90) {
        tips.push({ icon: '🏆', type: 'success', text: t('tip.excellent') || 'Excellent focus! You maintained eye contact consistently. Try Expert difficulty for a greater challenge.' });
    } else if (avgFocus >= 70) {
        tips.push({ icon: '👍', type: 'good', text: t('tip.good') || 'Good focus overall. Try to maintain eye contact during challenging questions — look at the bridge of the nose if direct eye contact feels intense.' });
    } else if (avgFocus >= 50) {
        tips.push({ icon: '💡', type: 'tip', text: t('tip.improve') || 'Your focus dipped below 70%. Practice the 80/20 rule: maintain eye contact 80% of the time, briefly look away 20% when thinking.' });
    } else {
        tips.push({ icon: '🎯', type: 'warning', text: t('tip.low') || 'Focus was under 50%. Start with Easy difficulty and gradually increase. Try keeping your head still and only moving your eyes.' });
    }

    // Distraction pattern
    if (totalDistr > results.length * 3) {
        tips.push({ icon: '⚡', type: 'tip', text: t('tip.distractions') || `You had ${totalDistr} distractions across ${results.length} questions. Try minimizing browser tabs and notifications during practice.` });
    }

    // Worst question
    if (results.length > 1 && worstQ.focus < avgFocus - 15) {
        tips.push({ icon: '📌', type: 'tip', text: (t('tip.worst_q') || 'Question ${n} had the lowest focus (${p}%). This type of question may need more preparation — practice your answer beforehand.').replace('${n}', worstQ.idx + 1).replace('${p}', worstQ.focus) });
    }

    // Empty answers
    if (emptyAnswers > 0) {
        tips.push({ icon: '🎙️', type: 'tip', text: (t('tip.silent') || '${n} question(s) had no recorded answer. Make sure your microphone is working and speak clearly.').replace('${n}', emptyAnswers) });
    }

    // General improvement tip
    if (avgFocus < 80) {
        tips.push({ icon: '🧘', type: 'tip', text: t('tip.breathe') || 'Before starting, take 3 deep breaths and focus on a single point on screen. This anchors your gaze and reduces anxiety.' });
    }

    return tips;
}

function renderTips(tips, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!tips.length) { container.innerHTML = ''; return; }
    container.innerHTML = `<h3 class="tips-title">💡 AI Recommendations</h3>` +
        tips.map(tip => `<div class="tip-card tip-${tip.type}"><span class="tip-icon">${tip.icon}</span><p>${tip.text}</p></div>`).join('');
}

// ═══════════════════════════════════════
// 4. GAZE HEATMAP
// ═══════════════════════════════════════
let heatmapData = [];
let heatmapRecording = false;

function startHeatmapRecording() {
    heatmapData = [];
    heatmapRecording = true;
}

function stopHeatmapRecording() {
    heatmapRecording = false;
}

function recordHeatmapPoint(x, y, looking) {
    if (!heatmapRecording) return;
    heatmapData.push({ x, y, looking, t: Date.now() });
}

function renderHeatmap(canvasId, width, height) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !heatmapData.length) return;
    canvas.width = width || 640;
    canvas.height = height || 480;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;

    // Dark background
    ctx.fillStyle = '#0c0c14';
    ctx.fillRect(0, 0, W, H);

    // Draw grid
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Create heatmap grid (20x15 cells)
    const gridW = 20, gridH = 15;
    const cellW = W / gridW, cellH = H / gridH;
    const grid = Array.from({ length: gridH }, () => Array(gridW).fill(0));
    const gridAway = Array.from({ length: gridH }, () => Array(gridW).fill(0));

    heatmapData.forEach(p => {
        const gx = Math.min(gridW - 1, Math.max(0, Math.floor(p.x * gridW)));
        const gy = Math.min(gridH - 1, Math.max(0, Math.floor(p.y * gridH)));
        grid[gy][gx]++;
        if (!p.looking) gridAway[gy][gx]++;
    });

    const maxVal = Math.max(1, ...grid.flat());

    // Draw cells
    for (let gy = 0; gy < gridH; gy++) {
        for (let gx = 0; gx < gridW; gx++) {
            const val = grid[gy][gx];
            if (val === 0) continue;
            const awayRatio = gridAway[gy][gx] / val;
            const intensity = val / maxVal;
            const alpha = Math.min(0.7, intensity * 0.8);

            if (awayRatio > 0.5) {
                // Distracted zone — red
                ctx.fillStyle = `rgba(255, 61, 90, ${alpha})`;
            } else {
                // Focused zone — green
                ctx.fillStyle = `rgba(0, 230, 118, ${alpha})`;
            }
            ctx.fillRect(gx * cellW, gy * cellH, cellW, cellH);
        }
    }

    // Draw center crosshair
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
    ctx.setLineDash([]);

    // Legend
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillText('🟢 Focused', 10, H - 30);
    ctx.fillText('🔴 Distracted', 10, H - 14);
    ctx.fillText('+ Center', W / 2 - 20, H / 2 - 8);
}

// ═══════════════════════════════════════
// 5. PDF EXPORT
// ═══════════════════════════════════════
function exportResultsPDF(results, sessionStats) {
    if (!results || !results.length) return;

    const avgFocus = Math.round(results.reduce((s, r) => s + r.focusPct, 0) / results.length);
    const totalDistr = results.reduce((s, r) => s + r.distractions, 0);
    const tips = generateTips(results);
    const date = new Date().toLocaleString();

    // Build HTML for print
    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<title>Gaze Guard Report - ${date}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',system-ui,sans-serif;padding:40px;color:#1a1a2e;line-height:1.6;max-width:800px;margin:0 auto}
h1{font-size:24px;margin-bottom:4px;color:#0a0a1a}
.subtitle{color:#666;font-size:13px;margin-bottom:24px}
.stats-row{display:flex;gap:16px;margin-bottom:24px}
.stat-box{flex:1;border:1px solid #e0e0e0;border-radius:12px;padding:16px;text-align:center}
.stat-box .label{font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px}
.stat-box .value{font-size:28px;font-weight:700;margin-top:4px}
.green{color:#00c853}.yellow{color:#f9a825}.red{color:#e53935}
h2{font-size:16px;margin:24px 0 12px;padding-bottom:6px;border-bottom:2px solid #f0f0f0}
.question{margin-bottom:16px;border:1px solid #eee;border-radius:10px;padding:14px;page-break-inside:avoid}
.q-title{font-size:13px;color:#1565c0;font-weight:600;margin-bottom:6px}
.q-answer{font-size:13px;color:#333;background:#f8f9fa;padding:10px;border-radius:6px;margin-bottom:6px;white-space:pre-wrap}
.q-answer.empty{color:#999;font-style:italic}
.q-meta{font-size:11px;color:#888;display:flex;gap:16px}
.tip{padding:10px 14px;border-radius:8px;margin-bottom:8px;font-size:13px;display:flex;align-items:flex-start;gap:8px}
.tip-success{background:#e8f5e9;color:#2e7d32}
.tip-good{background:#e3f2fd;color:#1565c0}
.tip-tip{background:#fff8e1;color:#f57f17}
.tip-warning{background:#fce4ec;color:#c62828}
.footer{margin-top:32px;padding-top:12px;border-top:1px solid #eee;font-size:11px;color:#aaa;text-align:center}
@media print{body{padding:20px}.question{break-inside:avoid}}
</style></head><body>
<h1>🛡️ Gaze Guard — Interview Report</h1>
<div class="subtitle">${date} · Difficulty: ${DIFFICULTY[currentDifficulty]?.label || 'Normal'}</div>

<div class="stats-row">
  <div class="stat-box"><div class="label">Questions</div><div class="value">${results.length}</div></div>
  <div class="stat-box"><div class="label">Avg Focus</div><div class="value ${avgFocus >= 80 ? 'green' : avgFocus >= 50 ? 'yellow' : 'red'}">${avgFocus}%</div></div>
  <div class="stat-box"><div class="label">Distractions</div><div class="value red">${totalDistr}</div></div>
</div>

<h2>📋 Questions & Answers</h2>
${results.map((r, i) => `<div class="question">
  <div class="q-title">Q${i + 1}: ${escHTML(r.question)}</div>
  <div class="q-answer${r.transcript.length < 10 ? ' empty' : ''}">${escHTML(r.transcript)}</div>
  <div class="q-meta">
    <span>⏱ ${r.timeTaken}s / ${r.totalTime}s</span>
    <span>👁 Focus: ${r.focusPct}%</span>
    <span>⚠ Distractions: ${r.distractions}</span>
  </div>
</div>`).join('')}

${tips.length ? `<h2>💡 AI Recommendations</h2>
${tips.map(tip => `<div class="tip tip-${tip.type}"><span>${tip.icon}</span><span>${tip.text}</span></div>`).join('')}` : ''}

<div class="footer">Generated by Gaze Guard · AI-Powered Interview Eye-Tracking Trainer · gazeguard.app</div>
</body></html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, '_blank');
    if (win) {
        win.onload = () => {
            setTimeout(() => { win.print(); }, 500);
        };
    } else {
        // Fallback: download as HTML
        const a = document.createElement('a');
        a.href = url;
        a.download = `gaze-guard-report-${Date.now()}.html`;
        a.click();
    }
    setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function escHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ═══════════════════════════════════════
// 6. ONBOARDING TUTORIAL
// ═══════════════════════════════════════
function getOnboardingSteps() {
    const _t = typeof t === 'function' ? t : (k) => k;
    return [
        {
            target: '.vw',
            title: _t('onb.camera.title'),
            text: _t('onb.camera.text'),
            position: 'bottom'
        },
        {
            target: '#go',
            title: _t('onb.start.title'),
            text: _t('onb.start.text'),
            position: 'top'
        },
        {
            target: '.sts',
            title: _t('onb.stats.title'),
            text: _t('onb.stats.text'),
            position: 'top'
        },
        {
            target: '[data-tab="interview"]',
            title: _t('onb.interview.title'),
            text: _t('onb.interview.text'),
            position: 'bottom'
        },
        {
            target: '#difficultySelector',
            title: _t('onb.difficulty.title'),
            text: _t('onb.difficulty.text'),
            position: 'top'
        }
    ];
}

let onboardingStep = 0;
let onboardingActive = false;

function shouldShowOnboarding() {
    return !localStorage.getItem('gaze_onboarding_done');
}

function startOnboarding() {
    onboardingStep = 0;
    onboardingActive = true;
    showOnboardingStep();
}

function showOnboardingStep() {
    const _t = typeof t === 'function' ? t : (k) => k;
    const steps = getOnboardingSteps();
    // Remove previous
    document.querySelectorAll('.onb-overlay, .onb-tooltip, .onb-highlight').forEach(e => e.remove());

    if (onboardingStep >= steps.length) {
        finishOnboarding();
        return;
    }

    const step = steps[onboardingStep];
    const targetEl = document.querySelector(step.target);

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'onb-overlay';
    document.body.appendChild(overlay);

    // Highlight target
    if (targetEl) {
        const highlight = document.createElement('div');
        highlight.className = 'onb-highlight';
        const rect = targetEl.getBoundingClientRect();
        highlight.style.cssText = `top:${rect.top - 4}px;left:${rect.left - 4}px;width:${rect.width + 8}px;height:${rect.height + 8}px;`;
        document.body.appendChild(highlight);
    }

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'onb-tooltip';
    tooltip.innerHTML = `
    <div class="onb-step-num">${onboardingStep + 1}/${steps.length}</div>
    <h4>${step.title}</h4>
    <p>${step.text}</p>
    <div class="onb-actions">
      <button class="onb-skip" onclick="finishOnboarding()">${_t('onb.skip')}</button>
      <button class="onb-next" onclick="nextOnboardingStep()">
        ${onboardingStep === steps.length - 1 ? _t('onb.gotit') : _t('onb.next')}
      </button>
    </div>
  `;

    document.body.appendChild(tooltip);

    // Position tooltip relative to target
    if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const tRect = tooltip.getBoundingClientRect();
        if (step.position === 'top') {
            tooltip.style.top = Math.max(10, rect.top - tRect.height - 16) + 'px';
        } else {
            tooltip.style.top = Math.min(window.innerHeight - tRect.height - 10, rect.bottom + 16) + 'px';
        }
        tooltip.style.left = Math.max(10, Math.min(window.innerWidth - tRect.width - 10, rect.left + rect.width / 2 - tRect.width / 2)) + 'px';
    } else {
        tooltip.style.top = '50%';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translate(-50%, -50%)';
    }
}

function nextOnboardingStep() {
    onboardingStep++;
    showOnboardingStep();
}

function finishOnboarding() {
    onboardingActive = false;
    localStorage.setItem('gaze_onboarding_done', '1');
    document.querySelectorAll('.onb-overlay, .onb-tooltip, .onb-highlight').forEach(e => e.remove());
}

// Make functions globally accessible
window.nextOnboardingStep = nextOnboardingStep;
window.finishOnboarding = finishOnboarding;
window.startOnboarding = startOnboarding;
