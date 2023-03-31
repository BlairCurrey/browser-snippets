// hides the code coverage boxes on github's diff view in the "file" tab of a pull request.
// I use this snippet because the code coverage warnings make it difficult to read the diff.
const rule = '.check-annotation-warning { display: none; }'
const sheet = window.document.styleSheets[0];
sheet.insertRule(rule, sheet.cssRules.length);

// workaround to make the snippet a global fn
// can run hideCC() from console
window.hideCC = function (value) {
    const sheet = window.document.styleSheets[0];
    sheet.insertRule(rule, sheet.cssRules.length);
    console.log(`Added rule: ${rule}`)
};