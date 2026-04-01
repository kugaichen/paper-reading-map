import './globals.css';

export const metadata = {
  title: 'Paper Reading Map',
  description: 'A deployable paper reading map connected to structured Obsidian notes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
