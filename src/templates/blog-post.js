import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import {
	MainPost,
	Title,
	Tags,
	Date,
	Stats,
	SocialShare
} from "../components/style/emo-post";

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<MainPost>
				<header>
					<Title>{post.frontmatter.title}</Title>
					<Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
				</header>
				<div
					className={"content"}
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
				<footer>
          <Date>{post.frontmatter.date}</Date>
	        <Tags>
		        {post.frontmatter.tags.map((tag, index) => (
			        <li key={index}>{tag}</li>
		        ))}
	        </Tags>
          <Stats>
            <SocialShare>
              <li className={"social-icon"}>
                <a href={`http://www.twitter.com/share?url=http://www.ryanoldford.com${post.fields.slug}`}>
                  <span className={"fab fa-twitter"}> </span>
                </a>
              </li>
            </SocialShare>
          </Stats>
        </footer>
			</MainPost>
		</Layout>
	);
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
				date(formatString: "MMMM DD, YYYY")
				tags
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 500, maxHeight: 500) {
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
			fields {
				slug
			}
    }
  }
`;


// featuredImage {
// 	childImageSharp {

// 	}
// }

// <Img>{post.frontmatter.featuredImage.childImageSharp.fluid}</Img>
