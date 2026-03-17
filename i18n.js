// ═══ GAZE GUARD — i18n Translation System ═══
// Languages: EN (default), RU, ZH, FR, DE, AR, ES

const LANGUAGES = {
  en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
  ru: { name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  zh: { name: '中文', flag: '🇨🇳', dir: 'ltr' },
  fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  de: { name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  es: { name: 'Español', flag: '🇪🇸', dir: 'ltr' }
};

const T = {
  // ═══════════════════════════════════════
  // LANDING PAGE
  // ═══════════════════════════════════════
  'nav.menu': {
    en: 'Menu', ru: 'Меню', zh: '菜单', fr: 'Menu', de: 'Menü', ar: 'القائمة', es: 'Menú'
  },
  'hero.title.1': {
    en: 'Master the', ru: 'Овладейте', zh: '掌握', fr: 'Maîtrisez l\'', de: 'Meistern Sie den', ar: 'أتقن', es: 'Domina el'
  },
  'hero.title.2': {
    en: 'art of eye', ru: 'искусством', zh: '眼神交流的', fr: 'art du contact', de: 'Blickkontakt', ar: 'فن التواصل', es: 'arte del contacto'
  },
  'hero.title.3': {
    en: 'contact', ru: 'зрительного контакта', zh: '艺术', fr: 'visuel', de: 'meistern', ar: 'البصري', es: 'visual'
  },
  'hero.cta': {
    en: 'Launch Trainer', ru: 'Запустить тренажёр', zh: '启动训练器', fr: 'Lancer l\'entraîneur', de: 'Trainer starten', ar: 'ابدأ التدريب', es: 'Iniciar entrenador'
  },
  'pill.eyetracking': {
    en: 'Eye Tracking', ru: 'Трекинг глаз', zh: '眼动追踪', fr: 'Suivi oculaire', de: 'Eye-Tracking', ar: 'تتبع العين', es: 'Seguimiento ocular'
  },
  'pill.calibration': {
    en: 'AI Calibration', ru: 'ИИ-калибровка', zh: 'AI校准', fr: 'Calibration IA', de: 'KI-Kalibrierung', ar: 'معايرة الذكاء', es: 'Calibración IA'
  },
  'pill.interview': {
    en: 'Interview Mode', ru: 'Режим интервью', zh: '面试模式', fr: 'Mode entretien', de: 'Interview-Modus', ar: 'وضع المقابلة', es: 'Modo entrevista'
  },
  'bottom.label': {
    en: 'AI-Powered Gaze Training', ru: 'ИИ-тренировка взгляда', zh: 'AI驱动的注视训练', fr: 'Entraînement du regard par IA', de: 'KI-gestütztes Blicktraining', ar: 'تدريب النظر بالذكاء الاصطناعي', es: 'Entrenamiento visual con IA'
  },
  'bottom.quote': {
    en: '"Your eyes speak before your words do — train them to say confidence."',
    ru: '"Ваши глаза говорят раньше слов — научите их говорить уверенность."',
    zh: '"你的眼睛比言语更早表达——训练它们传递自信。"',
    fr: '"Vos yeux parlent avant vos mots — entraînez-les à exprimer la confiance."',
    de: '"Ihre Augen sprechen vor Ihren Worten — trainieren Sie sie, Selbstvertrauen auszudrücken."',
    ar: '"عيناك تتحدث قبل كلماتك — درّبهما على التعبير عن الثقة."',
    es: '"Tus ojos hablan antes que tus palabras — entrénalos para expresar confianza."'
  },
  'community.title': {
    en: 'Join the Community', ru: 'Присоединяйтесь', zh: '加入社区', fr: 'Rejoignez la communauté', de: 'Community beitreten', ar: 'انضم إلى المجتمع', es: 'Únete a la comunidad'
  },
  'community.desc': {
    en: 'Connect with professionals mastering interview skills through AI-powered gaze training.',
    ru: 'Общайтесь с профессионалами, совершенствующими навыки интервью через ИИ-тренировку взгляда.',
    zh: '与通过AI注视训练提升面试技能的专业人士建立联系。',
    fr: 'Connectez-vous avec des professionnels perfectionnant leurs compétences en entretien.',
    de: 'Vernetzen Sie sich mit Fachleuten, die ihre Interviewfähigkeiten verbessern.',
    ar: 'تواصل مع محترفين يطورون مهارات المقابلة من خلال تدريب النظر بالذكاء الاصطناعي.',
    es: 'Conéctate con profesionales que dominan las entrevistas con entrenamiento visual IA.'
  },
  'feat.calibration': {
    en: 'Smart Calibration', ru: 'Умная калибровка', zh: '智能校准', fr: 'Calibration intelligente', de: 'Intelligente Kalibrierung', ar: 'معايرة ذكية', es: 'Calibración inteligente'
  },
  'feat.calibration.desc': {
    en: 'AI adapts to your unique gaze patterns with precision tracking',
    ru: 'ИИ адаптируется к вашим уникальным паттернам взгляда',
    zh: 'AI精确追踪并适应您独特的注视模式',
    fr: 'L\'IA s\'adapte à vos schémas de regard uniques',
    de: 'KI passt sich Ihren einzigartigen Blickmustern an',
    ar: 'يتكيف الذكاء الاصطناعي مع أنماط نظرك الفريدة',
    es: 'La IA se adapta a tus patrones de mirada únicos'
  },
  'feat.archive': {
    en: 'Session Archive', ru: 'Архив сессий', zh: '会话存档', fr: 'Archive des sessions', de: 'Sitzungsarchiv', ar: 'أرشيف الجلسات', es: 'Archivo de sesiones'
  },
  'feat.archive.desc': {
    en: 'Review past interviews with full gaze analysis & transcripts',
    ru: 'Просматривайте прошлые интервью с полным анализом взгляда',
    zh: '查看过往面试的完整注视分析和记录',
    fr: 'Révisez les entretiens passés avec analyse complète du regard',
    de: 'Vergangene Interviews mit vollständiger Blickanalyse überprüfen',
    ar: 'راجع المقابلات السابقة مع تحليل النظر الكامل',
    es: 'Revisa entrevistas pasadas con análisis visual completo'
  },
  'feat.scoring': {
    en: 'Advanced Gaze Scoring', ru: 'Продвинутая оценка', zh: '高级注视评分', fr: 'Notation avancée du regard', de: 'Erweiterte Blickbewertung', ar: 'تقييم النظر المتقدم', es: 'Puntuación visual avanzada'
  },
  'feat.scoring.desc': {
    en: 'Real-time focus metrics with MediaPipe FaceMesh + Iris technology',
    ru: 'Метрики фокуса в реальном времени с MediaPipe FaceMesh + Iris',
    zh: '使用MediaPipe FaceMesh + Iris技术的实时注视指标',
    fr: 'Métriques de focus en temps réel avec MediaPipe FaceMesh + Iris',
    de: 'Echtzeit-Fokusmetriken mit MediaPipe FaceMesh + Iris',
    ar: 'مقاييس التركيز في الوقت الفعلي مع MediaPipe FaceMesh + Iris',
    es: 'Métricas de enfoque en tiempo real con MediaPipe FaceMesh + Iris'
  },
  // How It Works
  'hiw.title': {
    en: 'How It Works', ru: 'Как это работает', zh: '工作原理', fr: 'Comment ça marche', de: 'So funktioniert es', ar: 'كيف يعمل', es: 'Cómo funciona'
  },
  'hiw.step1': {
    en: 'Enable Camera', ru: 'Включите камеру', zh: '启用摄像头', fr: 'Activez la caméra', de: 'Kamera aktivieren', ar: 'فعّل الكاميرا', es: 'Activa la cámara'
  },
  'hiw.step1.desc': {
    en: 'Allow browser access to your webcam for real-time face tracking',
    ru: 'Разрешите браузеру доступ к веб-камере для отслеживания лица',
    zh: '允许浏览器访问摄像头进行实时面部追踪',
    fr: 'Autorisez l\'accès à votre webcam pour le suivi facial en temps réel',
    de: 'Erlauben Sie den Browserzugriff auf Ihre Webcam für Echtzeit-Tracking',
    ar: 'اسمح للمتصفح بالوصول إلى كاميرا الويب لتتبع الوجه',
    es: 'Permite el acceso a tu cámara para seguimiento facial en tiempo real'
  },
  'hiw.step2': {
    en: 'Calibrate', ru: 'Калибруйте', zh: '校准', fr: 'Calibrez', de: 'Kalibrieren', ar: 'قم بالمعايرة', es: 'Calibra'
  },
  'hiw.step2.desc': {
    en: 'Look at the screen center for a few seconds to set your baseline gaze',
    ru: 'Смотрите в центр экрана несколько секунд для установки базового взгляда',
    zh: '注视屏幕中心几秒钟以设置基础注视点',
    fr: 'Regardez le centre de l\'écran pendant quelques secondes pour calibrer',
    de: 'Schauen Sie einige Sekunden auf die Bildschirmmitte zur Kalibrierung',
    ar: 'انظر إلى مركز الشاشة لبضع ثوانٍ لضبط نظرك الأساسي',
    es: 'Mira al centro de la pantalla unos segundos para calibrar tu mirada'
  },
  'hiw.step3': {
    en: 'Train & Improve', ru: 'Тренируйтесь', zh: '训练提升', fr: 'Entraînez-vous', de: 'Trainieren', ar: 'تدرّب وتحسّن', es: 'Entrena y mejora'
  },
  'hiw.step3.desc': {
    en: 'Practice interviews with real-time gaze feedback and performance scoring',
    ru: 'Практикуйте интервью с обратной связью по взгляду и оценкой',
    zh: '通过实时注视反馈和表现评分练习面试',
    fr: 'Pratiquez des entretiens avec un retour en temps réel sur le regard',
    de: 'Üben Sie Interviews mit Echtzeit-Blickfeedback und Leistungsbewertung',
    ar: 'تدرب على المقابلات مع ملاحظات فورية على النظر وتقييم الأداء',
    es: 'Practica entrevistas con retroalimentación visual en tiempo real'
  },
  // Demo section
  'demo.title': {
    en: 'Try It Now', ru: 'Попробуйте сейчас', zh: '立即体验', fr: 'Essayez maintenant', de: 'Jetzt ausprobieren', ar: 'جربه الآن', es: 'Pruébalo ahora'
  },
  'demo.desc': {
    en: 'Move your cursor — the eye follows your gaze. This is how our AI tracks your focus.',
    ru: 'Двигайте курсор — глаз следит за вами. Так наш ИИ отслеживает ваш фокус.',
    zh: '移动光标——眼睛跟随您的注视。这就是我们的AI追踪您注意力的方式。',
    fr: 'Déplacez votre curseur — l\'œil suit votre regard. Voici comment notre IA suit votre focus.',
    de: 'Bewegen Sie den Cursor — das Auge folgt Ihrem Blick. So verfolgt unsere KI Ihren Fokus.',
    ar: 'حرّك المؤشر — العين تتبع نظرك. هكذا يتتبع ذكاؤنا الاصطناعي تركيزك.',
    es: 'Mueve el cursor — el ojo sigue tu mirada. Así nuestra IA rastrea tu enfoque.'
  },
  // FAQ
  'faq.title': {
    en: 'Frequently Asked Questions', ru: 'Часто задаваемые вопросы', zh: '常见问题', fr: 'Questions fréquentes', de: 'Häufig gestellte Fragen', ar: 'الأسئلة الشائعة', es: 'Preguntas frecuentes'
  },
  'faq.q1': {
    en: 'Do I need a special camera?', ru: 'Нужна ли специальная камера?', zh: '需要特殊摄像头吗？', fr: 'Ai-je besoin d\'une caméra spéciale ?', de: 'Brauche ich eine spezielle Kamera?', ar: 'هل أحتاج إلى كاميرا خاصة؟', es: '¿Necesito una cámara especial?'
  },
  'faq.a1': {
    en: 'No! Any standard webcam works perfectly. The AI uses MediaPipe FaceMesh which runs entirely in your browser.',
    ru: 'Нет! Подойдёт любая стандартная веб-камера. ИИ использует MediaPipe FaceMesh, работающий в браузере.',
    zh: '不需要！任何标准网络摄像头都可以。AI使用在浏览器中运行的MediaPipe FaceMesh。',
    fr: 'Non ! Toute webcam standard fonctionne. L\'IA utilise MediaPipe FaceMesh qui fonctionne dans votre navigateur.',
    de: 'Nein! Jede Standard-Webcam funktioniert. Die KI verwendet MediaPipe FaceMesh, das im Browser läuft.',
    ar: 'لا! أي كاميرا ويب عادية تعمل بشكل مثالي. الذكاء الاصطناعي يستخدم MediaPipe FaceMesh.',
    es: '¡No! Cualquier cámara web estándar funciona. La IA usa MediaPipe FaceMesh en tu navegador.'
  },
  'faq.q2': {
    en: 'Is my data private?', ru: 'Мои данные в безопасности?', zh: '我的数据安全吗？', fr: 'Mes données sont-elles privées ?', de: 'Sind meine Daten privat?', ar: 'هل بياناتي خاصة؟', es: '¿Mis datos son privados?'
  },
  'faq.a2': {
    en: '100%. All processing happens locally in your browser. No video or data is ever sent to any server.',
    ru: '100%. Вся обработка происходит локально в браузере. Никакие данные не отправляются на серверы.',
    zh: '100%安全。所有处理都在浏览器本地进行。不会向任何服务器发送视频或数据。',
    fr: '100%. Tout le traitement se fait localement dans votre navigateur. Aucune donnée n\'est envoyée.',
    de: '100%. Alle Verarbeitung erfolgt lokal in Ihrem Browser. Keine Daten werden gesendet.',
    ar: '100%. تتم جميع المعالجة محليًا في متصفحك. لا يتم إرسال أي بيانات.',
    es: '100%. Todo se procesa localmente en tu navegador. Ningún dato se envía a servidores.'
  },
  'faq.q3': {
    en: 'Which browsers are supported?', ru: 'Какие браузеры поддерживаются?', zh: '支持哪些浏览器？', fr: 'Quels navigateurs sont compatibles ?', de: 'Welche Browser werden unterstützt?', ar: 'ما المتصفحات المدعومة؟', es: '¿Qué navegadores son compatibles?'
  },
  'faq.a3': {
    en: 'Chrome, Edge, and other Chromium-based browsers work best. Firefox and Safari have partial support.',
    ru: 'Chrome, Edge и другие браузеры на Chromium работают лучше всего. Firefox и Safari — частичная поддержка.',
    zh: 'Chrome、Edge和其他基于Chromium的浏览器效果最佳。Firefox和Safari部分支持。',
    fr: 'Chrome, Edge et les navigateurs basés sur Chromium fonctionnent le mieux.',
    de: 'Chrome, Edge und andere Chromium-basierte Browser funktionieren am besten.',
    ar: 'Chrome وEdge والمتصفحات المبنية على Chromium تعمل بشكل أفضل.',
    es: 'Chrome, Edge y navegadores basados en Chromium funcionan mejor.'
  },
  'faq.q4': {
    en: 'Can I use it on mobile?', ru: 'Работает ли на мобильном?', zh: '可以在手机上使用吗？', fr: 'Fonctionne-t-il sur mobile ?', de: 'Funktioniert es auf dem Handy?', ar: 'هل يعمل على الهاتف؟', es: '¿Funciona en móvil?'
  },
  'faq.a4': {
    en: 'Yes, the tracker works with front-facing mobile cameras. Best experience is on desktop for interview practice.',
    ru: 'Да, трекер работает с фронтальными камерами. Лучший опыт — на десктопе для практики интервью.',
    zh: '可以，追踪器支持手机前置摄像头。但桌面端面试练习体验更佳。',
    fr: 'Oui, le tracker fonctionne avec les caméras mobiles. L\'expérience est meilleure sur ordinateur.',
    de: 'Ja, der Tracker funktioniert mit mobilen Frontkameras. Desktop bietet das beste Erlebnis.',
    ar: 'نعم، يعمل المتتبع مع كاميرات الهاتف الأمامية. أفضل تجربة على سطح المكتب.',
    es: 'Sí, el tracker funciona con cámaras frontales del móvil. Mejor experiencia en escritorio.'
  },
  // Nav overlay
  'nav.home': {
    en: 'Home', ru: 'Главная', zh: '首页', fr: 'Accueil', de: 'Startseite', ar: 'الرئيسية', es: 'Inicio'
  },
  'nav.howitworks': {
    en: 'How It Works', ru: 'Как это работает', zh: '工作原理', fr: 'Comment ça marche', de: 'Funktionsweise', ar: 'كيف يعمل', es: 'Cómo funciona'
  },
  'nav.demo': {
    en: 'Live Demo', ru: 'Демо', zh: '在线演示', fr: 'Démo', de: 'Live-Demo', ar: 'عرض مباشر', es: 'Demo en vivo'
  },
  'nav.faq': {
    en: 'FAQ', ru: 'Вопросы', zh: '常见问题', fr: 'FAQ', de: 'FAQ', ar: 'الأسئلة', es: 'Preguntas'
  },
  'nav.launch': {
    en: 'Launch App', ru: 'Запустить', zh: '启动应用', fr: 'Lancer l\'app', de: 'App starten', ar: 'تشغيل التطبيق', es: 'Abrir app'
  },
  'preloader.text': {
    en: 'Initializing Gaze Guard...', ru: 'Инициализация Gaze Guard...', zh: '正在初始化 Gaze Guard...', fr: 'Initialisation de Gaze Guard...', de: 'Gaze Guard wird initialisiert...', ar: 'جارٍ تهيئة Gaze Guard...', es: 'Inicializando Gaze Guard...'
  },

  // ═══════════════════════════════════════
  // MAIN APP (index.html)
  // ═══════════════════════════════════════
  'app.badge.waiting': {
    en: 'WAITING', ru: 'ОЖИДАНИЕ', zh: '等待中', fr: 'EN ATTENTE', de: 'WARTEN', ar: 'انتظار', es: 'ESPERANDO'
  },
  'app.badge.looking': {
    en: 'LOOKING', ru: 'СМОТРИТ', zh: '注视中', fr: 'REGARDE', de: 'SCHAUT', ar: 'ينظر', es: 'MIRANDO'
  },
  'app.badge.away': {
    en: 'DISTRACTED', ru: 'ОТВЛЁКСЯ', zh: '分心了', fr: 'DISTRAIT', de: 'ABGELENKT', ar: 'مشتت', es: 'DISTRAÍDO'
  },
  'app.tab.tracker': {
    en: 'Tracker', ru: 'Трекер', zh: '追踪器', fr: 'Tracker', de: 'Tracker', ar: 'المتتبع', es: 'Rastreador'
  },
  'app.tab.interview': {
    en: 'Interview', ru: 'Интервью', zh: '面试', fr: 'Entretien', de: 'Interview', ar: 'المقابلة', es: 'Entrevista'
  },
  'app.loading': {
    en: 'Loading…', ru: 'Загрузка…', zh: '加载中…', fr: 'Chargement…', de: 'Laden…', ar: 'جارٍ التحميل…', es: 'Cargando…'
  },
  'app.loading.mp': {
    en: 'Loading MediaPipe…', ru: 'Загрузка MediaPipe…', zh: '正在加载MediaPipe…', fr: 'Chargement MediaPipe…', de: 'MediaPipe laden…', ar: 'جارٍ تحميل MediaPipe…', es: 'Cargando MediaPipe…'
  },
  'app.press.start': {
    en: 'Press "Start"', ru: 'Нажмите «Начать»', zh: '按"开始"', fr: 'Appuyez sur "Démarrer"', de: 'Klicken Sie "Start"', ar: 'اضغط "ابدأ"', es: 'Presiona "Iniciar"'
  },
  'app.btn.start': {
    en: '▶ Start', ru: '▶ Начать', zh: '▶ 开始', fr: '▶ Démarrer', de: '▶ Start', ar: '▶ ابدأ', es: '▶ Iniciar'
  },
  'app.btn.stop': {
    en: '⏹ Stop', ru: '⏹ Стоп', zh: '⏹ 停止', fr: '⏹ Arrêter', de: '⏹ Stopp', ar: '⏹ توقف', es: '⏹ Parar'
  },
  'app.btn.debug': {
    en: '🔍 Debug', ru: '🔍 Отладка', zh: '🔍 调试', fr: '🔍 Débogage', de: '🔍 Debug', ar: '🔍 تصحيح', es: '🔍 Depurar'
  },
  'app.btn.calibrate': {
    en: '🎯 Calibrate', ru: '🎯 Калибровка', zh: '🎯 校准', fr: '🎯 Calibrer', de: '🎯 Kalibrieren', ar: '🎯 معايرة', es: '🎯 Calibrar'
  },
  'app.label.sensitivity': {
    en: 'Sensitivity', ru: 'Чувствит.', zh: '灵敏度', fr: 'Sensibilité', de: 'Empfindlichk.', ar: 'الحساسية', es: 'Sensibilidad'
  },
  'app.label.volume': {
    en: 'Volume', ru: 'Громкость', zh: '音量', fr: 'Volume', de: 'Lautstärke', ar: 'الصوت', es: 'Volumen'
  },
  'app.stat.looking': {
    en: 'Looking', ru: 'Смотрит', zh: '注视', fr: 'Regarde', de: 'Schaut', ar: 'ينظر', es: 'Mirando'
  },
  'app.stat.distractions': {
    en: 'Distractions', ru: 'Отвлечений', zh: '分心', fr: 'Distractions', de: 'Ablenkungen', ar: 'تشتت', es: 'Distracciones'
  },
  'app.stat.focus': {
    en: 'Focus', ru: 'Фокус', zh: '专注', fr: 'Focus', de: 'Fokus', ar: 'تركيز', es: 'Enfoque'
  },
  'app.cal.lookhere': {
    en: 'Look at the camera', ru: 'Смотрите в камеру', zh: '请看摄像头', fr: 'Regardez la caméra', de: 'Schauen Sie in die Kamera', ar: 'انظر إلى الكاميرا', es: 'Mira a la cámara'
  },
  'app.cal.skip': {
    en: 'Skip', ru: 'Пропустить', zh: '跳过', fr: 'Passer', de: 'Überspringen', ar: 'تخطي', es: 'Saltar'
  },
  'app.transcript': {
    en: 'Transcript', ru: 'Транскрипция', zh: '转录', fr: 'Transcription', de: 'Transkription', ar: 'النص', es: 'Transcripción'
  },
  'app.iw.title': {
    en: 'Interview Questions', ru: 'Вопросы для интервью', zh: '面试问题', fr: 'Questions d\'entretien', de: 'Interviewfragen', ar: 'أسئلة المقابلة', es: 'Preguntas de entrevista'
  },
  'app.iw.placeholder': {
    en: 'Enter one question per line, e.g.:\n\nTell me about yourself.\nWhy do you want this job?\nWhat is your greatest strength?',
    ru: 'Введите по одному вопросу на строку:\n\nРасскажите о себе.\nПочему вы хотите эту работу?\nВ чём ваша сильная сторона?',
    zh: '每行输入一个问题，例如：\n\n请介绍你自己。\n你为什么想要这份工作？\n你最大的优势是什么？',
    fr: 'Entrez une question par ligne:\n\nParlez-moi de vous.\nPourquoi voulez-vous ce poste?\nQuelle est votre plus grande force?',
    de: 'Eine Frage pro Zeile eingeben:\n\nErzählen Sie von sich.\nWarum wollen Sie diesen Job?\nWas ist Ihre größte Stärke?',
    ar: 'أدخل سؤالاً واحداً في كل سطر:\n\nأخبرني عن نفسك.\nلماذا تريد هذه الوظيفة?\nما هي أكبر نقاط قوتك?',
    es: 'Ingresa una pregunta por línea:\n\nCuéntame sobre ti.\n¿Por qué quieres este trabajo?\n¿Cuál es tu mayor fortalza?'
  },
  'app.iw.timer': {
    en: 'Timer (sec)', ru: 'Таймер (сек)', zh: '计时 (秒)', fr: 'Minuteur (sec)', de: 'Timer (Sek)', ar: 'المؤقت (ثانية)', es: 'Temporizador (seg)'
  },
  'app.iw.order': {
    en: 'Order', ru: 'Порядок', zh: '顺序', fr: 'Ordre', de: 'Reihenfolge', ar: 'الترتيب', es: 'Orden'
  },
  'app.iw.sequential': {
    en: 'Sequential', ru: 'Последовательно', zh: '顺序', fr: 'Séquentiel', de: 'Sequenziell', ar: 'تسلسلي', es: 'Secuencial'
  },
  'app.iw.random': {
    en: 'Random', ru: 'Случайно', zh: '随机', fr: 'Aléatoire', de: 'Zufällig', ar: 'عشوائي', es: 'Aleatorio'
  },
  'app.iw.hint': {
    en: 'Each question will be shown with a countdown timer. Speech recognition records your answer. Eye tracking monitors your focus throughout.',
    ru: 'Каждый вопрос отображается с таймером обратного отсчёта. Распознавание речи записывает ответ. Трекинг глаз контролирует фокус.',
    zh: '每个问题都会显示倒计时。语音识别记录您的回答。眼动追踪全程监控您的注意力。',
    fr: 'Chaque question est affichée avec un minuteur. La reconnaissance vocale enregistre votre réponse. Le suivi oculaire surveille votre focus.',
    de: 'Jede Frage wird mit einem Countdown angezeigt. Spracherkennung zeichnet Ihre Antwort auf. Eye-Tracking überwacht Ihren Fokus.',
    ar: 'يُعرض كل سؤال مع مؤقت تنازلي. يسجل التعرف على الصوت إجابتك. يراقب تتبع العين تركيزك.',
    es: 'Cada pregunta se muestra con temporizador. El reconocimiento de voz graba tu respuesta. El seguimiento ocular monitorea tu enfoque.'
  },
  'app.iw.start': {
    en: '▶ Start Interview', ru: '▶ Начать интервью', zh: '▶ 开始面试', fr: '▶ Démarrer l\'entretien', de: '▶ Interview starten', ar: '▶ بدء المقابلة', es: '▶ Iniciar entrevista'
  },
  'app.iw.save': {
    en: '💾 Save', ru: '💾 Сохранить', zh: '💾 保存', fr: '💾 Sauvegarder', de: '💾 Speichern', ar: '💾 حفظ', es: '💾 Guardar'
  },
  'app.iw.load': {
    en: '📂 Load', ru: '📂 Загрузить', zh: '📂 加载', fr: '📂 Charger', de: '📂 Laden', ar: '📂 تحميل', es: '📂 Cargar'
  },
  'app.iw.results': {
    en: 'Interview Results', ru: 'Результаты интервью', zh: '面试结果', fr: 'Résultats de l\'entretien', de: 'Interview-Ergebnisse', ar: 'نتائج المقابلة', es: 'Resultados de la entrevista'
  },
  'app.iw.newinterview': {
    en: '🔄 New Interview', ru: '🔄 Новое интервью', zh: '🔄 新面试', fr: '🔄 Nouvel entretien', de: '🔄 Neues Interview', ar: '🔄 مقابلة جديدة', es: '🔄 Nueva entrevista'
  },
  'app.iw.questions': {
    en: 'Questions', ru: 'Вопросов', zh: '问题', fr: 'Questions', de: 'Fragen', ar: 'الأسئلة', es: 'Preguntas'
  },
  'app.iw.avgfocus': {
    en: 'Avg Focus', ru: 'Ср. фокус', zh: '平均专注', fr: 'Focus moyen', de: 'Ø Fokus', ar: 'متوسط التركيز', es: 'Enfoque promedio'
  },
  'app.footer': {
    en: 'Gaze Guard · MediaPipe FaceMesh + Iris + Web Speech API · Data stays local',
    ru: 'Gaze Guard · MediaPipe FaceMesh + Iris + Web Speech API · Данные локально',
    zh: 'Gaze Guard · MediaPipe FaceMesh + Iris + Web Speech API · 数据本地存储',
    fr: 'Gaze Guard · MediaPipe FaceMesh + Iris + Web Speech API · Données locales',
    de: 'Gaze Guard · MediaPipe FaceMesh + Iris + Web Speech API · Daten lokal',
    ar: 'Gaze Guard · MediaPipe FaceMesh + Iris + Web Speech API · البيانات محلية',
    es: 'Gaze Guard · MediaPipe FaceMesh + Iris + Web Speech API · Datos locales'
  },
  'app.camera': {
    en: 'Camera…', ru: 'Камера…', zh: '摄像头…', fr: 'Caméra…', de: 'Kamera…', ar: 'الكاميرا…', es: 'Cámara…'
  },
  'app.stop': {
    en: 'Stop', ru: 'Стоп', zh: '停止', fr: 'Arrêt', de: 'Stopp', ar: 'توقف', es: 'Parar'
  },
  'app.saved': {
    en: 'Saved', ru: 'Сохранено', zh: '已保存', fr: 'Sauvegardé', de: 'Gespeichert', ar: 'تم الحفظ', es: 'Guardado'
  },
  'app.loaded': {
    en: 'Loaded', ru: 'Загружено', zh: '已加载', fr: 'Chargé', de: 'Geladen', ar: 'تم التحميل', es: 'Cargado'
  },
  'app.noanswer': {
    en: '(no answer)', ru: '(нет ответа)', zh: '(无回答)', fr: '(pas de réponse)', de: '(keine Antwort)', ar: '(لا إجابة)', es: '(sin respuesta)'
  },

  // ═══════════════════════════════════════
  // NEW FEATURES
  // ═══════════════════════════════════════

  // Dashboard tab
  'app.tab.dashboard': {
    en: '📊 Dashboard', ru: '📊 Дашборд', zh: '📊 仪表板', fr: '📊 Tableau de bord', de: '📊 Dashboard', ar: '📊 لوحة التحكم', es: '📊 Panel'
  },

  // Difficulty levels
  'diff.easy': {
    en: 'Easy', ru: 'Легко', zh: '简单', fr: 'Facile', de: 'Leicht', ar: 'سهل', es: 'Fácil'
  },
  'diff.normal': {
    en: 'Normal', ru: 'Обычно', zh: '普通', fr: 'Normal', de: 'Normal', ar: 'عادي', es: 'Normal'
  },
  'diff.hard': {
    en: 'Hard', ru: 'Сложно', zh: '困难', fr: 'Difficile', de: 'Schwer', ar: 'صعب', es: 'Difícil'
  },
  'diff.expert': {
    en: 'Expert', ru: 'Эксперт', zh: '专家', fr: 'Expert', de: 'Experte', ar: 'خبير', es: 'Experto'
  },

  // AI Tips
  'tip.excellent': {
    en: 'Excellent focus! You maintained eye contact consistently. Try Expert difficulty for a greater challenge.',
    ru: 'Превосходный фокус! Вы стабильно поддерживали зрительный контакт. Попробуйте уровень «Эксперт» для большего вызова.',
    zh: '出色的注意力！您始终保持了眼神接触。尝试专家难度获得更大挑战。',
    fr: 'Excellent focus ! Vous avez maintenu le contact visuel. Essayez le niveau Expert pour plus de défi.',
    de: 'Hervorragender Fokus! Sie haben konsistenten Blickkontakt gehalten. Probieren Sie Experte für mehr Herausforderung.',
    ar: 'تركيز ممتاز! حافظت على التواصل البصري باستمرار. جرب مستوى الخبير لتحدٍ أكبر.',
    es: '¡Enfoque excelente! Mantuviste el contacto visual constante. Prueba el nivel Experto para un mayor desafío.'
  },
  'tip.good': {
    en: 'Good focus overall. Try to maintain eye contact during challenging questions — look at the bridge of the nose if direct eye contact feels intense.',
    ru: 'Хороший фокус в целом. Старайтесь поддерживать зрительный контакт на сложных вопросах — смотрите на переносицу, если прямой контакт слишком напряжённый.',
    zh: '整体注意力不错。尝试在困难问题时保持眼神接触——如果直视眼睛感觉紧张，可以看鼻梁。',
    fr: 'Bon focus dans l\'ensemble. Maintenez le contact visuel pendant les questions difficiles — regardez l\'arête du nez si le contact direct est intense.',
    de: 'Guter Fokus insgesamt. Halten Sie Blickkontakt bei schwierigen Fragen — schauen Sie auf den Nasenrücken, wenn direkter Kontakt zu intensiv ist.',
    ar: 'تركيز جيد بشكل عام. حاول الحفاظ على التواصل البصري أثناء الأسئلة الصعبة — انظر إلى جسر الأنف إذا كان التواصل المباشر مكثفًا.',
    es: 'Buen enfoque general. Mantén el contacto visual en preguntas difíciles — mira el puente de la nariz si el contacto directo se siente intenso.'
  },
  'tip.improve': {
    en: 'Your focus dipped below 70%. Practice the 80/20 rule: maintain eye contact 80% of the time, briefly look away 20% when thinking.',
    ru: 'Ваш фокус упал ниже 70%. Тренируйте правило 80/20: поддерживайте зрительный контакт 80% времени, кратко отводите взгляд 20% при обдумывании.',
    zh: '您的注意力低于70%。练习80/20法则：80%的时间保持眼神接触，思考时短暂移开目光20%。',
    fr: 'Votre focus est passé sous 70%. Pratiquez la règle 80/20 : contact visuel 80% du temps, regard détourné 20% en réfléchissant.',
    de: 'Ihr Fokus fiel unter 70%. Üben Sie die 80/20-Regel: 80% Blickkontakt, 20% kurz wegschauen beim Nachdenken.',
    ar: 'انخفض تركيزك عن 70%. مارس قاعدة 80/20: حافظ على التواصل البصري 80% من الوقت، وانظر بعيدًا 20% عند التفكير.',
    es: 'Tu enfoque bajó del 70%. Practica la regla 80/20: contacto visual 80% del tiempo, mira brevemente a otro lado 20% al pensar.'
  },
  'tip.low': {
    en: 'Focus was under 50%. Start with Easy difficulty and gradually increase. Try keeping your head still and only moving your eyes.',
    ru: 'Фокус ниже 50%. Начните с уровня «Легко» и постепенно повышайте. Старайтесь держать голову неподвижно, двигая только глазами.',
    zh: '注意力低于50%。从简单难度开始逐渐提高。尝试保持头部不动，只移动眼睛。',
    fr: 'Focus sous 50%. Commencez en Facile et augmentez progressivement. Gardez la tête immobile.',
    de: 'Fokus unter 50%. Starten Sie mit Leicht und steigern Sie schrittweise. Halten Sie den Kopf still.',
    ar: 'التركيز أقل من 50%. ابدأ بالمستوى السهل وارفعه تدريجيًا. حاول إبقاء رأسك ثابتًا.',
    es: 'Enfoque bajo 50%. Empieza con dificultad Fácil y aumenta gradualmente. Mantén la cabeza quieta.'
  },
  'tip.distractions': {
    en: 'You had many distractions. Try minimizing browser tabs and notifications during practice.',
    ru: 'Было много отвлечений. Попробуйте закрыть лишние вкладки и уведомления во время практики.',
    zh: '您有很多分心。尝试在练习期间最小化浏览器标签和通知。',
    fr: 'Vous avez eu beaucoup de distractions. Minimisez les onglets et notifications.',
    de: 'Sie hatten viele Ablenkungen. Minimieren Sie Browser-Tabs und Benachrichtigungen.',
    ar: 'كان لديك الكثير من التشتت. حاول تقليل علامات التبويب والإشعارات أثناء التدريب.',
    es: 'Tuviste muchas distracciones. Minimiza pestañas y notificaciones durante la práctica.'
  },
  'tip.worst_q': {
    en: 'Question ${n} had the lowest focus (${p}%). This type of question may need more preparation.',
    ru: 'Вопрос ${n} имел самый низкий фокус (${p}%). Этот тип вопросов требует большей подготовки.',
    zh: '问题${n}的专注度最低(${p}%)。这类问题可能需要更多准备。',
    fr: 'La question ${n} avait le focus le plus bas (${p}%). Ce type de question nécessite plus de préparation.',
    de: 'Frage ${n} hatte den niedrigsten Fokus (${p}%). Diese Fragetyp braucht mehr Vorbereitung.',
    ar: 'السؤال ${n} حصل على أقل تركيز (${p}%). هذا النوع من الأسئلة يحتاج مزيدًا من التحضير.',
    es: 'La pregunta ${n} tuvo el enfoque más bajo (${p}%). Este tipo de pregunta necesita más preparación.'
  },
  'tip.silent': {
    en: '${n} question(s) had no recorded answer. Make sure your microphone is working and speak clearly.',
    ru: '${n} вопрос(ов) без записанного ответа. Убедитесь, что микрофон работает и говорите чётко.',
    zh: '${n}个问题没有录到回答。确保麦克风正常工作并清晰说话。',
    fr: '${n} question(s) sans réponse enregistrée. Vérifiez votre microphone et parlez clairement.',
    de: '${n} Frage(n) ohne Antwort. Stellen Sie sicher, dass Ihr Mikrofon funktioniert.',
    ar: '${n} سؤال بدون إجابة مسجلة. تأكد من عمل الميكروفون وتحدث بوضوح.',
    es: '${n} pregunta(s) sin respuesta grabada. Asegúrate de que tu micrófono funcione y habla claro.'
  },
  'tip.breathe': {
    en: 'Before starting, take 3 deep breaths and focus on a single point on screen. This anchors your gaze and reduces anxiety.',
    ru: 'Перед началом сделайте 3 глубоких вдоха и сфокусируйтесь на одной точке экрана. Это закрепляет взгляд и снижает тревожность.',
    zh: '开始前深呼吸3次，注视屏幕上的一个点。这有助于稳定视线并减少焦虑。',
    fr: 'Avant de commencer, prenez 3 respirations profondes et fixez un point sur l\'écran. Cela ancre votre regard.',
    de: 'Nehmen Sie 3 tiefe Atemzüge und fokussieren Sie einen Punkt. Das verankert Ihren Blick und reduziert Angst.',
    ar: 'قبل البدء، خذ 3 أنفاس عميقة وركز على نقطة واحدة على الشاشة. هذا يثبت نظرك ويقلل القلق.',
    es: 'Antes de empezar, respira 3 veces y enfoca un punto en la pantalla. Esto ancla tu mirada y reduce la ansiedad.'
  },

  // Export
  'app.export': {
    en: '📄 Export PDF', ru: '📄 Экспорт PDF', zh: '📄 导出PDF', fr: '📄 Exporter PDF', de: '📄 PDF exportieren', ar: '📄 تصدير PDF', es: '📄 Exportar PDF'
  },

  // Heatmap
  'app.heatmap.title': {
    en: 'Gaze Heatmap', ru: 'Тепловая карта взгляда', zh: '注视热图', fr: 'Carte thermique du regard', de: 'Blick-Heatmap', ar: 'خريطة حرارية للنظر', es: 'Mapa de calor visual'
  },

  // Onboarding
  'onb.camera.title': {
    en: '📹 Camera View', ru: '📹 Камера', zh: '📹 摄像头视图', fr: '📹 Vue caméra', de: '📹 Kameraansicht', ar: '📹 عرض الكاميرا', es: '📹 Vista de cámara'
  },
  'onb.camera.text': {
    en: 'This is where your camera feed will appear. The AI tracks your face and eye movements in real-time.',
    ru: 'Здесь будет видеопоток с камеры. ИИ отслеживает лицо и движения глаз в реальном времени.',
    zh: '这里显示摄像头画面。AI实时追踪您的面部和眼球运动。',
    fr: 'Ici apparaîtra le flux de votre caméra. L\'IA suit votre visage et vos yeux en temps réel.',
    de: 'Hier erscheint Ihr Kamerabild. Die KI verfolgt Gesicht und Augenbewegungen in Echtzeit.',
    ar: 'هنا سيظهر بث الكاميرا. يتتبع الذكاء الاصطناعي وجهك وحركات عينيك.',
    es: 'Aquí aparecerá tu cámara. La IA rastrea tu cara y movimientos oculares en tiempo real.'
  },
  'onb.start.title': {
    en: '▶ Start Tracking', ru: '▶ Начать трекинг', zh: '▶ 开始追踪', fr: '▶ Démarrer le suivi', de: '▶ Tracking starten', ar: '▶ بدء التتبع', es: '▶ Iniciar rastreo'
  },
  'onb.start.text': {
    en: 'Click this button to start. You\'ll be asked to allow camera access, then calibration begins.',
    ru: 'Нажмите кнопку для старта. Потребуется разрешение на камеру, затем начнётся калибровка.',
    zh: '点击此按钮开始。系统会请求摄像头权限，然后开始校准。',
    fr: 'Cliquez pour démarrer. On vous demandera l\'accès à la caméra, puis la calibration commence.',
    de: 'Klicken Sie zum Starten. Sie werden um Kamerazugriff gebeten, dann beginnt die Kalibrierung.',
    ar: 'انقر لبدء التتبع. سيُطلب منك السماح بالوصول إلى الكاميرا، ثم تبدأ المعايرة.',
    es: 'Haz clic para empezar. Se pedirá acceso a la cámara, luego comienza la calibración.'
  },
  'onb.stats.title': {
    en: '📊 Live Statistics', ru: '📊 Статистика', zh: '📊 实时统计', fr: '📊 Statistiques en direct', de: '📊 Live-Statistiken', ar: '📊 إحصائيات مباشرة', es: '📊 Estadísticas en vivo'
  },
  'onb.stats.text': {
    en: 'Track your looking time, distraction count, and overall focus percentage during each session.',
    ru: 'Отслеживайте время взгляда, количество отвлечений и общий процент фокуса в каждой сессии.',
    zh: '追踪每次训练的注视时间、分心次数和整体专注百分比。',
    fr: 'Suivez votre temps de regard, le nombre de distractions et le pourcentage de focus.',
    de: 'Verfolgen Sie Blickzeit, Ablenkungen und Fokusprozentsatz in jeder Sitzung.',
    ar: 'تتبع وقت النظر وعدد التشتتات ونسبة التركيز الإجمالية في كل جلسة.',
    es: 'Rastrea tu tiempo de mirada, distracciones y porcentaje de enfoque en cada sesión.'
  },
  'onb.interview.title': {
    en: '🎤 Interview Mode', ru: '🎤 Режим интервью', zh: '🎤 面试模式', fr: '🎤 Mode entretien', de: '🎤 Interview-Modus', ar: '🎤 وضع المقابلة', es: '🎤 Modo entrevista'
  },
  'onb.interview.text': {
    en: 'Switch to Interview tab to practice with real questions. Your answers are transcribed and your gaze is tracked.',
    ru: 'Перейдите на вкладку «Интервью» для практики с реальными вопросами. Ваши ответы транскрибируются, а взгляд отслеживается.',
    zh: '切换到面试标签用真实问题练习。您的回答会被转录，注视会被追踪。',
    fr: 'Passez à l\'onglet Entretien pour pratiquer. Vos réponses sont transcrites et votre regard suivi.',
    de: 'Wechseln Sie zum Interview-Tab für Übungen. Antworten werden transkribiert, Blick verfolgt.',
    ar: 'انتقل إلى علامة المقابلة للتدرب. يتم نسخ إجاباتك وتتبع نظرك.',
    es: 'Cambia a la pestaña Entrevista para practicar. Tus respuestas se transcriben y tu mirada se rastrea.'
  },
  'onb.difficulty.title': {
    en: '🎯 Difficulty Levels', ru: '🎯 Уровни сложности', zh: '🎯 难度级别', fr: '🎯 Niveaux de difficulté', de: '🎯 Schwierigkeitsstufen', ar: '🎯 مستويات الصعوبة', es: '🎯 Niveles de dificultad'
  },
  'onb.difficulty.text': {
    en: 'Choose your challenge level. Start Easy and work up to Expert for the most realistic interview experience.',
    ru: 'Выберите уровень сложности. Начните с «Легко» и двигайтесь к «Эксперту» для максимально реалистичного опыта.',
    zh: '选择挑战等级。从简单开始，逐步提升到专家级别获得最真实的面试体验。',
    fr: 'Choisissez votre niveau. Commencez en Facile et progressez vers Expert pour l\'expérience la plus réaliste.',
    de: 'Wählen Sie Ihr Level. Starten Sie mit Leicht und arbeiten Sie sich zum Experten vor.',
    ar: 'اختر مستوى التحدي. ابدأ بالسهل واعمل حتى الخبير لتجربة المقابلة الأكثر واقعية.',
    es: 'Elige tu nivel. Empieza en Fácil y avanza hasta Experto para la experiencia más realista.'
  },
  'onb.skip': {
    en: 'Skip', ru: 'Пропустить', zh: '跳过', fr: 'Passer', de: 'Überspringen', ar: 'تخطي', es: 'Saltar'
  },
  'onb.next': {
    en: 'Next →', ru: 'Далее →', zh: '下一步 →', fr: 'Suivant →', de: 'Weiter →', ar: 'التالي →', es: 'Siguiente →'
  },
  'onb.gotit': {
    en: 'Got it!', ru: 'Понятно!', zh: '了解了！', fr: 'Compris !', de: 'Verstanden!', ar: 'فهمت!', es: '¡Entendido!'
  },

  // Dashboard
  'dash.sessions': {
    en: 'Sessions', ru: 'Сессий', zh: '训练次数', fr: 'Sessions', de: 'Sitzungen', ar: 'الجلسات', es: 'Sesiones'
  },
  'dash.avgfocus': {
    en: 'Avg Focus', ru: 'Ср. фокус', zh: '平均专注', fr: 'Focus moyen', de: 'Ø Fokus', ar: 'متوسط التركيز', es: 'Enfoque prom.'
  },
  'dash.trend': {
    en: 'Trend', ru: 'Тренд', zh: '趋势', fr: 'Tendance', de: 'Trend', ar: 'الاتجاه', es: 'Tendencia'
  },
  'dash.history': {
    en: 'Focus History (Last 7)', ru: 'История фокуса (последние 7)', zh: '专注历史（最近7次）', fr: 'Historique du focus (7 dernières)', de: 'Fokusverlauf (letzte 7)', ar: 'سجل التركيز (آخر 7)', es: 'Historial de enfoque (últimas 7)'
  },
  'dash.recent': {
    en: 'Recent Sessions', ru: 'Последние сессии', zh: '最近的训练', fr: 'Sessions récentes', de: 'Letzte Sitzungen', ar: 'الجلسات الأخيرة', es: 'Sesiones recientes'
  },
  'dash.clear': {
    en: '🗑️ Clear History', ru: '🗑️ Очистить историю', zh: '🗑️ 清除历史', fr: '🗑️ Effacer l\'historique', de: '🗑️ Verlauf löschen', ar: '🗑️ مسح السجل', es: '🗑️ Borrar historial'
  },
  'dash.empty': {
    en: 'No sessions yet. Start an interview to see your progress!',
    ru: 'Сессий пока нет. Начните интервью, чтобы увидеть свой прогресс!',
    zh: '还没有训练记录。开始面试来查看您的进步！',
    fr: 'Pas encore de sessions. Lancez un entretien pour voir votre progression !',
    de: 'Noch keine Sitzungen. Starten Sie ein Interview, um Ihren Fortschritt zu sehen!',
    ar: 'لا توجد جلسات بعد. ابدأ مقابلة لرؤية تقدمك!',
    es: 'No hay sesiones aún. ¡Inicia una entrevista para ver tu progreso!'
  }
};

// ═══ i18n ENGINE ═══
let currentLang = localStorage.getItem('gaze_lang') || 'en';

function t(key) {
  const entry = T[key];
  if (!entry) return key;
  return entry[currentLang] || entry['en'] || key;
}

function setLanguage(lang) {
  if (!LANGUAGES[lang]) return;
  currentLang = lang;
  localStorage.setItem('gaze_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = LANGUAGES[lang].dir;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;
    if (attr === 'placeholder') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  // Dispatch event for custom handlers
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function createLangSwitcher(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const current = document.createElement('button');
  current.className = 'lang-current liquid-glass';
  current.innerHTML = `${LANGUAGES[currentLang].flag} <span>${currentLang.toUpperCase()}</span>`;
  const dropdown = document.createElement('div');
  dropdown.className = 'lang-dropdown';
  dropdown.style.display = 'none';
  Object.entries(LANGUAGES).forEach(([code, info]) => {
    const btn = document.createElement('button');
    btn.className = 'lang-option' + (code === currentLang ? ' active' : '');
    btn.innerHTML = `${info.flag} ${info.name}`;
    btn.onclick = (e) => {
      e.stopPropagation();
      setLanguage(code);
      dropdown.style.display = 'none';
      current.innerHTML = `${info.flag} <span>${code.toUpperCase()}</span>`;
      dropdown.querySelectorAll('.lang-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
    dropdown.appendChild(btn);
  });
  current.onclick = (e) => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
  };
  document.addEventListener('click', () => { dropdown.style.display = 'none'; });
  container.appendChild(current);
  container.appendChild(dropdown);
}
