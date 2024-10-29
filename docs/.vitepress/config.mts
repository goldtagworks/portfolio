import { defineConfig } from 'vitepress';

const fileAndStyles: Record<string, string> = {};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'my way',
    description: '',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'tistory', link: 'https://apple-io.com' }
        ],

        sidebar: [
            { text: 'Who am I ?', link: '/info' },
            { text: '경력 & 이력', link: '/career' },
            {
                text: '지나온길',
                items: [
                    { text: '1', link: '/history' },
                ]
            }            
        ],

        footer: {
            message: '221, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea',
            copyright: 'Copyright © 1999 ~ <a href="https://github.com/goldtagworks">goldtagworks</a>'
        },

        socialLinks: [
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/ian-lab-jaewon-lee-b46214259/' },
            { icon: 'github', link: 'https://github.com/goldtagworks' }
        ]

    },
    vite: {
        ssr: {
            noExternal: ['naive-ui', 'date-fns', 'vueuc']
        }
    },
    postRender(context) {
        const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/;
        const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/;
        const style = styleRegex.exec(context.content)?.[1];
        const vitepressPath = vitepressPathRegex.exec(context.content)?.[1];
        if (vitepressPath && style) {
            fileAndStyles[vitepressPath] = style;
        }
        context.content = context.content.replace(styleRegex, '');
        context.content = context.content.replace(vitepressPathRegex, '');
    },
    transformHtml(code, id) {
        const html = id.split('/').pop();
        if (!html) return;
        const style = fileAndStyles[`/${html}`];
        if (style) {
            return code.replace(/<\/head>/, style + '</head>');
        }
    }
});
