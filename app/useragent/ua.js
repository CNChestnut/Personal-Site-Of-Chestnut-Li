window.onload = function () {
  document.getElementById("user-ua").innerHTML = navigator.userAgent;
  var doms = document.getElementsByClassName("text-ua");
  var start, end;
  var dom,
    ua,
    color = [],
    n;
  for (i = 0; i < doms.length; i++) {
    start = end = n = 0;
    dom = doms[i];
    ua = dom.innerHTML;
    dom.innerHTML = "";
    color = [];
    while (ua.indexOf("(", end + 1) != -1) {
      start = ua.indexOf("(", end + 1);
      end = ua.indexOf(")", end + 1);
      for (j = start; j <= end; j++) {
        color[j] = "#e55001";
      }

      n++;
      if (n > 10) {
        break;
      }
    }
    start = end = 0;
    while (ua.indexOf("/", end + 1) != -1) {
      start = ua.indexOf("/", end + 1);
      end =
        ua.indexOf(" ", end + 1) == -1 ? ua.length : ua.indexOf(" ", end + 1);
      for (j = start + 1; j <= end; j++) {
        color[j] = "#508b84";
      }

      n++;
      if (n > 20) {
        break;
      }
    }
    for (j = 0; j < ua.length; j++) {
      dom.innerHTML +=
        '<span id="ua' +
        j +
        '" style="color:' +
        color[j] +
        '">' +
        ua.charAt(j) +
        "</span>";
    }
  }
}