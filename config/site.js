module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: '내일 뭐먹지? - 멜번의 배달 가능한 한국 식당들입니다', // Navigation and Site Title
    titleAlt: '내일 뭐먹지? - 멜번의 배달 가능한 한국 식당들입니다', // Title for JSONLD
    description:
        '멜번의 배달 가능한 한국 음식점, 한국 슈퍼마켓, 한국 제품 공동 구매 이벤트들을 한자리에서 만나볼 수 있습니다.',
    url: 'https://k-food.com.au', // Domain of your site. No trailing slash!
    siteUrl: 'https://k-food.com.au', // url + pathPrefix
    siteLanguage: 'en', // Language Tag on <html> element
    logo: 'static/logo/logo.png', // Used for SEO
    banner: 'static/logo/logo.png',
    // JSONLD / Manifest
    favicon: 'static/logo/favicon-256x256.png', // Used for manifest favicon generation
    shortName: 'K-Food', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Jay', // Author for schemaORGJSONLD
    themeColor: '#3e7bf2',
    backgroundColor: '#d3e0ff',
    twitter: '@nicekhj', // Twitter Username
};
