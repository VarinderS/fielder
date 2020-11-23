import React, { FC } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { useField, UseFieldResponse } from './useField';
import { FielderContext } from './context';
import { FieldConfig } from './types';

let context = {
  fields: {},
  mountField: jest.fn(),
  unmountField: jest.fn(),
  blurField: jest.fn(),
  setFieldValue: jest.fn(),
  setFieldState: jest.fn(),
};
let response: UseFieldResponse;
let args: FieldConfig<any>;

const F: FC = ({ children }) => {
  response = useField(args);

  return <>{children}</>;
};

const Fixture: FC = ({ children }) => {
  return (
    <FielderContext.Provider value={context as any}>
      <F>{children}</F>
    </FielderContext.Provider>
  );
};

beforeEach(jest.clearAllMocks);

beforeEach(() => {
  context = {
    fields: {},
    mountField: jest.fn(),
    unmountField: jest.fn(),
    blurField: jest.fn(),
    setFieldValue: jest.fn(),
    setFieldState: jest.fn(),
  };
});

describe('on mount', () => {
  beforeEach(() =>
    context.mountField.mockReturnValue({
      value: 'abc',
      isValid: true,
      isValidating: false,
      hasChanged: false,
      hasBlurred: false,
    })
  );

  it('calls mount field', () => {
    args = { name: 'someField', initialValue: 'abc', validate: jest.fn() };
    mount(<Fixture />);

    expect(context.mountField).toBeCalledTimes(1);
  });

  it('returns state from "mountField" response', () => {
    args = { name: 'someField', initialValue: 'abc', validate: jest.fn() };
    mount(<Fixture />);

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "name": "someField",
          "onBlur": [Function],
          "onChange": [Function],
          "value": "abc",
        },
        Object {
          "error": undefined,
          "hasBlurred": false,
          "hasChanged": false,
          "isValid": true,
          "isValidating": false,
        },
      ]
    `);
  });
});

// describe('validation (mount)', () => {
//   const validationFn = jest.fn();

//   it('calls validation function', () => {
//     args = { name: 'someField', initialValue: 'abc', validate: validationFn };
//     mount(<Fixture />);

//     expect(validationFn).toBeCalledTimes(1);
//     expect(validationFn).toBeCalledWith(
//       expect.objectContaining({
//         event: 'mount',
//         value: args.initialValue,
//       })
//     );
//   });

//   it('calls validation function "mount"', () => {
//     args = {
//       name: 'someField',
//       initialValue: 'abc',
//       validate: { mount: validationFn },
//     };
//     mount(<Fixture />);

//     expect(validationFn).toBeCalledTimes(1);
//     expect(validationFn).toBeCalledWith(
//       expect.objectContaining({
//         event: 'mount',
//         value: args.initialValue,
//       })
//     );
//   });

//   it.only('sets validation state', () => {
//     args = { name: 'someField', initialValue: 'abc', validate: validationFn };
//     validationFn.mockImplementation(() => {
//       throw Error('oops!');
//     });

//     mount(<Fixture />);
//     expect(response[1].error).toEqual('oops!');
//     expect(response[1].isValid).toEqual(false);
//   });
// });

// describe('on mount', () => {
//   it('calls mountField with default values', () => {
//     args = { name: 'someField' };
//     mount(<Fixture />);

//     expect(context.mountField).toBeCalledTimes(1);
//     expect(context.mountField).toBeCalledWith({
//       name: args.name,
//       initialError: undefined,
//       initialValid: true,
//       initialValue: undefined,
//       initialTouched: false,
//       validate: undefined,
//       validateOnBlur: true,
//       validateOnChange: true,
//       validateOnUpdate: false,
//     });
//   });

//   it('calls mountField with default values (validate function provided)', () => {
//     args = { name: 'someField', validate: jest.fn() };
//     mount(<Fixture />);

//     expect(context.mountField).toBeCalledTimes(1);
//     expect(context.mountField).toBeCalledWith({
//       name: args.name,
//       initialError: undefined,
//       initialValid: false,
//       initialValue: undefined,
//       initialTouched: false,
//       validate: args.validate,
//       validateOnBlur: true,
//       validateOnChange: true,
//       validateOnUpdate: false,
//     });
//   });

//   it('calls mountField with default overrides', () => {
//     args = {
//       name: 'someField',
//       initialError: 'aaa',
//       initialValid: true,
//       initialValue: 'hello',
//       initialTouched: true,
//       validate: jest.fn(),
//       validateOnBlur: false,
//       validateOnChange: false,
//       validateOnUpdate: true,
//     };
//     mount(<Fixture />);

//     expect(context.mountField).toBeCalledTimes(1);
//     expect(context.mountField).toBeCalledWith({
//       ...args,
//     });
//   });

//   it('does not call setFieldState with validation args', () => {
//     args = {
//       name: 'someField',
//       initialError: 'aaa',
//       initialValid: true,
//       initialValue: 'hello',
//       initialTouched: true,
//       validate: jest.fn(),
//       validateOnBlur: false,
//       validateOnChange: false,
//       validateOnUpdate: true,
//     };

//     mount(<Fixture />);

//     expect(context.setFieldState).toBeCalledTimes(0);
//   });
// });

// describe('on unmount', () => {
//   it('calls unmountField', () => {
//     args = { name: 'someField' };
//     const wrapper = mount(<Fixture />);
//     wrapper.unmount();

//     expect(context.unmountField).toBeCalledTimes(1);
//     expect(context.unmountField).toBeCalledWith({
//       name: args.name,
//       destroy: false,
//     });
//   });

//   it('calls unmountField and destroys value', () => {
//     args = { name: 'someField', destroyOnUnmount: true };
//     const wrapper = mount(<Fixture />);
//     wrapper.unmount();

//     expect(context.unmountField).toBeCalledTimes(1);
//     expect(context.unmountField).toBeCalledWith({
//       name: args.name,
//       destroy: true,
//     });
//   });

//   it('calls unmountField and passes destroy value after change', () => {
//     args = { name: 'someField', destroyOnUnmount: false };
//     const wrapper = mount(<Fixture />);
//     args = { ...args, destroyOnUnmount: true };
//     wrapper.setProps({});
//     wrapper.unmount();

//     expect(context.unmountField).toBeCalledTimes(1);
//     expect(context.unmountField).toBeCalledWith({
//       name: args.name,
//       destroy: true,
//     });
//   });
// });

// describe('on blur', () => {
//   beforeEach(() => {
//     args = { name: 'someField' };
//     const wrapper = mount(<Fixture />);
//     response[0].onBlur();
//     wrapper.setProps({});
//   });

//   it('calls blurField', () => {
//     expect(context.blurField).toBeCalledTimes(1);
//     expect(context.blurField).toBeCalledWith({
//       name: args.name,
//     });
//   });
// });

// describe('on change', () => {
//   describe('on event arg', () => {
//     it('calls setFieldValue with field name', () => {
//       const value = 'newval';
//       const target = document.createElement('input');
//       target.type = 'text';
//       target.value = value;

//       mount(<Fixture />);
//       response[0].onChange({
//         currentTarget: target,
//       } as any);

//       expect(context.setFieldValue).toBeCalledTimes(1);
//       expect(context.setFieldValue).toBeCalledWith(
//         expect.objectContaining({
//           name: args.name,
//         })
//       );
//     });
//   });

//   describe('on value arg', () => {
//     it('calls setFieldValue with field name', () => {
//       const value = 'newval';

//       mount(<Fixture />);
//       response[0].onChange(value);

//       expect(context.setFieldValue).toBeCalledTimes(1);
//       expect(context.setFieldValue).toBeCalledWith(
//         expect.objectContaining({
//           name: args.name,
//         })
//       );
//     });
//   });

//   describe('on value action dispatch', () => {
//     describe('on no existing value', () => {
//       it('returns change value', () => {
//         const value = 'newval';

//         mount(<Fixture />);
//         response[0].onChange(value);

//         const action = context.setFieldValue.mock.calls[0][0].value;
//         expect(action()).toEqual(value);
//       });
//     });

//     describe('on existing value is string', () => {
//       it('returns change value', () => {
//         const oldValue = 'oldval';
//         const value = 'newval';

//         mount(<Fixture />);
//         response[0].onChange(value);

//         const action = context.setFieldValue.mock.calls[0][0].value;
//         expect(action(oldValue)).toEqual(value);
//       });
//     });

//     describe('on existing value is array (without new value)', () => {
//       it('appends change value to array', () => {
//         const oldValue = ['oldval'];
//         const value = 'newval';

//         mount(<Fixture />);
//         response[0].onChange(value);

//         const action = context.setFieldValue.mock.calls[0][0].value;
//         expect(action(oldValue)).toEqual([...oldValue, value]);
//       });
//     });

//     describe('on existing value is array (with change value)', () => {
//       it('removes change value from array', () => {
//         const oldValue = ['newval', 'oldval'];
//         const value = 'newval';

//         mount(<Fixture />);
//         response[0].onChange(value);

//         const action = context.setFieldValue.mock.calls[0][0].value;
//         expect(action(oldValue)).toEqual(oldValue.filter((v) => v !== value));
//       });
//     });
//   });
// });

// describe('on validation arg change', () => {
//   let wrapper: ReactWrapper<any>;

//   beforeEach(() => {
//     args = {
//       name: 'someField',
//       validateOnBlur: false,
//       validateOnChange: true,
//       validateOnUpdate: false,
//       validate: jest.fn(),
//     };
//     wrapper = mount(<Fixture />);
//   });

//   describe('on validate change', () => {
//     it('calls setFieldState with new function', () => {
//       const oldState = { ...args };

//       args = {
//         ...args,
//         validate: jest.fn(),
//       };

//       wrapper.setProps({});

//       expect(context.setFieldState).toBeCalledTimes(1);
//       expect(context.setFieldState.mock.calls[0][0].state(oldState)).toEqual(
//         expect.objectContaining({
//           ...oldState,
//           _validate: args.validate,
//         })
//       );
//     });
//   });

//   describe('on validateOnBlur change', () => {
//     it('calls setFieldState with new value', () => {
//       const oldState = { ...args };

//       args = {
//         ...args,
//         validateOnBlur: true,
//       };

//       wrapper.setProps({});

//       expect(context.setFieldState).toBeCalledTimes(1);
//       expect(context.setFieldState.mock.calls[0][0].state(oldState)).toEqual(
//         expect.objectContaining({
//           ...oldState,
//           _validateOnBlur: true,
//         })
//       );
//     });
//   });

//   describe('on validateOnUpdate change', () => {
//     it('calls setFieldState with new value', () => {
//       const oldState = { ...args };

//       args = {
//         ...args,
//         validateOnUpdate: true,
//       };

//       wrapper.setProps({});

//       expect(context.setFieldState).toBeCalledTimes(1);
//       expect(context.setFieldState.mock.calls[0][0].state(oldState)).toEqual(
//         expect.objectContaining({
//           ...oldState,
//           _validateOnUpdate: true,
//         })
//       );
//     });
//   });

//   describe('on validateOnChange change', () => {
//     it('calls setFieldState with new value', () => {
//       const oldState = { ...args };

//       args = {
//         ...args,
//         validateOnChange: false,
//       };

//       wrapper.setProps({});

//       expect(context.setFieldState).toBeCalledTimes(1);
//       expect(context.setFieldState.mock.calls[0][0].state(oldState)).toEqual(
//         expect.objectContaining({
//           ...oldState,
//           _validateOnChange: false,
//         })
//       );
//     });
//   });
// });
