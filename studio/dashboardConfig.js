export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606aee98407c81e67eea1fa3',
                  title: 'Sanity Studio',
                  name: 'scalesource-cms-studio',
                  apiId: '768197c6-44bd-4fac-a02f-0c293fe66bb7'
                },
                {
                  buildHookId: '606aee98407c81e825ea1e43',
                  title: 'Blog Website',
                  name: 'scalesource-cms',
                  apiId: '4bbd6d35-8868-4cab-81b0-30b93395666b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antonholmes/scalesource-cms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://scalesource-cms.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
