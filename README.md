# 冯梓轩 / FENG Zixuan

Status: Active
Updated: 2026-10-23

中英双语个人主页 / Bilingual personal website.

Website: https://fzx-calvin.github.io/

- 中文：https://fzx-calvin.github.io/?lang=zh
- English: https://fzx-calvin.github.io/?lang=en

本仓库仅包含公开网站。邮箱为125090130@link.cuhk.edu.cn，GitHub为https://github.com/fzx-calvin 。

## Maintenance

`index.html` defines the page structure and default Chinese content. Update both translations in `assets/content.js` when editing copy. Styles live in `assets/main.css`; language selection lives in `assets/site.js`.

This is a buildless static site. GitHub Pages serves the root of `main`; `.nojekyll` disables Jekyll processing. Keep all assets at their relative paths. No install or build step is required.

To preview locally, run `python3 -m http.server 8765` and open http://127.0.0.1:8765/ .
