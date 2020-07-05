import path from 'path';
import fs from 'fs-extra';
import { Entry } from 'webpack';
import { GENERATED_LEGACY_DIR, EXPORTED_COMPONENTS_DIR } from './constants';
import { FlowBMModel, ExportedComponentModel } from './model';
import legacyComponentTemplate from './templates/legacyComponent';

const getLegacyExportedComponentEntryPath = ({
  relativePath,
}: ExportedComponentModel) =>
  path.join(GENERATED_LEGACY_DIR, EXPORTED_COMPONENTS_DIR, relativePath);

export const renderLegacyExportedComponent = (
  exportedComponent: ExportedComponentModel,
) => {
  const exportedComponentEntry = getLegacyExportedComponentEntryPath(
    exportedComponent,
  );
  fs.outputFileSync(
    exportedComponentEntry,
    legacyComponentTemplate({ component: exportedComponent }),
  );
};

export const getLegacyExportedComponentEntries = (
  model: FlowBMModel,
): Entry => {
  return model.exportedComponents
    .filter(
      (exportedComponent) =>
        exportedComponent.config.legacyBundle !== undefined,
    )
    .reduce<Entry>((entries, exportedComponent) => {
      entries[
        exportedComponent.config.legacyBundle?.bundleName!
      ] = getLegacyExportedComponentEntryPath(exportedComponent);
      return entries;
    }, {});
};
