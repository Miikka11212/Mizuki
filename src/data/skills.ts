/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

export const skillsData: SkillItem[] = [
	{
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "React",
		description:
			"A JavaScript library for building user interfaces, including Hooks, Context, and state management.",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "Vue.js",
		description:
			"A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Angular",
		description:
			"An enterprise-level frontend framework developed by Google, a complete single-page application solution.",
		category: "frontend",
		level: "beginner",
	},
	{
		name: "Next.js",
		description:
			"A production-level React framework supporting SSR, SSG, and full-stack development.",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Nuxt.js",
		description:
			"An intuitive Vue.js framework supporting server-side rendering and static site generation.",
		category: "frontend",
		level: "beginner",
	},
	{
		name: "Astro",
		description:
			"A modern static site generator supporting multi-framework integration and excellent performance.",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building modern user interfaces.",
		category: "frontend",
		level: "advanced",
	},
	{
		name: "Sass/SCSS",
		description:
			"A CSS preprocessor providing advanced features like variables, nesting, and mixins.",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Webpack",
		description: "A static module bundler for modern JavaScript applications.",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Vite",
		description:
			"Next-generation frontend build tool with fast cold starts and hot updates.",
		category: "frontend",
		level: "intermediate",
	},
	{
		name: "Node.js",
		description:
			"A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Java",
		description:
			"A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "C#",
		description:
			"A modern object-oriented programming language developed by Microsoft, suitable for the .NET ecosystem.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Go",
		description:
			"An efficient programming language developed by Google, suitable for cloud-native and microservices development.",
		category: "backend",
		level: "beginner",
	},
	{
		name: "Rust",
		description:
			"A systems programming language focusing on safety, speed, and concurrency, with no garbage collector.",
		category: "backend",
		level: "beginner",
	},
	{
		name: "C++",
		description:
			"A high-performance systems programming language widely used in game development, system software, and embedded development.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "C",
		description:
			"A low-level systems programming language, the foundation for operating systems and embedded systems development.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Kotlin",
		description:
			"A modern programming language developed by JetBrains, fully compatible with Java, the preferred choice for Android development.",
		category: "backend",
		level: "beginner",
	},
	{
		name: "Swift",
		description:
			"A modern programming language developed by Apple for iOS, macOS, watchOS, and tvOS development.",
		category: "backend",
		level: "beginner",
	},
	{
		name: "Ruby",
		description:
			"A dynamic, open-source programming language focusing on simplicity and productivity, the foundation of the Rails framework.",
		category: "backend",
		level: "beginner",
	},
	{
		name: "PHP",
		description:
			"A widely-used server-side scripting language, particularly suitable for web development.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Express.js",
		description: "A fast, minimalist Node.js web application framework.",
		category: "backend",
		level: "intermediate",
		icon: "simple-icons:express",
	},
	{
		name: "Spring Boot",
		description:
			"The most popular enterprise application development framework in the Java ecosystem.",
		category: "backend",
		level: "intermediate",
	},
	{
		name: "Django",
		description:
			"A high-level Python web framework with rapid development and clean, pragmatic design.",
		category: "backend",
		level: "beginner",
	},
	{
		name: "MySQL",
		description:
			"The world's most popular open-source relational database management system, widely used in web applications.",
		category: "database",
		level: "advanced",
	},
	{
		name: "PostgreSQL",
		description:
			"A powerful open-source relational database management system.",
		category: "database",
		level: "intermediate",
	},
	{
		name: "Redis",
		description:
			"A high-performance in-memory data structure store, used as a database, cache, and message broker.",
		category: "database",
		level: "intermediate",
	},
	{
		name: "MongoDB",
		description:
			"A document-oriented NoSQL database with a flexible data model.",
		category: "database",
		level: "intermediate",
	},
	{
		name: "SQLite",
		description:
			"A lightweight embedded relational database, suitable for mobile applications and small projects.",
		category: "database",
		level: "intermediate",
		icon: "simple-icons:sqlite",
	},
	{
		name: "Firebase",
		description:
			"Google's mobile and web application development platform providing real-time database and authentication services.",
		category: "database",
		level: "intermediate",
		icon: "simple-icons:firebase",
	},
	{
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		category: "tools",
		level: "advanced",
	},
	{
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		category: "tools",
		level: "expert",
	},
	{
		name: "WebStorm",
		description:
			"A professional JavaScript and web development IDE developed by JetBrains with intelligent code assistance.",
		category: "tools",
		level: "advanced",
	},
	{
		name: "IntelliJ IDEA",
		description:
			"JetBrains flagship IDE, the preferred tool for Java development with powerful intelligent coding assistance.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "PyCharm",
		description:
			"A professional Python IDE by JetBrains providing intelligent code analysis and debugging features.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "Rider",
		description:
			"A cross-platform .NET IDE by JetBrains supporting development in C#, VB.NET, F#, and other languages.",
		category: "tools",
		level: "beginner",
	},
	{
		name: "GoLand",
		description:
			"A professional Go language IDE by JetBrains providing intelligent coding assistance and debugging tools.",
		category: "tools",
		level: "beginner",
	},
	{
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "Kubernetes",
		description:
			"A container orchestration platform for automating deployment, scaling, and management of containerized applications.",
		category: "tools",
		level: "beginner",
	},
	{
		name: "Nginx",
		description: "A high-performance web server and reverse proxy server.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "Apache HTTP Server",
		description:
			"The world's most popular web server software, a stable and reliable HTTP server.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "OpenResty",
		description:
			"A high-performance web platform based on Nginx and LuaJIT, supporting dynamic web application development.",
		category: "tools",
		level: "beginner",
		icon: "simple-icons:nginx",
	},
	{
		name: "Apache Tomcat",
		description:
			"A Java Servlet container and web server, the standard deployment environment for Java web applications.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "AWS",
		description:
			"Amazon's cloud platform providing comprehensive cloud computing solutions.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "Postman",
		description:
			"An API development and testing tool that simplifies API design, testing, and documentation.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "Figma",
		description:
			"A collaborative interface design tool for UI/UX design and prototyping.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "Photoshop",
		description: "Professional image editing and design software.",
		category: "tools",
		level: "intermediate",
	},
	{
		name: "GraphQL",
		description:
			"An API query language and runtime providing a more efficient, powerful, and flexible way to fetch data.",
		category: "other",
		level: "beginner",
	},
	{
		name: "Elasticsearch",
		description:
			"A distributed search and analytics engine used for full-text search and data analysis.",
		category: "other",
		level: "beginner",
	},
	{
		name: "Jest",
		description:
			"A JavaScript testing framework focused on simplicity and ease of use.",
		category: "other",
		level: "intermediate",
	},
	{
		name: "Cypress",
		description: "A modern end-to-end testing framework for web applications.",
		category: "other",
		level: "beginner",
	},
];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
