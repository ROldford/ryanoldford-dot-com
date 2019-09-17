import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MainPost, Title } from "../components/style/emo-post";

export default ({ data }) => {
	return (
		<Layout>
			<MainPost>
				<header>
					<Title>About Ryan Oldford</Title>
				</header>
				<div
					className={"content"}>
					<br />
					<p>
						Ryan is passionate about designing software that makes education
						easier. He is currently living in Vancouver, BC, and attending the
						Integrated Computer Science program at UBC.
					</p>
					<p>
						Ryan has always had a passion for science, and parlayed that into a
						decade of teaching International Baccalaureate sciences at schools
						in Beijing and Thailand.
					</p>
					<p>
						He has seen software that helps teachers and students, and a lot
						that doesn't, and hopes to use his education and computer science
						knowledge together to make teaching and learning more effective.
					</p>
				</div>
			</MainPost>
		</Layout>
	);
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        subtitle
      }
    }
  }
`
