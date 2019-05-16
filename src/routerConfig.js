// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

const devRouterConfig = [
  {
    path: "/get_item",
    modules: {
      "header": [{
        "main": [
          { "project_name": "home_company", "module_name": "AblityItems", "page_name": "index", "position": 1, "module_data": {"list":[
            {"value":"服务端返回输出能力","des":"服务端返回支付、实名、信用、理财、大数据"},
            {"value":"服务端返回政策扶持","des":"服务端返回物料、返佣、品牌支持、运营收益"},
            {"value":"服务端返回资源整合","des":"服务端返回门禁停车、智能家居、生活服务"}
          ]} },
          { "project_name": "home_company", "module_name": "CardItems", "page_name": "index", "position": 1, "module_data": 
          {"list":[
            {"name":"服务端返回输出能力1","sold_count":100,"des":"服务端返回支付、实名、信用、理财、大数据1"},
            {"name":"服务端返回政策扶持2","sold_count":200,"des":"服务端返回物料、返佣、品牌支持、运营收益2"},
            {"name":"服务端返回资源整合3","sold_count":200,"des":"服务端返回门禁停车、智能家居、生活服务3"},
            {"name":"服务端返回资源整合4","sold_count":300,"des":"服务端返回门禁停车、智能家居、生活服务4"}
          ]} },
          { "project_name": "home_company", "module_name": "IntroBanner", "page_name": "index", "position": 1, "module_data": {"name":"服务端返回智慧社区，未来生活","des":"服务端返回输出支付，账户体系，信用金融，电商，采购，文化公益和大数据等能力和资源，助力社区物业通过提升信息化、智能化水平，改善物业管理水平和服务品质，推动建设便利舒适、安全和谐的智慧社区"} },
          { "project_name": "home_company", "module_name": "IntroTab", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
          { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
          { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] }
        ]
      }],
      "content": [
        {
          "main": [
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] }
          ]
        },
        {
          "sub_min": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] }
          ],
          "sub_max": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 2 }
          ]
        }
      ]
    }
  },
  {
    path: "/web.html",
    modules: {
      "header": [{
        "main": [
          { "project_name": "home_company", "module_name": "AblityItems", "page_name": "index", "position": 1, "module_data": {"list":[
            {"value":"服务端返回输出能力","des":"服务端返回支付、实名、信用、理财、大数据"},
            {"value":"服务端返回政策扶持","des":"服务端返回物料、返佣、品牌支持、运营收益"},
            {"value":"服务端返回资源整合","des":"服务端返回门禁停车、智能家居、生活服务"}
          ]} },
          { "project_name": "home_company", "module_name": "CardItems", "page_name": "index", "position": 1, "module_data": 
          {"list":[
            {"name":"服务端返回输出能力1","sold_count":100,"des":"服务端返回支付、实名、信用、理财、大数据1"},
            {"name":"服务端返回政策扶持2","sold_count":200,"des":"服务端返回物料、返佣、品牌支持、运营收益2"},
            {"name":"服务端返回资源整合3","sold_count":200,"des":"服务端返回门禁停车、智能家居、生活服务3"},
            {"name":"服务端返回资源整合4","sold_count":300,"des":"服务端返回门禁停车、智能家居、生活服务4"}
          ]} },
          { "project_name": "home_company", "module_name": "IntroBanner", "page_name": "index", "position": 1, "module_data": {"name":"服务端返回智慧社区，未来生活","des":"服务端返回输出支付，账户体系，信用金融，电商，采购，文化公益和大数据等能力和资源，助力社区物业通过提升信息化、智能化水平，改善物业管理水平和服务品质，推动建设便利舒适、安全和谐的智慧社区"} },
          { "project_name": "home_company", "module_name": "IntroTab", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
          { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
          { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] }
        ]
      }],
      "content": [
        {
          "main": [
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] }
          ]
        },
        {
          "sub_min": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] },
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": [{ id: 1, name: 333 }, { id: 2, name: 444 }, { id: 3, name: 555 }] }
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
          { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 4, name:"aaa"},{ id: 5, name: "bbb" }, { id: 6, name: "ccc" }]  }
        ]
      }],
      "content": [
        {
          "main": [
            { "project_name": "project1", "module_name": "ModuleOne", "page_name": "index", "position": 1, "module_data": [{ id: 4, name:"aaa"},{ id: 5, name: "bbb" }, { id: 6, name: "ccc" }] },
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 4, name:"aaa"},{ id: 5, name: "bbb" }, { id: 6, name: "ccc" }]  }
          ]
        },
        {
          "sub_min": [
            { "project_name": "project2", "module_name": "ModuleTwo", "page_name": "index", "position": 1, "module_data": [{ id: 4, name:"aaa"},{ id: 5, name: "bbb" }, { id: 6, name: "ccc" }]  }
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
