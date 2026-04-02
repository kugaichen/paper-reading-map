import './globals.css';

export const metadata = {
  title: 'NetPaper',
  description: 'paper reading and learning of networking of performance / system / architecture / hardware.',
  icons: {
    icon: '/favicon.png', // 指向 public 目录下的 favicon.png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
