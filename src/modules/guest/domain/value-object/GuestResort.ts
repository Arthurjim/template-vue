import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class GuestResort extends StringValueObject {
  constructor(value: string) {
    super(value)
  }

  toString(): string {
    const resorts: Record<string, string> = {
      ZHBP: 'Beach Palace',
      ZRCZ: 'Cozumel Palace',
      ZHLB: 'Le Blanc Cancun',
      ZMNI: 'Moon Palace Nizuc',
      ZMGR: 'The Grand at Moon Palace',
      ZMSU: 'Moon Palace Sunrise',
      ZHPL: 'Playacar Palace',
      ZHSP: 'Sun Palace',
      ZCJG: 'Moon Palace Jamaica',
      ZPLB: 'Le Blanc Los Cabos'
    }

    return resorts[this.value] ?? ''
  }
}
