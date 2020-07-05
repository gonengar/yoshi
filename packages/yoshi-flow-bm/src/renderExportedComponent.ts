import path from 'path';
import fs from 'fs-extra';
import { ExportedComponentModel, FlowBMModel } from './model';
<<<<<<< Updated upstream:packages/yoshi-flow-bm/src/renderExportedComponent.ts
import {
  shouldAddExperiments,
  shouldAddFedops,
  shouldAddSentry,
} from './queries';
import { EXPORTED_COMPONENTS_DIR } from './constants';

const generateExportedComponentCode = (
  component: ExportedComponentModel,
  model: FlowBMModel,
) => {
  const addExperiments = shouldAddExperiments(model);
  const addSentry = shouldAddSentry(model);
  const addFedops = shouldAddFedops(model);

  return `
import Component from '${component.absolutePath}';
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
  ${addSentry ? `createSentryProvider(${model.config.sentryDsn}),` : ''}
  ${addFedops ? `createFedopsProvider(${component.componentId}),` : ''}
]);
  `;
};
=======
import { EXPORTED_COMPONENTS_DIR, GENERATED_DIR } from './constants';
import { renderLegacyExportedComponent } from './legacyExportedComponent';
import componentTemplate from './templates/component';
>>>>>>> Stashed changes:packages/yoshi-flow-bm/src/exportedComponent.ts

const renderExportedComponent = (
  component: ExportedComponentModel,
  model: FlowBMModel,
) => {
<<<<<<< Updated upstream:packages/yoshi-flow-bm/src/renderExportedComponent.ts
  const componentEntry = path.join(
    path.resolve(__dirname, `../tmp/${EXPORTED_COMPONENTS_DIR}`),
    component.relativePath,
  );
  fs.outputFileSync(
    componentEntry,
    generateExportedComponentCode(component, model),
  );
=======
  const componentEntry = getExportedComponentEntryPath(component);
  fs.outputFileSync(componentEntry, componentTemplate({ model, component }));
  if (component.config.legacyBundle) {
    renderLegacyExportedComponent(component);
  }
>>>>>>> Stashed changes:packages/yoshi-flow-bm/src/exportedComponent.ts
};

export default renderExportedComponent;
