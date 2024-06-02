function loadQueryStringParams() {
    return new URL(document.location.toString()).searchParams;
}

function loadQueryParamValueByQueryName(queryName) {
    const params = loadQueryStringParams();
    return params.get(queryName)
}

const commonUtil = {
    loadQueryParamValueByQueryName
}

export { commonUtil }
