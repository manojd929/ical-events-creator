import React, { Component } from "react";
import moment from "moment";
import { Modal, Row, Col, DatePicker, TimePicker, Typography } from "antd";

import items from "./list";
import "./styles.css";

const { Title } = Typography;
const dateFormat = "YYYY-MM-DD";
const timeFormat = "HH:mm";

class EventModal extends Component {
  constructor(props) {
    super(props);
    this.inputs = items.map(item => {
      return {
        start: "",
        title: item.title,
        description: item.description,
        url: item.url
      };
    });
  }

  onDateChange = (date, index) => {
    this.inputs[index].start = [2015, 10, 1, 12, 10];
  };

  onTimeChange = (time, index) => {
    this.inputs[index].start = [2015, 10, 1, 12, 10];
  };

  getItemsList = () => {
    const itemNodes = items.map((item, index) => {
      const { title, description, url } = item;
      return (
        <div>
          <Row gutter={[2, 0]} key={`$[title}-${index}`}>
            <Col span={10}>
              <Title level={4}>{title}</Title>
              <div>{description}</div>
              <div>{url}</div>
            </Col>
            <Col span={8}>
              <DatePicker
                defaultValue={moment("2015-06-06", dateFormat)}
                onChange={d => this.onDateChange(d, index)}
              />
            </Col>
            <Col span={4}>
              <TimePicker
                defaultValue={moment("12:00", timeFormat)}
                onChange={t => this.onTimeChange(t, index)}
                format={timeFormat}
              />
            </Col>
          </Row>
          <div style={{ height: "1em" }} />
        </div>
      );
    });
    return itemNodes;
  };

  render() {
    return (
      <Modal
        title="Create Event"
        visible={this.props.visible}
        onOk={() => this.props.onSubmitEvent(this.inputs)}
        onCancel={this.props.onCloseModal}
      >
        {this.getItemsList()}
      </Modal>
    );
  }
}

export default EventModal;
