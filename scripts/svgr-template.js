function template({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  const ComponentName = componentName.name
    .replace(/^Svg/, '')
    .replace(/\(|\)/g, '')
    .replace(/\s+/g, '');
  return typeScriptTpl.ast`
    import React from 'react';
    const ${ComponentName}: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ${jsx};
    export default ${ComponentName};
  `;
}
module.exports = template;
