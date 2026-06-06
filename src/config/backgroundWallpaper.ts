import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: [
			"/assets/desktop-banner/d1.webp",
			"/assets/desktop-banner/d2.webp",
			"/assets/desktop-banner/d3.webp",
			"/assets/desktop-banner/d4.webp",
			"/assets/desktop-banner/d5.webp",
			"/assets/desktop-banner/d6.webp",
			"/assets/desktop-banner/d7.webp",
			"/assets/desktop-banner/d8.webp",
		],
		mobile: [
			"/assets/mobile-banner/m1.webp",
			"/assets/mobile-banner/m2.webp",
			"/assets/mobile-banner/m3.webp",
			"/assets/mobile-banner/m4.webp",
			"/assets/mobile-banner/m5.webp",
			"/assets/mobile-banner/m6.webp",
			"/assets/mobile-banner/m7.webp",
			"/assets/mobile-banner/m8.webp",
		],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 1,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
	switchable: true,
	overlay: {
		opacity: 0.8, // 壁纸不透明度，0-1
		blur: 1.5, // 背景模糊半径（px）
		cardOpacity: 0.8, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
