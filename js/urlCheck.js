const url = window.location.href;
const hostname = window.location.hostname;
const protocol = window.location.protocol;


document.getElementById("hosting").innerHTML = "an unknown";

const isGithub = url.startsWith("https://kzzq.github.io");
const isLocalhost = hostname === "127.0.0.1" && protocol === "http:";
if (isLocalhost) {
    document.getElementById("localep").style.display = "inline-block";
    document.getElementById("hosting").innerHTML = "your local service";
}
if (isGithub) {
    document.getElementById("hosting").innerHTML = "github";
}
if (isGithub || isLocalhost) {
    document.getElementById("devep").style.display = "block";
    document.getElementById("verdev").style.display = "inline-block";
}