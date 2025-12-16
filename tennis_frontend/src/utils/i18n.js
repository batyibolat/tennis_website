import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // General
      username_invalid_chars: "Username can only contain letters, numbers, and underscores",
      password_weak: "Password is too weak. Please use a stronger password",
      registration_failed_check_fields: "Registration failed. Please check the fields above",
      confirm_password_required: "Confirm Password is required",
      home: 'Home',
      news: 'News',
      players: 'Players',
      tournaments: 'Tournaments',
      contacts: 'Contacts',
      ai: 'AI Assistant',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      profile: 'Profile',
      settings: 'Settings',
      favorites: 'Favorites',
      activity: 'Activity',
      
      // Players
      atp: 'ATP',
      wta: 'WTA',
      rank: 'Rank',
      points: 'Points',
      country: 'Country',
      coach: 'Coach',
      wins: 'Wins',
      losses: 'Losses',
      tournaments_played: 'Tournaments Played',
      biography: 'Biography',
      recent_tournaments: 'Recent Tournaments',
      statistics: 'Statistics',
      win_rate: 'Win Rate',
      gender: 'Gender',
      age: 'Age',
      
      // Player Details
      loading_player_details: 'Loading player details...',
      player_not_found: 'Player not found',
      overview: 'Overview',
      achievements: 'Achievements',
      strengths_weaknesses: 'Analysis',
      quick_stats: 'Quick Stats',
      player_info: 'Player Info',
      player_overview: 'Player Overview',
      detailed_statistics: 'Detailed Statistics',
      career_achievements: 'Career Achievements',
      player_analysis: 'Player Analysis',
      total_matches: 'Total Matches',
      career_prize_money: 'Career Prize Money',
      playing_style: 'Playing Style',
      turned_pro: 'Turned Pro',
      favorite_tournament: 'Favorite Tournament',
      career_highlights: 'Career Highlights',
      match_statistics: 'Match Statistics',
      surface_preference: 'Surface Preference',
      no_surface_data: 'No surface data available',
      serve_statistics: 'Serve Statistics',
      total_aces: 'Total Aces',
      double_faults: 'Double Faults',
      first_serve_percentage: 'First Serve %',
      tournament_statistics: 'Tournament Statistics',
      average_points_per_tournament: 'Avg Points/Tournament',
      break_points_saved: 'Break Points Saved',
      physical_characteristics: 'Physical Characteristics',
      height: 'Height',
      weight: 'Weight',
      years_pro: 'Years Pro',
      title_wins: 'Title Wins',
      records: 'Records',
      best_ranking: 'Best Ranking',
      weeks_at_no1: 'Weeks at No. 1',
      strengths: 'Strengths',
      weaknesses: 'Weaknesses',
      no_strengths_data: 'No strengths data available',
      no_weaknesses_data: 'No weaknesses data available',
      playing_style_analysis: 'Playing Style Analysis',
      serve_power: 'Serve Power',
      consistency: 'Consistency',
      no_tournament_data: 'No tournament data available',
      
      // Tournaments
      upcoming: 'Upcoming',
      current: 'Current',
      past: 'Past',
      location: 'Location',
      surface: 'Surface',
      dates: 'Dates',
      prize_money: 'Prize Money',
      category: 'Category',
      winner: 'Winner',
      hard: 'Hard',
      clay: 'Clay',
      grass: 'Grass',
      search_players: 'Search players...',
      search_atp_players: 'Search ATP players...',
      search_wta_players: 'Search WTA players...',
      
      // AI Chat
      send: 'Send',
      type_message: 'Type your message...',
      welcome_ai: 'Welcome to Tennis AI Assistant!',
      start_question: 'Start by asking a question about tennis.',
      ai_note: 'Note: This AI is trained to answer tennis-related questions only.',
      
      // News
      featured_news: 'Featured News',
      all_news: 'All News',
      author: 'Author',
      published: 'Published',
      views: 'Views',
      read_more: 'Read More',
      close: 'Close',
      
      // Contacts
      contact_us: 'Contact Us',
      get_in_touch: 'Get in Touch',
      send_message: 'Send Message',
      your_name: 'Your Name',
      email_address: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      faq: 'Frequently Asked Questions',
      our_location: 'Our Location',
      follow_us: 'Follow Us',
      
      // Register/Login
      create_account: 'Create Account',
      username: 'Username',
      first_name: 'First Name',
      last_name: 'Last Name',
      password: 'Password',
      confirm_password: 'Confirm Password',
      preferred_language: 'Preferred Language',
      terms_conditions: 'By registering, you agree to our Terms of Service and Privacy Policy.',
      have_account: 'Already have an account?',
      dont_have_account: 'Don\'t have an account?',
      register_here: 'Register here',
      sign_in: 'Sign In',
      logging_in: 'Logging in...',
      creating_account: 'Creating Account...',
      
      // Profile
      personal_information: 'Personal Information',
      preferences: 'Preferences',
      email_notifications: 'Email Notifications',
      dark_mode: 'Dark Mode',
      account_statistics: 'Account Statistics',
      favorite_players: 'Favorite Players',
      ai_conversations: 'AI Conversations',
      recent_activity: 'Recent Activity',
      manage_favorites: 'Manage Favorites',
      no_favorites: 'No favorite players yet.',
      no_activity: 'No recent activity.',
      member_since: 'Member since',
      edit_profile: 'Edit Profile',
      save_changes: 'Save Changes',
      cancel: 'Cancel',
      
      // Auth messages
      passwords_mismatch: 'Passwords do not match',
      password_length: 'Password must be at least 6 characters',
      login_failed: 'Login failed. Please check your credentials.',
      registration_successful: 'Registration successful',
      
      // Errors
      error_occurred: 'An error occurred. Please try again.',
      not_found: 'Not found',
      loading: 'Loading...',
      no_data: 'No data found',
      
      // Home page
      hero_title: 'ATP/WTA Tennis News',
      hero_subtitle: 'Your source for the latest tennis updates, rankings, and analysis',
      atp_top_10: 'ATP Top 10',
      wta_top_10: 'WTA Top 10',
      
      // Modal
      loading_tournaments: 'Loading tournaments...',
      loading_news: 'Loading news...',
      loading_players: 'Loading players...',
      
      // Actions
      search: 'Search',
      filter: 'Filter',
      clear: 'Clear',
      save: 'Save',
      delete: 'Delete',
      update: 'Update',
      view_details: 'View Details',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      
      // Status
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      info: 'Information',
      
      // Time
      today: 'Today',
      yesterday: 'Yesterday',
      this_week: 'This week',
      this_month: 'This month',
      last_month: 'Last month',
      all_time: 'All time',
      
      // Navigation
      dashboard: 'Dashboard',
      main_menu: 'Main Menu',
      user_menu: 'User Menu',
      
      // Languages
      language_en: 'English',
      language_ru: 'Русский',
      language_kz: 'Қазақша',
      
      // Contact info
      phone: 'Phone',
      address: 'Address',
      email: 'Email',
      website: 'Website',
      light_mode: 'Light Mode',
      search_tennis_news: "Search tennis news...",
      
      // Social
      facebook: 'Facebook',
      twitter: 'Twitter',
      instagram: 'Instagram',
      youtube: 'YouTube',
      
      // FAQ
      faq_rankings: 'How are rankings calculated?',
      faq_rankings_answer: 'Rankings are based on points earned from tournament performances over the past 52 weeks.',
      faq_tickets: 'Where can I buy tickets for tournaments?',
      faq_tickets_answer: 'Tickets are available on official tournament websites and authorized ticket sellers.',
      faq_report: 'How can I report inaccurate information?',
      faq_report_answer: 'Please use the contact form above to report any inaccuracies you find on our website.',
      
      // Новые добавленные переводы
      login_to_portal: 'Login to Tennis Portal',
      welcome_register: 'Join our tennis community to get personalized news and updates',
      username_helper: 'Choose a unique username',
      password_helper: 'Minimum 6 characters',
      no_biography: 'No biography available.',
      contact_description: 'Have questions about tennis, rankings, or tournaments? Feel free to contact us anytime.',
      map_placeholder: 'Google Maps Embed Would Appear Here',
      message_sent: 'Your message has been sent successfully!',
      sending: 'Sending...',
      you: 'You',
      load_more: 'Load More',
      profile_updated: 'Profile updated successfully!',
      error_updating_profile: 'Error updating profile. Please try again.',
      notifications_description: 'Receive email updates about tennis news',
      dark_mode_description: 'Switch to dark theme',
      actions: 'Actions',
      
      // Новые переводы из вашего сообщения
      not_available: 'Not specified',
      recent_form: 'Current form',
      
      // Навигация
      rankings: 'Rankings',
      tennis_news: 'Tennis News',
      search_tennis_news: 'Search tennis news...',
      world_rankings: "World Rankings",
      current_rankings_desc: "Current ATP and WTA rankings",
      rank: "Rank",
      points: "Points",
      change: "Change",
      tournaments: "Tournaments",
      player: "Player",
      country: "Country"
    }
  },
  ru: {
    translation: {
      search_tennis_news: "Поиск новостей о теннисе...",
      username_invalid_chars: "Имя пользователя может содержать только буквы, цифры и подчеркивания",
      password_weak: "Пароль слишком слабый. Пожалуйста, используйте более надежный пароль",
      registration_failed_check_fields: "Регистрация не удалась. Пожалуйста, проверьте поля выше",
      confirm_password_required: "Подтверждение пароля обязательно",

      // General
      home: 'Главная',
      news: 'Новости',
      players: 'Игроки',
      tournaments: 'Турниры',
      contacts: 'Контакты',
      ai: 'ИИ Помощник',
      login: 'Войти',
      register: 'Регистрация',
      logout: 'Выйти',
      profile: 'Профиль',
      settings: 'Настройки',
      favorites: 'Избранное',
      activity: 'Активность',
      
      // Players
      atp: 'ATP',
      wta: 'WTA',
      rank: 'Ранг',
      points: 'Очки',
      country: 'Страна',
      coach: 'Тренер',
      wins: 'Победы',
      losses: 'Поражения',
      tournaments_played: 'Сыгранные турниры',
      biography: 'Биография',
      recent_tournaments: 'Последние турниры',
      statistics: 'Статистика',
      win_rate: 'Процент побед',
      gender: 'Пол',
      age: 'Возраст',
      
      // Player Details
      loading_player_details: 'Загрузка деталей игрока...',
      player_not_found: 'Игрок не найден',
      overview: 'Обзор',
      achievements: 'Достижения',
      strengths_weaknesses: 'Анализ',
      quick_stats: 'Быстрая статистика',
      player_info: 'Информация об игроке',
      player_overview: 'Обзор игрока',
      detailed_statistics: 'Детальная статистика',
      career_achievements: 'Карьерные достижения',
      player_analysis: 'Анализ игрока',
      total_matches: 'Всего матчей',
      career_prize_money: 'Призовые за карьеру',
      playing_style: 'Стиль игры',
      turned_pro: 'Стал профессионалом',
      favorite_tournament: 'Любимый турнир',
      career_highlights: 'Основные моменты карьеры',
      light_mode: "Светлая тема",
      match_statistics: 'Статистика матчей',
      surface_preference: 'Предпочтение покрытий',
      no_surface_data: 'Нет данных о покрытиях',
      serve_statistics: 'Статистика подачи',
      total_aces: 'Всего эйсов',
      double_faults: 'Двойные ошибки',
      first_serve_percentage: 'Процент первой подачи',
      tournament_statistics: 'Статистика турниров',
      average_points_per_tournament: 'Средние очки/турнир',
      break_points_saved: 'Спасенные брейк-пойнты',
      physical_characteristics: 'Физические характеристики',
      height: 'Рост',
      weight: 'Вес',
      years_pro: 'Лет в профессионалах',
      title_wins: 'Победы в турнирах',
      records: 'Рекорды',
      best_ranking: 'Лучший рейтинг',
      weeks_at_no1: 'Недель на первом месте',
      strengths: 'Сильные стороны',
      weaknesses: 'Слабые стороны',
      no_strengths_data: 'Нет данных о сильных сторонах',
      no_weaknesses_data: 'Нет данных о слабых сторонах',
      playing_style_analysis: 'Анализ стиля игры',
      serve_power: 'Сила подачи',
      consistency: 'Стабильность',
      no_tournament_data: 'Нет данных о турнирах',
      
      // Tournaments
      upcoming: 'Предстоящие',
      current: 'Текущие',
      past: 'Прошедшие',
      location: 'Место',
      surface: 'Покрытие',
      dates: 'Даты',
      prize_money: 'Призовой фонд',
      category: 'Категория',
      winner: 'Победитель',
      hard: 'Хард',
      clay: 'Грунт',
      grass: 'Трава',
      search_players: 'Поиск игроков...',
      search_atp_players: 'Поиск игроков ATP...',
      search_wta_players: 'Поиск игроков WTA...',
      
      // AI Chat
      send: 'Отправить',
      type_message: 'Введите сообщение...',
      welcome_ai: 'Добро пожаловать в Теннисный ИИ Помощник!',
      start_question: 'Начните с вопроса о теннисе.',
      ai_note: 'Примечание: Этот ИИ обучен отвечать только на вопросы, связанные с теннисом.',
      
      // News
      featured_news: 'Рекомендуемые новости',
      all_news: 'Все новости',
      author: 'Автор',
      published: 'Опубликовано',
      views: 'Просмотры',
      read_more: 'Читать далее',
      close: 'Закрыть',
      
      // Contacts
      contact_us: 'Связаться с нами',
      get_in_touch: 'Свяжитесь с нами',
      send_message: 'Отправить сообщение',
      your_name: 'Ваше имя',
      email_address: 'Адрес электронной почты',
      subject: 'Тема',
      message: 'Сообщение',
      faq: 'Часто задаваемые вопросы',
      our_location: 'Наше местоположение',
      follow_us: 'Подписывайтесь на нас',
      
      // Register/Login
      create_account: 'Создать аккаунт',
      username: 'Имя пользователя',
      first_name: 'Имя',
      last_name: 'Фамилия',
      password: 'Пароль',
      confirm_password: 'Подтвердите пароль',
      preferred_language: 'Предпочитаемый язык',
      terms_conditions: 'Регистрируясь, вы соглашаетесь с нашими Условиями обслуживания и Политикой конфиденциальности.',
      have_account: 'Уже есть аккаунт?',
      dont_have_account: 'Нет аккаунта?',
      register_here: 'Зарегистрируйтесь здесь',
      sign_in: 'Войти',
      logging_in: 'Вход в систему...',
      creating_account: 'Создание аккаунта...',
      
      // Profile
      personal_information: 'Личная информация',
      preferences: 'Настройки',
      email_notifications: 'Email уведомления',
      dark_mode: 'Темный режим',
      account_statistics: 'Статистика аккаунта',
      favorite_players: 'Избранные игроки',
      ai_conversations: 'Разговоры с ИИ',
      recent_activity: 'Недавняя активность',
      manage_favorites: 'Управление избранным',
      no_favorites: 'Пока нет избранных игроков.',
      no_activity: 'Нет недавней активности.',
      member_since: 'Участник с',
      edit_profile: 'Редактировать профиль',
      save_changes: 'Сохранить изменения',
      cancel: 'Отмена',
      
      // Auth messages
      passwords_mismatch: 'Пароли не совпадают',
      password_length: 'Пароль должен содержать не менее 6 символов',
      login_failed: 'Ошибка входа. Проверьте свои учетные данные.',
      registration_successful: 'Регистрация успешна',
      
      // Errors
      error_occurred: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
      not_found: 'Не найдено',
      loading: 'Загрузка...',
      no_data: 'Данные не найдены',
      
      // Home page
      hero_title: 'Новости ATP/WTA',
      hero_subtitle: 'Ваш источник последних новостей, рейтингов и аналитики в мире тенниса',
      atp_top_10: 'Топ-10 ATP',
      wta_top_10: 'Топ-10 WTA',
      
      // Modal
      loading_tournaments: 'Загрузка турниров...',
      loading_news: 'Загрузка новостей...',
      loading_players: 'Загрузка игроков...',
      
      // Actions
      search: 'Поиск',
      filter: 'Фильтр',
      clear: 'Очистить',
      save: 'Сохранить',
      delete: 'Удалить',
      update: 'Обновить',
      view_details: 'Подробнее',
      back: 'Назад',
      next: 'Далее',
      previous: 'Назад',
      
      // Status
      success: 'Успешно',
      error: 'Ошибка',
      warning: 'Предупреждение',
      info: 'Информация',
      
      // Time
      today: 'Сегодня',
      yesterday: 'Вчера',
      this_week: 'На этой неделе',
      this_month: 'В этом месяце',
      last_month: 'В прошлом месяце',
      all_time: 'За все время',
      
      // Navigation
      dashboard: 'Панель управления',
      main_menu: 'Главное меню',
      user_menu: 'Меню пользователя',
      
      // Languages
      language_en: 'English',
      language_ru: 'Русский',
      language_kz: 'Қазақша',
      
      // Contact info
      phone: 'Телефон',
      address: 'Адрес',
      email: 'Email',
      website: 'Веб-сайт',
      
      // Social
      facebook: 'Facebook',
      twitter: 'Twitter',
      instagram: 'Instagram',
      youtube: 'YouTube',
      
      // FAQ
      faq_rankings: 'Как рассчитываются рейтинги?',
      faq_rankings_answer: 'Рейтинги основаны на очках, заработанных на турнирах за последние 52 недели.',
      faq_tickets: 'Где можно купить билеты на турниры?',
      faq_tickets_answer: 'Билеты доступны на официальных сайтах турниров и у авторизованных продавцов билетов.',
      faq_report: 'Как сообщить о неточной информации?',
      faq_report_answer: 'Пожалуйста, используйте контактную форму выше, чтобы сообщить о неточностях на нашем сайте.',
      
      // Новые добавленные переводы
      login_to_portal: 'Войти в Теннисный Портал',
      welcome_register: 'Присоединяйтесь к нашему теннисному сообществу, чтобы получать персонализированные новости и обновления',
      username_helper: 'Выберите уникальное имя пользователя',
      password_helper: 'Минимум 6 символов',
      no_biography: 'Биография недоступна.',
      contact_description: 'Есть вопросы о теннисе, рейтингах или турнирах? Свяжитесь с нами в любое время.',
      map_placeholder: 'Здесь будет встроена карта Google',
      message_sent: 'Ваше сообщение было успешно отправлено!',
      sending: 'Отправка...',
      you: 'Вы',
      load_more: 'Загрузить еще',
      profile_updated: 'Профиль успешно обновлен!',
      error_updating_profile: 'Ошибка при обновлении профиля. Пожалуйста, попробуйте еще раз.',
      notifications_description: 'Получать email обновления о теннисных новостях',
      dark_mode_description: 'Переключиться на темную тему',
      actions: 'Действия',
      
      // Новые переводы из вашего сообщения
      not_available: 'Не указано',
      recent_form: 'Текущая форма',
      
      // Навигация
      rankings: 'Рейтинги',
      tennis_news: 'Теннисные новости',
      search_tennis_news: 'Поиск теннисных новостей...',
      world_rankings: "Мировой рейтинг",
      current_rankings_desc: "Текущий рейтинг ATP и WTA",
      rank: "Ранг",
      points: "Очки",
      change: "Изменение",
      tournaments: "Турниры",
      player: "Игрок",
      country: "Страна"

    }
  },
  kz: {
    translation: {
      search_tennis_news_players: "Теннис жаңалықтарын іздеу...",
      username_invalid_chars: "Пайдаланушы аты тек әріптерден, сандардан және астыңғы сызықтардан тұруы мүмкін",
      password_weak: "Құпия сөз тым әлсіз. Өтінеміз, мықтырақ құпия сөзді пайдаланыңыз",
      registration_failed_check_fields: "Тіркелу сәтсіз аяқталды. Жоғарыдағы өрістерді тексеріңіз",
      confirm_password_required: "Құпия сөзді растау міндетті",
      // General
      home: 'Басты',
      news: 'Жаңалықтар',
      players: 'Ойыншылар',
      tournaments: 'Турнирлер',
      contacts: 'Байланыс',
      ai: 'Жасанды Интеллект',
      login: 'Кіру',
      register: 'Тіркелу',
      logout: 'Шығу',
      profile: 'Профиль',
      settings: 'Баптаулар',
      favorites: 'Таңдаулылар',
      activity: 'Белсенділік',
      
      // Players
      atp: 'ATP',
      wta: 'WTA',
      rank: 'Рейтинг',
      points: 'Ұпайлар',
      country: 'Ел',
      coach: 'Жаттықтырушы',
      wins: 'Жеңістер',
      losses: 'Жеңілістер',
      tournaments_played: 'Ойналған турнирлер',
      biography: 'Өмірбаяны',
      recent_tournaments: 'Соңғы турнирлер',
      statistics: 'Статистика',
      win_rate: 'Жеңіс пайызы',
      gender: 'Жыныс',
      age: 'Жасы',
      
      // Player Details
      loading_player_details: 'Ойыншы мәліметтері жүктелуде...',
      player_not_found: 'Ойыншы табылмады',
      overview: 'Шолу',
      achievements: 'Жетістіктер',
      strengths_weaknesses: 'Талдау',
      quick_stats: 'Жылдам статистика',
      player_info: 'Ойыншы туралы ақпарат',
      player_overview: 'Ойыншыға шолу',
      detailed_statistics: 'Толық статистика',
      career_achievements: 'Мансаптық жетістіктер',
      player_analysis: 'Ойыншы талдауы',
      total_matches: 'Барлық ойындар',
      career_prize_money: 'Мансаптық жүлделер',
      playing_style: 'Ойын стилі',
      turned_pro: 'Кәсіби болды',
      favorite_tournament: 'Сүйікті турнир',
      career_highlights: 'Мансаптың негізгі сәттері',
      match_statistics: 'Ойын статистикасы',
      surface_preference: 'Жамылғы таңдауы',
      no_surface_data: 'Жамылғы деректері жоқ',
      serve_statistics: 'Подача статистикасы',
      total_aces: 'Барлық эйстер',
      double_faults: 'Қос қателер',
      first_serve_percentage: 'Бірінші подача пайызы',
      tournament_statistics: 'Турнир статистикасы',
      average_points_per_tournament: 'Орташа ұпай/турнир',
      break_points_saved: 'Құтқарылған брейк-пойнттер',
      physical_characteristics: 'Физикалық сипаттамалар',
      height: 'Бойы',
      weight: 'Салмағы',
      years_pro: 'Кәсіпқой жылдары',
      title_wins: 'Турнир жеңімпаздықтары',
      records: 'Рекордтар',
      best_ranking: 'Ең жақсы рейтинг',
      weeks_at_no1: 'Бірінші орындағы апталар',
      strengths: 'Күшті жақтары',
      weaknesses: 'Әлсіз жақтары',
      no_strengths_data: 'Күшті жақтары туралы деректер жоқ',
      no_weaknesses_data: 'Әлсіз жақтары туралы деректер жоқ',
      playing_style_analysis: 'Ойын стилі талдауы',
      serve_power: 'Подача күші',
      consistency: 'Тұрақтылық',
      no_tournament_data: 'Турнир деректері жоқ',
      
      // Tournaments
      upcoming: 'Алдағы',
      current: 'Ағымдағы',
      past: 'Өткен',
      location: 'Орын',
      surface: 'Жамылғы',
      dates: 'Күндері',
      prize_money: 'Жеңімпаздық сыйлық',
      category: 'Санат',
      winner: 'Жеңімпаз',
      hard: 'Хард',
      clay: 'Топырақ',
      grass: 'Шөп',
      search_players: 'Ойыншыларды іздеу...',
      search_atp_players: 'ATP ойыншыларын іздеу...',
      search_wta_players: 'WTA ойыншыларын іздеу...',
      
      // AI Chat
      send: 'Жіберу',
      type_message: 'Хабарламаны енгізіңіз...',
      welcome_ai: 'Tennis AI Көмекшісіне қош келдіңіз!',
      start_question: 'Теннис туралы сұрақ қойып бастаңыз.',
      ai_note: 'Ескертпе: Бұл AI тек тенниске қатысты сұрақтарға жауап беруге үйретілген.',
      
      // News
      featured_news: 'Таңдаулы жаңалықтар',
      all_news: 'Барлық жаңалықтар',
      author: 'Автор',
      published: 'Жарияланды',
      views: 'Көрулер',
      read_more: 'Толығырақ оқу',
      close: 'Жабу',
      
      // Contacts
      contact_us: 'Бізге хабарласыңыз',
      get_in_touch: 'Байланысқа шығыңыз',
      send_message: 'Хабарлама жіберу',
      your_name: 'Атыңыз',
      email_address: 'Электрондық пошта мекенжайы',
      subject: 'Тақырып',
      message: 'Хабарлама',
      faq: 'Жиі қойылатын сұрақтар',
      our_location: 'Біздің орналасқан жеріміз',
      follow_us: 'Бізге жазылыңыз',
      
      // Register/Login
      create_account: 'Тіркелгі жасау',
      username: 'Пайдаланушы аты',
      first_name: 'Аты',
      last_name: 'Тегі',
      password: 'Құпия сөз',
      confirm_password: 'Құпия сөзді растау',
      preferred_language: 'Қалаған тіл',
      terms_conditions: 'Тіркелу арқылы сіз біздің Қызмет көрсету шарттары мен Құпиялылық саясатымен келісесіз.',
      have_account: 'Аккаунтыңыз бар ма?',
      dont_have_account: 'Аккаунтыңыз жоқ па?',
      register_here: 'Мұнда тіркеліңіз',
      sign_in: 'Кіру',
      logging_in: 'Жүйеге кіру...',
      creating_account: 'Тіркелгі жасалуда...',
      
      // Profile
      personal_information: 'Жеке ақпарат',
      preferences: 'Баптаулар',
      email_notifications: 'Email хабарландырулар',
      dark_mode: 'Қараңғы режим',
      account_statistics: 'Тіркелгі статистикасы',
      favorite_players: 'Таңдаулы ойыншылар',
      ai_conversations: 'AI сөйлесулері',
      recent_activity: 'Соңғы белсенділік',
      manage_favorites: 'Таңдаулыларды басқару',
      no_favorites: 'Әлі таңдаулы ойыншылар жоқ.',
      no_activity: 'Соңғы белсенділік жоқ.',
      member_since: 'Мүше болған кезден бастап',
      edit_profile: 'Профильді өңдеу',
      save_changes: 'Өзгерістерді сақтау',
      cancel: 'Болдырмау',
      
      // Auth messages
      passwords_mismatch: 'Құпия сөздер сәйкес келмейді',
      password_length: 'Құпия сөз кемінде 6 таңбадан тұруы керек',
      login_failed: 'Кіру сәтсіз аяқталды. Деректеріңізді тексеріңіз.',
      registration_successful: 'Тіркелу сәтті аяқталды',
      
      // Errors
      error_occurred: 'Қате орын алды. Қайталап көріңіз.',
      not_found: 'Табылмады',
      loading: 'Жүктелуде...',
      no_data: 'Деректер табылмады',
      
      // Home page
      hero_title: 'ATP/WTA Tennis жаңалықтары',
      hero_subtitle: 'Теннис әлеміндегі соңғы жаңалықтар, рейтингтер және талдаулар туралы сіздің көзіңіз',
      atp_top_10: 'ATP Топ-10',
      wta_top_10: 'WTA Топ-10',
      
      // Modal
      loading_tournaments: 'Турнирлер жүктелуде...',
      loading_news: 'Жаңалықтар жүктелуде...',
      loading_players: 'Ойыншылар жүктелуде...',
      
      // Actions
      search: 'Іздеу',
      filter: 'Сүзгі',
      clear: 'Тазарту',
      save: 'Сақтау',
      delete: 'Жою',
      update: 'Жаңарту',
      view_details: 'Толығырақ',
      back: 'Артқа',
      next: 'Келесі',
      previous: 'Алдыңғы',
      
      // Status
      success: 'Сәтті',
      error: 'Қате',
      warning: 'Ескерту',
      info: 'Ақпарат',
      
      // Time
      today: 'Бүгін',
      yesterday: 'Кеше',
      this_week: 'Осы аптада',
      this_month: 'Осы айда',
      last_month: 'Өткен айда',
      all_time: 'Барлық уақытта',
      
      // Navigation
      dashboard: 'Басқару тақтасы',
      main_menu: 'Негізгі мәзір',
      user_menu: 'Пайдаланушы мәзірі',
      
      // Languages
      language_en: 'English',
      language_ru: 'Русский',
      language_kz: 'Қазақша',
      
      // Contact info
      phone: 'Телефон',
      address: 'Мекенжай',
      email: 'Email',
      website: 'Веб-сайт',
      
      // Social
      facebook: 'Facebook',
      twitter: 'Twitter',
      instagram: 'Instagram',
      youtube: 'YouTube',
      
      // FAQ
      faq_rankings: 'Рейтингтер қалай есептеледі?',
      faq_rankings_answer: 'Рейтингтер соңғы 52 аптада турнирлерде жиналған ұпайларға негізделген.',
      faq_tickets: 'Турнирге билеттерді қайдан сатып алуға болады?',
      faq_tickets_answer: 'Билеттер турнирлердің ресми веб-сайттарында және авторизацияланған билет сатушылардан қолжетімді.',
      faq_report: 'Дәл емес ақпарат туралы қалай хабарлауға болады?',
      faq_report_answer: 'Біздің сайттағы кез келген дәлсіздіктер туралы хабарлау үшін жоғарыдағы байланыс формасын пайдаланыңыз.',
      
      // Новые добавленные переводы
      login_to_portal: 'Tennis Portal-ге кіру',
      welcome_register: 'Жекелендірілген жаңалықтар мен жаңартуларды алу үшін теннис қауымдастығымызға қосылыңыз',
      username_helper: 'Бірегей пайдаланушы атын таңдаңыз',
      password_helper: 'Кемінде 6 таңба',
      no_biography: 'Өмірбаян қолжетімді емес.',
      contact_description: 'Теннис, рейтингтер немесе турнирлер туралы сұрақтарыңыз бар ма? Бізбен кез келген уақытта хабарласыңыз.',
      map_placeholder: 'Google Maps картасы осында орналасады',
      message_sent: 'Сіздің хабарламаңыз сәтті жіберілді!',
      sending: 'Жіберілуде...',
      you: 'Сіз',
      load_more: 'Көбірек жүктеу',
      profile_updated: 'Профиль сәтті жаңартылды!',
      error_updating_profile: 'Профильді жаңарту кезінде қате пайда болды. Қайталап көріңіз.',
      notifications_description: 'Теннис жаңалықтары туралы email хабарландыруларды алыңыз',
      dark_mode_description: 'Қараңғы темаға ауысу',
      actions: 'Әрекеттер',
      
      // Новые переводы из вашего сообщения
      not_available: 'Көрсетілмеген',
      recent_form: 'Ағымдағы пішін',
      
      // Навигация
      rankings: 'Рейтингтер',
      tennis_news: 'Теннис жаңалықтары',
      search_tennis_news: 'Теннис жаңалықтарын іздеу...',
      world_rankings: "Әлемдік рейтинг",
      current_rankings_desc: "ATP және WTA ағымдағы рейтингі",
      rank: "Ранг",
      points: "Ұпайлар",
      change: "Өзгеріс",
      tournaments: "Турнирлер",
      player: "Ойыншы",
      country: "Ел"

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;