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
      "title": "حملة سوشيال ميديا لمركز تجميل",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/beauty-center/01.webp",
        "assets/projects/beauty-center/02.webp",
        "assets/projects/beauty-center/03.webp",
        "assets/projects/beauty-center/04.webp",
        "assets/projects/beauty-center/05.webp",
        "assets/projects/beauty-center/06.webp",
        "assets/projects/beauty-center/07.webp"
      ],
      "thumbs": [
        "assets/projects/beauty-center/01-sm.webp",
        "assets/projects/beauty-center/02-sm.webp",
        "assets/projects/beauty-center/03-sm.webp",
        "assets/projects/beauty-center/04-sm.webp",
        "assets/projects/beauty-center/05-sm.webp",
        "assets/projects/beauty-center/06-sm.webp",
        "assets/projects/beauty-center/07-sm.webp"
      ],
      "ratios": [
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
      "title": "حملة إعلانية لتطبيق تجارة إلكترونية وتوصيل",
      "categoryEn": "SOCIAL MEDIA ADS",
      "images": [
        "assets/projects/ecommerce-app/01.webp",
        "assets/projects/ecommerce-app/02.webp",
        "assets/projects/ecommerce-app/03.webp",
        "assets/projects/ecommerce-app/04.webp",
        "assets/projects/ecommerce-app/05.webp",
        "assets/projects/ecommerce-app/06.webp",
        "assets/projects/ecommerce-app/07.webp",
        "assets/projects/ecommerce-app/08.webp",
        "assets/projects/ecommerce-app/09.webp"
      ],
      "thumbs": [
        "assets/projects/ecommerce-app/01-sm.webp",
        "assets/projects/ecommerce-app/02-sm.webp",
        "assets/projects/ecommerce-app/03-sm.webp",
        "assets/projects/ecommerce-app/04-sm.webp",
        "assets/projects/ecommerce-app/05-sm.webp",
        "assets/projects/ecommerce-app/06-sm.webp",
        "assets/projects/ecommerce-app/07-sm.webp",
        "assets/projects/ecommerce-app/08-sm.webp",
        "assets/projects/ecommerce-app/09-sm.webp"
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
      "title": "حملة شركة سفر وسياحة",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/travel-agency/01.webp",
        "assets/projects/travel-agency/02.webp",
        "assets/projects/travel-agency/03.webp",
        "assets/projects/travel-agency/04.webp",
        "assets/projects/travel-agency/05.webp",
        "assets/projects/travel-agency/06.webp",
        "assets/projects/travel-agency/07.webp"
      ],
      "thumbs": [
        "assets/projects/travel-agency/01-sm.webp",
        "assets/projects/travel-agency/02-sm.webp",
        "assets/projects/travel-agency/03-sm.webp",
        "assets/projects/travel-agency/04-sm.webp",
        "assets/projects/travel-agency/05-sm.webp",
        "assets/projects/travel-agency/06-sm.webp",
        "assets/projects/travel-agency/07-sm.webp"
      ],
      "ratios": [
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
      "title": "Moon cafe — حملة سوشيال ميديا",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/moon-cafe/01.webp",
        "assets/projects/moon-cafe/02.webp",
        "assets/projects/moon-cafe/03.webp",
        "assets/projects/moon-cafe/04.webp",
        "assets/projects/moon-cafe/05.webp"
      ],
      "thumbs": [
        "assets/projects/moon-cafe/01-sm.webp",
        "assets/projects/moon-cafe/02-sm.webp",
        "assets/projects/moon-cafe/03-sm.webp",
        "assets/projects/moon-cafe/04-sm.webp",
        "assets/projects/moon-cafe/05-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8,
        0.8,
        0.8,
        0.8
      ]
    },
    {
      "title": "حملة منتجات عناية بالبشرة",
      "categoryEn": "PRODUCT ADS",
      "images": [
        "assets/projects/skincare/01.webp",
        "assets/projects/skincare/02.webp",
        "assets/projects/skincare/03.webp"
      ],
      "thumbs": [
        "assets/projects/skincare/01-sm.webp",
        "assets/projects/skincare/02-sm.webp",
        "assets/projects/skincare/03-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8,
        0.8
      ]
    },
    {
      "title": "حملة مطعم بيتزا وبرجر",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/pizza-burger/01.webp",
        "assets/projects/pizza-burger/02.webp",
        "assets/projects/pizza-burger/03.webp"
      ],
      "thumbs": [
        "assets/projects/pizza-burger/01-sm.webp",
        "assets/projects/pizza-burger/02-sm.webp",
        "assets/projects/pizza-burger/03-sm.webp"
      ],
      "ratios": [
        1.0,
        1.0,
        1.0
      ]
    },
    {
      "title": "حملة منصة تداول",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/trading/01.webp",
        "assets/projects/trading/02.webp",
        "assets/projects/trading/03.webp"
      ],
      "thumbs": [
        "assets/projects/trading/01-sm.webp",
        "assets/projects/trading/02-sm.webp",
        "assets/projects/trading/03-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8,
        0.917
      ]
    },
    {
      "title": "إعلانات تطبيق لإدارة المصاريف",
      "categoryEn": "APP ADS",
      "images": [
        "assets/projects/fintech-app/01.webp",
        "assets/projects/fintech-app/02.webp"
      ],
      "thumbs": [
        "assets/projects/fintech-app/01-sm.webp",
        "assets/projects/fintech-app/02-sm.webp"
      ],
      "ratios": [
        0.772,
        0.75
      ]
    },
    {
      "title": "حملة مكتب محاماة",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/law-firm/01.webp",
        "assets/projects/law-firm/02.webp"
      ],
      "thumbs": [
        "assets/projects/law-firm/01-sm.webp",
        "assets/projects/law-firm/02-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8
      ]
    },
    {
      "title": "حملة متجر ورد وهدايا",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/flowers/01.webp",
        "assets/projects/flowers/02.webp"
      ],
      "thumbs": [
        "assets/projects/flowers/01-sm.webp",
        "assets/projects/flowers/02-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8
      ]
    },
    {
      "title": "حملة متجر نظارات وأزياء",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/eyewear/01.webp",
        "assets/projects/eyewear/02.webp"
      ],
      "thumbs": [
        "assets/projects/eyewear/01-sm.webp",
        "assets/projects/eyewear/02-sm.webp"
      ],
      "ratios": [
        0.8,
        0.8
      ]
    },
    {
      "title": "إعلان رحلات شتوية",
      "categoryEn": "TRAVEL AD",
      "images": [
        "assets/projects/winter-trips/01.webp"
      ],
      "thumbs": [
        "assets/projects/winter-trips/01-sm.webp"
      ],
      "ratios": [
        0.8
      ]
    },
    {
      "title": "إعلان منصة استثمار",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/investment/01.webp"
      ],
      "thumbs": [
        "assets/projects/investment/01-sm.webp"
      ],
      "ratios": [
        0.8
      ]
    },
    {
      "title": "إعلان شركة خدمات رقمية",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/digital-services/01.webp"
      ],
      "thumbs": [
        "assets/projects/digital-services/01-sm.webp"
      ],
      "ratios": [
        0.8
      ]
    },
    {
      "title": "إعلان منصة رياضية",
      "categoryEn": "SOCIAL MEDIA",
      "images": [
        "assets/projects/sports/01.webp"
      ],
      "thumbs": [
        "assets/projects/sports/01-sm.webp"
      ],
      "ratios": [
        0.8
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
      "title": "تعريف بموقعي",
      "type": "Website Promo",
      "src": "assets/videos/video-9.mp4",
      "poster": "assets/videos/video-9.jpg",
      "preview": "assets/videos/video-9-preview.mp4",
      "ratio": "9:16"
    },
    {
      "title": "ريل تعريفي شخصي",
      "type": "Personal Reel",
      "src": "assets/videos/video-1.mp4",
      "poster": "assets/videos/video-1.jpg",
      "preview": "assets/videos/video-1-preview.mp4",
      "ratio": "9:16"
    },
    {
      "title": "هوية بصرية — بنترا",
      "type": "Brand Video",
      "src": "assets/videos/video-2.mp4",
      "poster": "assets/videos/video-2.jpg",
      "preview": "assets/videos/video-2-preview.mp4",
      "ratio": "9:16"
    },
    {
      "title": "جذور فلسطين",
      "type": "Story Video",
      "src": "assets/videos/video-4.mp4",
      "poster": "assets/videos/video-4.jpg",
      "preview": "assets/videos/video-4-preview.mp4",
      "ratio": "16:9"
    },
    {
      "title": "Zuma — ريل مطعم",
      "type": "Reels",
      "src": "assets/videos/video-3.mp4",
      "poster": "assets/videos/video-3.jpg",
      "preview": "assets/videos/video-3-preview.mp4",
      "ratio": "9:16"
    },
    {
      "title": "Moon cafe",
      "type": "Reels",
      "src": "assets/videos/video-5.mp4",
      "poster": "assets/videos/video-5.jpg",
      "preview": "assets/videos/video-5-preview.mp4",
      "ratio": "482:812"
    },
    {
      "title": "ريل مطعم تايلندي",
      "type": "Reels",
      "src": "assets/videos/video-8.mp4",
      "poster": "assets/videos/video-8.jpg",
      "preview": "assets/videos/video-8-preview.mp4",
      "ratio": "1080:1788"
    },
    {
      "title": "من الفوضى للسكينة",
      "type": "Awareness Reel",
      "src": "assets/videos/video-6.mp4",
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
