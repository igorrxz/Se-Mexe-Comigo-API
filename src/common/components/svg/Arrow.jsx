export default function Arrow({ width = 17, height = 30, ...props }) {
  return (
    <svg
      {...props}
      width="17"
      height="30"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2L2 15L15 28"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
