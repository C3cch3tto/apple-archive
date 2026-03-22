// Macro Categories Configuration
const DEFAULT_CATEGORIES = [
  { id: 'Mac', icon: 'https://img.icons8.com/ios/100/mac-book-pro-m1.png', title: 'Mac', sub: ['MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio', 'Mac Pro'] },
  { id: 'iPad', icon: 'https://img.icons8.com/ios/100/ipad.png', title: 'iPad', sub: ['iPad Pro', 'iPad Air', 'iPad mini', 'iPad'] },
  { id: 'iPhone', icon: 'https://img.icons8.com/ios/100/iphone14-pro.png', title: 'iPhone', sub: ['iPhone Pro', 'iPhone Pro Max', 'iPhone Plus', 'iPhone', 'iPhone SE'] },
  { id: 'iPod', icon: 'https://img.icons8.com/ios/100/ipod-old.png', title: 'iPod', sub: ['iPod Classic', 'iPod Nano', 'iPod Touch', 'iPod Shuffle', 'iPod Mini'] },
  { id: 'Watch', icon: 'https://img.icons8.com/ios/100/apple-watch.png', title: 'Apple Watch', sub: ['Apple Watch Ultra', 'Apple Watch Series', 'Apple Watch SE'] },
  { id: 'AirPods', icon: 'https://img.icons8.com/ios/100/airpods-pro.png', title: 'AirPods', sub: ['AirPods Pro', 'AirPods Max', 'AirPods'] },
  { id: 'TV', icon: 'https://img.icons8.com/ios/100/apple-tv.png', title: 'Apple TV', sub: ['Apple TV 4K', 'Apple TV HD'] },
  { id: 'Accessories', icon: 'https://img.icons8.com/ios/100/ibeacon.png', title: 'Accessori', sub: ['Magic Keyboard', 'Magic Mouse', 'Pencil', 'AirPort', 'HomePod'] }
];

let MACRO_CATEGORIES = JSON.parse(localStorage.getItem('apple-archive-categories'));
if (!MACRO_CATEGORIES) {
  MACRO_CATEGORIES = DEFAULT_CATEGORIES;
  localStorage.setItem('apple-archive-categories', JSON.stringify(MACRO_CATEGORIES));
} else {
  // Aggiorna le icone con quelle nuove Icons8
  MACRO_CATEGORIES.forEach(cat => {
    const defaultCat = DEFAULT_CATEGORIES.find(d => d.id === cat.id);
    if (defaultCat) cat.icon = defaultCat.icon;
  });
  localStorage.setItem('apple-archive-categories', JSON.stringify(MACRO_CATEGORIES));
}

let CAPACITIES = JSON.parse(localStorage.getItem('apple-archive-capacities'));
if (!CAPACITIES) {
  CAPACITIES = {
    iPod: ['512MB', '1GB', '2GB', '4GB', '5GB', '6GB', '8GB', '10GB', '15GB', '16GB', '20GB', '30GB', '32GB', '40GB', '60GB', '64GB', '80GB', '120GB', '128GB', '160GB', '256GB'],
    iPad: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB', '2TB'],
    default: ['8GB', '16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB', '2TB']
  };
  localStorage.setItem('apple-archive-capacities', JSON.stringify(CAPACITIES));
}

let GENERATIONS = JSON.parse(localStorage.getItem('apple-archive-generations'));
if (!GENERATIONS) {
  GENERATIONS = {
    default: ["1ª Generazione", "2ª Generazione", "3ª Generazione", "4ª Generazione", "5ª Generazione", "6ª Generazione", "7ª Generazione", "8ª Generazione", "9ª Generazione", "10ª Generazione"]
  };
  localStorage.setItem('apple-archive-generations', JSON.stringify(GENERATIONS));
}

let MATERIALS = JSON.parse(localStorage.getItem('apple-archive-materials'));
if (!MATERIALS) {
  MATERIALS = { default: ["Fluoroelastomero", "Silicone Liquido", "Nylon Intrecciato", "Poliestere Intrecciato", "FineWoven", "Pelle", "Acciaio Inossidabile", "Titanio"] };
  localStorage.setItem('apple-archive-materials', JSON.stringify(MATERIALS));
}

let COMPATIBILITIES = JSON.parse(localStorage.getItem('apple-archive-compatibilities'));
if (!COMPATIBILITIES) {
  COMPATIBILITIES = { default: ["38", "40", "41", "42", "44", "45", "46", "49"] };
  localStorage.setItem('apple-archive-compatibilities', JSON.stringify(COMPATIBILITIES));
}

let STRAP_STYLES = JSON.parse(localStorage.getItem('apple-archive-strap-styles'));
if (!STRAP_STYLES) {
  STRAP_STYLES = { default: ["Alpine Loop", "Trail Loop", "Ocean Band", "Sport Band", "Nike Sport Band", "Sport Loop", "Nike Sport Loop", "Solo Loop", "Braided Solo Loop", "Woven Nylon", "Milanese Loop", "Classic Buckle", "Modern Buckle", "Leather Loop", "Leather Link", "Magnetic Link", "Link Bracelet", "Hermès", "Edition (2015)"] };
  localStorage.setItem('apple-archive-strap-styles', JSON.stringify(STRAP_STYLES));
}

