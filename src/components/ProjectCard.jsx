import Carousel from "./Carousel";
export default function ProjectCard({
  imgSrc,
  title,
  description,
  viewUrl,
  githubUrl,
}) {
  return (
    <div
      className="bg-stone-50 p-5 flex flex-col justify-between rounded-3xl text-center gap-5 shadow-md 
                 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] 
                 transition-transform transition-shadow duration-300 ease-out"
    >
      {imgSrc && (
        // <img
        //   src={imgSrc}
        //   alt={title}
        //   className="w-full h-48 object-cover rounded-2xl"
        // />
        <Carousel images={imgSrc} />
      )}
      <div className="flex-grow">
        <h3 className="font-bold text-lg sm:text-2xl mb-2">{title}</h3>
        <p className="text-stone-600 text-sm sm:text-base">{description}</p>
      </div>
      <div className="flex justify-center gap-4">
        {viewUrl && (
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <div className="bg-stone-900 px-3 py-2 rounded-3xl text-stone-50 text-center hover:-translate-y-1  font-bold transition">
              View
            </div>
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <div className=" px-3 py-2 rounded-3xl text-stone-900 border-1 border-stone-900 hover:-translate-y-1  text-center font-bold transition">
              GitHub
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
