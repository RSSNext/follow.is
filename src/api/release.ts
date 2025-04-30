import { headers } from 'next/headers'

export async function getLatestReleaseInfo(): Promise<ReleaseInfo | undefined> {
  return getReleaseInfo(false)
}

export async function getNightlyReleaseInfo(): Promise<ReleaseInfo | undefined> {
  return
  // return getReleaseInfo(true)
}

async function getReleaseInfo(isNightly: boolean): Promise<ReleaseInfo | undefined> {
  const res = await fetch(
    'https://ungh.cc/repos/RSSNext/Folo/releases',
    {
      next: { revalidate: 3600 },
    },
  )
  const releases = (await res.json()) as GitHubRelease
  const latestRelease = releases.releases.find(
    release => !release.draft && release.prerelease === isNightly,
  )
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
    if (!isNightly && asset.contentType !== 'application/octet-stream') {
      continue
    }
    if (asset.downloadUrl.includes('windows')) {
      downloadUrl.Windows = asset.downloadUrl
    }
    else if (asset.downloadUrl.includes('macos-arm64')) {
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

export type OS = 'macOS' | 'iOS' | 'Windows' | 'Android' | 'Linux'

export async function getOs(): Promise<OS | undefined> {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''

  if (userAgent.includes('Win'))
    return 'Windows'
  if (
    userAgent.includes('iPhone')
    || userAgent.includes('iPad')
    || userAgent.includes('iPod')
  ) {
    return 'iOS'
  }
  if (userAgent.includes('Mac'))
    return 'macOS'
  if (userAgent.includes('Android'))
    return 'Android'
  if (userAgent.includes('Linux'))
    return 'Linux'
}

export const PlatformIconMap: Record<OS, string> = {
  Windows: 'i-mingcute-windows-fill',
  macOS: 'i-mingcute-apple-fill',
  Linux: 'i-mingcute-linux-fill',
  iOS: 'i-mingcute-apple-fill',
  Android: 'i-mingcute-android-fill',
}

export const PlatformStoreLinkMap: Record<OS, { link: string, name: string } | undefined> = {
  iOS: { link: 'https://apps.apple.com/us/app/folo-follow-everything/id6739802604', name: 'App Store' },
  macOS: { link: 'https://apps.apple.com/us/app/folo-follow-everything/id6739802604', name: 'Mac App Store' },
  Windows: { link: 'https://apps.microsoft.com/detail/9nvfzpv0v0ht?mode=direct', name: 'Microsoft Store' },
  Android: undefined,
  Linux: undefined,
}

export async function getPlatformAppVersion(os?: OS): Promise<string | undefined> {
  if (!os) {
    return
  }
  const res = await fetch(
    os === 'Android' || os === 'iOS'
      ? 'https://raw.githubusercontent.com/RSSNext/Folo/refs/heads/main/apps/mobile/package.json'
      : 'https://raw.githubusercontent.com/RSSNext/Folo/refs/heads/main/apps/desktop/package.json',
    {
      next: { revalidate: 3600 },
    },
  )
  const json = await res.json()
  return json.version
}
