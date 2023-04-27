import Link from "next/link";

export default function ArticleList({ articles }: any) {
  return (
    <div>
      {articles.map((article: any) => (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
          {/* should put another link without href for anchor */}
          <a>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
