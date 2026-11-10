"use strict";
const DEMO_ASSET_BASE = new URL("assets/demo/", document.currentScript.src).href;

// Bilingual copy and fixture data are intentionally separate from view logic.
// STEP5 can call window.SmartLandMyKey.setLanguage("en" | "ar").
const copy = {
  ar: { title:"MyKey | تجربة تفاعلية افتراضية", skip:"انتقل إلى المحتوى", brandHome:"Smart Land - الرئيسية", menu:"القائمة", navLabel:"التنقل الرئيسي", about:"من نحن",services:"حلولنا",projects:"مشاريعنا",media:"شاهد القصة",contact:"لنتواصل",breadcrumbs:"مسار التنقل",home:"الرئيسية",interactiveDemo:"التجربة التفاعلية",eyebrow:"جرّب الفكرة / نموذج تفاعلي",tagline:"الفرصة تبدأ بخيارٍ أوضح.",intro:"ابحث بين عقارات ومركبات افتراضية، خصّص النتائج، واحفظ ما يلفت انتباهك. تجربة صغيرة، تعمل بالكامل داخل متصفحك.",demoOnly:"تجربة، وليست سوقاً حقيقية",fictionNotice:"كل العروض والأحياء والأسعار نماذج افتراضية بالدولار الأمريكي. لا توجد إعلانات حقيقية أو حجوزات أو مدفوعات أو مراسلة بائعين.",workspaceLabel:"البحث في العروض الافتراضية",filterHeading:"اعثر على اختيارك",searchLabel:"ابحث بالاسم أو الحي أو النوع",searchPlaceholder:"مثلاً: شقة، حي النور، SUV",categoryLabel:"فئة العرض",allCategories:"كل الفئات",properties:"العقارات",vehicles:"المركبات",modeLabel:"نوع العرض",allModes:"بيع وإيجار",forSale:"للبيع",forRent:"للإيجار",priceLabel:"السعر الأقصى (USD افتراضي)",pricePlaceholder:"بلا حد أقصى",priceHelp:"الإيجار شهري؛ البيع بسعر إجمالي. اختر نوع العرض عند المقارنة.",reset:"إعادة ضبط الفلاتر",storageNote:"تُحفظ المفضلة على جهازك عند توافر التخزين المحلي. لا تُرسل أي بيانات.",sampleInventory:"المخزون التجريبي",sortLabel:"ترتيب النتائج",sortFeatured:"الترتيب الافتراضي",sortLow:"السعر: الأقل أولاً",sortHigh:"السعر: الأعلى أولاً",sortName:"الاسم",noResultsTitle:"لا توجد خيارات مطابقة الآن.",noResultsText:"جرّب كلمات أو فلاتر أوسع، أو أعد ضبط الخيارات لرؤية المخزون الافتراضي كاملاً.",bottomNote:"هذه تجربة تعليمية لواجهة MyKey. المعلومات والصور توضيحية، وليست توصية مالية أو عرض بيع أو إيجار فعلياً.",behindDemo:"ما وراء التجربة",exitTitle:"فكرة لها قصة.",exitText:"تعرّف على الاحتياج ومسار التصميم والواجهات التصوّرية للمشروع.",projectStory:"قصة مشروع MyKey",course:"مشروع مقرر نظم الوسائط المتعددة",backTop:"إلى الأعلى",footerNotice:"Smart Land شركة افتراضية ضمن مشروع تعليمي. المخزون والأسعار والأحياء والميزات المعروضة بيانات تجريبية، والمفضلة محلية على جهاز المستخدم.",closeDetails:"إغلاق التفاصيل",virtualPrice:"سعر افتراضي",featureHeading:"تفاصيل النموذج",dialogFiction:"هذا عرض افتراضي للشرح فقط. لا يمكن حجزه أو شراؤه أو الاتصال بمعلن من هذا النموذج.",viewDetails:"عرض التفاصيل",addFavourite:"حفظ في المفضلة",removeFavourite:"إزالة من المفضلة",favouritesOnly:"المفضلة فقط",favouriteSaved:"أُضيف إلى المفضلة.",favouriteRemoved:"أُزيل من المفضلة.",sessionOnly:"المفضلة محفوظة لهذه الجلسة فقط.",resetDone:"أُعيد ضبط الفلاتر والترتيب. بقيت مفضلتك محفوظة.",results:"عروض افتراضية",of:"من أصل",allShown:"جميع العروض",searchPrefix:"بحث",capPrefix:"حتى",favouritesActive:"المفضلة",monthly:"/ شهر",usd:"USD",virtualListing:"عرض افتراضي",property:"عقار",vehicle:"مركبة",apartment:"شقة",villa:"فيلا",office:"مكتب",sedan:"سيدان",suv:"SUV",area:"المساحة",bedrooms:"غرف النوم",bathrooms:"الحمّامات",floor:"الطابق",parking:"موقف سيارة",modelYear:"سنة الصنع",mileage:"المسافة المقطوعة",transmission:"ناقل الحركة",fuel:"نوع الوقود",seats:"المقاعد",automatic:"أوتوماتيكي",petrol:"بنزين",hybrid:"هجين",available:"متاح في التصوّر",sqm:"م²",km:"كم",sampleRef:"مرجع النموذج" },
  en: { title:"MyKey | Fictional interactive demo",skip:"Skip to content",brandHome:"Smart Land - home",menu:"Menu",navLabel:"Main navigation",about:"About",services:"Services",projects:"Projects",media:"Watch the story",contact:"Contact",breadcrumbs:"Breadcrumbs",home:"Home",interactiveDemo:"Interactive demo",eyebrow:"Try the idea / interactive prototype",tagline:"A clearer choice opens the next door.",intro:"Explore fictional properties and vehicles, refine your results, and save your favourites. This small demo runs entirely in your browser.",demoOnly:"A demo, not a real marketplace",fictionNotice:"All listings, neighbourhoods and USD prices are fictional samples. There are no real ads, bookings, payments or seller messages.",workspaceLabel:"Browse fictional listings",filterHeading:"Find your next choice",searchLabel:"Search name, neighbourhood or type",searchPlaceholder:"For example: apartment, Noor, SUV",categoryLabel:"Listing category",allCategories:"All categories",properties:"Properties",vehicles:"Vehicles",modeLabel:"Offer type",allModes:"Sale and rent",forSale:"For sale",forRent:"For rent",priceLabel:"Maximum price (sample USD)",pricePlaceholder:"No maximum",priceHelp:"Rent is monthly; sale prices are totals. Choose an offer type when comparing.",reset:"Reset filters",storageNote:"Favourites stay on this device when local storage is available. No data is sent.",sampleInventory:"SAMPLE INVENTORY",sortLabel:"Sort results",sortFeatured:"Default order",sortLow:"Price: low to high",sortHigh:"Price: high to low",sortName:"Name",noResultsTitle:"No matching choices yet.",noResultsText:"Try a broader search or fewer filters, or reset to see all fictional listings.",bottomNote:"This is an educational MyKey interface demo. Its information and images are illustrative, not financial advice or a real sale or rental offer.",behindDemo:"BEHIND THE EXPERIENCE",exitTitle:"Every idea has a story.",exitText:"Explore the need, design journey and conceptual interfaces behind this project.",projectStory:"MyKey project story",course:"Multimedia Systems course project",backTop:"Back to top",footerNotice:"Smart Land is a fictional company in an educational project. Inventory, prices, neighbourhoods and features are sample data. Favourites are stored locally on the user's device.",closeDetails:"Close listing details",virtualPrice:"Sample price",featureHeading:"Sample specifications",dialogFiction:"This fictional listing is for demonstration only. You cannot book it, purchase it or contact a seller from this demo.",viewDetails:"View details",addFavourite:"Save favourite",removeFavourite:"Remove favourite",favouritesOnly:"Favourites only",favouriteSaved:"Added to favourites.",favouriteRemoved:"Removed from favourites.",sessionOnly:"Favourites are kept for this session only.",resetDone:"Filters and sorting reset. Your favourites are still saved.",results:"fictional listings",of:"of",allShown:"All listings",searchPrefix:"Search",capPrefix:"Up to",favouritesActive:"Favourites",monthly:"/ month",usd:"USD",virtualListing:"Sample listing",property:"Property",vehicle:"Vehicle",apartment:"Apartment",villa:"Villa",office:"Office",sedan:"Sedan",suv:"SUV",area:"Area",bedrooms:"Bedrooms",bathrooms:"Bathrooms",floor:"Floor",parking:"Parking",modelYear:"Model year",mileage:"Mileage",transmission:"Transmission",fuel:"Fuel",seats:"Seats",automatic:"Automatic",petrol:"Petrol",hybrid:"Hybrid",available:"Included in concept",sqm:"m²",km:"km",sampleRef:"Sample reference" }
};

