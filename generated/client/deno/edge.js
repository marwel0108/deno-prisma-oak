const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DinosourScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Dinosour: 'Dinosour'
});

const compressedDMMF = 'N4IgJghgLhC2D2YCmAbEAuUSB2BXWAzhgNoC6ANCAsikesaNnEhiACICW28B8uATiEpgARgDlmGPChSUAZh1Rg6DEE1gt0IDmCEgA1l11aCAYwgoIgyhwIAZW1AxyLBJDYIAlJAEdcHfiRjKH5cd20CAFVsDj9NF1pw2wBJYNCkryQIMAB5bBQAT2dXcIALCAI2JBdcFCgANQswjBCwyigCgAdNEGTsJ2FqiFqnTDVJLWGoeC5TQI1+vSsAcxVSAF8PAHEcJH5oIOLEj0jOyCgggEFRhLdNxgnxjT1DbGMQMwsrPVsHAhuSh5vH4Aod0K0MtFYs1wekPKkjm4gVlcvkiuhbmUKlUanVGigYZj2l0egBlEJcZY/Ag7bB7A7GIkRU7nK4AxL3J49ZBmfgcTpQDjwbAvIysT6WawRP7spERYH+QJpNrMmJxREZBEYwHylF5QoayjlSpDEb4wk6jrdVjkvnYKnbXb7C6MnW2FkM64a9YUECdPmwKwFADSSHR0lkIFwarCADFFChlCRfdHoUg+sgAB5INaOunOsGYn3E7prTYfUylJCBjCgLidXBQHIiABWSFMUAAKiS6KB/bYa/QHs8tJxuLwBAB1KuBPoNgZUJAwWsfPj8Uw9Mc8NcgcumYX/fZcKC9qgQTNifDxpR0COUWBcS+wa+J2+1FDlhQ3kjDnqXMRsNSCqgq6xwRJeMgQCIKDxG62Dzt2pY/iAVqblw25TjO6bwY2ejqDmnQQBurD9gQNaUCg8DmIKwqsPWjbNm2HaITm1Iyt65CgKhrBbhO/DTns2HznhzAEIRxFaKR5EgJR1FCiKWj0U2rbtl2PZsY4LTpD6nL4awOSeEBviKoWboEBBljQbBYFKSxKhcSSPHoXxAmzjhC74WJRE9FJEB6LJ0DyXR7mMapdkaf8WlhDpnFcqwYg5J2Rkgkqhrge+UEwWltnqUOKGOaOzlrq5Qm4ZQnniT5fJkX5FFUYFtGKSFKnMepHjsdqHKxdxhXjsVWFzmVXJeRJfrVdJAU0Qp2jNUxalIe1mmwtFGyxXpim6MiKWmTZ5kZVZ2XueFeU9b0/TxnUewiRoI1VQOtUyfVU3BfOoWtQt0pLUW3UFWdC6TUFJjmJKEWykgMW/qwelbSZoFyrYFmZdZ8NHblqinbalIXRcUoVd5JHjQ9AONTNr0tfNrGLZFnV3D91paJj9r+U9gMVl8Uq/F9JQQ3FWg8nM/LPTDIHZXtkEHTTSSo0hJ2/YzyzY1d5WiZVBP3czckk0pb0U0QVNg5yGMUkzdWa9NErfPr3obKtkO9Rh/A5PwyD8AAQgUk4cFApTeJYU2DQu+7YIeEDHqegYXleCZJugACM96PlH37oAADJ+0f2bz2ibbq21wxkiMS0yOUy+jcvwPwTbO0rw2q5JhMaw1004Pg4VW5LPPrXFwupZLHiF1lfek42x1l/TICkhXVcu9dBH4/X6um03rAt7AbefdTRa21n/N8gKQU9zt8Ni5Zg/F9LrGy+Pk+V07M/KzdddjYvj1myveBr21G8GzbumPLx/VBJQjiAHPQQcQ5hxXBHJ8L4Y7xyoInZ8GcMCx3TsnVQXcdDJVhqLAeyMpYITRg5cefR/osxJhbDm9guYcm3l3aGuccFDwRvtM+cFCGl2IWSY2DpX7LyBuzUG1tO7/yKgIO+ex3ae29pcZYyxAjLCbqAyg4CQih36OHc8MDkFxwTtgbRyc07yB0Rgx4WDD7537qw/BNgL6ZwxlPCRuMVbz2fjVRuz0tCr3XpzTe3M6GPAYbYYCvdi4nyRodDhl8x5kkcdXZxj9XG+Q8azbxX9fE/z/iOcAOYBb71ohY3B1jIkjyIfla+cT761ySQ3JeniQBpI+hk4Ra1HgAH19zRgXME4yItmHhKLuw0pnDyloT6gIAAwnwfoTj3ayPkUgRRFxlHVNGskuprNtbkx8dQvxtCsk9DaRAAAbrwnpecinizYTZOxyFToAIEJcU5syCjzIUQcFZeM1m1L4fUrZc0dkdS3gc1gbSI7YL6WEvBJTdZ3N+g8/gABZc8Ly3mLI+e5Wet01buI2VrWaYV0m7Mya07JYKuAQtCWZaFzDblXzGQ7RFXBUVyPecszFD857fJfsTaa/zCVNOJS0u2IA2kEHwJSo+Bdim0qifY+FYj+CknwCyhZSzSoeRcdy3FvzNkEvepTb+wiAnZIRaSYGVgSrSNKGi9VBAVkaGXGMPio0EW7hUQeNRkCxjQKTq+KQ749EGP9egCMaCQ2mOyf+QChT+k0vPnKuF48zUWv4lha1tqDj2o5asu6OreUvQYtsolQLuZ0wZXxc17MrVextay9FFxs3CU5dihe+byF8v1bC9uEIRHZIMpKyx6Urk2OHrC+lTlxlKtTTWmR9a7WfK1XmiaHbC3KQBSWpavaTU9ASklWNUKZUJuGdErhk6HZVslLOutaqs2LsSdqldb8mpkw3YK0tXUz320rTO9NtbM2NvvVy5dRNV0vqLW+w1zTlrgx3XRHO5ymGHpHTC0eX6/oZvnVmxWCTgM4qffwsdOtAU0Npuh0hKSKGpqER3ODWggmZAuXGo9Qzx0xJtDwzDt7G04axU/dZur8WvoFVBoVHdy0cbtLwgtAiQbt2BaS7kuS95C0YZC6lLGbmJonQzTj/6sM8Y4JdXDra3EEb+V2kjeyyOjMk5SSj5tqPyf8X2ita4JmBAxc2kAqijwaKgVov1Mc7wIP0UFt8Mhw0x0jT0BjISwQQisSh2VJ75XXx4Q58UTmjW0ZBXzZTgsD5qd7ol4dp9R0l1PbZ3TUnMuyctjl4FdH2CKuiJWds+gggeayOy7zvn1EngC5HJBycQsPjCyNkNYbjHoJFeY4rUqkvldQ2U06FG8WOcEc5/ZimoaSFjaVlhyXj1sfQ/LOrbM5ONZc7t/LvJCsFIW8qaVx3WNoeqxPDLG2stbeu/s5rCKPS9aGv171oBfWTeC4G0LwaoeRZmxGkVcXelUt2vGt7q25ZfcE5tq70HvpnZ4bAoHSAcjdGdPJJtQ0vkgYu/yg1es/t3Ga7vB7IoD0ade1p1LSbuG1e+/VqhH6bNGyk8Ts4Bwyf0imlTzVD7acC6I8W99pHYOufPXxNrVZTCdbACTlZoP/M+sC5DiLkZxuw7N1FzOmCEOMaQ5z5bKXTsffWzjn7eOxME9d+daOJOpcU4PEB0zAmZNK8g4z/HN2kf7ae5cp3J33ui/s4ryhNHvfJ/tOL1kAem6y74zUnlYHw8icj176PO8Cv5PZ3H5jXOUbafYzVlP7vBfp7LYTsXfuJcXFzzL4P/Gflh/p92pnauAeKu6wcZF2ACgG89X5wbxvhuwLN0G8LAb4cgC/IjrO83EPqbR5phvPOdN/Qu2n7bzO8vd1r4dgZ1yT8u8z9J4vl+x/q7u3k1TB+StwjKxEs7knljvzq3pdg1lHv9jfoDj3kgDPgUIio2EojmobkvuDibqvpvubogpgaGu+NbshPQrHr/otgAYMtzs/iAS3mHu/pASLlQVnt3jnuTnngPoXu2s+iXgzu3jtiKqztXoOvHoAYnpjulqATQdlnQeDBJs3owUoP7iwf3jmjTvhqBpwSPlZpkhPlOlrh1kECTvAfPsHF6kbugSvjomNjgRYfgQjtFnNnbvFkOkdgnhjiMmtosKnpIeXp+j7lANnpLooZTmwY+moYRhoZutZmrrdrfiQU4Q/hVnSk3p9uIW/l4cLtIZ3ljEwQEdLkEcoUuqoXTpZhESSnwVXj/vbofsfOjhQcAWIdQakb9lIYbAwQrNkb3oEUHvkfLoUYruESrpETpM1qQrxh6sYYvpouYaNtDhbhvngVvjvnYVnMZK4IIXXi4bUaIT0G7hIU0d4dftERShzkfvXgQqfkkTsY0Z7h1NujftwFAH0GschhsU/nUdsR4WAbQWJrcdEXUE8Y7sIa4VVu4WQpwV8ekZ/jJBcP8ScS8WcZQSQh8bsdcarpCcsN0pUajtUcfvCW8awJcWCWkaic1uiSwMcdiacbYo3uRkiVcRAfsVEUjvABiY4UIeQa8VsfibSYSXsRCTISAGIDmC6CMUZjjAXiEUUcJtwVfuPjfvLKMT5gvgNpMZblgevqblgQQXlF3CsbQDCRSXCVSecZkSbJ8USYMc1kcbXs8YCZsW4a0RfuaaMD8UyQ8TXrEWyY/riZybIa/jySidTC6VnH8eSS9oaWOnib6Y6bycSTfpdPqWGbaRyfafUaacifSRCSSSySjqQc4Umd6SmXzg0f6RmbGdEaSQmUtvmUaQiUWWmXSULmWSKkHDAFwGXqyesdWRGT6ckcWYRuCU2VnP8FYCeNapWWQV6TWZGb2fWSWY2RaTfjgMoGOaGVWeyQWcCQ6Z4TGQudEdQGSdaQCeuVOT2QAIphD8AIGIAHkqFtrmapIfyaHCpZz3Hjl5nHndmFl2azn9lOkcToaCn/BBDymik1y3lmahEWZSmj7NG/zREIpTJdKqpsoapgJKlg5nhTEhrwKzEalxxakxbwZvnxErZfkMyVJgUFF3mQUPmtwlHPlEHPCrkTkJHUkfY3zTyUU9HUUXaNKiaZk378EVEdk2kfmVZpaxK3zxLikK5gF8Vl4CXaEOxPLLDIUNqoVjEQKmGYWqm6Iw5zGoK2E25mIOE5lxE1HJmbkVJSVVLgWh7F7yU8HX5KV8TIqZhqXqpGFaVoE6UGXqm4GGXb4mL2HEUWUbkSU2gUUmaD5F6cGOUymQnI5MaiWTmflWWSWcXRXsH3kkzxUf4s7lFFYemdliWJFnZRUyW9FyWPn0W5YuVrhMrYAeVeYg7oXaUQ4BX+U6KBWLHGXZL76Ym5kkVAE9kcVOKVU8WK55WwV3HEGDXmU4knlkUTwVUtoxUcGEbTUMmQlCVFXzWemsXGnsWrW5pVVh5bWKXQGKrKqwDNXA6BxtU+UdXdVdXJw9XBV76mXJVHmpXiW86RU2VcV4aTXVV0UDFaE36kJcYoUEAKmoEqlzGWETa4HTZBWzbLF+CrHMXvm/VlW+HRkBmlF77un7UlW41sUgkE2lmBnaTNb3GPHY3DUiHLUEm/k7nOm01xnZnfWwldl/Vn6s31IDm7kirxmM1hVLXpVcmgls2E0MWPDomhWLVpURVaCC2szC1E1dwVni3K380XHcmy3U1a2BLMlK2Ukq3/Vq2G1C1/niYAVClBBQ36bcY5gKl2VD7F79H8WDldwdLTLc0O682lUU2/SAXCm+7GYTUQWSkQal5OWMlZxHKnLm3hn60O1AVgCxiUTQDu1UUx19HFHg3y1kriqwCp18142nTh1O2R1ilrXZU0VCZx3Sn5U37kok0iU/WHW1nxSO1gAilR0N0SmF3QVPm5bRFgrngV0h1HXV392D312nUg3D5F0+0LnNbyzQ3qWw2gVSjw1Da6VI1H02Fo2746mY16m60W3p3sXY7pnzkm39Wd1mUHWkVS1Rnbly0waJXMkM2HnB3k1z1blmns1RSJ1dwhkAMGmV2h2pl+lG2P0l09Bi3QOJmz292f2gPf0KYiqK3X1p1V0gMP0J1onQkEOwPAPwNU1IMT3NnCitnBwz1AOYMzkIO21gN0NDkwCVwEArloNrksPTnnZf3G3IPvzLm1rMM93CP30NmkPNb7nSPv2q0gDnl7BXnIDR32VxU1XF1cP0Jm0UMYOyMpFzmkP8k11gBb0u0w153cUF1gHe0KW+3tKdIfHFUpUyM9lWOL1A0h6e3qFr0uMi1J3jbKMjXLVWMgVD3L2OOr1j21W4NhPT3GNCM+P90xNL0e2xVhHBMKOQkgXyGwF955F9aPUI14U4VWFvUEUipuCB1VHoPpPLUiPYNiN1WQ2+7FPMG5FdHlPjHKmH1+X6VVN1NDlLgRPM0f3n6iO0PJOYLYBzDVg4CNNYnNPeMs020a120LOPDIDLMLBrNDUS2W0C3bNUacN7PZKwAjD8gGhpObMzPq2XM4MV5dxgAcDHI6AHmePd0qNW2zPtPzMubNa+N101wH3L4n0yCvVTan29WEGPC6ntmv1k1POqMvO44dPXM9BWl/OAMYuAtYse4dNBmGNulTNAmYsXPYu0PkuPBQMEswMmM9kktt4JXNaoPMsbMAvnMy0cNvO8FZz4MCMsV8sG0Cs7NXPvMK3kNis41Ev8s0MFPRGvmPMSs0lSuvM4sd4fbgt+F73aOBN5OJP6NNY37RNE5GuaUmFPUYHWGwujMo0IsfUX24BY0KtM3UuAttMkOcs374uk1eOat31mOIM0YMvZL00v080sstMzN+vyM9qc2/HHMLU31EPUNzOqui3ys8uCNKtJFJvmMBvlnptv2ROJtyOltt3lu/PBv/NVuqMlsRtlv0P9DqKotxu8vNu+s1ttt1v1M8OjlSMat9tn6tuCu6vCs6lvB8NjteunO30v4qvtsvlGNLt61Zt1nsPStCv0HjxWtd6xM5MbVQUt0wXbVwUioGvb12pw0VPDN4XH2I2uvo3uuesFvisTuStrtDvE1Ut2nPO0ukv0upuun/3fuKuhuU05spsrRc1AeWU0vat0u5vBn5uNuEuwe/TsvgEguztyvIfhXEugccsAfa1Ydd04e/tav/szVqubvQfevAeocMfbWWML39D3vYY2txM6OmuXvj24ugruMVvou4dHvceGunv52CcXvrrx3rt+0nJnLYfxtFsZ0ujZ3wC538dns5Wdpmvr1P2HJl0keS2qMGv2PA3xNe35MqftLhPjvTPWcye2cBO5OKfEZJOytkrgquc+tn42cGfycms+fK6mfGqWv926f6exNQtmEwvYHI2OsfhGVIvZIouWdnNJHxdodgcYeLO5cru/QFccc3EQcbuUtBdseAsVfwc5ZRsoMScht0cfaNfAvFeMvUdovtducNc52FcUeMd4NtdNuDdn5df+uUdysNs0eadSc9AzfJtzfRvMcae9tTf5fDeVeolceZ0FeefrVGdrq+fmuguxeZ02Nzqu272JdPvQtvtOu4UusLFuvIuX3dtB1LcdertNdjeAd1cof9vhvTvgeIdMe1dbuZtwO7v7c01Q95ulc7vfl7s6uEcHF5sLf9eTfBfFsDsQ89fZKissfLto9YOzdA9Ue489uFvLfo+I9mesAtlduo/w9M+A/Xs37Dm8P8Pk/buc9U9rc0/IvzsC9bcM//fEOi88/Q8c9UMI/c98nafAV6Z3d2NhcOMKd6omchMs9aD+1dKK+sOhdyc68Rd6/Cd+dEcBdBuLfbcE9q/WPWsW92e6/N1Ket1i8BepOw+EPC8CmZNu/ZPhfefW/e9XuXWrQgB8BQD68rjJLamPDqOXl6CIsp/ZIKBvDxj8D/BuqUArB9U9AADuWEpv05CKJUwRslCTNvl3dvPQFcLs7slfPZCKLy1qvsyB3mhnTdxnDf0XP9/Jnf8SUitaPf/s3RHvVvXvF3w/onWgpgAgvAVCjv0vO36G1fWEwCYQtfZ1DnifTn2SMAnW7fWzI3BHJPPQBAhgnQF/IHV/mt4jfMjgswE3tHW/H2Ka7MsCAAoh/GNYR9cqejYfrcV9AwcYMlAePlEhXD3JFU0dfcmgEVywCh+Bvb0Dfhz5Z0AgBfRVE7E7ClB+A8AUvksH4CrAsuZfCviD1I5n4d+gkA/ivSP7oCb+rAFvpIiKA0CrOgLMfq3w9iT9UAvfanOH3PaR8F+GAkftv3wHj9+B3sKfvJEYH2cgmx/dbj0BX758K4j/VRvQMCB78NKAnOfoPyj4id/OPQM/nT1+5O96uyrFXq42yR39+QWgsjs/12amDWAnzf4B/ycF0DrqqaAAUAOHp18HKYAiQRAOl6lY0BFMeAQqinRIDryKAsApEPEGkMsBRgeAoXxADF9KBrAcvoJG8FJEdB+g/vrHWMG29seWcdgW7E4EB9KGrDXgRwO76CDp+ffEQWd3AylD9GvaUftIL4GNC/YCgmfl51EHz8ouEgpfj5lX6aCuBeXKQVOhKh6DFBnvIwckJP5mCIA5/aYWV0RIuCZWTfcUPf3yH0dbBoTD5u/yWaf8/u3/BAVOkvRWB/BEqQIYf10Zg1wBnNSAaxzlCRCWI0Q5NIgMeFaBkBF2JIaMMjbaQb8EAAzEgAyFZCs+VAvIZsMp4tY5hA0QYadwH7ncQRqwtgTIMOE/8ehDQgQf0OFCLDDBGIiPKCOijdCp0XfQkUILlyz8QBywzEaoNZ6TD1+ePL/s7zxHIigEMYIoa0PRHtCVhLIrQOYNxFwduuWIkwAcIRFB98OL/Oqpvx1BfCCo6GADFCL+EGDGRbAxsCoOaI355EfAToO7GhHkCS+OQ6gTUNZbLVChJI7UUKOZG+9m+OI2UUrw1xrgaRmvBtAMJaGW97RXBaPlum0hUiHYnom9Gyh9HCC/RwwpkeSKlEgARA1Q4qvfgp5B9f+koe4eXX+FKDNqIQikRkW5EXo/B0cQAQ8K1Exj34LwsYW4K0DlBvmppQXnDzdHfo1wtwtNIJF46AZURjdEocKKdGsAxRro1hvKNcF7DpRjgocdORHG7DnKSosCCqPpizCHYWwYgbgGNEFAcguok9MAIrFaBgRcY5rmCOiLYC9BpoigbCItHwi78/+KAVcJiEOx5hfIu0buIDEmD/s4Q//AuM0BLi+IcQmgECK3EdDF+3MVIW8FPHSDCBxA0gUXzNHZCtAuQwIGsRTFC9mxSIh8bvyfHdiR6TjRzm3XeE0oIhgE74WMGuEOw/xqAACQnxYEJVISiBGAKpkz6EVl+nmXvHSDPHmi+Y0AB6MmJvEfDaBBQyfCxP5HRi2hr4soQWNIma4lm2uXXFPnuo7jRJzjApvhOVpfifhbmAQORISFh59xynD/DfjXFuBb4bEzUTCKYkgAEJFgvpMhKbF1DFUj4tMM+MUm4T+xzEnrFZL/wqhbxXIySe5iElOTBRYkxvoew0n8BdCOuLrP5KwlBDlB1EkUVGFgJITeJqY1CTAVZABTexjozjj+LXDhTdc+uaKU8KE5ATqx74n9kyDUkkT7xv47MYCNQGAS+x21G/Ms2nwQBZ87EuCeAC4lJSvJfE7gT4KnRyS4CbUufIVKYGxSSp+YyEg4M6BsA1xKADgNRFEwb9ypPk36K7HgDwAYIbU5nsajnGfCiJqoj7JcDkByBVIQQTwCQIICbiqJ9IoYaJN0k+8mp0RGgEuFJwmTYhME88eZMsk9SrBoPAaehN5GOSxpOYyLgeJmoqTkshE26cRJymaTap8QyiXqOekio1xOeD6WRK+kcSupy4A7MlJQl2SdCsBDKaPTinNEQxUk9rBFL1wkzQZSwskXpNckWTLRPE3qSlKJlAzdBmE30QyJfFKSA2UMp3DDLgFVTfhn0uJnVMSENSspEJAybAXSGmTYJF4ziXjOvHszCZVfVrArJGl0S6RCkwKQLI/yUzcp0kvQrTNZCGF6ZpIh0RDPl4ipfpk4jvvZJRG8z7phslyTzyFldlKpao06edLACXTS+10wCQbORnkzUZleGCBcEVkSyzJDs1mVL1WnWCBJPItyG7LRGZS7ZilfaeEF9nHT/ZHYC6VdJukZyex9U26Y1LlnREkA2YFfhcE8AQBoJmQ5WeZLiDp98ZGs2yaYz7LE94xhEfYI6j2A/cmmuc/qUkQABSvAGvNTy9ljy4+h0xcR9inmPZZ51ckVO3IKCNzm58crOJvL+nzythyvSUfFIHnMAcYI89ZofMREryZ5cvHOcnIOmwyjpp0W+btI7iQl1RGQxiSKmN4fEzJ3siWCLO3FizQpiFfoOqNLnbjsxDMvcTLOzmol26anMgd9MAWDxgFUQ0Be6MeSnJIFi8m8gKPDmTSaJk9CztjOTAfiVQ+c3yQIBup4Ln51oGBTbIXmVzZZiCyei5xbmoLKFec/BepOwVIouA9CuAUwv9GPTAxgxduoFy4W5gf2GCuGYWNcrnhhF0C8sQ9PgVMymp9VAQCuKNHuwoFUQzLirOzgoLZF3k+cXwqwXW0dhB7cGLNSYoyKKFj83hQwu/Fhte5+7GdncEEqFVHsAC+edQtl61t9Rk9cTqYqcVQD5FL86qe5gDoqLDFaiwKeIrfHeLJ6yC8hfQDQWaAolS8mhfwBUrxLvhoil8ckvEnrB26ZCxxZkp4UwDLF8MpVPgEKWORil6i1hQgskUcKrS/iuRZ+LqWKKGqQiyEQYqKWJKiFVc9hb/OkXdLIlvS1xfwpbECA3KTSxhaMorkoy5ZzWE6WdKLmByS5ocoxeZLCUZKyAASvpRKLXmILtF/AcBVAGWUHkf5n1cJdUucW1K5lVioFhco6Ux4HF0yvqSwtFlHCT5ISsovdgELHKslaUQJdsPflFgkFMgJ5ScpeX/KQFgKz5QbEhIIoClQyvhQcpCrgqalyKzBehlW7BKtFV1G4Y0uxVzLcVjy/FT0qoVnK8O5Ha/jRKuWNU7lGfT7v1Rzi/KCJsygFfjWOHoq1WseXlTKhyVuKAeQKyOR818U14xV0M/lSivcU/k+5+ktlcoqpUiKz6SxW3AiohXQDCVCi85ffImUvlRVrcg1RKvmVsMYVIEl6XKv1UEqoVx8tFZgJtj3gkZxi7+VyrxY8rLVpyt5aitNVfLzVPygNUipdVc9pV68yvKCtUwKrwyUakXqSo2UxQGkeYsYMn3Mnpi7hJYgISAGORNBokJizlHoF2q0RmsafTRgeSLUEgS1yAXEN0mDg4ACAXsL5iwE3onU61YQFQJkLMDlrckIAZrJ2H2DBwiI/sXgESOwB2AkAxyCiZQB7UlrvA2QNrPAFgAPgoALoPQCurABTIN1XsbdZQG8DdAuJVkXdXoFJB7AOAFgDgAAC8IkcFHVd4DkDHRgA5S+8BAE6CdBKQ4ceIaUwPDIRARCyqUJ0AJD7A0Ab/KdIzhPF8jWAsGtMD6tz64DRgQVZDfnygBIawA8BeDWkJGkZCWp0JNyZLkxk1SfMQknDcRpjn4bNRr0ojTkmjnvSNREs9GQcFYCsbWJzGrGQxremUaeN1G9qZqI43DTZ87GnWYJpY2dAjJqGwyXsCbCkadwRfSEawAhGu0MhhotcW3y0Aab1xbqYsHH29h7AANTDMYJ5mMCIrS+fIIjcQAaR1zGwSAbeXoE3mOaNg5SoAA='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\marwe\\projects\\deno\\rest-api-oak\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..\\prisma",
  "clientVersion": "4.6.1",
  "engineVersion": "694eea289a8462c80264df36757e4fdc129b1b32",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBEaW5vc291ciB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlCiAgZGVzY3JpcHRpb24gICBTdHJpbmcKfQ=='
config.inlineSchemaHash = '7d3adc92d7fd92ec1920900e8c85a44b8ff822163c943152264a82d9002fb7c9'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

