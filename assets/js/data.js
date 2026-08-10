// ============================================
// AI Tools Directory - Complete Data (20 Tools)
// ============================================

const toolsData = [
  {
    id: 1,
    name: "ChatGPT",
    nameAr: "تشات جي بي تي",
    category: "text",
    categoryAr: "نصوص وكتابة",
    description: "Advanced AI chatbot for conversations, writing, coding, and analysis.",
    descriptionAr: "أقوى مساعد ذكاء اصطناعي للمحادثة، كتابة المحتوى البرمجي، والإجابة عن المعقد من الأسئلة.",
    url: "https://chat.openai.com",
    affiliateUrl: "https://chat.openai.com",
    rating: 4.9,
    features: ["Conversations", "Code Writing", "Analysis", "Image Generation"],
    featuresAr: ["محادثات ذكية متقدمة", "توليد وتصحيح الأكواد", "دعم متعدد اللغات", "تحليلات دقيقة متقدمة"],
    pricing: "Free / Plus $20/mo",
    pricingAr: "مجاني / بلس 20$/شهر",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    date: "2022-11-30"
  },
  {
    id: 2,
    name: "DALL-E 3",
    nameAr: "دال إي 3",
    category: "image",
    categoryAr: "صور",
    description: "AI image generation from text descriptions with stunning quality.",
    descriptionAr: "أداة متطورة من OpenAI لتوليد صور متلائمة الدقة والواقعية من خلال الوصف النصي البسيط.",
    url: "https://openai.com/dall-e-3",
    affiliateUrl: "https://openai.com/dall-e-3",
    rating: 4.7,
    features: ["Text-to-Image", "High Quality", "Style Variations", "Editing"],
    featuresAr: ["دقة استثنائية في تفاصيل الصور", "فهم عميق للنصوص المعقدة", "تعديل أجزاء محددة"],
    pricing: "Free (limited) / Plus",
    pricingAr: "مجاني (محدود) / بلس",
    image: "https://images.unsplash.com/photo-1686191128892-3b37add4a934?w=400&h=250&fit=crop",
    date: "2023-10-01"
  },
  {
    id: 3,
    name: "Midjourney",
    nameAr: "ميدجورني",
    category: "image",
    categoryAr: "صور",
    description: "AI art generator creating stunning artistic images from text prompts.",
    descriptionAr: "أداة إبداعية رائدة عالمياً لتحويل النصوص الوصفية إلى صور فنية مذهلة.",
    url: "https://www.midjourney.com",
    affiliateUrl: "https://www.midjourney.com",
    rating: 4.8,
    features: ["Artistic Images", "Style Control", "Upscaling", "Variations"],
    featuresAr: ["أساليب فنية مريحة وواقعية", "تكامل مع منصة ديسكورد", "توليد تفاصيل متعددة"],
    pricing: "Free trial / Plans from $10",
    pricingAr: "تجربة مجانية / خطط من 10$",
    image: "https://images.unsplash.com/photo-1683009427619-a1a11b799e05?w=400&h=250&fit=crop",
    date: "2022-07-01"
  },
  {
    id: 4,
    name: "Claude",
    nameAr: "كلود",
    category: "text",
    categoryAr: "نصوص وكتابة",
    description: "Anthropic's AI assistant with long context and reasoning capabilities.",
    descriptionAr: "مساعد ذكي يتميز بنافذة سياق ضخمة وقدرة فائقة على تحليل المستندات الطويلة وكتابة الأبحاث.",
    url: "https://claude.ai",
    affiliateUrl: "https://claude.ai",
    rating: 4.8,
    features: ["Long Context", "Reasoning", "Document Analysis", "Coding"],
    featuresAr: ["قراءة وتحليل ملفات PDF ضخمة", "أسلوب كتابة بشري وعميق", "أمان عالي وخصوصية للبيانات"],
    pricing: "Free / Pro $20/mo",
    pricingAr: "مجاني / برو 20$/شهر",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
    date: "2023-03-01"
  },
  {
    id: 5,
    name: "Canva AI",
    nameAr: "كانفا AI",
    category: "design",
    categoryAr: "تصميم",
    description: "Design platform with AI-powered tools for graphics, presentations, and videos.",
    descriptionAr: "منصة تصميم بأدوات مدعومة بالذكاء الاصطناعي للرسوم والعروض والفيديو.",
    url: "https://www.canva.com",
    affiliateUrl: "https://www.canva.com",
    rating: 4.6,
    features: ["Magic Design", "Text-to-Image", "Background Remover", "Magic Write"],
    featuresAr: ["تصميم سحري تلقائي", "نص لصورة", "إزالة خلفية", "كتابة سحرية"],
    pricing: "Free / Pro $15/mo",
    pricingAr: "مجاني / برو 15$/شهر",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
    date: "2023-01-01"
  },
  {
    id: 6,
    name: "Remove.bg",
    nameAr: "ريموف بي جي",
    category: "image",
    categoryAr: "صور",
    description: "Automatically remove image backgrounds in seconds with AI.",
    descriptionAr: "إزالة خلفية الصور تلقائياً في ثوانٍ بالذكاء الاصطناعي.",
    url: "https://www.remove.bg",
    affiliateUrl: "https://www.remove.bg",
    rating: 4.7,
    features: ["One-Click Removal", "HD Quality", "API Access", "Bulk Processing"],
    featuresAr: ["إزالة بنقرة واحدة", "جودة HD", "وصول API", "معالجة مجمعة"],
    pricing: "Free (1 credit) / Credits",
    pricingAr: "مجاني (1 رصيد) / رصيد",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop",
    date: "2018-01-01"
  },
  {
    id: 7,
    name: "ElevenLabs",
    nameAr: "إيليفن لابز",
    category: "audio",
    categoryAr: "صوت",
    description: "AI voice generation with realistic human-like speech synthesis.",
    descriptionAr: "أداة رائدة عالمياً في توليد التعليق الصوتي البشري وتحويل النصوص إلى أصوات واقعية جداً.",
    url: "https://elevenlabs.io",
    affiliateUrl: "https://elevenlabs.io",
    rating: 4.9,
    features: ["Voice Cloning", "Multilingual", "Emotion Control", "API"],
    featuresAr: ["استنساخ الأصوات بدقة", "دعم اللغة العربية واللغات العالمية", "تحكم كامل بنبرة ومشاعر الصوت"],
    pricing: "Free (10k chars) / Plans",
    pricingAr: "مجاني (10k حرف) / خطط",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
    date: "2022-01-01"
  },
  {
    id: 8,
    name: "Runway ML",
    nameAr: "رانواي ML",
    category: "video",
    categoryAr: "فيديو",
    description: "AI-powered video editing, generation, and visual effects platform.",
    descriptionAr: "منصة متطورة للتحرير وتوليد مقاطع الفيديو السينمائية باستخدام تقنيات التعلم الآلي.",
    url: "https://runwayml.com",
    affiliateUrl: "https://runwayml.com",
    rating: 4.7,
    features: ["Gen-3 Alpha", "Video Editing", "Green Screen", "Motion Tracking"],
    featuresAr: ["توليد فيديو من الصور والصور", "حركة الكاميرا والتحكم المتقدم", "إزالة وتعديل عناصر بالفيديو"],
    pricing: "Free (125 credits) / Plans",
    pricingAr: "مجاني (125 رصيد) / خطط",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop",
    date: "2018-01-01"
  },
  {
    id: 9,
    name: "GitHub Copilot",
    nameAr: "جيت هاب كوبايلوت",
    category: "coding",
    categoryAr: "برمجة",
    description: "AI pair programmer that suggests code completions in real-time.",
    descriptionAr: "مساعد ذكي للمبرمجين داخل محرر الكود لاقتراح وتوليد الأكواد البرمجية بكفاءة عالية.",
    url: "https://github.com/features/copilot",
    affiliateUrl: "https://github.com/features/copilot",
    rating: 4.8,
    features: ["Code Completion", "Chat", "Pull Request Summaries", "Tests"],
    featuresAr: ["إكمال الأكواد تلقائياً", "اقتراح الحلول البرمجية", "كتابة الاختبارات والتصحيح"],
    pricing: "Free for Students / $10/mo",
    pricingAr: "مجاني للطلاب / 10$/شهر",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    date: "2021-06-01"
  },
  {
    id: 10,
    name: "Notion AI",
    nameAr: "نوتيون AI",
    category: "productivity",
    categoryAr: "إنتاجية",
    description: "AI writing assistant integrated into Notion for notes and documents.",
    descriptionAr: "مساعد كتابة بالذكاء الاصطناعي مدمج في نوتيون للملاحظات والمستندات.",
    url: "https://www.notion.so/product/ai",
    affiliateUrl: "https://www.notion.so/product/ai",
    rating: 4.5,
    features: ["AI Writing", "Summaries", "Translations", "Q&A"],
    featuresAr: ["كتابة AI", "تلخيص", "ترجمات", "سؤال وجواب"],
    pricing: "Free / AI Add-on $10/mo",
    pricingAr: "مجاني / إضافة AI 10$/شهر",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=250&fit=crop",
    date: "2023-02-01"
  },
  {
    id: 11,
    name: "Grammarly",
    nameAr: "جرامرلي",
    category: "text",
    categoryAr: "نصوص وكتابة",
    description: "AI writing assistant for grammar, spelling, and style improvements.",
    descriptionAr: "مساعد كتابة بالذكاء الاصطناعي للنحو والإملاء وتحسين الأسلوب.",
    url: "https://www.grammarly.com",
    affiliateUrl: "https://www.grammarly.com",
    rating: 4.6,
    features: ["Grammar Check", "Tone Detection", "Plagiarism", "Style Guide"],
    featuresAr: ["فحص نحوي", "كشف النبرة", "كشف انتحال", "دليل الأسلوب"],
    pricing: "Free / Premium $12/mo",
    pricingAr: "مجاني / بريميوم 12$/شهر",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop",
    date: "2009-01-01"
  },
  {
    id: 12,
    name: "Lumen5",
    nameAr: "لومين 5",
    category: "video",
    categoryAr: "فيديو",
    description: "AI video creation platform that transforms text into engaging videos.",
    descriptionAr: "منصة إنشاء فيديو بالذكاء الاصطناعي تحول النص إلى فيديو جذاب.",
    url: "https://lumen5.com",
    affiliateUrl: "https://lumen5.com",
    rating: 4.4,
    features: ["Text-to-Video", "Templates", "Media Library", "Branding"],
    featuresAr: ["نص لفيديو", "قوالب", "مكتبة وسائط", "علامة تجارية"],
    pricing: "Free (watermark) / Plans",
    pricingAr: "مجاني (علامة مائية) / خطط",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
    date: "2017-01-01"
  },
  {
    id: 13,
    name: "Synthesia",
    nameAr: "سينثيزيا",
    category: "video",
    categoryAr: "فيديو",
    description: "AI video generation with realistic avatars and multilingual support.",
    descriptionAr: "توليد فيديو بالذكاء الاصطناعي بشخصيات واقعية ودعم متعدد اللغات.",
    url: "https://www.synthesia.io",
    affiliateUrl: "https://www.synthesia.io",
    rating: 4.5,
    features: ["AI Avatars", "Multilingual", "Templates", "Screen Recording"],
    featuresAr: ["شخصيات AI", "متعدد اللغات", "قوالب", "تسجيل شاشة"],
    pricing: "Free trial / Plans from $22",
    pricingAr: "تجربة مجانية / خطط من 22$",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=250&fit=crop",
    date: "2017-01-01"
  },
  {
    id: 14,
    name: "Copy.ai",
    nameAr: "كوبي AI",
    category: "text",
    categoryAr: "نصوص وكتابة",
    description: "AI copywriting tool for marketing content, emails, and social media.",
    descriptionAr: "أداة كتابة تسويقية بالذكاء الاصطناعي للمحتوى والإيميلات ووسائل التواصل.",
    url: "https://www.copy.ai",
    affiliateUrl: "https://www.copy.ai",
    rating: 4.5,
    features: ["Blog Writing", "Social Media", "Emails", "Translations"],
    featuresAr: ["كتابة مدونات", "وسائل التواصل", "إيميلات", "ترجمات"],
    pricing: "Free (2k words) / Pro $49/mo",
    pricingAr: "مجاني (2k كلمة) / برو 49$/شهر",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
    date: "2020-01-01"
  },
  {
    id: 15,
    name: "Jasper",
    nameAr: "جاسبر",
    category: "text",
    categoryAr: "نصوص وكتابة",
    description: "AI content platform for marketing teams with brand voice consistency.",
    descriptionAr: "منصة محتوى بالذكاء الاصطناعي لفِرق التسويق مع تناسق صوت العلامة.",
    url: "https://www.jasper.ai",
    affiliateUrl: "https://www.jasper.ai",
    rating: 4.4,
    features: ["Brand Voice", "SEO Mode", "Campaigns", "Analytics"],
    featuresAr: ["صوت العلامة", "وضع SEO", "حملات", "تحليلات"],
    pricing: "Free trial / Plans from $49",
    pricingAr: "تجربة مجانية / خطط من 49$",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    date: "2021-01-01"
  },
  {
    id: 16,
    name: "Descript",
    nameAr: "ديسكريبت",
    category: "audio",
    categoryAr: "صوت",
    description: "All-in-one audio and video editing with AI transcription and overdub.",
    descriptionAr: "تحرير صوت وفيديو شامل مع نسخ AI وتسجيل صوتي بديل.",
    url: "https://www.descript.com",
    affiliateUrl: "https://www.descript.com",
    rating: 4.6,
    features: ["Transcription", "Overdub", "Screen Recording", "Editing"],
    featuresAr: ["نسخ", "تسجيل بديل", "تسجيل شاشة", "تحرير"],
    pricing: "Free (1 hour) / Plans",
    pricingAr: "مجاني (ساعة) / خطط",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=250&fit=crop",
    date: "2017-01-01"
  },
  {
    id: 17,
    name: "Stable Diffusion",
    nameAr: "ستيبل ديفيوجن",
    category: "image",
    categoryAr: "صور",
    description: "Open-source AI image generation model with unlimited creative freedom.",
    descriptionAr: "نموذج توليد صور بالذكاء الاصطناعي مفتوح المصدر مع حرية إبداعية غير محدودة.",
    url: "https://stability.ai",
    affiliateUrl: "https://stability.ai",
    rating: 4.7,
    features: ["Open Source", "Local Install", "Custom Models", "High Resolution"],
    featuresAr: ["مفتوح المصدر", "تثبيت محلي", "نماذج مخصصة", "دقة عالية"],
    pricing: "Free / API Credits",
    pricingAr: "مجاني / رصيد API",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    date: "2022-08-01"
  },
  {
    id: 18,
    name: "Hugging Face",
    nameAr: "هاجينغ فيس",
    category: "coding",
    categoryAr: "برمجة",
    description: "Platform for AI models, datasets, and machine learning applications.",
    descriptionAr: "منصة لنماذج الذكاء الاصطناعي والبيانات وتطبيقات التعلم الآلي.",
    url: "https://huggingface.co",
    affiliateUrl: "https://huggingface.co",
    rating: 4.8,
    features: ["Model Hub", "Spaces", "Datasets", "Inference API"],
    featuresAr: ["مركز النماذج", "مساحات", "بيانات", "API استدلال"],
    pricing: "Free / Pro $9/mo",
    pricingAr: "مجاني / برو 9$/شهر",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    date: "2016-01-01"
  },
  {
    id: 19,
    name: "Perplexity AI",
    nameAr: "بربليكسيتي AI",
    category: "text",
    categoryAr: "نصوص وكتابة",
    description: "AI-powered search engine with cited answers and real-time information.",
    descriptionAr: "محرك بحث ذكي استقصائي يقدم إجابات دقيقة مدعومة بالمصادر والروابط المباشرة للموقع.",
    url: "https://www.perplexity.ai",
    affiliateUrl: "https://www.perplexity.ai",
    rating: 4.9,
    features: ["Cited Answers", "Real-time", "Follow-up", "Collections"],
    featuresAr: ["بحث فوري مع ذكر المصادر", "تلخيص المقالات وصفحات الويب", "أسئلة تتابعية تفاعلية"],
    pricing: "Free / Pro $20/mo",
    pricingAr: "مجاني / برو 20$/شهر",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop",
    date: "2022-08-01"
  },
  {
    id: 20,
    name: "Gamma.app",
    nameAr: "جاما",
    category: "productivity",
    categoryAr: "إنتاجية",
    description: "AI presentation creator that generates beautiful slides from text.",
    descriptionAr: "منشئ عروض تقديمية بالذكاء الاصطناعي يولد شرائح جميلة من النص.",
    url: "https://gamma.app",
    affiliateUrl: "https://gamma.app",
    rating: 4.6,
    features: ["AI Slides", "Themes", "Interactive", "Export"],
    featuresAr: ["شرائح AI", "سمات", "تفاعلي", "تصدير"],
    pricing: "Free (400 credits) / Plus",
    pricingAr: "مجاني (400 رصيد) / بلس",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    date: "2023-01-01"
  }
];

