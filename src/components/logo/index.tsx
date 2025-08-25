import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      priority
      src="/assets/hederson.png"
      width={60}
      height={60}
      alt="logo"
    />
  );
};