const listings = [
  {id:"mykey-01",category:"property",subtype:"apartment",mode:"sale",price:72000,title:{ar:"شقة الحديقة",en:"Garden Apartment"},neighbourhood:{ar:"حي الحديقة",en:"Garden Quarter"},description:{ar:"شقة افتراضية بمساحة معيشة مضيئة وشرفة صغيرة، لتوضيح طريقة عرض تفاصيل عقار في MyKey.",en:"A fictional apartment with a bright living area and a small balcony, showing how property details might appear in MyKey."},features:{area:92,bedrooms:2,bathrooms:1,floor:3}},
  {id:"mykey-02",category:"property",subtype:"apartment",mode:"rent",price:450,title:{ar:"شقة النور",en:"Noor Apartment"},neighbourhood:{ar:"حي النور",en:"Noor Quarter"},description:{ar:"نموذج لشقة إيجار افتراضية ذات مخطط مدمج وغرفة معيشة هادئة. السعر المعروض شهري وتوضيحي فقط.",en:"A sample rental apartment with a compact layout and a calm living room. The displayed monthly price is illustrative only."},features:{area:78,bedrooms:2,bathrooms:1,floor:2}},
  {id:"mykey-03",category:"property",subtype:"villa",mode:"sale",price:165000,title:{ar:"فيلا المرتفعات",en:"Highlands Villa"},neighbourhood:{ar:"حي المرتفعات",en:"Highlands Quarter"},description:{ar:"فيلا تصوّرية تجمع مساحة داخلية واسعة وحديقة صغيرة. الصور والمواصفات لا تشير إلى عقار موجود.",en:"A conceptual villa with generous indoor space and a small garden. Its image and specifications do not represent an actual property."},features:{area:240,bedrooms:4,bathrooms:3,parking:"available"}},
  {id:"mykey-04",category:"property",subtype:"office",mode:"rent",price:780,title:{ar:"مكتب الأعمال",en:"Business Studio"},neighbourhood:{ar:"حي الأعمال",en:"Business Quarter"},description:{ar:"نموذج لمكتب افتراضي يوضّح عرض مساحة العمل والتجهيزات الأساسية ضمن فئة العقارات التجارية.",en:"A fictional office illustrating how workspace and basic facilities could be presented in commercial property listings."},features:{area:74,bathrooms:1,floor:4,parking:"available"}},
  {id:"mykey-05",category:"vehicle",subtype:"sedan",mode:"sale",price:12500,title:{ar:"سيدان المدينة",en:"City Sedan"},neighbourhood:{ar:"حي السلام",en:"Salam Quarter"},description:{ar:"مركبة سيدان افتراضية بلون أخضر هادئ. المواصفات والسعر بيانات تجريبية لواجهة العرض وليست تقييماً لمركبة فعلية.",en:"A fictional sedan in a muted green finish. Specifications and price are interface sample data, not an appraisal of a real vehicle."},features:{modelYear:2022,mileage:43000,transmission:"automatic",fuel:"petrol",seats:5}},
  {id:"mykey-06",category:"vehicle",subtype:"suv",mode:"sale",price:24000,title:{ar:"مركبة الواحة SUV",en:"Oasis SUV"},neighbourhood:{ar:"حي الواحة",en:"Oasis Quarter"},description:{ar:"نموذج لمركبة SUV افتراضية بمقصورة رحبة. يُستخدم هنا لتجربة البحث والتصفية والمقارنة البصرية فقط.",en:"A fictional SUV with a spacious cabin. It is included only to demonstrate searching, filtering and visual comparison."},features:{modelYear:2023,mileage:19000,transmission:"automatic",fuel:"hybrid",seats:5}}
];

