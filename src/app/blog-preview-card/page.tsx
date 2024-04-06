import Image from "next/image";
import { Figtree } from "next/font/google";

const figtree = Figtree({ weight: ["500", "800"], subsets: ["latin"] });

// colors
// yellow: hsl(47,88%,63%)
// grey  : hsl(0,0%,50%)

export default function Page() {
  return (
    <main
      className={`${figtree.className} bg-[hsl(47,88%,63%)] min-h-screen flex items-center justify-center p-6`}
    >
      <BlogPreviewCard />
    </main>
  );
}

const BlogPreviewCard = () => {
  return (
    <div className="max-w-96 flex flex-col gap-6 bg-white p-6 rounded-[20px] border border-black shadow-[8px_8px] hover:shadow-[16px_16px] transition-shadow duration-300">
      <Image
        src="/blog-preview-card/assets/images/illustration-article.svg"
        alt="illustration-article"
        width={0}
        height={0}
        className="w-full rounded-[10px]"
      />
      <div className="flex flex-col gap-3">
        <span className="text-xs sm:text-sm py-1 px-3 bg-[hsl(47,88%,63%)] w-fit rounded font-extrabold">
          Learning
        </span>
        <span className="text-xs sm:text-sm">Published 21 Dec 2023</span>
        <a href="#">
          <p className="text-xl sm:text-2xl font-extrabold hover:text-[hsl(47,88%,63%)] transition-colors duration-300">
            HTML & CSS foundations
          </p>
        </a>
        <p className="text-sm sm:text-base min-w-full w-0 text-[hsl(0,0%,50%)]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/blog-preview-card/assets/images/image-avatar.webp"
          alt="avatar"
          width={32}
          height={32}
        />
        <span className="text-sm font-extrabold">Greg Hooper</span>
      </div>
    </div>
  );
};

/* https://stackoverflow.com/questions/57599369/how-to-prevent-childs-content-from-stretching-parents-width */
