
export const DOMAIN = 'sbondarenko.com';

export const PAGES = {
  home: {
    path: '/'
  },
  about: {
    path: '/about'
  },
  projects: {
    path: '/projects/projects'
  },
  search_guard: {
    path: '/projects/search_guard',
    media: {
      selected_works_image: '/searchguard_selected_works.png'
    }
  },
  sentinl: {
    path: '/projects/sentinl',
    media: {
      selected_works_image: '/sentinl_selected_works.png'
    }
  },
  wordcharge: {
    path: '/projects/wordcharge',
    media: {
      selected_works_image: '/wordcharge_selected_works.png'
    }
  },
  amazon_clone: {
    path: '/projects/amazon_clone',
    media: {
      selected_works_image: '/amazon_selected_works.png'
    }
  },
  uber_clone: {
    path: '/projects/uber_clone',
    media: {
      selected_works_image: '/uber_selected_works.png'
    }
  },
  twitter_clone: {
    path: '/projects/twitter_clone',
    media: {
      selected_works_image: '/twitter_selected_works.png'
    }
  }
};

export const PROJECTS = {
  'Search Guard': PAGES.search_guard,
  'Sentinl': PAGES.sentinl,
  'Wordcharge': PAGES.wordcharge,
  'Amazon Clone': PAGES.amazon_clone,
  'Uber Clone': PAGES.uber_clone,
  'Twitter Clone': PAGES.twitter_clone
};