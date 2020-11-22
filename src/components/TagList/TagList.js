import { useEffect, useState } from 'react';

import './TagList.css';

function TagList() {
  const [ tags, setTags ] = useState(undefined);

  // Função assíncrona!
  useEffect(() => {

    // Função assíncrona!
    fetch('https://conduit.productionready.io/api/tags').then(res => {

      // Função assíncrona!
      res.json().then(dados => {

        // Função assíncrona!
        setTags(dados.tags.filter(
          tag => tag.replace(/[^a-z0-9]/g, '')
        ));

      });

    });

  }, []);

  if (!tags) {
    return 'Carregando...';
  }

  if (tags.length === 0) {
    return 'Não há tags';
  }

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
