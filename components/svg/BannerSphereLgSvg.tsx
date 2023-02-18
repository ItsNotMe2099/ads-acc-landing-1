interface Props {
  className?: string
}

export default function BannerSphereLgSvg(props: Props) {
  return (
    <svg className={props.className} width="226" height="200" viewBox="0 0 226 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_1_17)">
        <ellipse cx="114.391" cy="117.683" rx="56.7678" ry="18.1859" transform="rotate(-17.5 114.391 117.683)" fill="black" fill-opacity="0.76" />
      </g>
      <ellipse cx="70.6688" cy="73.4079" rx="70.6688" ry="73.4079" fill="url(#paint0_radial_1_17)" />
      <defs>
        <filter id="filter0_f_1_17" x="2.97099" y="36.3477" width="222.84" height="162.671" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="28.5" result="effect1_foregroundBlur_1_17" />
        </filter>
        <radialGradient id="paint0_radial_1_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.756 47.1125) rotate(52.7075) scale(103.979 100.099)">
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

