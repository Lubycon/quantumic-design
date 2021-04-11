import React, { useEffect, PropsWithChildren } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

interface Props {
  lang: 'ts' | 'js' | 'bash' | 'css' | 'scss';
}

const Highlight = ({ lang, children }: PropsWithChildren<Props>) => {

  useEffect(() => {
    hljs.registerLanguage('js', javascript);
    hljs.registerLanguage('bash', bash);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('scss', scss);
    hljs.registerLanguage('ts', typescript);
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={lang}>
        { children }
      </code>
    </pre>
  )
};

export default Highlight;
