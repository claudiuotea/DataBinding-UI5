sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/BindingMode"
 ], function (UIComponent, JSONModel, BindingMode) {
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
			  firstName: "Claudiu",
			  lastName: "Otea",
			  enabled:true,
			  panelHeaderText: "Data Binding Basics"
		  });

		  //HERE!
		  oModel.setDefaultBindingMode(BindingMode.OneWay);

		  this.setModel(oModel);
	   }
	});
 });
 