"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";
import { teamData } from "@/lib/data/teamData";

// const TEAM = [
//   { name: "Lydia Schaeffer", role: "Directrice", image: "https://picsum.photos/id/237/600/600" },
//   { name: "Noa Andrieux", role: "Directeur financier", image: "https://picsum.photos/id/238/600/600" },
//   { name: "Théo Faure", role: "Chef de projet", image: "https://picsum.photos/id/239/600/600" },
// ];

function TeamCard({ member }) {
  return (
    <div className="col-md-6 col-lg-6 mx-auto mb-4">
      <div className="team-card">
        
        <div className="team-content text-end">
          <h5> {member.name}</h5>
          <p>{member.designation}</p>
        </div>

        <div className="image">
          {/* <img src="https://liaisonbank.com/wp-content/uploads/2024/10/Mahadev.jpg" alt="team"> */}
           <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="300px"
            className="object-contain"
            priority={false}
        />
        </div>

      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <div className="row">
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Swiper
          modules={[A11y]}
          spaceBetween={16}
          slidesPerView={1.2}
          aria-label="Team members"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-2">
        {teamData.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}