import PropTypes from 'prop-types';
import React from 'react';
import {SEO} from 'gatsby-theme-core';
import {withPrefix} from 'gatsby';

export default function CustomSEO({image, baseUrl, twitterHandle, ...props}) {
  const imagePath = withPrefix('/' + image);
  return (
    <SEO {...props} twitterCard="summary_large_image">
      <meta property="og:image" content={imagePath} />
      <meta name="twitter:image" content={baseUrl + imagePath} />
      {twitterHandle && (
        <meta name="twitter:site" content={`@${twitterHandle}`} />
      )}
    </SEO>
  );
}

CustomSEO.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string
};
