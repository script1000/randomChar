var sites=[
    'https://script1000.github.io/randomChar/rpages/'
];

function openUrl(){
    var i = Math.round(Math.random()*(sites.length-1));
    window.location.href=sites[i];
    return false;
}