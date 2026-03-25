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
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        });
      }

      // ── Chapter headers ──
      document.querySelectorAll("[data-chapter]").forEach((el) => {
        gsap.from(el, {
          x: -30,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Paragraphs ──
      document.querySelectorAll("[data-prose] > p, [data-prose] > div").forEach((el) => {
        gsap.from(el, {
          y: 20,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Images ──
      document.querySelectorAll("[data-image-reveal]").forEach((el) => {
        gsap.from(el, {
          scale: 1.05,
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Cards ──
      document.querySelectorAll("[data-card-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 30,
          autoAlpha: 0,
          scale: 0.98,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Stagger grids ──
      document.querySelectorAll("[data-stagger-cards]").forEach((container) => {
        const cards = container.children;
        gsap.from(cards, {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Stagger lists ──
      document.querySelectorAll("[data-stagger-list]").forEach((container) => {
        const items = container.children;
        gsap.from(items, {
          y: 15,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: container,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── General reveal ──
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 35,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
