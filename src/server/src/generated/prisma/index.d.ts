
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Viaje
 * 
 */
export type Viaje = $Result.DefaultSelection<Prisma.$ViajePayload>
/**
 * Model MiembroViaje
 * 
 */
export type MiembroViaje = $Result.DefaultSelection<Prisma.$MiembroViajePayload>
/**
 * Model Tarea
 * 
 */
export type Tarea = $Result.DefaultSelection<Prisma.$TareaPayload>
/**
 * Model Gasto
 * 
 */
export type Gasto = $Result.DefaultSelection<Prisma.$GastoPayload>
/**
 * Model ChatMensaje
 * 
 */
export type ChatMensaje = $Result.DefaultSelection<Prisma.$ChatMensajePayload>
/**
 * Model ItinerarioEvento
 * 
 */
export type ItinerarioEvento = $Result.DefaultSelection<Prisma.$ItinerarioEventoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viaje`: Exposes CRUD operations for the **Viaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viajes
    * const viajes = await prisma.viaje.findMany()
    * ```
    */
  get viaje(): Prisma.ViajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.miembroViaje`: Exposes CRUD operations for the **MiembroViaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MiembroViajes
    * const miembroViajes = await prisma.miembroViaje.findMany()
    * ```
    */
  get miembroViaje(): Prisma.MiembroViajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarea`: Exposes CRUD operations for the **Tarea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tareas
    * const tareas = await prisma.tarea.findMany()
    * ```
    */
  get tarea(): Prisma.TareaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gasto`: Exposes CRUD operations for the **Gasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos
    * const gastos = await prisma.gasto.findMany()
    * ```
    */
  get gasto(): Prisma.GastoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMensaje`: Exposes CRUD operations for the **ChatMensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMensajes
    * const chatMensajes = await prisma.chatMensaje.findMany()
    * ```
    */
  get chatMensaje(): Prisma.ChatMensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itinerarioEvento`: Exposes CRUD operations for the **ItinerarioEvento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItinerarioEventos
    * const itinerarioEventos = await prisma.itinerarioEvento.findMany()
    * ```
    */
  get itinerarioEvento(): Prisma.ItinerarioEventoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Usuario: 'Usuario',
    Viaje: 'Viaje',
    MiembroViaje: 'MiembroViaje',
    Tarea: 'Tarea',
    Gasto: 'Gasto',
    ChatMensaje: 'ChatMensaje',
    ItinerarioEvento: 'ItinerarioEvento'
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
      modelProps: "usuario" | "viaje" | "miembroViaje" | "tarea" | "gasto" | "chatMensaje" | "itinerarioEvento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Viaje: {
        payload: Prisma.$ViajePayload<ExtArgs>
        fields: Prisma.ViajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findFirst: {
            args: Prisma.ViajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findMany: {
            args: Prisma.ViajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          create: {
            args: Prisma.ViajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          createMany: {
            args: Prisma.ViajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          delete: {
            args: Prisma.ViajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          update: {
            args: Prisma.ViajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          deleteMany: {
            args: Prisma.ViajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          upsert: {
            args: Prisma.ViajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          aggregate: {
            args: Prisma.ViajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViaje>
          }
          groupBy: {
            args: Prisma.ViajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViajeCountArgs<ExtArgs>
            result: $Utils.Optional<ViajeCountAggregateOutputType> | number
          }
        }
      }
      MiembroViaje: {
        payload: Prisma.$MiembroViajePayload<ExtArgs>
        fields: Prisma.MiembroViajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiembroViajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiembroViajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>
          }
          findFirst: {
            args: Prisma.MiembroViajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiembroViajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>
          }
          findMany: {
            args: Prisma.MiembroViajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>[]
          }
          create: {
            args: Prisma.MiembroViajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>
          }
          createMany: {
            args: Prisma.MiembroViajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MiembroViajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>[]
          }
          delete: {
            args: Prisma.MiembroViajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>
          }
          update: {
            args: Prisma.MiembroViajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>
          }
          deleteMany: {
            args: Prisma.MiembroViajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MiembroViajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MiembroViajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>[]
          }
          upsert: {
            args: Prisma.MiembroViajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroViajePayload>
          }
          aggregate: {
            args: Prisma.MiembroViajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiembroViaje>
          }
          groupBy: {
            args: Prisma.MiembroViajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiembroViajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiembroViajeCountArgs<ExtArgs>
            result: $Utils.Optional<MiembroViajeCountAggregateOutputType> | number
          }
        }
      }
      Tarea: {
        payload: Prisma.$TareaPayload<ExtArgs>
        fields: Prisma.TareaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TareaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TareaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          findFirst: {
            args: Prisma.TareaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TareaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          findMany: {
            args: Prisma.TareaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          create: {
            args: Prisma.TareaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          createMany: {
            args: Prisma.TareaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TareaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          delete: {
            args: Prisma.TareaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          update: {
            args: Prisma.TareaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          deleteMany: {
            args: Prisma.TareaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TareaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TareaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          upsert: {
            args: Prisma.TareaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          aggregate: {
            args: Prisma.TareaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarea>
          }
          groupBy: {
            args: Prisma.TareaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TareaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TareaCountArgs<ExtArgs>
            result: $Utils.Optional<TareaCountAggregateOutputType> | number
          }
        }
      }
      Gasto: {
        payload: Prisma.$GastoPayload<ExtArgs>
        fields: Prisma.GastoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findFirst: {
            args: Prisma.GastoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findMany: {
            args: Prisma.GastoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          create: {
            args: Prisma.GastoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          createMany: {
            args: Prisma.GastoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GastoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          delete: {
            args: Prisma.GastoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          update: {
            args: Prisma.GastoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          deleteMany: {
            args: Prisma.GastoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GastoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GastoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          upsert: {
            args: Prisma.GastoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          aggregate: {
            args: Prisma.GastoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGasto>
          }
          groupBy: {
            args: Prisma.GastoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastoCountArgs<ExtArgs>
            result: $Utils.Optional<GastoCountAggregateOutputType> | number
          }
        }
      }
      ChatMensaje: {
        payload: Prisma.$ChatMensajePayload<ExtArgs>
        fields: Prisma.ChatMensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>
          }
          findFirst: {
            args: Prisma.ChatMensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>
          }
          findMany: {
            args: Prisma.ChatMensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>[]
          }
          create: {
            args: Prisma.ChatMensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>
          }
          createMany: {
            args: Prisma.ChatMensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMensajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>[]
          }
          delete: {
            args: Prisma.ChatMensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>
          }
          update: {
            args: Prisma.ChatMensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>
          }
          deleteMany: {
            args: Prisma.ChatMensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMensajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>[]
          }
          upsert: {
            args: Prisma.ChatMensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMensajePayload>
          }
          aggregate: {
            args: Prisma.ChatMensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMensaje>
          }
          groupBy: {
            args: Prisma.ChatMensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMensajeCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMensajeCountAggregateOutputType> | number
          }
        }
      }
      ItinerarioEvento: {
        payload: Prisma.$ItinerarioEventoPayload<ExtArgs>
        fields: Prisma.ItinerarioEventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItinerarioEventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItinerarioEventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>
          }
          findFirst: {
            args: Prisma.ItinerarioEventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItinerarioEventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>
          }
          findMany: {
            args: Prisma.ItinerarioEventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>[]
          }
          create: {
            args: Prisma.ItinerarioEventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>
          }
          createMany: {
            args: Prisma.ItinerarioEventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItinerarioEventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>[]
          }
          delete: {
            args: Prisma.ItinerarioEventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>
          }
          update: {
            args: Prisma.ItinerarioEventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>
          }
          deleteMany: {
            args: Prisma.ItinerarioEventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItinerarioEventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItinerarioEventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>[]
          }
          upsert: {
            args: Prisma.ItinerarioEventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItinerarioEventoPayload>
          }
          aggregate: {
            args: Prisma.ItinerarioEventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItinerarioEvento>
          }
          groupBy: {
            args: Prisma.ItinerarioEventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItinerarioEventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItinerarioEventoCountArgs<ExtArgs>
            result: $Utils.Optional<ItinerarioEventoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    viaje?: ViajeOmit
    miembroViaje?: MiembroViajeOmit
    tarea?: TareaOmit
    gasto?: GastoOmit
    chatMensaje?: ChatMensajeOmit
    itinerarioEvento?: ItinerarioEventoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    viajes: number
    tareas: number
    gastos: number
    mensajes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viajes?: boolean | UsuarioCountOutputTypeCountViajesArgs
    tareas?: boolean | UsuarioCountOutputTypeCountTareasArgs
    gastos?: boolean | UsuarioCountOutputTypeCountGastosArgs
    mensajes?: boolean | UsuarioCountOutputTypeCountMensajesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiembroViajeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMensajeWhereInput
  }


  /**
   * Count Type ViajeCountOutputType
   */

  export type ViajeCountOutputType = {
    miembros: number
    tareas: number
    gastos: number
    mensajes: number
    itinerario: number
  }

  export type ViajeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembros?: boolean | ViajeCountOutputTypeCountMiembrosArgs
    tareas?: boolean | ViajeCountOutputTypeCountTareasArgs
    gastos?: boolean | ViajeCountOutputTypeCountGastosArgs
    mensajes?: boolean | ViajeCountOutputTypeCountMensajesArgs
    itinerario?: boolean | ViajeCountOutputTypeCountItinerarioArgs
  }

  // Custom InputTypes
  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajeCountOutputType
     */
    select?: ViajeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountMiembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiembroViajeWhereInput
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMensajeWhereInput
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountItinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItinerarioEventoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    creadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    creadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    creadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    creadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    creadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
    viajes?: boolean | Usuario$viajesArgs<ExtArgs>
    tareas?: boolean | Usuario$tareasArgs<ExtArgs>
    gastos?: boolean | Usuario$gastosArgs<ExtArgs>
    mensajes?: boolean | Usuario$mensajesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    creadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "creadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viajes?: boolean | Usuario$viajesArgs<ExtArgs>
    tareas?: boolean | Usuario$tareasArgs<ExtArgs>
    gastos?: boolean | Usuario$gastosArgs<ExtArgs>
    mensajes?: boolean | Usuario$mensajesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      viajes: Prisma.$MiembroViajePayload<ExtArgs>[]
      tareas: Prisma.$TareaPayload<ExtArgs>[]
      gastos: Prisma.$GastoPayload<ExtArgs>[]
      mensajes: Prisma.$ChatMensajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
      creadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viajes<T extends Usuario$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tareas<T extends Usuario$tareasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gastos<T extends Usuario$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajes<T extends Usuario$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.viajes
   */
  export type Usuario$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    where?: MiembroViajeWhereInput
    orderBy?: MiembroViajeOrderByWithRelationInput | MiembroViajeOrderByWithRelationInput[]
    cursor?: MiembroViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiembroViajeScalarFieldEnum | MiembroViajeScalarFieldEnum[]
  }

  /**
   * Usuario.tareas
   */
  export type Usuario$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    cursor?: TareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Usuario.gastos
   */
  export type Usuario$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Usuario.mensajes
   */
  export type Usuario$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    where?: ChatMensajeWhereInput
    orderBy?: ChatMensajeOrderByWithRelationInput | ChatMensajeOrderByWithRelationInput[]
    cursor?: ChatMensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMensajeScalarFieldEnum | ChatMensajeScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Viaje
   */

  export type AggregateViaje = {
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  export type ViajeAvgAggregateOutputType = {
    id: number | null
  }

  export type ViajeSumAggregateOutputType = {
    id: number | null
  }

  export type ViajeMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    creadoEn: Date | null
  }

  export type ViajeMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    creadoEn: Date | null
  }

  export type ViajeCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    fechaInicio: number
    fechaFin: number
    creadoEn: number
    _all: number
  }


  export type ViajeAvgAggregateInputType = {
    id?: true
  }

  export type ViajeSumAggregateInputType = {
    id?: true
  }

  export type ViajeMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    fechaInicio?: true
    fechaFin?: true
    creadoEn?: true
  }

  export type ViajeMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    fechaInicio?: true
    fechaFin?: true
    creadoEn?: true
  }

  export type ViajeCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    fechaInicio?: true
    fechaFin?: true
    creadoEn?: true
    _all?: true
  }

  export type ViajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viaje to aggregate.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viajes
    **/
    _count?: true | ViajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViajeMaxAggregateInputType
  }

  export type GetViajeAggregateType<T extends ViajeAggregateArgs> = {
        [P in keyof T & keyof AggregateViaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViaje[P]>
      : GetScalarType<T[P], AggregateViaje[P]>
  }




  export type ViajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithAggregationInput | ViajeOrderByWithAggregationInput[]
    by: ViajeScalarFieldEnum[] | ViajeScalarFieldEnum
    having?: ViajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViajeCountAggregateInputType | true
    _avg?: ViajeAvgAggregateInputType
    _sum?: ViajeSumAggregateInputType
    _min?: ViajeMinAggregateInputType
    _max?: ViajeMaxAggregateInputType
  }

  export type ViajeGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    creadoEn: Date
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  type GetViajeGroupByPayload<T extends ViajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViajeGroupByOutputType[P]>
            : GetScalarType<T[P], ViajeGroupByOutputType[P]>
        }
      >
    >


  export type ViajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    creadoEn?: boolean
    miembros?: boolean | Viaje$miembrosArgs<ExtArgs>
    tareas?: boolean | Viaje$tareasArgs<ExtArgs>
    gastos?: boolean | Viaje$gastosArgs<ExtArgs>
    mensajes?: boolean | Viaje$mensajesArgs<ExtArgs>
    itinerario?: boolean | Viaje$itinerarioArgs<ExtArgs>
    _count?: boolean | ViajeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    creadoEn?: boolean
  }

  export type ViajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "fechaInicio" | "fechaFin" | "creadoEn", ExtArgs["result"]["viaje"]>
  export type ViajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembros?: boolean | Viaje$miembrosArgs<ExtArgs>
    tareas?: boolean | Viaje$tareasArgs<ExtArgs>
    gastos?: boolean | Viaje$gastosArgs<ExtArgs>
    mensajes?: boolean | Viaje$mensajesArgs<ExtArgs>
    itinerario?: boolean | Viaje$itinerarioArgs<ExtArgs>
    _count?: boolean | ViajeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ViajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ViajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viaje"
    objects: {
      miembros: Prisma.$MiembroViajePayload<ExtArgs>[]
      tareas: Prisma.$TareaPayload<ExtArgs>[]
      gastos: Prisma.$GastoPayload<ExtArgs>[]
      mensajes: Prisma.$ChatMensajePayload<ExtArgs>[]
      itinerario: Prisma.$ItinerarioEventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      fechaInicio: Date | null
      fechaFin: Date | null
      creadoEn: Date
    }, ExtArgs["result"]["viaje"]>
    composites: {}
  }

  type ViajeGetPayload<S extends boolean | null | undefined | ViajeDefaultArgs> = $Result.GetResult<Prisma.$ViajePayload, S>

  type ViajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViajeCountAggregateInputType | true
    }

  export interface ViajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viaje'], meta: { name: 'Viaje' } }
    /**
     * Find zero or one Viaje that matches the filter.
     * @param {ViajeFindUniqueArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViajeFindUniqueArgs>(args: SelectSubset<T, ViajeFindUniqueArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViajeFindUniqueOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViajeFindUniqueOrThrowArgs>(args: SelectSubset<T, ViajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViajeFindFirstArgs>(args?: SelectSubset<T, ViajeFindFirstArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViajeFindFirstOrThrowArgs>(args?: SelectSubset<T, ViajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viajes
     * const viajes = await prisma.viaje.findMany()
     * 
     * // Get first 10 Viajes
     * const viajes = await prisma.viaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viajeWithIdOnly = await prisma.viaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViajeFindManyArgs>(args?: SelectSubset<T, ViajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viaje.
     * @param {ViajeCreateArgs} args - Arguments to create a Viaje.
     * @example
     * // Create one Viaje
     * const Viaje = await prisma.viaje.create({
     *   data: {
     *     // ... data to create a Viaje
     *   }
     * })
     * 
     */
    create<T extends ViajeCreateArgs>(args: SelectSubset<T, ViajeCreateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viajes.
     * @param {ViajeCreateManyArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViajeCreateManyArgs>(args?: SelectSubset<T, ViajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viajes and returns the data saved in the database.
     * @param {ViajeCreateManyAndReturnArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viajes and only return the `id`
     * const viajeWithIdOnly = await prisma.viaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViajeCreateManyAndReturnArgs>(args?: SelectSubset<T, ViajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viaje.
     * @param {ViajeDeleteArgs} args - Arguments to delete one Viaje.
     * @example
     * // Delete one Viaje
     * const Viaje = await prisma.viaje.delete({
     *   where: {
     *     // ... filter to delete one Viaje
     *   }
     * })
     * 
     */
    delete<T extends ViajeDeleteArgs>(args: SelectSubset<T, ViajeDeleteArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viaje.
     * @param {ViajeUpdateArgs} args - Arguments to update one Viaje.
     * @example
     * // Update one Viaje
     * const viaje = await prisma.viaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViajeUpdateArgs>(args: SelectSubset<T, ViajeUpdateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viajes.
     * @param {ViajeDeleteManyArgs} args - Arguments to filter Viajes to delete.
     * @example
     * // Delete a few Viajes
     * const { count } = await prisma.viaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViajeDeleteManyArgs>(args?: SelectSubset<T, ViajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViajeUpdateManyArgs>(args: SelectSubset<T, ViajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes and returns the data updated in the database.
     * @param {ViajeUpdateManyAndReturnArgs} args - Arguments to update many Viajes.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viajes and only return the `id`
     * const viajeWithIdOnly = await prisma.viaje.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViajeUpdateManyAndReturnArgs>(args: SelectSubset<T, ViajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viaje.
     * @param {ViajeUpsertArgs} args - Arguments to update or create a Viaje.
     * @example
     * // Update or create a Viaje
     * const viaje = await prisma.viaje.upsert({
     *   create: {
     *     // ... data to create a Viaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viaje we want to update
     *   }
     * })
     */
    upsert<T extends ViajeUpsertArgs>(args: SelectSubset<T, ViajeUpsertArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeCountArgs} args - Arguments to filter Viajes to count.
     * @example
     * // Count the number of Viajes
     * const count = await prisma.viaje.count({
     *   where: {
     *     // ... the filter for the Viajes we want to count
     *   }
     * })
    **/
    count<T extends ViajeCountArgs>(
      args?: Subset<T, ViajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViajeAggregateArgs>(args: Subset<T, ViajeAggregateArgs>): Prisma.PrismaPromise<GetViajeAggregateType<T>>

    /**
     * Group by Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeGroupByArgs} args - Group by arguments.
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
      T extends ViajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViajeGroupByArgs['orderBy'] }
        : { orderBy?: ViajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viaje model
   */
  readonly fields: ViajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    miembros<T extends Viaje$miembrosArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$miembrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tareas<T extends Viaje$tareasArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gastos<T extends Viaje$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajes<T extends Viaje$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itinerario<T extends Viaje$itinerarioArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$itinerarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Viaje model
   */
  interface ViajeFieldRefs {
    readonly id: FieldRef<"Viaje", 'Int'>
    readonly nombre: FieldRef<"Viaje", 'String'>
    readonly descripcion: FieldRef<"Viaje", 'String'>
    readonly fechaInicio: FieldRef<"Viaje", 'DateTime'>
    readonly fechaFin: FieldRef<"Viaje", 'DateTime'>
    readonly creadoEn: FieldRef<"Viaje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Viaje findUnique
   */
  export type ViajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findUniqueOrThrow
   */
  export type ViajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findFirst
   */
  export type ViajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findFirstOrThrow
   */
  export type ViajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findMany
   */
  export type ViajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje create
   */
  export type ViajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Viaje.
     */
    data: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
  }

  /**
   * Viaje createMany
   */
  export type ViajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viaje createManyAndReturn
   */
  export type ViajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viaje update
   */
  export type ViajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Viaje.
     */
    data: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
    /**
     * Choose, which Viaje to update.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje updateMany
   */
  export type ViajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
  }

  /**
   * Viaje updateManyAndReturn
   */
  export type ViajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
  }

  /**
   * Viaje upsert
   */
  export type ViajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Viaje to update in case it exists.
     */
    where: ViajeWhereUniqueInput
    /**
     * In case the Viaje found by the `where` argument doesn't exist, create a new Viaje with this data.
     */
    create: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
    /**
     * In case the Viaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
  }

  /**
   * Viaje delete
   */
  export type ViajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter which Viaje to delete.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje deleteMany
   */
  export type ViajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viajes to delete
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to delete.
     */
    limit?: number
  }

  /**
   * Viaje.miembros
   */
  export type Viaje$miembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    where?: MiembroViajeWhereInput
    orderBy?: MiembroViajeOrderByWithRelationInput | MiembroViajeOrderByWithRelationInput[]
    cursor?: MiembroViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiembroViajeScalarFieldEnum | MiembroViajeScalarFieldEnum[]
  }

  /**
   * Viaje.tareas
   */
  export type Viaje$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    cursor?: TareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Viaje.gastos
   */
  export type Viaje$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Viaje.mensajes
   */
  export type Viaje$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    where?: ChatMensajeWhereInput
    orderBy?: ChatMensajeOrderByWithRelationInput | ChatMensajeOrderByWithRelationInput[]
    cursor?: ChatMensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMensajeScalarFieldEnum | ChatMensajeScalarFieldEnum[]
  }

  /**
   * Viaje.itinerario
   */
  export type Viaje$itinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    where?: ItinerarioEventoWhereInput
    orderBy?: ItinerarioEventoOrderByWithRelationInput | ItinerarioEventoOrderByWithRelationInput[]
    cursor?: ItinerarioEventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItinerarioEventoScalarFieldEnum | ItinerarioEventoScalarFieldEnum[]
  }

  /**
   * Viaje without action
   */
  export type ViajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
  }


  /**
   * Model MiembroViaje
   */

  export type AggregateMiembroViaje = {
    _count: MiembroViajeCountAggregateOutputType | null
    _avg: MiembroViajeAvgAggregateOutputType | null
    _sum: MiembroViajeSumAggregateOutputType | null
    _min: MiembroViajeMinAggregateOutputType | null
    _max: MiembroViajeMaxAggregateOutputType | null
  }

  export type MiembroViajeAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    viajeId: number | null
  }

  export type MiembroViajeSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    viajeId: number | null
  }

  export type MiembroViajeMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    viajeId: number | null
    rol: string | null
  }

  export type MiembroViajeMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    viajeId: number | null
    rol: string | null
  }

  export type MiembroViajeCountAggregateOutputType = {
    id: number
    usuarioId: number
    viajeId: number
    rol: number
    _all: number
  }


  export type MiembroViajeAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    viajeId?: true
  }

  export type MiembroViajeSumAggregateInputType = {
    id?: true
    usuarioId?: true
    viajeId?: true
  }

  export type MiembroViajeMinAggregateInputType = {
    id?: true
    usuarioId?: true
    viajeId?: true
    rol?: true
  }

  export type MiembroViajeMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    viajeId?: true
    rol?: true
  }

  export type MiembroViajeCountAggregateInputType = {
    id?: true
    usuarioId?: true
    viajeId?: true
    rol?: true
    _all?: true
  }

  export type MiembroViajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiembroViaje to aggregate.
     */
    where?: MiembroViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiembroViajes to fetch.
     */
    orderBy?: MiembroViajeOrderByWithRelationInput | MiembroViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiembroViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiembroViajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiembroViajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MiembroViajes
    **/
    _count?: true | MiembroViajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiembroViajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiembroViajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiembroViajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiembroViajeMaxAggregateInputType
  }

  export type GetMiembroViajeAggregateType<T extends MiembroViajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMiembroViaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiembroViaje[P]>
      : GetScalarType<T[P], AggregateMiembroViaje[P]>
  }




  export type MiembroViajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiembroViajeWhereInput
    orderBy?: MiembroViajeOrderByWithAggregationInput | MiembroViajeOrderByWithAggregationInput[]
    by: MiembroViajeScalarFieldEnum[] | MiembroViajeScalarFieldEnum
    having?: MiembroViajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiembroViajeCountAggregateInputType | true
    _avg?: MiembroViajeAvgAggregateInputType
    _sum?: MiembroViajeSumAggregateInputType
    _min?: MiembroViajeMinAggregateInputType
    _max?: MiembroViajeMaxAggregateInputType
  }

  export type MiembroViajeGroupByOutputType = {
    id: number
    usuarioId: number
    viajeId: number
    rol: string
    _count: MiembroViajeCountAggregateOutputType | null
    _avg: MiembroViajeAvgAggregateOutputType | null
    _sum: MiembroViajeSumAggregateOutputType | null
    _min: MiembroViajeMinAggregateOutputType | null
    _max: MiembroViajeMaxAggregateOutputType | null
  }

  type GetMiembroViajeGroupByPayload<T extends MiembroViajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiembroViajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiembroViajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiembroViajeGroupByOutputType[P]>
            : GetScalarType<T[P], MiembroViajeGroupByOutputType[P]>
        }
      >
    >


  export type MiembroViajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    rol?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miembroViaje"]>

  export type MiembroViajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    rol?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miembroViaje"]>

  export type MiembroViajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    rol?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miembroViaje"]>

  export type MiembroViajeSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    rol?: boolean
  }

  export type MiembroViajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "viajeId" | "rol", ExtArgs["result"]["miembroViaje"]>
  export type MiembroViajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type MiembroViajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type MiembroViajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $MiembroViajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MiembroViaje"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      viajeId: number
      rol: string
    }, ExtArgs["result"]["miembroViaje"]>
    composites: {}
  }

  type MiembroViajeGetPayload<S extends boolean | null | undefined | MiembroViajeDefaultArgs> = $Result.GetResult<Prisma.$MiembroViajePayload, S>

  type MiembroViajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MiembroViajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MiembroViajeCountAggregateInputType | true
    }

  export interface MiembroViajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MiembroViaje'], meta: { name: 'MiembroViaje' } }
    /**
     * Find zero or one MiembroViaje that matches the filter.
     * @param {MiembroViajeFindUniqueArgs} args - Arguments to find a MiembroViaje
     * @example
     * // Get one MiembroViaje
     * const miembroViaje = await prisma.miembroViaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MiembroViajeFindUniqueArgs>(args: SelectSubset<T, MiembroViajeFindUniqueArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MiembroViaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MiembroViajeFindUniqueOrThrowArgs} args - Arguments to find a MiembroViaje
     * @example
     * // Get one MiembroViaje
     * const miembroViaje = await prisma.miembroViaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MiembroViajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MiembroViajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiembroViaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroViajeFindFirstArgs} args - Arguments to find a MiembroViaje
     * @example
     * // Get one MiembroViaje
     * const miembroViaje = await prisma.miembroViaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MiembroViajeFindFirstArgs>(args?: SelectSubset<T, MiembroViajeFindFirstArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiembroViaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroViajeFindFirstOrThrowArgs} args - Arguments to find a MiembroViaje
     * @example
     * // Get one MiembroViaje
     * const miembroViaje = await prisma.miembroViaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MiembroViajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MiembroViajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MiembroViajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroViajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MiembroViajes
     * const miembroViajes = await prisma.miembroViaje.findMany()
     * 
     * // Get first 10 MiembroViajes
     * const miembroViajes = await prisma.miembroViaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miembroViajeWithIdOnly = await prisma.miembroViaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MiembroViajeFindManyArgs>(args?: SelectSubset<T, MiembroViajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MiembroViaje.
     * @param {MiembroViajeCreateArgs} args - Arguments to create a MiembroViaje.
     * @example
     * // Create one MiembroViaje
     * const MiembroViaje = await prisma.miembroViaje.create({
     *   data: {
     *     // ... data to create a MiembroViaje
     *   }
     * })
     * 
     */
    create<T extends MiembroViajeCreateArgs>(args: SelectSubset<T, MiembroViajeCreateArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MiembroViajes.
     * @param {MiembroViajeCreateManyArgs} args - Arguments to create many MiembroViajes.
     * @example
     * // Create many MiembroViajes
     * const miembroViaje = await prisma.miembroViaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MiembroViajeCreateManyArgs>(args?: SelectSubset<T, MiembroViajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MiembroViajes and returns the data saved in the database.
     * @param {MiembroViajeCreateManyAndReturnArgs} args - Arguments to create many MiembroViajes.
     * @example
     * // Create many MiembroViajes
     * const miembroViaje = await prisma.miembroViaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MiembroViajes and only return the `id`
     * const miembroViajeWithIdOnly = await prisma.miembroViaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MiembroViajeCreateManyAndReturnArgs>(args?: SelectSubset<T, MiembroViajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MiembroViaje.
     * @param {MiembroViajeDeleteArgs} args - Arguments to delete one MiembroViaje.
     * @example
     * // Delete one MiembroViaje
     * const MiembroViaje = await prisma.miembroViaje.delete({
     *   where: {
     *     // ... filter to delete one MiembroViaje
     *   }
     * })
     * 
     */
    delete<T extends MiembroViajeDeleteArgs>(args: SelectSubset<T, MiembroViajeDeleteArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MiembroViaje.
     * @param {MiembroViajeUpdateArgs} args - Arguments to update one MiembroViaje.
     * @example
     * // Update one MiembroViaje
     * const miembroViaje = await prisma.miembroViaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MiembroViajeUpdateArgs>(args: SelectSubset<T, MiembroViajeUpdateArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MiembroViajes.
     * @param {MiembroViajeDeleteManyArgs} args - Arguments to filter MiembroViajes to delete.
     * @example
     * // Delete a few MiembroViajes
     * const { count } = await prisma.miembroViaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MiembroViajeDeleteManyArgs>(args?: SelectSubset<T, MiembroViajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MiembroViajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroViajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MiembroViajes
     * const miembroViaje = await prisma.miembroViaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MiembroViajeUpdateManyArgs>(args: SelectSubset<T, MiembroViajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MiembroViajes and returns the data updated in the database.
     * @param {MiembroViajeUpdateManyAndReturnArgs} args - Arguments to update many MiembroViajes.
     * @example
     * // Update many MiembroViajes
     * const miembroViaje = await prisma.miembroViaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MiembroViajes and only return the `id`
     * const miembroViajeWithIdOnly = await prisma.miembroViaje.updateManyAndReturn({
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
    updateManyAndReturn<T extends MiembroViajeUpdateManyAndReturnArgs>(args: SelectSubset<T, MiembroViajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MiembroViaje.
     * @param {MiembroViajeUpsertArgs} args - Arguments to update or create a MiembroViaje.
     * @example
     * // Update or create a MiembroViaje
     * const miembroViaje = await prisma.miembroViaje.upsert({
     *   create: {
     *     // ... data to create a MiembroViaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MiembroViaje we want to update
     *   }
     * })
     */
    upsert<T extends MiembroViajeUpsertArgs>(args: SelectSubset<T, MiembroViajeUpsertArgs<ExtArgs>>): Prisma__MiembroViajeClient<$Result.GetResult<Prisma.$MiembroViajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MiembroViajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroViajeCountArgs} args - Arguments to filter MiembroViajes to count.
     * @example
     * // Count the number of MiembroViajes
     * const count = await prisma.miembroViaje.count({
     *   where: {
     *     // ... the filter for the MiembroViajes we want to count
     *   }
     * })
    **/
    count<T extends MiembroViajeCountArgs>(
      args?: Subset<T, MiembroViajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiembroViajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MiembroViaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroViajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MiembroViajeAggregateArgs>(args: Subset<T, MiembroViajeAggregateArgs>): Prisma.PrismaPromise<GetMiembroViajeAggregateType<T>>

    /**
     * Group by MiembroViaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroViajeGroupByArgs} args - Group by arguments.
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
      T extends MiembroViajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiembroViajeGroupByArgs['orderBy'] }
        : { orderBy?: MiembroViajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MiembroViajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiembroViajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MiembroViaje model
   */
  readonly fields: MiembroViajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MiembroViaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiembroViajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MiembroViaje model
   */
  interface MiembroViajeFieldRefs {
    readonly id: FieldRef<"MiembroViaje", 'Int'>
    readonly usuarioId: FieldRef<"MiembroViaje", 'Int'>
    readonly viajeId: FieldRef<"MiembroViaje", 'Int'>
    readonly rol: FieldRef<"MiembroViaje", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MiembroViaje findUnique
   */
  export type MiembroViajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * Filter, which MiembroViaje to fetch.
     */
    where: MiembroViajeWhereUniqueInput
  }

  /**
   * MiembroViaje findUniqueOrThrow
   */
  export type MiembroViajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * Filter, which MiembroViaje to fetch.
     */
    where: MiembroViajeWhereUniqueInput
  }

  /**
   * MiembroViaje findFirst
   */
  export type MiembroViajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * Filter, which MiembroViaje to fetch.
     */
    where?: MiembroViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiembroViajes to fetch.
     */
    orderBy?: MiembroViajeOrderByWithRelationInput | MiembroViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiembroViajes.
     */
    cursor?: MiembroViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiembroViajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiembroViajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiembroViajes.
     */
    distinct?: MiembroViajeScalarFieldEnum | MiembroViajeScalarFieldEnum[]
  }

  /**
   * MiembroViaje findFirstOrThrow
   */
  export type MiembroViajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * Filter, which MiembroViaje to fetch.
     */
    where?: MiembroViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiembroViajes to fetch.
     */
    orderBy?: MiembroViajeOrderByWithRelationInput | MiembroViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiembroViajes.
     */
    cursor?: MiembroViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiembroViajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiembroViajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiembroViajes.
     */
    distinct?: MiembroViajeScalarFieldEnum | MiembroViajeScalarFieldEnum[]
  }

  /**
   * MiembroViaje findMany
   */
  export type MiembroViajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * Filter, which MiembroViajes to fetch.
     */
    where?: MiembroViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiembroViajes to fetch.
     */
    orderBy?: MiembroViajeOrderByWithRelationInput | MiembroViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MiembroViajes.
     */
    cursor?: MiembroViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiembroViajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiembroViajes.
     */
    skip?: number
    distinct?: MiembroViajeScalarFieldEnum | MiembroViajeScalarFieldEnum[]
  }

  /**
   * MiembroViaje create
   */
  export type MiembroViajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * The data needed to create a MiembroViaje.
     */
    data: XOR<MiembroViajeCreateInput, MiembroViajeUncheckedCreateInput>
  }

  /**
   * MiembroViaje createMany
   */
  export type MiembroViajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MiembroViajes.
     */
    data: MiembroViajeCreateManyInput | MiembroViajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MiembroViaje createManyAndReturn
   */
  export type MiembroViajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * The data used to create many MiembroViajes.
     */
    data: MiembroViajeCreateManyInput | MiembroViajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MiembroViaje update
   */
  export type MiembroViajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * The data needed to update a MiembroViaje.
     */
    data: XOR<MiembroViajeUpdateInput, MiembroViajeUncheckedUpdateInput>
    /**
     * Choose, which MiembroViaje to update.
     */
    where: MiembroViajeWhereUniqueInput
  }

  /**
   * MiembroViaje updateMany
   */
  export type MiembroViajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MiembroViajes.
     */
    data: XOR<MiembroViajeUpdateManyMutationInput, MiembroViajeUncheckedUpdateManyInput>
    /**
     * Filter which MiembroViajes to update
     */
    where?: MiembroViajeWhereInput
    /**
     * Limit how many MiembroViajes to update.
     */
    limit?: number
  }

  /**
   * MiembroViaje updateManyAndReturn
   */
  export type MiembroViajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * The data used to update MiembroViajes.
     */
    data: XOR<MiembroViajeUpdateManyMutationInput, MiembroViajeUncheckedUpdateManyInput>
    /**
     * Filter which MiembroViajes to update
     */
    where?: MiembroViajeWhereInput
    /**
     * Limit how many MiembroViajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MiembroViaje upsert
   */
  export type MiembroViajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * The filter to search for the MiembroViaje to update in case it exists.
     */
    where: MiembroViajeWhereUniqueInput
    /**
     * In case the MiembroViaje found by the `where` argument doesn't exist, create a new MiembroViaje with this data.
     */
    create: XOR<MiembroViajeCreateInput, MiembroViajeUncheckedCreateInput>
    /**
     * In case the MiembroViaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiembroViajeUpdateInput, MiembroViajeUncheckedUpdateInput>
  }

  /**
   * MiembroViaje delete
   */
  export type MiembroViajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
    /**
     * Filter which MiembroViaje to delete.
     */
    where: MiembroViajeWhereUniqueInput
  }

  /**
   * MiembroViaje deleteMany
   */
  export type MiembroViajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiembroViajes to delete
     */
    where?: MiembroViajeWhereInput
    /**
     * Limit how many MiembroViajes to delete.
     */
    limit?: number
  }

  /**
   * MiembroViaje without action
   */
  export type MiembroViajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroViaje
     */
    select?: MiembroViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiembroViaje
     */
    omit?: MiembroViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroViajeInclude<ExtArgs> | null
  }


  /**
   * Model Tarea
   */

  export type AggregateTarea = {
    _count: TareaCountAggregateOutputType | null
    _avg: TareaAvgAggregateOutputType | null
    _sum: TareaSumAggregateOutputType | null
    _min: TareaMinAggregateOutputType | null
    _max: TareaMaxAggregateOutputType | null
  }

  export type TareaAvgAggregateOutputType = {
    id: number | null
    responsableId: number | null
    viajeId: number | null
  }

  export type TareaSumAggregateOutputType = {
    id: number | null
    responsableId: number | null
    viajeId: number | null
  }

  export type TareaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    estado: string | null
    responsableId: number | null
    viajeId: number | null
    creadoEn: Date | null
  }

  export type TareaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    estado: string | null
    responsableId: number | null
    viajeId: number | null
    creadoEn: Date | null
  }

  export type TareaCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    estado: number
    responsableId: number
    viajeId: number
    creadoEn: number
    _all: number
  }


  export type TareaAvgAggregateInputType = {
    id?: true
    responsableId?: true
    viajeId?: true
  }

  export type TareaSumAggregateInputType = {
    id?: true
    responsableId?: true
    viajeId?: true
  }

  export type TareaMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    estado?: true
    responsableId?: true
    viajeId?: true
    creadoEn?: true
  }

  export type TareaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    estado?: true
    responsableId?: true
    viajeId?: true
    creadoEn?: true
  }

  export type TareaCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    estado?: true
    responsableId?: true
    viajeId?: true
    creadoEn?: true
    _all?: true
  }

  export type TareaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarea to aggregate.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tareas
    **/
    _count?: true | TareaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TareaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TareaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TareaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TareaMaxAggregateInputType
  }

  export type GetTareaAggregateType<T extends TareaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarea[P]>
      : GetScalarType<T[P], AggregateTarea[P]>
  }




  export type TareaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithAggregationInput | TareaOrderByWithAggregationInput[]
    by: TareaScalarFieldEnum[] | TareaScalarFieldEnum
    having?: TareaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TareaCountAggregateInputType | true
    _avg?: TareaAvgAggregateInputType
    _sum?: TareaSumAggregateInputType
    _min?: TareaMinAggregateInputType
    _max?: TareaMaxAggregateInputType
  }

  export type TareaGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string | null
    estado: string
    responsableId: number | null
    viajeId: number
    creadoEn: Date
    _count: TareaCountAggregateOutputType | null
    _avg: TareaAvgAggregateOutputType | null
    _sum: TareaSumAggregateOutputType | null
    _min: TareaMinAggregateOutputType | null
    _max: TareaMaxAggregateOutputType | null
  }

  type GetTareaGroupByPayload<T extends TareaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TareaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TareaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TareaGroupByOutputType[P]>
            : GetScalarType<T[P], TareaGroupByOutputType[P]>
        }
      >
    >


  export type TareaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsableId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
    responsable?: boolean | Tarea$responsableArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsableId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
    responsable?: boolean | Tarea$responsableArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsableId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
    responsable?: boolean | Tarea$responsableArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    estado?: boolean
    responsableId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
  }

  export type TareaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "estado" | "responsableId" | "viajeId" | "creadoEn", ExtArgs["result"]["tarea"]>
  export type TareaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsable?: boolean | Tarea$responsableArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type TareaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsable?: boolean | Tarea$responsableArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type TareaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsable?: boolean | Tarea$responsableArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $TareaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarea"
    objects: {
      responsable: Prisma.$UsuarioPayload<ExtArgs> | null
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string | null
      estado: string
      responsableId: number | null
      viajeId: number
      creadoEn: Date
    }, ExtArgs["result"]["tarea"]>
    composites: {}
  }

  type TareaGetPayload<S extends boolean | null | undefined | TareaDefaultArgs> = $Result.GetResult<Prisma.$TareaPayload, S>

  type TareaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TareaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TareaCountAggregateInputType | true
    }

  export interface TareaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarea'], meta: { name: 'Tarea' } }
    /**
     * Find zero or one Tarea that matches the filter.
     * @param {TareaFindUniqueArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TareaFindUniqueArgs>(args: SelectSubset<T, TareaFindUniqueArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TareaFindUniqueOrThrowArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TareaFindUniqueOrThrowArgs>(args: SelectSubset<T, TareaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindFirstArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TareaFindFirstArgs>(args?: SelectSubset<T, TareaFindFirstArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindFirstOrThrowArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TareaFindFirstOrThrowArgs>(args?: SelectSubset<T, TareaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tareas
     * const tareas = await prisma.tarea.findMany()
     * 
     * // Get first 10 Tareas
     * const tareas = await prisma.tarea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tareaWithIdOnly = await prisma.tarea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TareaFindManyArgs>(args?: SelectSubset<T, TareaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarea.
     * @param {TareaCreateArgs} args - Arguments to create a Tarea.
     * @example
     * // Create one Tarea
     * const Tarea = await prisma.tarea.create({
     *   data: {
     *     // ... data to create a Tarea
     *   }
     * })
     * 
     */
    create<T extends TareaCreateArgs>(args: SelectSubset<T, TareaCreateArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tareas.
     * @param {TareaCreateManyArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tarea = await prisma.tarea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TareaCreateManyArgs>(args?: SelectSubset<T, TareaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tareas and returns the data saved in the database.
     * @param {TareaCreateManyAndReturnArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tarea = await prisma.tarea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tareas and only return the `id`
     * const tareaWithIdOnly = await prisma.tarea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TareaCreateManyAndReturnArgs>(args?: SelectSubset<T, TareaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarea.
     * @param {TareaDeleteArgs} args - Arguments to delete one Tarea.
     * @example
     * // Delete one Tarea
     * const Tarea = await prisma.tarea.delete({
     *   where: {
     *     // ... filter to delete one Tarea
     *   }
     * })
     * 
     */
    delete<T extends TareaDeleteArgs>(args: SelectSubset<T, TareaDeleteArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarea.
     * @param {TareaUpdateArgs} args - Arguments to update one Tarea.
     * @example
     * // Update one Tarea
     * const tarea = await prisma.tarea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TareaUpdateArgs>(args: SelectSubset<T, TareaUpdateArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tareas.
     * @param {TareaDeleteManyArgs} args - Arguments to filter Tareas to delete.
     * @example
     * // Delete a few Tareas
     * const { count } = await prisma.tarea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TareaDeleteManyArgs>(args?: SelectSubset<T, TareaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tareas
     * const tarea = await prisma.tarea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TareaUpdateManyArgs>(args: SelectSubset<T, TareaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas and returns the data updated in the database.
     * @param {TareaUpdateManyAndReturnArgs} args - Arguments to update many Tareas.
     * @example
     * // Update many Tareas
     * const tarea = await prisma.tarea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tareas and only return the `id`
     * const tareaWithIdOnly = await prisma.tarea.updateManyAndReturn({
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
    updateManyAndReturn<T extends TareaUpdateManyAndReturnArgs>(args: SelectSubset<T, TareaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarea.
     * @param {TareaUpsertArgs} args - Arguments to update or create a Tarea.
     * @example
     * // Update or create a Tarea
     * const tarea = await prisma.tarea.upsert({
     *   create: {
     *     // ... data to create a Tarea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarea we want to update
     *   }
     * })
     */
    upsert<T extends TareaUpsertArgs>(args: SelectSubset<T, TareaUpsertArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaCountArgs} args - Arguments to filter Tareas to count.
     * @example
     * // Count the number of Tareas
     * const count = await prisma.tarea.count({
     *   where: {
     *     // ... the filter for the Tareas we want to count
     *   }
     * })
    **/
    count<T extends TareaCountArgs>(
      args?: Subset<T, TareaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TareaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TareaAggregateArgs>(args: Subset<T, TareaAggregateArgs>): Prisma.PrismaPromise<GetTareaAggregateType<T>>

    /**
     * Group by Tarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaGroupByArgs} args - Group by arguments.
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
      T extends TareaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TareaGroupByArgs['orderBy'] }
        : { orderBy?: TareaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TareaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTareaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarea model
   */
  readonly fields: TareaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TareaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsable<T extends Tarea$responsableArgs<ExtArgs> = {}>(args?: Subset<T, Tarea$responsableArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tarea model
   */
  interface TareaFieldRefs {
    readonly id: FieldRef<"Tarea", 'Int'>
    readonly titulo: FieldRef<"Tarea", 'String'>
    readonly descripcion: FieldRef<"Tarea", 'String'>
    readonly estado: FieldRef<"Tarea", 'String'>
    readonly responsableId: FieldRef<"Tarea", 'Int'>
    readonly viajeId: FieldRef<"Tarea", 'Int'>
    readonly creadoEn: FieldRef<"Tarea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tarea findUnique
   */
  export type TareaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea findUniqueOrThrow
   */
  export type TareaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea findFirst
   */
  export type TareaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tareas.
     */
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea findFirstOrThrow
   */
  export type TareaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tareas.
     */
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea findMany
   */
  export type TareaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tareas to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea create
   */
  export type TareaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarea.
     */
    data: XOR<TareaCreateInput, TareaUncheckedCreateInput>
  }

  /**
   * Tarea createMany
   */
  export type TareaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tareas.
     */
    data: TareaCreateManyInput | TareaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarea createManyAndReturn
   */
  export type TareaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * The data used to create many Tareas.
     */
    data: TareaCreateManyInput | TareaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarea update
   */
  export type TareaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarea.
     */
    data: XOR<TareaUpdateInput, TareaUncheckedUpdateInput>
    /**
     * Choose, which Tarea to update.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea updateMany
   */
  export type TareaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tareas.
     */
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyInput>
    /**
     * Filter which Tareas to update
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to update.
     */
    limit?: number
  }

  /**
   * Tarea updateManyAndReturn
   */
  export type TareaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * The data used to update Tareas.
     */
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyInput>
    /**
     * Filter which Tareas to update
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarea upsert
   */
  export type TareaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarea to update in case it exists.
     */
    where: TareaWhereUniqueInput
    /**
     * In case the Tarea found by the `where` argument doesn't exist, create a new Tarea with this data.
     */
    create: XOR<TareaCreateInput, TareaUncheckedCreateInput>
    /**
     * In case the Tarea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TareaUpdateInput, TareaUncheckedUpdateInput>
  }

  /**
   * Tarea delete
   */
  export type TareaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter which Tarea to delete.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea deleteMany
   */
  export type TareaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tareas to delete
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to delete.
     */
    limit?: number
  }

  /**
   * Tarea.responsable
   */
  export type Tarea$responsableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Tarea without action
   */
  export type TareaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
  }


  /**
   * Model Gasto
   */

  export type AggregateGasto = {
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  export type GastoAvgAggregateOutputType = {
    id: number | null
    monto: number | null
    pagadoPorId: number | null
    viajeId: number | null
  }

  export type GastoSumAggregateOutputType = {
    id: number | null
    monto: number | null
    pagadoPorId: number | null
    viajeId: number | null
  }

  export type GastoMinAggregateOutputType = {
    id: number | null
    monto: number | null
    categoria: string | null
    descripcion: string | null
    pagadoPorId: number | null
    viajeId: number | null
    creadoEn: Date | null
  }

  export type GastoMaxAggregateOutputType = {
    id: number | null
    monto: number | null
    categoria: string | null
    descripcion: string | null
    pagadoPorId: number | null
    viajeId: number | null
    creadoEn: Date | null
  }

  export type GastoCountAggregateOutputType = {
    id: number
    monto: number
    categoria: number
    descripcion: number
    pagadoPorId: number
    viajeId: number
    creadoEn: number
    _all: number
  }


  export type GastoAvgAggregateInputType = {
    id?: true
    monto?: true
    pagadoPorId?: true
    viajeId?: true
  }

  export type GastoSumAggregateInputType = {
    id?: true
    monto?: true
    pagadoPorId?: true
    viajeId?: true
  }

  export type GastoMinAggregateInputType = {
    id?: true
    monto?: true
    categoria?: true
    descripcion?: true
    pagadoPorId?: true
    viajeId?: true
    creadoEn?: true
  }

  export type GastoMaxAggregateInputType = {
    id?: true
    monto?: true
    categoria?: true
    descripcion?: true
    pagadoPorId?: true
    viajeId?: true
    creadoEn?: true
  }

  export type GastoCountAggregateInputType = {
    id?: true
    monto?: true
    categoria?: true
    descripcion?: true
    pagadoPorId?: true
    viajeId?: true
    creadoEn?: true
    _all?: true
  }

  export type GastoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gasto to aggregate.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gastos
    **/
    _count?: true | GastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastoMaxAggregateInputType
  }

  export type GetGastoAggregateType<T extends GastoAggregateArgs> = {
        [P in keyof T & keyof AggregateGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasto[P]>
      : GetScalarType<T[P], AggregateGasto[P]>
  }




  export type GastoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithAggregationInput | GastoOrderByWithAggregationInput[]
    by: GastoScalarFieldEnum[] | GastoScalarFieldEnum
    having?: GastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastoCountAggregateInputType | true
    _avg?: GastoAvgAggregateInputType
    _sum?: GastoSumAggregateInputType
    _min?: GastoMinAggregateInputType
    _max?: GastoMaxAggregateInputType
  }

  export type GastoGroupByOutputType = {
    id: number
    monto: number
    categoria: string | null
    descripcion: string | null
    pagadoPorId: number
    viajeId: number
    creadoEn: Date
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  type GetGastoGroupByPayload<T extends GastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastoGroupByOutputType[P]>
            : GetScalarType<T[P], GastoGroupByOutputType[P]>
        }
      >
    >


  export type GastoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monto?: boolean
    categoria?: boolean
    descripcion?: boolean
    pagadoPorId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
    pagadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monto?: boolean
    categoria?: boolean
    descripcion?: boolean
    pagadoPorId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
    pagadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monto?: boolean
    categoria?: boolean
    descripcion?: boolean
    pagadoPorId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
    pagadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectScalar = {
    id?: boolean
    monto?: boolean
    categoria?: boolean
    descripcion?: boolean
    pagadoPorId?: boolean
    viajeId?: boolean
    creadoEn?: boolean
  }

  export type GastoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monto" | "categoria" | "descripcion" | "pagadoPorId" | "viajeId" | "creadoEn", ExtArgs["result"]["gasto"]>
  export type GastoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type GastoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type GastoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $GastoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gasto"
    objects: {
      pagadoPor: Prisma.$UsuarioPayload<ExtArgs>
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      monto: number
      categoria: string | null
      descripcion: string | null
      pagadoPorId: number
      viajeId: number
      creadoEn: Date
    }, ExtArgs["result"]["gasto"]>
    composites: {}
  }

  type GastoGetPayload<S extends boolean | null | undefined | GastoDefaultArgs> = $Result.GetResult<Prisma.$GastoPayload, S>

  type GastoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GastoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastoCountAggregateInputType | true
    }

  export interface GastoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gasto'], meta: { name: 'Gasto' } }
    /**
     * Find zero or one Gasto that matches the filter.
     * @param {GastoFindUniqueArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastoFindUniqueArgs>(args: SelectSubset<T, GastoFindUniqueArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gasto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastoFindUniqueOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastoFindUniqueOrThrowArgs>(args: SelectSubset<T, GastoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastoFindFirstArgs>(args?: SelectSubset<T, GastoFindFirstArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastoFindFirstOrThrowArgs>(args?: SelectSubset<T, GastoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gasto.findMany()
     * 
     * // Get first 10 Gastos
     * const gastos = await prisma.gasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastoWithIdOnly = await prisma.gasto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GastoFindManyArgs>(args?: SelectSubset<T, GastoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gasto.
     * @param {GastoCreateArgs} args - Arguments to create a Gasto.
     * @example
     * // Create one Gasto
     * const Gasto = await prisma.gasto.create({
     *   data: {
     *     // ... data to create a Gasto
     *   }
     * })
     * 
     */
    create<T extends GastoCreateArgs>(args: SelectSubset<T, GastoCreateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gastos.
     * @param {GastoCreateManyArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GastoCreateManyArgs>(args?: SelectSubset<T, GastoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gastos and returns the data saved in the database.
     * @param {GastoCreateManyAndReturnArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GastoCreateManyAndReturnArgs>(args?: SelectSubset<T, GastoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gasto.
     * @param {GastoDeleteArgs} args - Arguments to delete one Gasto.
     * @example
     * // Delete one Gasto
     * const Gasto = await prisma.gasto.delete({
     *   where: {
     *     // ... filter to delete one Gasto
     *   }
     * })
     * 
     */
    delete<T extends GastoDeleteArgs>(args: SelectSubset<T, GastoDeleteArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gasto.
     * @param {GastoUpdateArgs} args - Arguments to update one Gasto.
     * @example
     * // Update one Gasto
     * const gasto = await prisma.gasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GastoUpdateArgs>(args: SelectSubset<T, GastoUpdateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gastos.
     * @param {GastoDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GastoDeleteManyArgs>(args?: SelectSubset<T, GastoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GastoUpdateManyArgs>(args: SelectSubset<T, GastoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos and returns the data updated in the database.
     * @param {GastoUpdateManyAndReturnArgs} args - Arguments to update many Gastos.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.updateManyAndReturn({
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
    updateManyAndReturn<T extends GastoUpdateManyAndReturnArgs>(args: SelectSubset<T, GastoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gasto.
     * @param {GastoUpsertArgs} args - Arguments to update or create a Gasto.
     * @example
     * // Update or create a Gasto
     * const gasto = await prisma.gasto.upsert({
     *   create: {
     *     // ... data to create a Gasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gasto we want to update
     *   }
     * })
     */
    upsert<T extends GastoUpsertArgs>(args: SelectSubset<T, GastoUpsertArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gasto.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends GastoCountArgs>(
      args?: Subset<T, GastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastoAggregateArgs>(args: Subset<T, GastoAggregateArgs>): Prisma.PrismaPromise<GetGastoAggregateType<T>>

    /**
     * Group by Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoGroupByArgs} args - Group by arguments.
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
      T extends GastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastoGroupByArgs['orderBy'] }
        : { orderBy?: GastoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gasto model
   */
  readonly fields: GastoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagadoPor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Gasto model
   */
  interface GastoFieldRefs {
    readonly id: FieldRef<"Gasto", 'Int'>
    readonly monto: FieldRef<"Gasto", 'Float'>
    readonly categoria: FieldRef<"Gasto", 'String'>
    readonly descripcion: FieldRef<"Gasto", 'String'>
    readonly pagadoPorId: FieldRef<"Gasto", 'Int'>
    readonly viajeId: FieldRef<"Gasto", 'Int'>
    readonly creadoEn: FieldRef<"Gasto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gasto findUnique
   */
  export type GastoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findUniqueOrThrow
   */
  export type GastoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findFirst
   */
  export type GastoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findFirstOrThrow
   */
  export type GastoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findMany
   */
  export type GastoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gastos to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto create
   */
  export type GastoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to create a Gasto.
     */
    data: XOR<GastoCreateInput, GastoUncheckedCreateInput>
  }

  /**
   * Gasto createMany
   */
  export type GastoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gasto createManyAndReturn
   */
  export type GastoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto update
   */
  export type GastoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to update a Gasto.
     */
    data: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
    /**
     * Choose, which Gasto to update.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto updateMany
   */
  export type GastoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
  }

  /**
   * Gasto updateManyAndReturn
   */
  export type GastoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto upsert
   */
  export type GastoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The filter to search for the Gasto to update in case it exists.
     */
    where: GastoWhereUniqueInput
    /**
     * In case the Gasto found by the `where` argument doesn't exist, create a new Gasto with this data.
     */
    create: XOR<GastoCreateInput, GastoUncheckedCreateInput>
    /**
     * In case the Gasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
  }

  /**
   * Gasto delete
   */
  export type GastoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter which Gasto to delete.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto deleteMany
   */
  export type GastoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gastos to delete
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to delete.
     */
    limit?: number
  }

  /**
   * Gasto without action
   */
  export type GastoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
  }


  /**
   * Model ChatMensaje
   */

  export type AggregateChatMensaje = {
    _count: ChatMensajeCountAggregateOutputType | null
    _avg: ChatMensajeAvgAggregateOutputType | null
    _sum: ChatMensajeSumAggregateOutputType | null
    _min: ChatMensajeMinAggregateOutputType | null
    _max: ChatMensajeMaxAggregateOutputType | null
  }

  export type ChatMensajeAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    viajeId: number | null
  }

  export type ChatMensajeSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    viajeId: number | null
  }

  export type ChatMensajeMinAggregateOutputType = {
    id: number | null
    contenido: string | null
    usuarioId: number | null
    viajeId: number | null
    enviadoEn: Date | null
  }

  export type ChatMensajeMaxAggregateOutputType = {
    id: number | null
    contenido: string | null
    usuarioId: number | null
    viajeId: number | null
    enviadoEn: Date | null
  }

  export type ChatMensajeCountAggregateOutputType = {
    id: number
    contenido: number
    usuarioId: number
    viajeId: number
    enviadoEn: number
    _all: number
  }


  export type ChatMensajeAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    viajeId?: true
  }

  export type ChatMensajeSumAggregateInputType = {
    id?: true
    usuarioId?: true
    viajeId?: true
  }

  export type ChatMensajeMinAggregateInputType = {
    id?: true
    contenido?: true
    usuarioId?: true
    viajeId?: true
    enviadoEn?: true
  }

  export type ChatMensajeMaxAggregateInputType = {
    id?: true
    contenido?: true
    usuarioId?: true
    viajeId?: true
    enviadoEn?: true
  }

  export type ChatMensajeCountAggregateInputType = {
    id?: true
    contenido?: true
    usuarioId?: true
    viajeId?: true
    enviadoEn?: true
    _all?: true
  }

  export type ChatMensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMensaje to aggregate.
     */
    where?: ChatMensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMensajes to fetch.
     */
    orderBy?: ChatMensajeOrderByWithRelationInput | ChatMensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMensajes
    **/
    _count?: true | ChatMensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMensajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMensajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMensajeMaxAggregateInputType
  }

  export type GetChatMensajeAggregateType<T extends ChatMensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMensaje[P]>
      : GetScalarType<T[P], AggregateChatMensaje[P]>
  }




  export type ChatMensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMensajeWhereInput
    orderBy?: ChatMensajeOrderByWithAggregationInput | ChatMensajeOrderByWithAggregationInput[]
    by: ChatMensajeScalarFieldEnum[] | ChatMensajeScalarFieldEnum
    having?: ChatMensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMensajeCountAggregateInputType | true
    _avg?: ChatMensajeAvgAggregateInputType
    _sum?: ChatMensajeSumAggregateInputType
    _min?: ChatMensajeMinAggregateInputType
    _max?: ChatMensajeMaxAggregateInputType
  }

  export type ChatMensajeGroupByOutputType = {
    id: number
    contenido: string
    usuarioId: number
    viajeId: number
    enviadoEn: Date
    _count: ChatMensajeCountAggregateOutputType | null
    _avg: ChatMensajeAvgAggregateOutputType | null
    _sum: ChatMensajeSumAggregateOutputType | null
    _min: ChatMensajeMinAggregateOutputType | null
    _max: ChatMensajeMaxAggregateOutputType | null
  }

  type GetChatMensajeGroupByPayload<T extends ChatMensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMensajeGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMensajeGroupByOutputType[P]>
        }
      >
    >


  export type ChatMensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    enviadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMensaje"]>

  export type ChatMensajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    enviadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMensaje"]>

  export type ChatMensajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    enviadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMensaje"]>

  export type ChatMensajeSelectScalar = {
    id?: boolean
    contenido?: boolean
    usuarioId?: boolean
    viajeId?: boolean
    enviadoEn?: boolean
  }

  export type ChatMensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenido" | "usuarioId" | "viajeId" | "enviadoEn", ExtArgs["result"]["chatMensaje"]>
  export type ChatMensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type ChatMensajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type ChatMensajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $ChatMensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMensaje"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenido: string
      usuarioId: number
      viajeId: number
      enviadoEn: Date
    }, ExtArgs["result"]["chatMensaje"]>
    composites: {}
  }

  type ChatMensajeGetPayload<S extends boolean | null | undefined | ChatMensajeDefaultArgs> = $Result.GetResult<Prisma.$ChatMensajePayload, S>

  type ChatMensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMensajeCountAggregateInputType | true
    }

  export interface ChatMensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMensaje'], meta: { name: 'ChatMensaje' } }
    /**
     * Find zero or one ChatMensaje that matches the filter.
     * @param {ChatMensajeFindUniqueArgs} args - Arguments to find a ChatMensaje
     * @example
     * // Get one ChatMensaje
     * const chatMensaje = await prisma.chatMensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMensajeFindUniqueArgs>(args: SelectSubset<T, ChatMensajeFindUniqueArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMensajeFindUniqueOrThrowArgs} args - Arguments to find a ChatMensaje
     * @example
     * // Get one ChatMensaje
     * const chatMensaje = await prisma.chatMensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMensajeFindFirstArgs} args - Arguments to find a ChatMensaje
     * @example
     * // Get one ChatMensaje
     * const chatMensaje = await prisma.chatMensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMensajeFindFirstArgs>(args?: SelectSubset<T, ChatMensajeFindFirstArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMensajeFindFirstOrThrowArgs} args - Arguments to find a ChatMensaje
     * @example
     * // Get one ChatMensaje
     * const chatMensaje = await prisma.chatMensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMensajes
     * const chatMensajes = await prisma.chatMensaje.findMany()
     * 
     * // Get first 10 ChatMensajes
     * const chatMensajes = await prisma.chatMensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMensajeWithIdOnly = await prisma.chatMensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMensajeFindManyArgs>(args?: SelectSubset<T, ChatMensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMensaje.
     * @param {ChatMensajeCreateArgs} args - Arguments to create a ChatMensaje.
     * @example
     * // Create one ChatMensaje
     * const ChatMensaje = await prisma.chatMensaje.create({
     *   data: {
     *     // ... data to create a ChatMensaje
     *   }
     * })
     * 
     */
    create<T extends ChatMensajeCreateArgs>(args: SelectSubset<T, ChatMensajeCreateArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMensajes.
     * @param {ChatMensajeCreateManyArgs} args - Arguments to create many ChatMensajes.
     * @example
     * // Create many ChatMensajes
     * const chatMensaje = await prisma.chatMensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMensajeCreateManyArgs>(args?: SelectSubset<T, ChatMensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMensajes and returns the data saved in the database.
     * @param {ChatMensajeCreateManyAndReturnArgs} args - Arguments to create many ChatMensajes.
     * @example
     * // Create many ChatMensajes
     * const chatMensaje = await prisma.chatMensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMensajes and only return the `id`
     * const chatMensajeWithIdOnly = await prisma.chatMensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMensajeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMensajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMensaje.
     * @param {ChatMensajeDeleteArgs} args - Arguments to delete one ChatMensaje.
     * @example
     * // Delete one ChatMensaje
     * const ChatMensaje = await prisma.chatMensaje.delete({
     *   where: {
     *     // ... filter to delete one ChatMensaje
     *   }
     * })
     * 
     */
    delete<T extends ChatMensajeDeleteArgs>(args: SelectSubset<T, ChatMensajeDeleteArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMensaje.
     * @param {ChatMensajeUpdateArgs} args - Arguments to update one ChatMensaje.
     * @example
     * // Update one ChatMensaje
     * const chatMensaje = await prisma.chatMensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMensajeUpdateArgs>(args: SelectSubset<T, ChatMensajeUpdateArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMensajes.
     * @param {ChatMensajeDeleteManyArgs} args - Arguments to filter ChatMensajes to delete.
     * @example
     * // Delete a few ChatMensajes
     * const { count } = await prisma.chatMensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMensajeDeleteManyArgs>(args?: SelectSubset<T, ChatMensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMensajes
     * const chatMensaje = await prisma.chatMensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMensajeUpdateManyArgs>(args: SelectSubset<T, ChatMensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMensajes and returns the data updated in the database.
     * @param {ChatMensajeUpdateManyAndReturnArgs} args - Arguments to update many ChatMensajes.
     * @example
     * // Update many ChatMensajes
     * const chatMensaje = await prisma.chatMensaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMensajes and only return the `id`
     * const chatMensajeWithIdOnly = await prisma.chatMensaje.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMensajeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMensajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMensaje.
     * @param {ChatMensajeUpsertArgs} args - Arguments to update or create a ChatMensaje.
     * @example
     * // Update or create a ChatMensaje
     * const chatMensaje = await prisma.chatMensaje.upsert({
     *   create: {
     *     // ... data to create a ChatMensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMensaje we want to update
     *   }
     * })
     */
    upsert<T extends ChatMensajeUpsertArgs>(args: SelectSubset<T, ChatMensajeUpsertArgs<ExtArgs>>): Prisma__ChatMensajeClient<$Result.GetResult<Prisma.$ChatMensajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMensajeCountArgs} args - Arguments to filter ChatMensajes to count.
     * @example
     * // Count the number of ChatMensajes
     * const count = await prisma.chatMensaje.count({
     *   where: {
     *     // ... the filter for the ChatMensajes we want to count
     *   }
     * })
    **/
    count<T extends ChatMensajeCountArgs>(
      args?: Subset<T, ChatMensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMensajeAggregateArgs>(args: Subset<T, ChatMensajeAggregateArgs>): Prisma.PrismaPromise<GetChatMensajeAggregateType<T>>

    /**
     * Group by ChatMensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMensajeGroupByArgs} args - Group by arguments.
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
      T extends ChatMensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMensajeGroupByArgs['orderBy'] }
        : { orderBy?: ChatMensajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMensaje model
   */
  readonly fields: ChatMensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMensaje model
   */
  interface ChatMensajeFieldRefs {
    readonly id: FieldRef<"ChatMensaje", 'Int'>
    readonly contenido: FieldRef<"ChatMensaje", 'String'>
    readonly usuarioId: FieldRef<"ChatMensaje", 'Int'>
    readonly viajeId: FieldRef<"ChatMensaje", 'Int'>
    readonly enviadoEn: FieldRef<"ChatMensaje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMensaje findUnique
   */
  export type ChatMensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * Filter, which ChatMensaje to fetch.
     */
    where: ChatMensajeWhereUniqueInput
  }

  /**
   * ChatMensaje findUniqueOrThrow
   */
  export type ChatMensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * Filter, which ChatMensaje to fetch.
     */
    where: ChatMensajeWhereUniqueInput
  }

  /**
   * ChatMensaje findFirst
   */
  export type ChatMensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * Filter, which ChatMensaje to fetch.
     */
    where?: ChatMensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMensajes to fetch.
     */
    orderBy?: ChatMensajeOrderByWithRelationInput | ChatMensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMensajes.
     */
    cursor?: ChatMensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMensajes.
     */
    distinct?: ChatMensajeScalarFieldEnum | ChatMensajeScalarFieldEnum[]
  }

  /**
   * ChatMensaje findFirstOrThrow
   */
  export type ChatMensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * Filter, which ChatMensaje to fetch.
     */
    where?: ChatMensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMensajes to fetch.
     */
    orderBy?: ChatMensajeOrderByWithRelationInput | ChatMensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMensajes.
     */
    cursor?: ChatMensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMensajes.
     */
    distinct?: ChatMensajeScalarFieldEnum | ChatMensajeScalarFieldEnum[]
  }

  /**
   * ChatMensaje findMany
   */
  export type ChatMensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * Filter, which ChatMensajes to fetch.
     */
    where?: ChatMensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMensajes to fetch.
     */
    orderBy?: ChatMensajeOrderByWithRelationInput | ChatMensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMensajes.
     */
    cursor?: ChatMensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMensajes.
     */
    skip?: number
    distinct?: ChatMensajeScalarFieldEnum | ChatMensajeScalarFieldEnum[]
  }

  /**
   * ChatMensaje create
   */
  export type ChatMensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMensaje.
     */
    data: XOR<ChatMensajeCreateInput, ChatMensajeUncheckedCreateInput>
  }

  /**
   * ChatMensaje createMany
   */
  export type ChatMensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMensajes.
     */
    data: ChatMensajeCreateManyInput | ChatMensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMensaje createManyAndReturn
   */
  export type ChatMensajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMensajes.
     */
    data: ChatMensajeCreateManyInput | ChatMensajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMensaje update
   */
  export type ChatMensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMensaje.
     */
    data: XOR<ChatMensajeUpdateInput, ChatMensajeUncheckedUpdateInput>
    /**
     * Choose, which ChatMensaje to update.
     */
    where: ChatMensajeWhereUniqueInput
  }

  /**
   * ChatMensaje updateMany
   */
  export type ChatMensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMensajes.
     */
    data: XOR<ChatMensajeUpdateManyMutationInput, ChatMensajeUncheckedUpdateManyInput>
    /**
     * Filter which ChatMensajes to update
     */
    where?: ChatMensajeWhereInput
    /**
     * Limit how many ChatMensajes to update.
     */
    limit?: number
  }

  /**
   * ChatMensaje updateManyAndReturn
   */
  export type ChatMensajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * The data used to update ChatMensajes.
     */
    data: XOR<ChatMensajeUpdateManyMutationInput, ChatMensajeUncheckedUpdateManyInput>
    /**
     * Filter which ChatMensajes to update
     */
    where?: ChatMensajeWhereInput
    /**
     * Limit how many ChatMensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMensaje upsert
   */
  export type ChatMensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMensaje to update in case it exists.
     */
    where: ChatMensajeWhereUniqueInput
    /**
     * In case the ChatMensaje found by the `where` argument doesn't exist, create a new ChatMensaje with this data.
     */
    create: XOR<ChatMensajeCreateInput, ChatMensajeUncheckedCreateInput>
    /**
     * In case the ChatMensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMensajeUpdateInput, ChatMensajeUncheckedUpdateInput>
  }

  /**
   * ChatMensaje delete
   */
  export type ChatMensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
    /**
     * Filter which ChatMensaje to delete.
     */
    where: ChatMensajeWhereUniqueInput
  }

  /**
   * ChatMensaje deleteMany
   */
  export type ChatMensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMensajes to delete
     */
    where?: ChatMensajeWhereInput
    /**
     * Limit how many ChatMensajes to delete.
     */
    limit?: number
  }

  /**
   * ChatMensaje without action
   */
  export type ChatMensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMensaje
     */
    select?: ChatMensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMensaje
     */
    omit?: ChatMensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMensajeInclude<ExtArgs> | null
  }


  /**
   * Model ItinerarioEvento
   */

  export type AggregateItinerarioEvento = {
    _count: ItinerarioEventoCountAggregateOutputType | null
    _avg: ItinerarioEventoAvgAggregateOutputType | null
    _sum: ItinerarioEventoSumAggregateOutputType | null
    _min: ItinerarioEventoMinAggregateOutputType | null
    _max: ItinerarioEventoMaxAggregateOutputType | null
  }

  export type ItinerarioEventoAvgAggregateOutputType = {
    id: number | null
    viajeId: number | null
  }

  export type ItinerarioEventoSumAggregateOutputType = {
    id: number | null
    viajeId: number | null
  }

  export type ItinerarioEventoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    fechaHora: Date | null
    viajeId: number | null
  }

  export type ItinerarioEventoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    fechaHora: Date | null
    viajeId: number | null
  }

  export type ItinerarioEventoCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    fechaHora: number
    viajeId: number
    _all: number
  }


  export type ItinerarioEventoAvgAggregateInputType = {
    id?: true
    viajeId?: true
  }

  export type ItinerarioEventoSumAggregateInputType = {
    id?: true
    viajeId?: true
  }

  export type ItinerarioEventoMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    fechaHora?: true
    viajeId?: true
  }

  export type ItinerarioEventoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    fechaHora?: true
    viajeId?: true
  }

  export type ItinerarioEventoCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    fechaHora?: true
    viajeId?: true
    _all?: true
  }

  export type ItinerarioEventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItinerarioEvento to aggregate.
     */
    where?: ItinerarioEventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItinerarioEventos to fetch.
     */
    orderBy?: ItinerarioEventoOrderByWithRelationInput | ItinerarioEventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItinerarioEventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItinerarioEventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItinerarioEventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItinerarioEventos
    **/
    _count?: true | ItinerarioEventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItinerarioEventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItinerarioEventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItinerarioEventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItinerarioEventoMaxAggregateInputType
  }

  export type GetItinerarioEventoAggregateType<T extends ItinerarioEventoAggregateArgs> = {
        [P in keyof T & keyof AggregateItinerarioEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItinerarioEvento[P]>
      : GetScalarType<T[P], AggregateItinerarioEvento[P]>
  }




  export type ItinerarioEventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItinerarioEventoWhereInput
    orderBy?: ItinerarioEventoOrderByWithAggregationInput | ItinerarioEventoOrderByWithAggregationInput[]
    by: ItinerarioEventoScalarFieldEnum[] | ItinerarioEventoScalarFieldEnum
    having?: ItinerarioEventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItinerarioEventoCountAggregateInputType | true
    _avg?: ItinerarioEventoAvgAggregateInputType
    _sum?: ItinerarioEventoSumAggregateInputType
    _min?: ItinerarioEventoMinAggregateInputType
    _max?: ItinerarioEventoMaxAggregateInputType
  }

  export type ItinerarioEventoGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string | null
    fechaHora: Date
    viajeId: number
    _count: ItinerarioEventoCountAggregateOutputType | null
    _avg: ItinerarioEventoAvgAggregateOutputType | null
    _sum: ItinerarioEventoSumAggregateOutputType | null
    _min: ItinerarioEventoMinAggregateOutputType | null
    _max: ItinerarioEventoMaxAggregateOutputType | null
  }

  type GetItinerarioEventoGroupByPayload<T extends ItinerarioEventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItinerarioEventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItinerarioEventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItinerarioEventoGroupByOutputType[P]>
            : GetScalarType<T[P], ItinerarioEventoGroupByOutputType[P]>
        }
      >
    >


  export type ItinerarioEventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaHora?: boolean
    viajeId?: boolean
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerarioEvento"]>

  export type ItinerarioEventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaHora?: boolean
    viajeId?: boolean
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerarioEvento"]>

  export type ItinerarioEventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaHora?: boolean
    viajeId?: boolean
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerarioEvento"]>

  export type ItinerarioEventoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fechaHora?: boolean
    viajeId?: boolean
  }

  export type ItinerarioEventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "fechaHora" | "viajeId", ExtArgs["result"]["itinerarioEvento"]>
  export type ItinerarioEventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type ItinerarioEventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type ItinerarioEventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $ItinerarioEventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItinerarioEvento"
    objects: {
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string | null
      fechaHora: Date
      viajeId: number
    }, ExtArgs["result"]["itinerarioEvento"]>
    composites: {}
  }

  type ItinerarioEventoGetPayload<S extends boolean | null | undefined | ItinerarioEventoDefaultArgs> = $Result.GetResult<Prisma.$ItinerarioEventoPayload, S>

  type ItinerarioEventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItinerarioEventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItinerarioEventoCountAggregateInputType | true
    }

  export interface ItinerarioEventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItinerarioEvento'], meta: { name: 'ItinerarioEvento' } }
    /**
     * Find zero or one ItinerarioEvento that matches the filter.
     * @param {ItinerarioEventoFindUniqueArgs} args - Arguments to find a ItinerarioEvento
     * @example
     * // Get one ItinerarioEvento
     * const itinerarioEvento = await prisma.itinerarioEvento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItinerarioEventoFindUniqueArgs>(args: SelectSubset<T, ItinerarioEventoFindUniqueArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItinerarioEvento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItinerarioEventoFindUniqueOrThrowArgs} args - Arguments to find a ItinerarioEvento
     * @example
     * // Get one ItinerarioEvento
     * const itinerarioEvento = await prisma.itinerarioEvento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItinerarioEventoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItinerarioEventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItinerarioEvento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioEventoFindFirstArgs} args - Arguments to find a ItinerarioEvento
     * @example
     * // Get one ItinerarioEvento
     * const itinerarioEvento = await prisma.itinerarioEvento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItinerarioEventoFindFirstArgs>(args?: SelectSubset<T, ItinerarioEventoFindFirstArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItinerarioEvento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioEventoFindFirstOrThrowArgs} args - Arguments to find a ItinerarioEvento
     * @example
     * // Get one ItinerarioEvento
     * const itinerarioEvento = await prisma.itinerarioEvento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItinerarioEventoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItinerarioEventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItinerarioEventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioEventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItinerarioEventos
     * const itinerarioEventos = await prisma.itinerarioEvento.findMany()
     * 
     * // Get first 10 ItinerarioEventos
     * const itinerarioEventos = await prisma.itinerarioEvento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itinerarioEventoWithIdOnly = await prisma.itinerarioEvento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItinerarioEventoFindManyArgs>(args?: SelectSubset<T, ItinerarioEventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItinerarioEvento.
     * @param {ItinerarioEventoCreateArgs} args - Arguments to create a ItinerarioEvento.
     * @example
     * // Create one ItinerarioEvento
     * const ItinerarioEvento = await prisma.itinerarioEvento.create({
     *   data: {
     *     // ... data to create a ItinerarioEvento
     *   }
     * })
     * 
     */
    create<T extends ItinerarioEventoCreateArgs>(args: SelectSubset<T, ItinerarioEventoCreateArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItinerarioEventos.
     * @param {ItinerarioEventoCreateManyArgs} args - Arguments to create many ItinerarioEventos.
     * @example
     * // Create many ItinerarioEventos
     * const itinerarioEvento = await prisma.itinerarioEvento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItinerarioEventoCreateManyArgs>(args?: SelectSubset<T, ItinerarioEventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItinerarioEventos and returns the data saved in the database.
     * @param {ItinerarioEventoCreateManyAndReturnArgs} args - Arguments to create many ItinerarioEventos.
     * @example
     * // Create many ItinerarioEventos
     * const itinerarioEvento = await prisma.itinerarioEvento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItinerarioEventos and only return the `id`
     * const itinerarioEventoWithIdOnly = await prisma.itinerarioEvento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItinerarioEventoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItinerarioEventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItinerarioEvento.
     * @param {ItinerarioEventoDeleteArgs} args - Arguments to delete one ItinerarioEvento.
     * @example
     * // Delete one ItinerarioEvento
     * const ItinerarioEvento = await prisma.itinerarioEvento.delete({
     *   where: {
     *     // ... filter to delete one ItinerarioEvento
     *   }
     * })
     * 
     */
    delete<T extends ItinerarioEventoDeleteArgs>(args: SelectSubset<T, ItinerarioEventoDeleteArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItinerarioEvento.
     * @param {ItinerarioEventoUpdateArgs} args - Arguments to update one ItinerarioEvento.
     * @example
     * // Update one ItinerarioEvento
     * const itinerarioEvento = await prisma.itinerarioEvento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItinerarioEventoUpdateArgs>(args: SelectSubset<T, ItinerarioEventoUpdateArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItinerarioEventos.
     * @param {ItinerarioEventoDeleteManyArgs} args - Arguments to filter ItinerarioEventos to delete.
     * @example
     * // Delete a few ItinerarioEventos
     * const { count } = await prisma.itinerarioEvento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItinerarioEventoDeleteManyArgs>(args?: SelectSubset<T, ItinerarioEventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItinerarioEventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioEventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItinerarioEventos
     * const itinerarioEvento = await prisma.itinerarioEvento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItinerarioEventoUpdateManyArgs>(args: SelectSubset<T, ItinerarioEventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItinerarioEventos and returns the data updated in the database.
     * @param {ItinerarioEventoUpdateManyAndReturnArgs} args - Arguments to update many ItinerarioEventos.
     * @example
     * // Update many ItinerarioEventos
     * const itinerarioEvento = await prisma.itinerarioEvento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItinerarioEventos and only return the `id`
     * const itinerarioEventoWithIdOnly = await prisma.itinerarioEvento.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItinerarioEventoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItinerarioEventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItinerarioEvento.
     * @param {ItinerarioEventoUpsertArgs} args - Arguments to update or create a ItinerarioEvento.
     * @example
     * // Update or create a ItinerarioEvento
     * const itinerarioEvento = await prisma.itinerarioEvento.upsert({
     *   create: {
     *     // ... data to create a ItinerarioEvento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItinerarioEvento we want to update
     *   }
     * })
     */
    upsert<T extends ItinerarioEventoUpsertArgs>(args: SelectSubset<T, ItinerarioEventoUpsertArgs<ExtArgs>>): Prisma__ItinerarioEventoClient<$Result.GetResult<Prisma.$ItinerarioEventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItinerarioEventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioEventoCountArgs} args - Arguments to filter ItinerarioEventos to count.
     * @example
     * // Count the number of ItinerarioEventos
     * const count = await prisma.itinerarioEvento.count({
     *   where: {
     *     // ... the filter for the ItinerarioEventos we want to count
     *   }
     * })
    **/
    count<T extends ItinerarioEventoCountArgs>(
      args?: Subset<T, ItinerarioEventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItinerarioEventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItinerarioEvento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioEventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItinerarioEventoAggregateArgs>(args: Subset<T, ItinerarioEventoAggregateArgs>): Prisma.PrismaPromise<GetItinerarioEventoAggregateType<T>>

    /**
     * Group by ItinerarioEvento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioEventoGroupByArgs} args - Group by arguments.
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
      T extends ItinerarioEventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItinerarioEventoGroupByArgs['orderBy'] }
        : { orderBy?: ItinerarioEventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItinerarioEventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItinerarioEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItinerarioEvento model
   */
  readonly fields: ItinerarioEventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItinerarioEvento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItinerarioEventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItinerarioEvento model
   */
  interface ItinerarioEventoFieldRefs {
    readonly id: FieldRef<"ItinerarioEvento", 'Int'>
    readonly titulo: FieldRef<"ItinerarioEvento", 'String'>
    readonly descripcion: FieldRef<"ItinerarioEvento", 'String'>
    readonly fechaHora: FieldRef<"ItinerarioEvento", 'DateTime'>
    readonly viajeId: FieldRef<"ItinerarioEvento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItinerarioEvento findUnique
   */
  export type ItinerarioEventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * Filter, which ItinerarioEvento to fetch.
     */
    where: ItinerarioEventoWhereUniqueInput
  }

  /**
   * ItinerarioEvento findUniqueOrThrow
   */
  export type ItinerarioEventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * Filter, which ItinerarioEvento to fetch.
     */
    where: ItinerarioEventoWhereUniqueInput
  }

  /**
   * ItinerarioEvento findFirst
   */
  export type ItinerarioEventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * Filter, which ItinerarioEvento to fetch.
     */
    where?: ItinerarioEventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItinerarioEventos to fetch.
     */
    orderBy?: ItinerarioEventoOrderByWithRelationInput | ItinerarioEventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItinerarioEventos.
     */
    cursor?: ItinerarioEventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItinerarioEventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItinerarioEventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItinerarioEventos.
     */
    distinct?: ItinerarioEventoScalarFieldEnum | ItinerarioEventoScalarFieldEnum[]
  }

  /**
   * ItinerarioEvento findFirstOrThrow
   */
  export type ItinerarioEventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * Filter, which ItinerarioEvento to fetch.
     */
    where?: ItinerarioEventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItinerarioEventos to fetch.
     */
    orderBy?: ItinerarioEventoOrderByWithRelationInput | ItinerarioEventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItinerarioEventos.
     */
    cursor?: ItinerarioEventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItinerarioEventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItinerarioEventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItinerarioEventos.
     */
    distinct?: ItinerarioEventoScalarFieldEnum | ItinerarioEventoScalarFieldEnum[]
  }

  /**
   * ItinerarioEvento findMany
   */
  export type ItinerarioEventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * Filter, which ItinerarioEventos to fetch.
     */
    where?: ItinerarioEventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItinerarioEventos to fetch.
     */
    orderBy?: ItinerarioEventoOrderByWithRelationInput | ItinerarioEventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItinerarioEventos.
     */
    cursor?: ItinerarioEventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItinerarioEventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItinerarioEventos.
     */
    skip?: number
    distinct?: ItinerarioEventoScalarFieldEnum | ItinerarioEventoScalarFieldEnum[]
  }

  /**
   * ItinerarioEvento create
   */
  export type ItinerarioEventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItinerarioEvento.
     */
    data: XOR<ItinerarioEventoCreateInput, ItinerarioEventoUncheckedCreateInput>
  }

  /**
   * ItinerarioEvento createMany
   */
  export type ItinerarioEventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItinerarioEventos.
     */
    data: ItinerarioEventoCreateManyInput | ItinerarioEventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItinerarioEvento createManyAndReturn
   */
  export type ItinerarioEventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * The data used to create many ItinerarioEventos.
     */
    data: ItinerarioEventoCreateManyInput | ItinerarioEventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItinerarioEvento update
   */
  export type ItinerarioEventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItinerarioEvento.
     */
    data: XOR<ItinerarioEventoUpdateInput, ItinerarioEventoUncheckedUpdateInput>
    /**
     * Choose, which ItinerarioEvento to update.
     */
    where: ItinerarioEventoWhereUniqueInput
  }

  /**
   * ItinerarioEvento updateMany
   */
  export type ItinerarioEventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItinerarioEventos.
     */
    data: XOR<ItinerarioEventoUpdateManyMutationInput, ItinerarioEventoUncheckedUpdateManyInput>
    /**
     * Filter which ItinerarioEventos to update
     */
    where?: ItinerarioEventoWhereInput
    /**
     * Limit how many ItinerarioEventos to update.
     */
    limit?: number
  }

  /**
   * ItinerarioEvento updateManyAndReturn
   */
  export type ItinerarioEventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * The data used to update ItinerarioEventos.
     */
    data: XOR<ItinerarioEventoUpdateManyMutationInput, ItinerarioEventoUncheckedUpdateManyInput>
    /**
     * Filter which ItinerarioEventos to update
     */
    where?: ItinerarioEventoWhereInput
    /**
     * Limit how many ItinerarioEventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItinerarioEvento upsert
   */
  export type ItinerarioEventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItinerarioEvento to update in case it exists.
     */
    where: ItinerarioEventoWhereUniqueInput
    /**
     * In case the ItinerarioEvento found by the `where` argument doesn't exist, create a new ItinerarioEvento with this data.
     */
    create: XOR<ItinerarioEventoCreateInput, ItinerarioEventoUncheckedCreateInput>
    /**
     * In case the ItinerarioEvento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItinerarioEventoUpdateInput, ItinerarioEventoUncheckedUpdateInput>
  }

  /**
   * ItinerarioEvento delete
   */
  export type ItinerarioEventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
    /**
     * Filter which ItinerarioEvento to delete.
     */
    where: ItinerarioEventoWhereUniqueInput
  }

  /**
   * ItinerarioEvento deleteMany
   */
  export type ItinerarioEventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItinerarioEventos to delete
     */
    where?: ItinerarioEventoWhereInput
    /**
     * Limit how many ItinerarioEventos to delete.
     */
    limit?: number
  }

  /**
   * ItinerarioEvento without action
   */
  export type ItinerarioEventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerarioEvento
     */
    select?: ItinerarioEventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItinerarioEvento
     */
    omit?: ItinerarioEventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItinerarioEventoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    creadoEn: 'creadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ViajeScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    creadoEn: 'creadoEn'
  };

  export type ViajeScalarFieldEnum = (typeof ViajeScalarFieldEnum)[keyof typeof ViajeScalarFieldEnum]


  export const MiembroViajeScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    viajeId: 'viajeId',
    rol: 'rol'
  };

  export type MiembroViajeScalarFieldEnum = (typeof MiembroViajeScalarFieldEnum)[keyof typeof MiembroViajeScalarFieldEnum]


  export const TareaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    estado: 'estado',
    responsableId: 'responsableId',
    viajeId: 'viajeId',
    creadoEn: 'creadoEn'
  };

  export type TareaScalarFieldEnum = (typeof TareaScalarFieldEnum)[keyof typeof TareaScalarFieldEnum]


  export const GastoScalarFieldEnum: {
    id: 'id',
    monto: 'monto',
    categoria: 'categoria',
    descripcion: 'descripcion',
    pagadoPorId: 'pagadoPorId',
    viajeId: 'viajeId',
    creadoEn: 'creadoEn'
  };

  export type GastoScalarFieldEnum = (typeof GastoScalarFieldEnum)[keyof typeof GastoScalarFieldEnum]


  export const ChatMensajeScalarFieldEnum: {
    id: 'id',
    contenido: 'contenido',
    usuarioId: 'usuarioId',
    viajeId: 'viajeId',
    enviadoEn: 'enviadoEn'
  };

  export type ChatMensajeScalarFieldEnum = (typeof ChatMensajeScalarFieldEnum)[keyof typeof ChatMensajeScalarFieldEnum]


  export const ItinerarioEventoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    fechaHora: 'fechaHora',
    viajeId: 'viajeId'
  };

  export type ItinerarioEventoScalarFieldEnum = (typeof ItinerarioEventoScalarFieldEnum)[keyof typeof ItinerarioEventoScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    viajes?: MiembroViajeListRelationFilter
    tareas?: TareaListRelationFilter
    gastos?: GastoListRelationFilter
    mensajes?: ChatMensajeListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
    viajes?: MiembroViajeOrderByRelationAggregateInput
    tareas?: TareaOrderByRelationAggregateInput
    gastos?: GastoOrderByRelationAggregateInput
    mensajes?: ChatMensajeOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    viajes?: MiembroViajeListRelationFilter
    tareas?: TareaListRelationFilter
    gastos?: GastoListRelationFilter
    mensajes?: ChatMensajeListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ViajeWhereInput = {
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    id?: IntFilter<"Viaje"> | number
    nombre?: StringFilter<"Viaje"> | string
    descripcion?: StringNullableFilter<"Viaje"> | string | null
    fechaInicio?: DateTimeNullableFilter<"Viaje"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"Viaje"> | Date | string | null
    creadoEn?: DateTimeFilter<"Viaje"> | Date | string
    miembros?: MiembroViajeListRelationFilter
    tareas?: TareaListRelationFilter
    gastos?: GastoListRelationFilter
    mensajes?: ChatMensajeListRelationFilter
    itinerario?: ItinerarioEventoListRelationFilter
  }

  export type ViajeOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    miembros?: MiembroViajeOrderByRelationAggregateInput
    tareas?: TareaOrderByRelationAggregateInput
    gastos?: GastoOrderByRelationAggregateInput
    mensajes?: ChatMensajeOrderByRelationAggregateInput
    itinerario?: ItinerarioEventoOrderByRelationAggregateInput
  }

  export type ViajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    nombre?: StringFilter<"Viaje"> | string
    descripcion?: StringNullableFilter<"Viaje"> | string | null
    fechaInicio?: DateTimeNullableFilter<"Viaje"> | Date | string | null
    fechaFin?: DateTimeNullableFilter<"Viaje"> | Date | string | null
    creadoEn?: DateTimeFilter<"Viaje"> | Date | string
    miembros?: MiembroViajeListRelationFilter
    tareas?: TareaListRelationFilter
    gastos?: GastoListRelationFilter
    mensajes?: ChatMensajeListRelationFilter
    itinerario?: ItinerarioEventoListRelationFilter
  }, "id">

  export type ViajeOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: ViajeCountOrderByAggregateInput
    _avg?: ViajeAvgOrderByAggregateInput
    _max?: ViajeMaxOrderByAggregateInput
    _min?: ViajeMinOrderByAggregateInput
    _sum?: ViajeSumOrderByAggregateInput
  }

  export type ViajeScalarWhereWithAggregatesInput = {
    AND?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    OR?: ViajeScalarWhereWithAggregatesInput[]
    NOT?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Viaje"> | number
    nombre?: StringWithAggregatesFilter<"Viaje"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Viaje"> | string | null
    fechaInicio?: DateTimeNullableWithAggregatesFilter<"Viaje"> | Date | string | null
    fechaFin?: DateTimeNullableWithAggregatesFilter<"Viaje"> | Date | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Viaje"> | Date | string
  }

  export type MiembroViajeWhereInput = {
    AND?: MiembroViajeWhereInput | MiembroViajeWhereInput[]
    OR?: MiembroViajeWhereInput[]
    NOT?: MiembroViajeWhereInput | MiembroViajeWhereInput[]
    id?: IntFilter<"MiembroViaje"> | number
    usuarioId?: IntFilter<"MiembroViaje"> | number
    viajeId?: IntFilter<"MiembroViaje"> | number
    rol?: StringFilter<"MiembroViaje"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type MiembroViajeOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    rol?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    viaje?: ViajeOrderByWithRelationInput
  }

  export type MiembroViajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MiembroViajeWhereInput | MiembroViajeWhereInput[]
    OR?: MiembroViajeWhereInput[]
    NOT?: MiembroViajeWhereInput | MiembroViajeWhereInput[]
    usuarioId?: IntFilter<"MiembroViaje"> | number
    viajeId?: IntFilter<"MiembroViaje"> | number
    rol?: StringFilter<"MiembroViaje"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id">

  export type MiembroViajeOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    rol?: SortOrder
    _count?: MiembroViajeCountOrderByAggregateInput
    _avg?: MiembroViajeAvgOrderByAggregateInput
    _max?: MiembroViajeMaxOrderByAggregateInput
    _min?: MiembroViajeMinOrderByAggregateInput
    _sum?: MiembroViajeSumOrderByAggregateInput
  }

  export type MiembroViajeScalarWhereWithAggregatesInput = {
    AND?: MiembroViajeScalarWhereWithAggregatesInput | MiembroViajeScalarWhereWithAggregatesInput[]
    OR?: MiembroViajeScalarWhereWithAggregatesInput[]
    NOT?: MiembroViajeScalarWhereWithAggregatesInput | MiembroViajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MiembroViaje"> | number
    usuarioId?: IntWithAggregatesFilter<"MiembroViaje"> | number
    viajeId?: IntWithAggregatesFilter<"MiembroViaje"> | number
    rol?: StringWithAggregatesFilter<"MiembroViaje"> | string
  }

  export type TareaWhereInput = {
    AND?: TareaWhereInput | TareaWhereInput[]
    OR?: TareaWhereInput[]
    NOT?: TareaWhereInput | TareaWhereInput[]
    id?: IntFilter<"Tarea"> | number
    titulo?: StringFilter<"Tarea"> | string
    descripcion?: StringNullableFilter<"Tarea"> | string | null
    estado?: StringFilter<"Tarea"> | string
    responsableId?: IntNullableFilter<"Tarea"> | number | null
    viajeId?: IntFilter<"Tarea"> | number
    creadoEn?: DateTimeFilter<"Tarea"> | Date | string
    responsable?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type TareaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    responsableId?: SortOrderInput | SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
    responsable?: UsuarioOrderByWithRelationInput
    viaje?: ViajeOrderByWithRelationInput
  }

  export type TareaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TareaWhereInput | TareaWhereInput[]
    OR?: TareaWhereInput[]
    NOT?: TareaWhereInput | TareaWhereInput[]
    titulo?: StringFilter<"Tarea"> | string
    descripcion?: StringNullableFilter<"Tarea"> | string | null
    estado?: StringFilter<"Tarea"> | string
    responsableId?: IntNullableFilter<"Tarea"> | number | null
    viajeId?: IntFilter<"Tarea"> | number
    creadoEn?: DateTimeFilter<"Tarea"> | Date | string
    responsable?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id">

  export type TareaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    estado?: SortOrder
    responsableId?: SortOrderInput | SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
    _count?: TareaCountOrderByAggregateInput
    _avg?: TareaAvgOrderByAggregateInput
    _max?: TareaMaxOrderByAggregateInput
    _min?: TareaMinOrderByAggregateInput
    _sum?: TareaSumOrderByAggregateInput
  }

  export type TareaScalarWhereWithAggregatesInput = {
    AND?: TareaScalarWhereWithAggregatesInput | TareaScalarWhereWithAggregatesInput[]
    OR?: TareaScalarWhereWithAggregatesInput[]
    NOT?: TareaScalarWhereWithAggregatesInput | TareaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tarea"> | number
    titulo?: StringWithAggregatesFilter<"Tarea"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Tarea"> | string | null
    estado?: StringWithAggregatesFilter<"Tarea"> | string
    responsableId?: IntNullableWithAggregatesFilter<"Tarea"> | number | null
    viajeId?: IntWithAggregatesFilter<"Tarea"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Tarea"> | Date | string
  }

  export type GastoWhereInput = {
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    id?: IntFilter<"Gasto"> | number
    monto?: FloatFilter<"Gasto"> | number
    categoria?: StringNullableFilter<"Gasto"> | string | null
    descripcion?: StringNullableFilter<"Gasto"> | string | null
    pagadoPorId?: IntFilter<"Gasto"> | number
    viajeId?: IntFilter<"Gasto"> | number
    creadoEn?: DateTimeFilter<"Gasto"> | Date | string
    pagadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type GastoOrderByWithRelationInput = {
    id?: SortOrder
    monto?: SortOrder
    categoria?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    pagadoPorId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
    pagadoPor?: UsuarioOrderByWithRelationInput
    viaje?: ViajeOrderByWithRelationInput
  }

  export type GastoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    monto?: FloatFilter<"Gasto"> | number
    categoria?: StringNullableFilter<"Gasto"> | string | null
    descripcion?: StringNullableFilter<"Gasto"> | string | null
    pagadoPorId?: IntFilter<"Gasto"> | number
    viajeId?: IntFilter<"Gasto"> | number
    creadoEn?: DateTimeFilter<"Gasto"> | Date | string
    pagadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id">

  export type GastoOrderByWithAggregationInput = {
    id?: SortOrder
    monto?: SortOrder
    categoria?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    pagadoPorId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
    _count?: GastoCountOrderByAggregateInput
    _avg?: GastoAvgOrderByAggregateInput
    _max?: GastoMaxOrderByAggregateInput
    _min?: GastoMinOrderByAggregateInput
    _sum?: GastoSumOrderByAggregateInput
  }

  export type GastoScalarWhereWithAggregatesInput = {
    AND?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    OR?: GastoScalarWhereWithAggregatesInput[]
    NOT?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gasto"> | number
    monto?: FloatWithAggregatesFilter<"Gasto"> | number
    categoria?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    pagadoPorId?: IntWithAggregatesFilter<"Gasto"> | number
    viajeId?: IntWithAggregatesFilter<"Gasto"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Gasto"> | Date | string
  }

  export type ChatMensajeWhereInput = {
    AND?: ChatMensajeWhereInput | ChatMensajeWhereInput[]
    OR?: ChatMensajeWhereInput[]
    NOT?: ChatMensajeWhereInput | ChatMensajeWhereInput[]
    id?: IntFilter<"ChatMensaje"> | number
    contenido?: StringFilter<"ChatMensaje"> | string
    usuarioId?: IntFilter<"ChatMensaje"> | number
    viajeId?: IntFilter<"ChatMensaje"> | number
    enviadoEn?: DateTimeFilter<"ChatMensaje"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type ChatMensajeOrderByWithRelationInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    enviadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    viaje?: ViajeOrderByWithRelationInput
  }

  export type ChatMensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMensajeWhereInput | ChatMensajeWhereInput[]
    OR?: ChatMensajeWhereInput[]
    NOT?: ChatMensajeWhereInput | ChatMensajeWhereInput[]
    contenido?: StringFilter<"ChatMensaje"> | string
    usuarioId?: IntFilter<"ChatMensaje"> | number
    viajeId?: IntFilter<"ChatMensaje"> | number
    enviadoEn?: DateTimeFilter<"ChatMensaje"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id">

  export type ChatMensajeOrderByWithAggregationInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    enviadoEn?: SortOrder
    _count?: ChatMensajeCountOrderByAggregateInput
    _avg?: ChatMensajeAvgOrderByAggregateInput
    _max?: ChatMensajeMaxOrderByAggregateInput
    _min?: ChatMensajeMinOrderByAggregateInput
    _sum?: ChatMensajeSumOrderByAggregateInput
  }

  export type ChatMensajeScalarWhereWithAggregatesInput = {
    AND?: ChatMensajeScalarWhereWithAggregatesInput | ChatMensajeScalarWhereWithAggregatesInput[]
    OR?: ChatMensajeScalarWhereWithAggregatesInput[]
    NOT?: ChatMensajeScalarWhereWithAggregatesInput | ChatMensajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMensaje"> | number
    contenido?: StringWithAggregatesFilter<"ChatMensaje"> | string
    usuarioId?: IntWithAggregatesFilter<"ChatMensaje"> | number
    viajeId?: IntWithAggregatesFilter<"ChatMensaje"> | number
    enviadoEn?: DateTimeWithAggregatesFilter<"ChatMensaje"> | Date | string
  }

  export type ItinerarioEventoWhereInput = {
    AND?: ItinerarioEventoWhereInput | ItinerarioEventoWhereInput[]
    OR?: ItinerarioEventoWhereInput[]
    NOT?: ItinerarioEventoWhereInput | ItinerarioEventoWhereInput[]
    id?: IntFilter<"ItinerarioEvento"> | number
    titulo?: StringFilter<"ItinerarioEvento"> | string
    descripcion?: StringNullableFilter<"ItinerarioEvento"> | string | null
    fechaHora?: DateTimeFilter<"ItinerarioEvento"> | Date | string
    viajeId?: IntFilter<"ItinerarioEvento"> | number
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type ItinerarioEventoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaHora?: SortOrder
    viajeId?: SortOrder
    viaje?: ViajeOrderByWithRelationInput
  }

  export type ItinerarioEventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItinerarioEventoWhereInput | ItinerarioEventoWhereInput[]
    OR?: ItinerarioEventoWhereInput[]
    NOT?: ItinerarioEventoWhereInput | ItinerarioEventoWhereInput[]
    titulo?: StringFilter<"ItinerarioEvento"> | string
    descripcion?: StringNullableFilter<"ItinerarioEvento"> | string | null
    fechaHora?: DateTimeFilter<"ItinerarioEvento"> | Date | string
    viajeId?: IntFilter<"ItinerarioEvento"> | number
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id">

  export type ItinerarioEventoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fechaHora?: SortOrder
    viajeId?: SortOrder
    _count?: ItinerarioEventoCountOrderByAggregateInput
    _avg?: ItinerarioEventoAvgOrderByAggregateInput
    _max?: ItinerarioEventoMaxOrderByAggregateInput
    _min?: ItinerarioEventoMinOrderByAggregateInput
    _sum?: ItinerarioEventoSumOrderByAggregateInput
  }

  export type ItinerarioEventoScalarWhereWithAggregatesInput = {
    AND?: ItinerarioEventoScalarWhereWithAggregatesInput | ItinerarioEventoScalarWhereWithAggregatesInput[]
    OR?: ItinerarioEventoScalarWhereWithAggregatesInput[]
    NOT?: ItinerarioEventoScalarWhereWithAggregatesInput | ItinerarioEventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItinerarioEvento"> | number
    titulo?: StringWithAggregatesFilter<"ItinerarioEvento"> | string
    descripcion?: StringNullableWithAggregatesFilter<"ItinerarioEvento"> | string | null
    fechaHora?: DateTimeWithAggregatesFilter<"ItinerarioEvento"> | Date | string
    viajeId?: IntWithAggregatesFilter<"ItinerarioEvento"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeCreateNestedManyWithoutUsuarioInput
    tareas?: TareaCreateNestedManyWithoutResponsableInput
    gastos?: GastoCreateNestedManyWithoutPagadoPorInput
    mensajes?: ChatMensajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeUncheckedCreateNestedManyWithoutUsuarioInput
    tareas?: TareaUncheckedCreateNestedManyWithoutResponsableInput
    gastos?: GastoUncheckedCreateNestedManyWithoutPagadoPorInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUpdateManyWithoutUsuarioNestedInput
    tareas?: TareaUpdateManyWithoutResponsableNestedInput
    gastos?: GastoUpdateManyWithoutPagadoPorNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUncheckedUpdateManyWithoutUsuarioNestedInput
    tareas?: TareaUncheckedUpdateManyWithoutResponsableNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutPagadoPorNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeCreateInput = {
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeCreateNestedManyWithoutViajeInput
    tareas?: TareaCreateNestedManyWithoutViajeInput
    gastos?: GastoCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeUncheckedCreateNestedManyWithoutViajeInput
    tareas?: TareaUncheckedCreateNestedManyWithoutViajeInput
    gastos?: GastoUncheckedCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUpdateManyWithoutViajeNestedInput
    tareas?: TareaUpdateManyWithoutViajeNestedInput
    gastos?: GastoUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUncheckedUpdateManyWithoutViajeNestedInput
    tareas?: TareaUncheckedUpdateManyWithoutViajeNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
  }

  export type ViajeUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiembroViajeCreateInput = {
    rol?: string
    usuario: UsuarioCreateNestedOneWithoutViajesInput
    viaje: ViajeCreateNestedOneWithoutMiembrosInput
  }

  export type MiembroViajeUncheckedCreateInput = {
    id?: number
    usuarioId: number
    viajeId: number
    rol?: string
  }

  export type MiembroViajeUpdateInput = {
    rol?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutViajesNestedInput
    viaje?: ViajeUpdateOneRequiredWithoutMiembrosNestedInput
  }

  export type MiembroViajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type MiembroViajeCreateManyInput = {
    id?: number
    usuarioId: number
    viajeId: number
    rol?: string
  }

  export type MiembroViajeUpdateManyMutationInput = {
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type MiembroViajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type TareaCreateInput = {
    titulo: string
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    responsable?: UsuarioCreateNestedOneWithoutTareasInput
    viaje: ViajeCreateNestedOneWithoutTareasInput
  }

  export type TareaUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    estado?: string
    responsableId?: number | null
    viajeId: number
    creadoEn?: Date | string
  }

  export type TareaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: UsuarioUpdateOneWithoutTareasNestedInput
    viaje?: ViajeUpdateOneRequiredWithoutTareasNestedInput
  }

  export type TareaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsableId?: NullableIntFieldUpdateOperationsInput | number | null
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TareaCreateManyInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    estado?: string
    responsableId?: number | null
    viajeId: number
    creadoEn?: Date | string
  }

  export type TareaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TareaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsableId?: NullableIntFieldUpdateOperationsInput | number | null
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoCreateInput = {
    monto: number
    categoria?: string | null
    descripcion?: string | null
    creadoEn?: Date | string
    pagadoPor: UsuarioCreateNestedOneWithoutGastosInput
    viaje: ViajeCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateInput = {
    id?: number
    monto: number
    categoria?: string | null
    descripcion?: string | null
    pagadoPorId: number
    viajeId: number
    creadoEn?: Date | string
  }

  export type GastoUpdateInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    pagadoPor?: UsuarioUpdateOneRequiredWithoutGastosNestedInput
    viaje?: ViajeUpdateOneRequiredWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    pagadoPorId?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoCreateManyInput = {
    id?: number
    monto: number
    categoria?: string | null
    descripcion?: string | null
    pagadoPorId: number
    viajeId: number
    creadoEn?: Date | string
  }

  export type GastoUpdateManyMutationInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    pagadoPorId?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMensajeCreateInput = {
    contenido: string
    enviadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutMensajesInput
    viaje: ViajeCreateNestedOneWithoutMensajesInput
  }

  export type ChatMensajeUncheckedCreateInput = {
    id?: number
    contenido: string
    usuarioId: number
    viajeId: number
    enviadoEn?: Date | string
  }

  export type ChatMensajeUpdateInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutMensajesNestedInput
    viaje?: ViajeUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type ChatMensajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMensajeCreateManyInput = {
    id?: number
    contenido: string
    usuarioId: number
    viajeId: number
    enviadoEn?: Date | string
  }

  export type ChatMensajeUpdateManyMutationInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMensajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItinerarioEventoCreateInput = {
    titulo: string
    descripcion?: string | null
    fechaHora: Date | string
    viaje: ViajeCreateNestedOneWithoutItinerarioInput
  }

  export type ItinerarioEventoUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    fechaHora: Date | string
    viajeId: number
  }

  export type ItinerarioEventoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    viaje?: ViajeUpdateOneRequiredWithoutItinerarioNestedInput
  }

  export type ItinerarioEventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    viajeId?: IntFieldUpdateOperationsInput | number
  }

  export type ItinerarioEventoCreateManyInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    fechaHora: Date | string
    viajeId: number
  }

  export type ItinerarioEventoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItinerarioEventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    viajeId?: IntFieldUpdateOperationsInput | number
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

  export type MiembroViajeListRelationFilter = {
    every?: MiembroViajeWhereInput
    some?: MiembroViajeWhereInput
    none?: MiembroViajeWhereInput
  }

  export type TareaListRelationFilter = {
    every?: TareaWhereInput
    some?: TareaWhereInput
    none?: TareaWhereInput
  }

  export type GastoListRelationFilter = {
    every?: GastoWhereInput
    some?: GastoWhereInput
    none?: GastoWhereInput
  }

  export type ChatMensajeListRelationFilter = {
    every?: ChatMensajeWhereInput
    some?: ChatMensajeWhereInput
    none?: ChatMensajeWhereInput
  }

  export type MiembroViajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TareaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GastoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMensajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ItinerarioEventoListRelationFilter = {
    every?: ItinerarioEventoWhereInput
    some?: ItinerarioEventoWhereInput
    none?: ItinerarioEventoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItinerarioEventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViajeCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    creadoEn?: SortOrder
  }

  export type ViajeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ViajeMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    creadoEn?: SortOrder
  }

  export type ViajeMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    creadoEn?: SortOrder
  }

  export type ViajeSumOrderByAggregateInput = {
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ViajeScalarRelationFilter = {
    is?: ViajeWhereInput
    isNot?: ViajeWhereInput
  }

  export type MiembroViajeCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    rol?: SortOrder
  }

  export type MiembroViajeAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
  }

  export type MiembroViajeMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    rol?: SortOrder
  }

  export type MiembroViajeMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    rol?: SortOrder
  }

  export type MiembroViajeSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
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

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type TareaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    responsableId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
  }

  export type TareaAvgOrderByAggregateInput = {
    id?: SortOrder
    responsableId?: SortOrder
    viajeId?: SortOrder
  }

  export type TareaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    responsableId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
  }

  export type TareaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    estado?: SortOrder
    responsableId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
  }

  export type TareaSumOrderByAggregateInput = {
    id?: SortOrder
    responsableId?: SortOrder
    viajeId?: SortOrder
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

  export type GastoCountOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    pagadoPorId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
  }

  export type GastoAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    pagadoPorId?: SortOrder
    viajeId?: SortOrder
  }

  export type GastoMaxOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    pagadoPorId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
  }

  export type GastoMinOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    categoria?: SortOrder
    descripcion?: SortOrder
    pagadoPorId?: SortOrder
    viajeId?: SortOrder
    creadoEn?: SortOrder
  }

  export type GastoSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    pagadoPorId?: SortOrder
    viajeId?: SortOrder
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

  export type ChatMensajeCountOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    enviadoEn?: SortOrder
  }

  export type ChatMensajeAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
  }

  export type ChatMensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    enviadoEn?: SortOrder
  }

  export type ChatMensajeMinOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
    enviadoEn?: SortOrder
  }

  export type ChatMensajeSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    viajeId?: SortOrder
  }

  export type ItinerarioEventoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaHora?: SortOrder
    viajeId?: SortOrder
  }

  export type ItinerarioEventoAvgOrderByAggregateInput = {
    id?: SortOrder
    viajeId?: SortOrder
  }

  export type ItinerarioEventoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaHora?: SortOrder
    viajeId?: SortOrder
  }

  export type ItinerarioEventoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fechaHora?: SortOrder
    viajeId?: SortOrder
  }

  export type ItinerarioEventoSumOrderByAggregateInput = {
    id?: SortOrder
    viajeId?: SortOrder
  }

  export type MiembroViajeCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MiembroViajeCreateWithoutUsuarioInput, MiembroViajeUncheckedCreateWithoutUsuarioInput> | MiembroViajeCreateWithoutUsuarioInput[] | MiembroViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutUsuarioInput | MiembroViajeCreateOrConnectWithoutUsuarioInput[]
    createMany?: MiembroViajeCreateManyUsuarioInputEnvelope
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
  }

  export type TareaCreateNestedManyWithoutResponsableInput = {
    create?: XOR<TareaCreateWithoutResponsableInput, TareaUncheckedCreateWithoutResponsableInput> | TareaCreateWithoutResponsableInput[] | TareaUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutResponsableInput | TareaCreateOrConnectWithoutResponsableInput[]
    createMany?: TareaCreateManyResponsableInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type GastoCreateNestedManyWithoutPagadoPorInput = {
    create?: XOR<GastoCreateWithoutPagadoPorInput, GastoUncheckedCreateWithoutPagadoPorInput> | GastoCreateWithoutPagadoPorInput[] | GastoUncheckedCreateWithoutPagadoPorInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutPagadoPorInput | GastoCreateOrConnectWithoutPagadoPorInput[]
    createMany?: GastoCreateManyPagadoPorInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type ChatMensajeCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ChatMensajeCreateWithoutUsuarioInput, ChatMensajeUncheckedCreateWithoutUsuarioInput> | ChatMensajeCreateWithoutUsuarioInput[] | ChatMensajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutUsuarioInput | ChatMensajeCreateOrConnectWithoutUsuarioInput[]
    createMany?: ChatMensajeCreateManyUsuarioInputEnvelope
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
  }

  export type MiembroViajeUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MiembroViajeCreateWithoutUsuarioInput, MiembroViajeUncheckedCreateWithoutUsuarioInput> | MiembroViajeCreateWithoutUsuarioInput[] | MiembroViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutUsuarioInput | MiembroViajeCreateOrConnectWithoutUsuarioInput[]
    createMany?: MiembroViajeCreateManyUsuarioInputEnvelope
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
  }

  export type TareaUncheckedCreateNestedManyWithoutResponsableInput = {
    create?: XOR<TareaCreateWithoutResponsableInput, TareaUncheckedCreateWithoutResponsableInput> | TareaCreateWithoutResponsableInput[] | TareaUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutResponsableInput | TareaCreateOrConnectWithoutResponsableInput[]
    createMany?: TareaCreateManyResponsableInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutPagadoPorInput = {
    create?: XOR<GastoCreateWithoutPagadoPorInput, GastoUncheckedCreateWithoutPagadoPorInput> | GastoCreateWithoutPagadoPorInput[] | GastoUncheckedCreateWithoutPagadoPorInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutPagadoPorInput | GastoCreateOrConnectWithoutPagadoPorInput[]
    createMany?: GastoCreateManyPagadoPorInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type ChatMensajeUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ChatMensajeCreateWithoutUsuarioInput, ChatMensajeUncheckedCreateWithoutUsuarioInput> | ChatMensajeCreateWithoutUsuarioInput[] | ChatMensajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutUsuarioInput | ChatMensajeCreateOrConnectWithoutUsuarioInput[]
    createMany?: ChatMensajeCreateManyUsuarioInputEnvelope
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MiembroViajeUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MiembroViajeCreateWithoutUsuarioInput, MiembroViajeUncheckedCreateWithoutUsuarioInput> | MiembroViajeCreateWithoutUsuarioInput[] | MiembroViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutUsuarioInput | MiembroViajeCreateOrConnectWithoutUsuarioInput[]
    upsert?: MiembroViajeUpsertWithWhereUniqueWithoutUsuarioInput | MiembroViajeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MiembroViajeCreateManyUsuarioInputEnvelope
    set?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    disconnect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    delete?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    update?: MiembroViajeUpdateWithWhereUniqueWithoutUsuarioInput | MiembroViajeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MiembroViajeUpdateManyWithWhereWithoutUsuarioInput | MiembroViajeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MiembroViajeScalarWhereInput | MiembroViajeScalarWhereInput[]
  }

  export type TareaUpdateManyWithoutResponsableNestedInput = {
    create?: XOR<TareaCreateWithoutResponsableInput, TareaUncheckedCreateWithoutResponsableInput> | TareaCreateWithoutResponsableInput[] | TareaUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutResponsableInput | TareaCreateOrConnectWithoutResponsableInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutResponsableInput | TareaUpsertWithWhereUniqueWithoutResponsableInput[]
    createMany?: TareaCreateManyResponsableInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutResponsableInput | TareaUpdateWithWhereUniqueWithoutResponsableInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutResponsableInput | TareaUpdateManyWithWhereWithoutResponsableInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type GastoUpdateManyWithoutPagadoPorNestedInput = {
    create?: XOR<GastoCreateWithoutPagadoPorInput, GastoUncheckedCreateWithoutPagadoPorInput> | GastoCreateWithoutPagadoPorInput[] | GastoUncheckedCreateWithoutPagadoPorInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutPagadoPorInput | GastoCreateOrConnectWithoutPagadoPorInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutPagadoPorInput | GastoUpsertWithWhereUniqueWithoutPagadoPorInput[]
    createMany?: GastoCreateManyPagadoPorInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutPagadoPorInput | GastoUpdateWithWhereUniqueWithoutPagadoPorInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutPagadoPorInput | GastoUpdateManyWithWhereWithoutPagadoPorInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type ChatMensajeUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ChatMensajeCreateWithoutUsuarioInput, ChatMensajeUncheckedCreateWithoutUsuarioInput> | ChatMensajeCreateWithoutUsuarioInput[] | ChatMensajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutUsuarioInput | ChatMensajeCreateOrConnectWithoutUsuarioInput[]
    upsert?: ChatMensajeUpsertWithWhereUniqueWithoutUsuarioInput | ChatMensajeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ChatMensajeCreateManyUsuarioInputEnvelope
    set?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    disconnect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    delete?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    update?: ChatMensajeUpdateWithWhereUniqueWithoutUsuarioInput | ChatMensajeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ChatMensajeUpdateManyWithWhereWithoutUsuarioInput | ChatMensajeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ChatMensajeScalarWhereInput | ChatMensajeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MiembroViajeUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MiembroViajeCreateWithoutUsuarioInput, MiembroViajeUncheckedCreateWithoutUsuarioInput> | MiembroViajeCreateWithoutUsuarioInput[] | MiembroViajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutUsuarioInput | MiembroViajeCreateOrConnectWithoutUsuarioInput[]
    upsert?: MiembroViajeUpsertWithWhereUniqueWithoutUsuarioInput | MiembroViajeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MiembroViajeCreateManyUsuarioInputEnvelope
    set?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    disconnect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    delete?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    update?: MiembroViajeUpdateWithWhereUniqueWithoutUsuarioInput | MiembroViajeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MiembroViajeUpdateManyWithWhereWithoutUsuarioInput | MiembroViajeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MiembroViajeScalarWhereInput | MiembroViajeScalarWhereInput[]
  }

  export type TareaUncheckedUpdateManyWithoutResponsableNestedInput = {
    create?: XOR<TareaCreateWithoutResponsableInput, TareaUncheckedCreateWithoutResponsableInput> | TareaCreateWithoutResponsableInput[] | TareaUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutResponsableInput | TareaCreateOrConnectWithoutResponsableInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutResponsableInput | TareaUpsertWithWhereUniqueWithoutResponsableInput[]
    createMany?: TareaCreateManyResponsableInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutResponsableInput | TareaUpdateWithWhereUniqueWithoutResponsableInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutResponsableInput | TareaUpdateManyWithWhereWithoutResponsableInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutPagadoPorNestedInput = {
    create?: XOR<GastoCreateWithoutPagadoPorInput, GastoUncheckedCreateWithoutPagadoPorInput> | GastoCreateWithoutPagadoPorInput[] | GastoUncheckedCreateWithoutPagadoPorInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutPagadoPorInput | GastoCreateOrConnectWithoutPagadoPorInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutPagadoPorInput | GastoUpsertWithWhereUniqueWithoutPagadoPorInput[]
    createMany?: GastoCreateManyPagadoPorInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutPagadoPorInput | GastoUpdateWithWhereUniqueWithoutPagadoPorInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutPagadoPorInput | GastoUpdateManyWithWhereWithoutPagadoPorInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type ChatMensajeUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ChatMensajeCreateWithoutUsuarioInput, ChatMensajeUncheckedCreateWithoutUsuarioInput> | ChatMensajeCreateWithoutUsuarioInput[] | ChatMensajeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutUsuarioInput | ChatMensajeCreateOrConnectWithoutUsuarioInput[]
    upsert?: ChatMensajeUpsertWithWhereUniqueWithoutUsuarioInput | ChatMensajeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ChatMensajeCreateManyUsuarioInputEnvelope
    set?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    disconnect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    delete?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    update?: ChatMensajeUpdateWithWhereUniqueWithoutUsuarioInput | ChatMensajeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ChatMensajeUpdateManyWithWhereWithoutUsuarioInput | ChatMensajeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ChatMensajeScalarWhereInput | ChatMensajeScalarWhereInput[]
  }

  export type MiembroViajeCreateNestedManyWithoutViajeInput = {
    create?: XOR<MiembroViajeCreateWithoutViajeInput, MiembroViajeUncheckedCreateWithoutViajeInput> | MiembroViajeCreateWithoutViajeInput[] | MiembroViajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutViajeInput | MiembroViajeCreateOrConnectWithoutViajeInput[]
    createMany?: MiembroViajeCreateManyViajeInputEnvelope
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
  }

  export type TareaCreateNestedManyWithoutViajeInput = {
    create?: XOR<TareaCreateWithoutViajeInput, TareaUncheckedCreateWithoutViajeInput> | TareaCreateWithoutViajeInput[] | TareaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutViajeInput | TareaCreateOrConnectWithoutViajeInput[]
    createMany?: TareaCreateManyViajeInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type GastoCreateNestedManyWithoutViajeInput = {
    create?: XOR<GastoCreateWithoutViajeInput, GastoUncheckedCreateWithoutViajeInput> | GastoCreateWithoutViajeInput[] | GastoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutViajeInput | GastoCreateOrConnectWithoutViajeInput[]
    createMany?: GastoCreateManyViajeInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type ChatMensajeCreateNestedManyWithoutViajeInput = {
    create?: XOR<ChatMensajeCreateWithoutViajeInput, ChatMensajeUncheckedCreateWithoutViajeInput> | ChatMensajeCreateWithoutViajeInput[] | ChatMensajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutViajeInput | ChatMensajeCreateOrConnectWithoutViajeInput[]
    createMany?: ChatMensajeCreateManyViajeInputEnvelope
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
  }

  export type ItinerarioEventoCreateNestedManyWithoutViajeInput = {
    create?: XOR<ItinerarioEventoCreateWithoutViajeInput, ItinerarioEventoUncheckedCreateWithoutViajeInput> | ItinerarioEventoCreateWithoutViajeInput[] | ItinerarioEventoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ItinerarioEventoCreateOrConnectWithoutViajeInput | ItinerarioEventoCreateOrConnectWithoutViajeInput[]
    createMany?: ItinerarioEventoCreateManyViajeInputEnvelope
    connect?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
  }

  export type MiembroViajeUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<MiembroViajeCreateWithoutViajeInput, MiembroViajeUncheckedCreateWithoutViajeInput> | MiembroViajeCreateWithoutViajeInput[] | MiembroViajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutViajeInput | MiembroViajeCreateOrConnectWithoutViajeInput[]
    createMany?: MiembroViajeCreateManyViajeInputEnvelope
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
  }

  export type TareaUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<TareaCreateWithoutViajeInput, TareaUncheckedCreateWithoutViajeInput> | TareaCreateWithoutViajeInput[] | TareaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutViajeInput | TareaCreateOrConnectWithoutViajeInput[]
    createMany?: TareaCreateManyViajeInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<GastoCreateWithoutViajeInput, GastoUncheckedCreateWithoutViajeInput> | GastoCreateWithoutViajeInput[] | GastoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutViajeInput | GastoCreateOrConnectWithoutViajeInput[]
    createMany?: GastoCreateManyViajeInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type ChatMensajeUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<ChatMensajeCreateWithoutViajeInput, ChatMensajeUncheckedCreateWithoutViajeInput> | ChatMensajeCreateWithoutViajeInput[] | ChatMensajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutViajeInput | ChatMensajeCreateOrConnectWithoutViajeInput[]
    createMany?: ChatMensajeCreateManyViajeInputEnvelope
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
  }

  export type ItinerarioEventoUncheckedCreateNestedManyWithoutViajeInput = {
    create?: XOR<ItinerarioEventoCreateWithoutViajeInput, ItinerarioEventoUncheckedCreateWithoutViajeInput> | ItinerarioEventoCreateWithoutViajeInput[] | ItinerarioEventoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ItinerarioEventoCreateOrConnectWithoutViajeInput | ItinerarioEventoCreateOrConnectWithoutViajeInput[]
    createMany?: ItinerarioEventoCreateManyViajeInputEnvelope
    connect?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MiembroViajeUpdateManyWithoutViajeNestedInput = {
    create?: XOR<MiembroViajeCreateWithoutViajeInput, MiembroViajeUncheckedCreateWithoutViajeInput> | MiembroViajeCreateWithoutViajeInput[] | MiembroViajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutViajeInput | MiembroViajeCreateOrConnectWithoutViajeInput[]
    upsert?: MiembroViajeUpsertWithWhereUniqueWithoutViajeInput | MiembroViajeUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: MiembroViajeCreateManyViajeInputEnvelope
    set?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    disconnect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    delete?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    update?: MiembroViajeUpdateWithWhereUniqueWithoutViajeInput | MiembroViajeUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: MiembroViajeUpdateManyWithWhereWithoutViajeInput | MiembroViajeUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: MiembroViajeScalarWhereInput | MiembroViajeScalarWhereInput[]
  }

  export type TareaUpdateManyWithoutViajeNestedInput = {
    create?: XOR<TareaCreateWithoutViajeInput, TareaUncheckedCreateWithoutViajeInput> | TareaCreateWithoutViajeInput[] | TareaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutViajeInput | TareaCreateOrConnectWithoutViajeInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutViajeInput | TareaUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: TareaCreateManyViajeInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutViajeInput | TareaUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutViajeInput | TareaUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type GastoUpdateManyWithoutViajeNestedInput = {
    create?: XOR<GastoCreateWithoutViajeInput, GastoUncheckedCreateWithoutViajeInput> | GastoCreateWithoutViajeInput[] | GastoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutViajeInput | GastoCreateOrConnectWithoutViajeInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutViajeInput | GastoUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: GastoCreateManyViajeInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutViajeInput | GastoUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutViajeInput | GastoUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type ChatMensajeUpdateManyWithoutViajeNestedInput = {
    create?: XOR<ChatMensajeCreateWithoutViajeInput, ChatMensajeUncheckedCreateWithoutViajeInput> | ChatMensajeCreateWithoutViajeInput[] | ChatMensajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutViajeInput | ChatMensajeCreateOrConnectWithoutViajeInput[]
    upsert?: ChatMensajeUpsertWithWhereUniqueWithoutViajeInput | ChatMensajeUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: ChatMensajeCreateManyViajeInputEnvelope
    set?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    disconnect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    delete?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    update?: ChatMensajeUpdateWithWhereUniqueWithoutViajeInput | ChatMensajeUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: ChatMensajeUpdateManyWithWhereWithoutViajeInput | ChatMensajeUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: ChatMensajeScalarWhereInput | ChatMensajeScalarWhereInput[]
  }

  export type ItinerarioEventoUpdateManyWithoutViajeNestedInput = {
    create?: XOR<ItinerarioEventoCreateWithoutViajeInput, ItinerarioEventoUncheckedCreateWithoutViajeInput> | ItinerarioEventoCreateWithoutViajeInput[] | ItinerarioEventoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ItinerarioEventoCreateOrConnectWithoutViajeInput | ItinerarioEventoCreateOrConnectWithoutViajeInput[]
    upsert?: ItinerarioEventoUpsertWithWhereUniqueWithoutViajeInput | ItinerarioEventoUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: ItinerarioEventoCreateManyViajeInputEnvelope
    set?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    disconnect?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    delete?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    connect?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    update?: ItinerarioEventoUpdateWithWhereUniqueWithoutViajeInput | ItinerarioEventoUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: ItinerarioEventoUpdateManyWithWhereWithoutViajeInput | ItinerarioEventoUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: ItinerarioEventoScalarWhereInput | ItinerarioEventoScalarWhereInput[]
  }

  export type MiembroViajeUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<MiembroViajeCreateWithoutViajeInput, MiembroViajeUncheckedCreateWithoutViajeInput> | MiembroViajeCreateWithoutViajeInput[] | MiembroViajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: MiembroViajeCreateOrConnectWithoutViajeInput | MiembroViajeCreateOrConnectWithoutViajeInput[]
    upsert?: MiembroViajeUpsertWithWhereUniqueWithoutViajeInput | MiembroViajeUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: MiembroViajeCreateManyViajeInputEnvelope
    set?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    disconnect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    delete?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    connect?: MiembroViajeWhereUniqueInput | MiembroViajeWhereUniqueInput[]
    update?: MiembroViajeUpdateWithWhereUniqueWithoutViajeInput | MiembroViajeUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: MiembroViajeUpdateManyWithWhereWithoutViajeInput | MiembroViajeUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: MiembroViajeScalarWhereInput | MiembroViajeScalarWhereInput[]
  }

  export type TareaUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<TareaCreateWithoutViajeInput, TareaUncheckedCreateWithoutViajeInput> | TareaCreateWithoutViajeInput[] | TareaUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutViajeInput | TareaCreateOrConnectWithoutViajeInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutViajeInput | TareaUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: TareaCreateManyViajeInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutViajeInput | TareaUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutViajeInput | TareaUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<GastoCreateWithoutViajeInput, GastoUncheckedCreateWithoutViajeInput> | GastoCreateWithoutViajeInput[] | GastoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutViajeInput | GastoCreateOrConnectWithoutViajeInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutViajeInput | GastoUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: GastoCreateManyViajeInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutViajeInput | GastoUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutViajeInput | GastoUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type ChatMensajeUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<ChatMensajeCreateWithoutViajeInput, ChatMensajeUncheckedCreateWithoutViajeInput> | ChatMensajeCreateWithoutViajeInput[] | ChatMensajeUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ChatMensajeCreateOrConnectWithoutViajeInput | ChatMensajeCreateOrConnectWithoutViajeInput[]
    upsert?: ChatMensajeUpsertWithWhereUniqueWithoutViajeInput | ChatMensajeUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: ChatMensajeCreateManyViajeInputEnvelope
    set?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    disconnect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    delete?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    connect?: ChatMensajeWhereUniqueInput | ChatMensajeWhereUniqueInput[]
    update?: ChatMensajeUpdateWithWhereUniqueWithoutViajeInput | ChatMensajeUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: ChatMensajeUpdateManyWithWhereWithoutViajeInput | ChatMensajeUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: ChatMensajeScalarWhereInput | ChatMensajeScalarWhereInput[]
  }

  export type ItinerarioEventoUncheckedUpdateManyWithoutViajeNestedInput = {
    create?: XOR<ItinerarioEventoCreateWithoutViajeInput, ItinerarioEventoUncheckedCreateWithoutViajeInput> | ItinerarioEventoCreateWithoutViajeInput[] | ItinerarioEventoUncheckedCreateWithoutViajeInput[]
    connectOrCreate?: ItinerarioEventoCreateOrConnectWithoutViajeInput | ItinerarioEventoCreateOrConnectWithoutViajeInput[]
    upsert?: ItinerarioEventoUpsertWithWhereUniqueWithoutViajeInput | ItinerarioEventoUpsertWithWhereUniqueWithoutViajeInput[]
    createMany?: ItinerarioEventoCreateManyViajeInputEnvelope
    set?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    disconnect?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    delete?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    connect?: ItinerarioEventoWhereUniqueInput | ItinerarioEventoWhereUniqueInput[]
    update?: ItinerarioEventoUpdateWithWhereUniqueWithoutViajeInput | ItinerarioEventoUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: ItinerarioEventoUpdateManyWithWhereWithoutViajeInput | ItinerarioEventoUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: ItinerarioEventoScalarWhereInput | ItinerarioEventoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutViajesInput = {
    create?: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViajesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ViajeCreateNestedOneWithoutMiembrosInput = {
    create?: XOR<ViajeCreateWithoutMiembrosInput, ViajeUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutMiembrosInput
    connect?: ViajeWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViajesInput
    upsert?: UsuarioUpsertWithoutViajesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutViajesInput, UsuarioUpdateWithoutViajesInput>, UsuarioUncheckedUpdateWithoutViajesInput>
  }

  export type ViajeUpdateOneRequiredWithoutMiembrosNestedInput = {
    create?: XOR<ViajeCreateWithoutMiembrosInput, ViajeUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutMiembrosInput
    upsert?: ViajeUpsertWithoutMiembrosInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutMiembrosInput, ViajeUpdateWithoutMiembrosInput>, ViajeUncheckedUpdateWithoutMiembrosInput>
  }

  export type UsuarioCreateNestedOneWithoutTareasInput = {
    create?: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTareasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ViajeCreateNestedOneWithoutTareasInput = {
    create?: XOR<ViajeCreateWithoutTareasInput, ViajeUncheckedCreateWithoutTareasInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutTareasInput
    connect?: ViajeWhereUniqueInput
  }

  export type UsuarioUpdateOneWithoutTareasNestedInput = {
    create?: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTareasInput
    upsert?: UsuarioUpsertWithoutTareasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTareasInput, UsuarioUpdateWithoutTareasInput>, UsuarioUncheckedUpdateWithoutTareasInput>
  }

  export type ViajeUpdateOneRequiredWithoutTareasNestedInput = {
    create?: XOR<ViajeCreateWithoutTareasInput, ViajeUncheckedCreateWithoutTareasInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutTareasInput
    upsert?: ViajeUpsertWithoutTareasInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutTareasInput, ViajeUpdateWithoutTareasInput>, ViajeUncheckedUpdateWithoutTareasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutGastosInput = {
    create?: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGastosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ViajeCreateNestedOneWithoutGastosInput = {
    create?: XOR<ViajeCreateWithoutGastosInput, ViajeUncheckedCreateWithoutGastosInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutGastosInput
    connect?: ViajeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutGastosNestedInput = {
    create?: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGastosInput
    upsert?: UsuarioUpsertWithoutGastosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGastosInput, UsuarioUpdateWithoutGastosInput>, UsuarioUncheckedUpdateWithoutGastosInput>
  }

  export type ViajeUpdateOneRequiredWithoutGastosNestedInput = {
    create?: XOR<ViajeCreateWithoutGastosInput, ViajeUncheckedCreateWithoutGastosInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutGastosInput
    upsert?: ViajeUpsertWithoutGastosInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutGastosInput, ViajeUpdateWithoutGastosInput>, ViajeUncheckedUpdateWithoutGastosInput>
  }

  export type UsuarioCreateNestedOneWithoutMensajesInput = {
    create?: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ViajeCreateNestedOneWithoutMensajesInput = {
    create?: XOR<ViajeCreateWithoutMensajesInput, ViajeUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutMensajesInput
    connect?: ViajeWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesInput
    upsert?: UsuarioUpsertWithoutMensajesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensajesInput, UsuarioUpdateWithoutMensajesInput>, UsuarioUncheckedUpdateWithoutMensajesInput>
  }

  export type ViajeUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<ViajeCreateWithoutMensajesInput, ViajeUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutMensajesInput
    upsert?: ViajeUpsertWithoutMensajesInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutMensajesInput, ViajeUpdateWithoutMensajesInput>, ViajeUncheckedUpdateWithoutMensajesInput>
  }

  export type ViajeCreateNestedOneWithoutItinerarioInput = {
    create?: XOR<ViajeCreateWithoutItinerarioInput, ViajeUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutItinerarioInput
    connect?: ViajeWhereUniqueInput
  }

  export type ViajeUpdateOneRequiredWithoutItinerarioNestedInput = {
    create?: XOR<ViajeCreateWithoutItinerarioInput, ViajeUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutItinerarioInput
    upsert?: ViajeUpsertWithoutItinerarioInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutItinerarioInput, ViajeUpdateWithoutItinerarioInput>, ViajeUncheckedUpdateWithoutItinerarioInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type MiembroViajeCreateWithoutUsuarioInput = {
    rol?: string
    viaje: ViajeCreateNestedOneWithoutMiembrosInput
  }

  export type MiembroViajeUncheckedCreateWithoutUsuarioInput = {
    id?: number
    viajeId: number
    rol?: string
  }

  export type MiembroViajeCreateOrConnectWithoutUsuarioInput = {
    where: MiembroViajeWhereUniqueInput
    create: XOR<MiembroViajeCreateWithoutUsuarioInput, MiembroViajeUncheckedCreateWithoutUsuarioInput>
  }

  export type MiembroViajeCreateManyUsuarioInputEnvelope = {
    data: MiembroViajeCreateManyUsuarioInput | MiembroViajeCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TareaCreateWithoutResponsableInput = {
    titulo: string
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    viaje: ViajeCreateNestedOneWithoutTareasInput
  }

  export type TareaUncheckedCreateWithoutResponsableInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    estado?: string
    viajeId: number
    creadoEn?: Date | string
  }

  export type TareaCreateOrConnectWithoutResponsableInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutResponsableInput, TareaUncheckedCreateWithoutResponsableInput>
  }

  export type TareaCreateManyResponsableInputEnvelope = {
    data: TareaCreateManyResponsableInput | TareaCreateManyResponsableInput[]
    skipDuplicates?: boolean
  }

  export type GastoCreateWithoutPagadoPorInput = {
    monto: number
    categoria?: string | null
    descripcion?: string | null
    creadoEn?: Date | string
    viaje: ViajeCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateWithoutPagadoPorInput = {
    id?: number
    monto: number
    categoria?: string | null
    descripcion?: string | null
    viajeId: number
    creadoEn?: Date | string
  }

  export type GastoCreateOrConnectWithoutPagadoPorInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutPagadoPorInput, GastoUncheckedCreateWithoutPagadoPorInput>
  }

  export type GastoCreateManyPagadoPorInputEnvelope = {
    data: GastoCreateManyPagadoPorInput | GastoCreateManyPagadoPorInput[]
    skipDuplicates?: boolean
  }

  export type ChatMensajeCreateWithoutUsuarioInput = {
    contenido: string
    enviadoEn?: Date | string
    viaje: ViajeCreateNestedOneWithoutMensajesInput
  }

  export type ChatMensajeUncheckedCreateWithoutUsuarioInput = {
    id?: number
    contenido: string
    viajeId: number
    enviadoEn?: Date | string
  }

  export type ChatMensajeCreateOrConnectWithoutUsuarioInput = {
    where: ChatMensajeWhereUniqueInput
    create: XOR<ChatMensajeCreateWithoutUsuarioInput, ChatMensajeUncheckedCreateWithoutUsuarioInput>
  }

  export type ChatMensajeCreateManyUsuarioInputEnvelope = {
    data: ChatMensajeCreateManyUsuarioInput | ChatMensajeCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MiembroViajeUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MiembroViajeWhereUniqueInput
    update: XOR<MiembroViajeUpdateWithoutUsuarioInput, MiembroViajeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MiembroViajeCreateWithoutUsuarioInput, MiembroViajeUncheckedCreateWithoutUsuarioInput>
  }

  export type MiembroViajeUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MiembroViajeWhereUniqueInput
    data: XOR<MiembroViajeUpdateWithoutUsuarioInput, MiembroViajeUncheckedUpdateWithoutUsuarioInput>
  }

  export type MiembroViajeUpdateManyWithWhereWithoutUsuarioInput = {
    where: MiembroViajeScalarWhereInput
    data: XOR<MiembroViajeUpdateManyMutationInput, MiembroViajeUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MiembroViajeScalarWhereInput = {
    AND?: MiembroViajeScalarWhereInput | MiembroViajeScalarWhereInput[]
    OR?: MiembroViajeScalarWhereInput[]
    NOT?: MiembroViajeScalarWhereInput | MiembroViajeScalarWhereInput[]
    id?: IntFilter<"MiembroViaje"> | number
    usuarioId?: IntFilter<"MiembroViaje"> | number
    viajeId?: IntFilter<"MiembroViaje"> | number
    rol?: StringFilter<"MiembroViaje"> | string
  }

  export type TareaUpsertWithWhereUniqueWithoutResponsableInput = {
    where: TareaWhereUniqueInput
    update: XOR<TareaUpdateWithoutResponsableInput, TareaUncheckedUpdateWithoutResponsableInput>
    create: XOR<TareaCreateWithoutResponsableInput, TareaUncheckedCreateWithoutResponsableInput>
  }

  export type TareaUpdateWithWhereUniqueWithoutResponsableInput = {
    where: TareaWhereUniqueInput
    data: XOR<TareaUpdateWithoutResponsableInput, TareaUncheckedUpdateWithoutResponsableInput>
  }

  export type TareaUpdateManyWithWhereWithoutResponsableInput = {
    where: TareaScalarWhereInput
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyWithoutResponsableInput>
  }

  export type TareaScalarWhereInput = {
    AND?: TareaScalarWhereInput | TareaScalarWhereInput[]
    OR?: TareaScalarWhereInput[]
    NOT?: TareaScalarWhereInput | TareaScalarWhereInput[]
    id?: IntFilter<"Tarea"> | number
    titulo?: StringFilter<"Tarea"> | string
    descripcion?: StringNullableFilter<"Tarea"> | string | null
    estado?: StringFilter<"Tarea"> | string
    responsableId?: IntNullableFilter<"Tarea"> | number | null
    viajeId?: IntFilter<"Tarea"> | number
    creadoEn?: DateTimeFilter<"Tarea"> | Date | string
  }

  export type GastoUpsertWithWhereUniqueWithoutPagadoPorInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutPagadoPorInput, GastoUncheckedUpdateWithoutPagadoPorInput>
    create: XOR<GastoCreateWithoutPagadoPorInput, GastoUncheckedCreateWithoutPagadoPorInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutPagadoPorInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutPagadoPorInput, GastoUncheckedUpdateWithoutPagadoPorInput>
  }

  export type GastoUpdateManyWithWhereWithoutPagadoPorInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutPagadoPorInput>
  }

  export type GastoScalarWhereInput = {
    AND?: GastoScalarWhereInput | GastoScalarWhereInput[]
    OR?: GastoScalarWhereInput[]
    NOT?: GastoScalarWhereInput | GastoScalarWhereInput[]
    id?: IntFilter<"Gasto"> | number
    monto?: FloatFilter<"Gasto"> | number
    categoria?: StringNullableFilter<"Gasto"> | string | null
    descripcion?: StringNullableFilter<"Gasto"> | string | null
    pagadoPorId?: IntFilter<"Gasto"> | number
    viajeId?: IntFilter<"Gasto"> | number
    creadoEn?: DateTimeFilter<"Gasto"> | Date | string
  }

  export type ChatMensajeUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ChatMensajeWhereUniqueInput
    update: XOR<ChatMensajeUpdateWithoutUsuarioInput, ChatMensajeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ChatMensajeCreateWithoutUsuarioInput, ChatMensajeUncheckedCreateWithoutUsuarioInput>
  }

  export type ChatMensajeUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ChatMensajeWhereUniqueInput
    data: XOR<ChatMensajeUpdateWithoutUsuarioInput, ChatMensajeUncheckedUpdateWithoutUsuarioInput>
  }

  export type ChatMensajeUpdateManyWithWhereWithoutUsuarioInput = {
    where: ChatMensajeScalarWhereInput
    data: XOR<ChatMensajeUpdateManyMutationInput, ChatMensajeUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ChatMensajeScalarWhereInput = {
    AND?: ChatMensajeScalarWhereInput | ChatMensajeScalarWhereInput[]
    OR?: ChatMensajeScalarWhereInput[]
    NOT?: ChatMensajeScalarWhereInput | ChatMensajeScalarWhereInput[]
    id?: IntFilter<"ChatMensaje"> | number
    contenido?: StringFilter<"ChatMensaje"> | string
    usuarioId?: IntFilter<"ChatMensaje"> | number
    viajeId?: IntFilter<"ChatMensaje"> | number
    enviadoEn?: DateTimeFilter<"ChatMensaje"> | Date | string
  }

  export type MiembroViajeCreateWithoutViajeInput = {
    rol?: string
    usuario: UsuarioCreateNestedOneWithoutViajesInput
  }

  export type MiembroViajeUncheckedCreateWithoutViajeInput = {
    id?: number
    usuarioId: number
    rol?: string
  }

  export type MiembroViajeCreateOrConnectWithoutViajeInput = {
    where: MiembroViajeWhereUniqueInput
    create: XOR<MiembroViajeCreateWithoutViajeInput, MiembroViajeUncheckedCreateWithoutViajeInput>
  }

  export type MiembroViajeCreateManyViajeInputEnvelope = {
    data: MiembroViajeCreateManyViajeInput | MiembroViajeCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type TareaCreateWithoutViajeInput = {
    titulo: string
    descripcion?: string | null
    estado?: string
    creadoEn?: Date | string
    responsable?: UsuarioCreateNestedOneWithoutTareasInput
  }

  export type TareaUncheckedCreateWithoutViajeInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    estado?: string
    responsableId?: number | null
    creadoEn?: Date | string
  }

  export type TareaCreateOrConnectWithoutViajeInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutViajeInput, TareaUncheckedCreateWithoutViajeInput>
  }

  export type TareaCreateManyViajeInputEnvelope = {
    data: TareaCreateManyViajeInput | TareaCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type GastoCreateWithoutViajeInput = {
    monto: number
    categoria?: string | null
    descripcion?: string | null
    creadoEn?: Date | string
    pagadoPor: UsuarioCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateWithoutViajeInput = {
    id?: number
    monto: number
    categoria?: string | null
    descripcion?: string | null
    pagadoPorId: number
    creadoEn?: Date | string
  }

  export type GastoCreateOrConnectWithoutViajeInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutViajeInput, GastoUncheckedCreateWithoutViajeInput>
  }

  export type GastoCreateManyViajeInputEnvelope = {
    data: GastoCreateManyViajeInput | GastoCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type ChatMensajeCreateWithoutViajeInput = {
    contenido: string
    enviadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutMensajesInput
  }

  export type ChatMensajeUncheckedCreateWithoutViajeInput = {
    id?: number
    contenido: string
    usuarioId: number
    enviadoEn?: Date | string
  }

  export type ChatMensajeCreateOrConnectWithoutViajeInput = {
    where: ChatMensajeWhereUniqueInput
    create: XOR<ChatMensajeCreateWithoutViajeInput, ChatMensajeUncheckedCreateWithoutViajeInput>
  }

  export type ChatMensajeCreateManyViajeInputEnvelope = {
    data: ChatMensajeCreateManyViajeInput | ChatMensajeCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type ItinerarioEventoCreateWithoutViajeInput = {
    titulo: string
    descripcion?: string | null
    fechaHora: Date | string
  }

  export type ItinerarioEventoUncheckedCreateWithoutViajeInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    fechaHora: Date | string
  }

  export type ItinerarioEventoCreateOrConnectWithoutViajeInput = {
    where: ItinerarioEventoWhereUniqueInput
    create: XOR<ItinerarioEventoCreateWithoutViajeInput, ItinerarioEventoUncheckedCreateWithoutViajeInput>
  }

  export type ItinerarioEventoCreateManyViajeInputEnvelope = {
    data: ItinerarioEventoCreateManyViajeInput | ItinerarioEventoCreateManyViajeInput[]
    skipDuplicates?: boolean
  }

  export type MiembroViajeUpsertWithWhereUniqueWithoutViajeInput = {
    where: MiembroViajeWhereUniqueInput
    update: XOR<MiembroViajeUpdateWithoutViajeInput, MiembroViajeUncheckedUpdateWithoutViajeInput>
    create: XOR<MiembroViajeCreateWithoutViajeInput, MiembroViajeUncheckedCreateWithoutViajeInput>
  }

  export type MiembroViajeUpdateWithWhereUniqueWithoutViajeInput = {
    where: MiembroViajeWhereUniqueInput
    data: XOR<MiembroViajeUpdateWithoutViajeInput, MiembroViajeUncheckedUpdateWithoutViajeInput>
  }

  export type MiembroViajeUpdateManyWithWhereWithoutViajeInput = {
    where: MiembroViajeScalarWhereInput
    data: XOR<MiembroViajeUpdateManyMutationInput, MiembroViajeUncheckedUpdateManyWithoutViajeInput>
  }

  export type TareaUpsertWithWhereUniqueWithoutViajeInput = {
    where: TareaWhereUniqueInput
    update: XOR<TareaUpdateWithoutViajeInput, TareaUncheckedUpdateWithoutViajeInput>
    create: XOR<TareaCreateWithoutViajeInput, TareaUncheckedCreateWithoutViajeInput>
  }

  export type TareaUpdateWithWhereUniqueWithoutViajeInput = {
    where: TareaWhereUniqueInput
    data: XOR<TareaUpdateWithoutViajeInput, TareaUncheckedUpdateWithoutViajeInput>
  }

  export type TareaUpdateManyWithWhereWithoutViajeInput = {
    where: TareaScalarWhereInput
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyWithoutViajeInput>
  }

  export type GastoUpsertWithWhereUniqueWithoutViajeInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutViajeInput, GastoUncheckedUpdateWithoutViajeInput>
    create: XOR<GastoCreateWithoutViajeInput, GastoUncheckedCreateWithoutViajeInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutViajeInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutViajeInput, GastoUncheckedUpdateWithoutViajeInput>
  }

  export type GastoUpdateManyWithWhereWithoutViajeInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutViajeInput>
  }

  export type ChatMensajeUpsertWithWhereUniqueWithoutViajeInput = {
    where: ChatMensajeWhereUniqueInput
    update: XOR<ChatMensajeUpdateWithoutViajeInput, ChatMensajeUncheckedUpdateWithoutViajeInput>
    create: XOR<ChatMensajeCreateWithoutViajeInput, ChatMensajeUncheckedCreateWithoutViajeInput>
  }

  export type ChatMensajeUpdateWithWhereUniqueWithoutViajeInput = {
    where: ChatMensajeWhereUniqueInput
    data: XOR<ChatMensajeUpdateWithoutViajeInput, ChatMensajeUncheckedUpdateWithoutViajeInput>
  }

  export type ChatMensajeUpdateManyWithWhereWithoutViajeInput = {
    where: ChatMensajeScalarWhereInput
    data: XOR<ChatMensajeUpdateManyMutationInput, ChatMensajeUncheckedUpdateManyWithoutViajeInput>
  }

  export type ItinerarioEventoUpsertWithWhereUniqueWithoutViajeInput = {
    where: ItinerarioEventoWhereUniqueInput
    update: XOR<ItinerarioEventoUpdateWithoutViajeInput, ItinerarioEventoUncheckedUpdateWithoutViajeInput>
    create: XOR<ItinerarioEventoCreateWithoutViajeInput, ItinerarioEventoUncheckedCreateWithoutViajeInput>
  }

  export type ItinerarioEventoUpdateWithWhereUniqueWithoutViajeInput = {
    where: ItinerarioEventoWhereUniqueInput
    data: XOR<ItinerarioEventoUpdateWithoutViajeInput, ItinerarioEventoUncheckedUpdateWithoutViajeInput>
  }

  export type ItinerarioEventoUpdateManyWithWhereWithoutViajeInput = {
    where: ItinerarioEventoScalarWhereInput
    data: XOR<ItinerarioEventoUpdateManyMutationInput, ItinerarioEventoUncheckedUpdateManyWithoutViajeInput>
  }

  export type ItinerarioEventoScalarWhereInput = {
    AND?: ItinerarioEventoScalarWhereInput | ItinerarioEventoScalarWhereInput[]
    OR?: ItinerarioEventoScalarWhereInput[]
    NOT?: ItinerarioEventoScalarWhereInput | ItinerarioEventoScalarWhereInput[]
    id?: IntFilter<"ItinerarioEvento"> | number
    titulo?: StringFilter<"ItinerarioEvento"> | string
    descripcion?: StringNullableFilter<"ItinerarioEvento"> | string | null
    fechaHora?: DateTimeFilter<"ItinerarioEvento"> | Date | string
    viajeId?: IntFilter<"ItinerarioEvento"> | number
  }

  export type UsuarioCreateWithoutViajesInput = {
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    tareas?: TareaCreateNestedManyWithoutResponsableInput
    gastos?: GastoCreateNestedManyWithoutPagadoPorInput
    mensajes?: ChatMensajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutViajesInput = {
    id?: number
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    tareas?: TareaUncheckedCreateNestedManyWithoutResponsableInput
    gastos?: GastoUncheckedCreateNestedManyWithoutPagadoPorInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutViajesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
  }

  export type ViajeCreateWithoutMiembrosInput = {
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    tareas?: TareaCreateNestedManyWithoutViajeInput
    gastos?: GastoCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutMiembrosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    tareas?: TareaUncheckedCreateNestedManyWithoutViajeInput
    gastos?: GastoUncheckedCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutMiembrosInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutMiembrosInput, ViajeUncheckedCreateWithoutMiembrosInput>
  }

  export type UsuarioUpsertWithoutViajesInput = {
    update: XOR<UsuarioUpdateWithoutViajesInput, UsuarioUncheckedUpdateWithoutViajesInput>
    create: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutViajesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutViajesInput, UsuarioUncheckedUpdateWithoutViajesInput>
  }

  export type UsuarioUpdateWithoutViajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tareas?: TareaUpdateManyWithoutResponsableNestedInput
    gastos?: GastoUpdateManyWithoutPagadoPorNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutViajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tareas?: TareaUncheckedUpdateManyWithoutResponsableNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutPagadoPorNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ViajeUpsertWithoutMiembrosInput = {
    update: XOR<ViajeUpdateWithoutMiembrosInput, ViajeUncheckedUpdateWithoutMiembrosInput>
    create: XOR<ViajeCreateWithoutMiembrosInput, ViajeUncheckedCreateWithoutMiembrosInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutMiembrosInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutMiembrosInput, ViajeUncheckedUpdateWithoutMiembrosInput>
  }

  export type ViajeUpdateWithoutMiembrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tareas?: TareaUpdateManyWithoutViajeNestedInput
    gastos?: GastoUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutMiembrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    tareas?: TareaUncheckedUpdateManyWithoutViajeNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type UsuarioCreateWithoutTareasInput = {
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeCreateNestedManyWithoutUsuarioInput
    gastos?: GastoCreateNestedManyWithoutPagadoPorInput
    mensajes?: ChatMensajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTareasInput = {
    id?: number
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeUncheckedCreateNestedManyWithoutUsuarioInput
    gastos?: GastoUncheckedCreateNestedManyWithoutPagadoPorInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTareasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
  }

  export type ViajeCreateWithoutTareasInput = {
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeCreateNestedManyWithoutViajeInput
    gastos?: GastoCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutTareasInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeUncheckedCreateNestedManyWithoutViajeInput
    gastos?: GastoUncheckedCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutTareasInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutTareasInput, ViajeUncheckedCreateWithoutTareasInput>
  }

  export type UsuarioUpsertWithoutTareasInput = {
    update: XOR<UsuarioUpdateWithoutTareasInput, UsuarioUncheckedUpdateWithoutTareasInput>
    create: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTareasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTareasInput, UsuarioUncheckedUpdateWithoutTareasInput>
  }

  export type UsuarioUpdateWithoutTareasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUpdateManyWithoutUsuarioNestedInput
    gastos?: GastoUpdateManyWithoutPagadoPorNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTareasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUncheckedUpdateManyWithoutUsuarioNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutPagadoPorNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ViajeUpsertWithoutTareasInput = {
    update: XOR<ViajeUpdateWithoutTareasInput, ViajeUncheckedUpdateWithoutTareasInput>
    create: XOR<ViajeCreateWithoutTareasInput, ViajeUncheckedCreateWithoutTareasInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutTareasInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutTareasInput, ViajeUncheckedUpdateWithoutTareasInput>
  }

  export type ViajeUpdateWithoutTareasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUpdateManyWithoutViajeNestedInput
    gastos?: GastoUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutTareasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUncheckedUpdateManyWithoutViajeNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type UsuarioCreateWithoutGastosInput = {
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeCreateNestedManyWithoutUsuarioInput
    tareas?: TareaCreateNestedManyWithoutResponsableInput
    mensajes?: ChatMensajeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGastosInput = {
    id?: number
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeUncheckedCreateNestedManyWithoutUsuarioInput
    tareas?: TareaUncheckedCreateNestedManyWithoutResponsableInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGastosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
  }

  export type ViajeCreateWithoutGastosInput = {
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeCreateNestedManyWithoutViajeInput
    tareas?: TareaCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutGastosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeUncheckedCreateNestedManyWithoutViajeInput
    tareas?: TareaUncheckedCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutGastosInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutGastosInput, ViajeUncheckedCreateWithoutGastosInput>
  }

  export type UsuarioUpsertWithoutGastosInput = {
    update: XOR<UsuarioUpdateWithoutGastosInput, UsuarioUncheckedUpdateWithoutGastosInput>
    create: XOR<UsuarioCreateWithoutGastosInput, UsuarioUncheckedCreateWithoutGastosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGastosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGastosInput, UsuarioUncheckedUpdateWithoutGastosInput>
  }

  export type UsuarioUpdateWithoutGastosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUpdateManyWithoutUsuarioNestedInput
    tareas?: TareaUpdateManyWithoutResponsableNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUncheckedUpdateManyWithoutUsuarioNestedInput
    tareas?: TareaUncheckedUpdateManyWithoutResponsableNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ViajeUpsertWithoutGastosInput = {
    update: XOR<ViajeUpdateWithoutGastosInput, ViajeUncheckedUpdateWithoutGastosInput>
    create: XOR<ViajeCreateWithoutGastosInput, ViajeUncheckedCreateWithoutGastosInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutGastosInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutGastosInput, ViajeUncheckedUpdateWithoutGastosInput>
  }

  export type ViajeUpdateWithoutGastosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUpdateManyWithoutViajeNestedInput
    tareas?: TareaUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUncheckedUpdateManyWithoutViajeNestedInput
    tareas?: TareaUncheckedUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type UsuarioCreateWithoutMensajesInput = {
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeCreateNestedManyWithoutUsuarioInput
    tareas?: TareaCreateNestedManyWithoutResponsableInput
    gastos?: GastoCreateNestedManyWithoutPagadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesInput = {
    id?: number
    nombre: string
    email: string
    password: string
    creadoEn?: Date | string
    viajes?: MiembroViajeUncheckedCreateNestedManyWithoutUsuarioInput
    tareas?: TareaUncheckedCreateNestedManyWithoutResponsableInput
    gastos?: GastoUncheckedCreateNestedManyWithoutPagadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
  }

  export type ViajeCreateWithoutMensajesInput = {
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeCreateNestedManyWithoutViajeInput
    tareas?: TareaCreateNestedManyWithoutViajeInput
    gastos?: GastoCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutMensajesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeUncheckedCreateNestedManyWithoutViajeInput
    tareas?: TareaUncheckedCreateNestedManyWithoutViajeInput
    gastos?: GastoUncheckedCreateNestedManyWithoutViajeInput
    itinerario?: ItinerarioEventoUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutMensajesInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutMensajesInput, ViajeUncheckedCreateWithoutMensajesInput>
  }

  export type UsuarioUpsertWithoutMensajesInput = {
    update: XOR<UsuarioUpdateWithoutMensajesInput, UsuarioUncheckedUpdateWithoutMensajesInput>
    create: XOR<UsuarioCreateWithoutMensajesInput, UsuarioUncheckedCreateWithoutMensajesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensajesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensajesInput, UsuarioUncheckedUpdateWithoutMensajesInput>
  }

  export type UsuarioUpdateWithoutMensajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUpdateManyWithoutUsuarioNestedInput
    tareas?: TareaUpdateManyWithoutResponsableNestedInput
    gastos?: GastoUpdateManyWithoutPagadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: MiembroViajeUncheckedUpdateManyWithoutUsuarioNestedInput
    tareas?: TareaUncheckedUpdateManyWithoutResponsableNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutPagadoPorNestedInput
  }

  export type ViajeUpsertWithoutMensajesInput = {
    update: XOR<ViajeUpdateWithoutMensajesInput, ViajeUncheckedUpdateWithoutMensajesInput>
    create: XOR<ViajeCreateWithoutMensajesInput, ViajeUncheckedCreateWithoutMensajesInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutMensajesInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutMensajesInput, ViajeUncheckedUpdateWithoutMensajesInput>
  }

  export type ViajeUpdateWithoutMensajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUpdateManyWithoutViajeNestedInput
    tareas?: TareaUpdateManyWithoutViajeNestedInput
    gastos?: GastoUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUncheckedUpdateManyWithoutViajeNestedInput
    tareas?: TareaUncheckedUpdateManyWithoutViajeNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutViajeNestedInput
    itinerario?: ItinerarioEventoUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeCreateWithoutItinerarioInput = {
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeCreateNestedManyWithoutViajeInput
    tareas?: TareaCreateNestedManyWithoutViajeInput
    gastos?: GastoCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutItinerarioInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    fechaInicio?: Date | string | null
    fechaFin?: Date | string | null
    creadoEn?: Date | string
    miembros?: MiembroViajeUncheckedCreateNestedManyWithoutViajeInput
    tareas?: TareaUncheckedCreateNestedManyWithoutViajeInput
    gastos?: GastoUncheckedCreateNestedManyWithoutViajeInput
    mensajes?: ChatMensajeUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutItinerarioInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutItinerarioInput, ViajeUncheckedCreateWithoutItinerarioInput>
  }

  export type ViajeUpsertWithoutItinerarioInput = {
    update: XOR<ViajeUpdateWithoutItinerarioInput, ViajeUncheckedUpdateWithoutItinerarioInput>
    create: XOR<ViajeCreateWithoutItinerarioInput, ViajeUncheckedCreateWithoutItinerarioInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutItinerarioInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutItinerarioInput, ViajeUncheckedUpdateWithoutItinerarioInput>
  }

  export type ViajeUpdateWithoutItinerarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUpdateManyWithoutViajeNestedInput
    tareas?: TareaUpdateManyWithoutViajeNestedInput
    gastos?: GastoUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutItinerarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroViajeUncheckedUpdateManyWithoutViajeNestedInput
    tareas?: TareaUncheckedUpdateManyWithoutViajeNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutViajeNestedInput
    mensajes?: ChatMensajeUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type MiembroViajeCreateManyUsuarioInput = {
    id?: number
    viajeId: number
    rol?: string
  }

  export type TareaCreateManyResponsableInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    estado?: string
    viajeId: number
    creadoEn?: Date | string
  }

  export type GastoCreateManyPagadoPorInput = {
    id?: number
    monto: number
    categoria?: string | null
    descripcion?: string | null
    viajeId: number
    creadoEn?: Date | string
  }

  export type ChatMensajeCreateManyUsuarioInput = {
    id?: number
    contenido: string
    viajeId: number
    enviadoEn?: Date | string
  }

  export type MiembroViajeUpdateWithoutUsuarioInput = {
    rol?: StringFieldUpdateOperationsInput | string
    viaje?: ViajeUpdateOneRequiredWithoutMiembrosNestedInput
  }

  export type MiembroViajeUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type MiembroViajeUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    viajeId?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type TareaUpdateWithoutResponsableInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viaje?: ViajeUpdateOneRequiredWithoutTareasNestedInput
  }

  export type TareaUncheckedUpdateWithoutResponsableInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TareaUncheckedUpdateManyWithoutResponsableInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUpdateWithoutPagadoPorInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viaje?: ViajeUpdateOneRequiredWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateWithoutPagadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUncheckedUpdateManyWithoutPagadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    viajeId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMensajeUpdateWithoutUsuarioInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    viaje?: ViajeUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type ChatMensajeUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    viajeId?: IntFieldUpdateOperationsInput | number
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMensajeUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    viajeId?: IntFieldUpdateOperationsInput | number
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiembroViajeCreateManyViajeInput = {
    id?: number
    usuarioId: number
    rol?: string
  }

  export type TareaCreateManyViajeInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    estado?: string
    responsableId?: number | null
    creadoEn?: Date | string
  }

  export type GastoCreateManyViajeInput = {
    id?: number
    monto: number
    categoria?: string | null
    descripcion?: string | null
    pagadoPorId: number
    creadoEn?: Date | string
  }

  export type ChatMensajeCreateManyViajeInput = {
    id?: number
    contenido: string
    usuarioId: number
    enviadoEn?: Date | string
  }

  export type ItinerarioEventoCreateManyViajeInput = {
    id?: number
    titulo: string
    descripcion?: string | null
    fechaHora: Date | string
  }

  export type MiembroViajeUpdateWithoutViajeInput = {
    rol?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutViajesNestedInput
  }

  export type MiembroViajeUncheckedUpdateWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type MiembroViajeUncheckedUpdateManyWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type TareaUpdateWithoutViajeInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: UsuarioUpdateOneWithoutTareasNestedInput
  }

  export type TareaUncheckedUpdateWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsableId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TareaUncheckedUpdateManyWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    responsableId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUpdateWithoutViajeInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    pagadoPor?: UsuarioUpdateOneRequiredWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    pagadoPorId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastoUncheckedUpdateManyWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    pagadoPorId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMensajeUpdateWithoutViajeInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type ChatMensajeUncheckedUpdateWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMensajeUncheckedUpdateManyWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enviadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItinerarioEventoUpdateWithoutViajeInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItinerarioEventoUncheckedUpdateWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItinerarioEventoUncheckedUpdateManyWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
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