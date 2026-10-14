import Image from "next/image";

type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "dark" }: LogoProps) {
  return (
    <span className={tone === "light" ? "inline-flex rounded-md bg-white px-2.5 py-1.5" : "inline-flex"}>
      <Image
        src="/images/logo-wide.jpeg"
        alt="Land CoPilot"
        width={1280}
        height={371}
        priority={tone === "dark"}
        className="h-10 w-auto"
      />
    </span>
  );
}
