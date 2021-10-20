sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/BindingMode",
	"sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, BindingMode,ResourceModel) {
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
			  address: {
				  street: "Dietmar-Hopp-Allee-16",
				  city:"Walldorf",
				  zip:"420090",
				  country:"Narnia"
			  },
			  salesAmount: 12345.678,
			  currencyCode: "EUR"
		  });

		  //HERE!
		  oModel.setDefaultBindingMode(BindingMode.OneWay);
		  
		//   var oResourceModel = new ResourceModel({
		// 	bundleName: "sap.ui.demo.databinding.i18n.i18n",
		// 	supportedLocales: ["", "de"],
		// 	fallbackLocale: ""
		//   });
		  this.setModel(oModel);
	   }
	});
 });
 