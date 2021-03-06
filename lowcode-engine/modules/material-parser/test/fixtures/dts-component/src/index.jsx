import React from 'react';
import { Select, Input } from '@alifd/next';
import i18n from '@alife/whale-i18n';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getLanguage } from '@alife/whale-util';

import i18nBundles from './i18n';
import countryDataSource from './data';

const lang = getLanguage();
const isCN = ['ZH_CN', 'ZH-CN'].includes(lang && lang.toUpperCase());

class WhaleTelephone extends React.Component {
  static displayName = 'WhaleTelephone';

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    className: '',
    disabled: false,
    onChange: undefined,
    value: {
      countryCode: '+86',
      phoneNumber: '',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      popupStyle: {},
      tmpSelectedItem: {},
    };
  }

  componentDidMount() {
    if (!this.props.readOnly) {
      this.handleStyle();
      window.addEventListener('resize', this.resizeEventFunction);
    }
  }

  componentWillUnmount() {
    if (!this.props.readOnly) {
      window.removeEventListener('resize', this.resizeEventFunction);
    }
  }

  resizeEventFunction = () => this.handleStyle();

  handleStyle = () => {
    const { el } = this;
    const elWidth = el.offsetWidth;
    this.setState({
      popupStyle: {
        width: elWidth,
      },
    });
  };

  selectChange=(val, actionType, tmpSelectedItem) => {
    const { value, onChange } = this.props;
    this.setState({ tmpSelectedItem });
    onChange && onChange(Object.assign({}, value, { countryCode: val }), tmpSelectedItem, 'select');
  };

  inputChange = (val) => {
    const { value, onChange } = this.props;
    const { tmpSelectedItem } = this.state;
    onChange && onChange(Object.assign({}, value, { phoneNumber: val }), tmpSelectedItem, 'input');
  };

  renderItem = (item) => {
    const { countryName, countryName_zh: countryNameZh, value } = item;
    return (
      <div>
        <span className="country-span">{!isCN ? countryName : countryNameZh}</span>
        <span className="code-span">{value}</span>
      </div>
    );
  };

  render() {
    // i18nBundle ??? i18n ???????????????????????? prop??????????????????????????????????????????
    const {
      style,
      className,
      disabled,
      value: { countryCode, phoneNumber },
      readOnly,
    } = this.props;
    // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? Fusion ??????????????????
    const cls = classnames({
      'whale-telephone': true,
      'whale-telephone-readonly': !!readOnly,
      [className]: className,
    });
    const { popupStyle } = this.state;

    if (readOnly) {
      return (
        <div className={cls} style={style}>
          <span>{countryCode}</span>&nbsp;<span>{phoneNumber}</span>
        </div>
      );
    }

    return (
      <div className={cls} style={style} ref={(ref) => { this.el = ref; }} data-name="WhaleTelephone">
        <Select
          className="whale-telephone-select"
          disabled={disabled}
          dataSource={countryDataSource}
          itemRender={this.renderItem}
          popupStyle={popupStyle}
          popupClassName="whale-telephone-select-popup"
          defaultValue={countryCode}
          onChange={this.selectChange}
        />
        <Input
          className="whale-telephone-number-input"
          value={phoneNumber}
          disabled={disabled}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

// ?????? export ???????????????????????????????????????
export default i18n(WhaleTelephone, i18nBundles);
// ???????????????????????????????????????????????? HOC ??????????????????????????????????????????????????????????????????????????? HOC ?????????
export { i18nBundles, WhaleTelephone as Pure };
