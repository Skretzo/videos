function trim(str, ch)
{
    var start = 0;
    var end = str.length;

    while (start < end && str[start] === ch)
    {
        ++start;
    }

    while (end > start && str[end - 1] === ch)
    {
        --end;
    }

    return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

function getHref()
{
    return window.location.href;
}

function getFolder()
{
    return trim(window.location.pathname, "/").split("/").pop();
}

function toTitleCase(text)
{
    if (text === undefined || text.length === 0)
    {
        return text;
    }
    return text[0].toUpperCase() + text.substring(1);
}

function getTitle()
{
    return toTitleCase(getFolder()).replace(/-/g, " ");
}

function setMetaTags()
{
    // <meta property = "og:type" content = "video.other">
    // <meta property = "og:url" content = getHref()>
    // <meta property = "og:video" content = getHref() + "video.mp4">
    // <meta property = "og:video:type" content = "video/mp4">
    // <meta property = "og:image" content = getHref() + "image.png">
    // <meta property = "og:title" content = getTitle()>
    // <meta property = "og:description" content = "Description text">
    // <meta property = "og:site_name" content = "Videos">
    // <meta name = "twitter:card" content = "player">
    // <meta name = "twitter:site" content = "@skretzo">
    // <meta name = "twitter:image" content = getHref() + "image.png">
    // <meta name = "twitter:player" content = getHref()>
    // <meta name = "twitter:player:width" content = "640">
    // <meta name = "twitter:player:height" content = "360">

    var NAMES = ["twitter:card", "twitter:site", "twitter:image",
                 "twitter:player", "twitter:player:width", "twitter:player:height"];
    var CONTENTS = ["player", "@skretzo", getHref() + "image.png", getHref(), "640", "360"];

    var h = document.getElementsByTagName("head")[0];
    for (var i = 0; i < NAMES.length; i++)
    {
        var NAME = NAMES[i];
        var CONTENT = CONTENTS[i];
        var m = document.createElement("meta");
        m.name = NAME;
        m.content = CONTENT;
        h.appendChild(m);
    }
}

function setTitle()
{
    document.title = getTitle();
}

function setSubtitle()
{
    document.getElementById("subtitle").innerHTML = getTitle();
}

function loadHead()
{
    setMetaTags();
    setTitle();
}

function load()
{
    setSubtitle();
}

loadHead();
