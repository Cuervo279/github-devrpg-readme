export default async function handler(req, res) {
  const username = req.query.user
  const debug = req.query.debug === "true"

  if (!username) return res.status(400).json({ error: "user required" })

  try {
    const data = await getUserStats(username)

    data.avatarBase64 = await getBase64(data.avatar)

    if (debug) {
      return res.status(200).json(data)
    }

    const svg = buildCardSvg(data)

    res.setHeader("Content-Type", "image/svg+xml")
    res.setHeader("Cache-Control", "public, max-age=3600")

    return res.status(200).send(svg)

  } catch (error) {
    console.error(error)
    return res.status(500).send("Error generating SVG")
  }
}