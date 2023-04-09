const articles = [
  { id: 1, title: "First article" },
  { id: 2, title: "Second article" },
  { id: 3, title: "Third article" },
];

export default function handler(req: any, res: any) {
  res.status(200).json(articles);
}
