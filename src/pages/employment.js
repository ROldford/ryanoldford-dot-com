import React from "react";
import {graphql} from "gatsby";
import PostsListingWithFlags from "../components/posts-listing-with-flags";

export default ({data}) => {
    return <PostsListingWithFlags data={data} />
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___update], order: DESC }
      filter: { frontmatter: { category: { in: ["Co-op"] } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            update(formatString: "DD MMMM, YYYY")
            title
            subtitle
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 250, cropFocus: CENTER) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`;
