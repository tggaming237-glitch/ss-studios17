import gaming1 from "../assets/thumbnails/gaming-1.jpg";
import gaming2 from "../assets/thumbnails/gaming-2.jpg";
import tech1 from "../assets/thumbnails/tech-1.jpg";
import tech2 from "../assets/thumbnails/tech-2.jpg";
import ai1 from "../assets/thumbnails/ai-1.jpg";
import ai2 from "../assets/thumbnails/ai-2.jpg";
import education1 from "../assets/thumbnails/education-1.jpg";
import education2 from "../assets/thumbnails/education-2.jpg";

export type Category = "All" | "Gaming" | "Tech" | "AI" | "Education";

export interface ThumbnailItem {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  ctr: string;
}

export const categories: Category[] = ["All", "Gaming", "Tech", "AI", "Education"];

export const thumbnails: ThumbnailItem[] = [
  {
    id: "gaming-1",
    title: "Apex Legends Mastery",
    category: "Gaming",
    image: gaming1,
    ctr: "14.2%",
  },
  {
    id: "gaming-2",
    title: "Midnight Racing League",
    category: "Gaming",
    image: gaming2,
    ctr: "12.8%",
  },
  {
    id: "tech-1",
    title: "iPhone 16 Pro Review",
    category: "Tech",
    image: tech1,
    ctr: "11.5%",
  },
  {
    id: "tech-2",
    title: "MacBook Pro vs Air",
    category: "Tech",
    image: tech2,
    ctr: "10.9%",
  },
  {
    id: "ai-1",
    title: "Neural Networks Explained",
    category: "AI",
    image: ai1,
    ctr: "13.1%",
  },
  {
    id: "ai-2",
    title: "AI Automation Tools",
    category: "AI",
    image: ai2,
    ctr: "12.4%",
  },
  {
    id: "education-1",
    title: "Study Smart System",
    category: "Education",
    image: education1,
    ctr: "9.7%",
  },
  {
    id: "education-2",
    title: "Stock Market Basics",
    category: "Education",
    image: education2,
    ctr: "11.2%",
  },
];
