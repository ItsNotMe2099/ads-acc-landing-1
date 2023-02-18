interface Props {
  className?: string
}

export default function BannerSphereSmSvg(props: Props) {
  return (
    <svg className={props.className} width="196" height="163" viewBox="0 0 196 163" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_1_33)">
        <ellipse cx="97.8071" cy="87.2479" rx="42.0865" ry="13.4826" transform="rotate(-17.5 97.8071 87.2479)" fill="black" fill-opacity="0.76" />
      </g>
      <ellipse cx="65.3924" cy="54.4231" rx="52.3924" ry="54.4231" fill="url(#paint0_radial_1_33)" />
      <defs>
        <filter id="filter0_f_1_33" x="0.461304" y="12.2061" width="194.692" height="150.084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="28.5" result="effect1_foregroundBlur_1_33" />
        </filter>
        <radialGradient id="paint0_radial_1_33" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.1467 34.9283) rotate(52.7075) scale(77.088 74.2115)">
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

