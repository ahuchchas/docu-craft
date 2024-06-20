import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-utils";

export default function AuthorPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
}
