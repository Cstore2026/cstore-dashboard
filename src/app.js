import "./styles.css";
const SUPABASE_URL = "https://vxqbvtcwxxdkskqqewxi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const T={
ar:{
loginSub:'Welcome to the C Store Delivery Dashboard',language:'اللغة',login:'دخول',badLogin:'بيانات الدخول غير صحيحة',logout:'خروج',
dashboardTitle:'لوحة التحكم الموحدة',dashboardNote:'نسخة تصميم وتجربة محلية بدون داتا بيز',resetDemo:'إعادة بيانات التجربة',
overview:'نظرة عامة',orders:'كل الأوردرات',callcenter:'أوردر جديد',ccadmin:'إدارة الكول سنتر',ccAdd:'إضافة فرد',ccManage:'إدارة الأفراد',ccReport:'تقرير الموظفين',branchPrep:'الفروع والتحضير',delivery:'أداء الطيارين',accounts:'الحسابات',settings:'إعدادات نقاط الطيار',
newOrder:'أوردر جديد',recentOrders:'آخر الأوردرات',ccMembers:'أفراد الكول سنتر',ccReport:'تقرير الكول سنتر',branches:'الفروع',preparers:'المحضرين',riders:'الطيارين',
totalOrders:'إجمالي الأوردرات',active:'نشط',prepared:'تم التحضير',delivered:'تم التوصيل',cancelled:'ملغي',amount:'إجمالي المبلغ',late:'متأخر',
orderNo:'رقم الأوردر',total:'التوتال',branch:'الفرع',status:'الحالة',ccStaff:'موظف الكول سنتر',dept:'القسم',preparer:'المحضر',rider:'الطيار',note:'ملحوظة',prepNote:'ملحوظة المحضر',actions:'إجراءات',
staffType:'نوع الموظف',staffName:'اسم الموظف',social:'سوشيال ميديا',agent:'كول سنتر',sendToBranch:'إرسال للفرع',cancelOrder:'إلغاء الأوردر',startCustomer:'بدأ طلب العميل',
waiting:'في انتظار التحضير',preparing:'جاري التحضير',done:'تم التحضير',assigned:'موجه للطيار',picked:'تم الاستلام',refused:'رفض العميل',startPrep:'استلام',donePrep:'إكمال التحضير',assignRider:'توجيه للطيار',pickUp:'استلام',deliver:'تم التوصيل',refuse:'رفض',
add:'إضافة',edit:'تعديل',delete:'حذف',save:'حفظ',clear:'مسح',search:'بحث',all:'الكل',noData:'لا يوجد بيانات',
adminDesc:'الأدمن العام يشوف ويدير كل الأقسام بدون حذف أي صلاحية.',ccAdminDesc:'أدمن الكول سنتر موجود لوحده لإدارة موظفي الكول سنتر وتقاريرهم.',viewerDesc:'',branchDesc:'الفروع مدموجة: تحضير + دليفري لنفس الفرع.',localOnly:'التعديل هنا محلي للتجربة فقط.',
username:'Username',password:'Password',role:'الدور',name:'الاسم',manualPoints:'نقط يدوية',points:'النقط',prepTime:'وقت التحضير',deliveryTime:'وقت التوصيل',created:'وقت التسجيل',allTimes:'كل الأوقات',callTime:'وقت نزول الأوردر من الكول',branchReceiveTime:'وقت استلام الفرع',preparedTime:'وقت التحضير',riderReceiveTime:'وقت استلام الطيار',riderDeliveredTime:'وقت وصول الطيار',totalJourneyTime:'إجمالي وقت الأوردر',currentTotal:'الإجمالي حتى الآن',allTimesHint:'يعرض رحلة الأوردر كاملة من الكول سنتر إلى الفرع ثم الطيار والتوصيل.',
prepAdmin:'التحضير',deliveryAdmin:'التوصيل',completedOrders:'الأوردرات المكتملة',people:'إضافة فرد',orderFilter:'فلتر رقم الأوردر',dayFilter:'فلتر اليوم',completedHint:'الأوردرات التي انتهت من التوصيل أو الإلغاء مع كل الأوقات والملاحظات.',prepHint:'كل الأوردرات التي لم يضغط المحضر فيها على إكمال التحضير.',deliveryHint:'كل الأوردرات التي اكتمل تحضيرها وتنتظر التوجيه أو الاستلام أو التوصيل.',callCenterPeople:'كول سنتر',preparerPeople:'محضرين',completePrep:'إكمال التحضير',exportExcel:'تحميل Excel',clearFilters:'مسح الفلاتر',fromDate:'من يوم',toDate:'إلى يوم',month:'الشهر',performanceIndicators:'مؤشرات الأداء',prepPerformance:'أداء المحضرين',riderPerformance:'أداء الطيارين',ccPerformance:'أداء الكول سنتر',avgPrepTime:'متوسط التحضير',avgDeliveryTime:'متوسط التوصيل',ccOrders:'أوردرات الكول سنتر',preparedOrders:'أوردرات تم تحضيرها',deliveredOrders:'أوردرات تم توصيلها',manualAdjust:'تعديل النقاط',branchPrepRate:'معدل التحضير لكل فرع',prepRate:'معدل التحضير',avgBranchPrep:'متوسط تحضير الفرع',dateRange:'الفترة',avgReg:'متوسط زمن التسجيل',ccOverviewOnly:'النظرة العامة هنا للكول سنتر فقط',staffOrdersReport:'تقرير الموظفين',manageMembersHint:'كل أقسام الكول سنتر والموظفين داخل كل قسم للتعديل أو الحذف.',addMemberHint:'إضافة فرد جديد فقط داخل قسم من أقسام الكول سنتر.',orderStartTime:'وقت بداية الطلب',registrationDuration:'زمن تسجيل الطلب',totalJourneyTime:'إجمالي وقت الأوردر بعد الإرسال للفرع',startCustomerTime:'وقت بداية العميل',readyForNewOrder:'الحالة: جاهز لأوردر جديد',enteringOrder:'الحالة: جاري إدخال الطلب',sendBranchTime:'وقت إرسال للفرع',mustStartFirst:'اضغط وقت بداية العميل الأول',branchNewOrders:'الأوردرات الجديدة',branchAssignRider:'اختيار المندوب',receiveOrder:'استلام',prepNotePlaceholder:'مثال: الأوردر اتأخر بسبب منتج غير موجود',chooseRiderHint:'الأوردرات التي اكتمل تحضيرها وتحتاج اختيار مندوب.',newBranchOrdersHint:'الأوردرات الجديدة تبقى هنا حتى يضغط المحضر على إكمال التحضير.',donePrepMoves:'بعد إكمال التحضير ينتقل الأوردر تلقائيًا إلى اختيار المندوب.',riderFinishLocation:'موقع الطيار عند الإنهاء',openLocation:'فتح الموقع',locationNotRecorded:'لم يسجل بعد',locationAccuracy:'دقة الموقع',locationTime:'وقت تسجيل الموقع',finalAction:'نوع الإنهاء'
},
en:{
loginSub:'Welcome to the C Store Delivery Dashboard',language:'Language',login:'Login',badLogin:'Incorrect login details',logout:'Logout',
dashboardTitle:'C Store Delivery Dashboard',dashboardNote:'Welcome to the C Store Delivery Dashboard',resetDemo:'Reset demo data',
overview:'Overview',orders:'All Orders',callcenter:'New Order',ccadmin:'Call Center Admin',ccAdd:'Add Member',ccManage:'Manage Members',ccReport:'Staff Report',branchPrep:'Branches & Preparation',delivery:'Riders Performance',accounts:'Accounts',settings:'Rider Points Settings',
newOrder:'New Order',recentOrders:'Recent Orders',ccMembers:'Call Center Members',ccReport:'Call Center Report',branches:'Branches',preparers:'Preparers',riders:'Riders',
totalOrders:'Total Orders',active:'Active',prepared:'Prepared',delivered:'Delivered',cancelled:'Cancelled',amount:'Total Amount',late:'Late',
orderNo:'Order No.',total:'Total',branch:'Branch',status:'Status',ccStaff:'Call Center Staff',dept:'Department',preparer:'Preparer',rider:'Rider',note:'Note',prepNote:'Preparer Note',actions:'Actions',
staffType:'Staff Type',staffName:'Staff Name',social:'Social Media',agent:'Call Center',sendToBranch:'Send to Branch',cancelOrder:'Cancel Order',startCustomer:'Customer Started',
waiting:'Waiting for Preparation',preparing:'Preparing',done:'Prepared',assigned:'Assigned to Rider',picked:'Picked Up',refused:'Customer Refused',startPrep:'Receive',donePrep:'Complete Preparation',assignRider:'Assign Rider',pickUp:'Pick Up',deliver:'Delivered',refuse:'Refuse',
add:'Add',edit:'Edit',delete:'Delete',save:'Save',clear:'Clear',search:'Search',all:'All',noData:'No data',
adminDesc:'Master admin can see and manage every section without removing any role.',ccAdminDesc:'Call Center Admin remains separate for managing call center staff and reports.',viewerDesc:'',branchDesc:'Branches are merged: preparation + delivery for the same branch.',localOnly:'Changes here are local for review only.',
username:'Username',password:'Password',role:'Role',name:'Name',manualPoints:'Manual Points',points:'Points',prepTime:'Preparation Time',deliveryTime:'Delivery Time',created:'Created Time',allTimes:'All Times',callTime:'Call Center Order Time',branchReceiveTime:'Branch Received Time',preparedTime:'Prepared Time',riderReceiveTime:'Rider Picked Up Time',riderDeliveredTime:'Rider Delivered Time',totalJourneyTime:'Total Order Time After Sent To Branch',currentTotal:'Total so far',allTimesHint:'Shows the full order journey from call center to branch, rider, and delivery.',
prepAdmin:'Preparation',deliveryAdmin:'Delivery',completedOrders:'Completed Orders',people:'Add Member',orderFilter:'Order number filter',dayFilter:'Day filter',completedHint:'Orders that finished delivery/cancellation with all timings and notes.',prepHint:'Orders where the preparer has not pressed complete preparation yet.',deliveryHint:'Orders that finished preparation and are waiting for rider assignment, pickup, or delivery.',callCenterPeople:'Call Center',preparerPeople:'Preparers',completePrep:'Complete Preparation',exportExcel:'Export Excel',clearFilters:'Clear Filters',fromDate:'From date',toDate:'To date',month:'Month',performanceIndicators:'Performance Indicators',prepPerformance:'Preparers Performance',riderPerformance:'Riders Performance',ccPerformance:'Call Center Performance',avgPrepTime:'Average Prep Time',avgDeliveryTime:'Average Delivery Time',ccOrders:'Call Center Orders',preparedOrders:'Prepared Orders',deliveredOrders:'Delivered Orders',manualAdjust:'Adjust Points',branchPrepRate:'Preparation Rate by Branch',prepRate:'Preparation Rate',avgBranchPrep:'Branch Avg Prep',dateRange:'Date Range',avgReg:'Average Registration Time',ccOverviewOnly:'This overview shows call-center-only metrics',staffOrdersReport:'Staff Report',manageMembersHint:'All call center departments and people for editing or deletion.',addMemberHint:'Add a new member only inside a call center department.',orderStartTime:'Order Start Time',registrationDuration:'Order Registration Time',totalJourneyTime:'Total Order Time After Sending to Branch',startCustomerTime:'Customer Start Time',readyForNewOrder:'Status: Ready for new order',enteringOrder:'Status: Entering order',sendBranchTime:'Sent to Branch Time',mustStartFirst:'Press Customer Start Time first',branchNewOrders:'New Orders',branchAssignRider:'Choose Rider',receiveOrder:'Receive',prepNotePlaceholder:'Example: order delayed because an item is missing',chooseRiderHint:'Orders that finished preparation and need rider assignment.',newBranchOrdersHint:'New orders stay here until the preparer completes preparation.',donePrepMoves:'After completing preparation, the order moves automatically to Choose Rider.',riderFinishLocation:'Rider Finish Location',openLocation:'Open Location',locationNotRecorded:'Not recorded yet',locationAccuracy:'Location Accuracy',locationTime:'Location Time',finalAction:'Final Action'
}};
const BRANCHES=[
  {key:'Maadi',ar:'المعادي',en:'Maadi'},
  {key:'Heliopolis',ar:'مصر الجديدة',en:'Heliopolis'},
  {key:'New Cairo1',ar:'التجمع الأول',en:'New Cairo 1'},
  {key:'New Cairo5',ar:'التجمع الخامس',en:'New Cairo 5'},
  {key:'Abbas',ar:'عباس',en:'Abbas'}
];
const defaults={
accounts:[
{username:'admin',password:'1234',role:'admin',name:'Master Admin',branch:'All'},
{username:'ccadmin',password:'1234',role:'ccadmin',name:'Call Center Admin',branch:'All'},
{username:'callcenter',password:'1234',role:'callcenter',name:'Call Center Staff',branch:'All'},
{username:'maadi',password:'1234',role:'branch',name:'فرع المعادي',branch:'Maadi'},
{username:'heliopolis',password:'1234',role:'branch',name:'فرع مصر الجديدة',branch:'Heliopolis'},
{username:'newcairo1',password:'1234',role:'branch',name:'فرع التجمع الأول',branch:'New Cairo1'},
{username:'newcairo5',password:'1234',role:'branch',name:'فرع التجمع الخامس',branch:'New Cairo5'},
{username:'abbas',password:'1234',role:'branch',name:'فرع عباس',branch:'Abbas'},
{username:'ahmed',password:'1234',role:'rider',name:'Ahmed Rider',branch:'Maadi',manualPoints:0},
{username:'mohamed',password:'1234',role:'rider',name:'Mohamed Rider',branch:'Maadi',manualPoints:0},
{username:'youssef',password:'1234',role:'rider',name:'Youssef Rider',branch:'Heliopolis',manualPoints:0}
],
ccStaff:{social:['منى سوشيال','أحمد سوشيال'],agent:['محمد كول سنتر','كريم كول سنتر']},
preparers:{Maadi:['خالد محضر','طارق محضر'],Heliopolis:['مصطفى محضر','علي محضر'],'New Cairo1':['حسن محضر'],'New Cairo5':['عمرو محضر'],Abbas:['أحمد محضر','محمد محضر']},
orders:[
{id:'15230',total:485,branch:'Abbas',ccType:'agent',ccStaff:'محمد كول سنتر',note:'مستعجل للمحضر',prepBy:'',prepNote:'',rider:'',status:'waiting',created:Date.now()-1000*60*12,prepStart:null,prepDone:null,pickedAt:null,deliveredAt:null,cancelledAt:null},
{id:'15231',total:320,branch:'Maadi',ccType:'social',ccStaff:'منى سوشيال',note:'العميل طالب تجهيز سريع',prepBy:'خالد محضر',prepNote:'اتأخر بسبب نقص منتج',rider:'ahmed',status:'assigned',assignedAt:Date.now()-1000*60*15,created:Date.now()-1000*60*35,prepStart:Date.now()-1000*60*24,prepDone:Date.now()-1000*60*16,pickedAt:null,deliveredAt:null,cancelledAt:null},
{id:'15232',total:610,branch:'New Cairo5',ccType:'agent',ccStaff:'كريم كول سنتر',note:'مراجعة الصنف قبل التحضير',prepBy:'عمرو محضر',prepNote:'',rider:'',status:'preparing',created:Date.now()-1000*60*22,prepStart:Date.now()-1000*60*8,prepDone:null,pickedAt:null,deliveredAt:null,cancelledAt:null},
{id:'15233',total:245,branch:'Heliopolis',ccType:'social',ccStaff:'أحمد سوشيال',note:'',prepBy:'علي محضر',prepNote:'',rider:'youssef',status:'delivered',assignedAt:Date.now()-1000*60*60,created:Date.now()-1000*60*90,prepStart:Date.now()-1000*60*78,prepDone:Date.now()-1000*60*65,pickedAt:Date.now()-1000*60*50,deliveredAt:Date.now()-1000*60*30,cancelledAt:null}
],
points:{fastMinutes:10,fastPoints:2,normalMinutes:20,normalPoints:1}
};
let lang=localStorage.cstore_unified_lang||'ar';
let state=loadState();
let current=null, active='overview';
let ccDraftStart=null;
let filters={prepOrder:'',prepDate:'',deliveryOrder:'',deliveryDate:'',completedOrder:'',completedDate:'',completedFrom:'',completedTo:'',overviewFrom:'',overviewTo:'',overviewMonth:''};
const $=id=>document.getElementById(id), tr=k=>T[lang][k]||k;
function clone(x){return JSON.parse(JSON.stringify(x))}

