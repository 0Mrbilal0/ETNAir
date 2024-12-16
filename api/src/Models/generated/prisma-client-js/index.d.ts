
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
 * Model Rental
 * 
 */
export type Rental = $Result.DefaultSelection<Prisma.$RentalPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
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
 * Enums
 */
export namespace $Enums {
  export const Types: {
  HOUSE: 'HOUSE',
  APARTMENT: 'APARTMENT',
  CASTLE: 'CASTLE',
  TINY_HOUSE: 'TINY_HOUSE'
};

export type Types = (typeof Types)[keyof typeof Types]


export const UserType: {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type Types = $Enums.Types

export const Types: typeof $Enums.Types

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rentals
 * const rentals = await prisma.rental.findMany()
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
   * // Fetch zero or more Rentals
   * const rentals = await prisma.rental.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.rental`: Exposes CRUD operations for the **Rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.RentalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caracteristic`: Exposes CRUD operations for the **Caracteristic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caracteristics
    * const caracteristics = await prisma.caracteristic.findMany()
    * ```
    */
  get caracteristic(): Prisma.CaracteristicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
    Rental: 'Rental',
    Address: 'Address',
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
      modelProps: "rental" | "address" | "caracteristic" | "picture" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rental: {
        payload: Prisma.$RentalPayload<ExtArgs>
        fields: Prisma.RentalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findFirst: {
            args: Prisma.RentalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findMany: {
            args: Prisma.RentalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          create: {
            args: Prisma.RentalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          createMany: {
            args: Prisma.RentalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          delete: {
            args: Prisma.RentalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          update: {
            args: Prisma.RentalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          deleteMany: {
            args: Prisma.RentalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRental>
          }
          groupBy: {
            args: Prisma.RentalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalCountArgs<ExtArgs>
            result: $Utils.Optional<RentalCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    rental?: RentalOmit
    address?: AddressOmit
    caracteristic?: CaracteristicOmit
    picture?: PictureOmit
    user?: UserOmit
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
   * Count Type RentalCountOutputType
   */

  export type RentalCountOutputType = {
    picture: number
  }

  export type RentalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    picture?: boolean | RentalCountOutputTypeCountPictureArgs
  }

  // Custom InputTypes
  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalCountOutputType
     */
    select?: RentalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeCountPictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    rental: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | AddressCountOutputTypeCountRentalArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Count Type CaracteristicCountOutputType
   */

  export type CaracteristicCountOutputType = {
    rental: number
  }

  export type CaracteristicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | CaracteristicCountOutputTypeCountRentalArgs
  }

  // Custom InputTypes
  /**
   * CaracteristicCountOutputType without action
   */
  export type CaracteristicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaracteristicCountOutputType
     */
    select?: CaracteristicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaracteristicCountOutputType without action
   */
  export type CaracteristicCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Rental: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | UserCountOutputTypeCountRentalArgs
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
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalAvgAggregateOutputType = {
    nb_person: number | null
    price: number | null
  }

  export type RentalSumAggregateOutputType = {
    nb_person: number | null
    price: number | null
  }

  export type RentalMinAggregateOutputType = {
    id: string | null
    title: string | null
    nb_person: number | null
    price: number | null
    available_date: Date | null
    type: $Enums.Types | null
    userId: string | null
    adressId: string | null
    caracteristicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    nb_person: number | null
    price: number | null
    available_date: Date | null
    type: $Enums.Types | null
    userId: string | null
    adressId: string | null
    caracteristicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalCountAggregateOutputType = {
    id: number
    title: number
    nb_person: number
    price: number
    available_date: number
    type: number
    userId: number
    adressId: number
    caracteristicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalAvgAggregateInputType = {
    nb_person?: true
    price?: true
  }

  export type RentalSumAggregateInputType = {
    nb_person?: true
    price?: true
  }

  export type RentalMinAggregateInputType = {
    id?: true
    title?: true
    nb_person?: true
    price?: true
    available_date?: true
    type?: true
    userId?: true
    adressId?: true
    caracteristicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalMaxAggregateInputType = {
    id?: true
    title?: true
    nb_person?: true
    price?: true
    available_date?: true
    type?: true
    userId?: true
    adressId?: true
    caracteristicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalCountAggregateInputType = {
    id?: true
    title?: true
    nb_person?: true
    price?: true
    available_date?: true
    type?: true
    userId?: true
    adressId?: true
    caracteristicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rental to aggregate.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type RentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithAggregationInput | RentalOrderByWithAggregationInput[]
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum
    having?: RentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _avg?: RentalAvgAggregateInputType
    _sum?: RentalSumAggregateInputType
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }

  export type RentalGroupByOutputType = {
    id: string
    title: string
    nb_person: number
    price: number
    available_date: Date
    type: $Enums.Types
    userId: string
    adressId: string
    caracteristicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends RentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type RentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    nb_person?: boolean
    price?: boolean
    available_date?: boolean
    type?: boolean
    userId?: boolean
    adressId?: boolean
    caracteristicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    caracteristic?: boolean | Rental$caracteristicArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    picture?: boolean | Rental$pictureArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    nb_person?: boolean
    price?: boolean
    available_date?: boolean
    type?: boolean
    userId?: boolean
    adressId?: boolean
    caracteristicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    caracteristic?: boolean | Rental$caracteristicArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectScalar = {
    id?: boolean
    title?: boolean
    nb_person?: boolean
    price?: boolean
    available_date?: boolean
    type?: boolean
    userId?: boolean
    adressId?: boolean
    caracteristicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "nb_person" | "price" | "available_date" | "type" | "userId" | "adressId" | "caracteristicId" | "createdAt" | "updatedAt", ExtArgs["result"]["rental"]>
  export type RentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    caracteristic?: boolean | Rental$caracteristicArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    picture?: boolean | Rental$pictureArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    caracteristic?: boolean | Rental$caracteristicArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $RentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rental"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      caracteristic: Prisma.$CaracteristicPayload<ExtArgs> | null
      address: Prisma.$AddressPayload<ExtArgs>
      picture: Prisma.$PicturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      nb_person: number
      price: number
      available_date: Date
      type: $Enums.Types
      userId: string
      adressId: string
      caracteristicId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rental"]>
    composites: {}
  }

  type RentalGetPayload<S extends boolean | null | undefined | RentalDefaultArgs> = $Result.GetResult<Prisma.$RentalPayload, S>

  type RentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: RentalCountAggregateInputType | true
    }

  export interface RentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rental'], meta: { name: 'Rental' } }
    /**
     * Find zero or one Rental that matches the filter.
     * @param {RentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalFindUniqueArgs>(args: SelectSubset<T, RentalFindUniqueArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Rental that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalFindFirstArgs>(args?: SelectSubset<T, RentalFindFirstArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalFindManyArgs>(args?: SelectSubset<T, RentalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Rental.
     * @param {RentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
     */
    create<T extends RentalCreateArgs>(args: SelectSubset<T, RentalCreateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Rentals.
     * @param {RentalCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalCreateManyArgs>(args?: SelectSubset<T, RentalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rentals and returns the data saved in the database.
     * @param {RentalCreateManyAndReturnArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rentals and only return the `id`
     * const rentalWithIdOnly = await prisma.rental.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Rental.
     * @param {RentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
     */
    delete<T extends RentalDeleteArgs>(args: SelectSubset<T, RentalDeleteArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Rental.
     * @param {RentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalUpdateArgs>(args: SelectSubset<T, RentalUpdateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Rentals.
     * @param {RentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalDeleteManyArgs>(args?: SelectSubset<T, RentalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalUpdateManyArgs>(args: SelectSubset<T, RentalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rental.
     * @param {RentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     */
    upsert<T extends RentalUpsertArgs>(args: SelectSubset<T, RentalUpsertArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends RentalCountArgs>(
      args?: Subset<T, RentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalGroupByArgs} args - Group by arguments.
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
      T extends RentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalGroupByArgs['orderBy'] }
        : { orderBy?: RentalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rental model
   */
  readonly fields: RentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    caracteristic<T extends Rental$caracteristicArgs<ExtArgs> = {}>(args?: Subset<T, Rental$caracteristicArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    picture<T extends Rental$pictureArgs<ExtArgs> = {}>(args?: Subset<T, Rental$pictureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Rental model
   */ 
  interface RentalFieldRefs {
    readonly id: FieldRef<"Rental", 'String'>
    readonly title: FieldRef<"Rental", 'String'>
    readonly nb_person: FieldRef<"Rental", 'Int'>
    readonly price: FieldRef<"Rental", 'Float'>
    readonly available_date: FieldRef<"Rental", 'DateTime'>
    readonly type: FieldRef<"Rental", 'Types'>
    readonly userId: FieldRef<"Rental", 'String'>
    readonly adressId: FieldRef<"Rental", 'String'>
    readonly caracteristicId: FieldRef<"Rental", 'String'>
    readonly createdAt: FieldRef<"Rental", 'DateTime'>
    readonly updatedAt: FieldRef<"Rental", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rental findUnique
   */
  export type RentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental findUniqueOrThrow
   */
  export type RentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental findFirst
   */
  export type RentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental findFirstOrThrow
   */
  export type RentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental findMany
   */
  export type RentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rentals to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental create
   */
  export type RentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to create a Rental.
     */
    data: XOR<RentalCreateInput, RentalUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental createMany
   */
  export type RentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rental createManyAndReturn
   */
  export type RentalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rental update
   */
  export type RentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to update a Rental.
     */
    data: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
    /**
     * Choose, which Rental to update.
     */
    where: RentalWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental updateMany
   */
  export type RentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
  }

  /**
   * Rental upsert
   */
  export type RentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The filter to search for the Rental to update in case it exists.
     */
    where: RentalWhereUniqueInput
    /**
     * In case the Rental found by the `where` argument doesn't exist, create a new Rental with this data.
     */
    create: XOR<RentalCreateInput, RentalUncheckedCreateInput>
    /**
     * In case the Rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental delete
   */
  export type RentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter which Rental to delete.
     */
    where: RentalWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Rental deleteMany
   */
  export type RentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rentals to delete
     */
    where?: RentalWhereInput
  }

  /**
   * Rental.caracteristic
   */
  export type Rental$caracteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristic
     */
    select?: CaracteristicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    where?: CaracteristicWhereInput
  }

  /**
   * Rental.picture
   */
  export type Rental$pictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
   * Rental without action
   */
  export type RentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    city: string | null
    country: string | null
    street: string | null
    zip_code: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    city: string | null
    country: string | null
    street: string | null
    zip_code: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    city: number
    country: number
    street: number
    zip_code: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    city?: true
    country?: true
    street?: true
    zip_code?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    city?: true
    country?: true
    street?: true
    zip_code?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    city?: true
    country?: true
    street?: true
    zip_code?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    city: string
    country: string
    street: string
    zip_code: string
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    country?: boolean
    street?: boolean
    zip_code?: boolean
    rental?: boolean | Address$rentalArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    country?: boolean
    street?: boolean
    zip_code?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    city?: boolean
    country?: boolean
    street?: boolean
    zip_code?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "country" | "street" | "zip_code", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | Address$rentalArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      rental: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      city: string
      country: string
      street: string
      zip_code: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rental<T extends Address$rentalArgs<ExtArgs> = {}>(args?: Subset<T, Address$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly zip_code: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }

  /**
   * Address.rental
   */
  export type Address$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
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
    nb_bedroom: number | null
    nb_bathroom: number | null
  }

  export type CaracteristicSumAggregateOutputType = {
    nb_bedroom: number | null
    nb_bathroom: number | null
  }

  export type CaracteristicMinAggregateOutputType = {
    id: string | null
    nb_bedroom: number | null
    nb_bathroom: number | null
    description: string | null
  }

  export type CaracteristicMaxAggregateOutputType = {
    id: string | null
    nb_bedroom: number | null
    nb_bathroom: number | null
    description: string | null
  }

  export type CaracteristicCountAggregateOutputType = {
    id: number
    nb_bedroom: number
    nb_bathroom: number
    description: number
    _all: number
  }


  export type CaracteristicAvgAggregateInputType = {
    nb_bedroom?: true
    nb_bathroom?: true
  }

  export type CaracteristicSumAggregateInputType = {
    nb_bedroom?: true
    nb_bathroom?: true
  }

  export type CaracteristicMinAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    description?: true
  }

  export type CaracteristicMaxAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    description?: true
  }

  export type CaracteristicCountAggregateInputType = {
    id?: true
    nb_bedroom?: true
    nb_bathroom?: true
    description?: true
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
    id: string
    nb_bedroom: number | null
    nb_bathroom: number
    description: string
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
    rental?: boolean | Caracteristic$rentalArgs<ExtArgs>
    _count?: boolean | CaracteristicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caracteristic"]>

  export type CaracteristicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nb_bedroom?: boolean
    nb_bathroom?: boolean
    description?: boolean
  }, ExtArgs["result"]["caracteristic"]>

  export type CaracteristicSelectScalar = {
    id?: boolean
    nb_bedroom?: boolean
    nb_bathroom?: boolean
    description?: boolean
  }

  export type CaracteristicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nb_bedroom" | "nb_bathroom" | "description", ExtArgs["result"]["caracteristic"]>
  export type CaracteristicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | Caracteristic$rentalArgs<ExtArgs>
    _count?: boolean | CaracteristicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaracteristicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CaracteristicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caracteristic"
    objects: {
      rental: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nb_bedroom: number | null
      nb_bathroom: number
      description: string
    }, ExtArgs["result"]["caracteristic"]>
    composites: {}
  }

  type CaracteristicGetPayload<S extends boolean | null | undefined | CaracteristicDefaultArgs> = $Result.GetResult<Prisma.$CaracteristicPayload, S>

  type CaracteristicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CaracteristicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CaracteristicCountAggregateInputType | true
    }

  export interface CaracteristicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends CaracteristicFindUniqueArgs>(args: SelectSubset<T, CaracteristicFindUniqueArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends CaracteristicFindUniqueOrThrowArgs>(args: SelectSubset<T, CaracteristicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends CaracteristicFindFirstArgs>(args?: SelectSubset<T, CaracteristicFindFirstArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends CaracteristicFindFirstOrThrowArgs>(args?: SelectSubset<T, CaracteristicFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends CaracteristicFindManyArgs>(args?: SelectSubset<T, CaracteristicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends CaracteristicCreateArgs>(args: SelectSubset<T, CaracteristicCreateArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends CaracteristicCreateManyAndReturnArgs>(args?: SelectSubset<T, CaracteristicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends CaracteristicDeleteArgs>(args: SelectSubset<T, CaracteristicDeleteArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends CaracteristicUpdateArgs>(args: SelectSubset<T, CaracteristicUpdateArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends CaracteristicUpsertArgs>(args: SelectSubset<T, CaracteristicUpsertArgs<ExtArgs>>): Prisma__CaracteristicClient<$Result.GetResult<Prisma.$CaracteristicPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__CaracteristicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rental<T extends Caracteristic$rentalArgs<ExtArgs> = {}>(args?: Subset<T, Caracteristic$rentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"Caracteristic", 'String'>
    readonly nb_bedroom: FieldRef<"Caracteristic", 'Int'>
    readonly nb_bathroom: FieldRef<"Caracteristic", 'Int'>
    readonly description: FieldRef<"Caracteristic", 'String'>
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter, which Caracteristic to fetch.
     */
    where: CaracteristicWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter, which Caracteristic to fetch.
     */
    where: CaracteristicWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * The data needed to create a Caracteristic.
     */
    data: XOR<CaracteristicCreateInput, CaracteristicUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
    /**
     * The data used to create many Caracteristics.
     */
    data: CaracteristicCreateManyInput | CaracteristicCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaracteristicInclude<ExtArgs> | null
    /**
     * Filter which Caracteristic to delete.
     */
    where: CaracteristicWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
   * Caracteristic.rental
   */
  export type Caracteristic$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
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
     * Omit specific fields from the Caracteristic
     */
    omit?: CaracteristicOmit<ExtArgs> | null
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
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureMinAggregateOutputType = {
    id: string | null
    url: string | null
    rentalId: string | null
  }

  export type PictureMaxAggregateOutputType = {
    id: string | null
    url: string | null
    rentalId: string | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    url: number
    rentalId: number
    _all: number
  }


  export type PictureMinAggregateInputType = {
    id?: true
    url?: true
    rentalId?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    url?: true
    rentalId?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    url?: true
    rentalId?: true
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
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: string
    url: string
    rentalId: string
    _count: PictureCountAggregateOutputType | null
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
    rentalId?: boolean
    rental?: boolean | RentalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    rentalId?: boolean
    rental?: boolean | RentalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    url?: boolean
    rentalId?: boolean
  }

  export type PictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "rentalId", ExtArgs["result"]["picture"]>
  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | RentalDefaultArgs<ExtArgs>
  }
  export type PictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | RentalDefaultArgs<ExtArgs>
  }

  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      rental: Prisma.$RentalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      rentalId: string
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends PictureFindUniqueArgs>(args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends PictureFindFirstArgs>(args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends PictureFindManyArgs>(args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends PictureCreateArgs>(args: SelectSubset<T, PictureCreateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends PictureDeleteArgs>(args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends PictureUpdateArgs>(args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends PictureUpsertArgs>(args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rental<T extends RentalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalDefaultArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly id: FieldRef<"Picture", 'String'>
    readonly url: FieldRef<"Picture", 'String'>
    readonly rentalId: FieldRef<"Picture", 'String'>
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
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
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    about_me: string | null
    phone_number: string | null
    user_type: $Enums.UserType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    about_me: string | null
    phone_number: string | null
    user_type: $Enums.UserType | null
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    about_me: string | null
    phone_number: string
    user_type: $Enums.UserType
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    Rental?: boolean | User$RentalArgs<ExtArgs>
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

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "about_me" | "phone_number" | "user_type" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | User$RentalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Rental: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      about_me: string | null
      phone_number: string
      user_type: $Enums.UserType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Rental<T extends User$RentalArgs<ExtArgs> = {}>(args?: Subset<T, User$RentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly about_me: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'UserType'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
   * User.Rental
   */
  export type User$RentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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


  export const RentalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    nb_person: 'nb_person',
    price: 'price',
    available_date: 'available_date',
    type: 'type',
    userId: 'userId',
    adressId: 'adressId',
    caracteristicId: 'caracteristicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const AddressScalarFieldEnum: {
    id: 'id',
    city: 'city',
    country: 'country',
    street: 'street',
    zip_code: 'zip_code'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CaracteristicScalarFieldEnum: {
    id: 'id',
    nb_bedroom: 'nb_bedroom',
    nb_bathroom: 'nb_bathroom',
    description: 'description'
  };

  export type CaracteristicScalarFieldEnum = (typeof CaracteristicScalarFieldEnum)[keyof typeof CaracteristicScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    url: 'url',
    rentalId: 'rentalId'
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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Types'
   */
  export type EnumTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Types'>
    


  /**
   * Reference to a field of type 'Types[]'
   */
  export type ListEnumTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Types[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    
  /**
   * Deep Input Types
   */


  export type RentalWhereInput = {
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    id?: StringFilter<"Rental"> | string
    title?: StringFilter<"Rental"> | string
    nb_person?: IntFilter<"Rental"> | number
    price?: FloatFilter<"Rental"> | number
    available_date?: DateTimeFilter<"Rental"> | Date | string
    type?: EnumTypesFilter<"Rental"> | $Enums.Types
    userId?: StringFilter<"Rental"> | string
    adressId?: StringFilter<"Rental"> | string
    caracteristicId?: StringNullableFilter<"Rental"> | string | null
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    updatedAt?: DateTimeFilter<"Rental"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    caracteristic?: XOR<CaracteristicNullableScalarRelationFilter, CaracteristicWhereInput> | null
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    picture?: PictureListRelationFilter
  }

  export type RentalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    adressId?: SortOrder
    caracteristicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    caracteristic?: CaracteristicOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    picture?: PictureOrderByRelationAggregateInput
  }

  export type RentalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    adressId?: string
    caracteristicId?: string
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    title?: StringFilter<"Rental"> | string
    nb_person?: IntFilter<"Rental"> | number
    price?: FloatFilter<"Rental"> | number
    available_date?: DateTimeFilter<"Rental"> | Date | string
    type?: EnumTypesFilter<"Rental"> | $Enums.Types
    userId?: StringFilter<"Rental"> | string
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    updatedAt?: DateTimeFilter<"Rental"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    caracteristic?: XOR<CaracteristicNullableScalarRelationFilter, CaracteristicWhereInput> | null
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    picture?: PictureListRelationFilter
  }, "id" | "adressId" | "caracteristicId">

  export type RentalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    adressId?: SortOrder
    caracteristicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalCountOrderByAggregateInput
    _avg?: RentalAvgOrderByAggregateInput
    _max?: RentalMaxOrderByAggregateInput
    _min?: RentalMinOrderByAggregateInput
    _sum?: RentalSumOrderByAggregateInput
  }

  export type RentalScalarWhereWithAggregatesInput = {
    AND?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    OR?: RentalScalarWhereWithAggregatesInput[]
    NOT?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rental"> | string
    title?: StringWithAggregatesFilter<"Rental"> | string
    nb_person?: IntWithAggregatesFilter<"Rental"> | number
    price?: FloatWithAggregatesFilter<"Rental"> | number
    available_date?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    type?: EnumTypesWithAggregatesFilter<"Rental"> | $Enums.Types
    userId?: StringWithAggregatesFilter<"Rental"> | string
    adressId?: StringWithAggregatesFilter<"Rental"> | string
    caracteristicId?: StringNullableWithAggregatesFilter<"Rental"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    zip_code?: StringFilter<"Address"> | string
    rental?: RentalListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
    rental?: RentalOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    zip_code?: StringFilter<"Address"> | string
    rental?: RentalListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    zip_code?: StringWithAggregatesFilter<"Address"> | string
  }

  export type CaracteristicWhereInput = {
    AND?: CaracteristicWhereInput | CaracteristicWhereInput[]
    OR?: CaracteristicWhereInput[]
    NOT?: CaracteristicWhereInput | CaracteristicWhereInput[]
    id?: StringFilter<"Caracteristic"> | string
    nb_bedroom?: IntNullableFilter<"Caracteristic"> | number | null
    nb_bathroom?: IntFilter<"Caracteristic"> | number
    description?: StringFilter<"Caracteristic"> | string
    rental?: RentalListRelationFilter
  }

  export type CaracteristicOrderByWithRelationInput = {
    id?: SortOrder
    nb_bedroom?: SortOrderInput | SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
    rental?: RentalOrderByRelationAggregateInput
  }

  export type CaracteristicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaracteristicWhereInput | CaracteristicWhereInput[]
    OR?: CaracteristicWhereInput[]
    NOT?: CaracteristicWhereInput | CaracteristicWhereInput[]
    nb_bedroom?: IntNullableFilter<"Caracteristic"> | number | null
    nb_bathroom?: IntFilter<"Caracteristic"> | number
    description?: StringFilter<"Caracteristic"> | string
    rental?: RentalListRelationFilter
  }, "id">

  export type CaracteristicOrderByWithAggregationInput = {
    id?: SortOrder
    nb_bedroom?: SortOrderInput | SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
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
    id?: StringWithAggregatesFilter<"Caracteristic"> | string
    nb_bedroom?: IntNullableWithAggregatesFilter<"Caracteristic"> | number | null
    nb_bathroom?: IntWithAggregatesFilter<"Caracteristic"> | number
    description?: StringWithAggregatesFilter<"Caracteristic"> | string
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: StringFilter<"Picture"> | string
    url?: StringFilter<"Picture"> | string
    rentalId?: StringFilter<"Picture"> | string
    rental?: XOR<RentalScalarRelationFilter, RentalWhereInput>
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    rentalId?: SortOrder
    rental?: RentalOrderByWithRelationInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    url?: StringFilter<"Picture"> | string
    rentalId?: StringFilter<"Picture"> | string
    rental?: XOR<RentalScalarRelationFilter, RentalWhereInput>
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    rentalId?: SortOrder
    _count?: PictureCountOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Picture"> | string
    url?: StringWithAggregatesFilter<"Picture"> | string
    rentalId?: StringWithAggregatesFilter<"Picture"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    about_me?: StringNullableFilter<"User"> | string | null
    phone_number?: StringFilter<"User"> | string
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Rental?: RentalListRelationFilter
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
    Rental?: RentalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    about_me?: StringNullableFilter<"User"> | string | null
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Rental?: RentalListRelationFilter
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
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    about_me?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_number?: StringWithAggregatesFilter<"User"> | string
    user_type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RentalCreateInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalInput
    caracteristic?: CaracteristicCreateNestedOneWithoutRentalInput
    address: AddressCreateNestedOneWithoutRentalInput
    picture?: PictureCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    userId: string
    adressId: string
    caracteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    picture?: PictureUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalNestedInput
    caracteristic?: CaracteristicUpdateOneWithoutRentalNestedInput
    address?: AddressUpdateOneRequiredWithoutRentalNestedInput
    picture?: PictureUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    userId?: StringFieldUpdateOperationsInput | string
    adressId?: StringFieldUpdateOperationsInput | string
    caracteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    picture?: PictureUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalCreateManyInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    userId: string
    adressId: string
    caracteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    userId?: StringFieldUpdateOperationsInput | string
    adressId?: StringFieldUpdateOperationsInput | string
    caracteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    city: string
    country: string
    street: string
    zip_code: string
    rental?: RentalCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    city: string
    country: string
    street: string
    zip_code: string
    rental?: RentalUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    rental?: RentalUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    rental?: RentalUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    city: string
    country: string
    street: string
    zip_code: string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type CaracteristicCreateInput = {
    id?: string
    nb_bedroom?: number | null
    nb_bathroom: number
    description: string
    rental?: RentalCreateNestedManyWithoutCaracteristicInput
  }

  export type CaracteristicUncheckedCreateInput = {
    id?: string
    nb_bedroom?: number | null
    nb_bathroom: number
    description: string
    rental?: RentalUncheckedCreateNestedManyWithoutCaracteristicInput
  }

  export type CaracteristicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nb_bedroom?: NullableIntFieldUpdateOperationsInput | number | null
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rental?: RentalUpdateManyWithoutCaracteristicNestedInput
  }

  export type CaracteristicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nb_bedroom?: NullableIntFieldUpdateOperationsInput | number | null
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    rental?: RentalUncheckedUpdateManyWithoutCaracteristicNestedInput
  }

  export type CaracteristicCreateManyInput = {
    id?: string
    nb_bedroom?: number | null
    nb_bathroom: number
    description: string
  }

  export type CaracteristicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nb_bedroom?: NullableIntFieldUpdateOperationsInput | number | null
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CaracteristicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nb_bedroom?: NullableIntFieldUpdateOperationsInput | number | null
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateInput = {
    id?: string
    url: string
    rental: RentalCreateNestedOneWithoutPictureInput
  }

  export type PictureUncheckedCreateInput = {
    id?: string
    url: string
    rentalId: string
  }

  export type PictureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rental?: RentalUpdateOneRequiredWithoutPictureNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rentalId?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateManyInput = {
    id?: string
    url: string
    rentalId: string
  }

  export type PictureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    rentalId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    Rental?: RentalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    Rental?: RentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rental?: RentalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rental?: RentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesFilter<$PrismaModel> | $Enums.Types
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CaracteristicNullableScalarRelationFilter = {
    is?: CaracteristicWhereInput | null
    isNot?: CaracteristicWhereInput | null
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    adressId?: SortOrder
    caracteristicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalAvgOrderByAggregateInput = {
    nb_person?: SortOrder
    price?: SortOrder
  }

  export type RentalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    adressId?: SortOrder
    caracteristicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    nb_person?: SortOrder
    price?: SortOrder
    available_date?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    adressId?: SortOrder
    caracteristicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSumOrderByAggregateInput = {
    nb_person?: SortOrder
    price?: SortOrder
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

  export type EnumTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesWithAggregatesFilter<$PrismaModel> | $Enums.Types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesFilter<$PrismaModel>
    _max?: NestedEnumTypesFilter<$PrismaModel>
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

  export type RentalListRelationFilter = {
    every?: RentalWhereInput
    some?: RentalWhereInput
    none?: RentalWhereInput
  }

  export type RentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    country?: SortOrder
    street?: SortOrder
    zip_code?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CaracteristicCountOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
  }

  export type CaracteristicAvgOrderByAggregateInput = {
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
  }

  export type CaracteristicMaxOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
  }

  export type CaracteristicMinOrderByAggregateInput = {
    id?: SortOrder
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
    description?: SortOrder
  }

  export type CaracteristicSumOrderByAggregateInput = {
    nb_bedroom?: SortOrder
    nb_bathroom?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RentalScalarRelationFilter = {
    is?: RentalWhereInput
    isNot?: RentalWhereInput
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    rentalId?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    rentalId?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    rentalId?: SortOrder
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutRentalInput = {
    create?: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalInput
    connect?: UserWhereUniqueInput
  }

  export type CaracteristicCreateNestedOneWithoutRentalInput = {
    create?: XOR<CaracteristicCreateWithoutRentalInput, CaracteristicUncheckedCreateWithoutRentalInput>
    connectOrCreate?: CaracteristicCreateOrConnectWithoutRentalInput
    connect?: CaracteristicWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutRentalInput = {
    create?: XOR<AddressCreateWithoutRentalInput, AddressUncheckedCreateWithoutRentalInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRentalInput
    connect?: AddressWhereUniqueInput
  }

  export type PictureCreateNestedManyWithoutRentalInput = {
    create?: XOR<PictureCreateWithoutRentalInput, PictureUncheckedCreateWithoutRentalInput> | PictureCreateWithoutRentalInput[] | PictureUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutRentalInput | PictureCreateOrConnectWithoutRentalInput[]
    createMany?: PictureCreateManyRentalInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type PictureUncheckedCreateNestedManyWithoutRentalInput = {
    create?: XOR<PictureCreateWithoutRentalInput, PictureUncheckedCreateWithoutRentalInput> | PictureCreateWithoutRentalInput[] | PictureUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutRentalInput | PictureCreateOrConnectWithoutRentalInput[]
    createMany?: PictureCreateManyRentalInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type EnumTypesFieldUpdateOperationsInput = {
    set?: $Enums.Types
  }

  export type UserUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalInput
    upsert?: UserUpsertWithoutRentalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalInput, UserUpdateWithoutRentalInput>, UserUncheckedUpdateWithoutRentalInput>
  }

  export type CaracteristicUpdateOneWithoutRentalNestedInput = {
    create?: XOR<CaracteristicCreateWithoutRentalInput, CaracteristicUncheckedCreateWithoutRentalInput>
    connectOrCreate?: CaracteristicCreateOrConnectWithoutRentalInput
    upsert?: CaracteristicUpsertWithoutRentalInput
    disconnect?: CaracteristicWhereInput | boolean
    delete?: CaracteristicWhereInput | boolean
    connect?: CaracteristicWhereUniqueInput
    update?: XOR<XOR<CaracteristicUpdateToOneWithWhereWithoutRentalInput, CaracteristicUpdateWithoutRentalInput>, CaracteristicUncheckedUpdateWithoutRentalInput>
  }

  export type AddressUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<AddressCreateWithoutRentalInput, AddressUncheckedCreateWithoutRentalInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRentalInput
    upsert?: AddressUpsertWithoutRentalInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutRentalInput, AddressUpdateWithoutRentalInput>, AddressUncheckedUpdateWithoutRentalInput>
  }

  export type PictureUpdateManyWithoutRentalNestedInput = {
    create?: XOR<PictureCreateWithoutRentalInput, PictureUncheckedCreateWithoutRentalInput> | PictureCreateWithoutRentalInput[] | PictureUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutRentalInput | PictureCreateOrConnectWithoutRentalInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutRentalInput | PictureUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: PictureCreateManyRentalInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutRentalInput | PictureUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutRentalInput | PictureUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PictureUncheckedUpdateManyWithoutRentalNestedInput = {
    create?: XOR<PictureCreateWithoutRentalInput, PictureUncheckedCreateWithoutRentalInput> | PictureCreateWithoutRentalInput[] | PictureUncheckedCreateWithoutRentalInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutRentalInput | PictureCreateOrConnectWithoutRentalInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutRentalInput | PictureUpsertWithWhereUniqueWithoutRentalInput[]
    createMany?: PictureCreateManyRentalInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutRentalInput | PictureUpdateWithWhereUniqueWithoutRentalInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutRentalInput | PictureUpdateManyWithWhereWithoutRentalInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type RentalCreateNestedManyWithoutAddressInput = {
    create?: XOR<RentalCreateWithoutAddressInput, RentalUncheckedCreateWithoutAddressInput> | RentalCreateWithoutAddressInput[] | RentalUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutAddressInput | RentalCreateOrConnectWithoutAddressInput[]
    createMany?: RentalCreateManyAddressInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<RentalCreateWithoutAddressInput, RentalUncheckedCreateWithoutAddressInput> | RentalCreateWithoutAddressInput[] | RentalUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutAddressInput | RentalCreateOrConnectWithoutAddressInput[]
    createMany?: RentalCreateManyAddressInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUpdateManyWithoutAddressNestedInput = {
    create?: XOR<RentalCreateWithoutAddressInput, RentalUncheckedCreateWithoutAddressInput> | RentalCreateWithoutAddressInput[] | RentalUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutAddressInput | RentalCreateOrConnectWithoutAddressInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutAddressInput | RentalUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: RentalCreateManyAddressInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutAddressInput | RentalUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutAddressInput | RentalUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<RentalCreateWithoutAddressInput, RentalUncheckedCreateWithoutAddressInput> | RentalCreateWithoutAddressInput[] | RentalUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutAddressInput | RentalCreateOrConnectWithoutAddressInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutAddressInput | RentalUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: RentalCreateManyAddressInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutAddressInput | RentalUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutAddressInput | RentalUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalCreateNestedManyWithoutCaracteristicInput = {
    create?: XOR<RentalCreateWithoutCaracteristicInput, RentalUncheckedCreateWithoutCaracteristicInput> | RentalCreateWithoutCaracteristicInput[] | RentalUncheckedCreateWithoutCaracteristicInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCaracteristicInput | RentalCreateOrConnectWithoutCaracteristicInput[]
    createMany?: RentalCreateManyCaracteristicInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutCaracteristicInput = {
    create?: XOR<RentalCreateWithoutCaracteristicInput, RentalUncheckedCreateWithoutCaracteristicInput> | RentalCreateWithoutCaracteristicInput[] | RentalUncheckedCreateWithoutCaracteristicInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCaracteristicInput | RentalCreateOrConnectWithoutCaracteristicInput[]
    createMany?: RentalCreateManyCaracteristicInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RentalUpdateManyWithoutCaracteristicNestedInput = {
    create?: XOR<RentalCreateWithoutCaracteristicInput, RentalUncheckedCreateWithoutCaracteristicInput> | RentalCreateWithoutCaracteristicInput[] | RentalUncheckedCreateWithoutCaracteristicInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCaracteristicInput | RentalCreateOrConnectWithoutCaracteristicInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutCaracteristicInput | RentalUpsertWithWhereUniqueWithoutCaracteristicInput[]
    createMany?: RentalCreateManyCaracteristicInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutCaracteristicInput | RentalUpdateWithWhereUniqueWithoutCaracteristicInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutCaracteristicInput | RentalUpdateManyWithWhereWithoutCaracteristicInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutCaracteristicNestedInput = {
    create?: XOR<RentalCreateWithoutCaracteristicInput, RentalUncheckedCreateWithoutCaracteristicInput> | RentalCreateWithoutCaracteristicInput[] | RentalUncheckedCreateWithoutCaracteristicInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutCaracteristicInput | RentalCreateOrConnectWithoutCaracteristicInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutCaracteristicInput | RentalUpsertWithWhereUniqueWithoutCaracteristicInput[]
    createMany?: RentalCreateManyCaracteristicInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutCaracteristicInput | RentalUpdateWithWhereUniqueWithoutCaracteristicInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutCaracteristicInput | RentalUpdateManyWithWhereWithoutCaracteristicInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalCreateNestedOneWithoutPictureInput = {
    create?: XOR<RentalCreateWithoutPictureInput, RentalUncheckedCreateWithoutPictureInput>
    connectOrCreate?: RentalCreateOrConnectWithoutPictureInput
    connect?: RentalWhereUniqueInput
  }

  export type RentalUpdateOneRequiredWithoutPictureNestedInput = {
    create?: XOR<RentalCreateWithoutPictureInput, RentalUncheckedCreateWithoutPictureInput>
    connectOrCreate?: RentalCreateOrConnectWithoutPictureInput
    upsert?: RentalUpsertWithoutPictureInput
    connect?: RentalWhereUniqueInput
    update?: XOR<XOR<RentalUpdateToOneWithWhereWithoutPictureInput, RentalUpdateWithoutPictureInput>, RentalUncheckedUpdateWithoutPictureInput>
  }

  export type RentalCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type RentalUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
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

  export type NestedEnumTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesFilter<$PrismaModel> | $Enums.Types
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

  export type NestedEnumTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Types | EnumTypesFieldRefInput<$PrismaModel>
    in?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Types[] | ListEnumTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumTypesWithAggregatesFilter<$PrismaModel> | $Enums.Types
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesFilter<$PrismaModel>
    _max?: NestedEnumTypesFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutRentalInput = {
    id?: string
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRentalInput = {
    id?: string
    email: string
    name: string
    password: string
    about_me?: string | null
    phone_number: string
    user_type?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRentalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
  }

  export type CaracteristicCreateWithoutRentalInput = {
    id?: string
    nb_bedroom?: number | null
    nb_bathroom: number
    description: string
  }

  export type CaracteristicUncheckedCreateWithoutRentalInput = {
    id?: string
    nb_bedroom?: number | null
    nb_bathroom: number
    description: string
  }

  export type CaracteristicCreateOrConnectWithoutRentalInput = {
    where: CaracteristicWhereUniqueInput
    create: XOR<CaracteristicCreateWithoutRentalInput, CaracteristicUncheckedCreateWithoutRentalInput>
  }

  export type AddressCreateWithoutRentalInput = {
    id?: string
    city: string
    country: string
    street: string
    zip_code: string
  }

  export type AddressUncheckedCreateWithoutRentalInput = {
    id?: string
    city: string
    country: string
    street: string
    zip_code: string
  }

  export type AddressCreateOrConnectWithoutRentalInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutRentalInput, AddressUncheckedCreateWithoutRentalInput>
  }

  export type PictureCreateWithoutRentalInput = {
    id?: string
    url: string
  }

  export type PictureUncheckedCreateWithoutRentalInput = {
    id?: string
    url: string
  }

  export type PictureCreateOrConnectWithoutRentalInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutRentalInput, PictureUncheckedCreateWithoutRentalInput>
  }

  export type PictureCreateManyRentalInputEnvelope = {
    data: PictureCreateManyRentalInput | PictureCreateManyRentalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRentalInput = {
    update: XOR<UserUpdateWithoutRentalInput, UserUncheckedUpdateWithoutRentalInput>
    create: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalInput, UserUncheckedUpdateWithoutRentalInput>
  }

  export type UserUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    about_me?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaracteristicUpsertWithoutRentalInput = {
    update: XOR<CaracteristicUpdateWithoutRentalInput, CaracteristicUncheckedUpdateWithoutRentalInput>
    create: XOR<CaracteristicCreateWithoutRentalInput, CaracteristicUncheckedCreateWithoutRentalInput>
    where?: CaracteristicWhereInput
  }

  export type CaracteristicUpdateToOneWithWhereWithoutRentalInput = {
    where?: CaracteristicWhereInput
    data: XOR<CaracteristicUpdateWithoutRentalInput, CaracteristicUncheckedUpdateWithoutRentalInput>
  }

  export type CaracteristicUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nb_bedroom?: NullableIntFieldUpdateOperationsInput | number | null
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CaracteristicUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nb_bedroom?: NullableIntFieldUpdateOperationsInput | number | null
    nb_bathroom?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUpsertWithoutRentalInput = {
    update: XOR<AddressUpdateWithoutRentalInput, AddressUncheckedUpdateWithoutRentalInput>
    create: XOR<AddressCreateWithoutRentalInput, AddressUncheckedCreateWithoutRentalInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutRentalInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutRentalInput, AddressUncheckedUpdateWithoutRentalInput>
  }

  export type AddressUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUpsertWithWhereUniqueWithoutRentalInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutRentalInput, PictureUncheckedUpdateWithoutRentalInput>
    create: XOR<PictureCreateWithoutRentalInput, PictureUncheckedCreateWithoutRentalInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutRentalInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutRentalInput, PictureUncheckedUpdateWithoutRentalInput>
  }

  export type PictureUpdateManyWithWhereWithoutRentalInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutRentalInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: StringFilter<"Picture"> | string
    url?: StringFilter<"Picture"> | string
    rentalId?: StringFilter<"Picture"> | string
  }

  export type RentalCreateWithoutAddressInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalInput
    caracteristic?: CaracteristicCreateNestedOneWithoutRentalInput
    picture?: PictureCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutAddressInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    userId: string
    caracteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    picture?: PictureUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutAddressInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutAddressInput, RentalUncheckedCreateWithoutAddressInput>
  }

  export type RentalCreateManyAddressInputEnvelope = {
    data: RentalCreateManyAddressInput | RentalCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutAddressInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutAddressInput, RentalUncheckedUpdateWithoutAddressInput>
    create: XOR<RentalCreateWithoutAddressInput, RentalUncheckedCreateWithoutAddressInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutAddressInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutAddressInput, RentalUncheckedUpdateWithoutAddressInput>
  }

  export type RentalUpdateManyWithWhereWithoutAddressInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutAddressInput>
  }

  export type RentalScalarWhereInput = {
    AND?: RentalScalarWhereInput | RentalScalarWhereInput[]
    OR?: RentalScalarWhereInput[]
    NOT?: RentalScalarWhereInput | RentalScalarWhereInput[]
    id?: StringFilter<"Rental"> | string
    title?: StringFilter<"Rental"> | string
    nb_person?: IntFilter<"Rental"> | number
    price?: FloatFilter<"Rental"> | number
    available_date?: DateTimeFilter<"Rental"> | Date | string
    type?: EnumTypesFilter<"Rental"> | $Enums.Types
    userId?: StringFilter<"Rental"> | string
    adressId?: StringFilter<"Rental"> | string
    caracteristicId?: StringNullableFilter<"Rental"> | string | null
    createdAt?: DateTimeFilter<"Rental"> | Date | string
    updatedAt?: DateTimeFilter<"Rental"> | Date | string
  }

  export type RentalCreateWithoutCaracteristicInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalInput
    address: AddressCreateNestedOneWithoutRentalInput
    picture?: PictureCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutCaracteristicInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    userId: string
    adressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    picture?: PictureUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutCaracteristicInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutCaracteristicInput, RentalUncheckedCreateWithoutCaracteristicInput>
  }

  export type RentalCreateManyCaracteristicInputEnvelope = {
    data: RentalCreateManyCaracteristicInput | RentalCreateManyCaracteristicInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutCaracteristicInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutCaracteristicInput, RentalUncheckedUpdateWithoutCaracteristicInput>
    create: XOR<RentalCreateWithoutCaracteristicInput, RentalUncheckedCreateWithoutCaracteristicInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutCaracteristicInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutCaracteristicInput, RentalUncheckedUpdateWithoutCaracteristicInput>
  }

  export type RentalUpdateManyWithWhereWithoutCaracteristicInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutCaracteristicInput>
  }

  export type RentalCreateWithoutPictureInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalInput
    caracteristic?: CaracteristicCreateNestedOneWithoutRentalInput
    address: AddressCreateNestedOneWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutPictureInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    userId: string
    adressId: string
    caracteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalCreateOrConnectWithoutPictureInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutPictureInput, RentalUncheckedCreateWithoutPictureInput>
  }

  export type RentalUpsertWithoutPictureInput = {
    update: XOR<RentalUpdateWithoutPictureInput, RentalUncheckedUpdateWithoutPictureInput>
    create: XOR<RentalCreateWithoutPictureInput, RentalUncheckedCreateWithoutPictureInput>
    where?: RentalWhereInput
  }

  export type RentalUpdateToOneWithWhereWithoutPictureInput = {
    where?: RentalWhereInput
    data: XOR<RentalUpdateWithoutPictureInput, RentalUncheckedUpdateWithoutPictureInput>
  }

  export type RentalUpdateWithoutPictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalNestedInput
    caracteristic?: CaracteristicUpdateOneWithoutRentalNestedInput
    address?: AddressUpdateOneRequiredWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutPictureInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    userId?: StringFieldUpdateOperationsInput | string
    adressId?: StringFieldUpdateOperationsInput | string
    caracteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateWithoutUserInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    createdAt?: Date | string
    updatedAt?: Date | string
    caracteristic?: CaracteristicCreateNestedOneWithoutRentalInput
    address: AddressCreateNestedOneWithoutRentalInput
    picture?: PictureCreateNestedManyWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    adressId: string
    caracteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    picture?: PictureUncheckedCreateNestedManyWithoutRentalInput
  }

  export type RentalCreateOrConnectWithoutUserInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalCreateManyUserInputEnvelope = {
    data: RentalCreateManyUserInput | RentalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
  }

  export type RentalUpdateManyWithWhereWithoutUserInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutUserInput>
  }

  export type PictureCreateManyRentalInput = {
    id?: string
    url: string
  }

  export type PictureUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PictureUncheckedUpdateManyWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type RentalCreateManyAddressInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    userId: string
    caracteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalNestedInput
    caracteristic?: CaracteristicUpdateOneWithoutRentalNestedInput
    picture?: PictureUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    userId?: StringFieldUpdateOperationsInput | string
    caracteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    picture?: PictureUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    userId?: StringFieldUpdateOperationsInput | string
    caracteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyCaracteristicInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    userId: string
    adressId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateWithoutCaracteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalNestedInput
    address?: AddressUpdateOneRequiredWithoutRentalNestedInput
    picture?: PictureUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutCaracteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    userId?: StringFieldUpdateOperationsInput | string
    adressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    picture?: PictureUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateManyWithoutCaracteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    userId?: StringFieldUpdateOperationsInput | string
    adressId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyUserInput = {
    id?: string
    title: string
    nb_person: number
    price: number
    available_date: Date | string
    type: $Enums.Types
    adressId: string
    caracteristicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caracteristic?: CaracteristicUpdateOneWithoutRentalNestedInput
    address?: AddressUpdateOneRequiredWithoutRentalNestedInput
    picture?: PictureUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    adressId?: StringFieldUpdateOperationsInput | string
    caracteristicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    picture?: PictureUncheckedUpdateManyWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    nb_person?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypesFieldUpdateOperationsInput | $Enums.Types
    adressId?: StringFieldUpdateOperationsInput | string
    caracteristicId?: NullableStringFieldUpdateOperationsInput | string | null
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