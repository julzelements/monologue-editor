/**
 * WebMIDI actions.
 */
export const MIDI_ACCESS_GRANTED = "MIDI_ACCESS_GRANTED";
export const MIDI_PORT_CONNECTED = "MIDI_PORT_CONNECTED";
export const MIDI_PORT_DISCONNECTED = "MIDI_PORT_DISCONNECTED";
export const MIDI_MESSAGE_RECEIVED = "MIDI_MESSAGE_RECEIVED";

/**
 * Create an notification action for a granted midiAccess object.
 * @param {Object} access - The midiAccess object.
 */
export const grantMIDIAccess = (access: WebMidi.MIDIAccess) => ({
  type: MIDI_ACCESS_GRANTED,
  payload: access,
});

/**
 * Create a notification action for a connected MIDI port object.
 * @param {Object} port - A MIDI port object.
 */
export const connectMIDIPort = (
  port: Pick<
    WebMidi.MIDIPort,
    "manufacturer" | "id" | "name" | "state" | "type"
  >
) => ({
  type: MIDI_PORT_CONNECTED,
  payload: port,
});

/**
 * Create a notification action for a disconnected MIDI port object.
 * @param {Object} port - A MIDI port object.
 */
export const disconnectMIDIPort = (port: Pick<
    WebMidi.MIDIPort,
    "manufacturer" | "id" | "name" | "state" | "type"
  >) => ({
  type: MIDI_PORT_DISCONNECTED,
  payload: port,
});

/**
 * Create a notification action for a received MIDI message.
 * @param {Object} message - A MIDI message envelope.
 */
export const receiveMIDIMessage = (message: Pick<WebMidi.MIDIMessageEvent, 'data' | 'timeStamp' | 'target'>) => ({
  type: MIDI_MESSAGE_RECEIVED,
  payload: message,
});