let ACCESSORY_TYPES = JSON.parse(localStorage.getItem('apple-archive-accessory-types'));
if (!ACCESSORY_TYPES) {
  ACCESSORY_TYPES = {
    'Accessori per Mac': ['Magic Mouse', 'Magic Keyboard', 'Magic Trackpad', 'Alimentatore MagSafe', 'Cavo da USB-C a MagSafe 3', 'Cavo Thunderbolt 4'],
    'Accessori per iPad': ['Apple Pencil (2ª generazione)', 'Apple Pencil Pro', 'Apple Pencil (USB-C)', 'Magic Keyboard', 'Smart Folio', 'Smart Keyboard Folio'],
    'Accessori per iPhone': ['Alimentatore USB-C da 20W', 'MagSafe Charger', 'Portafoglio MagSafe', 'AirTag', 'Custodia MagSafe In Silicone', 'Custodia trasparente MagSafe'],
    'Accessori per Apple Watch': ['Cavo magnetico per la ricarica', 'Base per ricarica magnetica', 'Cinturini'],
    'Accessori per iPod': ['Cuffie EarPods', 'Cavo a 30 pin', 'Adattatore a 30 pin', 'Armband'],
    'Accessori per Apple TV': ['Siri Remote', 'Cavo Lightning'],
    'HomeKit': ['HomePod', 'HomePod mini'],
    default: ['Cavo', 'Alimentatore']
  };
  localStorage.setItem('apple-archive-accessory-types', JSON.stringify(ACCESSORY_TYPES));
}

// Ensure Cinturini exists in Watch
const watchCat = MACRO_CATEGORIES.find(c => c.id === 'Watch');
if (watchCat && !watchCat.sub.includes('Cinturini')) {
  watchCat.sub.push('Cinturini');
  localStorage.setItem('apple-archive-categories', JSON.stringify(MACRO_CATEGORIES));
}

// Update Accessories subcategories
const accCat = MACRO_CATEGORIES.find(c => c.id === 'Accessories');
if (accCat && !accCat.sub.includes('Accessori per Mac')) {
  if (accCat.sub.includes('Magic Keyboard')) {
    accCat.sub = ['Accessori per Mac', 'Accessori per iPad', 'Accessori per iPhone', 'Accessori per Apple Watch', 'Accessori per iPod', 'Accessori per Apple TV', 'HomeKit'];
  } else {
    accCat.sub.push('Accessori per Mac', 'Accessori per iPad', 'Accessori per iPhone', 'Accessori per Apple Watch', 'Accessori per iPod', 'Accessori per Apple TV', 'HomeKit');
  }
  localStorage.setItem('apple-archive-categories', JSON.stringify(MACRO_CATEGORIES));
}

// Mock Initial Data (for the wow factor based on user's screenshots)
const defaultProducts = [
  {
    id: '1', macroCategory: 'iPod', family: 'iPod Nano', model: 'A1199', generation: '2a', capacity: '2gb',
    color: '#3cb371', releaseDate: '2006-09-01', image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP31/sp31-nano-2nd_2x.jpg'
  },
  {
    id: '2', macroCategory: 'iPod', family: 'iPod Touch', model: 'A1574', generation: '6a', capacity: '32gb',
    color: '#d1d1d6', releaseDate: '2015-07-01', image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP722/SP722-ipod-touch-6th-gen_2x.png'
  },
  {
    id: '3', macroCategory: 'iPod', family: 'iPod Shuffle', model: 'A1373', generation: '4a', capacity: '2gb',
    color: '#ffcc00', releaseDate: '2010-09-01', image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP591/sp591-ipod-shuffle-4th_2x.png'
  }
];

// State Management
let products = JSON.parse(localStorage.getItem('apple-archive-data'));

if (!products || products.length === 0) {
  products = defaultProducts;
  saveData();
} else {
  // Migration: if macroCategory is missing on old data imported previously, fix it.
  let dirty = false;
  products = products.map(p => {
    if (!p.macroCategory) {
      p.macroCategory = 'iPod';
      dirty = true;
    }
    return p;
  });
  if (dirty) saveData();
}

let activeCategory = null; // null = Home, otherwise Macro Category ID
let editingId = null;

function saveData() {
  localStorage.setItem('apple-archive-data', JSON.stringify(products));
}

// DOM Elements
const categoryGridEl = document.getElementById('category-grid');
const productGridEl = document.getElementById('product-grid');
const countEl = document.getElementById('collection-count');
const pageTitle = document.getElementById('page-title');
const emptyStateEl = document.getElementById('empty-state');
const btnBack = document.getElementById('btn-back');
const btnAdd = document.getElementById('btn-add-product');
const btnEmptyAdd = document.getElementById('btn-empty-add');
const btnCloseModal = document.getElementById('btn-close-modal');
const addForm = document.getElementById('add-product-form');
const modalOverlay = document.getElementById('add-modal');
const fMacroCategory = document.getElementById('f-macroCategory');
const fFamily = document.getElementById('f-family');
const btnRemoveFamily = document.getElementById('btn-remove-family');
const btnRemoveCapacity = document.getElementById('btn-remove-capacity');
const btnRemoveGeneration = document.getElementById('btn-remove-generation');
const btnRemoveMaterial = document.getElementById('btn-remove-material');
const btnRemoveCompatibility = document.getElementById('btn-remove-compatibility');
const btnRemoveStrapStyle = document.getElementById('btn-remove-strapStyle');
const btnRemoveAccessoryType = document.getElementById('btn-remove-accessoryType');
const btnExport = document.getElementById('btn-export');
const btnImport = document.getElementById('btn-import');
const importFile = document.getElementById('import-file');

// UTILITIES
function getBadgeClass(family) {
  family = family.toLowerCase();
  if (family.includes('nano')) return 'badge-nano';
  if (family.includes('touch')) return 'badge-touch';
  if (family.includes('shuffle')) return 'badge-shuffle';
  if (family.includes('classic') || family.includes('mac')) return 'badge-classic';
  if (family.includes('phone')) return 'badge-iphone';
  return 'badge-classic'; // default
}

