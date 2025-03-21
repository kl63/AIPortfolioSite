import { type SchemaTypeDefinition } from "sanity"

import Experience from './experience'
import Project from './project'
import About from './about'
import Contact from './contact'
import Skill from './skill'
import Profile from './profile'

export const schemaTypes = [Experience, Project, About, Contact, Skill, Profile]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
} 