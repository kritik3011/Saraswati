export const courses = [
  {
    id: 'upsc-civil-services',
    title: 'UPSC Civil Services',
    shortDescription: 'Complete preparation for the Civil Services Examination with comprehensive coverage of Prelims and Mains.',
    duration: '12-15 Months',
    slug: 'upsc-civil-services',
    overview: 'The UPSC Civil Services program is meticulously designed to provide a comprehensive and structured approach to your preparation. At Saraswati IAS, we believe in building strong fundamentals while simultaneously developing the analytical skills required for the examination. This program includes extensive classroom sessions, regular doubt-clearing, dedicated answer writing practice, and full-length mock tests to ensure you are exam-ready.',
    features: [
      'Comprehensive coverage of syllabus',
      'Updated study material aligned with the latest pattern',
      'Regular answer writing practice sessions',
      'Personalized mentorship and performance tracking',
      'Integrated Test Series (Prelims + Mains)'
    ],
    subjects: ['History & Culture', 'Geography', 'Indian Polity & Governance', 'Economy', 'Science & Technology', 'Environment', 'International Relations', 'Ethics & Aptitude'],
    detailedSyllabus: [
      {
        title: 'Preliminary Examination (Paper I) - General Studies',
        topics: [
          'Current events of national and international importance.',
          'History of India and Indian National Movement.',
          'Indian and World Geography - Physical, Social, Economic Geography of India and the World.',
          'Indian Polity and Governance - Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.',
          'Economic and Social Development - Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives, etc.',
          'General issues on Environmental ecology, Bio-diversity and Climate Change - that do not require subject specialization.',
          'General Science.'
        ]
      },
      {
        title: 'Preliminary Examination (Paper II) - CSAT',
        topics: [
          'Comprehension.',
          'Interpersonal skills including communication skills.',
          'Logical reasoning and analytical ability.',
          'Decision making and problem solving.',
          'General mental ability.',
          'Basic numeracy (numbers and their relations, orders of magnitude, etc.) (Class X level).',
          'Data interpretation (charts, graphs, tables, data sufficiency etc. - Class X level).'
        ]
      },
      {
        title: 'Mains Examination (General Studies I-IV)',
        topics: [
          'GS Paper I: Indian Heritage and Culture, History and Geography of the World and Society.',
          'GS Paper II: Governance, Constitution, Polity, Social Justice and International relations.',
          'GS Paper III: Technology, Economic Development, Bio diversity, Environment, Security and Disaster Management.',
          'GS Paper IV: Ethics, Integrity and Aptitude.'
        ]
      }
    ]
  },
  {
    id: 'uppsc',
    title: 'UPPSC',
    shortDescription: 'Focused preparation for Uttar Pradesh Public Service Commission examinations.',
    duration: '10-12 Months',
    slug: 'uppsc',
    overview: 'Our UPPSC program is specially curated to cater to the specific demands of the Uttar Pradesh Public Service Commission. It covers both the static portion and UP-specific dynamic topics.',
    features: [
      'Special focus on UP Special topics',
      'Comprehensive coverage of General Studies',
      'UPPSC specific Test Series',
      'Hindi language and Essay writing practice',
      'Interview guidance program'
    ],
    subjects: ['UP History & Geography', 'UP Economy', 'Indian Polity', 'General Science', 'Current Affairs', 'General Hindi']
  },
  {
    id: 'foundation-course',
    title: 'Foundation Course',
    shortDescription: 'For students beginning their Civil Services journey during graduation.',
    duration: '2-3 Years',
    slug: 'foundation-course',
    overview: 'The Foundation Course is designed for undergraduate students who want to build a rock-solid foundation for the Civil Services Exam. It builds concepts from NCERTs to advanced reference books over a comfortable timeframe.',
    features: [
      'NCERT coverage and concept building',
      'Current Affairs integration from day one',
      'Gradual progression to advanced topics',
      'Time management and study planning',
      'Long-term mentorship'
    ],
    subjects: ['NCERT Basics', 'General Studies Foundation', 'Newspaper Reading Skills', 'Basic Answer Writing', 'Personality Development']
  },
  {
    id: 'upsc-prelims',
    title: 'UPSC Prelims',
    shortDescription: 'Dedicated course for the preliminary examination focusing on objective tests.',
    duration: '6 Months',
    slug: 'upsc-prelims',
    overview: 'A focused, high-intensity program designed to clear the UPSC Preliminary examination. It involves rigorous MCQ practice, elimination techniques, and comprehensive revision of static and dynamic parts.',
    features: [
      'Extensive MCQ solving practice',
      'CSAT special classes',
      'Current Affairs revision modules',
      'All India Mock Test Series',
      'Focus on high-yielding areas'
    ],
    subjects: ['Indian Polity', 'Modern History', 'Geography & Environment', 'Indian Economy', 'Science & Tech', 'CSAT (Maths, Reasoning, Comprehension)']
  },
  {
    id: 'upsc-mains',
    title: 'UPSC Mains',
    shortDescription: 'Answer writing, essay writing, and comprehensive mains preparation.',
    duration: '4 Months',
    slug: 'upsc-mains',
    overview: 'Our Mains-specific program focuses entirely on analytical skills, answer writing structure, and time management. It is designed to maximize your score in the written examination.',
    features: [
      'Daily answer writing practice (DAWP)',
      'Essay writing workshops',
      'Ethics case studies practice',
      'Detailed evaluation and feedback',
      'Value addition material (Data, Committees, Judgements)'
    ],
    subjects: ['GS I (History, Geography, Society)', 'GS II (Polity, Governance, IR)', 'GS III (Economy, Environment, Security)', 'GS IV (Ethics)', 'Essay Writing']
  }
];

