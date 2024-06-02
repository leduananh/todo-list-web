function replaceVariables(content, replaceVariableObject) {
    return content.replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)\$/g, (match, p1) => {
        return replaceVariableObject[p1] !== undefined ? replaceVariableObject[p1] : match;
    });
}

const paramsTemplateMappingUtil = {
    replaceVariables
}

export { paramsTemplateMappingUtil }
