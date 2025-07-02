import client from "../../../lib/contentful";
import Link from "next/link";

export default async function Page({ params }: any) {
  const {slug}=await params
  const entries = await client.getEntries({
    content_type: "landingPage",
    "fields.slug": slug,
    include: 3,
  });

  const page = entries.items[0];
  const layoutConfig = page?.fields.layoutConfig;


  return (
    <main>
      <nav>
        <Link href="/landing/page1">Page 1</Link> |{" "}
        <Link href="/landing/page1">Page 2</Link>
      </nav>
      <h1>{page?.fields?.title as string}</h1>
      <pre>{JSON.stringify(layoutConfig, null, 2)}</pre>
    </main>
  );
}
