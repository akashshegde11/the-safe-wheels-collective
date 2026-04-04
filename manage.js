const fs = require('fs');
const readline = require('readline');
const path = require('path');

const SCRIPT_PATH = path.join(__dirname, 'script.js');

const EXITS = ['tumakuru', 'hassana', 'magadi', 'mysuru', 'kanakapura', 'hosur', 'hoskote', 'devanahalli', 'specials'];

const VALID_ICONS = [
  'fa-car', 'fa-motorcycle', 'fa-hiking', 'fa-triangle-exclamation', 'fa-gopuram',
  'fa-utensils', 'fa-x', 'fa-cross', 'fa-droplet', 'fa-tree', 'fa-s',
  'fa-flag-checkered', 'fa-baseball-bat-ball', 'fa-indian-rupee-sign', 'fa-leaf'
];

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(r => rl.question(q, a => r(a.trim())));

function parseDestinations(src) {
  const match = src.match(/^const destinations = (\{[\s\S]*?\n\});/m);
  if (!match) { console.error('Could not parse destinations object.'); process.exit(1); }
  return eval('(' + match[1] + ')');
}

function buildEntry(d) {
  let lines = [];
  lines.push(`    {`);
  lines.push(`      name: ${JSON.stringify(d.name)},`);
  lines.push(`      link: ${JSON.stringify(d.link)},`);
  if (d.icons && d.icons.length) lines.push(`      icons: [${d.icons.map(i => JSON.stringify(i)).join(', ')}],`);
  if (d.note) lines.push(`      note: ${JSON.stringify(d.note)},`);
  if (d.distance !== undefined) lines.push(`      distance: ${d.distance},`);
  if (d.state) lines.push(`      state: ${JSON.stringify(d.state)},`);
  if (d.altExits && d.altExits.length) {
    lines.push(`      altExits: [`);
    d.altExits.forEach((a, ai) => {
      let parts = [`exit: ${JSON.stringify(a.exit)}`];
      if (a.note) parts.push(`note: ${JSON.stringify(a.note)}`);
      if (a.distance !== undefined) parts.push(`distance: ${a.distance}`);
      lines.push(`        { ${parts.join(', ')} }${ai < d.altExits.length - 1 ? ',' : ''}`);
    });
    lines.push(`      ],`);
  }
  // remove trailing comma from last property
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push(`    }`);
  return lines.join('\n');
}

function rebuildDestinationsBlock(dest) {
  let out = 'const destinations = {\n';
  const keys = EXITS.filter(k => dest[k]);
  keys.forEach((key, ki) => {
    out += `  ${key}: [\n`;
    dest[key].forEach((d, di) => {
      out += buildEntry(d);
      out += di < dest[key].length - 1 ? ',\n' : '\n';
    });
    out += `  ]` + (ki < keys.length - 1 ? ',' : '') + '\n';
  });
  out += '};';
  return out;
}

