import ImageDownloadIOS from "@/images/download/download-on-the-app-store.png"
import ImageDownloadMacOS from "@/images/download/download-on-the-mac-app-store.svg"
import ImageDownloadWindows from "@/images/download/download-on-the-microsoft-store.svg"
import ImageDownloadAndroid from "@/images/download/get-it-on-google-play.svg"

export type OS = "macOS" | "iOS" | "Windows" | "Android" | "Linux"

export const PlatformIconMap: Record<OS, string> = {
  Windows: "i-mingcute-windows-fill",
  macOS: "i-mingcute-apple-fill",
  Linux: "i-mingcute-linux-fill",
  iOS: "i-mingcute-apple-fill",
  Android: "i-mingcute-android-fill",
}

export const PlatformStoreLinkMap: Record<
  OS,
  { link: string; name: string; image: any } | undefined
> = {
  iOS: {
    link: "https://apps.apple.com/us/app/folo-follow-everything/id6739802604",
    name: "App Store",
    image: ImageDownloadIOS,
  },
  macOS: {
    link: "https://apps.apple.com/us/app/folo-follow-everything/id6739802604",
    name: "Mac App Store",
    image: ImageDownloadMacOS,
  },
  Windows: {
    link: "https://apps.microsoft.com/detail/9nvfzpv0v0ht?mode=direct",
    name: "Microsoft Store",
    image: ImageDownloadWindows,
  },
  Android: {
    link: "https://play.google.com/store/apps/details?id=is.follow",
    name: "Google Play",
    image: ImageDownloadAndroid,
  },
  Linux: undefined,
}
