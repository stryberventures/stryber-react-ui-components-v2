import React from 'react';
import { addons, types } from '@storybook/addons';
import NpmInstall from "../../src/storybook/addons/NpmInstall";

addons.register('npm', () => {
    addons.add('npm', {
        type: types.TAB,
        title: 'Npm install',
        route: ({ storyId, refId }) => (refId ? `/npm/${refId}_${storyId}` : `/npm/${storyId}`),
        match: ({ viewMode }) => viewMode === 'npm',
        render: () => <NpmInstall />,
    });
});
