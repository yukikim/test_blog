# Eleventy(11ty)で静的サイト構築

[11ty](https://www.11ty.dev/)は静的サイトジェネレータ
SSG(Static Site Generation)

## インストール

    $ mkdir eleventy-sample
    $ cd eleventy-sample
    $ npm init -y
    $ npm install @11ty/eleventy
    $ npx @11ty/eleventy
    //[11ty] Wrote 0 files in 0.03 seconds (v2.0.1)

### ディレクトリ及びファイル構成

    ./test-blog
    ├── node_modules
    ├── README.md
    ├── _site
    │   ├── index.html
    │   ├── posts
    │   │   ├── 1
    │   │   │   └── index.html
    │   │   ├── 2
    │   │   │   └── index.html
    │   │   └── 3
    │   │       └── index.html
    │   └── styles
    │       ├── common.css
    │       ├── common.css.map
    │       └── common.scss
    ├── package-lock.json
    ├── package.json
    └── src
    ├── _data
    │   └── metadata.json
    ├── _includes
    │   ├── base.njk
    │   └── post.njk
    ├── index.njk
    ├── posts
    │   ├── post1.md
    │   ├── post2.md
    │   ├── post3.md
    │   └── posts.json
    └── styles
    ├── common.css
    ├── common.css.map
    └── common.scss