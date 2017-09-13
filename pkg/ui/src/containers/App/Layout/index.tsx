import * as React from 'react';
import * as style from '../style.css';
import { Header } from '../../../components';
import { MuiThemeProvider, createMuiTheme, createPalette } from 'material-ui/styles';
import { blue, teal, red } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: teal,
    error: red,
  }),
});

namespace Layout {
  export interface Props {
    children: any
  }
}

export class Layout extends React.Component<Layout.Props, {}> {
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={style.normal}>
          <Header />
          {children}
        </div>
      </MuiThemeProvider>
    )
  }
}