function normalizeState(data){
  const base = clone(defaults);
  const currentData = (data && typeof data === 'object') ? data : {};

  const merged = {
    ...base,
    ...currentData,
    accounts: Array.isArray(currentData.accounts) ? currentData.accounts.slice() : [],
    orders: Array.isArray(currentData.orders) ? currentData.orders.slice() : base.orders.slice(),
    ccStaff: currentData.ccStaff && typeof currentData.ccStaff === 'object' ? {...base.ccStaff, ...currentData.ccStaff} : base.ccStaff,
    preparers: currentData.preparers && typeof currentData.preparers === 'object' ? {...base.preparers, ...currentData.preparers} : base.preparers,
    points: currentData.points && typeof currentData.points === 'object' ? {...base.points, ...currentData.points} : base.points,
  };

  // Remove old Viewer account completely.
  merged.accounts = merged.accounts.filter(a => a && a.role !== 'viewer' && String(a.username||'').toLowerCase() !== 'viewer');

  // Force the core accounts to exist and keep their default login data valid.
  base.accounts.forEach(defaultAccount => {
    const i = merged.accounts.findIndex(a => String(a.username||'').toLowerCase() === defaultAccount.username.toLowerCase());
    if(i >= 0){
      merged.accounts[i] = {...merged.accounts[i], ...defaultAccount};
    } else {
      merged.accounts.push({...defaultAccount});
    }
  });

  if(!merged.ccStaff.social) merged.ccStaff.social = [];
  if(!merged.ccStaff.agent) merged.ccStaff.agent = [];
  Object.keys(base.preparers).forEach(branch => {
    if(!Array.isArray(merged.preparers[branch])) merged.preparers[branch] = base.preparers[branch].slice();
  });
  return merged;
}

