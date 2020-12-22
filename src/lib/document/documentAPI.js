import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const documentsDirectory = join(process.cwd(), './_documents')

/**
 * Get Markdown document by name
 * @param {string} name - Name of markdown document
 * @param {array} fields - get only fields that you need. Pass [] or null, to get all fields.
 *
 * Example 1: getMarkdownDocByName('curriculum-vitae') // return all data and content of document
 * Example 2: getMarkdownDocByName('curriculum-vitae', ['name']) // return only name of document
 */
export function getMarkdownDocByName(name, fields = [], options = {}) {
  const fullPath = join(documentsDirectory, `${name}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  let document = {}

  // Ensure only the minimal needed data is exposed
  if (fields?.length > 0) {
    fields.forEach((field) => {
      if (field === 'name') {
        document[field] = name
      }
      if (field === 'content') {
        document[field] = content
      }

      if (data[field]) {
        document[field] = data[field]
      }
    })
  } else {
    document = {
      ...data,
      content,
      name,
    }
  }

  return document
}
