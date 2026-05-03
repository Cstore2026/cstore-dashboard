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