function formatDateDisplay(dateString) {
  if (!dateString) return '--/--/----';
  const d = new Date(dateString);
  return d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// RENDERING
function renderCategories() {
  categoryGridEl.innerHTML = '';

  MACRO_CATEGORIES.forEach(cat => {
    const totalItems = products.filter(p => p.macroCategory === cat.id).length;

    const div = document.createElement('div');
    div.className = 'category-card fade';
    div.onclick = () => openCategory(cat.id);

    div.innerHTML = `
      <div class="category-icon"><img src="${cat.icon}" alt="${cat.title}" class="category-icon-img"></div>
      <div class="category-title">${cat.title}</div>
      <div class="category-stats">${totalItems} dispositivi</div>
    `;

    categoryGridEl.appendChild(div);
  });
}

function openCategory(catId) {
  activeCategory = catId;
  const categoryConfig = MACRO_CATEGORIES.find(c => c.id === catId);

  // UI State Switch
  pageTitle.textContent = categoryConfig.title;
  categoryGridEl.style.display = 'none';
  productGridEl.style.display = 'grid';
  btnBack.style.display = 'flex';
  btnAdd.style.display = 'flex';
  if (btnExport) btnExport.style.display = 'none';
  if (btnImport) btnImport.style.display = 'none';

  // Setup the modal data dynamically
  fMacroCategory.value = catId;
  populateFamilies(catId);

  // Dynamic Generation and Model Name Fields
  // Dynamic Generation and Model Name Fields
  const fGeneration = document.getElementById('f-generation');
  const fgGeneration = document.getElementById('container-generation');
  const fModelName = document.getElementById('f-modelName');
  const fgModelName = document.getElementById('container-modelName');
  const fCellular = document.getElementById('f-cellular');
  const fgCellular = document.getElementById('container-cellular');
  const fCapacity = document.getElementById('f-capacity');
  const fgCapacity = document.getElementById('container-capacity');
  const fColor = document.getElementById('f-color');

  if (fgCapacity) fgCapacity.style.display = 'block';
  if (fCapacity) fCapacity.required = true;

  if (catId === 'iPod' || catId === 'TV' || catId === 'Watch') {
    fgGeneration.style.display = 'block';
    fgModelName.style.display = 'none';
    fModelName.value = '';
    if (fgCellular) fgCellular.style.display = 'none';
    if (fCellular) fCellular.value = 'No';
  } else if (catId === 'iPad') {
    fgGeneration.style.display = 'none';
    fGeneration.value = '';
    fgModelName.style.display = 'block';
    if (fgCellular) fgCellular.style.display = 'block';
  } else if (catId === 'AirPods') {
    fgGeneration.style.display = 'block';
    fgModelName.style.display = 'none';
    fModelName.value = '';
    if (fgCellular) fgCellular.style.display = 'none';
    if (fCellular) fCellular.value = 'No';
    if (fgCapacity) fgCapacity.style.display = 'none';
    if (fCapacity) {
      fCapacity.required = false;
      fCapacity.value = '';
    }
    if (fColor) fColor.value = '#ffffff';
  } else {
    fgGeneration.style.display = 'none';
    fGeneration.value = '';
    fgModelName.style.display = 'block';
    if (fgCellular) fgCellular.style.display = 'none';
    if (fCellular) fCellular.value = 'No';
  }

  // Dynamic Capacity Options
  populateCapacities(catId);
  populateGenerations(catId);
  populateMaterials(catId);
  populateCompatibilities(catId);
  populateStrapStyles(catId);

  applyFamilyLogic(fFamily.value);

  renderProducts();
}

function populateCapacities(catId) {
  const fCapacity = document.getElementById('f-capacity');
  btnRemoveCapacity.disabled = true;
  const capList = CAPACITIES[catId] || CAPACITIES.default;
  fCapacity.innerHTML = '<option value="" disabled selected>Seleziona...</option>';
  capList.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    let displayVal = val.toUpperCase();
    if (displayVal.includes('GB') && !displayVal.includes(' GB')) displayVal = displayVal.replace('GB', ' GB');
    if (displayVal.includes('MB') && !displayVal.includes(' MB')) displayVal = displayVal.replace('MB', ' MB');
    if (displayVal.includes('TB') && !displayVal.includes(' TB')) displayVal = displayVal.replace('TB', ' TB');

    opt.textContent = displayVal;
    fCapacity.appendChild(opt);
  });

  const optNew = document.createElement('option');
  optNew.value = '_new_';
  optNew.textContent = '+ Aggiungi nuovo taglio...';
  optNew.style.fontWeight = 'bold';
  optNew.style.color = 'var(--accent)';
  fCapacity.appendChild(optNew);
}

function populateGenerations(catId) {
  const fGen = document.getElementById('f-generation');
  if (!fGen) return;
  if (btnRemoveGeneration) btnRemoveGeneration.disabled = true;
  const genList = GENERATIONS[catId] || GENERATIONS.default;
  fGen.innerHTML = '<option value="" disabled selected>Seleziona o aggiungi...</option>';
  genList.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val;
    fGen.appendChild(opt);
  });

  const optNew = document.createElement('option');
  optNew.value = '_new_';
  optNew.textContent = '+ Aggiungi nuova...';
  optNew.style.fontWeight = 'bold';
  optNew.style.color = 'var(--accent)';
  fGen.appendChild(optNew);
}

function populateMaterials(catId) {
  const fMat = document.getElementById('f-material');
  if (!fMat) return;
  const btn = document.getElementById('btn-remove-material');
  if (btn) btn.disabled = true;
  const list = MATERIALS[catId] || MATERIALS.default;
  fMat.innerHTML = '<option value="" disabled selected>Seleziona o aggiungi...</option>';
  list.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val;
    fMat.appendChild(opt);
  });
  const optNew = document.createElement('option');
  optNew.value = '_new_';
  optNew.textContent = '+ Aggiungi nuovo...';
  optNew.style.fontWeight = 'bold';
  optNew.style.color = 'var(--accent)';
  fMat.appendChild(optNew);
}

