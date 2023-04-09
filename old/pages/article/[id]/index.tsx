import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Article {id}</h1>
    </div>
  );
}
