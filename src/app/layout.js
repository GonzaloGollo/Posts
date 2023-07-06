import { Navigation } from "./components/Navigation";
import globals from "./globals.css";
import {roboto, spaceGrotesk} from './font';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>🕳💥💢💥🕳💨</title>
      </head>
      <body className={roboto.className}>
        <Navigation /*className={spaceGrotesk.className} *//>
        {children}
      </body>
    </html>
  );
}
