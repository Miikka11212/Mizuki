import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "Announcement", // 公告标题，填空使用i18n字符串Key.announcement
		content:
			"Check out my projects in the menu.", // 公告内容
		closable: true, // 允许用户关闭公告
		link: {
			enable: true, // 启用链接
			text: "View projects", // 链接文本
			url: "/projects/", // 链接 URL
			external: false, // 内部链接
		},
	},
);
