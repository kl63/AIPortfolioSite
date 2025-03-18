import { type SchemaTypeDefinition } from "sanity"

import Experience from "./experience"
import Home from "./home"
import Project from "./project"
import Skill from "./skill"
import About from "./about"
import Contact from "./contact"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Experience, Home, Project, Skill, About, Contact],
} 