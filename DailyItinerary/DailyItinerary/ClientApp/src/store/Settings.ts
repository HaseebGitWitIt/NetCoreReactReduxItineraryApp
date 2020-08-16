import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface SettingState {
    newsTopics: string[];
    postalCode: string;
    msg: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface SaveSettingsAction { type: 'SAVE_SETTINGS' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = SaveSettingsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    saveSettings: () => ({ type: 'SAVE_SETTINGS' } as SaveSettingsAction),
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<SettingState> = (state: SettingState | undefined, incomingAction: Action): SettingState => {
    if (state === undefined) {
        return {
            newsTopics: [],
            postalCode: "",
            msg: "ERROR"
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SAVE_SETTINGS':
            return {
                newsTopics: ["TOPIC1", "TOPICS2"],
                postalCode: "L5M 6W5",
                msg: "SUCCESS"
            };
        default:
            return state;
    }
};
