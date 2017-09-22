import * as _ from 'lodash';
import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { Chip } from 'material-ui';

import * as protos from '../../../proto/protos';


const styleSheet: StyleRulesCallback = theme => ({
  chip: {
    margin: theme.spacing.unit
  }
})

namespace ChipCell {
  export interface Props {
    tags: protos.model.ITag[]
    classes: any
  }
  export interface State {}
}

class ChipCell extends React.Component<ChipCell.Props, ChipCell.State> {
  render() {
    const { tags, classes } = this.props;
    return (
      <div>
      {_.map(tags, (tag, i) =>
        <Chip
          key={i}
          label={tag.key + ": " + tag.value}
          className={classes.chip}
        />
      )}
      </div>
    );
  }
}

const styledChipCell = withStyles(styleSheet, { withTheme: true })(ChipCell)

export {
  styledChipCell as ChipCell
}
