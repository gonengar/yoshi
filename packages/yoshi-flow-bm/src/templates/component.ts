import t from 'yoshi-common/build/template';
import { ExportedComponentModel, FlowBMModel } from '../model';
import {
  shouldAddExperiments,
  shouldAddFedops,
  shouldAddSentry,
} from '../queries';

type Opts = {
  model: FlowBMModel;
  component: Pick<ExportedComponentModel, 'componentId' | 'absolutePath'>;
};

export default t<Opts>`
import Component from '${({ component }) => component.absolutePath}';
import {
  wrapComponent,
  ${({ model }) =>
    shouldAddExperiments(model) ? 'createExperimentsProvider,' : ''}
  ${({ model }) => (shouldAddSentry(model) ? 'createSentryProvider,' : '')}
  ${({ model }) => (shouldAddFedops(model) ? 'createFedopsProvider,' : '')}
} from 'yoshi-flow-bm-runtime';

export default wrapComponent(Component, [
  ${({ model }) =>
    shouldAddExperiments(model)
      ? `createExperimentsProvider('${model.config.experimentsScopes}'),`
      : ''}
  ${({ model }) =>
    shouldAddSentry(model)
      ? `createSentryProvider('${model.config.sentryDsn}'),`
      : ''}
  ${({ model, component }) =>
    shouldAddFedops(model)
      ? `createFedopsProvider('${component.componentId}'),`
      : ''}
]);
`;
