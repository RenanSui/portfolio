import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('projects').title('Projects'),
      S.documentTypeListItem('works').title('Works'),
      S.documentTypeListItem('resume').title('Resume'),
      S.documentTypeListItem('visitors').title('Visitors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['projects', 'works', 'resume', 'visitors'].includes(item.getId()!),
      ),
    ])