const categories = [
  { id: "all", name: "All Tools", nameAr: "الكل", icon: "fa-layer-group" },
  { id: "text", name: "Text & Writing", nameAr: "نصوص وكتابة", icon: "fa-pen-nib" },
  { id: "image", name: "Image Generation", nameAr: "صور", icon: "fa-image" },
  { id: "video", name: "Video Creation", nameAr: "فيديو", icon: "fa-video" },
  { id: "audio", name: "Audio & Voice", nameAr: "صوت", icon: "fa-microphone" },
  { id: "coding", name: "Coding & Dev", nameAr: "برمجة", icon: "fa-code" },
  { id: "design", name: "Design", nameAr: "تصميم", icon: "fa-palette" },
  { id: "productivity", name: "Productivity", nameAr: "إنتاجية", icon: "fa-bolt" }
];

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function getToolById(id) {
  return toolsData.find(tool => tool.id === parseInt(id));
}

function getToolsByCategory(category) {
  if (category === "all") return toolsData;
  return toolsData.filter(tool => tool.category === category);
}

function searchTools(query) {
  const lowerQuery = query.toLowerCase();
  return toolsData.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.nameAr.includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.descriptionAr.includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery) ||
    tool.categoryAr.includes(lowerQuery)
  );
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < fullStars; i++) html += '<i class="fas fa-star text-yellow-400"></i>';
  if (hasHalf) html += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
  const empty = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < empty; i++) html += '<i class="far fa-star text-yellow-400"></i>';
  return html;
}

function getCategoryInfo(catId) {
  return categories.find(c => c.id === catId) || categories[0];
}
