import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      priority
      src="/assets/hederson.png"
      width={50}
      height={50}
      className="rounded-full"
      alt="logo"
    />
  );
};
