export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5d97237c64a41334789fe173',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-leon-chen-studio',
                  apiId: 'b7b55b14-40c6-4614-8597-18297dd4449e'
                },
                {
                  buildHookId: '5d97237ce4ec9e400c2f1205',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-leon-chen',
                  apiId: '2b79b70d-00a5-45da-a9e6-2604f8861abc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanteZii/sanity-gridsome-blog-leon-chen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-leon-chen.netlify.com', category: 'apps'}
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
