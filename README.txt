C Store Delivery Dashboard - Vite Public Fixed

المشكلة التي تم حلها:
- Vite أحيانًا لا ينسخ ملف js/app.js إذا كان خارج public، فيظهر التصميم CSS لكن الدخول لا يعمل.
- تم وضع css/js/assets داخل public لضمان ظهورها بعد Build.
- تم ترك نسخة خارج public أيضًا حتى يعمل index.html محليًا عند فتحه مباشرة.

Vercel Settings:
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist

Demo users:
admin / 1234
ccadmin / 1234
callcenter / 1234
maadi / 1234
heliopolis / 1234
newcairo1 / 1234
newcairo5 / 1234
abbas / 1234
ahmed / 1234
mohamed / 1234
youssef / 1234


Supabase:
1) Open Supabase SQL Editor.
2) Run supabase-setup.sql.
3) Deploy this project to Vercel.
4) Data will sync to table: app_state.

Important:
- This version syncs the full dashboard state as JSON in one Supabase table.
- For production with real users, use stronger RLS and real auth later.


Orders table version:
1) In Supabase SQL Editor, run supabase-orders-setup.sql.
2) Redeploy this project.
3) New orders will be saved as rows inside public.orders.
