import "./globals.css";


export const metadata = {
  title: "xportas",
  description: "Created by xportas",
};

export default function RootLayout({ children }) {

  const importMap = {
    imports: {
      three: "https://unpkg.com/three@v0.163.0/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@v0.163.0/examples/jsm/"
    }
  };


  return (
    <html /*lang="en"*/ >

      {/* <head>
        <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
        <script type="importmap">{JSON.stringify(importMap)}</script>
      </head> */}

      <body className="font-main bg-orange-200 text-main-color-gray">{children}</body>

    </html>
  );
}
