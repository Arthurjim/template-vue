import { pubsub } from '@plugins/amplify'

export function usePubSub<T>() {
  const subscribe = (topic: string, callback?: (data: T) => void) => {
    try {
      if (!topic) throw new Error('Topic is required')
      pubsub.subscribe({ topics: topic }).subscribe({
        next: (data: unknown) => {
          if (callback) callback(data as T)
        },
        error: (error) => console.error(error),
        complete: () => console.log('Done')
      })
    } catch (error) {
      console.log(error)
    }
  }

  const publish = async (topic: string, message: { title: string; message: string }) => {
    if (!topic) throw new Error('Topic is required')
    if (!message) throw new Error('Message is required')
    await pubsub.publish({
      topics: topic,
      message
    })
  }

  return {
    subscribe,
    publish
  }
}
