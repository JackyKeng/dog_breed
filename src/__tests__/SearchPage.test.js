import '@testing-library/jest-dom';
import * as _ from 'lodash';
import { debounce } from '../utils/Utilities';

jest.useFakeTimers();

describe('debounce', () => {
	let mockFunc;
	let debouncedFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		debouncedFunc = debounce(mockFunc);
	});

	test('execute just once', () => {
		for (let i = 0; i < 100; i++) {
			debouncedFunc();
		}

		// Fast-forward time
		jest.runAllTimers();

		expect(mockFunc).toBeCalledTimes(1);
	});

	test('debouce function should call after 1 second', () => {
		jest.spyOn(global, 'setTimeout');
		debounce(mockFunc)()
		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);


		debounce(mockFunc, 2000)()
		expect(setTimeout).toHaveBeenCalledTimes(2);
		expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 1000);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
	});
});
