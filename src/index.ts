
const fetch = require('node-fetch');
import {
    SpecificationExtension,//规范扩展
    getExtension,//获取扩展
    addExtension,//增加扩展
    getPath,//获取path
    isReferenceObject,//是否参考对象
    isSchemaObject,//是否架构对象
    Server,//服务
    ServerVariable,//服务器变量
    OpenApiBuilder,//生成器
} from "openapi3-ts/dist/index";



fetch('http://projection.pheyma.com:7000/swagger/v1/swagger.json', {
    method: "GET",
    // headers: {
    //     "Content-Type": "application/json",
    //     a: 1
    // }
}).then((response: any) => {
    console.log("666666666666");
    if (response.ok) {
        //检查响应文本
        response.json().then(function (data: any) {
            console.log(data);
            console.log(data);
        });
    }

    console.log("666666666666");

}).catch

