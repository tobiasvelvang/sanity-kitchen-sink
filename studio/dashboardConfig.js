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
                  buildHookId: '6348083ba178c700af8bb19b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-smwayo5n',
                  apiId: '44a96c2c-6b3e-43ee-a6da-9c351686d56c'
                },
                {
                  buildHookId: '6348083cdb51e902942bec2f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x1w7oy5p',
                  apiId: '9584b04f-bbe7-4520-8b46-a5b9545a2d7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tobiasvelvang/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x1w7oy5p.netlify.app', category: 'apps'}
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
