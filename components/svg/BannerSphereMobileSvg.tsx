interface Props {
  className?: string
}

export default function BannerSphereMobileSvg(props: Props) {
  return (
    <svg className={props.className} width="90" height="152" viewBox="0 0 90 152" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="72.9465" cy="75.7739" rx="72.9465" ry="75.7739" fill="url(#paint0_radial_5_151)" />
      <defs>
        <radialGradient id="paint0_radial_5_151" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.3274 48.631) rotate(52.7075) scale(107.33 103.326)">
          <stop stop-color="white" />
          <stop offset="0.1764" stop-color="#CBE6EB" />
          <stop offset="0.548576" stop-color="#7BBECD" />
          <stop offset="0.751735" stop-color="#3A9EB4" />
          <stop offset="0.939738" stop-color="#00829E" />
        </radialGradient>
      </defs>
    </svg>
  )
}

