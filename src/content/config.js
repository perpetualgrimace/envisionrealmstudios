import { defineCollection } from "astro:content";

const projectsCollection = defineCollection({});

export const collections = {
  projects: projectsCollection,
};
