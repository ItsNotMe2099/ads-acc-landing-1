interface Props {
  className?: string
}

export default function FooterSphereMobileSvg(props: Props) {
  return (
    <svg className={props.className} width="123" height="307" viewBox="0 0 123 307" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="-0.303902" cy="89.0176" rx="85.6961" ry="89.0176" fill="url(#paint0_radial_5_252)" />
      <g filter="url(#filter0_f_5_252)">
        <ellipse cx="-0.303899" cy="219.768" rx="68.8391" ry="22.053" transform="rotate(-17.5 -0.303899 219.768)" fill="black" fill-opacity="0.76" />
      </g>
      <defs>
        <filter id="filter0_f_5_252" x="-123.296" y="133.258" width="245.984" height="173.021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="28.5" result="effect1_foregroundBlur_5_252" />
        </filter>
        <radialGradient id="paint0_radial_5_252" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-26.8763 57.1307) rotate(52.7075) scale(126.09 121.385)">
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

