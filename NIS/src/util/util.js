


export const namespace = (namespaceString) => {
    let parts = namespaceString.split('.'),
        parent = window,
        currentPart = '';

    for (let i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }

    return parent;
};