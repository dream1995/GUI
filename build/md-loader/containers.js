const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'lgsn', {
    validate(params) {
      return params.trim().match(/^lgsn\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^lgsn\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<lgsn-dome>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--lgsn-dome: ${content}:lgsn-dome-->
        `;
      }
      return '</lgsn-dome>';
    }
  });

  md.use(mdContainer, 'tip');
  md.use(mdContainer, 'warning');
};