async function main() {
  let src = fs.readFileSync(SCRIPT_PATH, 'utf-8');
  let dest = parseDestinations(src);

  console.log('\n=== TSWC Destination Manager ===\n');
  console.log('Exits:');
  EXITS.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));

  while (true) {

  const exitInput = (await ask('\nExit (number or name): ')).trim().toLowerCase();
  const exitNum = parseInt(exitInput);
  const exit = (!isNaN(exitNum) && exitNum >= 1 && exitNum <= EXITS.length) ? EXITS[exitNum - 1] : exitInput;
  if (!EXITS.includes(exit)) { console.log('Invalid exit.'); continue; }

  const name = (await ask('Name: ')).trim();
  if (!name) { console.log('Name is required.'); continue; }

  const existing = dest[exit].find(d => d.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    console.log(`\nFound existing entry: "${existing.name}"`);
    console.log('Press Enter to keep current value, or type a new one.\n');
  }

  const linkInput = (await ask(`Link${existing ? ` [${existing.link}]` : ''}: `)).trim();
  const link = linkInput || (existing ? existing.link : '');
  if (!link) { console.log('Link is required.'); continue; }

  console.log('\nAvailable icons:');
  VALID_ICONS.forEach((ic, i) => console.log(`  ${i + 1}. ${ic}`));
  const currentIcons = existing && existing.icons ? existing.icons.join(', ') : '';
  const iconsInput = (await ask(`Icons (comma-separated numbers or names)${currentIcons ? ` [${currentIcons}]` : ''}: `)).trim();
  let icons;
  if (iconsInput === '' && existing) {
    icons = existing.icons || [];
  } else if (iconsInput === '') {
    icons = [];
  } else {
    icons = iconsInput.split(',').map(s => s.trim()).map(s => {
      const num = parseInt(s);
      if (!isNaN(num) && num >= 1 && num <= VALID_ICONS.length) return VALID_ICONS[num - 1];
      if (VALID_ICONS.includes(s)) return s;
      console.log(`  Warning: "${s}" is not a valid icon, skipping.`);
      return null;
    }).filter(Boolean);
  }

  const noteInput = (await ask(`Note${existing && existing.note ? ` [${existing.note}]` : ''}: `)).trim();
  const note = noteInput || (existing ? existing.note : undefined);

  const distInput = (await ask(`Distance in km${existing && existing.distance !== undefined ? ` [${existing.distance}]` : ''}: `)).trim();
  let distance;
  if (distInput === '' && existing) distance = existing.distance;
  else if (distInput !== '') distance = parseInt(distInput);

  const stateInput = (await ask(`State${existing && existing.state ? ` [${existing.state}]` : ''}: `)).trim();
  const state = stateInput || (existing ? existing.state : undefined);

  // Alt exits
  let altExits = existing && existing.altExits ? [...existing.altExits] : [];
  const currentAlt = altExits.length ? altExits.map(a => a.exit).join(', ') : '';
  const altInput = (await ask(`Alt exits (comma-separated numbers or names)${currentAlt ? ` [${currentAlt}]` : ''}: `)).trim();
  if (altInput !== '') {
    const altExitNames = altInput.split(',').map(s => {
      const t = s.trim().toLowerCase();
      const n = parseInt(t);
      return (!isNaN(n) && n >= 1 && n <= EXITS.length) ? EXITS[n - 1] : t;
    }).filter(e => EXITS.includes(e) && e !== exit);
    altExits = [];
    for (const ae of altExitNames) {
      const old = (existing && existing.altExits || []).find(a => a.exit === ae);
      const aeNote = (await ask(`  Note for ${ae} route${old && old.note ? ` [${old.note}]` : ''}: `)).trim() || (old ? old.note : undefined);
      const aeDist = (await ask(`  Distance via ${ae}${old && old.distance !== undefined ? ` [${old.distance}]` : ''}: `)).trim();
      let aeDistance;
      if (aeDist === '' && old) aeDistance = old.distance;
      else if (aeDist !== '') aeDistance = parseInt(aeDist);
      const altEntry = { exit: ae };
      if (aeNote) altEntry.note = aeNote;
      if (aeDistance !== undefined) altEntry.distance = aeDistance;
      altExits.push(altEntry);
    }
  }

  const entry = { name: existing ? existing.name : name, link };
  if (icons.length) entry.icons = icons;
  if (note) entry.note = note;
  if (distance !== undefined) entry.distance = distance;
  if (state) entry.state = state;
  if (altExits.length) entry.altExits = altExits;

  // Preview
  console.log('\n--- Preview ---');
  console.log(buildEntry(entry));
  console.log('---------------\n');

  const confirm = (await ask(`${existing ? 'Update' : 'Add'} this entry? (y/n): `)).trim().toLowerCase();
  if (confirm !== 'y') { console.log('Cancelled.'); continue; }

  if (existing) {
    const idx = dest[exit].indexOf(existing);
    dest[exit][idx] = entry;
  } else {
    dest[exit].push(entry);
    dest[exit].sort((a, b) => a.name.localeCompare(b.name));
  }

  const newBlock = rebuildDestinationsBlock(dest);
  const oldBlock = src.match(/^const destinations = \{[\s\S]*?\n\};/m)[0];
  const newSrc = src.replace(oldBlock, newBlock);

  fs.writeFileSync(SCRIPT_PATH, newSrc, 'utf-8');
  src = newSrc;
  console.log(`\nDone! ${existing ? 'Updated' : 'Added'} "${entry.name}" in ${exit}.`);

  const again = (await ask('\nAdd/update another? (y/n): ')).trim().toLowerCase();
  if (again !== 'y') break;
  dest = parseDestinations(src);
  console.log();
  }

  rl.close();
}

main();
