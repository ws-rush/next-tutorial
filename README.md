# structure

    - pages
        - _app.tsx
        - index.tsx
        - about.tsx
        - contact.tsx
        - api/
            - index.ts
            - v1.ts
            - v2.ts
    - components/
        - header.tsx
        - footer.tsx
        - sidebar.tsx
    - layouts/

1. components and layouts should be in Uppercase and pages should be in lowercase
2. to make component defaults see `components/Meta.tsx`
3. "\_app.tsx" is the root component of the application, recive the pages and render them
4. "\_document.tsx" used to customize default html document, it render only once in server so dont use events like onClick
5. in every page (with "\_app.tsx") we can warap it with a layout, and we can ue Head component to add meta tags, title, etc
6. in styles/ we can define Page.module.css and import it in the page, and we can use it like this: `<div className={styles.container}>`. in this we we have style for every page.
7. navigation done by `Link` see ArticleList
8. for nesting routing see `articl/[id]/index.tsx` and see how it get the id from the url
9. for API routing see `api/` directory

## data fetching

### getStaticProps

`getStaticProps` is a function that is used to fetch data at build time (run at `next build`)

```ts
export async function getStaticProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

if we use it inside dynamic route we should use `getStaticPaths` to tell nextjs which paths we want to generate at build time

```ts
export async function getStaticPaths() {
  const articles = await fetch("http://localhost:3000/api/articles");
  const articles = await articles.json();
  const ids = articles.map((article) => article.id);
  // paths equal to: [{ params: { id: "1" } }, { params: { id: "2" } }, { params: { id: "3" } }];
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    // if no data provide 404 page
    fallback: false,
  };
}
```

### getserverSideProps

`getServerSideProps` is a function that is used to fetch data at request time

```ts
export async function getServerSideProps(context) {
  const { id } = context.params; // equalto get the id from the url
  return {
    props: {
      // props for your component
    },
  };
}
```

## static website

1. in package.json add command `"export": "next export"`
2. install `npm i -D serve`
3. add script `"serve": "serve -s out"`
4. run `npm run export` to export the website
5. run `npm run serve` to serve the website
