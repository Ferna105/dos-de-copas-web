// Arma el intent hacia la app con el id de la invitación y el secreto, que llegan después del "#".
// Lo que va después del "#" nunca se envía a GitHub ni a ningún servidor.
(function () {
  var payload = location.hash.slice(1);
  var open = document.getElementById('open');
  var valid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.[A-Za-z0-9_-]{43}$/.test(payload);

  // Saca el secreto de la barra de direcciones y del historial.
  history.replaceState(null, '', location.pathname);

  if (!valid) {
    open.remove();
    document.getElementById('intro').textContent = 'Este link de invitación está incompleto o no es válido.';
    document.getElementById('intro').className = 'error';
    document.getElementById('hint').textContent = 'Pedile a tu pareja que te mande uno nuevo.';
    return;
  }
  open.href = 'intent://unirse#Intent;scheme=dosdecopas;package=app.dosdecopas;S.invite=' +
    encodeURIComponent(payload) + ';end';
})();
