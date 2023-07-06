import { Navigation } from "./components/Navigation";
import globals from "./globals.css";
import {Space_Grotesk, Roboto} from 'next/font/google'


// const font = Space_Grotesk({
//   subsets: ['latin'], // Si se usa el Next/font, en un proyecto que tiene tailwind, debe setearse el subset con este formato
//   weight:['300','500' ,'400', '700']
// })

const font2 = Roboto({
  subsets: ['latin'], // Si se usa el Next/font, en un proyecto que tiene tailwind, debe setearse el subset con este formato
  weight:['100','300']
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>🕳💥💢💥🕳💨</title>
      </head>
      <body className={font2.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
