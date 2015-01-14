/*! 
* X5 v3 (htttp://www.justep.com) 
* Copyright 2014 Justep, Inc.
* Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
*/ 
/**
 *  properties type: string, number, boolean, array, object
 *  binds: key是DOM上的属性名称, value是收集到component中的名称
 */
define(function(require){
	return {
		properties: {
			data: "string",
			relation: "string",
			min: "number",			
			max: "number",
			disabled: "boolean"			
		},
		events:["onChange", "onRender"],
		binds:{"bind-ref": "ref"}
	};
});