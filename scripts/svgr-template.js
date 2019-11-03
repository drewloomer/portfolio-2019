function template({ template }, opts, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  console.log(
    // componentName,
    jsx
    //     `
    //   import React, { SVGProps } from 'react';
    //   // const ${componentName} = (props: SVGProps<SVGSVGElement>)
    //   const ${componentName} = (props) => ${jsx};
    //   export default ${componentName};
    // `
  );
  return typeScriptTpl.ast`
    import React, { SVGProps } from 'react';
    // const ${componentName} = (props: SVGProps<SVGSVGElement>)
    const ${componentName} = (props) => ${jsx};
    export default ${componentName};
  `;
}
module.exports = template;
