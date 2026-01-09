import type { SVGProps } from "react";

const Diya = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0" />
    <path d="M12 20c-3.14 0-5.91-1.68-7.46-4.24.28-.4.59-.79.93-1.15C7.38 12.98 10.08 12 12 12s4.62.98 6.53 2.61c.34.36.65.75.93 1.15C17.91 18.32 15.14 20 12 20z" />
    <path d="M11 9c0-1.1.9-2 2-2s2 .9 2 2-.9 4-2 4-2-2.9-2-4zm1-3.23c-.3.12-.58.3-.81.53-.48.48-.77 1.13-.77 1.83 0 .7.29 1.35.77 1.83.48.48 1.13.77 1.83.77s1.35-.29 1.83-.77.77-1.13.77-1.83c0-.7-.29-1.35-.77-1.83-.23-.23-.51-.41-.81-.53l.02-1.77h-2l-.02 1.77z" fill="hsl(var(--primary))" />
  </svg>
);

const Mandala = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} fill="none" stroke="currentColor" strokeWidth="0.5">
      <defs>
        <path id="a" d="M50 50, 95 50 A 45 45 0 0 0 72.5 7.5 Z"></path>
      </defs>
      <use href="#a"></use>
      <use href="#a" transform="rotate(45 50 50)"></use>
      <use href="#a" transform="rotate(90 50 50)"></use>
      <use href="#a" transform="rotate(135 50 50)"></use>
      <use href="#a" transform="rotate(180 50 50)"></use>
      <use href="#a" transform="rotate(225 50 50)"></use>
      <use href="#a" transform="rotate(270 50 50)"></use>
      <use href="#a" transform="rotate(315 50 50)"></use>
      <circle cx="50" cy="50" r="45"></circle>
      <circle cx="50" cy="50" r="35"></circle>
      <circle cx="50" cy="50" r="25"></circle>
      <defs>
        <path id="b" d="M 50 50, 50 5 A 45 45 0 0 1 95 50 Z"></path>
      </defs>
      <use href="#b" transform="rotate(22.5 50 50)" opacity="0.5"></use>
      <use href="#b" transform="rotate(67.5 50 50)" opacity="0.5"></use>
      <use href="#b" transform="rotate(112.5 50 50)" opacity="0.5"></use>
      <use href="#b" transform="rotate(157.5 50 50)" opacity="0.5"></use>
      <use href="#b" transform="rotate(202.5 50 50)" opacity="0.5"></use>
      <use href="#b" transform="rotate(247.5 50 50)" opacity="0.5"></use>
      <use href="#b" transform="rotate(292.5 50 50)" opacity="0.5"></use>
      <use href="#b" transform="rotate(337.5 50 50)" opacity="0.5"></use>
    </svg>
  );

const Gift = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
)

export const Icons = {
  diya: Diya,
  mandala: Mandala,
  gift: Gift
};
