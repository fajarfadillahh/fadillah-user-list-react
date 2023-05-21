import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pb-16 pt-32">
      <div className="container grid justify-items-center gap-8">
        <div className="max-w-2xl text-center">
          <h1 className="section-title pb-4 text-[36px]">Home Page</h1>
          <div className="grid gap-2">
            <p className="section-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
              beatae sint quam veritatis ex consequuntur laborum sit quod facere
              qui quidem, itaque ad obcaecati est dignissimos eos perferendis,
              nulla natus voluptatum ut cum! Alias repudiandae vel provident,
              unde ut eum numquam inventore sint culpa libero.
            </p>
            <p className="section-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
              beatae sint quam veritatis ex consequuntur laborum sit quod facere
              qui quidem, itaque ad obcaecati est dignissimos eos perferendis,
              nulla natus voluptatum ut cum.
            </p>
          </div>
        </div>

        <Link to="/" className="button inline-flex">
          See all users
        </Link>
      </div>
    </section>
  );
};

export default Hero;
