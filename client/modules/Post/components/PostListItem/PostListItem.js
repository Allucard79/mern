import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-desc']}>Votes: <span>{props.post.voteCount}</span></p>
      <div className={styles['post-action_main']}>
        <span className={styles['post-action_negative']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></span>
        <span className={styles['post-action_positive']}><a href="#" onClick={props.onVoteUp}><FormattedMessage id="thumbUpPost" /></a></span>
        <span className={styles['post-action_negative']}><a href="#" onClick={props.onVoteDown}><FormattedMessage id="thumbDownPost" /></a></span>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;