import t from 'yoshi-common/build/template';
import { ExportedComponentModel } from '../model';
import { getExportedComponentEntryPath } from '../exportedComponent';

type Opts = {
  component: ExportedComponentModel;
};

export default t<Opts>`
import WrappedComponent from '${({ component }) =>
  getExportedComponentEntryPath(component)}';
import { ModuleRegistry } from 'react-module-container';

ModuleRegistry.registerComponent('${({ component }) =>
  component.config.legacyBundle!.lazyComponentId}', () => WrappedComponent);
`;
