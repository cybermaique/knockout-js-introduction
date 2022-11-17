(function (jjApp) {
  "use strict";

  function ViewModel(data) {
    this.registros = data;
  }

  var viewModel = new ViewModel(jjApp.arreglo);

  //   console.log(viewModel);

  ko.applyBindings(viewModel);
})(window.jjApp);
