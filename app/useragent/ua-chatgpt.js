window.onload = function() {
  document.getElementById("user-ua").innerHTML = navigator.userAgent;
  var doms = document.getElementsByClassName("text-ua");
  for (var i = 0; i < doms.length; i++) {
    var ua = doms[i].innerHTML;
    ua = ua.replace(/\((.*?)\)/g, '<span style="color:#e55001;">($1)</span>');
    ua = ua.replace(/\/(.*?)( |$)/g, '<span style="color:#508b84;">/$1</span>$2');
    doms[i].innerHTML = ua;
  }
}
