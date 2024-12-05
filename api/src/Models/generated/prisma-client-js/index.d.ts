
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Adress
 * 
 */
export type Adress = $Result.DefaultSelection<Prisma.$AdressPayload>
/**
 * Model Advert
 * 
 */
export type Advert = $Result.DefaultSelection<Prisma.$AdvertPayload>
/**
 * Model Caracteristic
 * 
 */
export type Caracteristic = $Result.DefaultSelection<Prisma.$CaracteristicPayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adresses
 * const adresses = await prisma.adress.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Adresses
   * const adresses = await prisma.adress.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.adress`: Exposes CRUD operations for the **Adress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adresses
    * const adresses = await prisma.adress.findMany()
    * ```
    */
  get adress(): Prisma.AdressDelegate<ExtArgs>;

  /**
   * `prisma.advert`: Exposes CRUD operations for the **Advert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adverts
    * const adverts = await prisma.advert.findMany()
    * ```
    */
  get advert(): Prisma.AdvertDelegate<ExtArgs>;

  /**
   * `prisma.caracteristic`: Exposes CRUD operations for the **Caracteristic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caracteristics
    * const caracteristics = await prisma.caracteristic.findMany()
    * ```
    */
  get caracteristic(): Prisma.CaracteristicDelegate<ExtArgs>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Adress: 'Adress',
    Advert: 'Advert',
    Caracteristic: 'Caracteristic',
    Picture: 'Picture',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "adress" | "advert" | "caracteristic" | "picture" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Adress: {
        payload: Prisma.$AdressPayload<ExtArgs>
        fields: Prisma.AdressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findFirst: {
            args: Prisma.AdressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findMany: {
            args: Prisma.AdressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          create: {
            args: Prisma.AdressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          createMany: {
            args: Prisma.AdressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          delete: {
            args: Prisma.AdressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          update: {
            args: Prisma.AdressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          deleteMany: {
            args: Prisma.AdressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          aggregate: {
            args: Prisma.AdressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdress>
          }
          groupBy: {
            args: Prisma.AdressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdressCountArgs<ExtArgs>
            result: $Utils.Optional<AdressCountAggregateOutputType> | number
          }
        }
      }
      Advert: {
        payload: Prisma.$AdvertPayload<ExtArgs>
        fields: Prisma.AdvertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>
          }
          findFirst: {
            args: Prisma.AdvertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>
          }
          findMany: {
            args: Prisma.AdvertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>[]
          }
          create: {
            args: Prisma.AdvertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>
          }
          createMany: {
            args: Prisma.AdvertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>[]
          }
          delete: {
            args: Prisma.AdvertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>
          }
          update: {
            args: Prisma.AdvertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>
          }
          deleteMany: {
            args: Prisma.AdvertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdvertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertPayload>
          }
          aggregate: {
            args: Prisma.AdvertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvert>
          }
          groupBy: {
            args: Prisma.AdvertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertCountAggregateOutputType> | number
          }
        }
      }
      Caracteristic: {
        payload: Prisma.$CaracteristicPayload<ExtArgs>
        fields: Prisma.CaracteristicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaracteristicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaracteristicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>
          }
          findFirst: {
            args: Prisma.CaracteristicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaracteristicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>
          }
          findMany: {
            args: Prisma.CaracteristicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>[]
          }
          create: {
            args: Prisma.CaracteristicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>
          }
          createMany: {
            args: Prisma.CaracteristicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaracteristicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>[]
          }
          delete: {
            args: Prisma.CaracteristicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>
          }
          update: {
            args: Prisma.CaracteristicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>
          }
          deleteMany: {
            args: Prisma.CaracteristicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaracteristicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CaracteristicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaracteristicPayload>
          }
          aggregate: {
            args: Prisma.CaracteristicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaracteristic>
          }
          groupBy: {
            args: Prisma.CaracteristicGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaracteristicGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaracteristicCountArgs<ExtArgs>
            result: $Utils.Optional<CaracteristicCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdvertCountOutputType
   */

  export type AdvertCountOutputType = {
    Picture: number
    Caracteristic: number
    Adress: number
  }

  export type AdvertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Picture?: boolean | AdvertCountOutputTypeCountPictureArgs
    Caracteristic?: boolean | AdvertCountOutputTypeCountCaracteristicArgs
    Adress?: boolean | AdvertCountOutputTypeCountAdressArgs
  }

  // Custom InputTypes
  /**
   * AdvertCountOutputType without action
   */
  export type AdvertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertCountOutputType
     */
    select?: AdvertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdvertCountOutputType without action
   */
  export type AdvertCountOutputTypeCountPictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }

  /**
   * AdvertCountOutputType without action
   */
  export type AdvertCountOutputTypeCountCaracteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaracteristicWhereInput
  }

  /**
   * AdvertCountOutputType without action
   */
  export type AdvertCountOutputTypeCountAdressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdressWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Advert: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Advert?: boolean | UserCountOutputTypeCountAdvertArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdvertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Adress
   */

  export type AggregateAdress = {
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  export type AdressAvgAggregateOutputType = {
    id: number | null
    advertId: number | null
  }

  export type AdressSumAggregateOutputType = {
    id: number | null
    advertId: number | null
  }

  export type AdressMinAggregateOutputType = {
    id: number | null
    city: string | null
    country: string | null
    street: string | null
    zip_code: string | null
    advertId: number | null
  }

  export type AdressMaxAggregateOutputType = {
    id: number | null
    city: string | null
    country: string | null
    street: string | null
    zip_code: string | null
    advertId: number | null
  }

  export type AdressCountAggregateOutputType = {
    id: number
    city: number
    country: number
    street: number
    zip_code: number
    advertId: number
    _all: number
  }


  export type AdressAvgAggregateInputType = {
    id?: true
    advertId?: true
  }

  export type AdressSumAggregateInputType = {
    id?: true
    advertId?: true
  }

  export type AdressMinAggregateInputType = {
    id?: true
    city?: true
    country?: true
    street?: true
    zip_code?: true
    advertId?: true
  }

  export type AdressMaxAggregateInputType = {
    id?: true
    city?: true
    country?: true
    street?: true
    zip_code?: true
    advertId?: true
  }

  export type AdressCountAggregateInputType = {
    id?: true
    city?: true
    country?: true
    street?: true
    zip_code?: true
    advertId?: true
    _all?: true
  }

  export type AdressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adress to aggregate.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adresses
    **/
    _count?: true | AdressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdressMaxAggregateInputType
  }

  export type GetAdressAggregateType<T extends AdressAggregateArgs> = {
        [P in keyof T & keyof AggregateAdress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdress[P]>
      : GetScalarType<T[P], AggregateAdress[P]>
  }




  export type AdressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdressWhereInput
    orderBy?: AdressOrderByWithAggregationInput | AdressOrderByWithAggregationInput[]
    by: AdressScalarFieldEnum[] | AdressScalarFieldEnum
    having?: AdressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdressCountAggregateInputType | true
    _avg?: AdressAvgAggregateInputType
    _sum?: AdressSumAggregateInputType
    _min?: AdressMinAggregateInputType
    _max?: AdressMaxAggregateInputType
  }

  export type AdressGroupByOutputType = {
    id: number
    city: string
    country: string
    street: string
    zip_code: string
    advertId: number
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  type GetAdressGroupByPayload<T extends AdressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdressGroupByOutputType[P]>
            : GetScalarType<T[P], AdressGroupByOutputType[P]>
        }
      >
    >


  export type AdressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    country?: boolean
    street?: boolean
    zip_code?: boolean
    advertId?: boolean
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    country?: boolean
    street?: boolean
    zip_code?: boolean
    advertId?: boolean
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectScalar = {
    id?: boolean
    city?: boolean
    country?: boolean
    street?: boolean
    zip_code?: boolean
    advertId?: boolean
  }

  export type AdressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }
  export type AdressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }

  export type $AdressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adress"
    objects: {
      advert: Prisma.$AdvertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      city: string
      country: string
      street: string
      zip_code: string
      advertId: number
    }, ExtArgs["result"]["adress"]>
    composites: {}
  }

  type AdressGetPayload<S extends boolean | null | undefined | AdressDefaultArgs> = $Result.GetResult<Prisma.$AdressPayload, S>

  type AdressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdressCountAggregateInputType | true
    }

  export interface AdressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adress'], meta: { name: 'Adress' } }
    /**
     * Find zero or one Adress that matches the filter.
     * @param {AdressFindUniqueArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdressFindUniqueArgs>(args: SelectSubset<T, AdressFindUniqueArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Adress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdressFindUniqueOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdressFindUniqueOrThrowArgs>(args: SelectSubset<T, AdressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Adress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdressFindFirstArgs>(args?: SelectSubset<T, AdressFindFirstArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Adress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdressFindFirstOrThrowArgs>(args?: SelectSubset<T, AdressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adresses
     * const adresses = await prisma.adress.findMany()
     * 
     * // Get first 10 Adresses
     * const adresses = await prisma.adress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adressWithIdOnly = await prisma.adress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdressFindManyArgs>(args?: SelectSubset<T, AdressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Adress.
     * @param {AdressCreateArgs} args - Arguments to create a Adress.
     * @example
     * // Create one Adress
     * const Adress = await prisma.adress.create({
     *   data: {
     *     // ... data to create a Adress
     *   }
     * })
     * 
     */
    create<T extends AdressCreateArgs>(args: SelectSubset<T, AdressCreateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Adresses.
     * @param {AdressCreateManyArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdressCreateManyArgs>(args?: SelectSubset<T, AdressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adresses and returns the data saved in the database.
     * @param {AdressCreateManyAndReturnArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adresses and only return the `id`
     * const adressWithIdOnly = await prisma.adress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdressCreateManyAndReturnArgs>(args?: SelectSubset<T, AdressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Adress.
     * @param {AdressDeleteArgs} args - Arguments to delete one Adress.
     * @example
     * // Delete one Adress
     * const Adress = await prisma.adress.delete({
     *   where: {
     *     // ... filter to delete one Adress
     *   }
     * })
     * 
     */
    delete<T extends AdressDeleteArgs>(args: SelectSubset<T, AdressDeleteArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Adress.
     * @param {AdressUpdateArgs} args - Arguments to update one Adress.
     * @example
     * // Update one Adress
     * const adress = await prisma.adress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdressUpdateArgs>(args: SelectSubset<T, AdressUpdateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Adresses.
     * @param {AdressDeleteManyArgs} args - Arguments to filter Adresses to delete.
     * @example
     * // Delete a few Adresses
     * const { count } = await prisma.adress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdressDeleteManyArgs>(args?: SelectSubset<T, AdressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdressUpdateManyArgs>(args: SelectSubset<T, AdressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adress.
     * @param {AdressUpsertArgs} args - Arguments to update or create a Adress.
     * @example
     * // Update or create a Adress
     * const adress = await prisma.adress.upsert({
     *   create: {
     *     // ... data to create a Adress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adress we want to update
     *   }
     * })
     */
    upsert<T extends AdressUpsertArgs>(args: SelectSubset<T, AdressUpsertArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressCountArgs} args - Arguments to filter Adresses to count.
     * @example
     * // Count the number of Adresses
     * const count = await prisma.adress.count({
     *   where: {
     *     // ... the filter for the Adresses we want to count
     *   }
     * })
    **/
    count<T extends AdressCountArgs>(
      args?: Subset<T, AdressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdressAggregateArgs>(args: Subset<T, AdressAggregateArgs>): Prisma.PrismaPromise<GetAdressAggregateType<T>>

    /**
     * Group by Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdressGroupByArgs['orderBy'] }
        : { orderBy?: AdressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adress model
   */
  readonly fields: AdressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    advert<T extends AdvertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertDefaultArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adress model
   */ 
  interface AdressFieldRefs {
    readonly id: FieldRef<"Adress", 'Int'>
    readonly city: FieldRef<"Adress", 'String'>
    readonly country: FieldRef<"Adress", 'String'>
    readonly street: FieldRef<"Adress", 'String'>
    readonly zip_code: FieldRef<"Adress", 'String'>
    readonly advertId: FieldRef<"Adress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Adress findUnique
   */
  export type AdressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findUniqueOrThrow
   */
  export type AdressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findFirst
   */
  export type AdressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findFirstOrThrow
   */
  export type AdressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findMany
   */
  export type AdressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adresses to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress create
   */
  export type AdressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to create a Adress.
     */
    data: XOR<AdressCreateInput, AdressUncheckedCreateInput>
  }

  /**
   * Adress createMany
   */
  export type AdressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adress createManyAndReturn
   */
  export type AdressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adress update
   */
  export type AdressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to update a Adress.
     */
    data: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
    /**
     * Choose, which Adress to update.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress updateMany
   */
  export type AdressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdressWhereInput
  }

  /**
   * Adress upsert
   */
  export type AdressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The filter to search for the Adress to update in case it exists.
     */
    where: AdressWhereUniqueInput
    /**
     * In case the Adress found by the `where` argument doesn't exist, create a new Adress with this data.
     */
    create: XOR<AdressCreateInput, AdressUncheckedCreateInput>
    /**
     * In case the Adress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
  }

  /**
   * Adress delete
   */
  export type AdressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter which Adress to delete.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress deleteMany
   */
  export type AdressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adresses to delete
     */
    where?: AdressWhereInput
  }

  /**
   * Adress without action
   */
  export type AdressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
  }


  /**
   * Model Advert
   */

  export type AggregateAdvert = {
    _count: AdvertCountAggregateOutputType | null
    _avg: AdvertAvgAggregateOutputType | null
    _sum: AdvertSumAggregateOutputType | null
    _min: AdvertMinAggregateOutputType | null
    _max: AdvertMaxAggregateOutputType | null
  }

  export type AdvertAvgAggregateOutputType = {
    id: number | null
    nb_person: number | null
    price: number | null
    userId: number | null
  }

  export type AdvertSumAggregateOutputType = {
    id: number | null
    nb_person: number | null
    price: number | null
    userId: number | null
  }

  export type AdvertMinAggregateOutputType = {
    id: number | null
    title: string | null
    nb_person: number | null
    price: number | null
    available_date: Date | null
    type: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertMaxAggregateOutputType = {
    id: number | null
    title: string | null
    nb_person: number | null
    price: number | null
    available_date: Date | null
    type: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertCountAggregateOutputType = {
    id: number
    title: number
    nb_person: number
    price: number
    available_date: number
    type: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdvertAvgAggregateInputType = {
    id?: true
    nb_person?: true
    price?: true
    userId?: true
  }

  export type AdvertSumAggregateInputType = {
    id?: true
    nb_person?: true
    price?: true
    userId?: true
  }

  export type AdvertMinAggregateInputType = {
    id?: true
    title?: true
    nb_person?: true
    price?: true
    available_date?: true
    type?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertMaxAggregateInputType = {
    id?: true
    title?: true
    nb_person?: true
    price?: true
    available_date?: true
    type?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertCountAggregateInputType = {
    id?: true
    title?: true
    nb_person?: true
    price?: true
    available_date?: true
    type?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdvertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advert to aggregate.
     */
    where?: AdvertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertOrderByWithRelationInput | AdvertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adverts
    **/
    _count?: true | AdvertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdvertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdvertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertMaxAggregateInputType
  }

  export type GetAdvertAggregateType<T extends AdvertAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvert[P]>
      : GetScalarType<T[P], AggregateAdvert[P]>
  }




  export type AdvertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertWhereInput
    orderBy?: AdvertOrderByWithAggregationInput | AdvertOrderByWithAggregationInput[]
    by: AdvertScalarFieldEnum[] | AdvertScalarFieldEnum
    having?: AdvertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertCountAggregateInputType | true
    _avg?: AdvertAvgAggregateInputType
    _sum?: AdvertSumAggregateInputType
    _min?: AdvertMinAggregateInputType
    _max?: AdvertMaxAggregateInputType
  }

  export type AdvertGroupByOutputType = {
    id: number
    title: string
    nb_person: number
    price: number
    available_date: Date
    type: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: AdvertCountAggregateOutputType | null
    _avg: AdvertAvgAggregateOutputType | null
    _sum: AdvertSumAggregateOutputType | null
    _min: AdvertMinAggregateOutputType | null
    _max: AdvertMaxAggregateOutputType | null
  }

  type GetAdvertGroupByPayload<T extends AdvertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertGroupByOutputType[P]>
        }
      >
    >


  export type AdvertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    nb_person?: boolean
    price?: boolean
    available_date?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Picture?: boolean | Advert$PictureArgs<ExtArgs>
    Caracteristic?: boolean | Advert$CaracteristicArgs<ExtArgs>
    Adress?: boolean | Advert$AdressArgs<ExtArgs>
    _count?: boolean | AdvertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advert"]>

  export type AdvertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    nb_person?: boolean
    price?: boolean
    available_date?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advert"]>

  export type AdvertSelectScalar = {
    id?: boolean
    title?: boolean
    nb_person?: boolean
    price?: boolean
    available_date?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdvertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Picture?: boolean | Advert$PictureArgs<ExtArgs>
    Caracteristic?: boolean | Advert$CaracteristicArgs<ExtArgs>
    Adress?: boolean | Advert$AdressArgs<ExtArgs>
    _count?: boolean | AdvertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdvertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdvertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Picture: Prisma.$PicturePayload<ExtArgs>[]
      Caracteristic: Prisma.$CaracteristicPayload<ExtArgs>[]
      Adress: Prisma.$AdressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      nb_person: number
      price: number
      available_date: Date
      type: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["advert"]>
    composites: {}
  }

  type AdvertGetPayload<S extends boolean | null | undefined | AdvertDefaultArgs> = $Result.GetResult<Prisma.$AdvertPayload, S>

  type AdvertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdvertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdvertCountAggregateInputType | true
    }

  export interface AdvertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advert'], meta: { name: 'Advert' } }
    /**
     * Find zero or one Advert that matches the filter.
     * @param {AdvertFindUniqueArgs} args - Arguments to find a Advert
     * @example
     * // Get one Advert
     * const advert = await prisma.advert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertFindUniqueArgs>(args: SelectSubset<T, AdvertFindUniqueArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Advert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdvertFindUniqueOrThrowArgs} args - Arguments to find a Advert
     * @example
     * // Get one Advert
     * const advert = await prisma.advert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Advert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertFindFirstArgs} args - Arguments to find a Advert
     * @example
     * // Get one Advert
     * const advert = await prisma.advert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertFindFirstArgs>(args?: SelectSubset<T, AdvertFindFirstArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Advert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertFindFirstOrThrowArgs} args - Arguments to find a Advert
     * @example
     * // Get one Advert
     * const advert = await prisma.advert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Adverts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adverts
     * const adverts = await prisma.advert.findMany()
     * 
     * // Get first 10 Adverts
     * const adverts = await prisma.advert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertWithIdOnly = await prisma.advert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertFindManyArgs>(args?: SelectSubset<T, AdvertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Advert.
     * @param {AdvertCreateArgs} args - Arguments to create a Advert.
     * @example
     * // Create one Advert
     * const Advert = await prisma.advert.create({
     *   data: {
     *     // ... data to create a Advert
     *   }
     * })
     * 
     */
    create<T extends AdvertCreateArgs>(args: SelectSubset<T, AdvertCreateArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Adverts.
     * @param {AdvertCreateManyArgs} args - Arguments to create many Adverts.
     * @example
     * // Create many Adverts
     * const advert = await prisma.advert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertCreateManyArgs>(args?: SelectSubset<T, AdvertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adverts and returns the data saved in the database.
     * @param {AdvertCreateManyAndReturnArgs} args - Arguments to create many Adverts.
     * @example
     * // Create many Adverts
     * const advert = await prisma.advert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adverts and only return the `id`
     * const advertWithIdOnly = await prisma.advert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Advert.
     * @param {AdvertDeleteArgs} args - Arguments to delete one Advert.
     * @example
     * // Delete one Advert
     * const Advert = await prisma.advert.delete({
     *   where: {
     *     // ... filter to delete one Advert
     *   }
     * })
     * 
     */
    delete<T extends AdvertDeleteArgs>(args: SelectSubset<T, AdvertDeleteArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Advert.
     * @param {AdvertUpdateArgs} args - Arguments to update one Advert.
     * @example
     * // Update one Advert
     * const advert = await prisma.advert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertUpdateArgs>(args: SelectSubset<T, AdvertUpdateArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Adverts.
     * @param {AdvertDeleteManyArgs} args - Arguments to filter Adverts to delete.
     * @example
     * // Delete a few Adverts
     * const { count } = await prisma.advert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertDeleteManyArgs>(args?: SelectSubset<T, AdvertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adverts
     * const advert = await prisma.advert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertUpdateManyArgs>(args: SelectSubset<T, AdvertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Advert.
     * @param {AdvertUpsertArgs} args - Arguments to update or create a Advert.
     * @example
     * // Update or create a Advert
     * const advert = await prisma.advert.upsert({
     *   create: {
     *     // ... data to create a Advert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advert we want to update
     *   }
     * })
     */
    upsert<T extends AdvertUpsertArgs>(args: SelectSubset<T, AdvertUpsertArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertCountArgs} args - Arguments to filter Adverts to count.
     * @example
     * // Count the number of Adverts
     * const count = await prisma.advert.count({
     *   where: {
     *     // ... the filter for the Adverts we want to count
     *   }
     * })
    **/
    count<T extends AdvertCountArgs>(
      args?: Subset<T, AdvertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvertAggregateArgs>(args: Subset<T, AdvertAggregateArgs>): Prisma.PrismaPromise<GetAdvertAggregateType<T>>

    /**
     * Group by Advert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertGroupByArgs['orderBy'] }
        : { orderBy?: AdvertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advert model
   */
  readonly fields: AdvertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Picture<T extends Advert$PictureArgs<ExtArgs> = {}>(args?: Subset<T, Advert$PictureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany"> | Null>
    Caracteristic<T extends Advert$CaracteristicArgs<ExtArgs> = {}>(args?: Subset<T, Advert$CaracteristicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findMany"> | Null>
    Adress<T extends Advert$AdressArgs<ExtArgs> = {}>(args?: Subset<T, Advert$AdressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Advert model
   */ 
  interface AdvertFieldRefs {
    readonly id: FieldRef<"Advert", 'Int'>
    readonly title: FieldRef<"Advert", 'String'>
    readonly nb_person: FieldRef<"Advert", 'Int'>
    readonly price: FieldRef<"Advert", 'Float'>
    readonly available_date: FieldRef<"Advert", 'DateTime'>
    readonly type: FieldRef<"Advert", 'String'>
    readonly userId: FieldRef<"Advert", 'Int'>
    readonly createdAt: FieldRef<"Advert", 'DateTime'>
    readonly updatedAt: FieldRef<"Advert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Advert findUnique
   */
  export type AdvertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * Filter, which Advert to fetch.
     */
    where: AdvertWhereUniqueInput
  }

  /**
   * Advert findUniqueOrThrow
   */
  export type AdvertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * Filter, which Advert to fetch.
     */
    where: AdvertWhereUniqueInput
  }

  /**
   * Advert findFirst
   */
  export type AdvertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * Filter, which Advert to fetch.
     */
    where?: AdvertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertOrderByWithRelationInput | AdvertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adverts.
     */
    cursor?: AdvertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adverts.
     */
    distinct?: AdvertScalarFieldEnum | AdvertScalarFieldEnum[]
  }

  /**
   * Advert findFirstOrThrow
   */
  export type AdvertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * Filter, which Advert to fetch.
     */
    where?: AdvertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertOrderByWithRelationInput | AdvertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adverts.
     */
    cursor?: AdvertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adverts.
     */
    distinct?: AdvertScalarFieldEnum | AdvertScalarFieldEnum[]
  }

  /**
   * Advert findMany
   */
  export type AdvertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where?: AdvertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertOrderByWithRelationInput | AdvertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adverts.
     */
    cursor?: AdvertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    distinct?: AdvertScalarFieldEnum | AdvertScalarFieldEnum[]
  }

  /**
   * Advert create
   */
  export type AdvertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * The data needed to create a Advert.
     */
    data: XOR<AdvertCreateInput, AdvertUncheckedCreateInput>
  }

  /**
   * Advert createMany
   */
  export type AdvertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adverts.
     */
    data: AdvertCreateManyInput | AdvertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advert createManyAndReturn
   */
  export type AdvertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Adverts.
     */
    data: AdvertCreateManyInput | AdvertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advert update
   */
  export type AdvertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * The data needed to update a Advert.
     */
    data: XOR<AdvertUpdateInput, AdvertUncheckedUpdateInput>
    /**
     * Choose, which Advert to update.
     */
    where: AdvertWhereUniqueInput
  }

  /**
   * Advert updateMany
   */
  export type AdvertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adverts.
     */
    data: XOR<AdvertUpdateManyMutationInput, AdvertUncheckedUpdateManyInput>
    /**
     * Filter which Adverts to update
     */
    where?: AdvertWhereInput
  }

  /**
   * Advert upsert
   */
  export type AdvertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * The filter to search for the Advert to update in case it exists.
     */
    where: AdvertWhereUniqueInput
    /**
     * In case the Advert found by the `where` argument doesn't exist, create a new Advert with this data.
     */
    create: XOR<AdvertCreateInput, AdvertUncheckedCreateInput>
    /**
     * In case the Advert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertUpdateInput, AdvertUncheckedUpdateInput>
  }

  /**
   * Advert delete
   */
  export type AdvertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    /**
     * Filter which Advert to delete.
     */
    where: AdvertWhereUniqueInput
  }

  /**
   * Advert deleteMany
   */
  export type AdvertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adverts to delete
     */
    where?: AdvertWhereInput
  }

  /**
   * Advert.Picture
   */
  export type Advert$PictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Advert.Caracteristic
   */
  export type Advert$CaracteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    where?: CaracteristicWhereInput
    orderBy?: CaracteristicOrderByWithRelationInput | CaracteristicOrderByWithRelationInput[]
    cursor?: CaracteristicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaracteristicScalarFieldEnum | CaracteristicScalarFieldEnum[]
  }

  /**
   * Advert.Adress
   */
  export type Advert$AdressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    where?: AdressWhereInput
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    cursor?: AdressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Advert without action
   */
  export type AdvertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
  }


  /**
   * Model Caracteristic
   */

  export type AggregateCaracteristic = {
    _count: CaracteristicCountAggregateOutputType | null
    _avg: CaracteristicAvgAggregateOutputType | null
    _sum: CaracteristicSumAggregateOutputType | null
    _min: CaracteristicMinAggregateOutputType | null
    _max: CaracteristicMaxAggregateOutputType | null
  }

  export type CaracteristicAvgAggregateOutputType = {
    id: number | null
    nb_bedroom: number | null
    nb_bathroom: number | null
    advertId: number | null
  }

  export type CaracteristicSumAggregateOutputType = {
    id: number | null
    nb_bedroom: number | null
    nb_bathroom: number | null
    advertId: number | null
  }

  export type CaracteristicMinAggregateOutputType = {
    id: number | null
    nb_bedroom: number | null
    nb_bathroom: number | null
    description: string | null
    advertId: number | null
  }

  export type CaracteristicMaxAggregateOutputType = {
    id: number | null
    nb_bedroom: number | null
    nb_bathroom: number | null
    description: string | null
    advertId: number | null
  }

  export type CaracteristicCountAggregateOutputType = {
    id: number
    nb_bedroom: number
    nb_bathroom: number
    description: number
    advertId: number
    _all: number
  }


  export type CaracteristicAvgAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    advertId?: true
  }

  export type CaracteristicSumAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    advertId?: true
  }

  export type CaracteristicMinAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    description?: true
    advertId?: true
  }

  export type CaracteristicMaxAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    description?: true
    advertId?: true
  }

  export type CaracteristicCountAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    description?: true
    advertId?: true
    _all?: true
  }

  export type CaracteristicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caracteristic to aggregate.
     */
    where?: CaracteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caracteristics to fetch.
     */
    orderBy?: CaracteristicOrderByWithRelationInput | CaracteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaracteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caracteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caracteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caracteristics
    **/
    _count?: true | CaracteristicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaracteristicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaracteristicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaracteristicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaracteristicMaxAggregateInputType
  }

  export type GetCaracteristicAggregateType<T extends CaracteristicAggregateArgs> = {
        [P in keyof T & keyof AggregateCaracteristic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaracteristic[P]>
      : GetScalarType<T[P], AggregateCaracteristic[P]>
  }




  export type CaracteristicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaracteristicWhereInput
    orderBy?: CaracteristicOrderByWithAggregationInput | CaracteristicOrderByWithAggregationInput[]
    by: CaracteristicScalarFieldEnum[] | CaracteristicScalarFieldEnum
    having?: CaracteristicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaracteristicCountAggregateInputType | true
    _avg?: CaracteristicAvgAggregateInputType
    _sum?: CaracteristicSumAggregateInputType
    _min?: CaracteristicMinAggregateInputType
    _max?: CaracteristicMaxAggregateInputType
  }

  export type CaracteristicGroupByOutputType = {
    id: number
    nb_bedroom: number
    nb_bathroom: number
    description: string
    advertId: number
    _count: CaracteristicCountAggregateOutputType | null
    _avg: CaracteristicAvgAggregateOutputType | null
    _sum: CaracteristicSumAggregateOutputType | null
    _min: CaracteristicMinAggregateOutputType | null
    _max: CaracteristicMaxAggregateOutputType | null
  }

  type GetCaracteristicGroupByPayload<T extends CaracteristicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaracteristicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaracteristicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaracteristicGroupByOutputType[P]>
            : GetScalarType<T[P], CaracteristicGroupByOutputType[P]>
        }
      >
    >


  export type CaracteristicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nb_bedroom?: boolean
    nb_bathroom?: boolean
    description?: boolean
    advertId?: boolean
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caracteristic"]>

  export type CaracteristicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nb_bedroom?: boolean
    nb_bathroom?: boolean
    description?: boolean
    advertId?: boolean
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caracteristic"]>

  export type CaracteristicSelectScalar = {
    id?: boolean
    nb_bedroom?: boolean
    nb_bathroom?: boolean
    description?: boolean
    advertId?: boolean
  }

  export type CaracteristicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }
  export type CaracteristicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }

  export type $CaracteristicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caracteristic"
    objects: {
      advert: Prisma.$AdvertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nb_bedroom: number
      nb_bathroom: number
      description: string
      advertId: number
    }, ExtArgs["result"]["caracteristic"]>
    composites: {}
  }

  type CaracteristicGetPayload<S extends boolean | null | undefined | CaracteristicDefaultArgs> = $Result.GetResult<Prisma.$CaracteristicPayload, S>

  type CaracteristicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CaracteristicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CaracteristicCountAggregateInputType | true
    }

  export interface CaracteristicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caracteristic'], meta: { name: 'Caracteristic' } }
    /**
     * Find zero or one Caracteristic that matches the filter.
     * @param {CaracteristicFindUniqueArgs} args - Arguments to find a Caracteristic
     * @example
     * // Get one Caracteristic
     * const caracteristic = await prisma.caracteristic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaracteristicFindUniqueArgs>(args: SelectSubset<T, CaracteristicFindUniqueArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Caracteristic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CaracteristicFindUniqueOrThrowArgs} args - Arguments to find a Caracteristic
     * @example
     * // Get one Caracteristic
     * const caracteristic = await prisma.caracteristic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaracteristicFindUniqueOrThrowArgs>(args: SelectSubset<T, CaracteristicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Caracteristic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicFindFirstArgs} args - Arguments to find a Caracteristic
     * @example
     * // Get one Caracteristic
     * const caracteristic = await prisma.caracteristic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaracteristicFindFirstArgs>(args?: SelectSubset<T, CaracteristicFindFirstArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Caracteristic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicFindFirstOrThrowArgs} args - Arguments to find a Caracteristic
     * @example
     * // Get one Caracteristic
     * const caracteristic = await prisma.caracteristic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaracteristicFindFirstOrThrowArgs>(args?: SelectSubset<T, CaracteristicFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Caracteristics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caracteristics
     * const caracteristics = await prisma.caracteristic.findMany()
     * 
     * // Get first 10 Caracteristics
     * const caracteristics = await prisma.caracteristic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caracteristicWithIdOnly = await prisma.caracteristic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaracteristicFindManyArgs>(args?: SelectSubset<T, CaracteristicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Caracteristic.
     * @param {CaracteristicCreateArgs} args - Arguments to create a Caracteristic.
     * @example
     * // Create one Caracteristic
     * const Caracteristic = await prisma.caracteristic.create({
     *   data: {
     *     // ... data to create a Caracteristic
     *   }
     * })
     * 
     */
    create<T extends CaracteristicCreateArgs>(args: SelectSubset<T, CaracteristicCreateArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Caracteristics.
     * @param {CaracteristicCreateManyArgs} args - Arguments to create many Caracteristics.
     * @example
     * // Create many Caracteristics
     * const caracteristic = await prisma.caracteristic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaracteristicCreateManyArgs>(args?: SelectSubset<T, CaracteristicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caracteristics and returns the data saved in the database.
     * @param {CaracteristicCreateManyAndReturnArgs} args - Arguments to create many Caracteristics.
     * @example
     * // Create many Caracteristics
     * const caracteristic = await prisma.caracteristic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caracteristics and only return the `id`
     * const caracteristicWithIdOnly = await prisma.caracteristic.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaracteristicCreateManyAndReturnArgs>(args?: SelectSubset<T, CaracteristicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Caracteristic.
     * @param {CaracteristicDeleteArgs} args - Arguments to delete one Caracteristic.
     * @example
     * // Delete one Caracteristic
     * const Caracteristic = await prisma.caracteristic.delete({
     *   where: {
     *     // ... filter to delete one Caracteristic
     *   }
     * })
     * 
     */
    delete<T extends CaracteristicDeleteArgs>(args: SelectSubset<T, CaracteristicDeleteArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Caracteristic.
     * @param {CaracteristicUpdateArgs} args - Arguments to update one Caracteristic.
     * @example
     * // Update one Caracteristic
     * const caracteristic = await prisma.caracteristic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaracteristicUpdateArgs>(args: SelectSubset<T, CaracteristicUpdateArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Caracteristics.
     * @param {CaracteristicDeleteManyArgs} args - Arguments to filter Caracteristics to delete.
     * @example
     * // Delete a few Caracteristics
     * const { count } = await prisma.caracteristic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaracteristicDeleteManyArgs>(args?: SelectSubset<T, CaracteristicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caracteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caracteristics
     * const caracteristic = await prisma.caracteristic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaracteristicUpdateManyArgs>(args: SelectSubset<T, CaracteristicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caracteristic.
     * @param {CaracteristicUpsertArgs} args - Arguments to update or create a Caracteristic.
     * @example
     * // Update or create a Caracteristic
     * const caracteristic = await prisma.caracteristic.upsert({
     *   create: {
     *     // ... data to create a Caracteristic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caracteristic we want to update
     *   }
     * })
     */
    upsert<T extends CaracteristicUpsertArgs>(args: SelectSubset<T, CaracteristicUpsertArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Caracteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicCountArgs} args - Arguments to filter Caracteristics to count.
     * @example
     * // Count the number of Caracteristics
     * const count = await prisma.caracteristic.count({
     *   where: {
     *     // ... the filter for the Caracteristics we want to count
     *   }
     * })
    **/
    count<T extends CaracteristicCountArgs>(
      args?: Subset<T, CaracteristicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaracteristicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caracteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaracteristicAggregateArgs>(args: Subset<T, CaracteristicAggregateArgs>): Prisma.PrismaPromise<GetCaracteristicAggregateType<T>>

    /**
     * Group by Caracteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaracteristicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaracteristicGroupByArgs['orderBy'] }
        : { orderBy?: CaracteristicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaracteristicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaracteristicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caracteristic model
   */
  readonly fields: CaracteristicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caracteristic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaracteristicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    advert<T extends AdvertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertDefaultArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caracteristic model
   */ 
  interface CaracteristicFieldRefs {
    readonly id: FieldRef<"Caracteristic", 'Int'>
    readonly nb_bedroom: FieldRef<"Caracteristic", 'Int'>
    readonly nb_bathroom: FieldRef<"Caracteristic", 'Int'>
    readonly description: FieldRef<"Caracteristic", 'String'>
    readonly advertId: FieldRef<"Caracteristic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Caracteristic findUnique
   */
  export type CaracteristicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter, which Caracteristic to fetch.
     */
    where: CaracteristicWhereUniqueInput
  }

  /**
   * Caracteristic findUniqueOrThrow
   */
  export type CaracteristicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter, which Caracteristic to fetch.
     */
    where: CaracteristicWhereUniqueInput
  }

  /**
   * Caracteristic findFirst
   */
  export type CaracteristicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter, which Caracteristic to fetch.
     */
    where?: CaracteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caracteristics to fetch.
     */
    orderBy?: CaracteristicOrderByWithRelationInput | CaracteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caracteristics.
     */
    cursor?: CaracteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caracteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caracteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caracteristics.
     */
    distinct?: CaracteristicScalarFieldEnum | CaracteristicScalarFieldEnum[]
  }

  /**
   * Caracteristic findFirstOrThrow
   */
  export type CaracteristicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter, which Caracteristic to fetch.
     */
    where?: CaracteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caracteristics to fetch.
     */
    orderBy?: CaracteristicOrderByWithRelationInput | CaracteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caracteristics.
     */
    cursor?: CaracteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caracteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caracteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caracteristics.
     */
    distinct?: CaracteristicScalarFieldEnum | CaracteristicScalarFieldEnum[]
  }

  /**
   * Caracteristic findMany
   */
  export type CaracteristicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter, which Caracteristics to fetch.
     */
    where?: CaracteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caracteristics to fetch.
     */
    orderBy?: CaracteristicOrderByWithRelationInput | CaracteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caracteristics.
     */
    cursor?: CaracteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caracteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caracteristics.
     */
    skip?: number
    distinct?: CaracteristicScalarFieldEnum | CaracteristicScalarFieldEnum[]
  }

  /**
   * Caracteristic create
   */
  export type CaracteristicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * The data needed to create a Caracteristic.
     */
    data: XOR<CaracteristicCreateInput, CaracteristicUncheckedCreateInput>
  }

  /**
   * Caracteristic createMany
   */
  export type CaracteristicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Caracteristics.
     */
    data: CaracteristicCreateManyInput | CaracteristicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caracteristic createManyAndReturn
   */
  export type CaracteristicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Caracteristics.
     */
    data: CaracteristicCreateManyInput | CaracteristicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caracteristic update
   */
  export type CaracteristicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * The data needed to update a Caracteristic.
     */
    data: XOR<CaracteristicUpdateInput, CaracteristicUncheckedUpdateInput>
    /**
     * Choose, which Caracteristic to update.
     */
    where: CaracteristicWhereUniqueInput
  }

  /**
   * Caracteristic updateMany
   */
  export type CaracteristicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Caracteristics.
     */
    data: XOR<CaracteristicUpdateManyMutationInput, CaracteristicUncheckedUpdateManyInput>
    /**
     * Filter which Caracteristics to update
     */
    where?: CaracteristicWhereInput
  }

  /**
   * Caracteristic upsert
   */
  export type CaracteristicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * The filter to search for the Caracteristic to update in case it exists.
     */
    where: CaracteristicWhereUniqueInput
    /**
     * In case the Caracteristic found by the `where` argument doesn't exist, create a new Caracteristic with this data.
     */
    create: XOR<CaracteristicCreateInput, CaracteristicUncheckedCreateInput>
    /**
     * In case the Caracteristic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaracteristicUpdateInput, CaracteristicUncheckedUpdateInput>
  }

  /**
   * Caracteristic delete
   */
  export type CaracteristicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter which Caracteristic to delete.
     */
    where: CaracteristicWhereUniqueInput
  }

  /**
   * Caracteristic deleteMany
   */
  export type CaracteristicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caracteristics to delete
     */
    where?: CaracteristicWhereInput
  }

  /**
   * Caracteristic without action
   */
  export type CaracteristicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
  }


  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureAvgAggregateOutputType = {
    id: number | null
    advertId: number | null
  }

  export type PictureSumAggregateOutputType = {
    id: number | null
    advertId: number | null
  }

  export type PictureMinAggregateOutputType = {
    id: number | null
    url: string | null
    advertId: number | null
  }

  export type PictureMaxAggregateOutputType = {
    id: number | null
    url: string | null
    advertId: number | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    url: number
    advertId: number
    _all: number
  }


  export type PictureAvgAggregateInputType = {
    id?: true
    advertId?: true
  }

  export type PictureSumAggregateInputType = {
    id?: true
    advertId?: true
  }

  export type PictureMinAggregateInputType = {
    id?: true
    url?: true
    advertId?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    url?: true
    advertId?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    url?: true
    advertId?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _avg?: PictureAvgAggregateInputType
    _sum?: PictureSumAggregateInputType
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: number
    url: string
    advertId: number
    _count: PictureCountAggregateOutputType | null
    _avg: PictureAvgAggregateOutputType | null
    _sum: PictureSumAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    advertId?: boolean
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    advertId?: boolean
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    url?: boolean
    advertId?: boolean
  }

  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }
  export type PictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | AdvertDefaultArgs<ExtArgs>
  }

  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      advert: Prisma.$AdvertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      advertId: number
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureFindUniqueArgs>(args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureFindFirstArgs>(args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PictureFindManyArgs>(args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
     */
    create<T extends PictureCreateArgs>(args: SelectSubset<T, PictureCreateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pictures.
     * @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PictureCreateManyArgs>(args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {PictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
     */
    delete<T extends PictureDeleteArgs>(args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PictureUpdateArgs>(args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PictureDeleteManyArgs>(args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PictureUpdateManyArgs>(args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
     */
    upsert<T extends PictureUpsertArgs>(args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    advert<T extends AdvertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertDefaultArgs<ExtArgs>>): Prisma__AdvertClient<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Picture model
   */ 
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", 'Int'>
    readonly url: FieldRef<"Picture", 'String'>
    readonly advertId: FieldRef<"Picture", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }

  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Picture createManyAndReturn
   */
  export type PictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
  }

  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }

  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
  }

  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    about_me: string | null
    phone_number: string | null
    user_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    about_me: string | null
    phone_number: string | null
    user_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    about_me: number
    phone_number: number
    user_type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    about_me?: true
    phone_number?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    about_me?: true
    phone_number?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    about_me?: true
    phone_number?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    about_me: string | null
    phone_number: string
    user_type: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    about_me?: boolean
    phone_number?: boolean
    user_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Advert?: boolean | User$AdvertArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    about_me?: boolean
    phone_number?: boolean
    user_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    about_me?: boolean
    phone_number?: boolean
    user_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Advert?: boolean | User$AdvertArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Advert: Prisma.$AdvertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      about_me: string | null
      phone_number: string
      user_type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Advert<T extends User$AdvertArgs<ExtArgs> = {}>(args?: Subset<T, User$AdvertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly about_me: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Advert
   */
  export type User$AdvertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advert
     */
    select?: AdvertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertInclude<ExtArgs> | null
    where?: AdvertWhereInput
    orderBy?: AdvertOrderByWithRelationInput | AdvertOrderByWithRelationInput[]
    cursor?: AdvertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertScalarFieldEnum | AdvertScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdressScalarFieldEnum: {
    id: 'id',
    city: 'city',
    country: 'country',
    street: 'street',
    zip_code: 'zip_code',
    advertId: 'advertId'
  };

  export type AdressScalarFieldEnum = (typeof AdressScalarFieldEnum)[keyof typeof AdressScalarFieldEnum]


  export const AdvertScalarFieldEnum: {
    id: 'id',
    title: 'title',
    nb_person: 'nb_person',
    price: 'price',
    available_date: 'available_date',
    type: 'type',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdvertScalarFieldEnum = (typeof AdvertScalarFieldEnum)[keyof typeof AdvertScalarFieldEnum]


  export const CaracteristicScalarFieldEnum: {
    id: 'id',
    nb_bedroom: 'nb_bedroom',
    nb_bathroom: 'nb_bathroom',
    description: 'description',
    advertId: 'advertId'
  };

  export type CaracteristicScalarFieldEnum = (typeof CaracteristicScalarFieldEnum)[keyof typeof CaracteristicScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    url: 'url',
    advertId: 'advertId'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    about_me: 'about_me',
    phone_number: 'phone_number',
    user_type: 'user_type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type AdressWhereInput = {
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    id?: IntFilter<"Adress"> | number
    city?: StringFilter<"Adress"> | string
    country?: StringFilter<"Adress"> | string
    street?: StringFilter<"Adress"> | string
    zip_code?: StringFilter<"Adress"> | string
    advertId?: IntFilter<"Adress"> | number
    advert?: XOR<AdvertScalarRelationFilter, AdvertWhereInput>
  }

  export type AdressOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
    advertId?: SortOrder
    advert?: AdvertOrderByWithRelationInput
  }

  export type AdressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    city?: StringFilter<"Adress"> | string
    country?: StringFilter<"Adress"> | string
    street?: StringFilter<"Adress"> | string
    zip_code?: StringFilter<"Adress"> | string
    advertId?: IntFilter<"Adress"> | number
    advert?: XOR<AdvertScalarRelationFilter, AdvertWhereInput>
  }, "id">

  export type AdressOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
    advertId?: SortOrder
    _count?: AdressCountOrderByAggregateInput
    _avg?: AdressAvgOrderByAggregateInput
    _max?: AdressMaxOrderByAggregateInput
    _min?: AdressMinOrderByAggregateInput
    _sum?: AdressSumOrderByAggregateInput
  }

  export type AdressScalarWhereWithAggregatesInput = {
    AND?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    OR?: AdressScalarWhereWithAggregatesInput[]
    NOT?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adress"> | number
    city?: StringWithAggregatesFilter<"Adress"> | string
    country?: StringWithAggregatesFilter<"Adress"> | string
    street?: StringWithAggregatesFilter<"Adress"> | string
    zip_code?: StringWithAggregatesFilter<"Adress"> | string
    advertId?: IntWithAggregatesFilter<"Adress"> | number
  }

  export type AdvertWhereInput = {
    AND?: AdvertWhereInput | AdvertWhereInput[]
    OR?: AdvertWhereInput[]
    NOT?: AdvertWhereInput | AdvertWhereInput[]
    id?: IntFilter<"Advert"> | number
    title?: StringFilter<"Advert"> | string
    nb_person?: IntFilter<"Advert"> | number
    price?: FloatFilter<"Advert"> | number
    available_date?: DateTimeFilter<"Advert"> | Date | string
    type?: StringFilter<"Advert"> | string
    userId?: IntFilter<"Advert"> | number
    createdAt?: DateTimeFilter<"Advert"> | Date | string
    updatedAt?: DateTimeFilter<"Advert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Picture?: PictureListRelationFilter
    Caracteristic?: CaracteristicListRelationFilter
    Adress?: AdressListRelationFilter
  }

  export type AdvertOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Picture?: PictureOrderByRelationAggregateInput
    Caracteristic?: CaracteristicOrderByRelationAggregateInput
    Adress?: AdressOrderByRelationAggregateInput
  }

  export type AdvertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdvertWhereInput | AdvertWhereInput[]
    OR?: AdvertWhereInput[]
    NOT?: AdvertWhereInput | AdvertWhereInput[]
    title?: StringFilter<"Advert"> | string
    nb_person?: IntFilter<"Advert"> | number
    price?: FloatFilter<"Advert"> | number
    available_date?: DateTimeFilter<"Advert"> | Date | string
    type?: StringFilter<"Advert"> | string
    userId?: IntFilter<"Advert"> | number
    createdAt?: DateTimeFilter<"Advert"> | Date | string
    updatedAt?: DateTimeFilter<"Advert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Picture?: PictureListRelationFilter
    Caracteristic?: CaracteristicListRelationFilter
    Adress?: AdressListRelationFilter
  }, "id">

  export type AdvertOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdvertCountOrderByAggregateInput
    _avg?: AdvertAvgOrderByAggregateInput
    _max?: AdvertMaxOrderByAggregateInput
    _min?: AdvertMinOrderByAggregateInput
    _sum?: AdvertSumOrderByAggregateInput
  }

  export type AdvertScalarWhereWithAggregatesInput = {
    AND?: AdvertScalarWhereWithAggregatesInput | AdvertScalarWhereWithAggregatesInput[]
    OR?: AdvertScalarWhereWithAggregatesInput[]
    NOT?: AdvertScalarWhereWithAggregatesInput | AdvertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Advert"> | number
    title?: StringWithAggregatesFilter<"Advert"> | string
    nb_person?: IntWithAggregatesFilter<"Advert"> | number
    price?: FloatWithAggregatesFilter<"Advert"> | number
    available_date?: DateTimeWithAggregatesFilter<"Advert"> | Date | string
    type?: StringWithAggregatesFilter<"Advert"> | string
    userId?: IntWithAggregatesFilter<"Advert"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Advert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Advert"> | Date | string
  }

  export type CaracteristicWhereInput = {
    AND?: CaracteristicWhereInput | CaracteristicWhereInput[]
    OR?: CaracteristicWhereInput[]
    NOT?: CaracteristicWhereInput | CaracteristicWhereInput[]
    id?: IntFilter<"Caracteristic"> | number
    nb_bedroom?: IntFilter<"Caracteristic"> | number
    nb_bathroom?: IntFilter<"Caracteristic"> | number
    description?: StringFilter<"Caracteristic"> | string
    advertId?: IntFilter<"Caracteristic"> | number
    advert?: XOR<AdvertScalarRelationFilter, AdvertWhereInput>
  }

  export type CaracteristicOrderByWithRelationInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
    advertId?: SortOrder
    advert?: AdvertOrderByWithRelationInput
  }

  export type CaracteristicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaracteristicWhereInput | CaracteristicWhereInput[]
    OR?: CaracteristicWhereInput[]
    NOT?: CaracteristicWhereInput | CaracteristicWhereInput[]
    nb_bedroom?: IntFilter<"Caracteristic"> | number
    nb_bathroom?: IntFilter<"Caracteristic"> | number
    description?: StringFilter<"Caracteristic"> | string
    advertId?: IntFilter<"Caracteristic"> | number
    advert?: XOR<AdvertScalarRelationFilter, AdvertWhereInput>
  }, "id">

  export type CaracteristicOrderByWithAggregationInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
    advertId?: SortOrder
    _count?: CaracteristicCountOrderByAggregateInput
    _avg?: CaracteristicAvgOrderByAggregateInput
    _max?: CaracteristicMaxOrderByAggregateInput
    _min?: CaracteristicMinOrderByAggregateInput
    _sum?: CaracteristicSumOrderByAggregateInput
  }

  export type CaracteristicScalarWhereWithAggregatesInput = {
    AND?: CaracteristicScalarWhereWithAggregatesInput | CaracteristicScalarWhereWithAggregatesInput[]
    OR?: CaracteristicScalarWhereWithAggregatesInput[]
    NOT?: CaracteristicScalarWhereWithAggregatesInput | CaracteristicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Caracteristic"> | number
    nb_bedroom?: IntWithAggregatesFilter<"Caracteristic"> | number
    nb_bathroom?: IntWithAggregatesFilter<"Caracteristic"> | number
    description?: StringWithAggregatesFilter<"Caracteristic"> | string
    advertId?: IntWithAggregatesFilter<"Caracteristic"> | number
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: IntFilter<"Picture"> | number
    url?: StringFilter<"Picture"> | string
    advertId?: IntFilter<"Picture"> | number
    advert?: XOR<AdvertScalarRelationFilter, AdvertWhereInput>
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    advertId?: SortOrder
    advert?: AdvertOrderByWithRelationInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    url?: StringFilter<"Picture"> | string
    advertId?: IntFilter<"Picture"> | number
    advert?: XOR<AdvertScalarRelationFilter, AdvertWhereInput>
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    advertId?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _avg?: PictureAvgOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
    _sum?: PictureSumOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Picture"> | number
    url?: StringWithAggregatesFilter<"Picture"> | string
    advertId?: IntWithAggregatesFilter<"Picture"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    about_me?: StringNullableFilter<"User"> | string | null
    phone_number?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Advert?: AdvertListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    about_me?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Advert?: AdvertOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    about_me?: StringNullableFilter<"User"> | string | null
    user_type?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Advert?: AdvertListRelationFilter
  }, "id" | "email" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    about_me?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    about_me?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_number?: StringWithAggregatesFilter<"User"> | string
    user_type?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdressCreateInput = {
    city: string
    country: string
    street: string
    zip_code: string
    advert: AdvertCreateNestedOneWithoutAdressInput
  }

  export type AdressUncheckedCreateInput = {
    id?: number
    city: string
    country: string
    street: string
    zip_code: string
    advertId: number
  }

  export type AdressUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    advert?: AdvertUpdateOneRequiredWithoutAdressNestedInput
  }

  export type AdressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    advertId?: IntFieldUpdateOperationsInput | number
  }

  export type AdressCreateManyInput = {
    id?: number
    city: string
    country: string
    street: string
    zip_code: string
    advertId: number
  }

  export type AdressUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type AdressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    advertId?: IntFieldUpdateOperationsInput | number
  }

  export type AdvertCreateInput = {
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdvertInput
    Picture?: PictureCreateNestedManyWithoutAdvertInput
    Caracteristic?: CaracteristicCreateNestedManyWithoutAdvertInput
    Adress?: AdressCreateNestedManyWithoutAdvertInput
  }

  export type AdvertUncheckedCreateInput = {
    id?: number
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Picture?: PictureUncheckedCreateNestedManyWithoutAdvertInput
    Caracteristic?: CaracteristicUncheckedCreateNestedManyWithoutAdvertInput
    Adress?: AdressUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdvertNestedInput
    Picture?: PictureUpdateManyWithoutAdvertNestedInput
    Caracteristic?: CaracteristicUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Picture?: PictureUncheckedUpdateManyWithoutAdvertNestedInput
    Caracteristic?: CaracteristicUncheckedUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertCreateManyInput = {
    id?: number
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaracteristicCreateInput = {
    nb_bedroom: number
    nb_bathroom: number
    description: string
    advert: AdvertCreateNestedOneWithoutCaracteristicInput
  }

  export type CaracteristicUncheckedCreateInput = {
    id?: number
    nb_bedroom: number
    nb_bathroom: number
    description: string
    advertId: number
  }

  export type CaracteristicUpdateInput = {
    nb_bedroom?: IntFieldUpdateOperationsInput | number
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    advert?: AdvertUpdateOneRequiredWithoutCaracteristicNestedInput
  }

  export type CaracteristicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nb_bedroom?: IntFieldUpdateOperationsInput | number
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    advertId?: IntFieldUpdateOperationsInput | number
  }

  export type CaracteristicCreateManyInput = {
    id?: number
    nb_bedroom: number
    nb_bathroom: number
    description: string
    advertId: number
  }

  export type CaracteristicUpdateManyMutationInput = {
    nb_bedroom?: IntFieldUpdateOperationsInput | number
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CaracteristicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nb_bedroom?: IntFieldUpdateOperationsInput | number
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    advertId?: IntFieldUpdateOperationsInput | number
  }

  export type PictureCreateInput = {
    url: string
    advert: AdvertCreateNestedOneWithoutPictureInput
  }

  export type PictureUncheckedCreateInput = {
    id?: number
    url: string
    advertId: number
  }

  export type PictureUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    advert?: AdvertUpdateOneRequiredWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    advertId?: IntFieldUpdateOperationsInput | number
  }

  export type PictureCreateManyInput = {
    id?: number
    url: string
    advertId: number
  }

  export type PictureUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    advertId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Advert?: AdvertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Advert?: AdvertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Advert?: AdvertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Advert?: AdvertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdvertScalarRelationFilter = {
    is?: AdvertWhereInput
    isNot?: AdvertWhereInput
  }

  export type AdressCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
    advertId?: SortOrder
  }

  export type AdressAvgOrderByAggregateInput = {
    id?: SortOrder
    advertId?: SortOrder
  }

  export type AdressMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
    advertId?: SortOrder
  }

  export type AdressMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
    advertId?: SortOrder
  }

  export type AdressSumOrderByAggregateInput = {
    id?: SortOrder
    advertId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type CaracteristicListRelationFilter = {
    every?: CaracteristicWhereInput
    some?: CaracteristicWhereInput
    none?: CaracteristicWhereInput
  }

  export type AdressListRelationFilter = {
    every?: AdressWhereInput
    some?: AdressWhereInput
    none?: AdressWhereInput
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaracteristicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdvertCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertAvgOrderByAggregateInput = {
    id?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type AdvertMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertSumOrderByAggregateInput = {
    id?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CaracteristicCountOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
    advertId?: SortOrder
  }

  export type CaracteristicAvgOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    advertId?: SortOrder
  }

  export type CaracteristicMaxOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
    advertId?: SortOrder
  }

  export type CaracteristicMinOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
    advertId?: SortOrder
  }

  export type CaracteristicSumOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    advertId?: SortOrder
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    advertId?: SortOrder
  }

  export type PictureAvgOrderByAggregateInput = {
    id?: SortOrder
    advertId?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    advertId?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    advertId?: SortOrder
  }

  export type PictureSumOrderByAggregateInput = {
    id?: SortOrder
    advertId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AdvertListRelationFilter = {
    every?: AdvertWhereInput
    some?: AdvertWhereInput
    none?: AdvertWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdvertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    about_me?: SortOrder
    phone_number?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    about_me?: SortOrder
    phone_number?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    about_me?: SortOrder
    phone_number?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AdvertCreateNestedOneWithoutAdressInput = {
    create?: XOR<AdvertCreateWithoutAdressInput, AdvertUncheckedCreateWithoutAdressInput>
    connectOrCreate?: AdvertCreateOrConnectWithoutAdressInput
    connect?: AdvertWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AdvertUpdateOneRequiredWithoutAdressNestedInput = {
    create?: XOR<AdvertCreateWithoutAdressInput, AdvertUncheckedCreateWithoutAdressInput>
    connectOrCreate?: AdvertCreateOrConnectWithoutAdressInput
    upsert?: AdvertUpsertWithoutAdressInput
    connect?: AdvertWhereUniqueInput
    update?: XOR<XOR<AdvertUpdateToOneWithWhereWithoutAdressInput, AdvertUpdateWithoutAdressInput>, AdvertUncheckedUpdateWithoutAdressInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAdvertInput = {
    create?: XOR<UserCreateWithoutAdvertInput, UserUncheckedCreateWithoutAdvertInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertInput
    connect?: UserWhereUniqueInput
  }

  export type PictureCreateNestedManyWithoutAdvertInput = {
    create?: XOR<PictureCreateWithoutAdvertInput, PictureUncheckedCreateWithoutAdvertInput> | PictureCreateWithoutAdvertInput[] | PictureUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAdvertInput | PictureCreateOrConnectWithoutAdvertInput[]
    createMany?: PictureCreateManyAdvertInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type CaracteristicCreateNestedManyWithoutAdvertInput = {
    create?: XOR<CaracteristicCreateWithoutAdvertInput, CaracteristicUncheckedCreateWithoutAdvertInput> | CaracteristicCreateWithoutAdvertInput[] | CaracteristicUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: CaracteristicCreateOrConnectWithoutAdvertInput | CaracteristicCreateOrConnectWithoutAdvertInput[]
    createMany?: CaracteristicCreateManyAdvertInputEnvelope
    connect?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
  }

  export type AdressCreateNestedManyWithoutAdvertInput = {
    create?: XOR<AdressCreateWithoutAdvertInput, AdressUncheckedCreateWithoutAdvertInput> | AdressCreateWithoutAdvertInput[] | AdressUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutAdvertInput | AdressCreateOrConnectWithoutAdvertInput[]
    createMany?: AdressCreateManyAdvertInputEnvelope
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
  }

  export type PictureUncheckedCreateNestedManyWithoutAdvertInput = {
    create?: XOR<PictureCreateWithoutAdvertInput, PictureUncheckedCreateWithoutAdvertInput> | PictureCreateWithoutAdvertInput[] | PictureUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAdvertInput | PictureCreateOrConnectWithoutAdvertInput[]
    createMany?: PictureCreateManyAdvertInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type CaracteristicUncheckedCreateNestedManyWithoutAdvertInput = {
    create?: XOR<CaracteristicCreateWithoutAdvertInput, CaracteristicUncheckedCreateWithoutAdvertInput> | CaracteristicCreateWithoutAdvertInput[] | CaracteristicUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: CaracteristicCreateOrConnectWithoutAdvertInput | CaracteristicCreateOrConnectWithoutAdvertInput[]
    createMany?: CaracteristicCreateManyAdvertInputEnvelope
    connect?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
  }

  export type AdressUncheckedCreateNestedManyWithoutAdvertInput = {
    create?: XOR<AdressCreateWithoutAdvertInput, AdressUncheckedCreateWithoutAdvertInput> | AdressCreateWithoutAdvertInput[] | AdressUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutAdvertInput | AdressCreateOrConnectWithoutAdvertInput[]
    createMany?: AdressCreateManyAdvertInputEnvelope
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAdvertNestedInput = {
    create?: XOR<UserCreateWithoutAdvertInput, UserUncheckedCreateWithoutAdvertInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertInput
    upsert?: UserUpsertWithoutAdvertInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdvertInput, UserUpdateWithoutAdvertInput>, UserUncheckedUpdateWithoutAdvertInput>
  }

  export type PictureUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<PictureCreateWithoutAdvertInput, PictureUncheckedCreateWithoutAdvertInput> | PictureCreateWithoutAdvertInput[] | PictureUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAdvertInput | PictureCreateOrConnectWithoutAdvertInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutAdvertInput | PictureUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: PictureCreateManyAdvertInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutAdvertInput | PictureUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutAdvertInput | PictureUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type CaracteristicUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<CaracteristicCreateWithoutAdvertInput, CaracteristicUncheckedCreateWithoutAdvertInput> | CaracteristicCreateWithoutAdvertInput[] | CaracteristicUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: CaracteristicCreateOrConnectWithoutAdvertInput | CaracteristicCreateOrConnectWithoutAdvertInput[]
    upsert?: CaracteristicUpsertWithWhereUniqueWithoutAdvertInput | CaracteristicUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: CaracteristicCreateManyAdvertInputEnvelope
    set?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    disconnect?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    delete?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    connect?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    update?: CaracteristicUpdateWithWhereUniqueWithoutAdvertInput | CaracteristicUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: CaracteristicUpdateManyWithWhereWithoutAdvertInput | CaracteristicUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: CaracteristicScalarWhereInput | CaracteristicScalarWhereInput[]
  }

  export type AdressUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<AdressCreateWithoutAdvertInput, AdressUncheckedCreateWithoutAdvertInput> | AdressCreateWithoutAdvertInput[] | AdressUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutAdvertInput | AdressCreateOrConnectWithoutAdvertInput[]
    upsert?: AdressUpsertWithWhereUniqueWithoutAdvertInput | AdressUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: AdressCreateManyAdvertInputEnvelope
    set?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    disconnect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    delete?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    update?: AdressUpdateWithWhereUniqueWithoutAdvertInput | AdressUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: AdressUpdateManyWithWhereWithoutAdvertInput | AdressUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: AdressScalarWhereInput | AdressScalarWhereInput[]
  }

  export type PictureUncheckedUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<PictureCreateWithoutAdvertInput, PictureUncheckedCreateWithoutAdvertInput> | PictureCreateWithoutAdvertInput[] | PictureUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutAdvertInput | PictureCreateOrConnectWithoutAdvertInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutAdvertInput | PictureUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: PictureCreateManyAdvertInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutAdvertInput | PictureUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutAdvertInput | PictureUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type CaracteristicUncheckedUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<CaracteristicCreateWithoutAdvertInput, CaracteristicUncheckedCreateWithoutAdvertInput> | CaracteristicCreateWithoutAdvertInput[] | CaracteristicUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: CaracteristicCreateOrConnectWithoutAdvertInput | CaracteristicCreateOrConnectWithoutAdvertInput[]
    upsert?: CaracteristicUpsertWithWhereUniqueWithoutAdvertInput | CaracteristicUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: CaracteristicCreateManyAdvertInputEnvelope
    set?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    disconnect?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    delete?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    connect?: CaracteristicWhereUniqueInput | CaracteristicWhereUniqueInput[]
    update?: CaracteristicUpdateWithWhereUniqueWithoutAdvertInput | CaracteristicUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: CaracteristicUpdateManyWithWhereWithoutAdvertInput | CaracteristicUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: CaracteristicScalarWhereInput | CaracteristicScalarWhereInput[]
  }

  export type AdressUncheckedUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<AdressCreateWithoutAdvertInput, AdressUncheckedCreateWithoutAdvertInput> | AdressCreateWithoutAdvertInput[] | AdressUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: AdressCreateOrConnectWithoutAdvertInput | AdressCreateOrConnectWithoutAdvertInput[]
    upsert?: AdressUpsertWithWhereUniqueWithoutAdvertInput | AdressUpsertWithWhereUniqueWithoutAdvertInput[]
    createMany?: AdressCreateManyAdvertInputEnvelope
    set?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    disconnect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    delete?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    connect?: AdressWhereUniqueInput | AdressWhereUniqueInput[]
    update?: AdressUpdateWithWhereUniqueWithoutAdvertInput | AdressUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: AdressUpdateManyWithWhereWithoutAdvertInput | AdressUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: AdressScalarWhereInput | AdressScalarWhereInput[]
  }

  export type AdvertCreateNestedOneWithoutCaracteristicInput = {
    create?: XOR<AdvertCreateWithoutCaracteristicInput, AdvertUncheckedCreateWithoutCaracteristicInput>
    connectOrCreate?: AdvertCreateOrConnectWithoutCaracteristicInput
    connect?: AdvertWhereUniqueInput
  }

  export type AdvertUpdateOneRequiredWithoutCaracteristicNestedInput = {
    create?: XOR<AdvertCreateWithoutCaracteristicInput, AdvertUncheckedCreateWithoutCaracteristicInput>
    connectOrCreate?: AdvertCreateOrConnectWithoutCaracteristicInput
    upsert?: AdvertUpsertWithoutCaracteristicInput
    connect?: AdvertWhereUniqueInput
    update?: XOR<XOR<AdvertUpdateToOneWithWhereWithoutCaracteristicInput, AdvertUpdateWithoutCaracteristicInput>, AdvertUncheckedUpdateWithoutCaracteristicInput>
  }

  export type AdvertCreateNestedOneWithoutPictureInput = {
    create?: XOR<AdvertCreateWithoutPictureInput, AdvertUncheckedCreateWithoutPictureInput>
    connectOrCreate?: AdvertCreateOrConnectWithoutPictureInput
    connect?: AdvertWhereUniqueInput
  }

  export type AdvertUpdateOneRequiredWithoutPictureNestedInput = {
    create?: XOR<AdvertCreateWithoutPictureInput, AdvertUncheckedCreateWithoutPictureInput>
    connectOrCreate?: AdvertCreateOrConnectWithoutPictureInput
    upsert?: AdvertUpsertWithoutPictureInput
    connect?: AdvertWhereUniqueInput
    update?: XOR<XOR<AdvertUpdateToOneWithWhereWithoutPictureInput, AdvertUpdateWithoutPictureInput>, AdvertUncheckedUpdateWithoutPictureInput>
  }

  export type AdvertCreateNestedManyWithoutUserInput = {
    create?: XOR<AdvertCreateWithoutUserInput, AdvertUncheckedCreateWithoutUserInput> | AdvertCreateWithoutUserInput[] | AdvertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertCreateOrConnectWithoutUserInput | AdvertCreateOrConnectWithoutUserInput[]
    createMany?: AdvertCreateManyUserInputEnvelope
    connect?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
  }

  export type AdvertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdvertCreateWithoutUserInput, AdvertUncheckedCreateWithoutUserInput> | AdvertCreateWithoutUserInput[] | AdvertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertCreateOrConnectWithoutUserInput | AdvertCreateOrConnectWithoutUserInput[]
    createMany?: AdvertCreateManyUserInputEnvelope
    connect?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdvertUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdvertCreateWithoutUserInput, AdvertUncheckedCreateWithoutUserInput> | AdvertCreateWithoutUserInput[] | AdvertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertCreateOrConnectWithoutUserInput | AdvertCreateOrConnectWithoutUserInput[]
    upsert?: AdvertUpsertWithWhereUniqueWithoutUserInput | AdvertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdvertCreateManyUserInputEnvelope
    set?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    disconnect?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    delete?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    connect?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    update?: AdvertUpdateWithWhereUniqueWithoutUserInput | AdvertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdvertUpdateManyWithWhereWithoutUserInput | AdvertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdvertScalarWhereInput | AdvertScalarWhereInput[]
  }

  export type AdvertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdvertCreateWithoutUserInput, AdvertUncheckedCreateWithoutUserInput> | AdvertCreateWithoutUserInput[] | AdvertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdvertCreateOrConnectWithoutUserInput | AdvertCreateOrConnectWithoutUserInput[]
    upsert?: AdvertUpsertWithWhereUniqueWithoutUserInput | AdvertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdvertCreateManyUserInputEnvelope
    set?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    disconnect?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    delete?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    connect?: AdvertWhereUniqueInput | AdvertWhereUniqueInput[]
    update?: AdvertUpdateWithWhereUniqueWithoutUserInput | AdvertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdvertUpdateManyWithWhereWithoutUserInput | AdvertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdvertScalarWhereInput | AdvertScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AdvertCreateWithoutAdressInput = {
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdvertInput
    Picture?: PictureCreateNestedManyWithoutAdvertInput
    Caracteristic?: CaracteristicCreateNestedManyWithoutAdvertInput
  }

  export type AdvertUncheckedCreateWithoutAdressInput = {
    id?: number
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Picture?: PictureUncheckedCreateNestedManyWithoutAdvertInput
    Caracteristic?: CaracteristicUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertCreateOrConnectWithoutAdressInput = {
    where: AdvertWhereUniqueInput
    create: XOR<AdvertCreateWithoutAdressInput, AdvertUncheckedCreateWithoutAdressInput>
  }

  export type AdvertUpsertWithoutAdressInput = {
    update: XOR<AdvertUpdateWithoutAdressInput, AdvertUncheckedUpdateWithoutAdressInput>
    create: XOR<AdvertCreateWithoutAdressInput, AdvertUncheckedCreateWithoutAdressInput>
    where?: AdvertWhereInput
  }

  export type AdvertUpdateToOneWithWhereWithoutAdressInput = {
    where?: AdvertWhereInput
    data: XOR<AdvertUpdateWithoutAdressInput, AdvertUncheckedUpdateWithoutAdressInput>
  }

  export type AdvertUpdateWithoutAdressInput = {
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdvertNestedInput
    Picture?: PictureUpdateManyWithoutAdvertNestedInput
    Caracteristic?: CaracteristicUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertUncheckedUpdateWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Picture?: PictureUncheckedUpdateManyWithoutAdvertNestedInput
    Caracteristic?: CaracteristicUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type UserCreateWithoutAdvertInput = {
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAdvertInput = {
    id?: number
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAdvertInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdvertInput, UserUncheckedCreateWithoutAdvertInput>
  }

  export type PictureCreateWithoutAdvertInput = {
    url: string
  }

  export type PictureUncheckedCreateWithoutAdvertInput = {
    id?: number
    url: string
  }

  export type PictureCreateOrConnectWithoutAdvertInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutAdvertInput, PictureUncheckedCreateWithoutAdvertInput>
  }

  export type PictureCreateManyAdvertInputEnvelope = {
    data: PictureCreateManyAdvertInput | PictureCreateManyAdvertInput[]
    skipDuplicates?: boolean
  }

  export type CaracteristicCreateWithoutAdvertInput = {
    nb_bedroom: number
    nb_bathroom: number
    description: string
  }

  export type CaracteristicUncheckedCreateWithoutAdvertInput = {
    id?: number
    nb_bedroom: number
    nb_bathroom: number
    description: string
  }

  export type CaracteristicCreateOrConnectWithoutAdvertInput = {
    where: CaracteristicWhereUniqueInput
    create: XOR<CaracteristicCreateWithoutAdvertInput, CaracteristicUncheckedCreateWithoutAdvertInput>
  }

  export type CaracteristicCreateManyAdvertInputEnvelope = {
    data: CaracteristicCreateManyAdvertInput | CaracteristicCreateManyAdvertInput[]
    skipDuplicates?: boolean
  }

  export type AdressCreateWithoutAdvertInput = {
    city: string
    country: string
    street: string
    zip_code: string
  }

  export type AdressUncheckedCreateWithoutAdvertInput = {
    id?: number
    city: string
    country: string
    street: string
    zip_code: string
  }

  export type AdressCreateOrConnectWithoutAdvertInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutAdvertInput, AdressUncheckedCreateWithoutAdvertInput>
  }

  export type AdressCreateManyAdvertInputEnvelope = {
    data: AdressCreateManyAdvertInput | AdressCreateManyAdvertInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAdvertInput = {
    update: XOR<UserUpdateWithoutAdvertInput, UserUncheckedUpdateWithoutAdvertInput>
    create: XOR<UserCreateWithoutAdvertInput, UserUncheckedCreateWithoutAdvertInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdvertInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdvertInput, UserUncheckedUpdateWithoutAdvertInput>
  }

  export type UserUpdateWithoutAdvertInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureUpsertWithWhereUniqueWithoutAdvertInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutAdvertInput, PictureUncheckedUpdateWithoutAdvertInput>
    create: XOR<PictureCreateWithoutAdvertInput, PictureUncheckedCreateWithoutAdvertInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutAdvertInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutAdvertInput, PictureUncheckedUpdateWithoutAdvertInput>
  }

  export type PictureUpdateManyWithWhereWithoutAdvertInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutAdvertInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: IntFilter<"Picture"> | number
    url?: StringFilter<"Picture"> | string
    advertId?: IntFilter<"Picture"> | number
  }

  export type CaracteristicUpsertWithWhereUniqueWithoutAdvertInput = {
    where: CaracteristicWhereUniqueInput
    update: XOR<CaracteristicUpdateWithoutAdvertInput, CaracteristicUncheckedUpdateWithoutAdvertInput>
    create: XOR<CaracteristicCreateWithoutAdvertInput, CaracteristicUncheckedCreateWithoutAdvertInput>
  }

  export type CaracteristicUpdateWithWhereUniqueWithoutAdvertInput = {
    where: CaracteristicWhereUniqueInput
    data: XOR<CaracteristicUpdateWithoutAdvertInput, CaracteristicUncheckedUpdateWithoutAdvertInput>
  }

  export type CaracteristicUpdateManyWithWhereWithoutAdvertInput = {
    where: CaracteristicScalarWhereInput
    data: XOR<CaracteristicUpdateManyMutationInput, CaracteristicUncheckedUpdateManyWithoutAdvertInput>
  }

  export type CaracteristicScalarWhereInput = {
    AND?: CaracteristicScalarWhereInput | CaracteristicScalarWhereInput[]
    OR?: CaracteristicScalarWhereInput[]
    NOT?: CaracteristicScalarWhereInput | CaracteristicScalarWhereInput[]
    id?: IntFilter<"Caracteristic"> | number
    nb_bedroom?: IntFilter<"Caracteristic"> | number
    nb_bathroom?: IntFilter<"Caracteristic"> | number
    description?: StringFilter<"Caracteristic"> | string
    advertId?: IntFilter<"Caracteristic"> | number
  }

  export type AdressUpsertWithWhereUniqueWithoutAdvertInput = {
    where: AdressWhereUniqueInput
    update: XOR<AdressUpdateWithoutAdvertInput, AdressUncheckedUpdateWithoutAdvertInput>
    create: XOR<AdressCreateWithoutAdvertInput, AdressUncheckedCreateWithoutAdvertInput>
  }

  export type AdressUpdateWithWhereUniqueWithoutAdvertInput = {
    where: AdressWhereUniqueInput
    data: XOR<AdressUpdateWithoutAdvertInput, AdressUncheckedUpdateWithoutAdvertInput>
  }

  export type AdressUpdateManyWithWhereWithoutAdvertInput = {
    where: AdressScalarWhereInput
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyWithoutAdvertInput>
  }

  export type AdressScalarWhereInput = {
    AND?: AdressScalarWhereInput | AdressScalarWhereInput[]
    OR?: AdressScalarWhereInput[]
    NOT?: AdressScalarWhereInput | AdressScalarWhereInput[]
    id?: IntFilter<"Adress"> | number
    city?: StringFilter<"Adress"> | string
    country?: StringFilter<"Adress"> | string
    street?: StringFilter<"Adress"> | string
    zip_code?: StringFilter<"Adress"> | string
    advertId?: IntFilter<"Adress"> | number
  }

  export type AdvertCreateWithoutCaracteristicInput = {
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdvertInput
    Picture?: PictureCreateNestedManyWithoutAdvertInput
    Adress?: AdressCreateNestedManyWithoutAdvertInput
  }

  export type AdvertUncheckedCreateWithoutCaracteristicInput = {
    id?: number
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Picture?: PictureUncheckedCreateNestedManyWithoutAdvertInput
    Adress?: AdressUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertCreateOrConnectWithoutCaracteristicInput = {
    where: AdvertWhereUniqueInput
    create: XOR<AdvertCreateWithoutCaracteristicInput, AdvertUncheckedCreateWithoutCaracteristicInput>
  }

  export type AdvertUpsertWithoutCaracteristicInput = {
    update: XOR<AdvertUpdateWithoutCaracteristicInput, AdvertUncheckedUpdateWithoutCaracteristicInput>
    create: XOR<AdvertCreateWithoutCaracteristicInput, AdvertUncheckedCreateWithoutCaracteristicInput>
    where?: AdvertWhereInput
  }

  export type AdvertUpdateToOneWithWhereWithoutCaracteristicInput = {
    where?: AdvertWhereInput
    data: XOR<AdvertUpdateWithoutCaracteristicInput, AdvertUncheckedUpdateWithoutCaracteristicInput>
  }

  export type AdvertUpdateWithoutCaracteristicInput = {
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdvertNestedInput
    Picture?: PictureUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertUncheckedUpdateWithoutCaracteristicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Picture?: PictureUncheckedUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertCreateWithoutPictureInput = {
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdvertInput
    Caracteristic?: CaracteristicCreateNestedManyWithoutAdvertInput
    Adress?: AdressCreateNestedManyWithoutAdvertInput
  }

  export type AdvertUncheckedCreateWithoutPictureInput = {
    id?: number
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Caracteristic?: CaracteristicUncheckedCreateNestedManyWithoutAdvertInput
    Adress?: AdressUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertCreateOrConnectWithoutPictureInput = {
    where: AdvertWhereUniqueInput
    create: XOR<AdvertCreateWithoutPictureInput, AdvertUncheckedCreateWithoutPictureInput>
  }

  export type AdvertUpsertWithoutPictureInput = {
    update: XOR<AdvertUpdateWithoutPictureInput, AdvertUncheckedUpdateWithoutPictureInput>
    create: XOR<AdvertCreateWithoutPictureInput, AdvertUncheckedCreateWithoutPictureInput>
    where?: AdvertWhereInput
  }

  export type AdvertUpdateToOneWithWhereWithoutPictureInput = {
    where?: AdvertWhereInput
    data: XOR<AdvertUpdateWithoutPictureInput, AdvertUncheckedUpdateWithoutPictureInput>
  }

  export type AdvertUpdateWithoutPictureInput = {
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdvertNestedInput
    Caracteristic?: CaracteristicUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertUncheckedUpdateWithoutPictureInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Caracteristic?: CaracteristicUncheckedUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertCreateWithoutUserInput = {
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Picture?: PictureCreateNestedManyWithoutAdvertInput
    Caracteristic?: CaracteristicCreateNestedManyWithoutAdvertInput
    Adress?: AdressCreateNestedManyWithoutAdvertInput
  }

  export type AdvertUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Picture?: PictureUncheckedCreateNestedManyWithoutAdvertInput
    Caracteristic?: CaracteristicUncheckedCreateNestedManyWithoutAdvertInput
    Adress?: AdressUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertCreateOrConnectWithoutUserInput = {
    where: AdvertWhereUniqueInput
    create: XOR<AdvertCreateWithoutUserInput, AdvertUncheckedCreateWithoutUserInput>
  }

  export type AdvertCreateManyUserInputEnvelope = {
    data: AdvertCreateManyUserInput | AdvertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdvertUpsertWithWhereUniqueWithoutUserInput = {
    where: AdvertWhereUniqueInput
    update: XOR<AdvertUpdateWithoutUserInput, AdvertUncheckedUpdateWithoutUserInput>
    create: XOR<AdvertCreateWithoutUserInput, AdvertUncheckedCreateWithoutUserInput>
  }

  export type AdvertUpdateWithWhereUniqueWithoutUserInput = {
    where: AdvertWhereUniqueInput
    data: XOR<AdvertUpdateWithoutUserInput, AdvertUncheckedUpdateWithoutUserInput>
  }

  export type AdvertUpdateManyWithWhereWithoutUserInput = {
    where: AdvertScalarWhereInput
    data: XOR<AdvertUpdateManyMutationInput, AdvertUncheckedUpdateManyWithoutUserInput>
  }

  export type AdvertScalarWhereInput = {
    AND?: AdvertScalarWhereInput | AdvertScalarWhereInput[]
    OR?: AdvertScalarWhereInput[]
    NOT?: AdvertScalarWhereInput | AdvertScalarWhereInput[]
    id?: IntFilter<"Advert"> | number
    title?: StringFilter<"Advert"> | string
    nb_person?: IntFilter<"Advert"> | number
    price?: FloatFilter<"Advert"> | number
    available_date?: DateTimeFilter<"Advert"> | Date | string
    type?: StringFilter<"Advert"> | string
    userId?: IntFilter<"Advert"> | number
    createdAt?: DateTimeFilter<"Advert"> | Date | string
    updatedAt?: DateTimeFilter<"Advert"> | Date | string
  }

  export type PictureCreateManyAdvertInput = {
    id?: number
    url: string
  }

  export type CaracteristicCreateManyAdvertInput = {
    id?: number
    nb_bedroom: number
    nb_bathroom: number
    description: string
  }

  export type AdressCreateManyAdvertInput = {
    id?: number
    city: string
    country: string
    street: string
    zip_code: string
  }

  export type PictureUpdateWithoutAdvertInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CaracteristicUpdateWithoutAdvertInput = {
    nb_bedroom?: IntFieldUpdateOperationsInput | number
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CaracteristicUncheckedUpdateWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    nb_bedroom?: IntFieldUpdateOperationsInput | number
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CaracteristicUncheckedUpdateManyWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    nb_bedroom?: IntFieldUpdateOperationsInput | number
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AdressUpdateWithoutAdvertInput = {
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type AdressUncheckedUpdateWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type AdressUncheckedUpdateManyWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type AdvertCreateManyUserInput = {
    id?: number
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Picture?: PictureUpdateManyWithoutAdvertNestedInput
    Caracteristic?: CaracteristicUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Picture?: PictureUncheckedUpdateManyWithoutAdvertNestedInput
    Caracteristic?: CaracteristicUncheckedUpdateManyWithoutAdvertNestedInput
    Adress?: AdressUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}