function populateCompatibilities(catId) {
  const fComp = document.getElementById('f-compatibility');
  if (!fComp) return;
  const btn = document.getElementById('btn-remove-compatibility');
  if (btn) btn.disabled = true;
  const list = COMPATIBILITIES[catId] || COMPATIBILITIES.default;
  fComp.innerHTML = '<option value="" disabled selected>Seleziona o aggiungi...</option>';
  list.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val + (val.toLowerCase().includes('mm') ? '' : ' mm');
    fComp.appendChild(opt);
  });
  const optNew = document.createElement('option');
  optNew.value = '_new_';
  optNew.textContent = '+ Aggiungi nuova...';
  optNew.style.fontWeight = 'bold';
  optNew.style.color = 'var(--accent)';
  fComp.appendChild(optNew);
}

function populateStrapStyles(catId) {
  const fStrap = document.getElementById('f-strapStyle');
  if (!fStrap) return;
  const btn = document.getElementById('btn-remove-strapStyle');
  if (btn) btn.disabled = true;
  const list = STRAP_STYLES[catId] || STRAP_STYLES.default;
  fStrap.innerHTML = '<option value="" disabled selected>Seleziona o aggiungi...</option>';
  list.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val;
    fStrap.appendChild(opt);
  });
  const optNew = document.createElement('option');
  optNew.value = '_new_';
  optNew.textContent = '+ Aggiungi nuovo...';
  optNew.style.fontWeight = 'bold';
  optNew.style.color = 'var(--accent)';
  fStrap.appendChild(optNew);
}

function populateAccessoryTypes(family) {
  const fAcc = document.getElementById('f-accessoryType');
  if (!fAcc) return;
  const btn = document.getElementById('btn-remove-accessoryType');
  if (btn) btn.disabled = true;
  const list = ACCESSORY_TYPES[family] || ACCESSORY_TYPES.default;
  fAcc.innerHTML = '<option value="" disabled selected>Seleziona o aggiungi...</option>';
  list.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val;
    fAcc.appendChild(opt);
  });
  const optNew = document.createElement('option');
  optNew.value = '_new_';
  optNew.textContent = '+ Aggiungi nuovo...';
  optNew.style.fontWeight = 'bold';
  optNew.style.color = 'var(--accent)';
  fAcc.appendChild(optNew);
}

function populateFamilies(catId) {
  btnRemoveFamily.disabled = true;
  const categoryConfig = MACRO_CATEGORIES.find(c => c.id === catId);
  fFamily.innerHTML = '<option value="" disabled selected>Seleziona modello...</option>';
  if (categoryConfig && categoryConfig.sub) {
    categoryConfig.sub.forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub;
      opt.textContent = sub;
      fFamily.appendChild(opt);
    });
  }

  const optNewFam = document.createElement('option');
  optNewFam.value = '_new_';
  optNewFam.textContent = '+ Aggiungi nuovo modello...';
  optNewFam.style.fontWeight = 'bold';
  optNewFam.style.color = 'var(--accent)';
  fFamily.appendChild(optNewFam);
}

function applyFamilyLogic(family) {
  const fgCinturini1 = document.getElementById('container-cinturini-1');
  const fgCinturini2 = document.getElementById('container-cinturini-2');
  const fgColor = document.getElementById('f-color');
  const fgColorWrapper = fgColor ? fgColor.closest('.form-group') : null;
  const fDate = document.getElementById('f-date');
  const fDateLabel = document.getElementById('l-date');
  const fgGeneration = document.getElementById('container-generation');
  const fgCellular = document.getElementById('container-cellular');
  const fgCapacity = document.getElementById('container-capacity');
  const fgModel = document.getElementById('container-model');

  if (family === 'Cinturini') {
    if (fgModel) fgModel.style.display = 'none';
    if (fgGeneration) fgGeneration.style.display = 'none';
    if (fgCellular) fgCellular.style.display = 'none';
    if (fgCapacity) fgCapacity.style.display = 'none';
    if (document.getElementById('f-capacity')) document.getElementById('f-capacity').required = false;

    if (fDate) {
      fDate.type = 'number';
      fDate.placeholder = 'YYYY';
      fDate.min = '2015';
      fDate.max = new Date().getFullYear().toString();
    }
    if (fDateLabel) fDateLabel.textContent = 'Anno';

    if (fgCinturini1) fgCinturini1.style.display = 'flex';
    if (fgCinturini2) fgCinturini2.style.display = 'flex';
  } else if (activeCategory === 'Accessories') {
    if (fgModel) fgModel.style.display = 'flex';
    if (fgCinturini1) fgCinturini1.style.display = 'none';
    if (fgCinturini2) fgCinturini2.style.display = 'none';

    if (fgGeneration) fgGeneration.style.display = 'none';
    if (fgCellular) fgCellular.style.display = 'none';
    if (fgCapacity) fgCapacity.style.display = 'none';
    if (document.getElementById('f-capacity')) document.getElementById('f-capacity').required = false;
    if (fgColorWrapper) fgColorWrapper.style.display = 'block';

    if (fDate) {
      fDate.type = 'number';
      fDate.placeholder = 'YYYY';
      fDate.min = '1976';
      fDate.max = new Date().getFullYear().toString();
    }
    if (fDateLabel) fDateLabel.textContent = 'Anno';
  } else {
    if (fgModel) fgModel.style.display = 'flex';
    if (fgCinturini1) fgCinturini1.style.display = 'none';
    if (fgCinturini2) fgCinturini2.style.display = 'none';

    if (fDate) {
      fDate.type = 'date';
      fDate.placeholder = '';
      fDate.removeAttribute('min');
      fDate.removeAttribute('max');
    }
    if (fDateLabel) fDateLabel.textContent = 'Data di uscita / Acquisto';
    if (fgColorWrapper) fgColorWrapper.style.display = 'block';

    if (activeCategory === 'Watch') {
      if (fgGeneration) fgGeneration.style.display = 'block';
      if (fgCapacity) fgCapacity.style.display = 'block';
      if (document.getElementById('f-capacity')) document.getElementById('f-capacity').required = true;
    }
  }
}

