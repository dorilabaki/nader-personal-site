"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PageAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const ctx = gsap.context(() => {
      // ── Page hero: staggered entrance ──
      const heroElements = document.querySelectorAll("[data-page-hero] > *");
      if (heroElements.length) {
        gsap.from(heroElements, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        });
      }

      // ── Chapter headers: slide from left with line ──
      document.querySelectorAll("[data-chapter]").forEach((el) => {
        gsap.from(el, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Paragraphs: fade up on scroll ──
      document.querySelectorAll("[data-prose] > p, [data-prose] > div").forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Images: scale reveal ──
      document.querySelectorAll("[data-image-reveal]").forEach((el) => {
        gsap.from(el, {
          scale: 1.1,
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

      // ── Blockquotes and cards: pop in ──
      document.querySelectorAll("[data-card-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          scale: 0.97,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Stagger grids ──
      document.querySelectorAll("[data-stagger-cards]").forEach((container) => {
        const cards = container.children;
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: container,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Detail/FAQ items: stagger ──
      document.querySelectorAll("[data-stagger-list]").forEach((container) => {
        const items = container.children;
        gsap.from(items, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── General reveal ──
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
    });

    return () => ctx.revert();
  }, []);

  return null;
}
