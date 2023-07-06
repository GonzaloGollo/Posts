import {Space_Grotesk , Roboto} from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'], // Si se usa el Next/font, en un proyecto que tiene tailwind, debe setearse el subset con este formato
    variable: '--font-roboto-mono',
     weight:['100','300'],
    style: ['normal', 'italic'],
    display: 'swap',
  })

// export const spaceGrotesk = Space_Grotesk({
//  subsets: ['latin'], // Si se usa el Next/font, en un proyecto que tiene tailwind, debe setearse el subset con este formato
//    weight:['400', '700']
//  })
