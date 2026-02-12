"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import BreadcrumbBar from "./head";
import red from "../../images/red.png";
import blue from "../../images/blue.png";
import white from "../../images/white.png";
import black from "../../images/black.png";
import olive from "../../images/olive.png";

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

export default function ProductDetails() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [type, setType] = useState("Cotton");
  const [size, setSize] = useState("2XL");
  const [qty, setQty] = useState(1);

  const safeIndex = Math.min(
    Math.max(currentIndex, 0),
    Math.max(productImages.length - 1, 0),
  );
  const activeProduct = productImages[safeIndex];
  const price = 300;
  const oldPrice = 360;

  const thumbs = useMemo(() => {
    if (productImages.length <= 3) return productImages;

    const first = productImages[0];
    const last = productImages[productImages.length - 1];
    const active = productImages[safeIndex];
    const fallbackMiddle = productImages[1];

    const middle =
      active.key === first.key || active.key === last.key
        ? fallbackMiddle
        : active;
    return [first, middle, last];
  }, [safeIndex]);

  const remainingCount = Math.max(0, productImages.length - 3);

  const isFirst = safeIndex === 0;
  const isLast = safeIndex === productImages.length - 1;

  function prevImage() {
    setCurrentIndex((idx) => Math.max(0, idx - 1));
  }

  function nextImage() {
    setCurrentIndex((idx) => Math.min(productImages.length - 1, idx + 1));
  }

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="-mt-6 mb-6">
          <BreadcrumbBar />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: Gallery */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] bg-zinc-100">
              <div className="pointer-events-none absolute left-8 right-8 top-4 flex gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={
                      "h-1 flex-1 rounded-full " +
                      (i === 1 ? "bg-white/80" : "bg-white/35")
                    }
                  />
                ))}
              </div>

              <div className="relative aspect-4/5 w-full">
                <Image
                  src={activeProduct.src}
                  alt={activeProduct.name}
                  fill
                  priority
                  className="object-contain p-10"
                />
              </div>

              <button
                type="button"
                aria-label="Previous image"
                onClick={prevImage}
                disabled={isFirst}
                className={
                  "absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#C08B84]/70 text-white " +
                  (isFirst
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-zinc-500/60")
                }
              >
                <Icon icon="mdi:chevron-left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={nextImage}
                disabled={isLast}
                className={
                  "absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#C08B84]/70 text-white " +
                  (isLast
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#a87670]")
                }
              >
                <Icon icon="mdi:chevron-right" className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-4">
              {thumbs.map((img, idx) => {
                const isSelected = img.key === activeProduct.key;
                const showOverlay = idx === 2 && remainingCount > 0;
                return (
                  <button
                    key={img.key}
                    type="button"
                    onClick={() => {
                      const next = productImages.findIndex(
                        (p) => p.key === img.key,
                      );
                      setCurrentIndex(next === -1 ? 0 : next);
                    }}
                    className={
                      "relative overflow-hidden rounded-2xl bg-zinc-100 " +
                      (isSelected
                        ? "ring-2 ring-[#C08B84]"
                        : "ring-1 ring-zinc-200")
                    }
                    aria-label={`Select ${img.name}`}
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={img.src}
                        alt={img.name}
                        fill
                        className="object-contain p-5"
                      />
                    </div>

                    {showOverlay ? (
                      <div className="absolute inset-0 grid place-items-center bg-zinc-900/60">
                        <span className="text-2xl font-bold text-white">
                          +{remainingCount}
                        </span>
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Details */}
          <div className="pt-1">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex rounded-full border border-[#C08B84]/30 bg-white px-3 py-1 text-xs font-semibold text-[#C08B84]">
                T-shirt
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Add to bag"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                >
                  <Icon icon="ph:bag-simple" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Add to favorites"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                >
                  <Icon icon="ph:heart" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <h1 className="mt-4 text-2xl font-semibold text-zinc-900 md:text-3xl">
              {activeProduct.title}
            </h1>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-xl font-semibold text-zinc-900">
                ${price.toFixed(2)}
              </span>
              <span className="text-sm text-zinc-400 line-through">
                ${oldPrice.toFixed(2)}
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              This price is exclusive of taxes.
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-600">
              Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet, diam nonummy
            </p>

            <div className="mt-6 h-px w-full bg-zinc-100" />

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500">
                  Type
                </label>
                <div className="relative mt-2">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none focus:border-zinc-300"
                  >
                    <option value="Cotton">Cotton</option>
                    <option value="Polyester">Polyester</option>
                  </select>
                  <Icon
                    icon="mdi:chevron-down"
                    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-500">
                  Size
                </label>
                <div className="relative mt-2">
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none focus:border-zinc-300"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                  </select>
                  <Icon
                    icon="mdi:chevron-down"
                    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-zinc-900">Colors</h2>
              <div className="mt-4 flex items-center gap-4">
                {productImages.map((p) => {
                  const selected = p.key === activeProduct.key;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => {
                        const next = productImages.findIndex(
                          (x) => x.key === p.key,
                        );
                        setCurrentIndex(next === -1 ? 0 : next);
                      }}
                      aria-label={`Color ${p.name}`}
                      className={
                        "inline-flex h-11 w-11 items-center justify-center rounded-full " +
                        (selected
                          ? "ring-2 ring-zinc-900"
                          : "ring-1 ring-zinc-200")
                      }
                    >
                      <span
                        className="h-7 w-7 rounded-full"
                        style={{ backgroundColor: p.swatch }}
                      />
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-center text-xs text-zinc-600">
                {activeProduct.name}
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-zinc-900">Quantity</span>
                <span className="text-zinc-400">
                  (${price.toFixed(2)} for Piece)
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center overflow-hidden rounded-xl border border-zinc-200 bg-white">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-11 w-11 text-zinc-500 hover:bg-zinc-50"
                  >
                    <Icon icon="mdi:minus" className="mx-auto h-5 w-5" />
                  </button>
                  <div className="h-11 w-14 grid place-items-center text-sm font-semibold text-zinc-800">
                    {String(qty).padStart(2, "0")}
                  </div>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="h-11 w-11 text-zinc-500 hover:bg-zinc-50"
                  >
                    <Icon icon="mdi:plus" className="mx-auto h-5 w-5" />
                  </button>
                </div>

                <div className="text-xl font-semibold text-zinc-900">
                  ${(price * qty).toFixed(2)}
                </div>

                <button
                  type="button"
                  className="ml-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#C08B84] px-10 text-sm font-semibold text-white shadow-lg shadow-[#C08B84]/20 hover:bg-[#a87670]"
                >
                  <span>Add To Cart</span>
                  <Icon
                    icon="mdi:lock-outline"
                    className="h-5 w-5 opacity-90"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
