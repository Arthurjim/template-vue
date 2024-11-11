import {
  get as AmplifyGet,
  post as AmplifyPost,
  put as AmplifyPut,
  del as AmplifyDelete,
  patch as AmplifyPatch
} from 'aws-amplify/api'

import { Logger } from '@utils/log/Logger'

import type { Http } from '../../domain/Http'
import type { RequestOptions } from '../../domain/RequestOptions'
import type { OptionsAmplify } from '../../domain/OptionsAmplify'

export default class AmplifyClient implements Http {
  private readonly API_NAME: string = 'api'

  private readonly DEFAULT_HEADERS = {}

  async get<T>(path: string, config?: RequestOptions): Promise<T> {
    const apiName = config?.apiName ?? this.API_NAME
    Logger.debug('API_NAME', apiName)
    const options = this.mergeOptions(config)
    const { body } = await AmplifyGet({
      apiName,
      path,
      options
    }).response
    return (await body.json()) as T
  }

  async post<T>(path: string, config?: RequestOptions): Promise<T> {
    const apiName = config?.apiName ?? this.API_NAME
    const { body } = await AmplifyPost({
      apiName,
      path,
      options: this.mergeOptions(config)
    }).response
    return (await body.json()) as T
  }

  async put<T>(path: string, config?: RequestOptions): Promise<T> {
    const apiName = config?.apiName ?? this.API_NAME
    const { body } = await AmplifyPut({
      apiName,
      path,
      options: this.mergeOptions(config)
    }).response
    return (await body.json()) as T
  }

  async patch<T>(path: string, config?: RequestOptions): Promise<T> {
    const apiName = config?.apiName ?? this.API_NAME
    const { body } = await AmplifyPatch({
      apiName,
      path,
      options: this.mergeOptions(config)
    }).response
    return (await body.json()) as T
  }

  async delete(path: string, config?: RequestOptions): Promise<number> {
    const apiName = config?.apiName ?? this.API_NAME
    const { statusCode } = await AmplifyDelete({
      apiName,
      path,
      options: this.mergeOptions(config)
    }).response
    return statusCode
  }

  private mergeOptions(config?: RequestOptions): OptionsAmplify {
    const headers = config?.headers ?? this.DEFAULT_HEADERS
    const options: OptionsAmplify = {
      headers
    }

    if (typeof config !== 'undefined') {
      if ('params' in config) {
        options.queryParams = config.params
      }

      if ('body' in config) {
        options.body = config.body as JSON
      }
    }

    return options
  }
}
