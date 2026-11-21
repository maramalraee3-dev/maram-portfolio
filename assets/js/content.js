/* =========================================================
   محتوى الموقع — عدّلي هذا الملف فقط لإضافة أعمالك
   ---------------------------------------------------------
   • الصور:   ضعيها داخل  assets/projects/اسم-المشروع/
   • الفيديو: ضعيه داخل   assets/videos/
   • بعد إضافة أعمالك الحقيقية اجعلي showPlaceholders = false
     حتى تختفي الأماكن المؤقتة (النماذج) من الموقع المنشور.
   ========================================================= */

window.SITE_CONTENT = {

  // true = عرض أماكن مؤقتة واضحة (للمعاينة فقط) عندما يكون القسم فارغًا
  showPlaceholders: false,

  links: {
    message:   'https://ig.me/m/maram.design31',   // زر «راسلني» — رسالة مباشرة على إنستغرام
    instagram: 'https://www.instagram.com/maram.design31/?hl=ar'
  },

  /* ---------------- الخدمات ---------------- */
  services: [
    { ar: 'تصميم الجرافيك',          en: 'GRAPHIC DESIGN',     icon: 1,
      desc: 'تصاميم مدروسة تجمع بين الفكرة والجمال، وتوصل رسالتك بوضوح وبأسلوب يشبهك.' },
    { ar: 'تصميم السوشيال ميديا',    en: 'SOCIAL MEDIA DESIGN', icon: 2,
      desc: 'منشورات وستوريات متناسقة تبني حضورًا بصريًا قويًا وتلفت الانتباه من أول نظرة.' },
    { ar: 'مونتاج الفيديو',          en: 'VIDEO EDITING',      icon: 3,
      desc: 'مونتاج بإيقاع مدروس يحوّل اللقطات الخام إلى قصة متكاملة تُشاهَد حتى النهاية.' },
    { ar: 'مونتاج الريلز والإعلانات', en: 'REELS & ADS EDITING', icon: 4,
      desc: 'فيديوهات قصيرة سريعة الإيقاع، تشدّ المشاهد من الثواني الأولى وتخدم هدف الإعلان.' },
    { ar: 'تصميم الهوية البصرية',    en: 'VISUAL IDENTITY',    icon: 5,
      desc: 'شعار وألوان وخطوط ونظام بصري متكامل يمنح علامتك شخصية واضحة ومميزة.' },
    { ar: 'تصميم المطبوعات',         en: 'PRINT DESIGN',       icon: 6,
      desc: 'بروشورات وبطاقات وملصقات جاهزة للطباعة، بدقة عالية واهتمام بأدق التفاصيل.' }
  ],

  /* ---------------- أعمالي (الجرافيك) ----------------
     مثال لإضافة مشروع:
     {
       title: 'اسم المشروع',
       category: 'هوية بصرية',          // بالعربي
       categoryEn: 'BRAND IDENTITY',     // بالإنجليزي
       description: 'وصف قصير اختياري',
       images: [                          // أول صورة = الصورة الرئيسية
         'assets/projects/project-1/01.jpg',
         'assets/projects/project-1/02.jpg',
         'assets/projects/project-1/03.jpg'
       ],
       behance: 'https://www.behance.net/...'  // اختياري
     },
  ------------------------------------------------------ */
  projects: [
    {
      "title": "رقيم — حملة سوشيال ميديا لوكالة خدمات قانونية",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/raqeem/01.webp",
        "assets/projects/raqeem/02.webp",
        "assets/projects/raqeem/03.webp",
        "assets/projects/raqeem/04.webp",
        "assets/projects/raqeem/05.webp",
        "assets/projects/raqeem/06.webp",
        "assets/projects/raqeem/07.webp",
        "assets/projects/raqeem/08.webp",
        "assets/projects/raqeem/09.webp"
      ],
      "thumbs": [
        "assets/projects/raqeem/01-sm.webp",
        "assets/projects/raqeem/02-sm.webp",
        "assets/projects/raqeem/03-sm.webp",
        "assets/projects/raqeem/04-sm.webp",
        "assets/projects/raqeem/05-sm.webp",
        "assets/projects/raqeem/06-sm.webp",
        "assets/projects/raqeem/07-sm.webp",
        "assets/projects/raqeem/08-sm.webp",
        "assets/projects/raqeem/09-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8
      ]
    },
    {
      "title": "IVM — إعلان إطلاق منصة استثمار",
      "categoryEn": "SOCIAL MEDIA ADS",
      "images": [
        "assets/projects/ivm/01.webp"
      ],
      "thumbs": [
        "assets/projects/ivm/01-sm.webp"
      ],
      "ratios": [
        0.8
      ]
    },
    {
      "title": "Abstract — حملة سوشيال ميديا لشركة سفر وسياحة",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/abstract-travel/01.webp",
        "assets/projects/abstract-travel/02.webp",
        "assets/projects/abstract-travel/03.webp",
        "assets/projects/abstract-travel/04.webp",
        "assets/projects/abstract-travel/05.webp",
        "assets/projects/abstract-travel/06.webp"
      ],
      "thumbs": [
        "assets/projects/abstract-travel/01-sm.webp",
        "assets/projects/abstract-travel/02-sm.webp",
        "assets/projects/abstract-travel/03-sm.webp",
        "assets/projects/abstract-travel/04-sm.webp",
        "assets/projects/abstract-travel/05-sm.webp",
        "assets/projects/abstract-travel/06-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8
      ]
    },
    {
      "title": "AK × Exness — حملة سوشيال ميديا لتداول الذهب",
      "categoryEn": "SOCIAL MEDIA ADS",
      "images": [
        "assets/projects/ak-gold/01.webp",
        "assets/projects/ak-gold/02.webp",
        "assets/projects/ak-gold/03.webp",
        "assets/projects/ak-gold/04.webp"
      ],
      "thumbs": [
        "assets/projects/ak-gold/01-sm.webp",
        "assets/projects/ak-gold/02-sm.webp",
        "assets/projects/ak-gold/03-sm.webp",
        "assets/projects/ak-gold/04-sm.webp"
      ],
      "ratios": [
        0.917,
        0.8,
        0.8,
        0.8
      ]
    },
    {
      "title": "بنترا — حملة سوشيال ميديا لمنصة دورات تدريبية",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/pentra/01.webp",
        "assets/projects/pentra/02.webp",
        "assets/projects/pentra/03.webp",
        "assets/projects/pentra/04.webp",
        "assets/projects/pentra/05.webp",
        "assets/projects/pentra/06.webp",
        "assets/projects/pentra/07.webp",
        "assets/projects/pentra/08.webp",
        "assets/projects/pentra/09.webp"
      ],
      "thumbs": [
        "assets/projects/pentra/01-sm.webp",
        "assets/projects/pentra/02-sm.webp",
        "assets/projects/pentra/03-sm.webp",
        "assets/projects/pentra/04-sm.webp",
        "assets/projects/pentra/05-sm.webp",
        "assets/projects/pentra/06-sm.webp",
        "assets/projects/pentra/07-sm.webp",
        "assets/projects/pentra/08-sm.webp",
        "assets/projects/pentra/09-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8
      ]
    },
    {
      "title": "W — حملة سوشيال ميديا لشركة خدمات أعمال وتسويق",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/w-agency/01.webp",
        "assets/projects/w-agency/02.webp",
        "assets/projects/w-agency/03.webp",
        "assets/projects/w-agency/04.webp",
        "assets/projects/w-agency/05.webp",
        "assets/projects/w-agency/06.webp",
        "assets/projects/w-agency/07.webp",
        "assets/projects/w-agency/08.webp",
        "assets/projects/w-agency/09.webp"
      ],
      "thumbs": [
        "assets/projects/w-agency/01-sm.webp",
        "assets/projects/w-agency/02-sm.webp",
        "assets/projects/w-agency/03-sm.webp",
        "assets/projects/w-agency/04-sm.webp",
        "assets/projects/w-agency/05-sm.webp",
        "assets/projects/w-agency/06-sm.webp",
        "assets/projects/w-agency/07-sm.webp",
        "assets/projects/w-agency/08-sm.webp",
        "assets/projects/w-agency/09-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8
      ]
    },
    {
      "title": "Okyali — حملة سوشيال ميديا لمتجر نظارات",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/okyali/01.webp",
        "assets/projects/okyali/02.webp"
      ],
      "thumbs": [
        "assets/projects/okyali/01-sm.webp",
        "assets/projects/okyali/02-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8
      ]
    },
    {
      "title": "ODA — حملة سوشيال ميديا لمطعم ورق عنب وأكل صحي",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/oda/01.webp",
        "assets/projects/oda/02.webp",
        "assets/projects/oda/03.webp",
        "assets/projects/oda/04.webp",
        "assets/projects/oda/05.webp",
        "assets/projects/oda/06.webp",
        "assets/projects/oda/07.webp",
        "assets/projects/oda/08.webp",
        "assets/projects/oda/09.webp"
      ],
      "thumbs": [
        "assets/projects/oda/01-sm.webp",
        "assets/projects/oda/02-sm.webp",
        "assets/projects/oda/03-sm.webp",
        "assets/projects/oda/04-sm.webp",
        "assets/projects/oda/05-sm.webp",
        "assets/projects/oda/06-sm.webp",
        "assets/projects/oda/07-sm.webp",
        "assets/projects/oda/08-sm.webp",
        "assets/projects/oda/09-sm.webp"
      ],
      "ratios": [
        0.75,
        0.75,
        0.75,
        0.75,
        0.75,
        0.75,
        0.75,
        0.75,
        0.75
      ]
    },
    {
      "title": "إعلانات مطاعم ومخبوزات",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/food-ads/01.webp",
        "assets/projects/food-ads/02.webp"
      ],
      "thumbs": [
        "assets/projects/food-ads/01-sm.webp",
        "assets/projects/food-ads/02-sm.webp"
      ],
      "ratios": [
        0.8,
        1.0
      ]
    },
    {
      "title": "مطبوعات — ورق رسمي وغلاف دليل سفر",
      "categoryEn": "PRINT",
      "images": [
        "assets/projects/print/01.webp",
        "assets/projects/print/02.webp"
      ],
      "thumbs": [
        "assets/projects/print/01-sm.webp",
        "assets/projects/print/02-sm.webp"
      ],
      "ratios": [
        1.333,
        0.713
      ]
    },
    {
      "title": "إعلانات منتج — مشروبات طاقة بنكهات",
      "categoryEn": "PRODUCT ADS",
      "images": [
        "assets/projects/energy-drinks/01.webp",
        "assets/projects/energy-drinks/02.webp",
        "assets/projects/energy-drinks/03.webp"
      ],
      "thumbs": [
        "assets/projects/energy-drinks/01-sm.webp",
        "assets/projects/energy-drinks/02-sm.webp",
        "assets/projects/energy-drinks/03-sm.webp"
      ],
      "ratios": [
        0.799,
        0.8,
        0.8
      ]
    },
    {
      "title": "إعلانات منتجات تجميل وعناية",
      "categoryEn": "PRODUCT ADS",
      "images": [
        "assets/projects/beauty-products/01.webp",
        "assets/projects/beauty-products/02.webp",
        "assets/projects/beauty-products/03.webp"
      ],
      "thumbs": [
        "assets/projects/beauty-products/01-sm.webp",
        "assets/projects/beauty-products/02-sm.webp",
        "assets/projects/beauty-products/03-sm.webp"
      ],
      "ratios": [
        0.8,
        1.0,
        1.088
      ]
    },
    {
      "title": "La casa Estate — إعلان شركة عقارات",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/la-casa/01.webp"
      ],
      "thumbs": [
        "assets/projects/la-casa/01-sm.webp"
      ],
      "ratios": [
        0.8
      ]
    },
    {
      "title": "سعة — إعلانات تطبيق لإدارة المصاريف",
      "categoryEn": "APP ADS",
      "images": [
        "assets/projects/saa-app/01.webp",
        "assets/projects/saa-app/02.webp"
      ],
      "thumbs": [
        "assets/projects/saa-app/01-sm.webp",
        "assets/projects/saa-app/02-sm.webp"
      ],
      "ratios": [
        0.75,
        0.75
      ]
    }
  ],

  /* ---------------- فيديو إيديتور ----------------
     ratio: '9:16' للريلز  أو  '16:9' للفيديو العرضي
     {
       title: 'عنوان الفيديو',
       type: 'Reels',                         // نص صغير اختياري
       src: 'assets/videos/video-1.mp4',      // الفيديو الكامل
       poster: 'assets/videos/video-1.jpg',   // صورة الغلاف (مستحسن)
       preview: 'assets/videos/video-1-preview.mp4', // معاينة قصيرة صامتة (اختياري)
       ratio: '9:16'
     },
  ------------------------------------------------------ */
  videos: [
    {
      "title": "ريل تعريفي شخصي",
      "type": "Personal Reel",
      "src": "assets/videos/video-10.mp4",
      "crumple": "assets/videos/video-10-crumple.webp",
      "crumpleFrames": 12,
      "crumpleSize": [428, 704],
      "poster": "assets/videos/video-10.jpg",
      "preview": "assets/videos/video-10-preview.mp4",
      "ratio": "9:16"
    },
    {
      "title": "هوية بصرية — بنترا",
      "type": "Brand Video",
      "src": "assets/videos/video-2.mp4",
      "crumple": "assets/videos/video-2-crumple.webp",
      "crumpleFrames": 12,
      "crumpleSize": [428, 704],
      "poster": "assets/videos/video-2.jpg",
      "preview": "assets/videos/video-2-preview.mp4",
      "ratio": "9:16"
    },
    {
      "title": "جذور فلسطين",
      "type": "Story Video",
      "src": "assets/videos/video-4.mp4",
      "crumple": "assets/videos/video-4-crumple.webp",
      "crumpleFrames": 12,
      "crumpleSize": [1128, 687],
      "poster": "assets/videos/video-4.jpg",
      "preview": "assets/videos/video-4-preview.mp4",
      "ratio": "16:9"
    },
    {
      "title": "Zuma — ريل مطعم",
      "type": "Reels",
      "src": "assets/videos/video-3.mp4",
      "crumple": "assets/videos/video-3-crumple.webp",
      "crumpleFrames": 12,
      "crumpleSize": [428, 704],
      "poster": "assets/videos/video-3.jpg",
      "preview": "assets/videos/video-3-preview.mp4",
      "ratio": "9:16"
    },
    {
      "title": "Moon cafe",
      "type": "Reels",
      "src": "assets/videos/video-5.mp4",
      "crumple": "assets/videos/video-5-crumple.webp",
      "crumpleFrames": 12,
      "crumpleSize": [448, 704],
      "poster": "assets/videos/video-5.jpg",
      "preview": "assets/videos/video-5-preview.mp4",
      "ratio": "482:812"
    },
    {
      "title": "ريل مطعم تايلندي",
      "type": "Reels",
      "src": "assets/videos/video-8.mp4",
      "crumple": "assets/videos/video-8-crumple.webp",
      "crumpleFrames": 12,
      "crumpleSize": [455, 704],
      "poster": "assets/videos/video-8.jpg",
      "preview": "assets/videos/video-8-preview.mp4",
      "ratio": "1080:1788"
    },
    {
      "title": "من الفوضى للسكينة",
      "type": "Awareness Reel",
      "src": "assets/videos/video-6.mp4",
      "crumple": "assets/videos/video-6-crumple.webp",
      "crumpleFrames": 12,
      "crumpleSize": [428, 704],
      "poster": "assets/videos/video-6.jpg",
      "preview": "assets/videos/video-6-preview.mp4",
      "ratio": "9:16"
    }
  ],

  /* ---------------- آراء العملاء ----------------
     لا تظهر أي مراجعة إلا إذا كانت approved: true
     (لا أسماء عملاء ولا شركات — فقط وصف عام اختياري)
     { text: 'نص المراجعة', role: 'صاحبة متجر إلكتروني', approved: true },
  ------------------------------------------------------ */
  testimonials: [
    {
      "text": "فهمتي اللي ببالي من أول حكي بينا، مع إنّي أنا نفسي ما كنت عارفة أوصفه. أول ما شفت التصميم قلت هاد هو!",
      "approved": true
    },
    {
      "text": "من أول لقطة شدّني الفيديو، ولما خلص رجعت حضرته مرة ثانية. اختيارك للمشهد الأخير كان موفّق كتير.",
      "approved": true
    },
    {
      "text": "إلك عين حلوة بالألوان. حتى اللون اللي كنت متردّدة فيه صار أكتر تفصيلة حبيتها بالتصميم.",
      "approved": true
    },
    {
      "text": "أكتر إشي ريّحني بالتعامل معك إنّي قدرت أحكي رأيي بصراحة. سمعتي ملاحظتي وفهمتي بالضبط شو بدي أغيّر.",
      "approved": true
    },
    {
      "text": "بعثتلك لقطات متفرّقة، وإنتِ عرفتي ترتّبيها بطريقة بتحكي القصّة أحلى ممّا تخيّلتها.",
      "approved": true
    },
    {
      "text": "ذوقك باختيار الخط العربي كتير حلو. العنوان إله حضور، وكل كلمة واضحة حتى على شاشة الموبايل.",
      "approved": true
    },
    {
      "text": "لما وصلني التصميم حسّيت إنّه بشبهني. هاي أكتر شغلة كنت بتمنّاها، وإنتِ زبطتيها.",
      "approved": true
    },
    {
      "text": "توقيت دخول الموسيقى مع اللقطة كان بجنّن. كل ما أحضر الفيديو بستنى هاللحظة بالذات.",
      "approved": true
    },
    {
      "text": "طلبت منك تصميم بسيط، وعجبني كيف كلمة وحدة بلون مختلف كانت كفاية حتى توصل الفكرة.",
      "approved": true
    },
    {
      "text": "سلّمتيني الشغل بالموعد اللي اتفقنا عليه، وحتى آخر تعديل أخد منك نفس الاهتمام اللي أعطيتِه لأول نسخة. كتير قدّرت هالشي.",
      "approved": true
    },
    {
      "text": "حبيت إنك تركتي صوت الضحكة بالفيديو. هالثانيتين عطوه روح وخلّوه قريب من القلب.",
      "approved": true
    },
    {
      "text": "كل بوست إله فكرته، ولما شفت التصاميم جنب بعض حسّيت إنهم بيكمّلوا بعض. ترتيبهم مع بعض طلع حلو كتير.",
      "approved": true
    },
    {
      "text": "الإضاءة باللقطات كانت مختلفة، وبعد المونتاج حسّيت كأنها كلها متصوّرة بنفس اليوم. شغلك بالألوان دقيق.",
      "approved": true
    },
    {
      "text": "عجبني إنك سألتي من البداية شو بدي الناس تتذكّر بعد ما يشوفوا التصميم. هالسؤال فرّق كتير بالنتيجة.",
      "approved": true
    },
    {
      "text": "النسخة الأولى كانت قريبة كتير من اللي ببالي، واقتراحك الأخير بخصوص الصورة خلاني أحبّها أكتر.",
      "approved": true
    },
    {
      "text": "حلو كيف قصّيتي التكرار وضلّ الحكي طبيعي كأنّه محادثة. حتى أنا نسيت وين كنت معيدة الجملة!",
      "approved": true
    },
    {
      "text": "عادةً بحتار بين الخيارات، بس إنتِ شرحتيلي ليش كل واحد ممكن يناسبني. سهّلتي عليّ القرار وكنت مبسوطة باختياري.",
      "approved": true
    },
    {
      "text": "أكتر إشي عجبني إنك انتبهتي لتفصيلة صغيرة بالصورة أنا نفسي ما لاحظتها، وبنيتي عليها فكرة التصميم كامل. عندك عين فعلًا.",
      "approved": true
    },
    {
      "text": "أول ما وصلني الشغل تحمّست أنشره بنفس اللحظة. شكرًا إنك أعطيتِ فكرتي كل هالاهتمام.",
      "approved": true
    },
    {
      "text": "لو رجع فيّي الوقت بختارك كمان مرة. من أول مكالمة لآخر ملف، التعامل معك كان سهل والنتيجة بتفرّح.",
      "approved": true
    }
  ]
};
