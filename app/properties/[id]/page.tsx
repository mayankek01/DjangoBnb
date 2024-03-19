import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/image.png"
          className="object-cover w-full h-full"
          alt="beach house"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 Guest - 2-bedroom - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image src="/image.png" alt="profile" width={50} height={50} />
            <p>
              <strong>Mayank Ekaghara</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Amet commodo excepteur cupidatat qui. Amet commodo excepteur
            cupidatat qui.Amet commodo excepteur cupidatat qui.Amet commodo
            excepteur cupidatat qui
          </p>
        </div>
        <ReservationSideBar />
      </div>
    </main>
  );
};

export default Page;
