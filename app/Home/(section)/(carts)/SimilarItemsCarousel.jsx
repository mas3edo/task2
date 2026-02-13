"use client";
import { useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

// التعديل هنا: ضفنا = [] عشان لو الداتا مجاتش، يعتبرها مصفوفة فاضية وميضربش
export default function SimilarItemsCarousel({ products = [] }) {
  const scrollRef = useRef(null);

  // حماية إضافية: لو المصفوفة فاضية، ميرسمش حاجة أو يرسم رسالة
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        No similar items found
      </div>
    );
  }

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Container السلايدر */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // إخفاء السكرول بار
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] max-w-[280px] flex-shrink-0 snap-start group cursor-pointer bg-white rounded-2xl p-3 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
          >
            {/* صورة المنتج */}
            <div className="relative aspect-square w-full rounded-xl bg-[#F9F9F9] overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />

              {/* التاج (25% OFF) */}
              {item.discount && (
                <span className="absolute top-3 left-3 bg-white text-[10px] font-bold px-2 py-1 rounded text-gray-500 border border-gray-100 shadow-sm">
                  {item.discount}
                </span>
              )}

              {/* أيقونات التفاعل */}
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="bg-white p-2 rounded-xl shadow-sm hover:text-[#C08B84] text-gray-400 transition-colors border border-gray-100">
                  <Icon icon="ph:bag-simple" className="w-4 h-4" />
                </button>
                <button className="bg-white p-2 rounded-xl shadow-sm hover:text-[#C08B84] text-gray-400 transition-colors border border-gray-100">
                  <Icon icon="ph:heart" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* تفاصيل المنتج */}
            <div className="space-y-2 px-1">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{item.category}</span>
                <div className="flex items-center gap-1">
                  <Icon
                    icon="ph:star-fill"
                    className="text-[#C08B84] w-3 h-3"
                  />
                  <span className="text-gray-900 font-bold">{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-relaxed min-h-[40px]">
                {item.title}
              </h3>

              <div className="flex items-center justify-between mt-2 pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-gray-900">
                    {item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-xs text-gray-400 line-through decoration-gray-400">
                      {item.oldPrice}
                    </span>
                  )}
                </div>

                {/* ألوان المنتج */}
                <div className="flex items-center -space-x-2">
                  {item.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white ring-1 ring-gray-200"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                  {item.moreColors > 0 && (
                    <span className="text-[10px] text-gray-500 pl-3">
                      +{item.moreColors}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* أزرار التحكم (Centered Navigation) */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full bg-[#C08B84] text-white flex items-center justify-center shadow-lg shadow-[#C08B84]/30 hover:bg-[#a87670] transition-all"
        >
          <Icon icon="mdi:chevron-left" className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full bg-[#C08B84] text-white flex items-center justify-center shadow-lg shadow-[#C08B84]/30 hover:bg-[#a87670] transition-all"
        >
          <Icon icon="mdi:chevron-right" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
