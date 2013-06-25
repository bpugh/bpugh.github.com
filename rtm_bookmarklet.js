javascript: (function () {
    h = 'www.rememberthemilk.com';
    p = '/services/ext/addtask.rtm';
    a = $('.szi-current-song .szi-artist').text();
    s = $('.szi-current-song .szi-song').text();
    // al = $('.albumTitle').text();
    sa = s + a; //+ ' on ' + al;
    /*if (window.getSelection) {
        d = window.getSelection();
    } else if (document.getSelection) {
        d = document.getSelection();
    } else if (document.selection) {
        d = document.selection.createRange().text;
    };*/
    cp = 'http://' + h + p + '?t=' + encodeURIComponent(sa) + '&tx=test';
    w = window.open(cp, 'addwindow', 'status=no,toolbar=no,width=475,height=260,resizable=yes');
    setTimeout(function () {
        w.focus();
    }, 500);
})();