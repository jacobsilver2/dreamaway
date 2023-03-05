import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

const NextJsImage = (image, offset, rect) => {
  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height)
  );

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={image}
        loading="eager"
        placeholder="blur"
        draggable={false}
        sizes={
          typeof window !== "undefined"
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  );
};

export const LightboxWrapper = ({ images }: { images: any[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={images}
      render={{ slide: NextJsImage }}
    />
  );
};
