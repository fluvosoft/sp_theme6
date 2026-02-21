const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your video ID (e.g. বিট রুটের উপকারিতা)

export default function VideoSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="section-content">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 md:text-sm">
              ভিডিও
            </p>
            <h2 className="font-heading mt-1 text-2xl font-bold text-gray-800 md:text-3xl">
              বিট রুটের উপকারিতা
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              পুষ্টিবিদের পরামর্শ দেখুন
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl bg-black shadow-[var(--shadow-card)] ring-2 ring-gray-200/60">
            <div className="aspect-video w-full">
              <iframe
                title="বিট রুটের উপকারিতা"
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
