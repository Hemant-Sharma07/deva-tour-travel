const TravelCard = ({ title, description, image, tag }) => {
  return (
    <article className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-4">
        <h3 className="text-base sm:text-lg font-semibold text-heading line-clamp-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-body line-clamp-3">
          {description}
        </p>
        <div className="mt-auto pt-1 flex items-center justify-between text-xs text-gray-400">
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            Popular stop
          </span>
          <span className="text-red-500 font-semibold group-hover:translate-x-0.5 transition-transform">
            View route →
          </span>
        </div>
      </div>
    </article>
  );
};

export default TravelCard;
