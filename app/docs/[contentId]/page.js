import ContentDisplay from "@/components/ContentDisplay";

export default function ContentPage({ params }) {
  const { contentId } = params;
  return <ContentDisplay id={contentId} />;
}
