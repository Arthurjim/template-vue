import { Amplify, type ResourcesConfig } from 'aws-amplify'
import { Logger } from '@utils/log/Logger'
import { config } from './aws.config'

Logger.debug('config', config)
Logger.debug('API_BASE', import.meta.env.VITE_BASE_API)

Amplify.configure(config as ResourcesConfig)
