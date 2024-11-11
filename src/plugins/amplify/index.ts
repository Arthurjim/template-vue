import { Amplify, type ResourcesConfig } from 'aws-amplify'
import { Logger } from '@utils/log/Logger'
import { PubSub } from '@aws-amplify/pubsub'
import { config, pubSubConfig } from './aws.config'

Logger.debug('config', config)
Logger.debug('API_BASE', import.meta.env.VITE_BASE_API)
Logger.debug('API_AUTH', import.meta.env.VITE_AUTH_API)
Logger.debug('API_GASTRONOMY', import.meta.env.VITE_GASTRONOMY_API)

Amplify.configure(config as ResourcesConfig)

export const pubsub = new PubSub({
  region: pubSubConfig.region,
  endpoint: `wss://${pubSubConfig.host}/mqtt`,
  clientId: 'pr-miscellaneous-app'
})
