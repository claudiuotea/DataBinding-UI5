sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller,MessageToast) {
  "use strict";
  return Controller.extend("sap.ui.demo.databinding.controller.App", {
    resetFirstName : function () {
      MessageToast.show(this.getView().getModel().setProperty("/firstName","Woops!"));
    }
  });
});