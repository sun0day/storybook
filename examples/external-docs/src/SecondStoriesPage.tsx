import React from 'react';
import { DocsProvider, Meta, Story } from './blocks';

import meta, { Standard } from './AccountForm.stories';

export default () => (
  <DocsProvider>
    <div>
      <Meta of={meta} />

      <Story of={Standard} />
    </div>
  </DocsProvider>
);
