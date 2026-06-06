import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Miikka",
	bio: "Welcome to my personal website. Check out my articles, projects, and photography works.",
	typewriter: {
		enable: false, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibli",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/297144550",
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/profiles/76561198358158601/",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Miikka11212",
		},
		{
			name: "Twitch",
			icon: "fa7-brands:twitch",
			url: "https://www.twitch.tv/miikkalillia",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.gg/Zd4BV6bnyF",
		},
	],
};
