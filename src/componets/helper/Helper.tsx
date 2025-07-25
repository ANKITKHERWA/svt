import {
  IconDiscord,
  IconFb,
  Iconinstgram,
  IconLinkdin,
  IconTelegarm,
  IconTwiter,
  IconYoutube,
} from './Icon'

export const navber = [
  { path: '#', pera: 'HOME' },
  { path: '#', pera: 'ABOUT' },
  { path: '#', pera: 'HOW IT WORKS' },
  { path: '#', pera: 'FAQ' },
  { path: '#', pera: 'DOCUMENTS' },
]

export const socialData = [
  { path: 'https://discord.com/', icon: <IconDiscord /> },
  { path: 'https://x.com/i/flow/login', icon: <IconTwiter /> },
  { path: 'https://youtube.com/', icon: <IconYoutube /> },
  {
    path: 'https://www.Facebook.com/accounts/login/?hl=en',
    icon: <IconFb />,
  },
  { path: 'https://web.telegram.org/k/', icon: <IconTelegarm /> },
  { path: 'https://in.linkedin.com/', icon: <IconLinkdin /> },
  {
    path: 'https://www.instagram.com/accounts/login/?hl=en',
    icon: <Iconinstgram />,
  },
]
export const footerLink = [
  {
    path: '#',
    pera: 'BLOG',
  },
  {
    path: '#',
    pera: 'DOCS',
  },
  {
    path: '#',
    pera: 'FAQ',
  },
  {
    path: '#',
    pera: 'TERMS OF USE',
  },
  {
    path: '#',
    pera: 'PRIVACY POLICY',
  },
]