function goHome() {
  activeCategory = null;
  pageTitle.textContent = 'Apple Archive';
  countEl.textContent = 'Seleziona una categoria';
  categoryGridEl.style.display = 'grid';
  productGridEl.style.display = 'none';
  emptyStateEl.style.display = 'none';
  btnBack.style.display = 'none';
  btnAdd.style.display = 'none';
  if (btnExport) btnExport.style.display = 'flex';
  if (btnImport) btnImport.style.display = 'flex';

  renderCategories();
}

function renderProducts() {
  if (!activeCategory) return;

  const filtered = products.filter(p => p.macroCategory === activeCategory);

  productGridEl.innerHTML = '';

  if (filtered.length === 0) {
    productGridEl.style.display = 'none';
    emptyStateEl.style.display = 'flex';
    countEl.textContent = 'Nessun Dispositivo';
    return;
  }

  productGridEl.style.display = 'grid';
  emptyStateEl.style.display = 'none';
  countEl.textContent = `${filtered.length} Dispositiv${filtered.length === 1 ? 'o' : 'i'}`;

  const sorted = [...filtered].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  sorted.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card fade';

    const imgUrl = product.image ? product.image : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23eeeeee" width="100" height="100"/><text x="50" y="55" font-size="30" font-family="sans-serif" fill="%23aaaaaa" text-anchor="middle"></text></svg>';

    card.innerHTML = `
      <button class="btn-delete" title="Rimuovi" onclick="deleteProduct('${product.id}', event)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
      <button class="btn-edit" title="Modifica" onclick="editProduct('${product.id}', event)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
      </button>
      <div class="card-image-wrap">
          <img src="${imgUrl}" alt="${product.family}" class="card-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><rect fill=&quot;%23eeeeee&quot; width=&quot;100&quot; height=&quot;100&quot;/><text x=&quot;50&quot; y=&quot;55&quot; font-size=&quot;30&quot; font-family=&quot;sans-serif&quot; fill=&quot;%23aaaaaa&quot; text-anchor=&quot;middle&quot;></text></svg>'">
      </div>
      <div class="card-content">
          <div class="badge ${getBadgeClass(product.family)}">${product.family}</div>
          
          <div class="spec-grid">
              <div class="spec-item">
                  <span class="spec-label">N. Modello</span>
                  <span class="spec-value">${product.model || '--'}</span>
              </div>
              <div class="spec-item" style="${product.modelName ? '' : 'display: none;'}">
                  <span class="spec-label">Nome Modello</span>
                  <span class="spec-value">${product.modelName}</span>
              </div>
              <div class="spec-item" style="${product.cellular === 'Sì' || product.macroCategory === 'iPad' ? '' : 'display: none;'}">
                  <span class="spec-label">Connettività</span>
                  <span class="spec-value">${product.cellular === 'Sì' ? 'Wi-Fi + Cellular' : 'Solo Wi-Fi'}</span>
              </div>
              <div class="spec-item" style="${product.generation || ['iPod', 'TV', 'AirPods', 'Watch'].includes(product.macroCategory) ? '' : 'display: none;'}">
                  <span class="spec-label">Generazione</span>
                  <span class="spec-value">${product.generation || '--'}</span>
              </div>
              <div class="spec-item" style="${product.capacity || !['AirPods'].includes(product.macroCategory) ? '' : 'display: none;'}">
                  <span class="spec-label">Memoria</span>
                  <span class="spec-value">${product.capacity || '--'}</span>
              </div>
              <div class="spec-item" style="${product.family === 'Cinturini' && product.strapStyle ? '' : 'display: none;'}">
                  <span class="spec-label">Stile</span>
                  <span class="spec-value">${product.strapStyle}</span>
              </div>
              <div class="spec-item" style="${product.family === 'Cinturini' && product.material ? '' : 'display: none;'}">
                  <span class="spec-label">Materiale</span>
                  <span class="spec-value">${product.material}</span>
              </div>
              <div class="spec-item" style="${product.family === 'Cinturini' && product.season ? '' : 'display: none;'}">
                  <span class="spec-label">Stagione</span>
                  <span class="spec-value">${product.season}</span>
              </div>
              <div class="spec-item" style="${product.family === 'Cinturini' && product.compatibility ? '' : 'display: none;'}">
                  <span class="spec-label">Misura</span>
                  <span class="spec-value">${product.compatibility} mm</span>
              </div>
              <div class="spec-item" style="${product.family === 'Cinturini' ? 'display: none;' : ''}">
                  <span class="spec-label">Colore</span>
                  <span class="spec-value">
                      <span class="color-dot" style="background-color: ${product.color || '#fff'}"></span>
                  </span>
              </div>
              <div class="spec-item" style="grid-column: 1 / -1; margin-top: 4px;">
                  <span class="spec-label">${(product.family === 'Cinturini' || product.macroCategory === 'Accessories') ? 'Anno' : 'Data di uscita'}</span>
                  <span class="spec-value format-date">${(product.family === 'Cinturini' || product.macroCategory === 'Accessories') ? (product.releaseDate || '--') : formatDateDisplay(product.releaseDate)}</span>
              </div>
          </div>
      </div>
    `;
    productGridEl.appendChild(card);
  });
}

// ACTIONS
window.deleteProduct = function (id, e) {
  e.stopPropagation();
  if (confirm('Sei sicuro di voler rimuovere questo prodotto?')) {
    products = products.filter(p => p.id !== id);
    saveData();
    renderCategories(); // updates stats in background
    renderProducts();   // updates current view
  }
}

