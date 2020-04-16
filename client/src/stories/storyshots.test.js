import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { createSerializer } from 'jest-emotion';

initStoryshots({
  test: multiSnapshotWithOptions(),
  snapshotSerializers: [createSerializer()],
});
