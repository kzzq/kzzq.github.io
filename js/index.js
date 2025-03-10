function startin() {
    document.getElementById('section_info').style.display = "block";
    document.getElementById('section_gallery').style.display = "none";
    document.getElementById('section_updates').style.display = "none";
    document.getElementById('section_contact').style.display = "none";
    document.getElementById('loadscr').style.display = "none";
}
function startload() {
    document.getElementById('loadscr').style.display = "flex";
    setTimeout(function() {
        document.getElementById('loadscr').style.animation = "loadscr-disappear 0.5s linear";
        setTimeout(function() {
            document.body.style.overflow = "visible";
            document.body.style.pointerEvents = "all";
            document.getElementById('loadscr').style.display = "none";
        }, 450);
    }, 3500);
}
function launch_info() {
    document.getElementById('section_info').style.display = "block";
    document.getElementById('section_gallery').style.display = "none";
    document.getElementById('section_updates').style.display = "none";
    document.getElementById('section_contact').style.display = "none";
    document.getElementById('section_credits').style.display = "none";
}

function launch_gallery() {
    document.getElementById('section_info').style.display = "none";
    document.getElementById('section_gallery').style.display = "block";
    document.getElementById('section_updates').style.display = "none";
    document.getElementById('section_contact').style.display = "none";
    document.getElementById('section_credits').style.display = "none";
}
function launch_updates() {
    document.getElementById('section_info').style.display = "none";
    document.getElementById('section_gallery').style.display = "none";
    document.getElementById('section_updates').style.display = "block";
    document.getElementById('section_contact').style.display = "none";
    document.getElementById('section_credits').style.display = "none";
}
function launch_contact() {
    document.getElementById('section_info').style.display = "none";
    document.getElementById('section_gallery').style.display = "none";
    document.getElementById('section_updates').style.display = "none";
    document.getElementById('section_contact').style.display = "block";
    document.getElementById('section_credits').style.display = "none";
}
function launch_credits() {
    document.getElementById('section_info').style.display = "none";
    document.getElementById('section_gallery').style.display = "none";
    document.getElementById('section_updates').style.display = "none";
    document.getElementById('section_contact').style.display = "none";
    document.getElementById('section_credits').style.display = "block";
}


function view_concurimage() {
    document.getElementById('image_view').style.display = "flex";
}
function deview_concurimage() {
    document.getElementById('image_view').style.display = "none";
}

function updatesystem() {
    const version = localStorage.getItem("version");
    const versions = ["v2.1825A", "v2.1902A", "v2.1905A", "v2.1916A"];
    const textver = document.getElementById("textver");
    const notification = document.getElementById("notif_update");

    if (version == undefined || version == null || version == versions[versions.length] || version == versions[versions.length - 2]) { 
        location.reload();
        localStorage.setItem("version", versions[versions.length - 1]);
    }
    if (version == versions[versions.length - 1]) { 
        textver.innerHTML = versions[versions.length - 1];
        notification.style.display = "none";
 }

    notification.addEventListener("click", function() {
        location.reload();
        localStorage.setItem("version", versions[versions.length - 1]);
    });
}
function themeSystem() {
    const theme = localStorage.getItem("theme");

    if (theme == "light") {
        document.body.classList.add("light");
    }

    if (theme == "dark") {
        document.body.classList.remove("light");
    }
}