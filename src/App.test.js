import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockTimes = ['17:00', '18:00', '19:00'];
const mockSubmitForm = jest.fn();
const mockDispatch = jest.fn();

beforeEach(() => {
  mockSubmitForm.mockClear();
  mockDispatch.mockClear();
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

describe('BookingForm Component Tests', () => {
  test('renders form with all input fields and submit button', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionInput = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Submit reservation/i });

    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('displays validation alert when submitting empty form', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    const submitButton = screen.getByRole('button', { name: /Submit reservation/i });
    fireEvent.click(submitButton);

    expect(mockSubmitForm).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Please fill out all fields before submitting.');
  });

  test('calls submitForm when form is valid and submitted', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2023-07-22' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'birthday' } });
    
    const submitButton = screen.getByRole('button', { name: /Submit reservation/i });
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2023-07-22',
      time: '18:00',
      guests: '2',
      occasion: 'birthday'
    });
  });
});
