import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/category-view";
import { categories, getCategoryByPath } from "@/data/categories";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories
    .filter((c) => !c.path.includes("/"))
    .map((c) => ({ category: c.path }));
}

type Params = { category: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryByPath(category);
  if (!cat) return {};
  return { title: cat.name, description: cat.blurb };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategoryByPath(category);
  if (!cat) notFound();
  return <CategoryView category={cat} />;
}