function loadState(){
  try{
    return normalizeState(JSON.parse(localStorage.cstore_unified_state) || clone(defaults));
  }catch{
    return normalizeState(clone(defaults));
  }
}
function save(){localStorage.cstore_unified_state=JSON.stringify(state)}
function resetDemo(){if(confirm(lang==='en'?'Reset demo data?':'إعادة بيانات التجربة؟')){state=clone(defaults);save();render()}}
function setLang(v){lang=v==='en'?'en':'ar';localStorage.cstore_unified_lang=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.style.direction=document.documentElement.dir;['loginLang','topLang'].forEach(id=>{if($(id))$(id).value=lang});document.querySelectorAll('[data-t]').forEach(n=>n.textContent=tr(n.dataset.t));render()}
function bName(key){let b=BRANCHES.find(x=>x.key===key);return b?(lang==='ar'?b.ar:b.en):key}
function roleName(r){return ({admin:'Admin',ccadmin:'Call Center Admin',callcenter:'Call Center',branch:'Branch',rider:'Rider'})[r]||r}
function fmt(v){if(!v)return '—';return new Date(v).toLocaleString(lang==='ar'?'ar-EG':'en-GB',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'2-digit'})}
function dateOnly(v){if(!v)return '—';return new Date(v).toLocaleDateString(lang==='ar'?'ar-EG':'en-GB')}
function mins(a,b){if(!a||!b)return 0;return Math.max(0,Math.round((b-a)/60000))}
function dur(a,b){let m=mins(a,b);return m? (lang==='ar'?`${m} د`:`${m} min`) : '—'}
function orderEndTime(o){return o.deliveredAt||o.cancelledAt||o.pickedAt||o.prepDone||o.prepStart||Date.now()}
function totalOrderDuration(o){return dur(o.created,orderEndTime(o))}
function totalOrderLabel(o){return (o.status==='delivered'||o.status==='cancel'||o.status==='refused')?totalOrderDuration(o):`${totalOrderDuration(o)} (${tr('currentTotal')})`}
function registrationDuration(o){return dur(ccStartTime(o),o.created)}
function statusLabel(s){return ({waiting:tr('waiting'),preparing:tr('preparing'),done:tr('done'),assigned:tr('assigned'),picked:tr('picked'),delivered:tr('delivered'),cancel:tr('cancelled'),refused:tr('refused')})[s]||s}

function getFinalLocation(o){
  const lat = o.finalLat ?? o.final_lat ?? o.delivery_lat ?? o.refuse_lat ?? o.cancel_lat;
  const lng = o.finalLng ?? o.final_lng ?? o.delivery_lng ?? o.refuse_lng ?? o.cancel_lng;
  const accuracy = o.finalAccuracy ?? o.final_accuracy ?? o.delivery_accuracy ?? o.refuse_accuracy ?? o.cancel_accuracy;
  const time = o.finalLocationTime ?? o.final_location_time ?? o.delivery_location_time ?? o.refuse_location_time ?? o.cancel_location_time;
  const action = o.finalAction ?? o.final_action ?? (o.status==='delivered'?'delivered':(o.status==='refused'?'refused':(o.status==='cancel'?'cancel':'')));
  return {lat,lng,accuracy,time,action};
}
function locationMapUrl(o){
  const loc=getFinalLocation(o);
  if(loc.lat===undefined||loc.lng===undefined||loc.lat===null||loc.lng===null||loc.lat===''||loc.lng==='') return '';
  return `https://www.google.com/maps?q=${loc.lat},${loc.lng}`;
}
function finalLocationCell(o){
  const url=locationMapUrl(o);
  if(!url) return `<span class="muted">${tr('locationNotRecorded')}</span>`;
  return `<a class="blue" style="display:inline-block;text-decoration:none;border-radius:12px;padding:8px 10px" href="${url}" target="_blank" rel="noopener">${tr('openLocation')}</a>`;
}
function locationAccuracyCell(o){
  const loc=getFinalLocation(o);
  if(loc.accuracy===undefined||loc.accuracy===null||loc.accuracy==='') return '—';
  return `${Math.round(Number(loc.accuracy))} m`;
}
function locationTimeCell(o){
  const loc=getFinalLocation(o);
  return loc.time ? fmt(loc.time) : '—';
}

function badge(s){return `<span class="badge b-${s}">${statusLabel(s)}</span>`}
function visibleOrders(){if(!current)return[];if(current.role==='branch')return state.orders.filter(o=>o.branch===current.branch);if(current.role==='rider')return state.orders.filter(o=>o.rider===current.username);return state.orders}
function ccStaffOptions(type){return (state.ccStaff[type]||[]).map(n=>`<option>${n}</option>`).join('')}
function branchOptions(all=false){return (all?`<option value="All">${tr('all')}</option>`:'')+BRANCHES.map(b=>`<option value="${b.key}">${bName(b.key)}</option>`).join('')}
function preparerOptions(branch){return (state.preparers[branch]||[]).map(n=>`<option>${n}</option>`).join('')}
function ridersFor(branch){return state.accounts.filter(a=>a.role==='rider'&&a.branch===branch)}
function riderName(u){let r=state.accounts.find(a=>a.username===u);return r?r.name:(u||'—')}
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase
    .from("app_users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (error || !data) {
    alert("بيانات الدخول غير صحيحة");
    return;
  }

  currentUser = data;

  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboardPage").style.display = "block";
}
function tabsFor(){if(!current)return[];if(current.role==='admin')return ['overview','prepAdmin','deliveryAdmin','completedOrders','delivery','people','accounts','settings'];if(current.role==='ccadmin')return ['overview','ccAdd','ccManage','ccReport','orders'];if(current.role==='callcenter')return ['callcenter','completedOrders'];if(current.role==='branch')return ['branchNewOrders','branchAssignRider','completedOrders'];if(current.role==='rider')return ['riderOrders'];return ['overview']}
function setTab(t){active=t;render()}
function tabTitle(t){return tr(t)}
function renderTabs(){let tabs=tabsFor();if(!tabs.includes(active))active=tabs[0];if(current&&current.role==='rider'){$('tabs').innerHTML='';return;}$('tabs').innerHTML=tabs.map(t=>`<button class="tab ${active===t?'active':''}" onclick="setTab('${t}')">${tabTitle(t)}</button>`).join('')}
function render(){setLangOnly(); if(!current)return; $('userTitle').textContent=current.name||current.username||'';if($('mainBrandTitle')) $('mainBrandTitle').textContent='C Store Delivery Dashboard';renderTabs();let map={overview:overviewHTML,orders:ordersHTML,riderOrders:riderOriginalHTML,callcenter:callCenterHTML,ccadmin:ccAdminHTML,ccAdd:ccAddHTML,ccManage:ccManageHTML,ccReport:ccReportHTML,branchPrep:branchPrepHTML,branchNewOrders:branchNewOrdersHTML,branchAssignRider:branchAssignRiderHTML,delivery:deliveryHTML,prepAdmin:adminPrepHTML,deliveryAdmin:adminDeliveryHTML,completedOrders:completedOrdersHTML,people:addPeopleHTML,accounts:accountsHTML,settings:settingsHTML};$('content').innerHTML=(map[active]||overviewHTML)();attachAfterRender()}
function setLangOnly(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.style.direction=document.documentElement.dir;['loginLang','topLang'].forEach(id=>{if($(id))$(id).value=lang});document.querySelectorAll('[data-t]').forEach(n=>n.textContent=tr(n.dataset.t))}

