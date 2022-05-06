export function propChanged(prop) {
    window.eventBus.emit('prop-changed', null, prop)
}