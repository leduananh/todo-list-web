import { bootstrap } from "../component/bootstrap.js"

function replaceVariables(content, replaceVariableObject) {
    return content.replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)\$/g, (match, p1) => {
        return replaceVariableObject[p1] !== undefined ? replaceVariableObject[p1] : match;
    });
}

function replaceNode(oldNodeSelector, newNodeHTML) {
    const oldNode = document.querySelector(oldNodeSelector);
    if (!oldNode) {
        console.error('Old node not found.');
        return;
    }

    const newNode = createNodeFromHTML(newNodeHTML);

    if (oldNode.parentNode) {
        oldNode.parentNode.replaceChild(newNode, oldNode);
    }
}

function createNodeFromHTML(htmlString) {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlString;
    return tempContainer.firstElementChild;
}

// Ham public for dev using

function render(renderId, content, replaceVariableObject = null) {
    const renderContent = replaceVariableObject === null ? content : replaceVariables(content, replaceVariableObject);
    replaceNode(renderId, renderContent)
}

function loadDefaultBootstrapsCss() {
    const headNode = document.querySelector(bootstrap.selector)
    headNode.innerHTML = headNode.innerHTML + bootstrap.html
}

const loadHtmlUtil = {
    render,
    loadDefaultBootstrapsCss
}

export { loadHtmlUtil }
