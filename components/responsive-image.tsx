import type { ImgHTMLAttributes } from "react"

type ResponsiveImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  sizes: string
  responsiveWidths?: readonly number[]
}

function responsiveSourceSet(src: string, widths: readonly number[]) {
  const extensionIndex = src.lastIndexOf(".")

  if (extensionIndex === -1) {
    return null
  }

  const basename = src.slice(0, extensionIndex)
  return widths.map((width) => `${basename}-${width}.avif ${width}w`).join(", ")
}

export function ResponsiveImage({
  src,
  alt = "",
  sizes,
  responsiveWidths = [480, 960],
  ...props
}: ResponsiveImageProps) {
  const sourceSet = responsiveSourceSet(src, responsiveWidths)

  return (
    <picture className="contents">
      {sourceSet ? <source type="image/avif" srcSet={sourceSet} sizes={sizes} /> : null}
      <img src={src} alt={alt} sizes={sizes} {...props} />
    </picture>
  )
}
