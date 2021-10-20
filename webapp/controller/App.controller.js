sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/m/library"],
  function (Controller, MessageToast, mobileLibrary) {
    "use strict";
    return Controller.extend("sap.ui.demo.databinding.controller.App", {
      resetFirstName: function () {
        MessageToast.show(
          this.getView().getModel().setProperty("/firstName", "Woops!")
        );
      },

      formatMail: function (sFirstName, sLastName) {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        return mobileLibrary.URLHelper.normalizeEmail(
          sFirstName + "." + sLastName + "@example.com",
          oBundle.getText("mailSubject", [sFirstName]),
          oBundle.getText("mailBody")
        );
      },
    });
  }
);
