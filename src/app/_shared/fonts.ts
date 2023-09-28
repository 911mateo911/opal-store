import { Inter, Red_Hat_Display } from 'next/font/google';

export const font_RedHatDisplay = Red_Hat_Display({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-red_hat_display'
});

export const font_Inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})
