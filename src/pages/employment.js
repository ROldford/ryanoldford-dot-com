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
        ...otherPostsNodes
      }
    }
  }
`;
