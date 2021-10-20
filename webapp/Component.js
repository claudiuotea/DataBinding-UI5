sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
 ], function (UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.databinding.Component", {
	   metadata : {
			 interfaces: ["sap.ui.core.IAsyncContentCreation"],
			 manifest: "json"
	   },
	   init : function () {
		  // call the init function of the parent
		  UIComponent.prototype.init.apply(this, arguments);

		  var oModel = new JSONModel({
			  greetingText: "Hi, men!"
		  });

		  this.setModel(oModel);
	   }
	});
 });
 