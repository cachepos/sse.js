declare module '@cachepos/sse.js' {
    type EventSourceInit = {
        headers?: object
        payload?: any
        method?: string
    } & globalThis.EventSourceInit


    import EventSource = globalThis.EventSource

    class SSE extends EventSource {
        constructor(url: string, eventSourceInitDict?: EventSourceInit)
        stream(): void
    }

    export { SSE }
}
