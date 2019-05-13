
var json = {
  '/test/two': {
    'layout': {

    },
    'sections': [
      {
        'name': 'ModuleOne',
        'subModule': [{
          'name': 'SubModuleOne',
        }, {
          'name': 'SubModuleTwo'
        }],
      }, {
        'name': 'ModuleTwo',
        'subModule': [{
          'name': 'SubModuleOne',
        }, {
          'name': 'SubModuleTwo'
        }],
      }
    ]
  },
  '/test/one': {
    'sections': [
      {
        'name': 'ModuleTwo',
        'subModule': [{
          'name': 'SubModuleTwo',
        }, {
          'name': 'SubModuleOne'
        }],
      }, {
        'name': 'ModuleOne',
        'subModule': [{
          'name': 'SubModuleTwo',
        }, {
          'name': 'SubModuleOne'
        }],
      }
    ]
  },
  // '/page15': {
  //   'layout': [
  //     { 'classname': 'header' },
  //     {
  //       'classname': 'layui-container',
  //       'layout': [
  //         { 'classname': 'content' },
  //         {
  //           'classname': 'main',
  //           'sections': [
  //             {
  //               'classname': 'section',
  //               'content': ['ModuleOne', 'ModuleTwo'],
  //             }, {
  //               'classname': 'section',
  //               'content': ['ModuleOne'],
  //             }
  //           ]
  //         },
  //         { 'classname': 'sub_main' },
  //       ]
  //     },
  //     { 'classname': 'footer' }
  //   ],
  // },
  '/page15': {
    'header': [{
      "main": [
        { 'project_name': 'uploadzone', 'module_name': 'ModuleOne', 'page_name': 'index', 'position': 1, 'module_data': [{id: 1, name: 2}] },
        { 'project_name': 'uploadzone', 'module_name': 'ModuleTwo', 'page_name': 'index', 'position': 1 }
      ]
    },],
    'content': [
      {
        "main": [
          { 'project_name': 'uploadzone', 'module_name': 'ModuleOne', 'page_name': 'index', 'position': 1 },
          { 'project_name': 'uploadzone', 'module_name': 'ModuleTwo', 'page_name': 'index', 'position': 1 }
        ]
      },
      {
        'sub_min': [
          { 'project_name': 'uploadzone', 'module_name': 'ModuleTwo', 'page_name': 'index', 'position': 1 },
          { 'project_name': 'uploadzone', 'module_name': 'ModuleOne', 'page_name': 'index', 'position': 1 }
        ], 
        'sub_max': [
          { 'project_name': 'uploadzone', 'module_name': 'ModuleTwo', 'page_name': 'index', 'position': 2 }
        ]
      },
    ]
  }
}

export default json