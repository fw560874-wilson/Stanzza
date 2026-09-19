import { articles, nav, projects } from "./content";

export type SearchHit = {
  title: string;
  type: string;
  to: string;
  text: string;
};

export const searchIndex: SearchHit[] = [
  { title: "Home", type: "Page", to: "/", text: "architecture design delivery composed interiors barcelona" },
  ...nav.map((item) => ({
    title: item.label,
    type: "Page",
    to: item.to,
    text: item.label,
  })),
  ...projects.map((project) => ({
    title: project.title,
    type: "Project",
    to: `/projects/${project.slug}`,
    text: `${project.city} ${project.country} ${project.objective} ${project.solution}`,
  })),
  ...articles.map((article) => ({
    title: article.title,
    type: "Article",
    to: `/blog/${article.slug}`,
    text: `${article.excerpt} ${article.author}`,
  })),
];

export function searchSite(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter((item) => `${item.title} ${item.type} ${item.text}`.toLowerCase().includes(q)).slice(0, 8);
}
