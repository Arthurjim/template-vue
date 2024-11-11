import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class ServiceZoneHotel extends StringValueObject {
  constructor(value: string) {
    super(value)
  }

  toZone(): string {
    const zones: Record<string, string> = {
      ZHBP: 'ZH',
      ZRCZ: 'ZR',
      ZHLB: 'ZH',
      ZMNI: 'MP',
      ZMGR: 'MP',
      ZMSU: 'MP',
      ZHPL: 'ZH',
      ZHSP: 'ZH',
      ZCJG: 'ZC',
      ZPLB: 'LBLC'
    }

    return zones[this.value] ?? 'ALL'
  }
}
