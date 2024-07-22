import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { initializeTimes, updateTimes } from './Main'; 

global.fetchAPI = jest.fn();

describe('Main Component Tests', () => {
  beforeEach(() => {
    fetchAPI.mockReset();
  });

  test('initializeTimes returns available booking times', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const times = initializeTimes();
    expect(times).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalled();
  });

  test('updateTimes returns available booking times for a given date', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const initialState = [];
    const action = { type: 'UPDATE_TIMES', date: '2023-07-22' };
    const times = updateTimes(initialState, action);
    expect(times).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date));
  });
});
