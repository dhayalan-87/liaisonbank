"use client";

import Image from "next/image";
import rightsideBanner from "@/public/hero-business.png"

export default function HeroSection() {


    return (
        <section className="hero-section">

            <div className="hero-grid">
                {/* LEFT CONTENT */}
                <div className="hero-content" data-aos="fade-right">

                    <h1>Trust, Compliance, Excellence</h1>



                    <div className="hero-buttons">

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="hero-image" data-aos="fade-left">

                    <Image
                        src={rightsideBanner}
                        width={600}
                        height={500}
                        alt="Business Services"
                        priority
                    />

                </div>

            </div>
        </section>
    );
}