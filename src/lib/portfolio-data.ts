import gamingThumb1 from "../assets/pokemon-brick-bronze-thumbnail.png.asset.json";

export type Category = "All" | "Gaming" | "Tech" | "AI" | "Education";

export interface ThumbnailItem {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  image?: string;
}

export const categories: Category[] = ["All", "Gaming", "Tech", "AI", "Education"];

export const thumbnails: ThumbnailItem[] = [
  { id: "gaming-1", title: "Gaming Slot 1", category: "Gaming" },
  { id: "gaming-2", title: "Gaming Slot 2", category: "Gaming" },
  { id: "tech-1", title: "Tech Slot 1", category: "Tech" },
  { id: "tech-2", title: "Tech Slot 2", category: "Tech" },
  { id: "ai-1", title: "AI Slot 1", category: "AI" },
  { id: "ai-2", title: "AI Slot 2", category: "AI" },
  { id: "education-1", title: "Education Slot 1", category: "Education" },
  { id: "education-2", title: "Education Slot 2", category: "Education" },
];
