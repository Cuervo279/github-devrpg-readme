import { getUserStats } from "../libs/github.js"
import { buildCardSvg } from "../templates/cardSvg.js"

async function getBase64(url) {
  try {
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    const mime = res.headers.get("content-type") || "image/jpeg";
    return `data:${mime};base64,${base64}`;
  } catch (e) {

    return ""; 
  }
}

export default async function handler(req, res) {
  const username = req.query.user
  if (!username) return res.status(400).json({ error: "user required" })

  try {
    const data = await getUserStats(username)

    data.avatarBase64 = await getBase64(data.avatar)

    const svg = buildCardSvg(data)

    res.setHeader("Content-Type", "image/svg+xml")
    res.setHeader("Cache-Control", "public, max-age=3600")
    return res.status(200).send(svg)
  } catch (error) {
    console.error(error)
    return res.status(500).send("Error generating SVG")
  }
}