function inPeriod(o){
  let t=o.created||0;
  if(filters.overviewMonth){
    let d=new Date(t);let m=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    if(m!==filters.overviewMonth)return false;
  }
  if(filters.overviewFrom && t<new Date(filters.overviewFrom+'T00:00:00').getTime())return false;
  if(filters.overviewTo && t>new Date(filters.overviewTo+'T23:59:59').getTime())return false;
  return true;
}
function periodOrders(){return visibleOrders().filter(inPeriod)}
function avgMins(list,start,end){let vals=list.map(o=>mins(o[start],o[end])).filter(Boolean);if(!vals.length)return '—';let v=Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);return lang==='ar'?`${v} د`:`${v} min`}
function overviewFiltersHTML(){return `<div class="card"><h3>${tr('performanceIndicators')}</h3><div class="grid g4"><label>${tr('fromDate')}<input type="date" value="${filters.overviewFrom}" onchange="updateFilter('overviewFrom',this.value)"></label><label>${tr('toDate')}<input type="date" value="${filters.overviewTo}" onchange="updateFilter('overviewTo',this.value)"></label><label>${tr('month')}<input type="month" value="${filters.overviewMonth}" onchange="updateFilter('overviewMonth',this.value)"></label><label>&nbsp;<button class="light full" onclick="clearOverviewFilters()">${tr('clearFilters')}</button></label></div></div>`}
function clearOverviewFilters(){filters.overviewFrom='';filters.overviewTo='';filters.overviewMonth='';render()}
function performanceCards(list){
  let cc=list.filter(o=>o.ccStaff).length;
  let prep=list.filter(o=>o.prepDone).length;
  let delivered=list.filter(o=>o.status==='delivered').length;
  let avgPrep=avgMins(list,'prepStart','prepDone');
  let avgDel=avgMins(list,'pickedAt','deliveredAt');
  return `<div class="grid g5">${metric(tr('ccOrders'),cc,'☎️')}${metric(tr('preparedOrders'),prep,'👨‍🍳')}${metric(tr('deliveredOrders'),delivered,'🏍️')}${metric(tr('avgPrepTime'),avgPrep,'⏱️')}${metric(tr('avgDeliveryTime'),avgDel,'✅')}</div><div class="grid g3"><div class="card"><h3>${tr('ccPerformance')}</h3>${miniPerf('ccStaff',list)}</div><div class="card"><h3>${tr('prepPerformance')}</h3>${miniPerf('prepBy',list)}</div><div class="card"><h3>${tr('riderPerformance')}</h3>${miniPerf('rider',list,true)}</div></div>`
}
function branchPrepRateHTML(list){
  let rows=BRANCHES.map(b=>{
    let branchOrders=list.filter(o=>o.branch===b.key && o.status!=='cancel');
    let prepared=branchOrders.filter(o=>o.prepDone).length;
    let total=branchOrders.length;
    let rate=total?Math.round((prepared/total)*100):0;
    let avg=avgMins(branchOrders,'prepStart','prepDone');
    return {branch:bName(b.key),total,prepared,rate,avg};
  });
  let max=Math.max(...rows.map(r=>r.rate),1);
  return `<div class="card"><h3>${tr('branchPrepRate')}</h3><div class="table-wrap"><table style="min-width:700px"><thead><tr><th>${tr('branch')}</th><th>${tr('totalOrders')}</th><th>${tr('preparedOrders')}</th><th>${tr('prepRate')}</th><th>${tr('avgBranchPrep')}</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>${r.branch}</b></td><td>${r.total}</td><td>${r.prepared}</td><td><div class="row" style="gap:10px"><b>${r.rate}%</b><div style="flex:1;height:9px;background:#f1f5f9;border-radius:99px;overflow:hidden"><div style="width:${Math.round(r.rate/max*100)}%;height:100%;background:linear-gradient(90deg,#16a34a,#db2777)"></div></div></div></td><td>${r.avg}</td></tr>`).join('')}</tbody></table></div></div>`;
}

function miniPerf(field,list,isRider=false){
  let map={};
  list.forEach(o=>{let k=o[field];if(!k)return;map[k]=(map[k]||0)+1});
  let rows=Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,6);
  if(!rows.length)return `<p class="muted">${tr('noData')}</p>`;
  let max=Math.max(...rows.map(x=>x[1]),1);
  return rows.map(([k,v])=>{let name=isRider?riderName(k):k;let pct=Math.round(v/max*100);return `<div style="margin:10px 0"><div class="row" style="justify-content:space-between"><b>${name}</b><span class="muted">${v}</span></div><div style="height:9px;background:#f1f5f9;border-radius:99px;overflow:hidden"><div style="width:${pct}%;height:100%;background:linear-gradient(90deg,#db2777,#f59e0b)"></div></div></div>`}).join('')
}

function summary(list){let o=list||visibleOrders(),amount=o.reduce((s,x)=>s+Number(x.total||0),0);return {total:o.length,active:o.filter(x=>!['delivered','cancel','refused'].includes(x.status)).length,prepared:o.filter(x=>['done','assigned','picked','delivered'].includes(x.status)).length,delivered:o.filter(x=>x.status==='delivered').length,cancel:o.filter(x=>x.status==='cancel').length,amount}}
function overviewHTML(){if(current&&current.role==='ccadmin')return ccOverviewHTML();let list=periodOrders();let s=summary(list);return `${overviewFiltersHTML()}<div class="grid g5">
${metric(tr('totalOrders'),s.total,'📦')}${metric(tr('active'),s.active,'⏱️')}${metric(tr('prepared'),s.prepared,'👨‍🍳')}${metric(tr('delivered'),s.delivered,'✅')}${metric(tr('amount'),s.amount,'💰')}
</div>${performanceCards(list)}
<div class="grid g2">
<div class="card"><h3>Master Admin</h3><p class="muted">${tr('adminDesc')}</p><p class="note">${tr('localOnly')}</p></div>
<div class="card"><h3>${tr('ccadmin')}</h3><p class="muted">${tr('ccAdminDesc')}</p><p class="muted">${tr('branchDesc')}</p></div>
</div>`}
function metric(title,val,icon){return `<div class="metric"><div>${icon}</div><div class="muted">${title}</div><div class="num">${val}</div></div>`}
function ordersTable(list, actions=true){return `<div class="table-wrap"><table><thead><tr>
<th>${tr('orderNo')}</th><th>${tr('total')}</th><th>${tr('branch')}</th><th>${tr('ccStaff')}</th><th>${tr('preparer')}</th><th>${tr('rider')}</th><th>${tr('status')}</th><th>${tr('created')}</th><th>${tr('prepTime')}</th><th>${tr('deliveryTime')}</th>${actions?`<th>${tr('actions')}</th>`:''}
</tr></thead><tbody>${list.map(o=>`<tr><td>#${o.id}</td><td>${o.total}</td><td>${bName(o.branch)}</td><td>${o.ccStaff||'—'}<div class="small muted">${o.ccType?tr(o.ccType):''}</div></td><td>${o.prepBy||'—'}<div class="small muted">${o.prepNote||''}</div></td><td>${riderName(o.rider)}</td><td>${badge(o.status)}</td><td>${fmt(o.created)}</td><td>${dur(o.prepStart,o.prepDone)}</td><td>${dur(o.pickedAt,o.deliveredAt)}</td>${actions?`<td>${orderActions(o)}</td>`:''}</tr>`).join('')||`<tr><td colspan="${actions?11:10}">${tr('noData')}</td></tr>`}</tbody></table></div>`}
function orderActions(o){let a=[];if(['admin','branch'].includes(current.role)){if(o.status==='waiting')a.push(`<button class="orange" onclick="startPrep('${o.id}')">${tr('startPrep')}</button>`);if(o.status==='preparing')a.push(`<button class="green" onclick="donePrep('${o.id}')">${tr('donePrep')}</button>`);if(o.status==='done')a.push(`<button class="blue" onclick="assignRiderPrompt('${o.id}')">${tr('assignRider')}</button>`)}
if(['admin','rider'].includes(current.role)){if(o.status==='assigned')a.push(`<button class="orange" onclick="pickUp('${o.id}')">${tr('pickUp')}</button>`);if(o.status==='picked'){a.push(`<button class="green" onclick="deliver('${o.id}')">${tr('deliver')}</button>`);a.push(`<button class="red" onclick="refuse('${o.id}')">${tr('refuse')}</button>`)}}
if(['admin','ccadmin','callcenter'].includes(current.role)&&!['delivered','cancel','refused'].includes(o.status))a.push(`<button class="red" onclick="cancelOrder('${o.id}')">${tr('cancelOrder')}</button>`);
return `<div class="row">${a.join('')||'—'}</div>`}
function allTimesTable(list,actions=true){return `<div class="table-wrap"><table><thead><tr>
<th>${tr('orderNo')}</th>
<th>${tr('total')}</th>
<th>${tr('branch')}</th>
<th>${tr('ccStaff')}</th>
<th>${tr('preparer')}</th>
<th>${tr('rider')}</th>
<th>${tr('status')}</th>
<th>${tr('orderStartTime')}</th>
<th>${tr('registrationDuration')}</th>
<th>${tr('sendBranchTime')}</th>
<th>${tr('branchReceiveTime')}</th>
<th>${tr('preparedTime')}</th>
<th>${tr('riderReceiveTime')}</th>
<th>${tr('riderDeliveredTime')}</th>
<th>${tr('totalJourneyTime')}</th>
<th>${tr('riderFinishLocation')}</th>
<th>${tr('locationAccuracy')}</th>
<th>${tr('locationTime')}</th>
${actions?`<th>${tr('actions')}</th>`:''}
</tr></thead><tbody>${list.map(o=>`<tr>
<td>#${o.id}</td>
<td>${o.total}</td>
<td>${bName(o.branch)}</td>
<td>${o.ccStaff||'—'}<div class="small muted">${o.ccType?tr(o.ccType):''}</div></td>
<td>${o.prepBy||'—'}</td>
<td>${riderName(o.rider)}</td>
<td>${badge(o.status)}</td>
<td>${fmt(ccStartTime(o))}</td>
<td>${registrationDuration(o)}</td>
<td>${fmt(o.created)}</td>
<td>${fmt(o.prepStart)}</td>
<td>${fmt(o.prepDone)}</td>
<td>${fmt(o.pickedAt)}</td>
<td>${fmt(o.deliveredAt)}</td>
<td><b>${totalOrderLabel(o)}</b></td>
<td>${finalLocationCell(o)}</td>
<td>${locationAccuracyCell(o)}</td>
<td>${locationTimeCell(o)}</td>
${actions?`<td>${orderActions(o)}</td>`:''}
</tr>`).join('')||`<tr><td colspan="${actions?18:17}">${tr('noData')}</td></tr>`}</tbody></table></div>`}

function dayValue(v){if(!v)return '';let d=new Date(v);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function filterOrders(list,prefix){let order=(filters[prefix+'Order']||'').trim();let day=filters[prefix+'Date']||'';return list.filter(o=>(!order||String(o.id).includes(order))&&(!day||dayValue(o.created)===day))}
function filterOrdersRange(list,prefix){let order=(filters[prefix+'Order']||'').trim();let from=filters[prefix+'From']||'';let to=filters[prefix+'To']||'';return list.filter(o=>{let t=o.created||0;if(order&&!String(o.id).includes(order))return false;if(from&&t<new Date(from+'T00:00:00').getTime())return false;if(to&&t>new Date(to+'T23:59:59').getTime())return false;return true})}
function updateFilter(key,value){filters[key]=value;render()}
function clearFilter(prefix){filters[prefix+'Order']='';filters[prefix+'Date']='';filters[prefix+'From']='';filters[prefix+'To']='';render()}
function filterControls(prefix){return `<div class="grid g3" style="margin:12px 0"><label>${tr('orderFilter')}<input value="${filters[prefix+'Order']||''}" oninput="updateFilter('${prefix}Order',this.value)" placeholder="15230"></label><label>${tr('dayFilter')}<input type="date" value="${filters[prefix+'Date']||''}" onchange="updateFilter('${prefix}Date',this.value)"></label><label>&nbsp;<button class="light full" onclick="clearFilter('${prefix}')">${tr('clearFilters')}</button></label></div>`}
function completedFilterControls(){return `<div class="grid g4" style="margin:12px 0"><label>${tr('orderFilter')}<input value="${filters.completedOrder||''}" oninput="updateFilter('completedOrder',this.value)" placeholder="15230"></label><label>${tr('fromDate')}<input type="date" value="${filters.completedFrom||''}" onchange="updateFilter('completedFrom',this.value)"></label><label>${tr('toDate')}<input type="date" value="${filters.completedTo||''}" onchange="updateFilter('completedTo',this.value)"></label><label>&nbsp;<button class="light full" onclick="clearFilter('completed')">${tr('clearFilters')}</button></label></div>`}
function adminPrepHTML(){let list=filterOrders(visibleOrders().filter(o=>['waiting','preparing'].includes(o.status)),'prep');return `<div class="card"><h3>${tr('prepAdmin')}</h3><p class="muted">${tr('prepHint')}</p>${filterControls('prep')}${ordersTable(list)}</div>`}
function adminDeliveryHTML(){let list=filterOrders(visibleOrders().filter(o=>['done','assigned','picked'].includes(o.status)),'delivery');return `<div class="card"><h3>${tr('deliveryAdmin')}</h3><p class="muted">${tr('deliveryHint')}</p>${filterControls('delivery')}${ordersTable(list)}</div>`}
function completedOrdersHTML(){let list=filterOrdersRange(visibleOrders().filter(o=>['delivered','refused','cancel'].includes(o.status)),'completed');return `<div class="card"><div class="row" style="justify-content:space-between"><div><h3>${tr('completedOrders')}</h3><p class="muted">${tr('completedHint')}</p><p class="note">${lang==='ar'?'مكان اللوكيشن هيظهر هنا بعد ربط الأبلكيشن: موقع الطيار عند ضغط تم التوصيل أو الرفض / الإلغاء.':'Location will appear here after app integration: rider position when pressing delivered or refused / cancelled.'}</p></div><button class="blue" onclick="exportCompletedCSV()">${tr('exportExcel')}</button></div>${completedFilterControls()}${allTimesTable(list,false)}</div>`}

function ordersHTML(){let isAdmin=current&&current.role==='admin';let isCcAdmin=current&&current.role==='ccadmin';let title=isAdmin?tr('allTimes'):tr('orders');let hint=isAdmin?`<p class="muted">${tr('allTimesHint')}</p>`:'';let baseList=isCcAdmin?state.orders.filter(o=>o.ccStaff):visibleOrders();let list=isCcAdmin?filterOrders(baseList,'ccOrders'):baseList;let table=isAdmin?allTimesTable(list):ordersTable(list,isCcAdmin?false:true);let filtersHTML=isCcAdmin?filterControls('ccOrders'):'';return `<div class="card"><div class="row" style="justify-content:space-between"><div><h3>${title}</h3>${hint}</div><button class="blue" onclick="exportCSV()">${lang==='ar'?'تحميل CSV':'Export CSV'}</button></div>${filtersHTML}${table}</div>`}
function callCenterHTML(){let canEdit=['admin','callcenter'].includes(current.role);let started=!!ccDraftStart;return `<div class="card" style="max-width:720px;margin:auto"><h3>${tr('newOrder')}</h3><p class="muted">${lang==='ar'?'لا يمكن إدخال بيانات الأوردر إلا بعد الضغط على وقت بداية العميل.':'You can only enter order details after pressing Customer Start Time.'}</p>
${canEdit?`
<div class="row"><button id="ccStartBtn" class="green" onclick="startCustomerOrder()" ${started?'disabled':''}>${tr('startCustomerTime')}</button><button id="ccCancelBtn" class="red" onclick="addCancelledCcOrder()" ${started?'':'disabled'}>${tr('cancelOrder')}</button></div>
<div class="timebox"><div class="muted">${tr('orderStartTime')}</div><div class="big">${started?fmt(ccDraftStart):'--:--'}</div><div class="muted">${started?tr('enteringOrder'):tr('readyForNewOrder')}</div></div>
<label>${tr('staffType')}<select id="newCcType" onchange="updateCcStaffSelect()" ${started?'':'disabled'}><option value="social">${tr('social')}</option><option value="agent">${tr('agent')}</option></select></label>
<label>${tr('staffName')}<select id="newCcStaff" ${started?'':'disabled'}>${ccStaffOptions('social')}</select></label>
<label>${tr('orderNo')}<input id="newOrderId" placeholder="15230" oninput="checkCcSendReady()" ${started?'':'disabled'}></label>
<label>${tr('total')}<input id="newTotal" type="number" placeholder="485" oninput="checkCcSendReady()" ${started?'':'disabled'}></label>
<label>${tr('branch')}<select id="newBranch" ${started?'':'disabled'}>${branchOptions()}</select></label>
<label>${tr('note')}<textarea id="newNote" placeholder="${lang==='ar'?'مثال: مستعجل / ناقص صنف / العميل مستني':'Example: urgent / missing item / customer waiting'}" ${started?'':'disabled'}></textarea></label>
<button id="ccSendBtn" class="dark full" onclick="addCcOrder()" disabled>${tr('sendToBranch')}</button>`:''}
</div>`}
function ccOrdersOnly(){return state.orders.filter(o=>o.ccStaff)}
function ccStartTime(o){return o.ccStart || (o.created ? o.created - 3*60000 : 0)}
function ccRegText(list){let vals=list.map(o=>mins(ccStartTime(o),o.created)).filter(v=>v>=0);if(!vals.length)return '—';let v=Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);return lang==='ar'?`${v} د`:`${v} min`}
function ccOverviewHTML(){let list=ccOrdersOnly();let amount=list.filter(o=>o.status!=='cancel').reduce((s,o)=>s+Number(o.total||0),0);let cancelled=list.filter(o=>o.status==='cancel').length;let social=list.filter(o=>o.ccType==='social').length;let agent=list.filter(o=>o.ccType==='agent').length;return `<div class="card"><h3>${tr('overview')}</h3><p class="muted">${tr('ccOverviewOnly')}</p></div><div class="grid g5">${metric(tr('ccOrders'),list.length,'☎️')}${metric(tr('social'),social,'💬')}${metric(tr('agent'),agent,'🎧')}${metric(tr('cancelled'),cancelled,'❌')}${metric(tr('amount'),amount,'💰')}</div><div class="grid g2"><div class="card"><h3>${tr('ccPerformance')}</h3>${miniPerf('ccStaff',list)}</div><div class="card"><h3>${tr('dept')}</h3>${miniPerf('ccType',list)}</div></div>`}
function ccAddHTML(){return `<div class="card"><h3>${tr('ccAdd')}</h3><p class="muted">${tr('addMemberHint')}</p><div class="grid g3"><label>${tr('dept')}<select id="addStaffType"><option value="social">${tr('social')}</option><option value="agent">${tr('agent')}</option></select></label><label>${tr('staffName')}<input id="addStaffName"></label><label>&nbsp;<button class="pink full" onclick="addStaff()">${tr('add')}</button></label></div></div>`}
function ccManageHTML(){return `<div class="card"><h3>${tr('ccManage')}</h3><p class="muted">${tr('manageMembersHint')}</p>${staffManageEditTable()}</div>`}
function ccReportHTML(){return `<div class="card"><h3>${tr('staffOrdersReport')}</h3>${ccReportTable()}</div>`}
function ccAdminHTML(){return `${ccOverviewHTML()}<div class="grid g2"><div class="card"><h3>${tr('ccAdd')}</h3><p class="muted">${tr('addMemberHint')}</p><div class="grid g2"><label>${tr('dept')}<select id="addStaffType"><option value="social">${tr('social')}</option><option value="agent">${tr('agent')}</option></select></label><label>${tr('staffName')}<input id="addStaffName"></label></div><button class="pink" onclick="addStaff()">${tr('add')}</button></div><div class="card"><h3>${tr('staffOrdersReport')}</h3>${ccReportTable()}</div></div>`}
function staffManageTable(){let rows=[];Object.keys(state.ccStaff).forEach(type=>(state.ccStaff[type]||[]).forEach((n,i)=>rows.push(`<tr><td>${n}</td><td>${tr(type)}</td><td><button class="red" onclick="deleteStaff('${type}',${i})">${tr('delete')}</button></td></tr>`)));return `<div class="table-wrap"><table style="min-width:500px"><thead><tr><th>${tr('staffName')}</th><th>${tr('dept')}</th><th>${tr('actions')}</th></tr></thead><tbody>${rows.join('')||`<tr><td colspan="3">${tr('noData')}</td></tr>`}</tbody></table></div>`}
function ccReportTable(){let rows=[];Object.keys(state.ccStaff).forEach(type=>(state.ccStaff[type]||[]).forEach(n=>{let list=state.orders.filter(o=>o.ccStaff===n);rows.push(`<tr><td>${n}</td><td>${tr(type)}</td><td>${list.length}</td><td>${list.filter(o=>o.status==='cancel').length}</td><td>${ccRegText(list)}</td></tr>`)}));return `<div class="table-wrap"><table style="min-width:650px"><thead><tr><th>${tr('staffName')}</th><th>${tr('dept')}</th><th>${tr('totalOrders')}</th><th>${tr('cancelled')}</th><th>${tr('avgReg')}</th></tr></thead><tbody>${rows.join('')||`<tr><td colspan="5">${tr('noData')}</td></tr>`}</tbody></table></div>`}

function branchNewOrdersHTML(){
  let list=visibleOrders().filter(o=>['waiting','preparing'].includes(o.status));
  return `<div class="card"><h2>${lang==='ar'?'شاشة فرع ':'Branch Screen - '}${bName(current.branch)}</h2><p class="muted">${list.length} ${tr('active')} — ${tr('newBranchOrdersHint')}</p>${branchNewOrdersTable(list)}</div>`
}
function branchNewOrdersTable(list){
  return `<div class="table-wrap"><table><thead><tr>
  <th>${tr('orderNo')}</th><th>${tr('total')}</th><th>${tr('status')}</th><th>${lang==='ar'?'ملحوظة الكول سنتر':'Call Center Note'}</th><th>${tr('preparer')}</th><th>${tr('prepNote')}</th><th>${tr('sendBranchTime')}</th><th>${lang==='ar'?'انتظار الفرع':'Branch Waiting'}</th><th>${tr('prepTime')}</th><th>${tr('actions')}</th>
  </tr></thead><tbody>${list.map(o=>{
    let action='—';
    if(o.status==='waiting'){
      action=`<select id="branchPrepBy_${o.id}">${preparerOptions(o.branch)}</select><button class="orange full" onclick="branchStartPrep('${o.id}')">${tr('receiveOrder')}</button>`;
    } else if(o.status==='preparing'){
      action=`<textarea id="branchPrepNote_${o.id}" placeholder="${tr('prepNotePlaceholder')}" oninput="updatePrepNoteInput('${o.id}')">${o.prepNote||''}</textarea><button class="green full" onclick="branchCompletePrep('${o.id}')">${tr('donePrep')}</button>`;
    }
    return `<tr><td>#${o.id}</td><td>${o.total}</td><td>${badge(o.status)}</td><td>${o.note||'—'}</td><td>${o.prepBy||'—'}</td><td>${o.prepNote||'—'}</td><td>${fmt(o.created)}</td><td>${dur(o.created,o.prepStart)}</td><td>${dur(o.prepStart,o.prepDone)}</td><td>${action}</td></tr>`
  }).join('')||`<tr><td colspan="10">${tr('noData')}</td></tr>`}</tbody></table></div>`
}
function branchAssignRiderHTML(){
  let list=visibleOrders().filter(o=>o.status==='done');
  return `<div class="card"><h2>${tr('branchAssignRider')}</h2><p class="muted">${tr('chooseRiderHint')}</p>${branchAssignRiderTable(list)}</div>`
}
function branchAssignRiderTable(list){
  return `<div class="table-wrap"><table><thead><tr>
  <th>${tr('orderNo')}</th><th>${tr('total')}</th><th>${tr('status')}</th><th>${lang==='ar'?'ملحوظة الكول سنتر':'Call Center Note'}</th><th>${tr('preparer')}</th><th>${tr('prepNote')}</th><th>${tr('preparedTime')}</th><th>${tr('rider')}</th><th>${tr('actions')}</th>
  </tr></thead><tbody>${list.map(o=>`<tr><td>#${o.id}</td><td>${o.total}</td><td>${badge(o.status)}</td><td>${o.note||'—'}</td><td>${o.prepBy||'—'}</td><td>${o.prepNote||'—'}</td><td>${fmt(o.prepDone)}</td><td><select id="branchRider_${o.id}">${ridersFor(o.branch).map(r=>`<option value="${r.username}">${r.name}</option>`).join('')}</select></td><td><button class="blue" onclick="branchAssignRider('${o.id}')">${tr('assignRider')}</button></td></tr>`).join('')||`<tr><td colspan="9">${tr('noData')}</td></tr>`}</tbody></table></div>`
}

function branchPrepHTML(){let list=visibleOrders().filter(o=>['waiting','preparing','done','assigned','picked','delivered'].includes(o.status));let cards=BRANCHES.map(b=>{let l=state.orders.filter(o=>o.branch===b.key);return metric(bName(b.key),l.filter(o=>!['delivered','cancel','refused'].includes(o.status)).length,'🏬')}).join('');return `<div class="grid g5">${current.role==='branch'?metric(bName(current.branch),list.length,'🏬'):cards}</div><div class="card"><h3>${tr('branchPrep')}</h3>${ordersTable(list)}</div><div class="card"><h3>${tr('preparers')}</h3>${preparersHTML()}</div>`}
function preparersHTML(){let rows=[];Object.keys(state.preparers).forEach(b=>(state.preparers[b]||[]).forEach((n,i)=>rows.push(`<tr><td>${n}</td><td>${bName(b)}</td><td>${current.role==='admin'?`<button class="red" onclick="deletePreparer('${b}',${i})">${tr('delete')}</button>`:'—'}</td></tr>`)));return `${current.role==='admin'?`<div class="grid g3"><label>${tr('branch')}<select id="prepBranch">${branchOptions()}</select></label><label>${tr('preparer')}<input id="prepName"></label><label>&nbsp;<button class="pink full" onclick="addPreparer()">${tr('add')}</button></label></div>`:''}<div class="table-wrap"><table style="min-width:500px"><thead><tr><th>${tr('preparer')}</th><th>${tr('branch')}</th><th>${tr('actions')}</th></tr></thead><tbody>${rows.join('')}</tbody></table></div>`}

function riderAssignedTime(o){return o.assignedAt||o.prepDone||o.created}
function riderAvgDelivery(list){let delivered=list.filter(o=>o.status==='delivered'&&o.pickedAt&&o.deliveredAt);if(!delivered.length)return '—';let avg=Math.round(delivered.reduce((sum,o)=>sum+mins(o.pickedAt,o.deliveredAt),0)/delivered.length);return avg+' min'}
function riderOriginalHTML(){
  let list=visibleOrders().filter(o=>['assigned','picked','delivered','refused'].includes(o.status));
  let active=list.filter(o=>['assigned','picked'].includes(o.status));
  let delivered=list.filter(o=>o.status==='delivered');
  let refused=list.filter(o=>o.status==='refused');
  let pts=list.reduce((s,o)=>s+calcPoints(o),0)+(current.manualPoints||0);
  return `<div class="grid g5">${metric(tr('totalOrders'),list.length,'📦')}${metric(tr('active'),active.length,'⏱️')}${metric(tr('delivered'),delivered.length,'✅')}${metric(tr('refused'),refused.length,'⚠️')}${metric(lang==='ar'?'متوسط التوصيل':'Average Delivery',riderAvgDelivery(list),'🏍️')}${metric(tr('points'),pts,'🏆')}</div><div class="card"><div class="row" style="justify-content:space-between"><div><h3>${lang==='ar'?'كل الأوردرات':'All Orders'}</h3><p class="muted">${list.length} ${lang==='ar'?'أوردر':'orders'}</p></div></div>${riderOriginalTable(list)}</div>`
}
function riderOriginalTable(list){
  return `<div class="table-wrap"><table style="min-width:900px"><thead><tr><th>Order</th><th>Date</th><th>Branch</th><th>Rider</th><th>Status</th><th>Assigned</th><th>Picked</th><th>Done</th><th>Duration</th><th>Points</th><th>Actions</th></tr></thead><tbody>${list.map(o=>`<tr><td>#${o.id}</td><td>${dateOnly(riderAssignedTime(o))}</td><td>${bName(o.branch)}</td><td>${riderName(o.rider)}</td><td>${badge(o.status)}</td><td>${fmt(riderAssignedTime(o))}</td><td>${fmt(o.pickedAt)}</td><td>${fmt(o.deliveredAt||o.cancelledAt)}</td><td>${o.pickedAt&&o.deliveredAt?mins(o.pickedAt,o.deliveredAt)+' min':'—'}</td><td><b>${calcPoints(o)}</b></td><td><div class="row">${riderOnlyActions(o)}</div></td></tr>`).join('')||`<tr><td colspan="11">${tr('noData')}</td></tr>`}</tbody></table></div>`
}
function riderOnlyActions(o){
  let a=[];
  if(o.status==='assigned')a.push(`<button class="orange" onclick="pickUp('${o.id}')">${tr('pickUp')}</button>`);
  if(o.status==='picked'){
    a.push(`<button class="green" onclick="deliver('${o.id}')">${tr('deliver')}</button>`);
    a.push(`<button class="red" onclick="refuse('${o.id}')">${tr('refuse')}</button>`);
  }
  return a.join('')||'—';
}

function deliveryHTML(){let riders=state.accounts.filter(a=>a.role==='rider'&&(current.role!=='branch'||a.branch===current.branch));let list=visibleOrders().filter(o=>['done','assigned','picked','delivered','refused'].includes(o.status));if(current.role==='admin'){return `<div class="grid g3">${metric(tr('riders'),riders.length,'🏍️')}${metric(tr('delivered'),state.orders.filter(o=>o.status==='delivered').length,'✅')}${metric(tr('points'),state.orders.reduce((s,o)=>s+calcPoints(o),0)+riders.reduce((s,r)=>s+(r.manualPoints||0),0),'🏆')}</div><div class="card"><h3>${tr('delivery')}</h3>${ridersTable(riders)}</div>`}return `<div class="grid g3">${metric(tr('riders'),riders.length,'🏍️')}${metric(tr('delivered'),list.filter(o=>o.status==='delivered').length,'✅')}${metric(tr('points'),calcAllPoints(),'🏆')}</div><div class="card"><h3>${tr('delivery')}</h3>${ordersTable(list)}</div><div class="card"><h3>${tr('riders')}</h3>${ridersTable(riders)}</div>`}
function calcPoints(o){let m=mins(o.pickedAt,o.deliveredAt);if(!m)return 0;if(m<=state.points.fastMinutes)return Number(state.points.fastPoints)||0;if(m<=state.points.normalMinutes)return Number(state.points.normalPoints)||0;return 0}
function calcAllPoints(){return visibleOrders().reduce((s,o)=>s+calcPoints(o),0)}
function ridersTable(riders){let canAdjust=current&&current.role==='admin';return `<div class="table-wrap"><table style="min-width:720px"><thead><tr><th>${tr('name')}</th><th>${tr('branch')}</th><th>${tr('delivered')}</th><th>${tr('points')}</th>${canAdjust?`<th>${tr('manualAdjust')}</th>`:''}</tr></thead><tbody>${riders.map(r=>{let l=state.orders.filter(o=>o.rider===r.username);let pts=l.reduce((s,o)=>s+calcPoints(o),0)+(r.manualPoints||0);return `<tr><td>${r.name}</td><td>${bName(r.branch)}</td><td>${l.filter(o=>o.status==='delivered').length}</td><td><b>${pts}</b></td>${canAdjust?`<td><div class="row"><button class="green" onclick="adjustRiderPoints('${r.username}',1)">+1</button><button class="red" onclick="adjustRiderPoints('${r.username}',-1)">-1</button></div></td>`:''}</tr>`}).join('')||`<tr><td colspan="${canAdjust?5:4}">${tr('noData')}</td></tr>`}</tbody></table></div>`}

function addPeopleHTML(){return `<div class="grid g2"><div class="card"><h3>${tr('callCenterPeople')}</h3>
<div class="grid g2"><label>${tr('dept')}<select id="addStaffType"><option value="social">${tr('social')}</option><option value="agent">${tr('agent')}</option></select></label><label>${tr('staffName')}<input id="addStaffName"></label></div><button class="pink" onclick="addStaff()">${tr('add')}</button><hr>${staffManageEditTable()}</div>
<div class="card"><h3>${tr('preparerPeople')}</h3><div class="grid g3"><label>${tr('branch')}<select id="prepBranch">${branchOptions()}</select></label><label>${tr('preparer')}<input id="prepName"></label><label>&nbsp;<button class="pink full" onclick="addPreparer()">${tr('add')}</button></label></div><hr>${preparerEditTable()}</div></div>`}
function staffManageEditTable(){let rows=[];Object.keys(state.ccStaff).forEach(type=>(state.ccStaff[type]||[]).forEach((n,i)=>{let id=safeKey(type+'_'+i);rows.push(`<tr><td><input id="staffName_${id}" value="${n}"></td><td><select id="staffType_${id}"><option value="social" ${type==='social'?'selected':''}>${tr('social')}</option><option value="agent" ${type==='agent'?'selected':''}>${tr('agent')}</option></select></td><td><div class="row"><button class="blue" onclick="updateStaff('${type}',${i},'${id}')">${tr('save')}</button><button class="red" onclick="deleteStaff('${type}',${i})">${tr('delete')}</button></div></td></tr>`)}));return `<div class="table-wrap"><table style="min-width:650px"><thead><tr><th>${tr('staffName')}</th><th>${tr('dept')}</th><th>${tr('actions')}</th></tr></thead><tbody>${rows.join('')||`<tr><td colspan="3">${tr('noData')}</td></tr>`}</tbody></table></div>`}
function preparerEditTable(){let rows=[];Object.keys(state.preparers).forEach(b=>(state.preparers[b]||[]).forEach((n,i)=>{let id=safeKey(b+'_'+i);rows.push(`<tr><td><input id="prepName_${id}" value="${n}"></td><td><select id="prepBranch_${id}">${BRANCHES.map(x=>`<option value="${x.key}" ${b===x.key?'selected':''}>${bName(x.key)}</option>`).join('')}</select></td><td><div class="row"><button class="blue" onclick="updatePreparer('${b}',${i},'${id}')">${tr('save')}</button><button class="red" onclick="deletePreparer('${b}',${i})">${tr('delete')}</button></div></td></tr>`)}));return `<div class="table-wrap"><table style="min-width:650px"><thead><tr><th>${tr('preparer')}</th><th>${tr('branch')}</th><th>${tr('actions')}</th></tr></thead><tbody>${rows.join('')||`<tr><td colspan="3">${tr('noData')}</td></tr>`}</tbody></table></div>`}
function safeKey(v){return String(v).replace(/[^a-zA-Z0-9_]/g,'_')}

function accountsHTML(){return `<div class="card"><h3>${tr('accounts')}</h3>
<div class="grid g5"><label>${tr('username')}<input id="accUser"></label><label>${tr('password')}<input id="accPass" value="1234"></label><label>${tr('name')}<input id="accName"></label><label>${tr('role')}<select id="accRole"><option value="admin">Admin</option><option value="ccadmin">Call Center Admin</option><option value="callcenter">Call Center</option><option value="branch">Branch</option><option value="rider">Rider</option></select></label><label>${tr('branch')}<select id="accBranch">${branchOptions(true)}</select></label></div><button class="pink" onclick="addAccount()">${tr('add')}</button><hr>
<div class="table-wrap"><table><thead><tr><th>${tr('username')}</th><th>${tr('password')}</th><th>${tr('name')}</th><th>${tr('role')}</th><th>${tr('branch')}</th><th>${tr('actions')}</th></tr></thead><tbody>${state.accounts.map((a,i)=>`<tr><td><input id="editAccUser_${i}" value="${a.username}" ${a.username==='admin'?'disabled':''}></td><td><input id="editAccPass_${i}" value="${a.password}"></td><td><input id="editAccName_${i}" value="${a.name}"></td><td><select id="editAccRole_${i}" ${a.username==='admin'?'disabled':''}><option value="admin" ${a.role==='admin'?'selected':''}>Admin</option><option value="ccadmin" ${a.role==='ccadmin'?'selected':''}>Call Center Admin</option><option value="callcenter" ${a.role==='callcenter'?'selected':''}>Call Center</option><option value="branch" ${a.role==='branch'?'selected':''}>Branch</option><option value="rider" ${a.role==='rider'?'selected':''}>Rider</option></select></td><td><select id="editAccBranch_${i}">${branchOptions(true).replace(`value="${a.branch}"`,`value="${a.branch}" selected`)}</select></td><td><div class="row"><button class="blue" onclick="updateAccount(${i})">${tr('save')}</button>${a.username==='admin'?'':`<button class="red" onclick="deleteAccount(${i})">${tr('delete')}</button>`}</div></td></tr>`).join('')}</tbody></table></div></div>`}
function settingsHTML(){return `<div class="card"><h3>${tr('settings')}</h3><div class="grid g4"><label>${lang==='ar'?'دقائق التوصيل السريع':'Fast delivery minutes'}<input id="fastMin" type="number" value="${state.points.fastMinutes}"></label><label>${lang==='ar'?'نقاط التوصيل السريع':'Fast delivery points'}<input id="fastPts" type="number" value="${state.points.fastPoints}"></label><label>${lang==='ar'?'دقائق التوصيل العادي':'Normal delivery minutes'}<input id="normalMin" type="number" value="${state.points.normalMinutes}"></label><label>${lang==='ar'?'نقاط التوصيل العادي':'Normal delivery points'}<input id="normalPts" type="number" value="${state.points.normalPoints}"></label></div><button class="pink" onclick="saveSettings()">${tr('save')}</button><p class="note">${tr('localOnly')}</p></div>`}
function attachAfterRender(){if($('newCcType')){updateCcStaffSelect();checkCcSendReady()}}
function updateCcStaffSelect(){let type=$('newCcType').value;$('newCcStaff').innerHTML=ccStaffOptions(type)}
function checkCcSendReady(){if(!$('ccSendBtn'))return;let ok=!!ccDraftStart && $('newOrderId') && $('newOrderId').value.trim() && $('newTotal') && $('newTotal').value.trim();$('ccSendBtn').disabled=!ok}
function startCustomerOrder(){ccDraftStart=Date.now();render()}
function resetCcDraft(){ccDraftStart=null}
function addCcOrder(){if(!ccDraftStart)return alert(tr('mustStartFirst'));let id=$('newOrderId').value.trim();if(!id)return alert(tr('orderNo'));state.orders.unshift({id,total:Number($('newTotal').value||0),branch:$('newBranch').value,ccType:$('newCcType').value,ccStaff:$('newCcStaff').value,note:$('newNote').value.trim(),prepBy:'',prepNote:'',rider:'',status:'waiting',ccStart:ccDraftStart,created:Date.now(),prepStart:null,prepDone:null,pickedAt:null,deliveredAt:null,cancelledAt:null});resetCcDraft();save();render()}
function addCancelledCcOrder(){if(!ccDraftStart)return alert(tr('mustStartFirst'));let id=$('newOrderId').value.trim()||('CANCEL-'+Date.now());state.orders.unshift({id,total:Number($('newTotal').value||0),branch:$('newBranch')?$('newBranch').value:'All',ccType:$('newCcType')?$('newCcType').value:'agent',ccStaff:$('newCcStaff')?$('newCcStaff').value:'',note:$('newNote')?$('newNote').value.trim():'',prepBy:'',prepNote:'',rider:'',status:'cancel',ccStart:ccDraftStart,created:Date.now(),prepStart:null,prepDone:null,pickedAt:null,deliveredAt:null,cancelledAt:Date.now()});resetCcDraft();save();render()}
function branchStartPrep(id){let o=state.orders.find(x=>x.id==id);if(!o)return;let s=$('branchPrepBy_'+id);o.prepBy=s?s.value:(state.preparers[o.branch]||[])[0]||'';o.status='preparing';o.prepStart=Date.now();save();render()}
function updatePrepNoteInput(id){let o=state.orders.find(x=>x.id==id);if(!o)return;let n=$('branchPrepNote_'+id);if(n){o.prepNote=n.value}}
function branchCompletePrep(id){let o=state.orders.find(x=>x.id==id);if(!o)return;let n=$('branchPrepNote_'+id);if(n)o.prepNote=n.value.trim();o.status='done';o.prepDone=Date.now();save();render()}
function branchAssignRider(id){let o=state.orders.find(x=>x.id==id);if(!o)return;let r=$('branchRider_'+id);if(!r||!r.value)return alert(tr('noData'));o.rider=r.value;o.status='assigned';o.assignedAt=Date.now();save();render()}
function startPrep(id){let o=state.orders.find(x=>x.id==id);if(!o)return;let list=state.preparers[o.branch]||[];o.prepBy=o.prepBy||list[0]||'';o.status='preparing';o.prepStart=Date.now();save();render()}
function donePrep(id){let o=state.orders.find(x=>x.id==id);if(!o)return;let note=prompt(tr('prepNote'),o.prepNote||'');if(note!==null)o.prepNote=note;o.status='done';o.prepDone=Date.now();save();render()}
function assignRiderPrompt(id){let o=state.orders.find(x=>x.id==id);if(!o)return;let riders=ridersFor(o.branch);let msg=riders.map(r=>`${r.username} - ${r.name}`).join('\n');let u=prompt(`${tr('rider')}\n${msg}`,riders[0]?.username||'');if(!riders.some(r=>r.username===u))return alert(tr('noData'));o.rider=u;o.status='assigned';o.assignedAt=Date.now();save();render()}
function pickUp(id){let o=state.orders.find(x=>x.id==id);if(!o)return;o.status='picked';o.pickedAt=Date.now();save();render()}
function deliver(id){let o=state.orders.find(x=>x.id==id);if(!o)return;o.status='delivered';o.deliveredAt=Date.now();save();render()}
function refuse(id){let o=state.orders.find(x=>x.id==id);if(!o)return;o.status='refused';o.cancelledAt=Date.now();save();render()}
function cancelOrder(id){let o=state.orders.find(x=>x.id==id);if(!o)return;if(confirm(tr('cancelOrder')+'?')){o.status='cancel';o.cancelledAt=Date.now();save();render()}}
function addStaff(){let t=$('addStaffType').value,n=$('addStaffName').value.trim();if(!n)return;if(!state.ccStaff[t])state.ccStaff[t]=[];state.ccStaff[t].push(n);save();render()}
function deleteStaff(t,i){state.ccStaff[t].splice(i,1);save();render()}
function updateStaff(oldType,i,id){let newName=$('staffName_'+id).value.trim();let newType=$('staffType_'+id).value;if(!newName)return;let oldName=state.ccStaff[oldType][i];state.ccStaff[oldType].splice(i,1);if(!state.ccStaff[newType])state.ccStaff[newType]=[];state.ccStaff[newType].push(newName);state.orders.forEach(o=>{if(o.ccStaff===oldName&&o.ccType===oldType){o.ccStaff=newName;o.ccType=newType}});save();render()}
function addPreparer(){let b=$('prepBranch').value,n=$('prepName').value.trim();if(!n)return;if(!state.preparers[b])state.preparers[b]=[];state.preparers[b].push(n);save();render()}
function deletePreparer(b,i){state.preparers[b].splice(i,1);save();render()}
function updatePreparer(oldBranch,i,id){let newName=$('prepName_'+id).value.trim();let newBranch=$('prepBranch_'+id).value;if(!newName)return;let oldName=state.preparers[oldBranch][i];state.preparers[oldBranch].splice(i,1);if(!state.preparers[newBranch])state.preparers[newBranch]=[];state.preparers[newBranch].push(newName);state.orders.forEach(o=>{if(o.prepBy===oldName&&o.branch===oldBranch){o.prepBy=newName;o.branch=newBranch}});save();render()}
function adjustRiderPoints(username,value){let r=state.accounts.find(a=>a.username===username);if(!r)return;r.manualPoints=(r.manualPoints||0)+value;save();render()}
function addAccount(){let u=$('accUser').value.trim(),p=$('accPass').value.trim(),n=$('accName').value.trim(),r=$('accRole').value,b=$('accBranch').value;if(!u||!p||!n)return;if(state.accounts.some(a=>a.username.toLowerCase()===u.toLowerCase()))return alert('Username exists');state.accounts.push({username:u,password:p,name:n,role:r,branch:(r==='admin'||r==='ccadmin'||r==='callcenter')?'All':b,manualPoints:0});save();render()}
function updateAccount(i){let old=state.accounts[i];if(!old)return;let u=$('editAccUser_'+i).value.trim(),p=$('editAccPass_'+i).value.trim(),n=$('editAccName_'+i).value.trim(),r=$('editAccRole_'+i).value,b=$('editAccBranch_'+i).value;if(!u||!p||!n)return;if(state.accounts.some((a,idx)=>idx!==i&&a.username.toLowerCase()===u.toLowerCase()))return alert('Username exists');if(old.username==='admin'){u='admin';r='admin'}state.orders.forEach(o=>{if(o.rider===old.username)o.rider=u});state.accounts[i]={...old,username:u,password:p,name:n,role:r,branch:(r==='admin'||r==='ccadmin'||r==='callcenter')?'All':b,manualPoints:old.manualPoints||0};save();render()}
function deleteAccount(i){state.accounts.splice(i,1);save();render()}
function saveSettings(){state.points={fastMinutes:Number($('fastMin').value||10),fastPoints:Number($('fastPts').value||0),normalMinutes:Number($('normalMin').value||20),normalPoints:Number($('normalPts').value||0)};save();render()}

function exportCompletedCSV(){
let list=filterOrdersRange(visibleOrders().filter(o=>['delivered','refused','cancel'].includes(o.status)),'completed');
let headers=['Order','Total','Branch','Call Center Staff','Order Start Time','Order Registration Time','Sent To Branch Time','Branch Received Time','Prepared Time','Rider','Rider Picked Up Time','Rider Delivered Time','Status','Total Order Time After Sent To Branch','Call Center Note','Preparer Note','Rider Finish Location','Location Accuracy','Location Time','Final Action'];
let data=list.map(o=>[o.id,o.total,bName(o.branch),o.ccStaff||'',fmt(ccStartTime(o)),registrationDuration(o),fmt(o.created),fmt(o.prepStart),fmt(o.prepDone),riderName(o.rider),fmt(o.pickedAt),fmt(o.deliveredAt),statusLabel(o.status),totalOrderLabel(o),o.note||'',o.prepNote||'',locationMapUrl(o)||'',locationAccuracyCell(o),locationTimeCell(o),statusLabel(getFinalLocation(o).action||o.status)]);
let rows=[headers,...data];let csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');let blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8;'});let url=URL.createObjectURL(blob);let a=document.createElement('a');a.href=url;a.download='cstore-completed-orders.csv';a.click();URL.revokeObjectURL(url)}

function exportCSV(){
let headers=current&&current.role==='admin'
?['Order','Total','Branch','Call Center Staff','Call Center Order Time','Order Registration Time','Branch Received Time','Prepared Time','Rider','Rider Picked Up Time','Rider Delivered Time','Status','Total Order Time After Sent To Branch','Note','Preparer Note','Rider Finish Location','Location Accuracy','Location Time','Final Action']
:['Order','Total','Branch','CC Staff','CC Type','Preparer','Rider','Status','Created','Prep Minutes','Delivery Minutes','Note','Prep Note'];
let data=current&&current.role==='admin'
?visibleOrders().map(o=>[o.id,o.total,bName(o.branch),o.ccStaff||'',fmt(ccStartTime(o)),registrationDuration(o),fmt(o.created),fmt(o.prepStart),fmt(o.prepDone),riderName(o.rider),fmt(o.pickedAt),fmt(o.deliveredAt),statusLabel(o.status),totalOrderLabel(o),o.note||'',o.prepNote||'',locationMapUrl(o)||'',locationAccuracyCell(o),locationTimeCell(o),statusLabel(getFinalLocation(o).action||o.status)])
:visibleOrders().map(o=>[o.id,o.total,bName(o.branch),o.ccStaff||'',o.ccType||'',o.prepBy||'',riderName(o.rider),statusLabel(o.status),fmt(o.created),mins(o.prepStart,o.prepDone),mins(o.pickedAt,o.deliveredAt),o.note||'',o.prepNote||'']);
let rows=[headers,...data];let csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');let blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8;'});let url=URL.createObjectURL(blob);let a=document.createElement('a');a.href=url;a.download=current&&current.role==='admin'?'cstore-all-times.csv':'cstore-unified-orders.csv';a.click();URL.revokeObjectURL(url)}
setLang(lang);

window.addEventListener('DOMContentLoaded',()=>{if($('loginUser'))$('loginUser').value='';if($('loginPass'))$('loginPass').value='';state=normalizeState(state);save();});

// Expose functions for inline HTML event handlers
Object.assign(window, {
  accountsHTML,
  addAccount,
  addCancelledCcOrder,
  addCcOrder,
  addPeopleHTML,
  addPreparer,
  addStaff,
  adjustRiderPoints,
  adminDeliveryHTML,
  adminPrepHTML,
  allTimesTable,
  assignRiderPrompt,
  attachAfterRender,
  avgMins,
  bName,
  badge,
  branchAssignRider,
  branchAssignRiderHTML,
  branchAssignRiderTable,
  branchCompletePrep,
  branchNewOrdersHTML,
  branchNewOrdersTable,
  branchOptions,
  branchPrepHTML,
  branchPrepRateHTML,
  branchStartPrep,
  calcAllPoints,
  calcPoints,
  callCenterHTML,
  cancelOrder,
  ccAddHTML,
  ccAdminHTML,
  ccManageHTML,
  ccOrdersOnly,
  ccOverviewHTML,
  ccRegText,
  ccReportHTML,
  ccReportTable,
  ccStaffOptions,
  ccStartTime,
  checkCcSendReady,
  clearFilter,
  clearOverviewFilters,
  clone,
  completedFilterControls,
  completedOrdersHTML,
  dateOnly,
  dayValue,
  deleteAccount,
  deletePreparer,
  deleteStaff,
  deliver,
  deliveryHTML,
  donePrep,
  dur,
  exportCSV,
  exportCompletedCSV,
  filterControls,
  filterOrders,
  filterOrdersRange,
  finalLocationCell,
  fmt,
  getFinalLocation,
  inPeriod,
  loadState,
  locationAccuracyCell,
  locationMapUrl,
  locationTimeCell,
  login,
  logout,
  metric,
  miniPerf,
  mins,
  normalizeState,
  orderActions,
  orderEndTime,
  ordersHTML,
  ordersTable,
  overviewFiltersHTML,
  overviewHTML,
  performanceCards,
  periodOrders,
  pickUp,
  preparerEditTable,
  preparerOptions,
  preparersHTML,
  refuse,
  registrationDuration,
  render,
  renderTabs,
  resetCcDraft,
  resetDemo,
  riderAssignedTime,
  riderAvgDelivery,
  riderName,
  riderOnlyActions,
  riderOriginalHTML,
  riderOriginalTable,
  ridersFor,
  ridersTable,
  roleName,
  safeKey,
  save,
  saveSettings,
  setLang,
  setLangOnly,
  setTab,
  settingsHTML,
  staffManageEditTable,
  staffManageTable,
  startCustomerOrder,
  startPrep,
  statusLabel,
  summary,
  tabTitle,
  tabsFor,
  totalOrderDuration,
  totalOrderLabel,
  updateAccount,
  updateCcStaffSelect,
  updateFilter,
  updatePrepNoteInput,
  updatePreparer,
  updateStaff,
  visibleOrders
});