export const optionalSubjects = [
  {
    id: 'geography-optional',
    title: 'Geography Optional',
    shortDescription: 'Comprehensive coverage of Geography optional with map work.',
    duration: '4-5 Months',
    slug: 'geography',
    overview: 'Geography is one of the most popular and rewarding optional subjects. Our course covers Physical, Human, and Indian Geography in exhaustive detail, with a special emphasis on map pointing.',
    features: [
      'Detailed map work practice',
      'Integration of current geographical events',
      'Diagram-based learning approach',
      'Previous year questions analysis',
      'Sectional and full-length tests'
    ],
    subjects: ['Geomorphology', 'Climatology', 'Oceanography', 'Human Geography', 'Indian Geography', 'Map Pointing']
  },
  {
    id: 'history-optional',
    title: 'History Optional',
    shortDescription: 'In-depth historical analysis for UPSC Mains.',
    duration: '4-5 Months',
    slug: 'history',
    overview: 'History optional provides a deep understanding of India and the world\'s past, which also immensely helps in GS I. Our approach focuses on historical analysis rather than rote memorization.',
    features: [
      'Chronological and thematic coverage',
      'Focus on historiography and differing views',
      'Map questions practice for Ancient India',
      'Answer writing structure for History',
      'Comprehensive study notes'
    ],
    subjects: ['Ancient India', 'Medieval India', 'Modern India', 'World History', 'Historical Maps']
  },
  {
    id: 'sociology-optional',
    title: 'Sociology Optional',
    shortDescription: 'Conceptual clarity on sociological theories and contemporary issues.',
    duration: '4-5 Months',
    slug: 'sociology',
    overview: 'Sociology is a concise and highly scoring optional. We focus on building clarity on sociological thinkers and applying sociological perspectives to current Indian social issues.',
    features: [
      'In-depth study of sociological thinkers',
      'Application of theory to current affairs',
      'Linkage with GS Society and Essay',
      'Answer writing with sociological terminology',
      'Regular evaluation'
    ],
    subjects: ['Sociological Thinkers', 'Research Methodology', 'Stratification and Mobility', 'Indian Society structure', 'Social Changes in India']
  },
  {
    id: 'political-science-optional',
    title: 'Political Science Optional',
    shortDescription: 'Master PSIR with focus on current international relations.',
    duration: '4-5 Months',
    slug: 'political-science',
    overview: 'PSIR (Political Science and International Relations) is dynamic and overlaps heavily with GS II. Our classes offer theoretical depth and practical insights into global politics.',
    features: [
      'Comprehensive coverage of Western and Indian thinkers',
      'Dynamic updates on International Relations',
      'Focus on constitutional framework',
      'Regular current affairs integration',
      'Structured test series'
    ],
    subjects: ['Political Theory', 'Indian Government & Politics', 'Comparative Politics', 'International Relations', 'India and the World']
  }
];
