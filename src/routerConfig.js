// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

const module_data = [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] 
const module_data2 = [{ id: 4, name: 'aaaa' }, { id: 5, name: 'bbb' }, { id: 6, name: 'ccc' }] 

const devRouterConfig = [
  {
    path: "/get_item",
    modules: {
      "header": [{
        "main": [
          { "project_name": "project1", "module_name": "ModuleTwo", "page_name": "index", "position": 1 }
        ]
      }],
      "content": [
        {
          "main": [
            { "project_name": "uploadzone", "module_name": "ModuleOne", "page_name": "index", "position": 1 },
          ]
        },
        {
          "sub_min": [
            { "project_name": "uploadzone", "module_name": "ModuleTwo", "page_name": "index", "position": 1 },
            { "project_name": "uploadzone", "module_name": "ModuleOne", "page_name": "index", "position": 1 }
          ],
          "sub_max": [
            { "project_name": "uploadzone", "module_name": "ModuleTwo", "page_name": "index", "position": 2 }
          ]
        }
      ]
    }
  },
  {
    path: "/",
    modules: {
      "header": [{
        "main": [
          { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": module_data },
          { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": module_data }
        ]
      }],
      "content": [
        {
          "main": [
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": module_data },
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": module_data }
          ]
        },
        {
          "sub_min": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": module_data },
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": module_data }
          ],
          "sub_max": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 2 }
          ]
        }
      ]
    }
  },
  {
    path: "/page15",
    modules: {
      "header": [{
        "main": [
          { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": module_data2 }
        ]
      }],
      "content": [
        {
          "main": [
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": module_data2 },
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": module_data2 }
          ]
        },
        {
          "sub_min": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": module_data2 }
          ],
          "sub_max": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 2 }
          ]
        }
      ]
    }
  }
];
const routerConfig = global.pageApiData ? global.pageApiData : (window.pageApiData ? window.pageApiData : devRouterConfig);
export default routerConfig;
