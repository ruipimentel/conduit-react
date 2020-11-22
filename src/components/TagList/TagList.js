import { useState } from 'react';

import './TagList.css';

function TagList() {
  const [ tags ] = useState([]);

  return tags.map(tag => (
    <a
      key={tag}
      href="/"
      className="tag-list-a"
    >
      {tag}
    </a>
  ));
}

export default TagList;
