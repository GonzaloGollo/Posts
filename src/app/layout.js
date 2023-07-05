import { Navigation } from "./components/Navigation";
import globals from "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with NextJS</title>
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
