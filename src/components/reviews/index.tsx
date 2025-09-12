import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const IMAGES = [
  "/assets/avatars/avatar-1.jpg",
  "/assets/avatars/avatar-2.jpg",
  "/assets/avatars/avatar-3.jpg",
];

const TOTAL_REVIEWS = 12;

export function Reviews() {
  return (
    <div className="flex rounded-full bg-white p-1 px-2">
      <div className="flex items-center">
        {IMAGES.map((image, index) => (
          <Avatar
            key={image}
            className={`h-8 w-8 border-2 border-white ${
              index !== 0 ? "-ml-4" : ""
            }`}
          >
            <AvatarImage src={image} alt={`Avatar ${index + 1}`} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}

        {/* +X More */}
        <Avatar className="-ml-4 h-10 w-10 border-2 border-white bg-gray-100 text-gray-600">
          <AvatarFallback className="text-sm font-medium">
            +{TOTAL_REVIEWS - IMAGES.length}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center justify-center px-2">
        <span className="text-sm font-bold">4.8 / 5</span>
      </div>
    </div>
  );
}
