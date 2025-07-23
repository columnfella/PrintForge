import type { RootLayoutProps } from "@/app/types"
import { getAllCategories } from "../lib/categories";
import Link from "next/link"

export default function RootLayout({ children }: RootLayoutProps) {
    const allCategories = getAllCategories().map((cat)=><p><Link href={`/3d-models/categories/${cat.slug}`}>{cat.displayName}</Link></p>)

    return (
    <main>
        <nav>
            {allCategories}
        </nav>
        <section>
            {children}
        </section>
    </main>
  );
}
