import "./globals.css";


export const metadata = {
  title: "xportas",
  description: "Created by xportas",
};

export default function RootLayout({ children }) {
  return (
    <html /*lang="en"*/ >
      <body className="font-main bg-orange-200 text-[#525252]">{children}</body>
    </html>
  );
}
