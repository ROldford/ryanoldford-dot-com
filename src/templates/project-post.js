import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Header, MainPost, PreTitle, Title,Subtitle, Tags, Date, Stats, SocialShare } from "../components/style/emo-post";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <MainPost>
        <Header>
          <PreTitle>{post.frontmatter.category}</PreTitle>
          <Title>{post.frontmatter.title}</Title>
	        <Subtitle>{post.frontmatter.subtitle}</Subtitle>
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          <p><strong>Project</strong> <a href={post.frontmatter.project} target={"_blank"}>{post.frontmatter.project}</a></p>
          <p><strong>Demo</strong> <a href={post.frontmatter.demo} target={"_blank"}>{post.frontmatter.demo}</a></p>
        </Header>
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
        subtitle
        tags
        category
        project
        demo
        date(formatString: "DD MMMM, YYYY")
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
      fields {
        slug
      }
    }
  }
`;
