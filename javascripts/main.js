//console.log('This would be the main JS file.');

function toggle_visibility(id_right, code, id_wrong) {
    if (code == '11-10-15') {
        var e = document.getElementById(id_right);
    }
    else {
        var e = document.getElementById(id_wrong);
    }
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}
