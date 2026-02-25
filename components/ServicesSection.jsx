"use client";

import { useState } from "react";
import ServiceList from "@/components/ServicesSection/ServiceList";
import ServiceContent from "@/components/ServicesSection/ServiceContent";

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <ServiceList
                activeIndex={activeIndex}
                onChange={setActiveIndex}
            />
            <ServiceContent activeIndex={activeIndex} />
        </>
    );
}