window.editProduct = function (id, e) {
  e.stopPropagation();
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  editingId = id;
  document.querySelector('.modal-header h2').textContent = 'Modifica Dispositivo';

  openCategory(prod.macroCategory);

  setTimeout(() => {
    fFamily.value = prod.family || '';
    document.getElementById('f-model').value = prod.model || '';

    const fModelName = document.getElementById('f-modelName');
    if (fModelName) fModelName.value = prod.modelName || '';

    const genList = GENERATIONS[prod.macroCategory] || GENERATIONS.default;
    if (prod.generation && !genList.includes(prod.generation)) {
      if (!GENERATIONS[prod.macroCategory]) GENERATIONS[prod.macroCategory] = [...GENERATIONS.default];
      GENERATIONS[prod.macroCategory].push(prod.generation);
      localStorage.setItem('apple-archive-generations', JSON.stringify(GENERATIONS));
      populateGenerations(prod.macroCategory);
    }
    const fGen = document.getElementById('f-generation');
    if (fGen) fGen.value = prod.generation || '';

    const capList = CAPACITIES[prod.macroCategory] || CAPACITIES.default;
    if (prod.capacity && !capList.includes(prod.capacity.toLowerCase())) {
      CAPACITIES[prod.macroCategory].push(prod.capacity.toLowerCase());
      localStorage.setItem('apple-archive-capacities', JSON.stringify(CAPACITIES));
      populateCapacities(prod.macroCategory);
    }
    const fCap = document.getElementById('f-capacity');
    if (fCap) fCap.value = prod.capacity ? prod.capacity.toLowerCase() : '';

    const fCel = document.getElementById('f-cellular');
    if (fCel) fCel.value = prod.cellular || 'No';

    document.getElementById('f-color').value = prod.color || '#0071e3';
    document.getElementById('f-date').value = prod.releaseDate || '';
    document.getElementById('f-image').value = prod.image || '';

    const fSeason = document.getElementById('f-season');
    if (fSeason) fSeason.value = prod.season || '';
    const fCompatibility = document.getElementById('f-compatibility');
    if (fCompatibility) fCompatibility.value = prod.compatibility || '';
    const fStrapStyle = document.getElementById('f-strapStyle');
    if (fStrapStyle) fStrapStyle.value = prod.strapStyle || '';
    const fMaterial = document.getElementById('f-material');
    if (fMaterial) fMaterial.value = prod.material || '';

    applyFamilyLogic(prod.family);

    openModal();
  }, 10);
};

// MODAL LOGIC
function openModal() {
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  addForm.reset();
  editingId = null;
  document.querySelector('.modal-header h2').textContent = 'Nuovo Dispositivo';
}

btnBack.addEventListener('click', goHome);
btnAdd.addEventListener('click', openModal);
btnEmptyAdd.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// NEW GENERATION LOGIC
const fGenerationListener = document.getElementById('f-generation');
if (fGenerationListener) {
  fGenerationListener.addEventListener('change', (e) => {
    if (btnRemoveGeneration) btnRemoveGeneration.disabled = (!e.target.value || e.target.value === '_new_');
    if (e.target.value === '_new_') {
      const newGen = prompt('Inserisci la nuova generazione (es. "11ª Generazione"):');
      if (newGen && newGen.trim() !== '') {
        const formatted = newGen.trim();
        if (!GENERATIONS[activeCategory]) GENERATIONS[activeCategory] = [...GENERATIONS.default];
        if (!GENERATIONS[activeCategory].includes(formatted)) {
          GENERATIONS[activeCategory].push(formatted);
          localStorage.setItem('apple-archive-generations', JSON.stringify(GENERATIONS));
        }
        populateGenerations(activeCategory);
        fGenerationListener.value = formatted;
      } else {
        fGenerationListener.value = '';
      }
    }
  });
}

// NEW CAPACITY LOGIC
const fCapacityListener = document.getElementById('f-capacity');
fCapacityListener.addEventListener('change', (e) => {
  btnRemoveCapacity.disabled = (!e.target.value || e.target.value === '_new_');
  if (e.target.value === '_new_') {
    const newCap = prompt('Inserisci il nuovo taglio di memoria (es. "128GB"):');
    if (newCap && newCap.trim() !== '') {
      const formatted = newCap.trim().toLowerCase();
      if (!CAPACITIES[activeCategory]) {
        CAPACITIES[activeCategory] = [...CAPACITIES.default];
      }
      if (!CAPACITIES[activeCategory].includes(formatted)) {
        CAPACITIES[activeCategory].push(formatted);
        localStorage.setItem('apple-archive-capacities', JSON.stringify(CAPACITIES));
      }
      populateCapacities(activeCategory);
      fCapacityListener.value = formatted;
    } else {
      fCapacityListener.value = '';
    }
  }
});

// NEW MATERIAL LOGIC
const fMaterialListener = document.getElementById('f-material');
if (fMaterialListener) {
  fMaterialListener.addEventListener('change', (e) => {
    if (btnRemoveMaterial) btnRemoveMaterial.disabled = (!e.target.value || e.target.value === '_new_');
    if (e.target.value === '_new_') {
      const newVal = prompt('Inserisci il nuovo materiale:');
      if (newVal && newVal.trim() !== '') {
        const formatted = newVal.trim();
        if (!MATERIALS[activeCategory]) MATERIALS[activeCategory] = [...MATERIALS.default];
        if (!MATERIALS[activeCategory].includes(formatted)) {
          MATERIALS[activeCategory].push(formatted);
          localStorage.setItem('apple-archive-materials', JSON.stringify(MATERIALS));
        }
        populateMaterials(activeCategory);
        fMaterialListener.value = formatted;
      } else {
        fMaterialListener.value = '';
      }
    }
  });
}

