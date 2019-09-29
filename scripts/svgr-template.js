function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import React, { SVGProps } from 'react';
    // const ${componentName} = (props: SVGProps<SVGSVGElement>)
    const ${componentName} = (props) => ${jsx};
    export default ${componentName};
  `;
}
module.exports = template;
