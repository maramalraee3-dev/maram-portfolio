# موقع مرام الراعي — Portfolio

موقع ثابت (HTML + CSS + JavaScript) جاهز للنشر على Netlify مباشرة، بدون أي أوامر بناء أو تثبيت.

## بنية الملفات

```
index.html                ← هيكل الصفحة
netlify.toml              ← إعدادات Netlify
assets/
  css/style.css           ← التصميم والألوان والتجاوب
  js/content.js           ← ✏️ المحتوى: المشاريع، الفيديوهات، آراء العملاء، الروابط
  js/main.js              ← الحركة والتفاعلات (لا حاجة لتعديله)
  img/                    ← صورك الشخصية وصورة المشاركة og.jpg
  projects/               ← ضعي هنا صور مشاريع الجرافيك
  videos/                 ← ضعي هنا الفيديوهات وصور الأغلفة
```

## النشر على Netlify

1. ادخلي إلى https://app.netlify.com/drop
2. اسحبي **المجلد كاملًا** (الذي يحتوي `index.html`) وأفلتيه في الصفحة.
3. يظهر رابط الموقع خلال ثوانٍ. يمكنك تغيير اسم الرابط من Site settings.

للتحديث لاحقًا: من صفحة الموقع في Netlify ← Deploys ← اسحبي المجلد مرة أخرى.

## إضافة مشروع جرافيك

1. أنشئي مجلدًا مثل `assets/projects/brand-cafe/` وضعي فيه الصور (JPG أو WEBP، بعرض 1600–2400px).
2. افتحي `assets/js/content.js` وأضيفي داخل `projects: [ ]`:

```js
{
  title: 'هوية مقهى',
  category: 'هوية بصرية',
  categoryEn: 'BRAND IDENTITY',
  description: 'وصف قصير اختياري',
  images: [
    'assets/projects/brand-cafe/01.jpg',
    'assets/projects/brand-cafe/02.jpg',
    'assets/projects/brand-cafe/03.jpg'
  ],
  behance: 'https://www.behance.net/...'   // اختياري
},
```

أول 3 صور تظهر في بطاقة المشروع، وكل الصور تظهر في المعرض عند الضغط. الصور تُعرض بجودتها الأصلية في المعرض (بدون قص).

## إضافة فيديو

```js
{
  title: 'إعلان منتج',
  type: 'Reels',
  src: 'assets/videos/ad-1.mp4',
  poster: 'assets/videos/ad-1.jpg',
  preview: 'assets/videos/ad-1-preview.mp4', // اختياري: مقطع قصير صامت 3–6 ثوانٍ
  ratio: '9:16'                                 // أو '16:9'
},
```

نصائح للأداء: صدّري الفيديو بصيغة MP4 (H.264) وبحجم مناسب (1080p للريلز، أقل من 20MB إن أمكن). إذا كانت الفيديوهات كبيرة جدًا، يمكن رفعها على YouTube أو Vimeo ووضع رابط مباشر لملف MP4 من خدمة استضافة.

## آراء العملاء

لا تظهر أي مراجعة إلا إذا كانت `approved: true`:

```js
{ text: 'نص المراجعة', role: 'صاحبة متجر إلكتروني', approved: true },
```

لا أسماء عملاء ولا شركات ولا نجوم تقييم.

## قبل النشر النهائي

في أعلى `content.js` غيّري:

```js
showPlaceholders: false,
```

حتى تختفي البطاقات المؤقتة. إذا لم توجد مراجعات معتمدة، يختفي قسم CLIENTS تلقائيًا.
