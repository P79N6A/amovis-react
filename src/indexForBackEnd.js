import React from 'react';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';
import CommonPage from './pages/CommonPage';
import Router from './router_service';
import { StaticRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
const PageProp = {
    "data": {
        'header': [{
            "main": [
                { 'project_name': 'uploadzone', 'module_name': 'ModuleOne', 'page_name': 'index', 'position': 1, 'module_data': [{ id: 1, name: 2 }] },
                { 'project_name': 'uploadzone', 'module_name': 'ModuleTwo', 'page_name': 'index', 'position': 1 }
            ]
        },],
        'content': [
            {
                "main": [
                    // { 'project_name': 'uploadzone', 'module_name': 'ModuleOne', 'page_name': 'index', 'position': 1 },
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
};
const context = {};
print(ReactDOMServer.renderToString(<StaticRouter location="/" context={context}>{Router}</StaticRouter>));