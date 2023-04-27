> for older versions see `befor_13` branch

# structure

```
  - app/
    - components/ # accessed by @/app/components
      - Meta.tsx # default meta tags
      - Nav.tsx # navigation
    - api/
      - hello/
        - route.ts # /api/hello
    - layout.tsx # layout for all pages
    - loading.tsx # loader for all pages
    - page.tsx # /index page
    - about/
      - team/
        - page.tsx # /about/team page
      - [id]/
        - page.tsx # /about/:id page
      - page.tsx # /about page
      - layout.tsx # layout for all about pages
```

**NBs**

1. layouts pages accept `children` prop
2. [id]/pages accept `params` prop
3. loading page component renderd if not all page components are loaded, if you have server side component need a time , enacpsulate it with `Suspense`
4. used in `layouts`s and `pages`s

```ts
// either Static metadata
export const metadata = {
  title: "...",
};

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: "...",
  };
}
```

# next modules

**next/head**

```tsx
impoer Link from "next/link";

export default function Page() {
  // default rplace is false
  // default prefetch is true
  return <Link href="/dashboard" replace prefetch={false}>Dashboard</Link>;
}
```

**next/font**

```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weights: [400, 700],
  styles: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export default function Page() {
  return <h1 className={{ poppins.className }}>hello world</h1>;
}
```

**next/image**

```tsx
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="/image.png"
      alt="image"
      width={500}
      height={500}
      layout="responsive"
      objectFit="cover"
      objectPosition="center"
      priority={true}
      quality={100}
    />
  );
}
```

# Components (sever side and client side)

...

# fetching data

> there is no `getStaticProps` or `getServerSideProps` in components in next 13.
> so we use async functions to fetch data, or useEffect to fetch data.

**server side**

```tsx
async function Albums({ artistId }) {
  const { data } = await fetcher(`/api/albums?artistId=${artistId}`);

  return (
    <div>
      {data.items.map((album) => (
        <div key={album.id}>{album.name}</div>
      ))}
    </div>
  );
}
```

if component doesnt encapulated with `Suspense`, it's page will not be rendered until all components are loaded. so you will see loader untill all page components are loaded. so focus to encapsulate async components with `Suspense`.

**client side**

we have to methods to get data, with `useEffect` and specify loader inside component, or with `use` hook and specify loader from `Suspense` component.

```tsx
// with `useEffect`

import { useEffect, useState } from "react";

function Albums({ artistId }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher(`/api/albums?artistId=${artistId}`).then(({ data }) => {
      setAlbums(data.items);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>{album.name}</div>
      ))}
    </div>
  );
}

// with `use` hook
import { use } from "react";

function Albums({ artistId }) {
  const { data: albums } = use(`/api/albums?artistId=${artistId}`);

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>{album.name}</div>
      ))}
    </div>
  );
}
```

# API

...

# NextAuth

# Database

> see `wusaby-rush` prisma repo