// NEW COMPATIBILITY LOGIC
const fCompatibilityListener = document.getElementById('f-compatibility');
if (fCompatibilityListener) {
  fCompatibilityListener.addEventListener('change', (e) => {
    if (btnRemoveCompatibility) btnRemoveCompatibility.disabled = (!e.target.value || e.target.value === '_new_');
    if (e.target.value === '_new_') {
      const newVal = prompt('Inserisci la nuova compatibilità (es. "41"):');
      if (newVal && newVal.trim() !== '') {
        const formatted = newVal.trim();
        if (!COMPATIBILITIES[activeCategory]) COMPATIBILITIES[activeCategory] = [...COMPATIBILITIES.default];
        if (!COMPATIBILITIES[activeCategory].includes(formatted)) {
          COMPATIBILITIES[activeCategory].push(formatted);
          localStorage.setItem('apple-archive-compatibilities', JSON.stringify(COMPATIBILITIES));
        }
        populateCompatibilities(activeCategory);
        fCompatibilityListener.value = formatted;
      } else {
        fCompatibilityListener.value = '';
      }
    }
  });
}

// NEW STRAP STYLE LOGIC
const fStrapStyleListener = document.getElementById('f-strapStyle');
if (fStrapStyleListener) {
  fStrapStyleListener.addEventListener('change', (e) => {
    if (btnRemoveStrapStyle) btnRemoveStrapStyle.disabled = (!e.target.value || e.target.value === '_new_');
    if (e.target.value === '_new_') {
      const newVal = prompt('Inserisci il nuovo stile cinturino:');
      if (newVal && newVal.trim() !== '') {
        const formatted = newVal.trim();
        if (!STRAP_STYLES[activeCategory]) STRAP_STYLES[activeCategory] = [...STRAP_STYLES.default];
        if (!STRAP_STYLES[activeCategory].includes(formatted)) {
          STRAP_STYLES[activeCategory].push(formatted);
          localStorage.setItem('apple-archive-strap-styles', JSON.stringify(STRAP_STYLES));
        }
        populateStrapStyles(activeCategory);
        fStrapStyleListener.value = formatted;
      } else {
        fStrapStyleListener.value = '';
      }
    }
  });
}

// NEW FAMILY LOGIC
fFamily.addEventListener('change', (e) => {
  applyFamilyLogic(e.target.value);
  btnRemoveFamily.disabled = (!e.target.value || e.target.value === '_new_');
  if (e.target.value === '_new_') {
    const newFam = prompt('Inserisci il nuovo modello (es. "iPad Pro M4"):');
    if (newFam && newFam.trim() !== '') {
      const formatted = newFam.trim();
      const catObj = MACRO_CATEGORIES.find(c => c.id === activeCategory);
      if (catObj) {
        if (!catObj.sub.includes(formatted)) {
          catObj.sub.push(formatted);
          localStorage.setItem('apple-archive-categories', JSON.stringify(MACRO_CATEGORIES));
        }
        populateFamilies(activeCategory);
        fFamily.value = formatted;
        applyFamilyLogic(formatted);
      }
    } else {
      fFamily.value = '';
      applyFamilyLogic('');
    }
  }
});

// IMPORT/EXPORT LOGIC
if (btnExport) {
  btnExport.addEventListener('click', () => {
    const dataToExport = {
      'apple-archive-data': JSON.parse(localStorage.getItem('apple-archive-data')) || [],
      'apple-archive-categories': JSON.parse(localStorage.getItem('apple-archive-categories')),
      'apple-archive-capacities': JSON.parse(localStorage.getItem('apple-archive-capacities')),
      'apple-archive-generations': JSON.parse(localStorage.getItem('apple-archive-generations')),
      'apple-archive-materials': JSON.parse(localStorage.getItem('apple-archive-materials')),
      'apple-archive-compatibilities': JSON.parse(localStorage.getItem('apple-archive-compatibilities')),
      'apple-archive-strap-styles': JSON.parse(localStorage.getItem('apple-archive-strap-styles')),
      'apple-archive-accessory-types': JSON.parse(localStorage.getItem('apple-archive-accessory-types'))
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "apple-archive-backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
}

if (btnImport && importFile) {
  btnImport.addEventListener('click', () => {
    importFile.click();
  });

  importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const importedData = JSON.parse(event.target.result);
        // Controllo minimo di validità
        if (importedData['apple-archive-data']) {
          const keysToImport = [
            'apple-archive-data',
            'apple-archive-categories',
            'apple-archive-capacities',
            'apple-archive-generations',
            'apple-archive-materials',
            'apple-archive-compatibilities',
            'apple-archive-strap-styles',
            'apple-archive-accessory-types'
          ];

          if (confirm('Sei sicuro di voler importare questi dati? I dati attuali verranno sovrascritti permanentemente.')) {
            keysToImport.forEach(key => {
              if (importedData[key]) {
                localStorage.setItem(key, JSON.stringify(importedData[key]));
              }
            });
            alert('Dati importati con successo! La pagina verrà ricaricata.');
            location.reload();
          }
        } else {
          alert('Il file selezionato non è un backup valido.');
        }
      } catch (err) {
        alert('Errore durante la lettura del file. Assicurati che sia un JSON valido.');
        console.error(err);
      }
    };
    reader.readAsText(file);

    e.target.value = '';
  });
}



// REMOVAL LOGIC
btnRemoveFamily.addEventListener('click', () => {
  const val = fFamily.value;
  if (!val || val === '_new_') return;
  if (confirm(`Sei sicuro di voler rimuovere il modello "${val}" dall'elenco?`)) {
    const catObj = MACRO_CATEGORIES.find(c => c.id === activeCategory);
    if (catObj && catObj.sub.includes(val)) {
      catObj.sub = catObj.sub.filter(s => s !== val);
      localStorage.setItem('apple-archive-categories', JSON.stringify(MACRO_CATEGORIES));
      populateFamilies(activeCategory);
      fFamily.value = '';
      btnRemoveFamily.disabled = true;
    }
  }
});

