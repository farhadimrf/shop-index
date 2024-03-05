import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

type GalleryTabProps = {
   image: ImageType;
};
const GalleryTab = ({ image }: GalleryTabProps) => {
   return (
      <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
         {({ selected }) => (
            <div className="">
               <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                  <Image alt="" fill src={image.url} className="object-cover object-center" />
               </span>
               <span
                  className={cn(
                     "absolute inset-0 ring-2 ring-offset-2 rounded-md",
                     selected ? "ring-black" : "ring-transparent"
                  )}
               />
            </div>
         )}
      </Tab>
   );
};

export default GalleryTab;
