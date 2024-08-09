import {
    defineConfig,
    presetAttributify,
    presetUno,
    presetMini,
    presetWebFonts,

} from 'unocss';

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetMini(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Black Han Sans',
                mono: ['Fira Code', 'Fira Mono:400,700'],
            }
        }),
    ],
    theme: {
        colors: {
            primary: '#FC641B',
            neutral: '#4F4E4E'
        }
    },
});