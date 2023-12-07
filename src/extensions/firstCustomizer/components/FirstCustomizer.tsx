import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';

import styles from './FirstCustomizer.module.scss';

export interface IFirstCustomizerProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

const LOG_SOURCE: string = 'FirstCustomizer';

export default class FirstCustomizer extends React.Component<IFirstCustomizerProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: FirstCustomizer mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FirstCustomizer unmounted');
  }

  public render(): React.ReactElement<{}> {
    return <div className={styles.firstCustomizer}>Hello World....Added....</div>;
  }
}
