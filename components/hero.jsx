"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {


  return (
    <section className="px-4 pt-40 pb-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
        FinesArc <br /> Your Financial Companion
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
          “Understand Your Money Like Never Before”
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        
        </div>
       
      </div>
    </section>
  );
};

export default HeroSection;
