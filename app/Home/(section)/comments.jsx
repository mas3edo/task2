import React from "react";

export default function CommentsList() {
  // بيانات وهمية مطابقة للصورة
  const comments = [
    {
      id: 1,
      name: "Alex Daewn",
      date: "4 months ago",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 2,
      name: "Alex Daewn",
      date: "4 months ago",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 3,
      name: "Alex Daewn",
      date: "4 months ago",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 4,
      name: "Alex Daewn",
      date: "4 months ago",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
  ];

  // دالة لرسم النجوم (ممتلئة وفارغة)
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-[#C08B84]" : "text-gray-200"} fill-current`}
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 pb-12 bg-white font-sans">
      {/* قائمة التعليقات */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-gray-100 pb-8 last:border-0"
          >
            {/* رأس التعليق: الاسم + النجوم + التاريخ */}
            <div className="flex flex-wrap justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <h4 className="font-bold text-gray-900 text-lg">
                  {comment.name}
                </h4>
                <div className="flex gap-1">{renderStars(comment.rating)}</div>
              </div>
              <span className="text-gray-400 text-xs">{comment.date}</span>
            </div>

            {/* نص التعليق */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {comment.text}
            </p>
          </div>
        ))}
      </div>

      {/* زر عرض المزيد */}
      <div className="mt-10 text-center">
        <button className="bg-[#F4F5F7] text-[#C08B84] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
          View More Comments
        </button>
      </div>
    </div>
  );
}
