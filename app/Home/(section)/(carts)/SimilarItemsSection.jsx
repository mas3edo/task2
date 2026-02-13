import SimilarItemsCarousel from "./SimilarItemsCarousel"; // تأكد من المسار
import shirt from "../../../images/shirt.png"; // تأكد من المسار
import shirt2 from "../../../images/shirt2.png"; // تأكد من المسار
import tring from "../../../images/tring.png"; // تأكد من المسار
import dress from "../../../images/dress.png"; // تأكد من المسار

const similarProducts = [
  {
    id: 1,
    image: dress,
    category: "Dresses",
    rating: 4.5,
    reviews: 2910,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Black",
    price: "AED 900",
    colors: ["#C08B84", "#000000", "#F0F0F0"],
    moreColors: 2,
    discount: null,
  },
  {
    id: 2,
    image: shirt2,
    category: "T-Shirts",
    rating: 4.5,
    reviews: 210,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With White",
    price: "AED 900",
    oldPrice: "AED 1300",
    colors: ["#C08B84", "#000000"],
    moreColors: 2,
    discount: "25% OFF",
  },
  {
    id: 3,
    image: shirt,
    category: "Hoodies",
    rating: 4.8,
    reviews: 1500,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Grey",
    price: "AED 900",
    colors: ["#52525B", "#000000", "#F0F0F0"],
    moreColors: 2,
    discount: null,
  },
  {
    id: 4,
    image: tring, // بيجاما
    category: "Pajamas",
    rating: 4.5,
    reviews: 2910,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Brown",
    price: "AED 900",
    oldPrice: "AED 1300",
    colors: ["#C08B84", "#000000"],
    moreColors: 2,
    discount: "25% OFF",
  },
  {
    id: 5,
    image: tring,
    category: "Pajamas",
    rating: 4.5,
    reviews: 500,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: "AED 900",
    oldPrice: "AED 1300",
    colors: ["#000000"],
    moreColors: 0,
    discount: "25% OFF",
  },
];

export default function SimilarItemsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 font-sans bg-white">
      {/* Header (Server Side Rendering) */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
          Similar Items
          {/* الخط الصغير اللي تحت العنوان */}
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C08B84] rounded-full"></span>
        </h2>
      </div>

      {/* Carousel (Client Side Rendering) */}
      {/* هنا بنمرر الداتا للمكون التفاعلي */}
      <SimilarItemsCarousel products={similarProducts} />
    </section>
  );
}
