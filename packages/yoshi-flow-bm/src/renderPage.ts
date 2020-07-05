import path from 'path';
import fs from 'fs-extra';
import { FlowBMModel, PageModel } from './model';
<<<<<<< Updated upstream:packages/yoshi-flow-bm/src/renderPage.ts
import {
  shouldAddExperiments,
  shouldAddFedops,
  shouldAddSentry,
} from './queries';
import { PAGES_DIR } from './constants';

const generatePageCode = (page: PageModel, model: FlowBMModel) => {
  const addExperiments = shouldAddExperiments(model);
  const addSentry = shouldAddSentry(model);
  const addFedops = shouldAddFedops(model);

  return `
import Component from '${page.absolutePath}';
import {
  wrapComponent,
  ${addExperiments ? 'createExperimentsProvider,' : ''}
  ${addSentry ? 'createSentryProvider,' : ''}
  ${addFedops ? 'createFedopsProvider,' : ''}
} from 'yoshi-flow-bm-runtime';


export default wrapComponent(Component, [
  ${
    addExperiments
      ? `createExperimentsProvider(${JSON.stringify(
          model.config.experimentsScopes,
        )}),\n`
      : ''
  }
  ${
    addSentry
      ? `createSentryProvider(${JSON.stringify(model.config.sentryDsn)}),`
      : ''
  }
  ${
    addFedops
      ? `createFedopsProvider(${JSON.stringify(page.componentId)}),`
      : ''
  }
]);
  `;
};

const renderPage = (page: PageModel, model: FlowBMModel) => {
  const pageEntry = path.join(
    path.resolve(__dirname, `../tmp/${PAGES_DIR}`),
    page.relativePath,
  );
  fs.outputFileSync(pageEntry, generatePageCode(page, model));
=======
import { GENERATED_DIR, PAGES_DIR } from './constants';
import { renderLegacyPage } from './legacyPage';
import componentTemplate from './templates/component';

export const getPageEntryPath = ({ relativePath }: PageModel) =>
  path.join(GENERATED_DIR, PAGES_DIR, relativePath);

export const renderPage = (page: PageModel, model: FlowBMModel) => {
  const pageEntry = getPageEntryPath(page);
  fs.outputFileSync(pageEntry, componentTemplate({ model, component: page }));

  if (page.config.legacyBundle) {
    renderLegacyPage(page);
  }
>>>>>>> Stashed changes:packages/yoshi-flow-bm/src/page.ts
};

export default renderPage;
