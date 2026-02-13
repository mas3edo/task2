import React from "react";

export default function RatingsSection() {
  // بيانات التقييمات زي الصورة
  const ratings = [
    { star: 5, percentage: 67 },
    { star: 4, percentage: 15 },
    { star: 3, percentage: 6 },
    { star: 2, percentage: 3 },
    { star: 1, percentage: 9 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white font-sans">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 relative inline-block">
          Rating & Reviews
          {/* الخط الصغير اللي تحت الكلمة */}
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#C08B84] rounded-full"></span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* 1. الجزء الأيسر: الرقم الكبير */}
        <div className="flex items-baseline">
          <span className="text-[7rem] leading-none font-[500] text-black tracking-tighter">
            4,5
          </span>
          <span className="text-3xl text-gray-300 ml-2 font-light">/5</span>
        </div>

        {/* 2. الجزء الأوسط: أشرطة التقدم */}
        <div className="flex-1 w-full max-w-lg">
          {ratings.map((item) => (
            <div key={item.star} className="flex items-center gap-3 mb-3">
              {/* النجمة والرقم */}
              <div className="flex items-center gap-1 min-w-7.5">
                <svg
                  className="w-4 h-4 text-[#C08B84] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="text-gray-600 font-medium text-sm">
                  {item.star}
                </span>
              </div>

              {/* شريط التقدم */}
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C08B84] rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>

              {/* النسبة المئوية */}
              <span className="text-sm text-gray-500 font-medium w-10 text-right">
                %{item.percentage}
              </span>
            </div>
          ))}
        </div>

        {/* 3. الجزء الأيمن: إجمالي التقييمات والزر */}
        <div className="text-center lg:text-right min-w-37.5">
          <p className="text-gray-500 text-sm mb-1">Total Reviews</p>
          <h3 className="text-5xl font-bold text-black mb-6">3.0K</h3>

          <button className="bg-[#C08B84] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#a87670] transition-colors flex items-center justify-center gap-2 w-full lg:w-auto text-sm font-semibold">
            Add Comment
            <span className="bg-white/20 rounded-full p-1 w-5 h-5 flex items-center justify-center">
              {/* أيقونة النقاط الثلاثة */}
              <svg
                className="w-3 h-3 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
