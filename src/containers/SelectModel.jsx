import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

const Option = Select.Option;

const Container = styled.div`
    display: inlite-block;
    padding-bottom: 20px;
`;

const Descriptions = styled.span`
  font-size: 14px;
`;

const Title = styled.span`
  font-size: 14px;
  display: block;
  padding: 8px 0px;
  font-weight: bold;
`;

class SelectModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  selectModel() {
    return this.state.value || this.props.models[0].value.toString();
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const { models } = this.props;
    const { value } = this.state;
    return (
      <Container>
        <Title>Select models:</Title>
        <Select
          value={value || models[0].value.toString()}
          size="large"
          style={{ width: '100%' }}
          onChange={this.handleChange.bind(this)}
        >
          { models.map(model => <Option key={model.value} value={model.value.toString()} >{ model.label }</Option>) }
        </Select>
        <Descriptions>
          <Title>
            <span className="glyphicon glyphicon-info-sign" />&nbsp;
              Description models:
          </Title>
          { models.map(model => (<div key={model.value}>
            <div><b>{model.label}:</b></div>{ model.description }
          </div>)) }
        </Descriptions>
      </Container>
    );
  }
}

SelectModel.propTypes = {
  models: PropTypes.arrayOf(PropTypes.any),
  selectModel: PropTypes.func.isRequired,
};

SelectModel.defaultProps = {
  models: null,
};

export default SelectModel;

