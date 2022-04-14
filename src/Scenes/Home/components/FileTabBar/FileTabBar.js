import { Tabs } from 'antd';
import React from 'react';
import { Tab } from './FileTabBar.style';

const { TabPane } = Tabs;

class FileTabBar extends React.Component {
    newTabIndex = 0;

  state = {
    activeKey: null,
    panes: [],
  };
  componentDidMount(){
    const _this = this;
    this.setState({panes:_this.props.initialPanes,activeKey:_this.props.initialPanes[0].key});
}

  onChange = activeKey => {
    this.setState({ activeKey });
    this.props.onTabChange(activeKey);
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
    };

//   add = () => {
//     const { panes } = this.state;
//     const activeKey = `newTab${this.newTabIndex++}`;
//     const newPanes = [...panes];
//     newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
//     this.setState({
//       panes: newPanes,
//       activeKey,
//     });
//   };

  remove = targetKey => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };
 
  render() {
    
    const { panes, activeKey } = this.state;
    return (
      <Tab
        hideAdd
        type="editable-card"
        size="small"
        onChange={this.onChange}
        activeKey={activeKey}
        onEdit={this.onEdit}
      >
        {panes.map(pane => (
          <TabPane tab={pane.title}  key={pane.key} closable={true}/>
           
        ))}
      </Tab>
    );
  }
}
export default FileTabBar;