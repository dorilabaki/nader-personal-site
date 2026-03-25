"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Disable smooth scroll to let GSAP handle things
    document.documentElement.style.scrollBehavior = "auto";

    const ctx = gsap.context(() => {
      // ── Hero parallax: image drifts up as you scroll ──
      gsap.to("[data-hero-image]", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Hero content fades out on scroll ──
      gsap.to("[data-hero-content]", {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "60% top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Stats: count up animation ──
      document.querySelectorAll("[data-stat-value]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Section headers: slide in from left ──
      document.querySelectorAll("[data-reveal-left]").forEach((el) => {
        gsap.from(el, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── General reveal-up for sections ──
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Stagger cards: layer cards, result cards ──
      document.querySelectorAll("[data-stagger-cards]").forEach((container) => {
        const cards = container.children;
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Image reveal: scale + clip ──
      document.querySelectorAll("[data-image-reveal]").forEach((el) => {
        gsap.from(el, {
          scale: 1.15,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Horizontal line grow ──
      document.querySelectorAll("[data-line-grow]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Newsletter section: subtle float-up ──
      gsap.from("[data-newsletter]", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-newsletter]",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
