import React from 'react';
import { graphql, navigate, withPrefix } from 'gatsby';
import { getUserLangKey } from 'ptz-i18n';

class RedirectIndex extends React.PureComponent {
  constructor(args: any) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);
      // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961
      navigate(homeUrl);
    }
  }

  render() {
    return <div />;
  }
}

export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
