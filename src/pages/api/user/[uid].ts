export default async (req, res) => {
  const userId = req.query.userId;
  if (typeof userId !== "string") {
    res.status(400).end();
    return;
  }
  const user = await getUserData(req.query.id);
  res.status(200).json({
    user,
  });
};