let language = document.documentElement.lang.startsWith("en") ? "en" : "ar";
let favourites = new Set();
let persistent = true;
const storageKey = "smartland.mykey.favourites.v1";
try {
  const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (Array.isArray(stored)) favourites = new Set(stored.filter(id => listings.some(item => item.id === id)));
} catch { persistent = false; }
const state = {search:"",category:"all",mode:"all",cap:"",sort:"featured",favouritesOnly:false};
const controls = {
  search:document.querySelector("#listing-search"),category:document.querySelector("#category-filter"),
  mode:document.querySelector("#mode-filter"),cap:document.querySelector("#price-cap"),sort:document.querySelector("#sort-order")
};
const grid = document.querySelector("#listing-grid");
const resultCount = document.querySelector("#result-count");
const favouritesFilter = document.querySelector("#favourites-only");
const status = document.querySelector("#demo-status");
const dialog = document.querySelector("#listing-dialog");
const dialogClose = dialog.querySelector(".listing-dialog-close");
let activeListing = null;
let dialogTrigger = null;
let lastStatus = null;
function t(key) { return copy[language][key] || key; }
function text(value) { return typeof value === "object" ? value[language] : t(value); }
function escapeText(value) { return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
function number(value) { return new Intl.NumberFormat(language === "ar" ? "ar-SY" : "en-US", {numberingSystem:"latn",maximumFractionDigits:0}).format(value); }
function price(item) { return `${number(item.price)} ${t("usd")}${item.mode === "rent" ? ` ${t("monthly")}` : ""}`; }
function normalize(value) { return String(value).toLowerCase().normalize("NFKD").replace(/[\u064b-\u065f]/g,"").replace(/[أإآ]/g,"ا").trim(); }
function featureValue(key,value) {
  if (typeof value === "string") return t(value);
  if (key === "area") return `${number(value)} ${t("sqm")}`;
  if (key === "mileage") return `${number(value)} ${t("km")}`;
  return number(value);
}
function filteredListings() {
  const query = normalize(state.search);
  const result = listings.filter(item => {
    const haystack = normalize([item.title.ar,item.title.en,item.neighbourhood.ar,item.neighbourhood.en,copy.ar[item.subtype],copy.en[item.subtype],copy.ar[item.category],copy.en[item.category]].join(" "));
    return (!query || haystack.includes(query)) && (state.category === "all" || item.category === state.category) && (state.mode === "all" || item.mode === state.mode) && (state.cap === "" || item.price <= Math.max(0,Number(state.cap))) && (!state.favouritesOnly || favourites.has(item.id));
  });
  if (state.sort === "price-asc") result.sort((a,b) => a.price - b.price);
  if (state.sort === "price-desc") result.sort((a,b) => b.price - a.price);
  if (state.sort === "name") result.sort((a,b) => text(a.title).localeCompare(text(b.title),language));
  return result;
}
function renderCard(item) {
  const saved = favourites.has(item.id);
  const brief = item.category === "property" ? `${featureValue("area",item.features.area)} · ${t(item.subtype)}` : `${item.features.modelYear} · ${t(item.features.transmission)}`;
  return `<article class="listing-card" data-listing-id="${item.id}"><div class="listing-card-image"><button class="listing-image-open" type="button" data-action="details" data-id="${item.id}" aria-label="${escapeText(`${t("viewDetails")}: ${text(item.title)}`)}"><img src="${DEMO_ASSET_BASE}${item.id}.webp" width="1200" height="800" loading="lazy" alt="${escapeText(`${text(item.title)} - ${t("virtualListing")}`)}"><span class="listing-mode">${t(item.mode === "sale" ? "forSale" : "forRent")}</span></button><button class="listing-favourite ${saved ? "saved" : ""}" type="button" data-action="favourite" data-id="${item.id}" aria-pressed="${saved}" aria-label="${escapeText(`${t(saved ? "removeFavourite" : "addFavourite")}: ${text(item.title)}`)}"><span aria-hidden="true">${saved ? "♥" : "♡"}</span></button><span class="sample-image-label">${t("virtualListing")}</span></div><div class="listing-card-content"><div class="listing-card-category"><span>${t(item.subtype)}</span><span>${escapeText(brief)}</span></div><h3><button class="listing-title" type="button" data-action="details" data-id="${item.id}">${escapeText(text(item.title))}</button></h3><p class="listing-neighbourhood"><span aria-hidden="true">⌖</span>${escapeText(text(item.neighbourhood))}</p><div class="listing-card-bottom"><p class="listing-price" dir="ltr">${escapeText(price(item))}<small>${t("virtualPrice")}</small></p><button class="listing-details" type="button" data-action="details" data-id="${item.id}"><span>${t("viewDetails")}</span><span aria-hidden="true">↗</span></button></div></div></article>`;
}
function render() {
  const items = filteredListings();
  grid.innerHTML = items.map(renderCard).join("");
  grid.hidden = items.length === 0;
  document.querySelector("#no-results").hidden = items.length !== 0;
  resultCount.textContent = `${number(items.length)} ${t("results")} ${t("of")} ${number(listings.length)}`;
  document.querySelector("#favourites-filter-label").textContent = `${t("favouritesOnly")} (${number(favourites.size)})`;
  favouritesFilter.setAttribute("aria-pressed",String(state.favouritesOnly));
  const summary = [];
  if (state.search.trim()) summary.push(`${t("searchPrefix")}: ${state.search.trim()}`);
  if (state.category !== "all") summary.push(t(state.category === "property" ? "properties" : "vehicles"));
  if (state.mode !== "all") summary.push(t(state.mode === "sale" ? "forSale" : "forRent"));
  if (state.cap !== "") summary.push(`${t("capPrefix")} ${number(Math.max(0,Number(state.cap)))} ${t("usd")}`);
  if (state.favouritesOnly) summary.push(t("favouritesActive"));
  document.querySelector("#active-filter-summary").textContent = summary.join(" · ") || t("allShown");
}
function announce(key) {
  lastStatus = key;
  status.textContent = t(key) + (!persistent ? ` ${t("sessionOnly")}` : "");
}
function saveFavourites() {
  try { localStorage.setItem(storageKey,JSON.stringify([...favourites])); }
  catch { persistent = false; }
}
function toggleFavourite(id,source) {
  const wasSaved = favourites.has(id);
  if (wasSaved) favourites.delete(id); else favourites.add(id);
  saveFavourites();
  render();
  announce(wasSaved ? "favouriteRemoved" : "favouriteSaved");
  if (dialog.open) {
    updateDialogFavourite();
    document.querySelector("#dialog-action-status").textContent = t(wasSaved ? "favouriteRemoved" : "favouriteSaved") + (!persistent ? ` ${t("sessionOnly")}` : "");
  } else {
    const replacement = grid.querySelector(`[data-action="favourite"][data-id="${id}"]`);
    (replacement || favouritesFilter).focus({preventScroll:true});
  }
}
function resetFilters() {
  Object.assign(state,{search:"",category:"all",mode:"all",cap:"",sort:"featured",favouritesOnly:false});
  Object.entries(controls).forEach(([key,control]) => { control.value = state[key]; });
  render();
  announce("resetDone");
}
Object.entries(controls).forEach(([key,control]) => {
  control.addEventListener(key === "search" || key === "cap" ? "input" : "change",() => {
    state[key] = key === "cap" && (!Number.isFinite(control.valueAsNumber) || control.value === "") ? "" : control.value;
    render();
  });
});
document.querySelector("#filter-form").addEventListener("submit",event => event.preventDefault());
document.querySelector("#reset-filters").addEventListener("click",resetFilters);
document.querySelector("#empty-reset").addEventListener("click",() => { resetFilters(); controls.search.focus({preventScroll:true}); });
favouritesFilter.addEventListener("click",() => { state.favouritesOnly = !state.favouritesOnly; render(); });
grid.addEventListener("click",event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const item = listings.find(record => record.id === button.dataset.id);
  if (!item) return;
  if (button.dataset.action === "favourite") toggleFavourite(item.id,button);
  else openDetails(item,button);
});
function updateDialogFavourite() {
  const button = document.querySelector("#dialog-favourite");
  const saved = favourites.has(activeListing.id);
  button.setAttribute("aria-pressed",String(saved));
  button.textContent = `${saved ? "♥" : "♡"} ${t(saved ? "removeFavourite" : "addFavourite")}`;
  button.classList.toggle("saved",saved);
}
function fillDialog() {
  const item = activeListing;
  const image = document.querySelector("#listing-dialog-image");
  image.src = `${DEMO_ASSET_BASE}${item.id}.webp`;
  image.alt = `${text(item.title)} - ${t("virtualListing")}`;
  document.querySelector("#listing-dialog-title").textContent = text(item.title);
  document.querySelector("#listing-dialog-category").textContent = `${t(item.category)} / ${t(item.subtype)} / ${t(item.mode === "sale" ? "forSale" : "forRent")}`;
  document.querySelector("#listing-dialog-neighbourhood").textContent = text(item.neighbourhood);
  document.querySelector("#listing-dialog-price").textContent = price(item);
  document.querySelector("#listing-dialog-description").textContent = text(item.description);
  document.querySelector("#listing-dialog-features").innerHTML = Object.entries(item.features).map(([key,value]) => `<div><dt>${t(key)}</dt><dd>${escapeText(featureValue(key,value))}</dd></div>`).join("") + `<div><dt>${t("sampleRef")}</dt><dd dir="ltr">${item.id.toUpperCase()}</dd></div>`;
  updateDialogFavourite();
}
function openDetails(item,trigger) {
  activeListing = item;
  dialogTrigger = {element:trigger,id:item.id,action:trigger.dataset.action,index:[...grid.querySelectorAll(`[data-action="${trigger.dataset.action}"][data-id="${item.id}"]`)].indexOf(trigger)};
  fillDialog();
  document.querySelector("#dialog-action-status").textContent = "";
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow = "hidden";
  dialogClose.focus({preventScroll:true});
}
dialogClose.addEventListener("click",() => dialog.close());
dialog.addEventListener("click",event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener("close",() => {
  document.body.style.overflow = "";
  const previous = dialogTrigger ? (dialogTrigger.element.isConnected ? dialogTrigger.element : [...grid.querySelectorAll(`[data-action="${dialogTrigger.action}"][data-id="${dialogTrigger.id}"]`)][dialogTrigger.index]) : null;
  (previous || favouritesFilter).focus({preventScroll:true});
});
document.querySelector("#dialog-favourite").addEventListener("click",() => toggleFavourite(activeListing.id));

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
function closeMenu() { menuToggle.setAttribute("aria-expanded","false"); navigation.classList.remove("open"); }
menuToggle.addEventListener("click",() => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded",String(open));navigation.classList.toggle("open",open);
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click",closeMenu));
document.addEventListener("click",event => { if (!event.target.closest(".site-header")) closeMenu(); });
document.addEventListener("keydown",event => {
  if (event.key === "Escape" && !dialog.open && menuToggle.getAttribute("aria-expanded") === "true") { closeMenu();menuToggle.focus(); }
});
window.matchMedia("(min-width: 821px)").addEventListener("change",event => { if (event.matches) closeMenu(); });

function setLanguage(nextLanguage) {
  language = String(nextLanguage).startsWith("en") ? "en" : "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => { element.setAttribute("aria-label",t(element.dataset.i18nAria)); });
  render();
  if (lastStatus) announce(lastStatus);
  if (activeListing && dialog.open) fillDialog();
}
window.SmartLandMyKey = {setLanguage,getLanguage:() => language};
document.addEventListener("smartland:languagechange",event => setLanguage(event.detail?.language || event.detail?.lang || "ar"));
setLanguage(language);
