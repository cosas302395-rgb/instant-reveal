export function initExtension(_, { eventSource, eventTypes }) {
    console.log("[Instant Reveal] Extension loaded.");

    eventSource.on(eventTypes.MESSAGE_GENERATED, (message) => {
        if (message && message.text) {
            message.streaming = false;
            message.show_text = message.text;
        }
    });
}
