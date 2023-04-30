import React from 'react';
import {render, screen} from '@testing-library/react';
import DayView from './DayView';

describe('DayView', () => {
    const testDate = new Date(2022, 3, 1);
    const testChildren = <div>Test child element</div>;

    it('renders the date in long format', () => {
        render(<DayView date={testDate}>{testChildren}</DayView>);
        const dateText = screen.getByText('1 април');
        expect(dateText).toBeInTheDocument();
    });

    it('adds the "today" class to the component when the date is today', () => {
        const today = new Date().getDate();
        const todayDate = new Date(2022, 3, today);
        render(<DayView date={todayDate}>{testChildren}</DayView>);
        const dayViewElement = screen.getByTestId('day-view');
        expect(dayViewElement).toHaveClass('today');
    });

    it('does not add the "today" class to the component when the date is not today', () => {
        const notTodayDate = new Date(2022, 3, 2);
        render(<DayView date={notTodayDate}>{testChildren}</DayView>);
        const dayViewElement = screen.getByTestId('day-view');
        expect(dayViewElement).not.toHaveClass('today');
    });

    it('renders the child elements', () => {
        render(<DayView date={testDate}>{testChildren}</DayView>);
        const childElement = screen.getByText('Test child element');
        expect(childElement).toBeInTheDocument();
    });
});
