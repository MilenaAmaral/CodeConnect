// Ícones simples em SVG para o menu. aria-hidden: o texto do link já descreve a ação.
const paths = {
  feed: 'M6 2h9l5 5v15H6zM14 2v6h6M9 13h8M9 17h8',
  profile: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  about: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-5M12 8h.01',
  logout: 'M10 4H5v16h5M15 8l4 4-4 4M19 12H9',
}

function NavIcon({ name }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}

export default NavIcon
