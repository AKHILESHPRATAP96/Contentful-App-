export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `Landing - ${params.slug}`,
    description: "Landing page generated from Contentful",
  };
}
