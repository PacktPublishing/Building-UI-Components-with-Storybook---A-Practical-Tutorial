import InboxScreen from './InboxScreen';
import store from '../lib/store';
import { Provider } from 'react-redux';
import {rest} from 'msw';
import {MockedState} from './TaskList.stories';
import { fireEvent,
         within,
         waitFor,
         waitForElementToBeRemoved } from '@storybook/testing-library'

export default {
    component: InboxScreen,
    title:'InboxScreen',
    decorators: [(story)=><Provider store={store}>{story()}</Provider>],
    tags:['autodocs'],
};

export const Default = {
    parameters: {
        msw: {
            handlers: [
                rest.get('https://jsonplaceholder.typicode.com/todos?userId=1',
                (req, res, ctx) => {
                    return res(ctx.json(MockedState.tasks));
                }
                ),
            ],
        },
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
        await waitFor(async () => {
            await fireEvent.click(canvas.getByLabelText('pinTask-1'));
            await fireEvent.click(canvas.getByLabelText('pinTask-3'));
        })
    }
};

export const Error = {
    parameters: {
        msw: {
            handlers: [
                rest.get('https://jsonplaceholder.typicode.com/todos?userId=1',
                (req, res, ctx) => {
                    return res(ctx.status(403));
                }
                ),
            ],
        },
    },
};


