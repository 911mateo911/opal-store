import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest & { permissions: string[] } {
  return {
    name: 'Opal Albania',
    short_name: 'Opal',
    description: 'Menyra me e re per te kerkuar gjithcka',
    permissions: ["clipboardWrite"]
  }
}
