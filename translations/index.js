const translations = {
  en: {
    // Navbar
    nav: {
      services: 'Services',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      pricing: 'Pricing',
      startProject: 'Start Project',
    },
    // Hero
    hero: {
      label: 'Digital Agency',
      title1: 'Your Business Deserves',
      title2: 'to Be Online',
      subtitle: 'Businesses without websites lose customers every day. We build professional websites, mobile apps, and digital solutions for Algerian businesses.',
      cta1: 'Get Free Quote',
      cta2: 'WhatsApp Us',
      scroll: 'Scroll to explore',
    },
    // Services
    services: {
      label: 'What We Do',
      title: 'Expertise that drives',
      titleAccent: 'results',
      subtitle: 'We offer comprehensive digital solutions tailored to transform your ideas into reality.',
      items: [
        {
          number: '01',
          title: 'Web Development',
          description: 'Static websites, dynamic sites with admin panels, landing pages, and complex platforms. Built with modern technologies for speed and reliability.',
        },
        {
          number: '02',
          title: 'Mobile Applications',
          description: 'Android and iOS apps for your business. Delivery apps, booking systems, e-commerce, and custom solutions your customers will love.',
        },
        {
          number: '03',
          title: 'UI/UX Design',
          description: 'User-centered design that combines aesthetics with functionality. We craft interfaces that are both beautiful and intuitive.',
        },
        {
          number: '04',
          title: 'Bot Integration',
          description: 'Telegram bots, WhatsApp automation, and chatbot solutions. Automate customer support and business operations 24/7.',
        },
        {
          number: '05',
          title: 'Maintenance & Support',
          description: 'Ongoing technical support and maintenance to keep your digital products running smoothly and securely.',
        },
      ],
      learnMore: 'Learn more',
    },
    // Pricing
    pricing: {
      label: 'Pricing',
      title: 'Simple, transparent',
      titleAccent: 'pricing',
      subtitle: 'Choose the plan that fits your business needs. All prices in Algerian Dinar.',
      plans: [
        {
          name: 'Basic',
          price: '50,000 - 80,000',
          currency: 'DZD',
          description: 'Perfect for small businesses getting started online',
          features: [
            'Static website (1-3 pages)',
            'Mobile responsive design',
            'Contact form',
            'Fast loading speed',
            'Free domain setup help',
          ],
          cta: 'Get Started',
        },
        {
          name: 'Professional',
          price: '120,000 - 180,000',
          currency: 'DZD',
          description: 'For businesses that need more power and control',
          features: [
            'Dynamic website + Admin panel',
            'Up to 10 pages',
            'SEO optimization',
            'WhatsApp integration',
            'Content management system',
            'Social media integration',
          ],
          cta: 'Get Started',
          popular: true,
          badge: 'MOST POPULAR',
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          currency: '',
          description: 'For large projects with custom requirements',
          features: [
            'E-commerce platform',
            'Bot integration (Telegram/WhatsApp)',
            'Mobile app development',
            'API development',
            'Custom features',
            'Priority support',
          ],
          cta: 'Contact Us',
        },
      ],
    },
    // About
    about: {
      label: 'About Us',
      title: 'Crafting digital excellence',
      titleAccent: 'from Algeria',
      text: [
        'SiteDZ is a digital agency born from a passion for technology and innovation. Based in Algeria, we combine local expertise with global standards to deliver exceptional digital solutions.',
        'Our team of dedicated developers, designers, and strategists work together to transform your ideas into powerful digital products. We believe in quality over quantity, crafting each project with meticulous attention to detail.',
        'From startups to established businesses, we partner with clients who share our vision for digital excellence. Your success is our measure of achievement.',
      ],
      quote: "We don't just build websites and apps. We build digital experiences that connect, engage, and inspire.",
      quoteCite: '— The SiteDZ Team',
      stats: [
        { number: 50, suffix: '+', label: 'Projects Delivered' },
        { number: 30, suffix: '+', label: 'Happy Clients' },
        { number: 24, suffix: 'h', label: 'Response Time' },
      ],
    },
    // Featured
    featured: {
      label: 'Featured Project',
      title: 'Our work on',
      titleAccent: 'national television',
      subtitle: "ElGhella.com — Algeria's first digital agriculture marketplace platform, featured on N1 Algeria channel.",
      project: 'Project',
      industry: 'Industry',
      industryValue: 'Agriculture Marketplace',
      featuredOn: 'Featured On',
      featuring: 'Featuring',
      featuringValue: 'Islam Zellag & Issam Douada',
      description: "We developed ElGhella.com, pioneering Algeria's first digital agriculture marketplace. This groundbreaking platform connects farmers directly with buyers, revolutionizing how agricultural products are traded in Algeria. Our work gained national recognition, being featured on N1 Algeria channel.",
      achievement: 'First Agriculture Marketplace Platform in Algeria',
      moreProjects: "More Projects We've Delivered",
      play: 'Play',
      pause: 'Pause',
    },
    // Contact
    contact: {
      label: 'Get in Touch',
      title: "Let's build something",
      titleAccent: 'great together',
      description: "Ready to start your project? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Algiers, Algeria',
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Tell us about your project...',
      send: 'Send Message',
      sending: 'Sending...',
      success: "Thank you! We'll be in touch soon.",
    },
    // Footer
    footer: {
      tagline: 'Crafting exceptional digital experiences from Algeria to the world.',
      navigation: 'Navigation',
      services: 'Services',
      connect: 'Connect',
      webDev: 'Web Development',
      mobileApps: 'Mobile Apps',
      uiux: 'UI/UX Design',
      copyright: 'SiteDZ. All rights reserved.',
      madeIn: 'Made with precision in Algeria',
    },
    // FAQ
    faq: {
      label: 'FAQ',
      title: 'Frequently asked',
      titleAccent: 'questions',
      items: [
        {
          question: 'How long does it take to build a website?',
          answer: 'A basic static website takes 1-2 weeks. A dynamic website with admin panel takes 3-4 weeks. Complex projects like e-commerce or mobile apps take 6-8 weeks depending on features.',
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes! We typically work with 50% upfront and 50% on delivery. For larger projects, we can arrange a 3-payment plan: 40% upfront, 30% at midpoint, and 30% on delivery.',
        },
        {
          question: 'Can I update the website myself after delivery?',
          answer: 'Absolutely. Our Professional and Enterprise plans include an admin panel where you can update content, images, and more without any technical knowledge.',
        },
        {
          question: 'What about hosting and domain?',
          answer: 'We help you set up hosting and domain registration. Basic hosting costs around 5,000-10,000 DZD/year. We recommend reliable providers and handle the technical setup for you.',
        },
        {
          question: 'Do you provide ongoing maintenance?',
          answer: 'Yes, we offer maintenance packages starting from 5,000 DZD/month. This includes security updates, bug fixes, content updates, and technical support.',
        },
      ],
    },
    // WhatsApp
    whatsapp: {
      text: 'WhatsApp',
    },
  },
  ar: {
    // Navbar
    nav: {
      services: 'خدماتنا',
      about: 'من نحن',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      pricing: 'الأسعار',
      startProject: 'ابدأ مشروعك',
    },
    // Hero
    hero: {
      label: 'وكالة رقمية',
      title1: 'عملك يستحق',
      title2: 'أن يكون على الإنترنت',
      subtitle: 'الأعمال التجارية بدون مواقع إلكترونية تخسر عملاء كل يوم. نحن نبني مواقع احترافية وتطبيقات وحلول رقمية للشركات الجزائرية.',
      cta1: 'احصل على عرض مجاني',
      cta2: 'واتساب',
      scroll: 'مرر للاستكشاف',
    },
    // Services
    services: {
      label: 'ماذا نفعل',
      title: 'خبرة تحقق',
      titleAccent: 'نتائج',
      subtitle: 'نقدم حلول رقمية شاملة مصممة لتحويل أفكارك إلى واقع.',
      items: [
        {
          number: '01',
          title: 'تطوير المواقع',
          description: 'مواقع ثابتة، مواقع ديناميكية مع لوحة تحكم، صفحات هبوط، ومنصات معقدة. مبنية بأحدث التقنيات للسرعة والموثوقية.',
        },
        {
          number: '02',
          title: 'تطبيقات الهاتف',
          description: 'تطبيقات أندرويد وآيفون لعملك. تطبيقات التوصيل، أنظمة الحجز، التجارة الإلكترونية، وحلول مخصصة.',
        },
        {
          number: '03',
          title: 'تصميم UI/UX',
          description: 'تصميم يركز على المستخدم يجمع بين الجمال والوظائف. نصمم واجهات جميلة وسهلة الاستخدام.',
        },
        {
          number: '04',
          title: 'تكامل البوتات',
          description: 'بوتات تيليغرام، أتمتة واتساب، وحلول الدردشة الآلية. أتمتة خدمة العملاء والعمليات التجارية على مدار الساعة.',
        },
        {
          number: '05',
          title: 'الصيانة والدعم',
          description: 'دعم تقني مستمر وصيانة للحفاظ على منتجاتك الرقمية تعمل بسلاسة وأمان.',
        },
      ],
      learnMore: 'اعرف المزيد',
    },
    // Pricing
    pricing: {
      label: 'الأسعار',
      title: 'أسعار بسيطة',
      titleAccent: 'وشفافة',
      subtitle: 'اختر الخطة المناسبة لعملك. جميع الأسعار بالدينار الجزائري.',
      plans: [
        {
          name: 'أساسي',
          price: '50,000 - 80,000',
          currency: 'د.ج',
          description: 'مثالي للشركات الصغيرة التي تبدأ على الإنترنت',
          features: [
            'موقع ثابت (1-3 صفحات)',
            'تصميم متجاوب للهاتف',
            'نموذج اتصال',
            'سرعة تحميل عالية',
            'مساعدة مجانية في إعداد النطاق',
          ],
          cta: 'ابدأ الآن',
        },
        {
          name: 'احترافي',
          price: '120,000 - 180,000',
          currency: 'د.ج',
          description: 'للشركات التي تحتاج المزيد من القوة والتحكم',
          features: [
            'موقع ديناميكي + لوحة تحكم',
            'حتى 10 صفحات',
            'تحسين محركات البحث',
            'تكامل واتساب',
            'نظام إدارة المحتوى',
            'تكامل وسائل التواصل',
          ],
          cta: 'ابدأ الآن',
          popular: true,
          badge: 'الأكثر شعبية',
        },
        {
          name: 'مؤسسات',
          price: 'حسب الطلب',
          currency: '',
          description: 'للمشاريع الكبيرة ذات المتطلبات المخصصة',
          features: [
            'منصة تجارة إلكترونية',
            'تكامل البوتات (تيليغرام/واتساب)',
            'تطوير تطبيقات الهاتف',
            'تطوير API',
            'ميزات مخصصة',
            'دعم ذو أولوية',
          ],
          cta: 'تواصل معنا',
        },
      ],
    },
    // About
    about: {
      label: 'من نحن',
      title: 'صناعة التميز الرقمي',
      titleAccent: 'من الجزائر',
      text: [
        'SiteDZ وكالة رقمية ولدت من شغف بالتكنولوجيا والابتكار. مقرنا في الجزائر، نجمع بين الخبرة المحلية والمعايير العالمية لتقديم حلول رقمية استثنائية.',
        'فريقنا من المطورين والمصممين والاستراتيجيين يعملون معاً لتحويل أفكارك إلى منتجات رقمية قوية. نؤمن بالجودة على الكمية.',
        'من الشركات الناشئة إلى المؤسسات الراسخة، نتشارك مع عملاء يشاركوننا رؤيتنا للتميز الرقمي. نجاحك هو مقياس إنجازنا.',
      ],
      quote: 'نحن لا نبني مواقع وتطبيقات فقط. نحن نبني تجارب رقمية تربط وتشرك وتلهم.',
      quoteCite: '— فريق SiteDZ',
      stats: [
        { number: 50, suffix: '+', label: 'مشروع منجز' },
        { number: 30, suffix: '+', label: 'عميل سعيد' },
        { number: 24, suffix: 'h', label: 'وقت الاستجابة' },
      ],
    },
    // Featured
    featured: {
      label: 'مشروع مميز',
      title: 'عملنا على',
      titleAccent: 'التلفزيون الوطني',
      subtitle: 'ElGhella.com — أول منصة رقمية للسوق الزراعي في الجزائر، ظهرت على قناة N1 الجزائر.',
      project: 'المشروع',
      industry: 'القطاع',
      industryValue: 'السوق الزراعي',
      featuredOn: 'ظهر على',
      featuring: 'بمشاركة',
      featuringValue: 'إسلام زلاق وعصام دوادة',
      description: 'طورنا ElGhella.com، رائدة أول سوق زراعي رقمي في الجزائر. هذه المنصة الرائدة تربط المزارعين مباشرة بالمشترين. حصل عملنا على اعتراف وطني بالظهور على قناة N1 الجزائر.',
      achievement: 'أول منصة سوق زراعي في الجزائر',
      moreProjects: 'المزيد من المشاريع المنجزة',
      play: 'تشغيل',
      pause: 'إيقاف',
    },
    // Contact
    contact: {
      label: 'تواصل معنا',
      title: 'لنبني شيئاً',
      titleAccent: 'رائعاً معاً',
      description: 'مستعد لبدء مشروعك؟ نحب أن نسمع منك. أرسل لنا رسالة وسنرد عليك خلال 24 ساعة.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      locationValue: 'الجزائر العاصمة، الجزائر',
      nameLabel: 'الاسم',
      namePlaceholder: 'محمد أحمد',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'mohamed@example.com',
      messageLabel: 'رسالتك',
      messagePlaceholder: 'أخبرنا عن مشروعك...',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      success: 'شكراً لك! سنتواصل معك قريباً.',
    },
    // Footer
    footer: {
      tagline: 'صناعة تجارب رقمية استثنائية من الجزائر إلى العالم.',
      navigation: 'التنقل',
      services: 'الخدمات',
      connect: 'تواصل',
      webDev: 'تطوير المواقع',
      mobileApps: 'تطبيقات الهاتف',
      uiux: 'تصميم UI/UX',
      copyright: 'SiteDZ. جميع الحقوق محفوظة.',
      madeIn: 'صنع بدقة في الجزائر',
    },
    // FAQ
    faq: {
      label: 'أسئلة شائعة',
      title: 'أسئلة',
      titleAccent: 'متكررة',
      items: [
        {
          question: 'كم يستغرق بناء موقع إلكتروني؟',
          answer: 'الموقع الثابت الأساسي يستغرق 1-2 أسبوع. الموقع الديناميكي مع لوحة تحكم يستغرق 3-4 أسابيع. المشاريع المعقدة مثل التجارة الإلكترونية أو تطبيقات الهاتف تستغرق 6-8 أسابيع حسب الميزات.',
        },
        {
          question: 'هل تقدمون خطط دفع؟',
          answer: 'نعم! عادة نعمل بنظام 50% مقدماً و50% عند التسليم. للمشاريع الكبيرة، يمكننا ترتيب خطة من 3 دفعات: 40% مقدماً، 30% في المنتصف، و30% عند التسليم.',
        },
        {
          question: 'هل يمكنني تحديث الموقع بنفسي بعد التسليم؟',
          answer: 'بالتأكيد. خطط الاحترافي والمؤسسات تتضمن لوحة تحكم حيث يمكنك تحديث المحتوى والصور والمزيد بدون أي معرفة تقنية.',
        },
        {
          question: 'ماذا عن الاستضافة والنطاق؟',
          answer: 'نساعدك في إعداد الاستضافة وتسجيل النطاق. تكلفة الاستضافة الأساسية حوالي 5,000-10,000 د.ج/سنة. ننصح بمزودين موثوقين ونتعامل مع الإعداد التقني لك.',
        },
        {
          question: 'هل تقدمون صيانة مستمرة؟',
          answer: 'نعم، نقدم باقات صيانة تبدأ من 5,000 د.ج/شهر. تشمل تحديثات الأمان، إصلاح الأخطاء، تحديثات المحتوى، والدعم التقني.',
        },
      ],
    },
    // WhatsApp
    whatsapp: {
      text: 'واتساب',
    },
  },
};

export default translations;
