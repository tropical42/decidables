
// devDependencies
import {h as hastscript} from 'hastscript';
import {visit as unistUtilVisit} from 'unist-util-visit';

export default function remarkSpan({keywords = ['span']} = {}) {
  return (tree) => {
    // Walk markdown parsed into MDAST finding and processing text directives into spans
    unistUtilVisit(tree, 'textDirective', (node) => {
      // Only looking for specified nodes
      if (!keywords.includes(node.name)) return;

      // There must be exactly one 'text' child node containing something
      if (node.children.length !== 1 || node.children[0].type !== 'text' || node.children[0].value.length === 0) return;

      // Data for building HTML from MD
      const data = node.data || (node.data = {});

      // Build HTML
      const hast = hastscript('span', node.attributes);
      data.hName = hast.tagName;
      data.hProperties = hast.properties;

      // Add our desired classes
      const classes = data.hProperties.className || (data.hProperties.className = []);
      classes.push(node.name);
      classes.push(node.children[0].value.replace(/\s/g, '').toLowerCase());

      // console.log(node);
    });
  };
}