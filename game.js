(() => {
  const characters = [
    { name: 'Dan Kuso', partner: 'Neo Dragonoid', attribute: 'Pyrus', type: 'Dragon Type', evolution: 'EVOLUTION I', faction: 'resistance', role: 'RESISTANCE · PYRUS', quote: '“Let’s do this, partner!”', power: 640, color: '#f18a48', symbol: '✦', style: 'Fearless', streak: 0 },
    { name: 'Shun Kazami', partner: 'Ingram', attribute: 'Ventus', type: 'Ninja Type', evolution: 'EVOLUTION I', faction: 'resistance', role: 'RESISTANCE · VENTUS', quote: '“I fight my own battles.”', power: 620, color: '#82c986', symbol: '➶', style: 'Precise', streak: 0 },
    { name: 'Marucho Marukura', partner: 'Elfin', attribute: 'Aquos', type: 'Elf Type', evolution: 'EVOLUTION I', faction: 'resistance', role: 'RESISTANCE · AQUOS', quote: '“I’ve got a strategy!”', power: 590, color: '#62bce8', symbol: '≈', style: 'Tactical', streak: 0 },
    { name: 'Julie Makimoto', partner: 'Wilda', attribute: 'Subterra', type: 'Golem Type', evolution: 'EVOLUTION I', faction: 'resistance', role: 'RESISTANCE · SUBTERRA', quote: '“Come on, big guy!”', power: 610, color: '#d8ad67', symbol: '⬟', style: 'Powerful', streak: 0 },
    { name: 'Alice Gehabich', partner: 'Mega Nemus', attribute: 'Haos', type: 'Guardian Type', evolution: 'EVOLUTION II', faction: 'resistance', role: 'RESISTANCE · HAOS', quote: '“We’re stronger together.”', power: 630, color: '#f1da8e', symbol: '☼', style: 'Balanced', streak: 0 },
    { name: 'Mira Fermin', partner: 'Magnetic Wilda', attribute: 'Subterra', type: 'Golem Type', evolution: 'EVOLUTION II', faction: 'resistance', role: 'RESISTANCE · SUBTERRA', quote: '“The Resistance never gives up!”', power: 670, color: '#d8ad67', symbol: '⬟', style: 'Relentless', streak: 0 },
    { name: 'Ace Grit', partner: 'Percival', attribute: 'Darkus', type: 'Knight Type', evolution: 'EVOLUTION I', faction: 'resistance', role: 'RESISTANCE · DARKUS', quote: '“I’ll prove myself out there.”', power: 630, color: '#ab89e3', symbol: '◈', style: 'Aggressive', streak: 0 },
    { name: 'Baron Leltoy', partner: 'Mega Nemus', attribute: 'Haos', type: 'Guardian Type', evolution: 'EVOLUTION II', faction: 'resistance', role: 'RESISTANCE · HAOS', quote: '“I believe in you, Nemus!”', power: 600, color: '#f1da8e', symbol: '☼', style: 'Defensive', streak: 0 },
    { name: 'Spectra Phantom', partner: 'Viper Helios', attribute: 'Pyrus', type: 'Mechanical Dragon', evolution: 'MECHANICAL', faction: 'vexos', role: 'VEXOS COMMANDER', quote: '“You cannot defeat perfection.”', power: 600, color: '#bb94e9', symbol: '✦', style: 'Aggressive', streak: 4 },
    { name: 'Gus Grav', partner: 'Vulcan', attribute: 'Darkus', type: 'Mechanical Giant', evolution: 'MECHANICAL', faction: 'vexos', role: 'VEXOS · DARKUS', quote: '“I will protect my master.”', power: 620, color: '#bb94e9', symbol: '◈', style: 'Defensive', streak: 3 },
    { name: 'Shadow Prove', partner: 'Hades', attribute: 'Darkus', type: 'Mechanical Dragon', evolution: 'MECHANICAL', faction: 'vexos', role: 'VEXOS · DARKUS', quote: '“Ready to be erased?”', power: 580, color: '#bb94e9', symbol: '◈', style: 'Trickster', streak: 2 },
    { name: 'Lync Volan', partner: 'Altair', attribute: 'Ventus', type: 'Mechanical Bird', evolution: 'MECHANICAL', faction: 'vexos', role: 'VEXOS · VENTUS', quote: '“I’m always one step ahead.”', power: 610, color: '#bb94e9', symbol: '➶', style: 'Swift', streak: 2 },
    { name: 'Volt Luster', partner: 'Brontes', attribute: 'Haos', type: 'Mechanical Clown', evolution: 'MECHANICAL', faction: 'vexos', role: 'VEXOS · HAOS', quote: '“Let’s see you handle this!”', power: 600, color: '#bb94e9', symbol: '☼', style: 'Unpredictable', streak: 1 },
    { name: 'Mylene Farrow', partner: 'Elico', attribute: 'Aquos', type: 'Mechanical Aquatic', evolution: 'MECHANICAL', faction: 'vexos', role: 'VEXOS · AQUOS', quote: '“Do try to keep up.”', power: 640, color: '#bb94e9', symbol: '≈', style: 'Calculated', streak: 3 },
    { name: 'Prince Hydron', partner: 'MAC Spider', attribute: 'Darkus', type: 'Mechanical Spider', evolution: 'MECHANICAL', faction: 'vexos', role: 'VEXOS PRINCE', quote: '“Bow before the prince!”', power: 650, color: '#bb94e9', symbol: '◈', style: 'Commanding', streak: 5 },
    { name: 'Masquerade', partner: 'Alpha Hydranoid', attribute: 'Darkus', type: 'Dragon Type', evolution: 'EVOLUTION II', faction: 'resistance', role: 'ALLY · DARKUS', quote: '“The battle is not over.”', power: 680, color: '#ab89e3', symbol: '◈', style: 'Masterful', streak: 0 },
    { name: 'Runo Misaki', partner: 'Tigrerra', attribute: 'Haos', type: 'Tiger Type', evolution: 'EVOLUTION I', faction: 'resistance', role: 'ALLY · HAOS', quote: '“Let’s show them what we can do!”', power: 610, color: '#f1da8e', symbol: '☼', style: 'Courageous', streak: 0 },
    { name: 'Nillious', partner: 'Nillious', attribute: 'Darkus', type: 'Dragon Type', evolution: 'NEW VESTROIA ALLY', faction: 'resistance', role: 'BAKUGAN ALLY · DARKUS', quote: '“A new force enters the arena.”', power: 650, color: '#ab89e3', symbol: '◈', style: 'Fierce', streak: 0 },
  ];
  const cards = [
    { name: 'PYRO BLAZE', desc: 'Fire attribute boost', bonus: 120, symbol: '♨', effect: 'fire', attribute: 'Pyrus' },
    { name: 'AQUA SHIELD', desc: 'Tactical power boost', bonus: 90, symbol: '◉', effect: 'water', attribute: 'Aquos' },
    { name: 'WIND BOOST', desc: 'Quick strike boost', bonus: 100, symbol: '➶', effect: 'wind', attribute: 'Ventus' },
  ];
  const gates = [
    { name: 'FIRE WALL', attribute: 'Pyrus', bonus: 40 },
    { name: 'AQUA ZONE', attribute: 'Aquos', bonus: 40 },
    { name: 'WIND REFLECTOR', attribute: 'Ventus', bonus: 40 },
    { name: 'DARKUS MIRROR', attribute: 'Darkus', bonus: 40 },
    { name: 'HAOS BEACON', attribute: 'Haos', bonus: 40 },
    { name: 'SUBTERRA RISE', attribute: 'Subterra', bonus: 40 },
  ];
  const $ = (id) => document.getElementById(id);
  const state = { player: characters[0], rival: characters[8], phase: 'roll', round: 1, playerWins: 0, rivalWins: 0, playerScore: 0, rivalScore: 0, cardsUsed: 0, record: { w: 0, l: 0 }, playerLast: 0, rivalLast: 0, played: false };
  const attributeClass = (name) => name.toLowerCase();
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let toastTimer;
  let soundOn = true;
  let audioContext;

  function tone(frequency = 440, duration = .08, type = 'sine', volume = .035) {
    if (!soundOn) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain();
      oscillator.type = type; oscillator.frequency.value = frequency; gain.gain.value = volume;
      gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
      oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(); oscillator.stop(audioContext.currentTime + duration);
    } catch { /* Audio is an optional browser enhancement. */ }
  }
  function showToast(message) { const el = $('toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2200); }
  function setLog(message) { $('log-text').textContent = message; }
  function changeAttribute(el, attribute) { el.className = el.className.replace(/\b(pyrus|aquos|ventus|haos|darkus|subterra)\b/g, '').trim(); el.classList.add(attributeClass(attribute)); }
  function renderPlayer() {
    const c = state.player; $('player-name').textContent = c.name; $('player-quote').textContent = c.quote; $('partner-name').textContent = c.partner; $('partner-evolution').innerHTML = `${c.evolution} <i>•</i> ${c.type.toUpperCase()}`;
    $('player-power').innerHTML = `${c.power}<span>G</span>`; $('arena-player-name').textContent = `${c.name.split(' ')[0].toUpperCase()} & ${c.partner.toUpperCase()}`;
    $('arena-player-power').innerHTML = `${c.power}<span>G</span>`; $('player-gbar').style.width = `${Math.min(100, 58 + (c.power - 550) / 5)}%`;
    $('player-trainer').style.setProperty('--sigil', c.color); $('partner-card').style.setProperty('--sigil', c.color);
    const orb = $('player-orb'); orb.className = `bakugan-orb pyrus-orb ${attributeClass(c.attribute)}-orb`; orb.style.borderColor = c.color; orb.style.boxShadow = `0 0 16px ${c.color}35,inset 0 0 12px #080f1c`; orb.querySelector('.orb-core').textContent = c.symbol;
    $('player-creature').querySelector('.creature-body').style.filter = `hue-rotate(${colorHue(c.attribute)}deg)`;
    $('player-creature').querySelector('.creature-aura').style.background = `radial-gradient(ellipse,${c.color}42,transparent 69%)`;
    $('player-trainer').querySelector('.role-label').textContent = c.role;
    $('arena-player-name').title = c.partner; changeAttribute($('partner-attribute'), c.attribute);
    document.querySelectorAll('.squad-slot').forEach((el) => { el.classList.toggle('selected', el.dataset.name === c.name); el.setAttribute('aria-pressed', String(el.dataset.name === c.name)); });
    $('squad-count').textContent = `${String(characters.filter(x => x.faction === 'resistance').indexOf(c) + 1).padStart(2, '0')} / ${String(characters.filter(x => x.faction === 'resistance').length).padStart(2, '0')}`;
  }
  function colorHue(attribute) { return ({ Pyrus: 0, Aquos: 154, Ventus: 78, Haos: 28, Darkus: 240, Subterra: 32 })[attribute] || 0; }
  function renderRival() {
    const c = state.rival; $('rival-name').textContent = c.name; $('rival-quote').textContent = c.quote; $('rival-partner-name').textContent = c.partner; $('rival-role').textContent = c.role; $('rival-evolution').textContent = `${c.evolution} · ${c.type.toUpperCase()}`;
    $('rival-attribute').textContent = c.attribute.toUpperCase(); changeAttribute($('rival-attribute'), c.attribute);
    $('rival-panel-power').innerHTML = `${c.power}<span>G</span>`; $('arena-rival-power').innerHTML = `${c.power}<span>G</span>`; $('rival-gbar').style.width = `${Math.min(100, 54 + (c.power - 540) / 5)}%`;
    $('arena-rival-name').textContent = `${c.name.split(' ')[0].toUpperCase()} & ${c.partner.toUpperCase()}`; $('rival-faction').textContent = c.faction === 'vexos' ? 'VEXOS' : 'ALLIES'; $('rival-style').textContent = c.style; $('rival-intel-attribute').innerHTML = `${c.attribute} <i class="tiny-flame">◆</i>`; $('rival-streak').innerHTML = `${String(c.streak).padStart(2, '0')} <small>W</small>`;
    $('intel-message').textContent = c.faction === 'vexos' ? 'Watch for a heavy power spike after the gate opens.' : 'A formidable ally joins your fight for Vestroia.';
    const orb = $('rival-orb'); orb.querySelector('.orb-core').textContent = c.symbol; orb.style.borderColor = c.color;
    $('rival-creature').querySelector('.creature-body').style.filter = `hue-rotate(${colorHue(c.attribute)}deg)`; $('rival-creature').querySelector('.creature-aura').style.background = `radial-gradient(ellipse,${c.color}42,transparent 69%)`;
  }
  function renderRoster() {
    const roster = characters.filter(c => c.faction === 'resistance'); $('squad-picker').innerHTML = '';
    roster.slice(0, 6).forEach((c, i) => { const button = document.createElement('button'); button.className = 'squad-slot'; button.dataset.name = c.name; button.title = `${c.name} · ${c.partner}`; button.setAttribute('aria-label', `Select ${c.name}`); button.textContent = c.name.split(' ').map(x => x[0]).slice(0, 2).join(''); button.addEventListener('click', () => selectPlayer(c)); $('squad-picker').append(button); });
  }
  function renderCards() {
    const root = $('ability-cards'); root.innerHTML = '';
    cards.forEach((card, index) => { const button = document.createElement('button'); button.className = 'ability-card'; button.disabled = state.phase !== 'ability' || state.cardsUsed >= 1; button.setAttribute('aria-label', `${card.name}: ${card.desc}, plus ${card.bonus} G`); button.innerHTML = `<span class="ability-art">${card.symbol}</span><b>${card.name}</b><small>${card.desc}</small><span class="ability-bonus">+${card.bonus}G</span>`; button.addEventListener('click', () => playCard(index)); root.append(button); });
    $('cards-remaining').textContent = String(Math.max(0, 1 - state.cardsUsed));
  }
  function renderScore() { $('core-label').innerHTML = `${state.playerWins} <small>/ 3</small>`; $('core-fill').style.width = `${Math.min(100, state.playerWins / 3 * 100)}%`; $('record-line').innerHTML = `${state.record.w} W <i>—</i> ${state.record.l} L`; }
  function setPhase(phase, title, description, help) { state.phase = phase; $('phase-title').textContent = title; $('phase-description').textContent = description; $('turn-help-text').textContent = help; renderCards(); }
  function setAction(button) { const root = $('action-area'); root.innerHTML = ''; if (button) root.append(button); }
  function actionButton(text, callback, icon = '↗') { const button = document.createElement('button'); button.className = 'primary-action'; button.innerHTML = `${text} <span>${icon}</span>`; button.addEventListener('click', callback); return button; }
  function updateRoundDisplay() { $('round-number').textContent = String(state.round).padStart(2, '0'); $('phase-number').textContent = String(state.round).padStart(2, '0'); }
  function setGate() { const gate = gates[(state.round - 1) % gates.length]; $('gate-name').textContent = gate.name; return gate; }
  function startRound() {
    state.playerLast = 0; state.rivalLast = 0; state.played = false; updateRoundDisplay(); const gate = setGate(); $('arena').classList.remove('rolling', 'impact', 'ability-fire', 'ability-water', 'ability-wind');
    $('player-gbar').style.width = `${Math.min(100, 58 + (state.player.power - 550) / 5)}%`; $('rival-gbar').style.width = `${Math.min(100, 54 + (state.rival.power - 540) / 5)}%`;
    setLog(`${gate.name} is active. Roll to reveal your G-power!`); setPhase('roll', 'YOUR TURN', 'Roll your Bakugan onto the gate card', 'Roll first to reveal your battle bonus.');
    setAction(actionButton('ROLL BAKUGAN', roll, '➤')); $('action-area').firstChild.insertAdjacentHTML('beforeend', ' <kbd>SPACE</kbd>');
  }
  function roll() {
    if (state.phase !== 'roll') return; tone(220, .2, 'triangle'); state.playerLast = state.player.power + randomInt(-24, 34); state.rivalLast = state.rival.power + randomInt(-18, 30);
    const gate = gates[(state.round - 1) % gates.length]; if (state.player.attribute === gate.attribute) state.playerLast += gate.bonus;
    if (state.rival.attribute === gate.attribute) state.rivalLast += gate.bonus;
    $('arena').classList.add('rolling'); $('arena').classList.remove('impact'); $('arena-player-power').innerHTML = `${state.playerLast}<span>G</span>`; $('arena-rival-power').innerHTML = `${state.rivalLast}<span>G</span>`;
    $('player-gbar').style.width = `${Math.min(100, state.playerLast / 8)}%`; $('rival-gbar').style.width = `${Math.min(100, state.rivalLast / 8)}%`;
    setLog(`You rolled ${state.playerLast}G · choose an ability card!`); setPhase('ability', 'POWER UP!', 'Choose one ability card to play', 'Your rival will answer with a card of their own.'); setAction(null); tone(520, .12, 'sine');
  }
  function playCard(index) {
    if (state.phase !== 'ability' || state.cardsUsed >= 1) return;
    state.cardsUsed++; const card = cards[index]; let bonus = card.bonus;
    if (card.attribute === state.player.attribute) bonus += 25;
    state.playerLast += bonus; const rivalBonus = randomInt(45, 114) + (state.rival.attribute === gates[(state.round - 1) % gates.length].attribute ? 25 : 0); state.rivalLast += rivalBonus;
    $('arena').classList.remove('ability-fire', 'ability-water', 'ability-wind'); $('arena').classList.add(`ability-${card.effect}`); $('arena').classList.add('impact');
    $('arena-player-power').innerHTML = `${state.playerLast}<span>G</span>`; $('arena-rival-power').innerHTML = `${state.rivalLast}<span>G</span>`; $('player-gbar').style.width = `${Math.min(100, state.playerLast / 8)}%`; $('rival-gbar').style.width = `${Math.min(100, state.rivalLast / 8)}%`;
    setLog(`${card.name} +${bonus}G · rival ability +${rivalBonus}G`); setPhase('resolve', 'CLASH!', `${state.playerLast}G vs ${state.rivalLast}G`, 'The higher power takes the gate card!'); setAction(actionButton('REVEAL RESULT', resolve, '✦')); tone(660, .15, 'sawtooth'); setTimeout(() => tone(880, .22, 'triangle'), 120);
  }
  function resolve() {
    if (state.phase !== 'resolve') return; state.played = true; const won = state.playerLast >= state.rivalLast; if (won) { state.playerWins++; state.playerScore += 1; tone(740, .25, 'triangle'); setLog(`Gate card secured! ${state.player.name} takes the round!`); } else { state.rivalWins++; state.rivalScore += 1; tone(180, .28, 'sawtooth'); setLog(`${state.rival.partner} takes the gate card this round.`); }
    renderScore(); $('phase-title').textContent = won ? 'GATE SECURED!' : 'ROUND LOST'; $('phase-description').textContent = won ? 'Your team claims a core energy!' : 'The opponent claims this core.'; $('turn-help-text').textContent = `Score ${state.playerWins} — ${state.rivalWins}. Keep fighting!`;
    if (state.playerWins >= 3 || state.rivalWins >= 3 || state.round >= 5) { setAction(actionButton('FINISH MATCH', finishMatch, '✦')); } else { setAction(actionButton('NEXT ROUND', nextRound, '→')); }
    state.phase = 'result'; renderCards();
  }
  function nextRound() { state.round++; state.cardsUsed = 0; state.player.power = Math.max(550, state.player.power + randomInt(-8, 11)); state.rival.power = Math.max(550, state.rival.power + randomInt(-8, 11)); renderPlayer(); renderRival(); startRound(); }
  function finishMatch() {
    const won = state.playerWins > state.rivalWins; if (won) state.record.w++; else state.record.l++; renderScore();
    $('result-title').textContent = won ? 'VICTORY' : 'DEFEAT'; $('result-title').style.color = won ? '#ffb66d' : '#c7a6ed'; $('result-sigil').textContent = won ? '✦' : '◈'; $('result-copy').textContent = won ? 'New Vestroia is one step closer to freedom.' : 'The Vexos hold this sector — regroup and fight again.'; $('result-score').innerHTML = `${state.playerWins} <span>—</span> ${state.rivalWins}`; $('result-overlay').classList.add('open'); $('result-overlay').setAttribute('aria-hidden', 'false'); state.phase = 'finished';
  }
  function resetMatch() { $('result-overlay').classList.remove('open'); $('result-overlay').setAttribute('aria-hidden', 'true'); state.round = 1; state.playerWins = 0; state.rivalWins = 0; state.playerScore = 0; state.rivalScore = 0; state.cardsUsed = 0; state.player.power = state.player.name === 'Dan Kuso' ? 640 : state.player.power; state.rival.power = state.rival.name === 'Spectra Phantom' ? 600 : state.rival.power; renderPlayer(); renderRival(); renderScore(); startRound(); }
  function selectPlayer(character) { if (character.faction === 'vexos') { state.rival = character; renderRival(); showToast(`${character.partner} is ready to battle!`); closeCodex(); return; } state.player = character; renderPlayer(); if (state.phase === 'roll') startRound(); showToast(`${character.name} and ${character.partner} joined your squad.`); closeCodex(); }
  function codex() {
    const root = $('codex-grid'); root.innerHTML = '';
    characters.forEach(c => { const entry = document.createElement('article'); entry.className = 'codex-entry'; entry.dataset.faction = c.faction; entry.style.setProperty('--sigil', c.color); entry.innerHTML = `<div class="codex-sigil">${c.symbol}</div><div><small>${c.faction === 'vexos' ? 'VEXOS' : 'RESISTANCE'} · ${c.attribute.toUpperCase()}</small><h3>${c.name}</h3><p>${c.partner} · ${c.type}</p></div><button type="button">${c.faction === 'vexos' ? 'CHALLENGE' : 'SELECT'}</button>`; entry.querySelector('button').addEventListener('click', () => selectPlayer(c)); root.append(entry); });
    $('codex-count').textContent = `${characters.length} ENTRIES`;
  }
  function openCodex() { $('modal-backdrop').classList.add('open'); $('modal-backdrop').setAttribute('aria-hidden', 'false'); }
  function closeCodex() { $('modal-backdrop').classList.remove('open'); $('modal-backdrop').setAttribute('aria-hidden', 'true'); }
  function switchRival() { const opponents = characters.filter(c => c.faction === 'vexos'); const idx = opponents.indexOf(state.rival); state.rival = opponents[(idx + 1) % opponents.length]; resetMatch(); showToast(`Rival changed: ${state.rival.name} & ${state.rival.partner}`); }
  function init() {
    renderRoster(); renderPlayer(); renderRival(); renderScore(); codex(); startRound();
    $('open-codex').addEventListener('click', openCodex); $('close-codex').addEventListener('click', closeCodex); $('modal-backdrop').addEventListener('click', e => { if (e.target === $('modal-backdrop')) closeCodex(); });
    $('reset-button').addEventListener('click', () => { resetMatch(); showToast('Match restarted. Good luck, brawler!'); }); $('play-again').addEventListener('click', () => { resetMatch(); });
    $('profile-button').addEventListener('click', () => showToast('Welcome back, Brawler. Your Resistance squad is ready.'));
    $('roster-toggle').addEventListener('click', openCodex); $('rival-emblem').addEventListener('click', switchRival);
    $('sound-toggle').addEventListener('click', () => { soundOn = !soundOn; $('sound-icon').textContent = soundOn ? '♪' : '×'; showToast(soundOn ? 'Battle sounds on.' : 'Battle sounds muted.'); if (soundOn) tone(660, .1); });
    document.querySelectorAll('.filter-chip').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.filter-chip').forEach(x => x.classList.toggle('selected', x === btn)); document.querySelectorAll('.codex-entry').forEach(entry => { entry.classList.toggle('hidden', btn.dataset.filter !== 'all' && entry.dataset.faction !== btn.dataset.filter); }); }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeCodex(); $('result-overlay').classList.remove('open'); } if ((e.code === 'Space' || e.key.toLowerCase() === 'r') && !e.repeat && state.phase === 'roll' && !$('modal-backdrop').classList.contains('open')) { e.preventDefault(); roll(); } });
    let seconds = 42; setInterval(() => { seconds++; $('match-clock').textContent = `${String(Math.floor(seconds / 60) + 3).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; }, 1000);
  }
  init();
})();
