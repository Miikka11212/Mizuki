/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "mizuki",
		title: "Mizuki",
		summary:
			"A next-gen Material Design 3 blog theme built with Astro, featuring i18n, dark mode, and responsive design.",
		category: "web",
		phase: "shipped",
		technologies: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		cover: "/assets/projects/mizuki.webp",
		featured: true,
		website: "https://mizuki.mysqil.com",
		repository: "https://github.com/LyraVoid/Mizuki",
		year: "2024-01-01 – 2024-06-01",
	},
	{
		key: "folkpatch",
		title: "FolkPatch",
		summary:
			"A kernel-level ROOT solution based on KernelPatch, with polished UI, APM module system, and KPM kernel module support.",
		category: "mobile",
		phase: "building",
		technologies: ["Kotlin", "Rust", "C++", "Java"],
		cover: "/assets/projects/folkpatch.webp",
		featured: true,
		website: "https://fp.mysqil.com",
		repository: "https://github.com/LyraVoid/FolkPatch",
		year: "2024-03-01",
	},
	{
		key: "folktool",
		title: "FolkTool",
		summary:
			"A fast ROOT flashing tool for FolkPatch with a graphical interface and automated operations, simplifying the complex flashing process.",
		category: "desktop",
		phase: "shipped",
		technologies: ["Flutter", "Dart", "C++", "CMake"],
		repository: "https://github.com/LyraVoid/FolkTool",
		year: "2026-02-01 – 2026-02-28",
	},
	{
		key: "folkadb",
		title: "FolkADB",
		summary:
			"A portable ADB/Fastboot tool written in C, featuring interactive CLI, Tab completion, drag-and-drop module installation, and Shizuku activation.",
		category: "desktop",
		phase: "shipped",
		technologies: ["C"],
		repository: "https://github.com/LyraVoid/FolkADB",
		year: "2025-06-01 – 2026-01-01",
	},
	{
		key: "folksplash",
		title: "FolkSplash",
		summary:
			"A web-based splash.img visualizer for OPPO/Realme/OnePlus devices, supporting unpack, preview, replace, and repack.",
		category: "web",
		phase: "shipped",
		technologies: ["React", "TypeScript", "Vite", "Material-UI", "Zustand"],
		website: "https://splash.mysqil.com",
		repository: "https://github.com/LyraVoid/FolkSplash",
		year: "2025-09-01 – 2025-10-01",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
