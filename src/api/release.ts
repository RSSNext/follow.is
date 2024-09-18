export async function getLatestReleaseInfo(): Promise<ReleaseInfo | undefined> {
  // TODO: remove revalidate after next.js 15
  const res = await fetch('https://ungh.cc/repos/RSSNext/follow/releases', { next: { revalidate: 60 } })
  const releases = await res.json() as GitHubRelease
  const latestRelease = releases.releases.find(release => !release.draft && !release.prerelease)
  if (!latestRelease) {
    return
  }

  const { assets } = latestRelease
  const downloadUrl = {
    Windows: '',
    macOS: '',
    Linux: '',
  }
  for (const asset of assets) {
    if (asset.contentType !== 'application/octet-stream') {
      continue
    }
    if (asset.downloadUrl.includes('windows')) {
      downloadUrl.Windows = asset.downloadUrl
    }
    else if (asset.downloadUrl.includes('macos')) {
      downloadUrl.macOS = asset.downloadUrl
    }
    else if (asset.downloadUrl.includes('linux')) {
      downloadUrl.Linux = asset.downloadUrl
    }
  }
  return {
    name: latestRelease.name,
    downloadUrl,
  }
}

export interface ReleaseInfo {
  name: string
  downloadUrl: Record<string, string>
}

interface GitHubRelease {
  releases: Release[]
}

interface Release {
  id: number
  tag: string
  author: string
  name: string
  draft: boolean
  prerelease: boolean
  createdAt: string
  publishedAt: string
  markdown: string
  html: string
  assets: Asset[]
}

interface Asset {
  contentType: string
  size: number
  createdAt: string
  updatedAt: string
  downloadCount: number
  downloadUrl: string
}
