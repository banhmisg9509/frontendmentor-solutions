import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

// colors
// Green: hsl(75,94%,57%)
// White: hsl(0,0%,100%)
// Grey: hsl(0,0%,20%)
// Dark Grey: hsl(0,0%,12%)
// Off Black: hsl(0,0%,8%)

export default function Page() {
  const socialLinks: SocialLink[] = [
    {
      href: "#",
      text: "GitHub",
    },
    {
      href: "#",
      text: "Frontend Mentor",
    },
    {
      href: "#",
      text: "LinkedIn",
    },
    {
      href: "#",
      text: "Twitter",
    },
    {
      href: "#",
      text: "Instagram",
    },
  ];

  return (
    <main
      className={`${inter.className} min-h-screen bg-[hsl(0,0%,8%)] flex items-center justify-center p-6`}
    >
      <ProfileCard socialLinks={socialLinks} />
    </main>
  );
}

type SocialLink = {
  href: string;
  text: string;
};

type ProfileCardProps = {
  socialLinks: SocialLink[];
};

const ProfileCard = ({ socialLinks }: ProfileCardProps) => {
  return (
    <div className="max-w-96 flex flex-col items-center bg-[hsl(0,0%,12%)] p-10 rounded-xl">
      <Image
        src="/social-links-profile/assets/images/avatar-jessica.jpeg"
        alt="avatar-jessica"
        width={90}
        height={90}
        className="object-contain rounded-full"
      />
      <div className="text-center">
        <p className="text-[hsl(0,0%,100%)] text-2xl mt-6 mb-3 font-bold ">
          Jessica Randall
        </p>
        <p className="text-[hsl(75,94%,57%)] text-sm font-semibold">
          London, United Kingdom
        </p>
      </div>
      <p className="text-[hsl(0,0%,100%)] text-[13px] my-6">
        &quot;Front-end developer and avid reader.&quot;
      </p>
      <div className="flex flex-col gap-4">
        {socialLinks.map((socialLink) => (
          <Link key={socialLink.text} {...socialLink} />
        ))}
      </div>
    </div>
  );
};

type LinkProps = {
  href: string;
  text: string;
};
const Link = ({ href, text }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-white h-11 min-w-64 sm:w-80 inline-flex items-center justify-center rounded-lg bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,12%)] transition-all duration-200"
    >
      {text}
    </a>
  );
};
