(() => {
  'use strict';
  const translations = window.profileContent;
  const storageKey = 'feng-zixuan-language';
  const buttons = Array.from(document.querySelectorAll('[data-lang]'));
  const supported = (value) => value === 'zh' || value === 'en';

  function applyLanguage(language, persist) {
    if (!supported(language)) return;
    const copy = translations[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelector('meta[property="og:title"]').content = copy.pageTitle;
    document.querySelector('meta[property="og:description"]').content = copy.description;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (typeof value === 'string') element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
    });
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    if (persist) {
      try { localStorage.setItem(storageKey, language); } catch (_) { /* Browsing without storage still works. */ }
      try {
        const address = new URL(window.location.href);
        address.searchParams.set('lang', language);
        window.history.replaceState(null, '', address);
      } catch (_) { /* file:// previews and restricted history are supported. */ }
    }
  }

  let language = new URLSearchParams(window.location.search).get('lang');
  if (!supported(language)) {
    try { language = localStorage.getItem(storageKey); } catch (_) { language = null; }
  }
  applyLanguage(supported(language) ? language : 'zh', false);
  buttons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang, true)));
})();
