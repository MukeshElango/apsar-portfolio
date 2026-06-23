const paths = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
  download: <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.8 7.2h.01" />
    </>
  ),
  linkedin: <path d="M7 10v8M7 7v.01M11 18v-8M11 13c0-2 1.3-3.2 3-3.2s3 1.2 3 3.4V18" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  mapPin: <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11zM12 10.5h.01" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  phone: <path d="M7 4l3 3-2 2c1 2.2 2.8 4 5 5l2-2 3 3-2 4c-6.5-.4-11.6-5.5-12-12l3-3z" />,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />,
  whatsapp: (
    <>
      <path d="M5.1 19 6 15.8A7.2 7.2 0 1 1 8.8 18l-3.7 1z" />
      <path d="M9.3 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c-.1.2-.1.3 0 .5.4.8 1.2 1.6 2.1 2 .2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.6-.1.9-.7 1.6-1.6 1.6-1.5 0-3.4-.9-4.8-2.2-1.4-1.4-2.4-3.3-2.4-4.6 0-.3.2-.5.5-.6z" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6 6 18" />,
};

export default function Icon({ name, size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      {paths[name]}
    </svg>
  );
}
