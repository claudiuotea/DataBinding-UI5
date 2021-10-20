sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
  ],
  function (Controller, MessageToast, mobileLibrary, Locale, LocaleData, Currency) {
    "use strict";
    return Controller.extend("sap.ui.demo.databinding.controller.App", {
      onInit: function () {
        sap.ui
          .getCore()
          .getMessageManager()
          .registerObject(this.getView(), true);
      },

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

      formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode){
        var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
        var oLocale = new Locale(sBrowserLocale);
        var oLocaleData = new LocaleData(oLocale);
        var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
        return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
      }
    });
  }
);
