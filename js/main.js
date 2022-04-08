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

document.title = getTitle();
