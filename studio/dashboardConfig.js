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
                  buildHookId: '62fd342e7df5a6008f70f424',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oirym2t9',
                  apiId: '9f4e56ef-9505-4414-8af6-a3880b5599ee'
                },
                {
                  buildHookId: '62fd342f47b7b00063cd905f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gyjbnigo',
                  apiId: '59d7b11d-e50c-45ff-b78b-8a0d6fb4d715'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RealAmisi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gyjbnigo.netlify.app', category: 'apps'}
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
