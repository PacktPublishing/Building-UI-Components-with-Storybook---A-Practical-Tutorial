import React, { useState } from 'react';
import { ButtonCounter } from './ButtonCounter';
import { Counter } from './Counter';
import {within, userEvent} from '@storybook/testing-library';

export default {
    title: 'Counter/Page',
    component: Counter,
    tags: ['autodocs'],
};

export const Default = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <Counter>
            <ButtonCounter
                onClick={handleCount}
                label='increment'
                backgroundColor='green'
                buttonStyleVersion='counter-button2'
                size='large'
            />
        </Counter>
    );

};

export const IncrementByTwo = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', {
            name: ButtonCounter,
        });
        await userEvent.click(button, {delay:200});
        await userEvent.click(button, {delay:200});
    },
};