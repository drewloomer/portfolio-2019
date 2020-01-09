import { useStaticQuery, graphql } from 'gatsby';

let cachedImages: any = null;

export const queryImages = (...names: string[]) => {
  const images = (cachedImages =
    cachedImages ||
    useStaticQuery(graphql`
      query {
        allFile(filter: { relativePath: { glob: "assets/*.(jpg|JPG)" } }) {
          nodes {
            base
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `));
  return names.map(name =>
    images.allFile.nodes.find((n: any) => n.name === name)
  );
};
