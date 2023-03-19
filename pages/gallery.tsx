import { Gallery as GalleryComponent } from "../components/gallery";
import { GalleryLayout } from "../components/common/layouts";
import { NextPageWithLayout } from "./_app";
const Gallery: NextPageWithLayout = () => <GalleryComponent />;

Gallery.getLayout = (page) => {
  return <GalleryLayout>{page}</GalleryLayout>;
};

export default Gallery;
