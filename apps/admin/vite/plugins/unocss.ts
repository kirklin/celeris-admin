import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import UnoCSS from "unocss/vite";
import presetChinese from "unocss-preset-chinese";
export function createUnoCSSPluginConfig() {
  return UnoCSS({
    exclude: ["node_modules", ".git", "dist"],
    presets: [
      presetUno(),
      presetAttributify(),
      presetChinese(),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  });
}
