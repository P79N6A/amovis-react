// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import CommonPage from './pages/CommonPage';
const routerConfig = [
  {
    path: '/membership',
    modules: {
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
  },
  {
    path: '/',
    modules: {
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
  },
  {
    path: '/page15',
    modules: {
      'header': [{
        "main": [
          // { 'project_name': 'uploadzone', 'module_name': 'ModuleOne', 'page_name': 'index', 'position': 1, 'module_data': [{id: 1, name: 2}] },
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
            // { 'project_name': 'uploadzone', 'module_name': 'ModuleOne', 'page_name': 'index', 'position': 1 }
          ], 
          'sub_max': [
            { 'project_name': 'uploadzone', 'module_name': 'ModuleTwo', 'page_name': 'index', 'position': 2 }
          ]
        },
      ]
    }
  },
];

export default routerConfig;
