import React from 'react';
import { shallow } from 'enzyme';
import { ToastWrapperComponent } from '../ToastWrapper';
import { Type } from '../Toast';

describe('ToastWrapperComponent tests', () => {

  it('should render NetworkErrorToast if type is NETWORK_ERROR', () => {
    const dismiss = () => {};
    const viewName = 'Sites List';
    const show = true;
    const wrapper = shallow(
      <ToastWrapperComponent
        type={Type.NETWORK_ERROR}
        dismiss={dismiss}
        viewName={viewName}
        show
      />
    );
    const networkToast = wrapper.find('NetworkErrorToast');
    expect(networkToast).toHaveLength(1);
    expect(networkToast.props())
    .toEqual({
      type: Type.NETWORK_ERROR,
      dismiss,
      show,
      viewName
    });
  });

  it('should render Toast if type is DANGER', () => {
    const dismiss = () => {};
    const message = 'Error occurred';
    const show = true;
    const wrapper = shallow(
      <ToastWrapperComponent
        type={Type.DANGER}
        dismiss={dismiss}
        message={message}
        show
      />
    );
    const toast = wrapper.find('Toast');
    expect(toast).toHaveLength(1);
    expect(toast.props())
    .toEqual({
      type: Type.DANGER,
      dismiss,
      show,
      children: message
    });
  });

  it('should render Toast if type is SUCCESS', () => {
    const dismiss = () => {};
    const message = 'successfully saved';
    const show = true;
    const wrapper = shallow(
      <ToastWrapperComponent
        type={Type.SUCCESS}
        dismiss={dismiss}
        message={message}
        show
      />
    );
    const toast = wrapper.find('Toast');
    expect(toast).toHaveLength(1);
    expect(toast.props())
    .toEqual({
      type: Type.SUCCESS,
      dismiss,
      show,
      children: message
    });
  });
});
