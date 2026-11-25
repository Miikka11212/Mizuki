/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "translation-workflow",
		title: "Translation Workflow",
		summary: "Translate a scanned book into another language with a Python workflow.",
		category: "other",
		phase: "shipped",
		technologies: ["Python"],
		repository: "https://github.com/Miikka11212/Translation-workflow",
	},
	{
		key: "picture-compressor",
		title: "Picture Compressor",
		summary: "Resize pictures with a small Python utility.",
		category: "desktop",
		phase: "shipped",
		technologies: ["Python"],
		repository: "https://github.com/Miikka11212/picture-compressor",
	},
	{
		key: "coe528_bookstore",
		title: "Bookstore System",
		summary: "A Java bookstore system built for the COE528 course project.",
		category: "desktop",
		phase: "shipped",
		technologies: ["Java"],
		repository: "https://github.com/Miikka11212/COE528_BookStore",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