btnRemoveGeneration.addEventListener('click', () => {
  const fGen = document.getElementById('f-generation');
  if (!fGen) return;
  const val = fGen.value;
  if (!val || val === '_new_') return;
  if (confirm(`Sei sicuro di voler rimuovere la "${val}" dall'elenco?`)) {
    if (GENERATIONS[activeCategory] && GENERATIONS[activeCategory].includes(val)) {
      GENERATIONS[activeCategory] = GENERATIONS[activeCategory].filter(s => s !== val);
      localStorage.setItem('apple-archive-generations', JSON.stringify(GENERATIONS));
      populateGenerations(activeCategory);
      fGen.value = '';
      if (btnRemoveGeneration) btnRemoveGeneration.disabled = true;
    }
  }
});

btnRemoveCapacity.addEventListener('click', () => {
  const val = fCapacityListener.value;
  if (!val || val === '_new_') return;
  if (confirm(`Sei sicuro di voler rimuovere il taglio "${val.toUpperCase()}" dall'elenco?`)) {
    if (CAPACITIES[activeCategory] && CAPACITIES[activeCategory].includes(val)) {
      CAPACITIES[activeCategory] = CAPACITIES[activeCategory].filter(s => s !== val);
      localStorage.setItem('apple-archive-capacities', JSON.stringify(CAPACITIES));
      populateCapacities(activeCategory);
      fCapacityListener.value = '';
      btnRemoveCapacity.disabled = true;
    }
  }
});

if (btnRemoveMaterial) {
  btnRemoveMaterial.addEventListener('click', () => {
    const val = fMaterialListener.value;
    if (!val || val === '_new_') return;
    if (confirm(`Sei sicuro di voler rimuovere "${val}" dall'elenco?`)) {
      if (MATERIALS[activeCategory] && MATERIALS[activeCategory].includes(val)) {
        MATERIALS[activeCategory] = MATERIALS[activeCategory].filter(s => s !== val);
        localStorage.setItem('apple-archive-materials', JSON.stringify(MATERIALS));
        populateMaterials(activeCategory);
        fMaterialListener.value = '';
        btnRemoveMaterial.disabled = true;
      }
    }
  });
}

if (btnRemoveCompatibility) {
  btnRemoveCompatibility.addEventListener('click', () => {
    const val = fCompatibilityListener.value;
    if (!val || val === '_new_') return;
    if (confirm(`Sei sicuro di voler rimuovere "${val}" dall'elenco?`)) {
      if (COMPATIBILITIES[activeCategory] && COMPATIBILITIES[activeCategory].includes(val)) {
        COMPATIBILITIES[activeCategory] = COMPATIBILITIES[activeCategory].filter(s => s !== val);
        localStorage.setItem('apple-archive-compatibilities', JSON.stringify(COMPATIBILITIES));
        populateCompatibilities(activeCategory);
        fCompatibilityListener.value = '';
        btnRemoveCompatibility.disabled = true;
      }
    }
  });
}

if (btnRemoveStrapStyle) {
  btnRemoveStrapStyle.addEventListener('click', () => {
    const val = fStrapStyleListener.value;
    if (!val || val === '_new_') return;
    if (confirm(`Sei sicuro di voler rimuovere "${val}" dall'elenco?`)) {
      if (STRAP_STYLES[activeCategory] && STRAP_STYLES[activeCategory].includes(val)) {
        STRAP_STYLES[activeCategory] = STRAP_STYLES[activeCategory].filter(s => s !== val);
        localStorage.setItem('apple-archive-strap-styles', JSON.stringify(STRAP_STYLES));
        populateStrapStyles(activeCategory);
        fStrapStyleListener.value = '';
        btnRemoveStrapStyle.disabled = true;
      }
    }
  });
}

if (btnRemoveAccessoryType) {
  btnRemoveAccessoryType.addEventListener('click', () => {
    const val = fAccessoryTypeListener.value;
    if (!val || val === '_new_') return;
    if (confirm(`Sei sicuro di voler rimuovere "${val}" dall'elenco per questo prodotto?`)) {
      const currentFamily = document.getElementById('f-family').value;
      if (ACCESSORY_TYPES[currentFamily] && ACCESSORY_TYPES[currentFamily].includes(val)) {
        ACCESSORY_TYPES[currentFamily] = ACCESSORY_TYPES[currentFamily].filter(s => s !== val);
        localStorage.setItem('apple-archive-accessory-types', JSON.stringify(ACCESSORY_TYPES));
        populateAccessoryTypes(currentFamily);
        fAccessoryTypeListener.value = '';
        btnRemoveAccessoryType.disabled = true;
      }
    }
  });
}

// FORM SUBMIT
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fMacro = document.getElementById('f-macroCategory').value;
  const fFam = document.getElementById('f-family').value.trim();

  const productData = {
    macroCategory: fMacro,
    family: fFam,
    model: document.getElementById('f-model').value,
    modelName: document.getElementById('f-modelName').value,
    generation: document.getElementById('f-generation').value,
    cellular: document.getElementById('f-cellular') ? document.getElementById('f-cellular').value : 'No',
    capacity: document.getElementById('f-capacity') ? document.getElementById('f-capacity').value : '',
    color: document.getElementById('f-color') ? document.getElementById('f-color').value : '',
    releaseDate: document.getElementById('f-date').value,
    image: document.getElementById('f-image').value,
    season: document.getElementById('f-season') ? document.getElementById('f-season').value : '',
    compatibility: document.getElementById('f-compatibility') ? document.getElementById('f-compatibility').value : '',
    strapStyle: document.getElementById('f-strapStyle') ? document.getElementById('f-strapStyle').value : '',
    material: document.getElementById('f-material') ? document.getElementById('f-material').value : '',
    accessoryType: document.getElementById('f-accessoryType') ? document.getElementById('f-accessoryType').value : ''
  };

  if (editingId) {
    const pIndex = products.findIndex(p => p.id === editingId);
    if (pIndex > -1) {
      products[pIndex] = { ...products[pIndex], ...productData };
    }
  } else {
    productData.id = Date.now().toString();
    products.push(productData);
  }

  saveData();
  renderProducts();  // render new item
  renderCategories(); // update background counts
  closeModal();
});

// START
goHome();
