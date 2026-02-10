// Мультиязычная система переводов с полными оригинальными текстами
const TRANSLATIONS = {
    ru: {
        // Навигация
        nav_process: "Процесс",
        nav_work: "Работы", 
        nav_service: "Услуги",
        nav_contact: "Контакти",
        nav_start_project: "Начать проект",
        
        // Hero секция
        hero_title: "Design & Dev",
        hero_intro_colored: "Воплощаю идеи в",
        hero_intro_regular: "инновационные продукты с премиальным дизайном.",
        
        // Процесс секция
        process_title: "Мой подход ",
        process_strategy_title: "Стратегия",
        process_strategy_desc: "Исследую цели вашего бизнеса, чтобы продумать эффективную логику продукта и найти кратчайший путь к достижению результатов.",
        process_design_title: "Дизайн",
        process_design_desc: "Проектирую современные интерфейсы и визуальный стиль, который делает продукт интуитивно понятным и привлекательным для аудитории.",
        process_dev_title: "Разработка",
        process_dev_desc: "Воплощаю идеи в коде: создаю производительные цифровые решения любой сложности, уделяя внимание архитектуре и скорости работы.",
        process_promo_title: "Продвижение",
        process_promo_desc: " Настраиваю рекламные инструменты и создаю контент, который помогает готовому продукту быстро найти свою аудиторию и масштабироваться.",
        
        // Этапы процесса
        process_stage_design: "Дизайн",
        process_stage_accessibility: "Разработка", 
        process_stage_seo: "SEO",
        process_stage_website: "www.viktoria.io",
        
        // Работы секция
        work_title: "Проекты",
        work_subtitle: "В Lunar — я создаю нарративы, которые связываются с вашей аудиторией на эмоциональном уровне.",
        
        // Услуги секция
        service_title: "Услуги",
        service_subtitle: "Комплексные решения для бизнеса",
        service_web_title: "Web-разработка",
        service_web_desc: "Создание уникальных проектов на HTML/CSS/JS и React для полного контроля над логикой и дизайном. Также разворачиваю масштабируемые системы на WordPress и Wix, внедряю передовые решения на базе Next.js В работе активно использую нейросети для генерации чистого кода и автоматизации рутины, что позволяет ускорять разработку и реализовывать функции любой сложности.",
        service_ux_title: "UX/UI Дизайн",
        service_ux_desc: "Проектирование интуитивных интерфейсов в Figma и Lunacy. Я выстраиваю логику, по которой пользователю будет легко и приятно совершить покупку, объединяя это с безупречным чувством стиля. Создаю современный и визуально чистый дизайн, который превращает обычный сайт в сильный цифровой образ вашего бренда.",
        service_smm_title: "SMM & Контент",
        service_smm_desc: "Разработка стратегий и создание контента, который цепляет с первой секунды. Работаю в CapCut над динамичным монтажом и использую Photoshop, Canva для подготовки эстетичной графики. Я проектирую вовлекающий контент и активно применяю нейросети для генерации идей и визуала.",
        service_marketing_title: "Маркетинг & Трафик",
        service_marketing_desc: "Работа с трафиком через поиск эффективных связок и глубокую аналитику. Запускаю рекламные кампании, фокусируясь на окупаемости и привлечении целевой аудитории. Постоянный мониторинг и оптимизация бюджета позволяют находить точки роста для вашего бизнеса и планомерно увеличивать профит.",
        
        // Отзывы секция
        review_title: "Слова любви",
        review_subtitle: "Помогаю брендам достигать целей, вносить изменения и масштабироваться",
        
        review1_name: "Christian Fennesz",
        review1_position: "Основатель",
        review1_text: "\"Мы получили современную платформу с эстетичным интерфейсом. Стиль и качество дают преимущество на рынке\"",
        
        review2_name: "David Sylvian", 
        review2_position: "Основатель",
        review2_text: "\"Дизайн полностью изменил наше позиционирование. Сайт стал главным инструментом продаж, а единый стиль в соцсетях создал образ премиального бренда\"",
        
        review3_name: "Anna Koval",
        review3_position: "Директор", 
        review3_text: "\"Редкое сочетание скорости и качества. Сайт был запущен в рекордные сроки, при этом техническая часть и адаптивность выполнены на высшем уровне\"",
        
        review4_name: "Elena Worth",
        review4_position: "Маркетинг-менеджер",
        review4_text: "\"Максимально комфортный процесс и классный результат. Нам нужен был современный минимализм, и мы получили его в лучшем виде\"",
        
        review5_name: "Sophia Vance",
        review5_position: "Креативный директор",
        review5_text: "\"Виктория убрала всё лишнее и выделила главное. Теперь наш интерфейс понятен пользователю с первой секунды\"",
        
        review6_name: "Alex Reeves",
        review6_position: "Со-основатель",
        review6_text: "\"Запустили продукт с нуля под ключ. Виктория создала и стиль, и логику. Проект полностью готов к масштабированию\"",
        
        // Контакты секция
        contact_title: "Контакты",
        contact_subtitle: "Начнем проект? Свяжитесь со мной",
        contact_form_name: "Name",
        contact_form_telegram: "Telegram", 
        contact_form_message: "Message", 
        contact_form_submit: "Contact me",
        contact_success: "Спасибо! Ваша отправка была получена!",
        contact_error: "Ой! Что-то пошло не так при отправке формы.",
        
        // FAQ секция
        faq_title: "Часто задаваемые вопросы",
        
        faq_price_question: "Как рассчитывается стоимость проекта?",
        faq_price_answer: "Стоимость зависит от сложности и объема задач.<br><br>Моя базовая ставка — 30$/час, однако я всегда открыта к обсуждению фиксированной цены за весь проект после разбора вашего технического задания.",
        
        faq_time_question: "Сколько времени займет реализация?",
        faq_time_answer: "Сроки обсуждаются индивидуально для каждого проекта. Они зависят от объема правок, сложности функционала и текущей очереди проектов.",
        
        faq_separate_question: "Можно ли заказать услуги отдельно?",
        faq_separate_answer: "Да. Вы можете обратиться как за комплексным запуском проекта, так и за конкретной услугой: дизайном в Figma, веб-разработкой или настройкой трафика.",
        
        faq_why_question: "Почему стоит выбрать именно вас?",
        faq_why_answer: "Мое преимущество — комплексный подход, объединяющий дизайн, код и маркетинг.<br><br>Вам не нужно искать разных исполнителей. Я создаю визуальный образ бренда, превращаю его в работающий код и помогаю привлечь первых клиентов.",
        
        faq_revisions_question: "Как устроена работа с правками и улучшениями?",
        faq_revisions_answer: "Для меня важно, чтобы вы получили продукт, который полностью решает ваши задачи. Мы работаем поэтапно: согласовываем каждый шаг, чтобы результат соответствовал вашим ожиданиям. В стоимость уже включены 2–3 круга правок, что позволяет нам довести проект до идеала в рамках ТЗ. Если же в процессе у вас появятся новые задачи, выходящие за рамки технического задания, мы сможем реализовать их по почасовой ставке.",
        
        // Футер
        footer_email: "www.viktoria.io",
        footer_address: "Portfolio", 
        footer_copyright: "Digital Design & Development Viktoria O. 2026"
    },
    
    en: {
        // Навигация
        nav_process: "Process",
        nav_work: "Work", 
        nav_service: "Services",
        nav_contact: "Contact",
        nav_start_project: "Start Project",
        
        // Hero секция
        hero_title: "Design & Dev",
        hero_intro_colored: "I bring ideas to life in",
        hero_intro_regular: "innovative products with premium design.",
        
        // Процесс секция
        process_title: "My Approach",
        process_strategy_title: "Strategy",
        process_strategy_desc: "I research your business goals to design effective product logic and find the shortest path to achieving results.",
        process_design_title: "Design",
        process_design_desc: "I design modern interfaces and visual style that make the product intuitive and attractive to your audience.",
        process_dev_title: "Development",
        process_dev_desc: "I bring ideas to life in code: creating high-performance digital solutions of any complexity, with attention to architecture and speed.",
        process_promo_title: "Promotion",
        process_promo_desc: "I set up advertising tools and create content that helps the finished product quickly find its audience and scale.",
        
        // Этапы процесса
        process_stage_design: "Design",
        process_stage_accessibility: "Development", 
        process_stage_seo: "SEO",
        process_stage_website: "www.viktoria.io",
        
        // Работы секция
        work_title: "Projects",
        work_subtitle: "At Lunar — I create narratives that connect with your audience on an emotional level.",
        
        // Услуги секция
        service_title: "Services",
        service_subtitle: "Comprehensive Business Solutions",
        service_web_title: "Web Development",
        service_web_desc: "Creating unique projects with HTML/CSS/JS and React for complete control over logic and design. I also deploy scalable systems on WordPress and Wix, implement cutting-edge solutions based on Next.js. I actively use neural networks in my work to generate clean code and automate routine, which speeds up development and allows implementing features of any complexity.",
        service_ux_title: "UX/UI Design",
        service_ux_desc: "Designing intuitive interfaces in Figma and Lunacy. I build logic that makes it easy and pleasant for users to make a purchase, combining this with impeccable style. I create modern and visually clean design that transforms an ordinary website into a strong digital image of your brand.",
        service_smm_title: "SMM & Content",
        service_smm_desc: "Developing strategies and creating content that hooks from the first second. I work in CapCut on dynamic editing and use Photoshop, Canva to prepare aesthetic graphics. I design engaging content and actively apply neural networks to generate ideas and visuals.",
        service_marketing_title: "Marketing & Traffic",
        service_marketing_desc: "Working with traffic through finding effective funnels and deep analytics. I launch advertising campaigns focusing on ROI and attracting target audience. Constant monitoring and budget optimization allow finding growth points for your business and systematically increasing profit.",
        
        // Отзывы секция
        review_title: "Words of Love",
        review_subtitle: "I help brands achieve goals, make changes and scale",
        
        review1_name: "Christian Fennesz",
        review1_position: "Founder",
        review1_text: "\"We received a modern platform with an aesthetic interface. Style and quality give us a market advantage\"",
        
        review2_name: "David Sylvian", 
        review2_position: "Founder",
        review2_text: "\"The design completely changed our positioning. The site became the main sales tool, and a unified style in social media created the image of a premium brand\"",
        
        review3_name: "Anna Koval",
        review3_position: "Director", 
        review3_text: "\"A rare combination of speed and quality. The site was launched in record time, while the technical part and responsiveness were executed at the highest level\"",
        
        review4_name: "Elena Worth",
        review4_position: "Marketing Manager",
        review4_text: "\"Maximum comfortable process and cool result. We needed modern minimalism, and we got it in its best form\"",
        
        review5_name: "Sophia Vance",
        review5_position: "Creative Director",
        review5_text: "\"Victoria removed everything unnecessary and highlighted the main thing. Now our interface is understandable to the user from the first second\"",
        
        review6_name: "Alex Reeves",
        review6_position: "Co-founder",
        review6_text: "\"We launched a turnkey product from scratch. Victoria created both the style and the logic. The project is fully ready for scaling\"",
        
        // Контакты секция
        contact_title: "Contact",
        contact_subtitle: "Let's start a project? Get in touch with me",
        contact_form_name: "Name",
        contact_form_telegram: "Telegram", 
        contact_form_message: "Message", 
        contact_form_submit: "Contact me",
        contact_success: "Thank you! Your submission has been received!",
        contact_error: "Oops! Something went wrong while submitting the form.",
        
        // FAQ секция
        faq_title: "Frequently Asked Questions",
        
        faq_price_question: "How is project cost calculated?",
        faq_price_answer: "Cost depends on complexity and scope of tasks.<br><br>My base rate is $30/hour, however I'm always open to discussing a fixed price for the entire project after reviewing your technical specifications.",
        
        faq_time_question: "How long will implementation take?",
        faq_time_answer: "Deadlines are discussed individually for each project. They depend on the volume of revisions, functionality complexity, and current project queue.",
        
        faq_separate_question: "Can I order services separately?",
        faq_separate_answer: "Yes. You can contact me for a comprehensive project launch or for specific services: design in Figma, web development, or traffic setup.",
        
        faq_why_question: "Why should you choose me?",
        faq_why_answer: "My advantage is a comprehensive approach that combines design, code, and marketing. You don't need to find different performers. I create the visual image of the brand, turn it into working code, and help attract the first clients.",
        
        faq_revisions_question: "How do revisions and improvements work?",
        faq_revisions_answer: "It's important for me that you get a product that completely solves your tasks. We work step by step: we agree on each step so that the result meets your expectations. The price already includes 2-3 rounds of revisions, which allows us to bring the project to perfection within the technical specifications. If new tasks arise during the process that go beyond the technical specifications, we can implement them at an hourly rate.",
        
        // Футер
        footer_email: "www.viktoria.io",
        footer_address: "Portfolio", 
        footer_copyright: "Digital Design & Development Viktoria O. 2026"
    },
    
    uk: {
        // Навигация
        nav_process: "Процес",
        nav_work: "Роботи", 
        nav_service: "Послуги",
        nav_contact: "Контакти",
        nav_start_project: "Почати проект",
        
        // Hero секция
        hero_title: "Design & Dev",
        hero_intro_colored: "Втілюю ідеї в",
        hero_intro_regular: "інноваційні продукти з преміум дизайном.",
        
        // Процесс секция
        process_title: "Мій підхід",
        process_strategy_title: "Стратегія",
        process_strategy_desc: "Досліджую цілі вашого бізнесу, щоб продумати ефективну логіку продукту і знайти найкоротший шлях до досягнення результатів.",
        process_design_title: "Дизайн",
        process_design_desc: "Проектую сучасні інтерфейси та візуальний стиль, який робить продукт інтуїтивно зрозумілим і привабливим для аудиторії.",
        process_dev_title: "Розробка",
        process_dev_desc: "Втілюю ідеї в коді: створюю продуктивні цифрові рішення будь-якої складності, приділяючи увагу архітектурі та швидкості роботи.",
        process_promo_title: "Просування",
        process_promo_desc: "Налаштовую рекламні інструменти та створюю контент, який допомагає готовому продукту швидко знайти свою аудиторію та масштабуватися.",
        
        // Этапы процесса
        process_stage_design: "Дизайн",
        process_stage_accessibility: "Розробка", 
        process_stage_seo: "SEO",
        process_stage_website: "www.viktoria.io",
        
        // Работы секция
        work_title: "Проекти",
        work_subtitle: "В Lunar — я створюю наративи, які пов'язуються з вашою аудиторією на емоційному рівні.",
        
        // Услуги секция
        service_title: "Послуги",
        service_subtitle: "Комплексні рішення для бізнесу",
        service_web_title: "Web-розробка",
        service_web_desc: "Створення унікальних проектів на HTML/CSS/JS та React для повного контролю над логікою та дизайном. Також розгортаю масштабовані системи на WordPress та Wix, впроваджую передові рішення на базі Next.js. У роботі активно використовую нейромережі для генерації чистого коду та автоматизації рутини, що дозволяє прискорювати розробку та реалізовувати функції будь-якої складності.",
        service_ux_title: "UX/UI Дизайн",
        service_ux_desc: "Проектування інтуїтивних інтерфейсів у Figma та Lunacy. Я вибудовую логіку, за якою користувачеві буде легко і приємно здійснити покупку, об'єднуючи це з бездоганним почуттям стилю. Створюю сучасний та візуально чистий дизайн, який перетворює звичайний сайт на сильний цифровий образ вашого бренду.",
        service_smm_title: "SMM & Контент",
        service_smm_desc: "Розробка стратегій та створення контенту, який зачіпає з першої секунди. Працюю в CapCut над динамічним монтажем та використовую Photoshop, Canva для підготовки естетичної графіки. Я проектую залучаючий контент та активно застосовую нейромережі для генерації ідей та візуалу.",
        service_marketing_title: "Маркетинг & Трафік",
        service_marketing_desc: "Робота з трафіком через пошук ефективних зв'язок та глибоку аналітику. Запускаю рекламні кампанії, фокусуючись на окупності та залученні цільової аудиторії. Постійний моніторинг та оптимізація бюджету дозволяють знаходити точки зростання для вашого бізнесу та планомірно збільшувати профіт.",
        
        // Отзывы секция
        review_title: "Слова любові",
        review_subtitle: "Допомагаю брендам досягати цілей, вносити зміни та масштабуватися",
        
        review1_name: "Christian Fennesz",
        review1_position: "Засновник",
        review1_text: "\"Ми отримали сучасну платформу з естетичним інтерфейсом. Стиль та якість дають перевагу на ринку\"",
        
        review2_name: "David Sylvian", 
        review2_position: "Засновник",
        review2_text: "\"Дизайн повністю змінив наше позиціонування. Сайт став головним інструментом продажів, а єдиний стиль у соцмережах створив образ преміум бренду\"",
        
        review3_name: "Anna Koval",
        review3_position: "Директор", 
        review3_text: "\"Рідкісне поєднання швидкості та якості. Сайт був запущений у рекордні терміни, при цьому технічна частина та адаптивність виконані на найвищому рівні\"",
        
        review4_name: "Elena Worth",
        review4_position: "Маркетинг-менеджер",
        review4_text: "\"Максимально комфортний процес та класний результат. Нам потрібен був сучасний мінімалізм, і ми отримали його в найкращому вигляді\"",
        
        review5_name: "Sophia Vance",
        review5_position: "Креативний директор",
        review5_text: "\"Вікторія прибрала все зайве та виділила головне. Тепер наш інтерфейс зрозумілий користувачеві з першої секунди\"",
        
        review6_name: "Alex Reeves",
        review6_position: "Співзасновник",
        review6_text: "\"Запустили продукт з нуля під ключ. Вікторія створила і стиль, і логіку. Проект повністю готовий до масштабування\"",
        
        // Контакты секция
        contact_title: "Контакти",
        contact_subtitle: "Почнемо проект? Зв'яжіться зі мною",
        contact_form_name: "Ім'я",
        contact_form_telegram: "Telegram", 
        contact_form_message: "Повідомлення", 
        contact_form_submit: "Зв'язатися зі мною",
        contact_success: "Дякую! Ваше відправлення отримано!",
        contact_error: "Ой! Щось пішло не так під час відправки форми.",
        
        // FAQ секция
        faq_title: "Часто задавані питання",
        
        faq_price_question: "Як розраховується вартість проекту?",
        faq_price_answer: "Вартість залежить від складності та обсягу завдань.<br><br>Моя базова ставка — 30$/година, однак я завжди відкрита до обговорення фіксованої ціни за весь проект після розбору вашого технічного завдання.",
        
        faq_time_question: "Скільки часу займе реалізація?",
        faq_time_answer: "Терміни обговорюються індивідуально для кожного проекту. Вони залежать від обсягу правок, складності функціоналу та поточної черги проектів.",
        
        faq_separate_question: "Можна замовити послуги окремо?",
        faq_separate_answer: "Так. Ви можете звернутися як за комплексним запуском проекту, так і за конкретною послугою: дизайном у Figma, веб-розробкою або налаштуванням трафіку.",
        
        faq_why_question: "Чому варто вибрати саме вас?",
        faq_why_answer: "Моя перевага — комплексний підхід, що об'єднує дизайн, код та маркетинг.<br><br>Вам не потрібно шукати різних виконавців. Я створюю візуальний образ бренду, перетворюю його в працюючий код і допомагаю залучити перших клієнтів.",
        
        faq_revisions_question: "Як влаштована робота з правками та покращеннями?",
        faq_revisions_answer: "Для мене важливо, щоб ви отримали продукт, який повністю вирішує ваші завдання. Ми працюємо поетапно: погоджуємо кожен крок, щоб результат відповідав вашим очікуванням. У вартість вже включені 2–3 кола правок, що дозволяє нам довести проект до ідеалу в рамках технічного завдання. Якщо ж в процесі у вас з'являться нові завдання, що виходять за рамки технічного завдання, ми зможемо реалізувати їх за погодинною ставкою.",
        
        // Футер
        footer_email: "www.viktoria.io",
        footer_address: "Portfolio", 
        footer_copyright: "Digital Design & Development Viktoria O. 2026"
    }
};
