import { ArrowRight } from "lucide-react";

const RightCard = ({ user, id }) => {
  return (
    <div className="shrink-0 h-full w-80 rounded-4xl overflow-hidden relative group cursor-pointer hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ring-1 ring-white/20">
      <img
        className=" h-full w-full object-cover object-center"
        src={user.img}
        alt=""
      />

      <div className="absolute top-0 left-0 p-6 inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-between">
        <h2 className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
          {id}
        </h2>

        <div>
          <div className="mb-7">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus maiores deserunt exercitationem sint suscipit?
            </p>
          </div>
          <div className="text-white flex justify-between items-center translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button
              style={{ background: user.color }}
              className="rounded-4xl px-7 py-1 text-lg tracking-wider cursor-pointer font-semibold"
            >
              {user.tag}
            </button>
            <button
              style={{ background: user.color }}
              className=" rounded-full p-2 text-lg tracking-wider cursor-pointer"
            >
              <ArrowRight strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
