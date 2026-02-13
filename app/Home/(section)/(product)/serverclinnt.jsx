import ProductDetails from "./ProductDetails";

import red from "../../../images/red.png";
import blue from "../../../images/blue.png";
import white from "../../../images/white.png";
import black from "../../../images/black.png";
import olive from "../../../images/olive.png";

const productImages = [
  {
    key: "white",
    name: "White",
    src: white,
    swatch: "#E5E7EB",
    title: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With White",
  },
  {
    key: "red",
    name: "Red",
    src: red,
    swatch: "#B91C1C",
    title: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Red",
  },
  {
    key: "blue",
    name: "Blue",
    src: blue,
    swatch: "#7AA6D6",
    title: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue",
  },
  {
    key: "olive",
    name: "Olive",
    src: olive,
    swatch: "#8B7A3A",
    title: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Olive",
  },
  {
    key: "black",
    name: "Black",
    src: black,
    swatch: "#52525B",
    title: "J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Black",
  },
];

export default function ServerClinnt() {
  return (
    <ProductDetails
      productImages={productImages}
      price={300}
      oldPrice={360}
      category="T-shirt"
      taxNote="This price is exclusive of taxes."
      description={
        "Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy"
      }
      iconColor="#BE968E"
      typeOptions={["Cotton", "Polyester", "Silk"]}
      sizeOptions={["L", "M", "S"]}
    />
  );
}
