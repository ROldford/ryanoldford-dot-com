import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import {
	MainPost,
	Title,
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
					<Stats>
						<SocialShare>
							<li className={"social-icon"}>
								<Link to="#">
									<span className={"icon-twitter"}> </span>
								</Link>
							</li>
							<li className={"social-icon"}>
								<Link to="#">
									<span className={"icon-facebook"}> </span>
								</Link>
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
    }
  }
`;


// featuredImage {
// 	childImageSharp {

// 	}
// }

// <Img>{post.frontmatter.featuredImage.childImageSharp.fluid}</Img>
