import { Language, AQICategory } from '../types';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', label: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

export interface AdvisoryCardTranslation {
  title: string;
  safeAdvice: string;
  moderateAdvice: string;
  cautionAdvice: string;
  safeBadge: string;
  moderateBadge: string;
  cautionBadge: string;
}

export interface TranslationStrings {
  appTitle: string;
  appSubtitle: string;
  searchPlaceholder: string;
  searching: string;
  locating: string;
  useGps: string;
  popularStations: string;
  searchResults: string;
  dominantPollutant: string;
  primary: string;
  liveReading: string;
  baselineReading: string;
  scaleGuide: string;
  scaleInfo: string;
  epaScaleTitle: string;
  weatherSummary: string;
  temperature: string;
  feelsLike: string;
  humidity: string;
  windSpeed: string;
  windDirection: string;
  uvIndex: string;
  pressure: string;
  dewPoint: string;
  sunriseSunset: string;
  sunrise: string;
  sunset: string;
  keyPollutants: string;
  pollutantSubtitle: string;
  whoGuideline: string;
  ofWhoLimit: string;
  hourlyTrends: string;
  hourlyTab: string;
  dailyTab: string;
  hourlySubtitle: string;
  weeklyForecast: string;
  weeklySubtitle: string;
  today: string;
  healthAdvisories: string;
  healthSubtitle: string;
  quickStations: string;
  govDisclaimer: string;
  govNoticeText: string;
  viewGovSources: string;
  privacyPolicy: string;
  playConsoleHub: string;
  rainForecast: {
    title: string;
    subtitle: string;
    rainingNow: string;
    noRain: string;
    rainChance: string;
    expectedAt: string;
    hoursAway: string;
    totalExpectedToday: string;
    notificationAlertTitle: string;
    enableAlerts: string;
    alertsEnabled: string;
    alertsBlocked: string;
    testAlertBtn: string;
    dismiss: string;
    simulatedAlert: string;
    now: string;
    todayMaxChance: string;
  };
  close: string;
  copy: string;
  copied: string;
  languageSelect: string;
  liveDataBadge: string;
  offlineDataBadge: string;
  updatedAt: string;
  categories: Record<AQICategory, string>;
  categoryDescriptions: Record<AQICategory, string>;
  uvRisk: {
    low: string;
    moderate: string;
    high: string;
    veryHigh: string;
    extreme: string;
  };
  advisories: {
    exercise: AdvisoryCardTranslation;
    ventilation: AdvisoryCardTranslation;
    mask: AdvisoryCardTranslation;
    purifier: AdvisoryCardTranslation;
    sensitive: AdvisoryCardTranslation;
    children: AdvisoryCardTranslation;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  en: {
    appTitle: 'AQI-App',
    appSubtitle: 'Air Quality & Live Weather',
    searchPlaceholder: 'Search city (e.g. Delhi, Hyderabad, Madrid, London)...',
    searching: 'Searching...',
    locating: 'Locating...',
    useGps: 'Current Location',
    popularStations: 'Popular Stations',
    searchResults: 'Search Results',
    dominantPollutant: 'Dominant Pollutant',
    primary: 'Primary',
    liveReading: 'Live Station Sensor',
    baselineReading: 'Standard Baseline Model',
    scaleGuide: 'AQI Scale Guide',
    scaleInfo: 'Scale Breakdown & Health Bands',
    epaScaleTitle: 'Air Quality Index (US EPA)',
    weatherSummary: 'Current Atmospheric Conditions',
    temperature: 'Temperature',
    feelsLike: 'Feels Like',
    humidity: 'Humidity',
    windSpeed: 'Wind Speed',
    windDirection: 'Wind Direction',
    uvIndex: 'UV Index',
    pressure: 'Air Pressure',
    dewPoint: 'Dew Point',
    sunriseSunset: 'Sunrise & Sunset',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    keyPollutants: 'Atmospheric Pollutant Breakdown',
    pollutantSubtitle: 'Concentrations benchmarked against WHO Air Quality Guidelines',
    whoGuideline: 'WHO Standard',
    ofWhoLimit: 'of WHO limit',
    hourlyTrends: '24-Hour Hourly Projection',
    hourlyTab: '24-Hour Trends',
    dailyTab: '7-Day Forecast',
    hourlySubtitle: 'Anticipated air quality index and ambient temperature trends',
    weeklyForecast: '7-Day Extended Forecast',
    weeklySubtitle: 'Projected air quality trends and expected weather conditions',
    today: 'Today',
    healthAdvisories: 'Health & Activity Advisories',
    healthSubtitle: 'Actionable guidance based on current particulate exposure risks',
    quickStations: 'Quick Stations',
    govDisclaimer: 'Gov Disclaimer',
    govNoticeText: 'Non-Government Entity Notice: AQI-App is an independent software tool and does not represent any government agency or the US EPA. Atmospheric indices are calculated from public technical documentation.',
    viewGovSources: 'View Official Sources (.gov) & Disclaimer',
    privacyPolicy: 'Privacy Policy',
    playConsoleHub: 'Play Console Hub',
    rainForecast: {
      title: 'Rain Forecast & Alerts',
      subtitle: 'Real-time precipitation radar & expected shower countdown',
      rainingNow: 'Rain is falling now in this area',
      noRain: 'No rain detected in the immediate forecast',
      rainChance: 'Chance of rain',
      expectedAt: 'Rain expected at',
      hoursAway: 'hours away',
      totalExpectedToday: 'Expected rain volume today',
      notificationAlertTitle: 'Rain Alert Notification',
      enableAlerts: 'Enable Rain Alerts',
      alertsEnabled: 'Rain Alerts Active',
      alertsBlocked: 'Notifications Blocked',
      testAlertBtn: 'Test Rain Popup',
      dismiss: 'Dismiss',
      simulatedAlert: 'Upcoming Shower Alert',
      now: 'Now',
      todayMaxChance: 'Peak rain chance today',
    },
    close: 'Close',
    copy: 'Copy',
    copied: 'Copied!',
    languageSelect: 'Language',
    liveDataBadge: 'Live Data',
    offlineDataBadge: 'Cached Data',
    updatedAt: 'Updated',
    categories: {
      Good: 'Good',
      Moderate: 'Moderate',
      'Unhealthy for Sensitive Groups': 'Unhealthy for Sensitive Groups',
      Unhealthy: 'Unhealthy',
      'Very Unhealthy': 'Very Unhealthy',
      Hazardous: 'Hazardous',
    },
    categoryDescriptions: {
      Good: 'Air quality is considered satisfactory, and air pollution poses little or no risk.',
      Moderate: 'Air quality is acceptable; however, some pollutants may cause moderate health concern for a very small number of unusually sensitive people.',
      'Unhealthy for Sensitive Groups': 'Members of sensitive groups (asthma, children, elderly) may experience health effects. The general public is less likely to be affected.',
      Unhealthy: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
      'Very Unhealthy': 'Health alert: The risk of health effects is substantially increased for all individuals in the population.',
      Hazardous: 'Health warning of emergency conditions: The entire population is more likely to be seriously affected.',
    },
    uvRisk: {
      low: 'Low Risk',
      moderate: 'Moderate Risk',
      high: 'High Risk',
      veryHigh: 'Very High Risk',
      extreme: 'Extreme Risk',
    },
    advisories: {
      exercise: {
        title: 'Outdoor Exercise',
        safeAdvice: 'Air quality is ideal for outdoor jogging, running, and all aerobic workouts.',
        moderateAdvice: 'Acceptable for most; sensitive individuals should reduce strenuous outdoor exertion.',
        cautionAdvice: 'Avoid intense outdoor workouts. Opt for indoor gym routines or rest.',
        safeBadge: 'Safe',
        moderateBadge: 'Moderate',
        cautionBadge: 'Caution',
      },
      ventilation: {
        title: 'Window Ventilation',
        safeAdvice: 'Great time to open windows and let fresh clean ambient air circulate.',
        moderateAdvice: 'Brief window ventilation is fine during early morning or low-traffic hours.',
        cautionAdvice: 'Keep windows and doors tightly shut to prevent ambient particulates from entering.',
        safeBadge: 'Open Windows',
        moderateBadge: 'Allowed',
        cautionBadge: 'Keep Closed',
      },
      mask: {
        title: 'Protective Masking',
        safeAdvice: 'No respiratory protective mask needed for normal outdoor walking.',
        moderateAdvice: 'Mask optional for healthy adults; sensitive individuals may consider a light mask.',
        cautionAdvice: 'Wear a well-fitted N95 / KN95 respirator when going outdoors.',
        safeBadge: 'Not Needed',
        moderateBadge: 'Optional',
        cautionBadge: 'Essential N95',
      },
      purifier: {
        title: 'Air Purifiers (HEPA)',
        safeAdvice: 'Purifiers optional; indoor air naturally stays fresh and clean.',
        moderateAdvice: 'Recommended in bedrooms and for occupants with respiratory sensitivities.',
        cautionAdvice: 'Run True HEPA air purifiers continuously on medium to high fan speed.',
        safeBadge: 'Eco Mode',
        moderateBadge: 'Recommended',
        cautionBadge: 'Active High',
      },
      sensitive: {
        title: 'Sensitive Respiratory Groups',
        safeAdvice: 'Low risk. People with asthma or cardiovascular conditions can enjoy outdoor time.',
        moderateAdvice: 'Keep rescue inhalers accessible; monitor for mild coughing or shortness of breath.',
        cautionAdvice: 'High alert: Stay indoors in filtered air; avoid any particulate exposure.',
        safeBadge: 'Low Risk',
        moderateBadge: 'Monitor Symptoms',
        cautionBadge: 'High Alert',
      },
      children: {
        title: 'Children & Seniors',
        safeAdvice: 'Great conditions for children playground games, recess, and senior walks.',
        moderateAdvice: 'Normal activities permitted; take breaks during long periods of play.',
        cautionAdvice: 'Limit outdoor playground time; encourage indoor books and games.',
        safeBadge: 'Free Play',
        moderateBadge: 'Supervised',
        cautionBadge: 'Indoor Activity',
      },
    },
  },

  hi: {
    appTitle: 'एक्यूआई-ऐप',
    appSubtitle: 'वायु गुणवत्ता एवं लाइव मौसम',
    searchPlaceholder: 'शहर खोजें (जैसे: दिल्ली, मुंबई, हैदराबाद, लंदन)...',
    searching: 'खोज रहे हैं...',
    locating: 'स्थान प्राप्त हो रहा है...',
    useGps: 'वर्तमान स्थान',
    popularStations: 'प्रमुख स्टेशन',
    searchResults: 'खोज परिणाम',
    dominantPollutant: 'प्रमुख प्रदूषक',
    primary: 'प्राथमिक',
    liveReading: 'लाइव स्टेशन सेंसर',
    baselineReading: 'मानक बेसलाइन मॉडल',
    scaleGuide: 'एक्यूआई स्केल गाइड',
    scaleInfo: 'स्केल विवरण और स्वास्थ्य श्रेणियां',
    epaScaleTitle: 'वायु गुणवत्ता सूचकांक (US EPA)',
    weatherSummary: 'वर्तमान वायुमंडलीय स्थितियां',
    temperature: 'तापमान',
    feelsLike: 'अनुभूत तापमान',
    humidity: 'आर्द्रता',
    windSpeed: 'हवा की गति',
    windDirection: 'हवा की दिशा',
    uvIndex: 'यूवी इंडेक्स',
    pressure: 'वायुदाब',
    dewPoint: 'ओस बिंदु',
    sunriseSunset: 'सूर्योदय और सूर्यास्त',
    sunrise: 'सूर्योदय',
    sunset: 'सूर्यास्त',
    keyPollutants: 'वायुमंडलीय प्रदूषक विश्लेषण',
    pollutantSubtitle: 'विश्व स्वास्थ्य संगठन (WHO) के वायु गुणवत्ता मानकों के सापेक्ष सांद्रता',
    whoGuideline: 'WHO मानक',
    ofWhoLimit: 'WHO सीमा का',
    hourlyTrends: '24-घंटे का वायु गुणवत्ता एवं मौसम रुझान',
    hourlyTab: '24-घंटे का रुझान',
    dailyTab: '7-दिवसीय पूर्वानुमान',
    hourlySubtitle: 'प्रति घंटा वायु गुणवत्ता सूचकांक और अनुमानित तापमान रुझान',
    weeklyForecast: '7-दिवसीय विस्तारित पूर्वानुमान',
    weeklySubtitle: 'आगामी वायु गुणवत्ता रुझान और मौसम की स्थितियां',
    today: 'आज',
    healthAdvisories: 'स्वास्थ्य एवं गतिविधि सलाह',
    healthSubtitle: 'वर्तमान प्रदूषण स्तर के आधार पर आवश्यक सावधानियां',
    quickStations: 'त्वरित स्टेशन',
    govDisclaimer: 'सरकारी अस्वीकरण',
    govNoticeText: 'गैर-सरकारी संस्था सूचना: AQI-App एक स्वतंत्र ऐप है और किसी भी सरकारी एजेंसी या यूएस ईपीए का प्रतिनिधित्व नहीं करता है। आंकड़े सार्वजनिक तकनीकी स्रोतों से लिए गए हैं।',
    viewGovSources: 'आधिकारिक स्रोत (.gov) और अस्वीकरण देखें',
    privacyPolicy: 'गोपनीयता नीति',
    playConsoleHub: 'प्ले कंसोल हब',
    rainForecast: {
      title: 'बारिश का पूर्वानुमान एवं अलर्ट',
      subtitle: 'सटीक वर्षा रडार और संभावित बारिश का समय',
      rainingNow: 'इस क्षेत्र में वर्तमान में बारिश हो रही है',
      noRain: 'आगामी घंटों में बारिश की संभावना नहीं है',
      rainChance: 'बारिश की संभावना',
      expectedAt: 'बारिश का अनुमानित समय',
      hoursAway: 'घंटे बाद',
      totalExpectedToday: 'आज कुल संभावित वर्षा',
      notificationAlertTitle: 'बारिश का अलर्ट नोटिफिकेशन',
      enableAlerts: 'बारिश अलर्ट चालू करें',
      alertsEnabled: 'अलर्ट सक्रिय हैं',
      alertsBlocked: 'सूचनाएं अवरुद्ध हैं',
      testAlertBtn: 'टेस्ट अलर्ट पॉपअप',
      dismiss: 'हटाएं',
      simulatedAlert: 'आगामी बारिश की चेतावनी',
      now: 'अभी',
      todayMaxChance: 'आज सर्वाधिक वर्षा की संभावना',
    },
    close: 'बंद करें',
    copy: 'कॉपी करें',
    copied: 'कॉपी हो गया!',
    languageSelect: 'भाषा',
    liveDataBadge: 'लाइव डेटा',
    offlineDataBadge: 'सहेजा गया डेटा',
    updatedAt: 'अपडेट किया गया',
    categories: {
      Good: 'अच्छा (उत्कृष्ट)',
      Moderate: 'मध्यम (स्वीकार्य)',
      'Unhealthy for Sensitive Groups': 'संवेदनशील समूहों के लिए अस्वास्थ्यकर',
      Unhealthy: 'अस्वास्थ्यकर',
      'Very Unhealthy': 'अत्यधिक अस्वास्थ्यकर',
      Hazardous: 'खतरनाक (आपातकालीन)',
    },
    categoryDescriptions: {
      Good: 'हवा की गुणवत्ता संतोषजनक है और प्रदूषण से कोई स्वास्थ्य जोखिम नहीं है।',
      Moderate: 'हवा की गुणवत्ता सामान्य है, लेकिन अति-संवेदनशील लोगों को हल्की परेशानी हो सकती है।',
      'Unhealthy for Sensitive Groups': 'बच्चों, बुजुर्गों और सांस के मरीजों को सावधानी बरतनी चाहिए।',
      Unhealthy: 'हवा में प्रदूषण अधिक है, सभी लोगों के स्वास्थ्य पर असर पड़ सकता है।',
      'Very Unhealthy': 'गंभीर स्वास्थ्य चेतावनी: सभी लोगों को बाहर निकलने से बचना चाहिए।',
      Hazardous: 'आपातकालीन स्तर: सभी लोगों के लिए गंभीर स्वास्थ्य संकट की स्थिति है।',
    },
    uvRisk: {
      low: 'कम जोखिम',
      moderate: 'मध्यम जोखिम',
      high: 'उच्च जोखिम',
      veryHigh: 'अति उच्च जोखिम',
      extreme: 'चरम जोखिम',
    },
    advisories: {
      exercise: {
        title: 'आउटडोर व्यायाम व दौड़',
        safeAdvice: 'दौड़ने और आउटडोर व्यायाम के लिए हवा बिल्कुल सही और स्वच्छ है।',
        moderateAdvice: 'अधिकांश लोगों के लिए ठीक है; संवेदनशील लोग भारी व्यायाम कम करें।',
        cautionAdvice: 'बाहर भारी कसरत से बचें। घर या इनडोर जिम में व्यायाम करें।',
        safeBadge: 'सुरक्षित',
        moderateBadge: 'मध्यम',
        cautionBadge: 'सावधानी',
      },
      ventilation: {
        title: 'खिड़कियां व वेंटिलेशन',
        safeAdvice: 'खिड़कियां खोलकर ताजी हवा का आनंद लेने का बेहतरीन समय है।',
        moderateAdvice: 'सुबह जल्दी या कम ट्रैफिक वाले समय में खिड़की खोलना उचित है।',
        cautionAdvice: 'बाहरी धूल व प्रदूषण से बचने के लिए खिड़कियां और दरवाजे बंद रखें।',
        safeBadge: 'खिड़कियां खोलें',
        moderateBadge: 'अनुमति',
        cautionBadge: 'बंद रखें',
      },
      mask: {
        title: 'सुरक्षात्मक मास्क',
        safeAdvice: 'सामान्य बाहर टहलने के लिए किसी मास्क की आवश्यकता नहीं है।',
        moderateAdvice: 'मास्क वैकल्पिक है; एलर्जी या सांस की परेशानी वाले मास्क पहन सकते हैं।',
        cautionAdvice: 'बाहर जाते समय N95 या KN95 मास्क अनिवार्य रूप से पहनें।',
        safeBadge: 'आवश्यक नहीं',
        moderateBadge: 'वैकल्पिक',
        cautionBadge: 'N95 आवश्यक',
      },
      purifier: {
        title: 'एयर प्यूरीफायर (HEPA)',
        safeAdvice: 'प्यूरीफायर वैकल्पिक है; इनडोर हवा स्वाभाविक रूप से ताजी है।',
        moderateAdvice: 'बेडरूम और संवेदनशील मरीजों के लिए प्यूरीफायर चलाना लाभदायक है।',
        cautionAdvice: 'कमरे में HEPA एयर प्यूरीफायर को मध्यम या उच्च गति पर चालू रखें।',
        safeBadge: 'इको मोड',
        moderateBadge: 'अनुशंसित',
        cautionBadge: 'उच्च गति पर चलाएं',
      },
      sensitive: {
        title: 'संवेदनशील समूह (दमा/वृद्ध)',
        safeAdvice: 'कम जोखिम: दमा या हृदय रोगी सुरक्षित रूप से बाहर घूम सकते हैं।',
        moderateAdvice: 'इन्हेलर साथ रखें; खांसी या सांस फूलने पर तुरंत ध्यान दें।',
        cautionAdvice: 'हाई अलर्ट: घर के अंदर सुरक्षित हवा में रहें; बाहर न जाएं।',
        safeBadge: 'कम जोखिम',
        moderateBadge: 'लक्षणों पर ध्यान दें',
        cautionBadge: 'हाई अलर्ट',
      },
      children: {
        title: 'बच्चे एवं वरिष्ठ नागरिक',
        safeAdvice: 'बच्चों के खेलकूद और बुजुर्गों के टहलने के लिए बहुत अनुकूल मौसम है।',
        moderateAdvice: 'सामान्य खेलकूद की अनुमति है; बीच-बीच में आराम जरूर करें।',
        cautionAdvice: 'बाहर खेलकूद का समय सीमित करें और इनडोर गतिविधियों को बढ़ावा दें।',
        safeBadge: 'स्वतंत्र खेल',
        moderateBadge: 'देखरेख में खेल',
        cautionBadge: 'इनडोर गतिविधियां',
      },
    },
  },

  te: {
    appTitle: 'AQI యాప్',
    appSubtitle: 'గాలి నాణ్యత & ప్రత్యక్ష వాతావరణం',
    searchPlaceholder: 'నగరాన్ని వెతకండి (ఉదా: హైదరాబాద్, విజయవాడ, వైజాగ్)...',
    searching: 'వెతుకుతోంది...',
    locating: 'స్థానాన్ని గుర్తిస్తోంది...',
    useGps: 'ప్రస్తుత ప్రాంతం',
    popularStations: 'ప్రముఖ స్టేషన్లు',
    searchResults: 'శోధన ఫలితాలు',
    dominantPollutant: 'ప్రధాన కాలుష్య కారకం',
    primary: 'ప్రధానం',
    liveReading: 'లైవ్ సెన్సార్ రీడింగ్',
    baselineReading: 'ప్రామాణిక మోడల్',
    scaleGuide: 'AQI స్కేల్ గైడ్',
    scaleInfo: 'స్కేల్ వివరాలు & ఆరోగ్య వర్గాలు',
    epaScaleTitle: 'వాయు నాణ్యత సూచిక (US EPA)',
    weatherSummary: 'ప్రస్తుత వాతావరణ పరిస్థితులు',
    temperature: 'ఉష్ణోగ్రత',
    feelsLike: 'అనిపించే ఉష్ణోగ్రత',
    humidity: 'తేమ శాతం',
    windSpeed: 'గాలి వేగం',
    windDirection: 'గాలి దిశ',
    uvIndex: 'UV సూచిక',
    pressure: 'వాయుపీడనం',
    dewPoint: 'మంచు బిందువు',
    sunriseSunset: 'సూర్యోదయం & సూర్యాస్తమయం',
    sunrise: 'సూర్యోదయం',
    sunset: 'సూర్యాస్తమయం',
    keyPollutants: 'ముఖ్య కాలుష్య కారకాల విశ్లేషణ',
    pollutantSubtitle: 'ప్రపంచ ఆరోగ్య సంస్థ (WHO) ప్రమాణాలతో ప్రత్యక్ష సాంద్రత పోలిక',
    whoGuideline: 'WHO ప్రమాణం',
    ofWhoLimit: 'WHO పరిమితిలో',
    hourlyTrends: '24 గంటల వాయు నాణ్యత & వాతావరణం',
    hourlyTab: '24 గంటల పోకడలు',
    dailyTab: '7 రోజుల అంచనా',
    hourlySubtitle: 'గంటల వారీ గాలి నాణ్యత సూచిక మరియు ఉష్ణోగ్రత వివరాలు',
    weeklyForecast: '7 రోజుల ముందస్తు అంచనా',
    weeklySubtitle: 'రాబోయే గాలి నాణ్యత మరియు వాతావరణ పరిస్థితులు',
    today: 'ఈ రోజు',
    healthAdvisories: 'ఆరోగ్య & కార్యకలాపాల సూచనలు',
    healthSubtitle: 'ప్రస్తుత కాలుష్య తీవ్రతకు అనుగుణంగా తీసుకోవాల్సిన జాగ్రత్తలు',
    quickStations: 'త్వరిత స్టేషన్లు',
    govDisclaimer: 'ప్రభుత్వ నిరాకరణ',
    govNoticeText: 'ప్రభుత్వేతర సంస్థ ప్రకటన: AQI-App అనేది స్వతంత్ర అప్లికేషన్ మరియు ఏ ప్రభుత్వ సంస్థకు లేదా US EPAకి ప్రాతినిధ్యం వహించదు. పబ్లిక్ ఓపెన్ డేటా ఆధారంగా లెక్కించబడింది.',
    viewGovSources: 'అధికారిక మూలాలు (.gov) & నిరాకరణ చూడండి',
    privacyPolicy: 'గోప్యతా విధానం',
    playConsoleHub: 'ప్లే కన్సోల్ హబ్',
    rainForecast: {
      title: 'వర్షం అంచనా & అలర్ట్స్',
      subtitle: 'లైవ్ వర్షపాతం రాడార్ మరియు వర్షం పడే సమయ వివరాలు',
      rainingNow: 'ప్రస్తుతం ఈ ప్రాంతంలో వర్షం పడుతోంది',
      noRain: 'సమీప సమయంలో వర్షం పడే సూచనలు లేవు',
      rainChance: 'వర్షం పడే అవకాశం',
      expectedAt: 'వర్షం పడే సమయం',
      hoursAway: 'గంటల్లో',
      totalExpectedToday: 'ఈ రోజు మొత్తం వర్షపాతం',
      notificationAlertTitle: 'వర్షం అలర్ట్ నోటిఫికేషన్',
      enableAlerts: 'వర్షం అలర్ట్స్ ఆన్ చేయండి',
      alertsEnabled: 'అలర్ట్స్ యాక్టివ్‌గా ఉన్నాయి',
      alertsBlocked: 'నోటిఫికేషన్లు బ్లాక్ చేయబడ్డాయి',
      testAlertBtn: 'టెస్ట్ పాప్-అప్ అలర్ట్',
      dismiss: 'రద్దు చేయి',
      simulatedAlert: 'రాబోయే వర్షం హెచ్చరిక',
      now: 'ఇప్పుడే',
      todayMaxChance: 'ఈ రోజు గరిష్ట వర్షపు అవకాశం',
    },
    close: 'మూసివేయి',
    copy: 'కాపీ చేయండి',
    copied: 'కాపీ చేయబడింది!',
    languageSelect: 'భాష',
    liveDataBadge: 'లైవ్ సమాచారం',
    offlineDataBadge: 'నిల్వ సమాచారం',
    updatedAt: 'నవీకరించబడింది',
    categories: {
      Good: 'మంచిది (ఆరోగ్యకరం)',
      Moderate: 'మితమైనది (సాధారణం)',
      'Unhealthy for Sensitive Groups': 'సున్నిత సమూహాలకు అనారోగ్యకరం',
      Unhealthy: 'అనారోగ్యకరం',
      'Very Unhealthy': 'చాలా అనారోగ్యకరం',
      Hazardous: 'ప్రమాదకరం (తీవ్రమైనది)',
    },
    categoryDescriptions: {
      Good: 'గాలి నాణ్యత సంతృప్తికరంగా ఉంది మరియు ఎటువంటి ఆరోగ్య ప్రమాదం లేదు.',
      Moderate: 'గాలి నాణ్యత ఆమోదయోగ్యమైనది, కానీ సున్నిత వ్యక్తులకు కొద్దిపాటి అసౌకర్యం కలగవచ్చు.',
      'Unhealthy for Sensitive Groups': 'పిల్లలు, వృద్ధులు మరియు శ్వాసకోశ సమస్యలు ఉన్నవారు జాగ్రత్త వహించాలి.',
      Unhealthy: 'గాలిలో కాలుష్యం ఎక్కువగా ఉంది, ప్రజలందరి ఆరోగ్యంపై ప్రభావం పడవచ్చు.',
      'Very Unhealthy': 'తీవ్రమైన హెచ్చరిక: ప్రజలందరూ బయటకు వెళ్లడం తగ్గించుకోవాలి.',
      Hazardous: 'అత్యవసర పరిస్థితి: కాలుష్యం చాలా ప్రమాదకర స్థాయిలో ఉంది.',
    },
    uvRisk: {
      low: 'తక్కువ ప్రమాదం',
      moderate: 'మితమైన ప్రమాదం',
      high: 'అధిక ప్రమాదం',
      veryHigh: 'చాలా ఎక్కువ ప్రమాదం',
      extreme: 'తీవ్రమైన ప్రమాదం',
    },
    advisories: {
      exercise: {
        title: 'బయట వ్యాయామం & రన్నింగ్',
        safeAdvice: 'బయట రన్నింగ్ మరియు శారీరక వ్యాయామాలకు గాలి నాణ్యత చాలా అనుకూలంగా ఉంది.',
        moderateAdvice: 'చాలామందికి సరిపోతుంది; సున్నిత శ్వాసకోశ వ్యక్తులు వ్యాయామాన్ని తగ్గించాలి.',
        cautionAdvice: 'బయట తీవ్రమైన వ్యాయామం నివారించండి. ఇంట్లోనే ఉండటం మంచిది.',
        safeBadge: 'సురక్షితం',
        moderateBadge: 'మితమైనది',
        cautionBadge: 'జాగ్రత్త',
      },
      ventilation: {
        title: 'కిటికీలు & గాలి ప్రసరణ',
        safeAdvice: 'కిటికీలు తెరిచి స్వచ్ఛమైన గాలిని ఇంట్లోకి రానివ్వడానికి అనువైన సమయం.',
        moderateAdvice: 'ఉదయాన్నే లేదా ట్రాఫిక్ తక్కువగా ఉన్నప్పుడు కిటికీలు తెరవడం మంచిది.',
        cautionAdvice: 'బయటి దుమ్ము, కాలుష్యం రాకుండా కిటికీలు మరియు తలుపులు మూసి ఉంచండి.',
        safeBadge: 'కిటికీలు తెరవండి',
        moderateBadge: 'అనుమతి ఉంది',
        cautionBadge: 'మూసి ఉంచండి',
      },
      mask: {
        title: 'రక్షణ మాస్క్',
        safeAdvice: 'బయటకు వెళ్లేందుకు మాస్క్ ధరించాల్సిన అవసరం లేదు.',
        moderateAdvice: 'మాస్క్ ఐచ్ఛికం; అలర్జీ లేదా శ్వాస సమస్యలు ఉన్నవారు మాస్క్ వాడవచ్చు.',
        cautionAdvice: 'బయటకు వెళ్లే సమయంలో తప్పనిసరిగా N95 లేదా KN95 మాస్క్ ధరించండి.',
        safeBadge: 'అవసరం లేదు',
        moderateBadge: 'ఐచ్ఛికం',
        cautionBadge: 'N95 తప్పనిసరి',
      },
      purifier: {
        title: 'ఎయిర్ ప్యూరిఫైయర్లు (HEPA)',
        safeAdvice: 'ప్యూరిఫైయర్ ఐచ్ఛికం; ఇంటి లోపల గాలి సహజంగానే స్వచ్ఛంగా ఉంటుంది.',
        moderateAdvice: 'పడకగదిలో మరియు సున్నిత వ్యక్తుల కోసం ప్యూరిఫైయర్ వాడటం మంచిది.',
        cautionAdvice: 'గదిలో HEPA ఎయిర్ ప్యూరిఫైయర్లను మీడియం లేదా హై స్పీడ్‌లో నిరంతరం నడపండి.',
        safeBadge: 'ఎకో మోడ్',
        moderateBadge: 'సిఫార్సు చేయబడింది',
        cautionBadge: 'హై స్పీడ్ మోడ్',
      },
      sensitive: {
        title: 'సున్నిత వ్యక్తులు (ఆస్తమా/వృద్ధులు)',
        safeAdvice: 'తక్కువ ప్రమాదం: ఆస్తమా లేదా గుండె జబ్బులు ఉన్నవారు బయట తిరగొచ్చు.',
        moderateAdvice: 'ఇన్‌హేలర్‌లను దగ్గర ఉంచుకోండి; దగ్గు లేదా ఆయాసం వస్తే జాగ్రత్తపడండి.',
        cautionAdvice: 'అధిక ప్రమాదం: ఇంటి లోపలే సురక్షితమైన గాలిలో ఉండండి; బయటకు వెళ్లవద్దు.',
        safeBadge: 'తక్కువ ప్రమాదం',
        moderateBadge: 'లక్షణాలను గమనించండి',
        cautionBadge: 'హై అలర్ట్',
      },
      children: {
        title: 'పిల్లలు మరియు వృద్ధులు',
        safeAdvice: 'పిల్లల ఆటపాటలకు మరియు పెద్దల నడకకు వాతావరణం చాలా ఆహ్లాదకరంగా ఉంది.',
        moderateAdvice: 'సాధారణ ఆటపాటలకు అనుమతి ఉంది; మధ్యలో తగినంత విశ్రాంతి తీసుకోండి.',
        cautionAdvice: 'బయట ఆడే సమయాన్ని తగ్గించండి; ఇంటి లోపల ఆటలను ప్రోత్సహించండి.',
        safeBadge: 'ఆడుకోవచ్చు',
        moderateBadge: 'పర్యవేక్షణలో',
        cautionBadge: 'ఇంటి లోపలి ఆటలు',
      },
    },
  },

  es: {
    appTitle: 'AQI-App',
    appSubtitle: 'Calidad del Aire y Clima en Vivo',
    searchPlaceholder: 'Buscar ciudad (ej. Madrid, Barcelona, Bogotá, CDMX)...',
    searching: 'Buscando...',
    locating: 'Localizando...',
    useGps: 'Ubicación actual',
    popularStations: 'Estaciones populares',
    searchResults: 'Resultados de búsqueda',
    dominantPollutant: 'Contaminante principal',
    primary: 'Principal',
    liveReading: 'Sensor de estación en vivo',
    baselineReading: 'Modelo de referencia estándar',
    scaleGuide: 'Guía de escala AQI',
    scaleInfo: 'Desglose de escala y rangos de salud',
    epaScaleTitle: 'Índice de Calidad del Aire (US EPA)',
    weatherSummary: 'Condiciones atmosféricas actuales',
    temperature: 'Temperatura',
    feelsLike: 'Sensación térmica',
    humidity: 'Humedad',
    windSpeed: 'Velocidad del viento',
    windDirection: 'Dirección del viento',
    uvIndex: 'Índice UV',
    pressure: 'Presión atmosférica',
    dewPoint: 'Punto de rocío',
    sunriseSunset: 'Amanecer y atardecer',
    sunrise: 'Amanecer',
    sunset: 'Atardecer',
    keyPollutants: 'Desglose de contaminantes atmosféricos',
    pollutantSubtitle: 'Concentraciones comparadas con los límites de la Organización Mundial de la Salud (OMS)',
    whoGuideline: 'Estándar OMS',
    ofWhoLimit: 'del límite OMS',
    hourlyTrends: 'Proyección horaria de 24 horas',
    hourlyTab: 'Tendencias 24 horas',
    dailyTab: 'Pronóstico de 7 días',
    hourlySubtitle: 'Índice horario previsto de calidad del aire y proyección de temperatura',
    weeklyForecast: 'Pronóstico extendido de 7 días',
    weeklySubtitle: 'Tendencias proyectadas de calidad del aire y condiciones meteorológicas',
    today: 'Hoy',
    healthAdvisories: 'Avisos de salud y actividad',
    healthSubtitle: 'Recomendaciones prácticas según los niveles actuales de exposición',
    quickStations: 'Estaciones rápidas',
    govDisclaimer: 'Descargo oficial',
    govNoticeText: 'Aviso de entidad no gubernamental: AQI-App es una herramienta de software independiente y no representa a ninguna agencia gubernamental ni a la US EPA. Los índices se calculan a partir de datos técnicos públicos.',
    viewGovSources: 'Ver fuentes oficiales (.gov) y descargo',
    privacyPolicy: 'Política de privacidad',
    playConsoleHub: 'Panel de Play Console',
    rainForecast: {
      title: 'Pronóstico de lluvia y alertas',
      subtitle: 'Radar de precipitación en tiempo real y cuenta regresiva de lluvia',
      rainingNow: 'Actualmente está lloviendo en esta zona',
      noRain: 'No se detecta lluvia en las próximas horas',
      rainChance: 'Probabilidad de lluvia',
      expectedAt: 'Lluvia prevista a las',
      hoursAway: 'horas restantes',
      totalExpectedToday: 'Volumen de lluvia previsto hoy',
      notificationAlertTitle: 'Notificación de alerta de lluvia',
      enableAlerts: 'Activar alertas de lluvia',
      alertsEnabled: 'Alertas de lluvia activadas',
      alertsBlocked: 'Notificaciones bloqueadas',
      testAlertBtn: 'Probar alerta emergente',
      dismiss: 'Cerrar',
      simulatedAlert: 'Aviso de lluvia inminente',
      now: 'Ahora',
      todayMaxChance: 'Máxima probabilidad de lluvia hoy',
    },
    close: 'Cerrar',
    copy: 'Copiar',
    copied: '¡Copiado!',
    languageSelect: 'Idioma',
    liveDataBadge: 'Datos en vivo',
    offlineDataBadge: 'Datos guardados',
    updatedAt: 'Actualizado',
    categories: {
      Good: 'Buena',
      Moderate: 'Moderada',
      'Unhealthy for Sensitive Groups': 'Insalubre para grupos sensibles',
      Unhealthy: 'Insalubre',
      'Very Unhealthy': 'Muy insalubre',
      Hazardous: 'Peligrosa',
    },
    categoryDescriptions: {
      Good: 'La calidad del aire es satisfactoria y la contaminación atmosférica presenta poco o ningún riesgo.',
      Moderate: 'La calidad del aire es aceptable; sin embargo, puede haber cierta preocupación para personas inusualmente sensibles.',
      'Unhealthy for Sensitive Groups': 'Los miembros de grupos sensibles pueden experimentar efectos sobre la salud. El público general tiene menos probabilidades de verse afectado.',
      Unhealthy: 'Cualquier persona puede comenzar a experimentar efectos en la salud; los grupos sensibles pueden sufrir consecuencias más graves.',
      'Very Unhealthy': 'Alerta de salud: el riesgo para toda la población se incrementa de manera sustancial.',
      Hazardous: 'Advertencia de emergencia: es muy probable que toda la población sufra efectos graves en la salud.',
    },
    uvRisk: {
      low: 'Riesgo bajo',
      moderate: 'Riesgo moderado',
      high: 'Riesgo alto',
      veryHigh: 'Riesgo muy alto',
      extreme: 'Riesgo extremo',
    },
    advisories: {
      exercise: {
        title: 'Ejercicio al aire libre',
        safeAdvice: 'La calidad del aire es ideal para correr, trotar y realizar entrenamientos al aire libre.',
        moderateAdvice: 'Aceptable para la mayoría; personas sensibles deben reducir el esfuerzo intenso.',
        cautionAdvice: 'Evite entrenamientos intensos en exteriores. Opte por rutinas en interiores.',
        safeBadge: 'Seguro',
        moderateBadge: 'Moderado',
        cautionBadge: 'Precaución',
      },
      ventilation: {
        title: 'Ventilación en interiores',
        safeAdvice: 'Excelente momento para abrir ventanas y ventilar con aire limpio.',
        moderateAdvice: 'Ventilación breve recomendada a primera hora de la mañana o con poco tráfico.',
        cautionAdvice: 'Mantenga puertas y ventanas cerradas para evitar la entrada de partículas contaminantes.',
        safeBadge: 'Abrir ventanas',
        moderateBadge: 'Permitido',
        cautionBadge: 'Mantener cerrado',
      },
      mask: {
        title: 'Mascarilla protectora',
        safeAdvice: 'No se requiere mascarilla protectora para caminatas normales al aire libre.',
        moderateAdvice: 'Opcional para adultos sanos; recomendable para personas con problemas respiratorios.',
        cautionAdvice: 'Utilice una mascarilla con filtro N95 / KN95 al salir al exterior.',
        safeBadge: 'No necesaria',
        moderateBadge: 'Opcional',
        cautionBadge: 'N95 esencial',
      },
      purifier: {
        title: 'Purificadores de aire (HEPA)',
        safeAdvice: 'Purificadores opcionales; el aire interior se mantiene fresco naturalmente.',
        moderateAdvice: 'Recomendado en dormitorios y para ocupantes con sensibilidad respiratoria.',
        cautionAdvice: 'Haga funcionar purificadores True HEPA de forma continua a velocidad media o alta.',
        safeBadge: 'Modo Eco',
        moderateBadge: 'Recomendado',
        cautionBadge: 'Activo alto',
      },
      sensitive: {
        title: 'Grupos sensibles (asma/cardíacos)',
        safeAdvice: 'Riesgo bajo: personas con afecciones respiratorias pueden disfrutar del aire libre.',
        moderateAdvice: 'Tenga a mano inhaladores de alivio; preste atención a tos o falta de aire.',
        cautionAdvice: 'Alerta alta: permanezca en interiores con aire filtrado; evite la exposición.',
        safeBadge: 'Riesgo bajo',
        moderateBadge: 'Vigilar síntomas',
        cautionBadge: 'Alerta alta',
      },
      children: {
        title: 'Niños y adultos mayores',
        safeAdvice: 'Condiciones excelentes para juegos en parques infantiles y caminatas de adultos mayores.',
        moderateAdvice: 'Actividades normales permitidas; tome descansos durante juegos prolongados.',
        cautionAdvice: 'Limite el tiempo de juego al aire libre y fomente actividades en el interior.',
        safeBadge: 'Juego libre',
        moderateBadge: 'Supervisado',
        cautionBadge: 'Actividad interior',
      },
    },
  },
};

export function getTranslation(lang: Language): TranslationStrings {
  return translations[lang] || translations.en;
}
