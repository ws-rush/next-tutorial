const articles = [
  { id: 1, title: "First article" },
  { id: 2, title: "Second article" },
  { id: 3, title: "Third article" },
];

// { query: { id } } equal to req.query.id
export default function handler({ query: { id } }: any, res: any) {
  const filterd = articles.filter((article) => article.id === id);
  // Article with id exists
  if (filterd.length > 0) {
    res.status(200).json(filterd[0]);
  }
  // Article with id does not exist
  else {
    res.status(404).json({ message: `Article with id ${id} does not exist` });
  }
}
