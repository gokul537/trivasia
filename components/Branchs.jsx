import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Branches() {
  const branches = [
    {
      title: "Namakkal",
      phone: "+91 9629557788, 8940557788",
      email: "admission@trivasia.com",
      address:
        "Namakkal, Tamil Nadu, India"
    },
    {
      title: "Coimbatore",
      phone: "+91 9629557788, 8940557788",
      email: "admission@trivasia.com",
      address:
        "New No: 19, First Floor, New Scheme Road, Pappanaayakkan Palayam, Coimbatore, Tamil Nadu - 641 037",
    },
    {
      title: "Kumbakonam",
      phone: "+91 9629557788, 8940557788",
      email: "admission@trivasia.com",
      address:
        "No: 11 b, Chakrapani Thirumanjana veethi, Massvil Complex, 1st Floor, Kumbakonam, Tamil Nadu - 612101",
    },
    // {
    //   title: "Madurai",
    //   phone: "+91 9629557788, 8940557788",
    //   email: "admission@trivasia.com",
    //   address:
    //     "No: 180C, 1st Floor, Kamarajar Salai, Near Chamber of Commerce Building, Madurai, Tamil Nadu - 625009",
    // },
  ];

  return (
    <section className="bg-white py-10 px-4 md:px-8 lg:px-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <p className="text-red-500 uppercase tracking-widest font-medium">
          Our Branches
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Reach our <span className="text-red-500">Location</span>
        </h2>
      </div>

      {/* Karur Head Office */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-left flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-red-500">
          Karur (Head Office)
        </h3>

        {/* Phone */}
        <div className="flex items-start gap-2">
          <Phone className="w-5 h-5 text-red-500 mt-1" />
          <span className="text-gray-700">+91 9629557788</span>
        </div>

        {/* Email */}
        <div className="flex items-start gap-2">
          <Mail className="w-5 h-5 text-red-500 mt-1" />
          <span className="text-gray-700 break-all">
            admission@trivasia.com
          </span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
          <span className="text-gray-700 text-sm leading-relaxed break-words">
            No.13, Poraniyar Valaagam, Karur, Tamil Nadu - 639 001
          </span>
        </div>
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {branches.map((branch) => (
          <div
            key={branch.title}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-left"
          >
            <h3 className="text-lg font-bold mb-4 text-red-500">
              {branch.title}
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-2 mb-2">
              <Phone className="w-5 h-5 text-red-500 mt-1" />
              <span className="text-gray-700">{branch.phone}</span>
            </div>

            {/* Email */}
            <div className="flex items-start gap-2 mb-2">
              <Mail className="w-5 h-5 text-red-500 mt-1" />
              <span className="text-gray-700 break-all">{branch.email}</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm leading-relaxed break-words">
                {branch.address}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
