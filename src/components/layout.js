import "./style/global.css";
import "./style/strucutres.css";
import "./style/fontawesome.css";

import favicon16 from "../img/favicon/favicon16.png"
import favicon32 from "../img/favicon/favicon32.png"
import favicon48 from "../img/favicon/favicon48.png"

import React from "react";
import {StaticQuery, Link, graphql} from "gatsby";
import {Main, Aside, Logo, Navigator, LinksList, SocialList} from "./style/emo-layout.js";
import {Helmet} from "react-helmet"


const Layout = ({children}) => (
    <StaticQuery
        query={
            graphql`
		query {
			site {
				siteMetadata {
					title
					subtitle
					description
					description_l1
					description_l2
					description_l3
					keywords
				}
			}
		}
		`}
        render={data => (
            <React.Fragment>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {
                            name: "description",
                            content: data.site.siteMetadata.description,
                        },
                        {
                            name: "keywords",
                            content: data.site.siteMetadata.keywords,
                        },
                    ]}
                    link={[
                        {rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}`},
                        {rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}`},
                        {rel: 'shortcut icon', type: 'image/png', href: `${favicon48}`},
                    ]}
                />
                <Aside>
                    <Navigator>
                        <Logo>
                            <h5>
                                <Link to={`/`} activeClassName="active">{data.site.siteMetadata.title}</Link>
                                {/*{data.site.siteMetadata.title}*/}
                                <SocialList>
									<span><a target="_blank"
                                             rel="noopener noreferrer"
                                             href="https://github.com/ROldford">
											<span className="fab fa-github"/>
										</a></span>
                                    <span><a target="_blank"
                                             rel="noopener noreferrer"
                                             href="https://www.linkedin.com/in/ryan-oldford-b95b4113/">
											<span className="fab fa-linkedin"/>
									</a></span>
                                    <span><a target="_blank"
                                             rel="noopener noreferrer"
                                             href="https://twitter.com/ryan_oldford">
										<span className="fab fa-twitter"/>
									</a></span>
                                </SocialList>
                            </h5>
                            <p>
                                {data.site.siteMetadata.description_l1}<br />
                                {data.site.siteMetadata.description_l2}<br />
                                {data.site.siteMetadata.description_l3}
                            </p>
                        </Logo>
                        <nav>
                            <LinksList>
                                <li><Link to={`/about-me/`} activeClassName="active">About Me</Link></li>
                                <li><Link to={`/employment/`} activeClassName="active">Employment</Link></li>
                                <li><Link to={`/publications/`} activeClassName="active">Publications</Link></li>
                                <li><Link to={`/`} activeClassName="active">Projects</Link></li>
                                <li><Link to={`/blog/`} activeClassName="active">Blog</Link></li>
                            </LinksList>
                        </nav>
                    </Navigator>
                </Aside>
                <Main>{children}</Main>
            </React.Fragment>
        )}
    />
);

export default Layout;
