function get_param(e) {
    var t = document.location.href;
    return reg = new RegExp("(" + e + "=[a-zA-Z0-9-_%@]*)", "g"), t = t.match(reg), t = t[0].split("="), t[1]
}