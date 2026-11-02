import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/category-view";
import { categories, getCategoryByPath } from "@/data/categories";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories
    .filter((c) => {
      const segs = c.path.split("/");
      return segs.length === 2;
    })
    .map((c) => {
      const [category, subcategory] = c.path.split("/");
      return { category, subcategory };
    });
}

type Params = { category: string; subcategory: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, subcategory } = await params;
  const cat = getCategoryByPath(`${category}/${subcategory}`);
  if (!cat) return {};
  return { title: cat.name, description: cat.blurb };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, subcategory } = await params;
  const cat = getCategoryByPath(`${category}/${subcategory}`);
  if (!cat) notFound();
  return <CategoryView category={cat} />;
}