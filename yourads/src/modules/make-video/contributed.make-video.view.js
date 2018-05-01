import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from 'react-native';

import * as AppFormatter from '../../utils/formatter';
import AppConfig from '../../constants/config';

// declare constant 
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class ContributedProjectMakeVideoView extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    lstContributedProject: PropTypes.any,
    actions: PropTypes.shape({
      listContributedProject: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.listContributedProject();
  }

  renderMainContent() {
    if (this.props.lstContributedProject.length > 0) {
      <FlatList style={{ marginLeft: 0, marginTop: 0, marginBottom: 15 }}
        data={this.props.lstContributedProject}
        renderItem={({ item, separators }) => (
          <View style={{ flexDirection: 'column', margin: 5, borderColor: '#EFEFF4', borderWidth: 1.0, borderRadius: 3.0 }}>
            <View style={{ flexDirection: 'column', marginTop: 5, }}>
              <Text>  {item.name} [{item.id}] </Text>
              <Text>  Loại hợp đồng: {item.contractTypes[0].name} </Text>
              <Text>  Loại cảm xúc: {item.emotion} </Text>
              <Text>  Loại ngành nghề: {item.productTypes[0].name} </Text>
              <Text>  Loại video: {item.videoDurations[0].name} </Text>
              <Text>  Giá: {AppFormatter.currency(item.price != null ? item.price : 0)} </Text>
              <Text>  Thời gian cần: {item.expected_date} </Text>
              <Text>  Nội dung yêu cầu: {item.content} </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    } else {
      return (
        <View style={styles.noData}>
          <Text>Không có dữ liệu</Text>
        </View>
      );
    }
  }

  render() {
    //console.log('Jointed project: ' + this.props.lstContributedProject);
    return (
      <View style={styles.container}>
        {
          this.renderMainContent()
        }
      </View>
    );
  }
}

export default ContributedProjectMakeVideoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
