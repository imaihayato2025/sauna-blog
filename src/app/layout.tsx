import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";

export const metadata = {
  title: "SaunaLife｜サウナ体験ブログ",
  description: "サウナの体験や感想を発信するブログサイト SaunaLife",
  keywords: [
    "サウナ",
    "サウナブログ",
    "サウナレビュー",
    "サウナ体験記",
    "整う",
    "ととのう",
    "ロウリュ",
    "サウナ施設",
    "水風呂",
    "外気浴",
    "温浴施設",
    "サウナ初心者",
    "サウナ女子",
    "サウナー",
    "サウナ旅",
  ],
  openGraph: {
    title: "SaunaLife｜サウナ体験ブログ",
    description: "サウナの体験や感想を発信するブログサイト SaunaLife",
    url: "https://saunalife.vercel.app",
    siteName: "SaunaLife",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaunaLife｜サウナ体験ブログ",
    description: "サウナの体験や感想を発信するブログサイト SaunaLife",
    images: ["/logo.png"],
  },
  verification: {
    google: "ti7mssPi4rX4EGAMcoQM8uhMRKK4EQfxfk_tkFYeyw0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
