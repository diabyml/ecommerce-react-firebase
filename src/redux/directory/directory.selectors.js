import {createSelector} from 'reselect';

const selectDirectoryReducer = store => store.directoryReducer;

export const selectSections = createSelector(
    [selectDirectoryReducer],
    directoryReducer => directoryReducer.sections
)