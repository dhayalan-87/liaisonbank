// import Image from "next/image";
import ImageWave from '@/components/ImageWave';
import ExpertImg from '@/components/expertImg';
import { services } from "@/static/servicesData";

export default function ServiceContent({ activeIndex }) {
    const service = services[activeIndex];

    return (
        <div className="service-content-panel">
            <div key={activeIndex} className="content-animate">
                <div className="content-box">
                    <h3>{service.title}</h3>
                    <p>{service.content}</p>
                </div>
            </div>
            <div className="image-box d-flex justify-content-end align-items-center">
                <div className="d-flex justify-content-end">
                    <div className="shape-img-bg">
                        <ExpertImg />
                        <div className="img-bg-shape" aria-hidden="true">
                            <ImageWave />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}