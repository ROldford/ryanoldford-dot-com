import React from "react";
import Layout from "./layout";
import {
    Card,
    CardColumns, Excerpt,
    Freshnew,
    PostInfo,
    PreTitle,
    SinglePost,
    Subtitle,
    Title,
    Update
} from "./style/emo-home-posts";
import {graphql, Link} from "gatsby";
import Img from "gatsby-image";

let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let months = days * 30;

const PostsListingWithFlags = ({data}) => {
    return (
        <Layout>
            <CardColumns>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <Card key={node.id}>
                        <Link to={node.fields.slug}>
                            <SinglePost>
                                {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
                                    node.frontmatter.update !== node.frontmatter.date && (
                                        <Update>Update</Update>
                                    )}
                                {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
                                    node.frontmatter.update === node.frontmatter.date && (
                                        <Freshnew>Fresh New</Freshnew>
                                    )}
                                <Img
                                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                                />
                                <PostInfo>
                                    <PreTitle>{node.frontmatter.category}</PreTitle>
                                    <Title>{node.frontmatter.title}</Title>
                                    <Subtitle>{node.frontmatter.subtitle}</Subtitle>
                                    <Excerpt>{node.excerpt}</Excerpt>
                                </PostInfo>
                            </SinglePost>
                        </Link>
                    </Card>
                ))}
            </CardColumns>
        </Layout>
    );
};

export const otherPostsNodeFragment = graphql`
    fragment otherPostsNodes on MarkdownRemarkEdge {
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
`;

export default PostsListingWithFlags;

