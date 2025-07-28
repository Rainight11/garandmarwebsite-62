"use client"

import { useEffect, useState } from "react"

type Album = {
  id: string
  name: string
  images: { url: string }[]
  external_urls: { spotify: string }
}

export default function SpotifyEmbed({
  artistId,
  limit = 5,
}: {
  artistId: string
  limit?: number
}) {
  const [albums, setAlbums] = useState<Album[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/spotify?artist=${artistId}&limit=${limit}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then((json) => setAlbums(json.items ?? []))
      .catch((e) => setError(String(e)))
  }, [artistId, limit])

  if (error) return <div>Error: {error}</div>
  if (!albums.length) return <div>Loading…</div>

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {albums.map((a) => (
        <article key={a.id} className="flex flex-col">
          <img src={a.images?.[0]?.url || "/placeholder.svg"} alt={a.name} className="rounded-xl mb-2" />
          <a
            href={a.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            {a.name}
          </a>
        </article>
      ))}
    </div>
  )
}
