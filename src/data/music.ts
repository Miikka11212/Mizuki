import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 *
 * 添加曲目：在 musicTracks 中追加一项即可：
 * - id: 唯一标识
 * - title: 曲目标题
 * - artist: 艺术家（可选）
 * - cover: 封面图地址（可选；推荐相对 /src，亦支持 /public 或绝对 URL）
 * - source: 音频文件地址（相对 /public 或绝对 URL）
 * - duration: 曲目时长（秒，可选）
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "mizuki-1",
		title: "口笛で愛は歌えない",
		artist: "Dazbee",
		cover: "/assets/music/cover/dazbee.webp",
		source: "/assets/music/url/dazbee.mp3",
		duration: 0,
	},
	{
		id: "mizuki-2",
		title: "ひとり上手",
		artist: "Kaya",
		cover: "/assets/music/cover/hitori.webp",
		source: "/assets/music/url/hitori.mp3",
		duration: 240,
	},
	{
		id: "mizuki-3",
		title: "眩耀夜行",
		artist: "ス리즈ブーケ",
		cover: "/assets/music/cover/xryx.webp",
		source: "/assets/music/url/xryx.mp3",
		duration: 180,
	},
	{
		id: "mizuki-4",
		title: "春雷の頃",
		artist: "22/7",
		cover: "/assets/music/cover/cl.webp",
		source: "/assets/music/url/cl.mp3",
		duration: 200,
	},
];
