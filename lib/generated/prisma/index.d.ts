
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
 * Model addNomination
 * 
 */
export type addNomination = $Result.DefaultSelection<Prisma.$addNominationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AddNominations
 * const addNominations = await prisma.addNomination.findMany()
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
   * // Fetch zero or more AddNominations
   * const addNominations = await prisma.addNomination.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.addNomination`: Exposes CRUD operations for the **addNomination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddNominations
    * const addNominations = await prisma.addNomination.findMany()
    * ```
    */
  get addNomination(): Prisma.addNominationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    addNomination: 'addNomination'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "addNomination"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      addNomination: {
        payload: Prisma.$addNominationPayload<ExtArgs>
        fields: Prisma.addNominationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addNominationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addNominationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>
          }
          findFirst: {
            args: Prisma.addNominationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addNominationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>
          }
          findMany: {
            args: Prisma.addNominationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>[]
          }
          create: {
            args: Prisma.addNominationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>
          }
          createMany: {
            args: Prisma.addNominationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addNominationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>[]
          }
          delete: {
            args: Prisma.addNominationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>
          }
          update: {
            args: Prisma.addNominationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>
          }
          deleteMany: {
            args: Prisma.addNominationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addNominationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addNominationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>[]
          }
          upsert: {
            args: Prisma.addNominationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addNominationPayload>
          }
          aggregate: {
            args: Prisma.AddNominationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddNomination>
          }
          groupBy: {
            args: Prisma.addNominationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddNominationGroupByOutputType>[]
          }
          count: {
            args: Prisma.addNominationCountArgs<ExtArgs>
            result: $Utils.Optional<AddNominationCountAggregateOutputType> | number
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
    addNomination?: addNominationOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model addNomination
   */

  export type AggregateAddNomination = {
    _count: AddNominationCountAggregateOutputType | null
    _avg: AddNominationAvgAggregateOutputType | null
    _sum: AddNominationSumAggregateOutputType | null
    _min: AddNominationMinAggregateOutputType | null
    _max: AddNominationMaxAggregateOutputType | null
  }

  export type AddNominationAvgAggregateOutputType = {
    id: number | null
  }

  export type AddNominationSumAggregateOutputType = {
    id: number | null
  }

  export type AddNominationMinAggregateOutputType = {
    id: number | null
    nominee: string | null
    category: string | null
    quantity: string | null
  }

  export type AddNominationMaxAggregateOutputType = {
    id: number | null
    nominee: string | null
    category: string | null
    quantity: string | null
  }

  export type AddNominationCountAggregateOutputType = {
    id: number
    nominee: number
    category: number
    quantity: number
    _all: number
  }


  export type AddNominationAvgAggregateInputType = {
    id?: true
  }

  export type AddNominationSumAggregateInputType = {
    id?: true
  }

  export type AddNominationMinAggregateInputType = {
    id?: true
    nominee?: true
    category?: true
    quantity?: true
  }

  export type AddNominationMaxAggregateInputType = {
    id?: true
    nominee?: true
    category?: true
    quantity?: true
  }

  export type AddNominationCountAggregateInputType = {
    id?: true
    nominee?: true
    category?: true
    quantity?: true
    _all?: true
  }

  export type AddNominationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addNomination to aggregate.
     */
    where?: addNominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addNominations to fetch.
     */
    orderBy?: addNominationOrderByWithRelationInput | addNominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addNominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addNominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addNominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addNominations
    **/
    _count?: true | AddNominationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddNominationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddNominationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddNominationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddNominationMaxAggregateInputType
  }

  export type GetAddNominationAggregateType<T extends AddNominationAggregateArgs> = {
        [P in keyof T & keyof AggregateAddNomination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddNomination[P]>
      : GetScalarType<T[P], AggregateAddNomination[P]>
  }




  export type addNominationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addNominationWhereInput
    orderBy?: addNominationOrderByWithAggregationInput | addNominationOrderByWithAggregationInput[]
    by: AddNominationScalarFieldEnum[] | AddNominationScalarFieldEnum
    having?: addNominationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddNominationCountAggregateInputType | true
    _avg?: AddNominationAvgAggregateInputType
    _sum?: AddNominationSumAggregateInputType
    _min?: AddNominationMinAggregateInputType
    _max?: AddNominationMaxAggregateInputType
  }

  export type AddNominationGroupByOutputType = {
    id: number
    nominee: string
    category: string
    quantity: string
    _count: AddNominationCountAggregateOutputType | null
    _avg: AddNominationAvgAggregateOutputType | null
    _sum: AddNominationSumAggregateOutputType | null
    _min: AddNominationMinAggregateOutputType | null
    _max: AddNominationMaxAggregateOutputType | null
  }

  type GetAddNominationGroupByPayload<T extends addNominationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddNominationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddNominationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddNominationGroupByOutputType[P]>
            : GetScalarType<T[P], AddNominationGroupByOutputType[P]>
        }
      >
    >


  export type addNominationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nominee?: boolean
    category?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["addNomination"]>

  export type addNominationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nominee?: boolean
    category?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["addNomination"]>

  export type addNominationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nominee?: boolean
    category?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["addNomination"]>

  export type addNominationSelectScalar = {
    id?: boolean
    nominee?: boolean
    category?: boolean
    quantity?: boolean
  }

  export type addNominationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nominee" | "category" | "quantity", ExtArgs["result"]["addNomination"]>

  export type $addNominationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addNomination"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nominee: string
      category: string
      quantity: string
    }, ExtArgs["result"]["addNomination"]>
    composites: {}
  }

  type addNominationGetPayload<S extends boolean | null | undefined | addNominationDefaultArgs> = $Result.GetResult<Prisma.$addNominationPayload, S>

  type addNominationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addNominationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddNominationCountAggregateInputType | true
    }

  export interface addNominationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addNomination'], meta: { name: 'addNomination' } }
    /**
     * Find zero or one AddNomination that matches the filter.
     * @param {addNominationFindUniqueArgs} args - Arguments to find a AddNomination
     * @example
     * // Get one AddNomination
     * const addNomination = await prisma.addNomination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addNominationFindUniqueArgs>(args: SelectSubset<T, addNominationFindUniqueArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddNomination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addNominationFindUniqueOrThrowArgs} args - Arguments to find a AddNomination
     * @example
     * // Get one AddNomination
     * const addNomination = await prisma.addNomination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addNominationFindUniqueOrThrowArgs>(args: SelectSubset<T, addNominationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddNomination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addNominationFindFirstArgs} args - Arguments to find a AddNomination
     * @example
     * // Get one AddNomination
     * const addNomination = await prisma.addNomination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addNominationFindFirstArgs>(args?: SelectSubset<T, addNominationFindFirstArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddNomination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addNominationFindFirstOrThrowArgs} args - Arguments to find a AddNomination
     * @example
     * // Get one AddNomination
     * const addNomination = await prisma.addNomination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addNominationFindFirstOrThrowArgs>(args?: SelectSubset<T, addNominationFindFirstOrThrowArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddNominations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addNominationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddNominations
     * const addNominations = await prisma.addNomination.findMany()
     * 
     * // Get first 10 AddNominations
     * const addNominations = await prisma.addNomination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addNominationWithIdOnly = await prisma.addNomination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addNominationFindManyArgs>(args?: SelectSubset<T, addNominationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddNomination.
     * @param {addNominationCreateArgs} args - Arguments to create a AddNomination.
     * @example
     * // Create one AddNomination
     * const AddNomination = await prisma.addNomination.create({
     *   data: {
     *     // ... data to create a AddNomination
     *   }
     * })
     * 
     */
    create<T extends addNominationCreateArgs>(args: SelectSubset<T, addNominationCreateArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddNominations.
     * @param {addNominationCreateManyArgs} args - Arguments to create many AddNominations.
     * @example
     * // Create many AddNominations
     * const addNomination = await prisma.addNomination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addNominationCreateManyArgs>(args?: SelectSubset<T, addNominationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AddNominations and returns the data saved in the database.
     * @param {addNominationCreateManyAndReturnArgs} args - Arguments to create many AddNominations.
     * @example
     * // Create many AddNominations
     * const addNomination = await prisma.addNomination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AddNominations and only return the `id`
     * const addNominationWithIdOnly = await prisma.addNomination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addNominationCreateManyAndReturnArgs>(args?: SelectSubset<T, addNominationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AddNomination.
     * @param {addNominationDeleteArgs} args - Arguments to delete one AddNomination.
     * @example
     * // Delete one AddNomination
     * const AddNomination = await prisma.addNomination.delete({
     *   where: {
     *     // ... filter to delete one AddNomination
     *   }
     * })
     * 
     */
    delete<T extends addNominationDeleteArgs>(args: SelectSubset<T, addNominationDeleteArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddNomination.
     * @param {addNominationUpdateArgs} args - Arguments to update one AddNomination.
     * @example
     * // Update one AddNomination
     * const addNomination = await prisma.addNomination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addNominationUpdateArgs>(args: SelectSubset<T, addNominationUpdateArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddNominations.
     * @param {addNominationDeleteManyArgs} args - Arguments to filter AddNominations to delete.
     * @example
     * // Delete a few AddNominations
     * const { count } = await prisma.addNomination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addNominationDeleteManyArgs>(args?: SelectSubset<T, addNominationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddNominations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addNominationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddNominations
     * const addNomination = await prisma.addNomination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addNominationUpdateManyArgs>(args: SelectSubset<T, addNominationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddNominations and returns the data updated in the database.
     * @param {addNominationUpdateManyAndReturnArgs} args - Arguments to update many AddNominations.
     * @example
     * // Update many AddNominations
     * const addNomination = await prisma.addNomination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AddNominations and only return the `id`
     * const addNominationWithIdOnly = await prisma.addNomination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addNominationUpdateManyAndReturnArgs>(args: SelectSubset<T, addNominationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AddNomination.
     * @param {addNominationUpsertArgs} args - Arguments to update or create a AddNomination.
     * @example
     * // Update or create a AddNomination
     * const addNomination = await prisma.addNomination.upsert({
     *   create: {
     *     // ... data to create a AddNomination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddNomination we want to update
     *   }
     * })
     */
    upsert<T extends addNominationUpsertArgs>(args: SelectSubset<T, addNominationUpsertArgs<ExtArgs>>): Prisma__addNominationClient<$Result.GetResult<Prisma.$addNominationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddNominations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addNominationCountArgs} args - Arguments to filter AddNominations to count.
     * @example
     * // Count the number of AddNominations
     * const count = await prisma.addNomination.count({
     *   where: {
     *     // ... the filter for the AddNominations we want to count
     *   }
     * })
    **/
    count<T extends addNominationCountArgs>(
      args?: Subset<T, addNominationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddNominationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddNomination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddNominationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddNominationAggregateArgs>(args: Subset<T, AddNominationAggregateArgs>): Prisma.PrismaPromise<GetAddNominationAggregateType<T>>

    /**
     * Group by AddNomination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addNominationGroupByArgs} args - Group by arguments.
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
      T extends addNominationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addNominationGroupByArgs['orderBy'] }
        : { orderBy?: addNominationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, addNominationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddNominationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addNomination model
   */
  readonly fields: addNominationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addNomination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addNominationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the addNomination model
   */
  interface addNominationFieldRefs {
    readonly id: FieldRef<"addNomination", 'Int'>
    readonly nominee: FieldRef<"addNomination", 'String'>
    readonly category: FieldRef<"addNomination", 'String'>
    readonly quantity: FieldRef<"addNomination", 'String'>
  }
    

  // Custom InputTypes
  /**
   * addNomination findUnique
   */
  export type addNominationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * Filter, which addNomination to fetch.
     */
    where: addNominationWhereUniqueInput
  }

  /**
   * addNomination findUniqueOrThrow
   */
  export type addNominationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * Filter, which addNomination to fetch.
     */
    where: addNominationWhereUniqueInput
  }

  /**
   * addNomination findFirst
   */
  export type addNominationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * Filter, which addNomination to fetch.
     */
    where?: addNominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addNominations to fetch.
     */
    orderBy?: addNominationOrderByWithRelationInput | addNominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addNominations.
     */
    cursor?: addNominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addNominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addNominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addNominations.
     */
    distinct?: AddNominationScalarFieldEnum | AddNominationScalarFieldEnum[]
  }

  /**
   * addNomination findFirstOrThrow
   */
  export type addNominationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * Filter, which addNomination to fetch.
     */
    where?: addNominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addNominations to fetch.
     */
    orderBy?: addNominationOrderByWithRelationInput | addNominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addNominations.
     */
    cursor?: addNominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addNominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addNominations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addNominations.
     */
    distinct?: AddNominationScalarFieldEnum | AddNominationScalarFieldEnum[]
  }

  /**
   * addNomination findMany
   */
  export type addNominationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * Filter, which addNominations to fetch.
     */
    where?: addNominationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addNominations to fetch.
     */
    orderBy?: addNominationOrderByWithRelationInput | addNominationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addNominations.
     */
    cursor?: addNominationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addNominations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addNominations.
     */
    skip?: number
    distinct?: AddNominationScalarFieldEnum | AddNominationScalarFieldEnum[]
  }

  /**
   * addNomination create
   */
  export type addNominationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * The data needed to create a addNomination.
     */
    data: XOR<addNominationCreateInput, addNominationUncheckedCreateInput>
  }

  /**
   * addNomination createMany
   */
  export type addNominationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addNominations.
     */
    data: addNominationCreateManyInput | addNominationCreateManyInput[]
  }

  /**
   * addNomination createManyAndReturn
   */
  export type addNominationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * The data used to create many addNominations.
     */
    data: addNominationCreateManyInput | addNominationCreateManyInput[]
  }

  /**
   * addNomination update
   */
  export type addNominationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * The data needed to update a addNomination.
     */
    data: XOR<addNominationUpdateInput, addNominationUncheckedUpdateInput>
    /**
     * Choose, which addNomination to update.
     */
    where: addNominationWhereUniqueInput
  }

  /**
   * addNomination updateMany
   */
  export type addNominationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addNominations.
     */
    data: XOR<addNominationUpdateManyMutationInput, addNominationUncheckedUpdateManyInput>
    /**
     * Filter which addNominations to update
     */
    where?: addNominationWhereInput
    /**
     * Limit how many addNominations to update.
     */
    limit?: number
  }

  /**
   * addNomination updateManyAndReturn
   */
  export type addNominationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * The data used to update addNominations.
     */
    data: XOR<addNominationUpdateManyMutationInput, addNominationUncheckedUpdateManyInput>
    /**
     * Filter which addNominations to update
     */
    where?: addNominationWhereInput
    /**
     * Limit how many addNominations to update.
     */
    limit?: number
  }

  /**
   * addNomination upsert
   */
  export type addNominationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * The filter to search for the addNomination to update in case it exists.
     */
    where: addNominationWhereUniqueInput
    /**
     * In case the addNomination found by the `where` argument doesn't exist, create a new addNomination with this data.
     */
    create: XOR<addNominationCreateInput, addNominationUncheckedCreateInput>
    /**
     * In case the addNomination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addNominationUpdateInput, addNominationUncheckedUpdateInput>
  }

  /**
   * addNomination delete
   */
  export type addNominationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
    /**
     * Filter which addNomination to delete.
     */
    where: addNominationWhereUniqueInput
  }

  /**
   * addNomination deleteMany
   */
  export type addNominationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addNominations to delete
     */
    where?: addNominationWhereInput
    /**
     * Limit how many addNominations to delete.
     */
    limit?: number
  }

  /**
   * addNomination without action
   */
  export type addNominationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addNomination
     */
    select?: addNominationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addNomination
     */
    omit?: addNominationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddNominationScalarFieldEnum: {
    id: 'id',
    nominee: 'nominee',
    category: 'category',
    quantity: 'quantity'
  };

  export type AddNominationScalarFieldEnum = (typeof AddNominationScalarFieldEnum)[keyof typeof AddNominationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type addNominationWhereInput = {
    AND?: addNominationWhereInput | addNominationWhereInput[]
    OR?: addNominationWhereInput[]
    NOT?: addNominationWhereInput | addNominationWhereInput[]
    id?: IntFilter<"addNomination"> | number
    nominee?: StringFilter<"addNomination"> | string
    category?: StringFilter<"addNomination"> | string
    quantity?: StringFilter<"addNomination"> | string
  }

  export type addNominationOrderByWithRelationInput = {
    id?: SortOrder
    nominee?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
  }

  export type addNominationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addNominationWhereInput | addNominationWhereInput[]
    OR?: addNominationWhereInput[]
    NOT?: addNominationWhereInput | addNominationWhereInput[]
    nominee?: StringFilter<"addNomination"> | string
    category?: StringFilter<"addNomination"> | string
    quantity?: StringFilter<"addNomination"> | string
  }, "id">

  export type addNominationOrderByWithAggregationInput = {
    id?: SortOrder
    nominee?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    _count?: addNominationCountOrderByAggregateInput
    _avg?: addNominationAvgOrderByAggregateInput
    _max?: addNominationMaxOrderByAggregateInput
    _min?: addNominationMinOrderByAggregateInput
    _sum?: addNominationSumOrderByAggregateInput
  }

  export type addNominationScalarWhereWithAggregatesInput = {
    AND?: addNominationScalarWhereWithAggregatesInput | addNominationScalarWhereWithAggregatesInput[]
    OR?: addNominationScalarWhereWithAggregatesInput[]
    NOT?: addNominationScalarWhereWithAggregatesInput | addNominationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"addNomination"> | number
    nominee?: StringWithAggregatesFilter<"addNomination"> | string
    category?: StringWithAggregatesFilter<"addNomination"> | string
    quantity?: StringWithAggregatesFilter<"addNomination"> | string
  }

  export type addNominationCreateInput = {
    nominee: string
    category: string
    quantity: string
  }

  export type addNominationUncheckedCreateInput = {
    id?: number
    nominee: string
    category: string
    quantity: string
  }

  export type addNominationUpdateInput = {
    nominee?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type addNominationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nominee?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type addNominationCreateManyInput = {
    id?: number
    nominee: string
    category: string
    quantity: string
  }

  export type addNominationUpdateManyMutationInput = {
    nominee?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type addNominationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nominee?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type addNominationCountOrderByAggregateInput = {
    id?: SortOrder
    nominee?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
  }

  export type addNominationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type addNominationMaxOrderByAggregateInput = {
    id?: SortOrder
    nominee?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
  }

  export type addNominationMinOrderByAggregateInput = {
    id?: SortOrder
    nominee?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
  }

  export type addNominationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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