import React from 'react';
import PropTypes from 'prop-types';

const NewsImage = ({ imageLink, text, link }) => (
  <div className="row row-center">
    <div className="well well-news">
      <div className="media">
        <div className="pull-left">
          <span className="fa-stack fa-2x">
            <image src={imageLink} alt="Picture of me taking a photo of an image" />
          </span>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Nicotine</h4>
          <p>{text}
            <a href={link} target="blank">More</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

NewsImage.propTypes = {
  imageLink: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};

NewsImage.defaultProps = {
  imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Nicotine.svg/1200px-Nicotine.svg.png',
  link: 'https://en.wikipedia.org/wiki/Nicotine',
  text: 'Nicotine is a potent parasympathomimetic stimulant and an alkaloid found in the nightshade\n' +
    '                            family of plants. Nicotine acts as a receptor agonist at most nicotinic acetylcholine\n' +
    '                            receptors (nAChRs), except at two nicotinic receptor subunits (nAChRα9 and nAChRα10)\n' +
    '                            where it acts as a receptor antagonist.',
};

export default NewsImage;
