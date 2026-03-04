"use client";
// import Image from "next/image";
import Link from "next/link";
import useBodyClass from '@/components/useBodyClass'; // Adjust path as needed
import PageTitleWave from '@/components/PageTitleWave';

export default function AboutUsLiaisonPage() {
  useBodyClass('about');
  return (
    <>
      <div className="page-header">
        <div className="inner-header">
          <PageTitleWave />
          <div className="page-title">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-10">
                  <div className="theme-breadcrumb-box">
                    <h1>About Us</h1>

                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                          <Link href="/">
                            <i className="bi bi-house-door me-1" aria-hidden="true"></i>
                            Home
                          </Link>
                        </li>

                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          About Us
                        </li>
                      </ol>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container py-5">
        <div className="row justify-content-center text-center">
          
        </div>
      </section>
    </>
  );
}

// export default AboutUsLiaisonPage;