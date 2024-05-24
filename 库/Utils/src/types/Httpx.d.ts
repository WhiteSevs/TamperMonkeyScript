/**
 * 状态码
 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
 */
type HttpxStatus =
	| 100
	| 101
	| 102
	| 103
	| 200
	| 201
	| 202
	| 203
	| 204
	| 205
	| 206
	| 207
	| 208
	| 300
	| 301
	| 302
	| 304
	| 307
	| 308
	| 401
	| 402
	| 403
	| 404
	| 405
	| 406
	| 407
	| 408
	| 409
	| 410
	| 411
	| 412
	| 413
	| 414
	| 415
	| 416
	| 417
	| 418
	| 421
	| 422
	| 423
	| 424
	| 425
	| 426
	| 428
	| 429
	| 431
	| 451
	| 500
	| 501
	| 502
	| 503
	| 504
	| 505
	| 506
	| 507
	| 508
	| 510
	| 511;

/**
 * HTTP 请求方法
 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods
 */
type HttpxMethod =
	| "GET"
	| "HEAD"
	| "POST"
	| "PUT"
	| "DELETE"
	| "CONNECT"
	| "OPTIONS"
	| "TRACE"
	| "PATCH";

type HttpxRedirect = "follow" | "error" | "manual";

type HttpxBinary =
	| Uint8ArrayConstructor
	| ArrayBufferConstructor
	| DataViewConstructor
	| Blob
	| File;

type HttpxResponseCallBackType = "onload" | "onerror" | "ontimeout" | "onabort";

type HttpxResponseMap = {
	arraybuffer: ArrayBuffer;
	blob: Blob;
	json: UtilsNestedObjectWithToString;
	stream: ReadableStream<string>;
	document: Document;
	undefined: string;
};

/**
 * headers的配置
 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers
 */
declare interface HttpxHeaders {
	/**
	 * Accept 请求头用来告知（服务器）客户端可以处理的内容类型，这种内容类型用MIME 类型来表示。
	 * 借助内容协商机制, 服务器可以从诸多备选项中选择一项进行应用，并使用 Content-Type 应答头通知客户端它的选择。
	 * 浏览器会基于请求的上下文来为这个请求头设置合适的值，比如获取一个 CSS 层叠样式表时值与获取图片、视频或脚本文件时的值是不同的。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept
	 */
	Accept?: string;
	/**
	 * 头由服务器设置，以指定客户端应在后续请求中应包含哪些客户端 Client Hints (en-US) 提示头
	 * + 备注： Client Hints (en-US) 只能在安全源（通过 TLS）上访问。所有安全的请求都应该持久化 Accept-CH 和 Accept-CH-Lifetime 头，以确保 Client Hints (en-US) 可靠地发送。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH
	 * @deprecated
	 */
	"Accept-CH"?: string;
	/**
	 * 服务器设置 Accept-CH-Lifetime 标头以指定Accept-CH标头值的持久性，该值指定客户端应在后续请求中包括哪些Client Hints (en-US)标头。
	 * + 备注： Client Hints (en-US)只能在安全源（通过 TLS）上访问。所有安全的请求都应该持久化 Accept-CH 和 Accept-CH-Lifetime 头，以确保Client Hints (en-US)可靠地发送。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH-Lifetime
	 * @deprecated
	 */
	"Accept-CH-Lifetime"?: string;
	/**
	 * Accept-Charset 请求头用来告知（服务器）客户端可以处理的字符集类型。
	 * 借助内容协商机制，服务器可以从诸多备选项中选择一项进行应用，并使用Content-Type 应答头通知客户端它的选择。
	 * 浏览器通常不会设置此项值，因为每种内容类型的默认值通常都是正确的，但是发送它会更有利于识别。
	 * 如果服务器不能提供任何可以匹配的字符集的版本，那么理论上来说应该返回一个 406（Not Acceptable，不被接受）的错误码。
	 * 但是为了更好的用户体验，这种方法很少采用，取而代之的是将其忽略。
	 * + 备注： 在早期版本的 HTTP/1.1 协议中，规定了一个默认的字符集 (ISO-8859-1)。但是现在情况不同了，目前每一种内容类型都有自己的默认字符集。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Charset
	 */
	"Accept-Charset"?: string;
	/**
	 * HTTP 请求头 Accept-Encoding 会将客户端能够理解的内容编码方式——通常是某种压缩算法——进行通知（给服务端）。
	 * 通过内容协商的方式，服务端会选择一个客户端提议的方式，使用并在响应头 Content-Encoding 中通知客户端该选择。
	 * 即使客户端和服务器都支持相同的压缩算法，在 identity 指令可以被接受的情况下，服务器也可以选择对响应主体不进行压缩。导致这种情况出现的两种常见的情形是：
	 * + 要发送的数据已经经过压缩，再次进行压缩不会导致被传输的数据量更小。一些图像格式的文件会存在这种情况；
	 * + 服务器超载，无法承受压缩需求导致的计算开销。通常，如果服务器使用超过 80% 的计算能力，微软建议不要压缩。
	 *
	 * 只要 identity——表示不需要进行任何编码——没有被明确禁止使用（通过 identity;q=0 指令或是 *;q=0 而没有为 identity 明确指定权重值），则服务器禁止返回表示客户端错误的 406 Not Acceptable 响应。
	 * + 备注： IANA 维护了一个完整的官方支持的编码方式列表。
	 *         另外两种编码方式——bzip 和 bzip2——有时候也会用到，尽管并未在标准中出现。这两种方式实现了 UNIX 系统上的同名程序所采用的算法。注意第一种由于专利许可问题已经停止维护。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Encoding
	 */
	"Accept-Encoding"?: string;
	/**
	 * Accept-Language 请求头允许客户端声明它可以理解的自然语言，以及优先选择的区域方言。
	 * 借助内容协商机制，服务器可以从诸多备选项中选择一项进行应用，并使用 Content-Language 应答头通知客户端它的选择。
	 * 浏览器会基于其用户界面语言为这个请求头设置合适的值，即便是用户可以进行修改，但是这种情况极少发生（因为可增加指纹独特性，通常也不被鼓励）
	 * （译者注：通常只在测试网站的多语言支持时手动修改它；或为进一步减少指纹独特性，改为最常见的英文）。
	 * 当服务器无法通过其他方式来确定应当使用的语言时——例如某一特定的 URL，这是用户明确指定的——这个请求头可以用作提示。建议服务器端永远不要覆盖明确指定的信息。
	 * Accept-Language 消息头的内容通常不在用户的掌控之中（例如在国外旅行时到提供网络服务的场所上网）；
	 * 另外用户可能会想要浏览非本地用户界面语言的页面。
	 * 如果服务器不能提供任何可以匹配的语言的版本，那么理论上来说应该返回一个 406（Not Acceptable，不被接受）的错误码。
	 * 但是为了更好的用户体验，这种方法很少被采用，取而代之的是将其忽略。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language
	 *
	 */
	"Accept-Language"?: string;
	/**
	 * 服务器使用 HTTP 响应头 Accept-Patch 通知浏览器请求的媒体类型 (media-type) 可以被服务器理解。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Patch
	 */
	"Accept-Patch"?: string;
	/**
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Post
	 */
	"Accept-Post"?: string;
	/**
	 * 服务器使用 HTTP 响应头 Accept-Ranges 标识自身支持范围请求 (partial requests)。字段的具体值用于定义范围请求的单位。
	 * 当浏览器发现Accept-Ranges头时，可以尝试继续中断了的下载，而不是重新开始。
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges
	 */
	"Accept-Ranges"?: "bytes" | "none";
	/**
	 * Access-Control-Allow-Credentials 响应头用于在请求要求包含 credentials（Request.credentials 的值为 include）时，告知浏览器是否可以将对请求的响应暴露给前端 JavaScript 代码。
	 * 当请求的 credentials 模式（Request.credentials）为 include 时，浏览器仅在响应标头 Access-Control-Allow-Credentials 的值为 true 的情况下将响应暴露给前端的 JavaScript 代码。
	 * Credentials 可以是 cookies、authorization headers 或 TLS client certificates。
	 * 当作为对预检请求的响应的一部分时，这能表示是否真正的请求可以使用 credentials。
	 * 注意简单的GET 请求没有预检，所以若一个对资源的请求带了 credentials，如果这个响应头没有随资源返回，响应就会被浏览器忽视，不会返回到 web 内容。
	 * Access-Control-Allow-Credentials 标头需要与 XMLHttpRequest.withCredentials 或 Fetch API 的 Request() 构造函数中的 credentials 选项结合使用。
	 * Credentials 必须在前后端都被配置（即 Access-Control-Allow-Credentials header 和 XHR 或 Fetch request 中都要配置）才能使带 credentials 的 CORS 请求成功。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
	 */
	"Access-Control-Allow-Credentials"?: "true";
	/**
	 * 响应首部 Access-Control-Allow-Headers 用于 preflight request（预检请求）中，列出了将会在正式请求的 Access-Control-Request-Headers 字段中出现的首部信息。
	 * 简单首部，如 simple headers、Accept、Accept-Language、Content-Language、Content-Type（只限于解析后的值为 application/x-www-form-urlencoded、multipart/form-data 或 text/plain 三种 MIME 类型（不包括参数）），它们始终是被支持的，不需要在这个首部特意列出。
	 * 如果请求中含有 Access-Control-Request-Headers 字段，那么这个首部是必要的。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
	 */
	"Access-Control-Allow-Headers"?: string;
	/**
	 * 响应首部 Access-Control-Allow-Methods 在对 preflight request.（预检请求）的应答中明确了客户端所要访问的资源允许使用的方法或方法列表。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
	 */
	"Access-Control-Allow-Methods"?: string;
	/**
	 * Access-Control-Allow-Origin 响应标头指定了该响应的资源是否被允许与给定的来源（origin）共享。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
	 */
	"Access-Control-Allow-Origin"?: "*" | "<origin>" | "null";
	/**
	 * 响应标头 Access-Control-Expose-Headers 允许服务器指示那些响应标头可以暴露给浏览器中运行的脚本，以响应跨源请求。
	 * 默认情况下，仅暴露 CORS 安全列表的响应标头 (en-US)。
	 * 如果想要让客户端可以访问到其他的标头，服务器必须将它们在 Access-Control-Expose-Headers 里面列出来。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
	 */
	"Access-Control-Expose-Headers"?: string;
	/**
	 * The Access-Control-Max-Age 这个响应头表示 preflight request （预检请求）的返回结果（即 Access-Control-Allow-Methods 和Access-Control-Allow-Headers 提供的信息）可以被缓存多久。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Max-Age
	 */
	"Access-Control-Max-Age"?: string;
	/**
	 * 请求头 Access-Control-Request-Headers 出现于 preflight request（预检请求）中，用于通知服务器在真正的请求中会采用哪些请求头。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers
	 */
	"Access-Control-Request-Headers"?: string;
	/**
	 * 请求头 Access-Control-Request-Method 出现于 preflight request（预检请求）中，用于通知服务器在真正的请求中会采用哪种 HTTP 方法。因为预检请求所使用的方法总是 OPTIONS ，与实际请求所使用的方法不一样，所以这个请求头是必要的。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method
	 */
	"Access-Control-Request-Method"?: HttpxMethod;
	/**
	 * Age 消息头里包含对象在缓存代理中存贮的时长，以秒为单位。
	 * Age 的值通常接近于 0。表示此对象刚刚从原始服务器获取不久；其他的值则是表示代理服务器当前的系统时间与此应答中的通用头 Date 的值之差。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Age
	 */
	Age?: string;
	/**
	 * Allow 首部字段用于枚举资源所支持的 HTTP 方法的集合。
	 * 若服务器返回状态码 405 Method Not Allowed，则该首部字段亦需要同时返回给客户端。
	 * 如果 Allow 首部字段的值为空，说明资源不接受使用任何 HTTP 方法的请求。
	 * 这是可能的，比如服务器需要临时禁止对资源的任何访问。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Allow
	 */
	Allow?: string;
	/**
	 * Alt-Svc 全称为“Alternative-Service”，直译为“备选服务”。
	 * 该头部列举了当前站点备选的访问方式列表。一般用于在提供“QUIC”等新兴协议支持的同时，实现向下兼容。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Svc
	 */
	"Alt-Svc"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Used
	 */
	"Alt-Used"?: string;
	/**
	 * HTTP Authorization 请求标头用于提供服务器验证用户代理身份的凭据，允许访问受保护的资源。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization
	 */
	Authorization?: string;
	/**
	 * Cache-Control 通用消息头字段，被用于在 http 请求和响应中，通过指定指令来实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control
	 */
	"Cache-Control"?: string;
	/**
	 * Clear-Site-Data 响应头，表示清除当前请求网站有关的浏览器数据（cookie，存储，缓存）。它让 Web 开发人员对浏览器本地存储的数据有更多控制能力。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Clear-Site-Data
	 */
	"Clear-Site-Data"?: string;
	/**
	 * Connection 通用标头控制网络连接在当前会话完成后是否仍然保持打开状态。如果发送的值是 keep-alive，则连接是持久的，不会关闭，允许对同一服务器进行后续请求。
	 * 除去标准的逐段传输（hop-by-hop）头（Keep-Alive, Transfer-Encoding, TE, Connection, Trailer, Upgrade (en-US), Proxy-Authorization and Proxy-Authenticate），任何逐段传输头都需要在 Connection 头中列出，这样才能让第一个代理知道必须处理它们且不转发这些头。
	 * 标准的逐段传输头也可以列出（常见的例子是 Keep-Alive，但这不是必须的）。
	 * + 警告： 在 HTTP/2 和 HTTP/3 中，禁止使用特定于连接的标头字段，如 Connection 和 Keep-Alive。
	 *   Chrome 和 Firefox 会在 HTTP/2 响应中忽略它们，但 Safari 遵循 HTTP/2 规范要求，不会加载包含这些字段的任何响应。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection
	 * @deprecated
	 */
	Connection?: "keep-alive" | "close";
	/**
	 * 在常规的 HTTP 应答中，Content-Disposition 响应标头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。
	 *
	 * 在 multipart/form-data 类型的应答消息体中，Content-Disposition 通用标头可以被用在 multipart 消息体的子部分中，用来给出其对应字段的相关信息。
	 * 各个子部分由在 Content-Type 中定义的边界（boundary）分隔。用在消息体自身则无实际意义。
	 *
	 * Content-Disposition 标头最初是在 MIME 标准中定义的，HTTP 表单及 POST 请求只用到了其所有参数的一个子集。
	 * 只有 form-data 以及可选的 name 和 filename 三个参数可以应用在 HTTP 上下文中。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition
	 */
	"Content-Disposition"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-DPR
	 * @deprecated
	 */
	"Content-DPR"?: string;
	/**
	 * 实体消息首部 Content-Encoding 列出了对当前实体消息（消息荷载）应用的任何编码类型，以及编码的顺序。
	 * 它让接收者知道需要以何种顺序解码该实体消息才能获得原始荷载格式。
	 * Content-Encoding 主要用于在不丢失原媒体类型内容的情况下压缩消息数据。
	 *
	 * 请注意原始媒体/内容的类型通过 Content-Type 首部给出，而 Content-Encoding 应用于数据的表示，或“编码形式”。
	 * 如果原始媒体以某种方式编码（例如 zip 文件），则该信息不应该被包含在 Content-Encoding 首部内。
	 *
	 * 一般建议服务器应对数据尽可能地进行压缩，并在适当情况下对内容进行编码。
	 * 对一种压缩过的媒体类型如 zip 或 jpeg 进行额外的压缩并不合适，因为这反而有可能会使荷载增大。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Encoding
	 */
	"Content-Encoding"?: "gzip" | "compress" | "deflate" | "br";
	/**
	 * Content-Language 是一个 entity header（实体消息首部），用来说明访问者希望采用的语言或语言组合，这样的话用户就可以根据自己偏好的语言来定制不同的内容。
	 *
	 * 举个例子，假如设置了这样一条消息首部（ "Content-Language: de-DE" ），那么说明这份文件是为说德语的人提供的（当然这并不意味着文件本身就是用德语写的。
	 * 比如，它可能是为说德语的人开设的英语教程的一部分，也就是用英语写的）。
	 *
	 * 如果没有指明 Content-Language，那么默认地，文件内容是提供给所有语言的访问者使用的。
	 * 多个语言标签也是合法的，同样的，这个首部还可以用来描述不同媒体类型的文件，而不单单局限于文本型文档。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language
	 */
	"Content-Language"?: string;
	/**
	 * Content-Length 是一个实体消息首部，用来指明发送给接收方的消息主体的大小，即用十进制数字表示的八位元组的数目。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length
	 */
	"Content-Length"?: string;
	/**
	 * Content-Location 首部指定的是要返回的数据的地址选项。
	 * 最主要的用途是用来指定要访问的资源经过内容协商后的结果的 URL。
	 *
	 * Location 与 Content-Location是不同的，前者（Location ）指定的是一个重定向请求的目的地址（或者新创建的文件的 URL），而后者（ Content-Location）指向的是可供访问的资源的直接地址，不需要进行进一步的内容协商。
	 * Location 对应的是响应，而 Content-Location 对应的是要返回的实体。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Location
	 */
	"Content-Location"?: string;
	/**
	 * 在 HTTP 协议中，响应首部 Content-Range 显示的是一个数据片段在整个文件中的位置。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Range
	 */
	"Content-Range"?: string;
	/**
	 * HTTP 响应头 Content-Security-Policy 允许站点管理者控制用户代理能够为指定的页面加载哪些资源。
	 * 除了少数例外情况，设置的政策主要涉及指定服务器的源和脚本结束点。
	 * 这将帮助防止跨站脚本攻击（Cross-Site Script）（XSS (en-US)）。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy
	 */
	"Content-Security-Policy"?: string;
	/**
	 * HTTP **Content-Security-Policy-Report-Only**响应头允许 web 开发人员通过监测 (但不强制执行) 政策的影响来尝试政策。
	 * 这些违反报告由 JSON 文档组成通过一个 HTTP POST 请求发送到指定的 URI。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
	 */
	"Content-Security-Policy-Report-Only"?: string;
	/**
	 * Content-Type 实体头部用于指示资源的 MIME 类型 media type 。
	 *
	 * 在响应中，Content-Type 标头告诉客户端实际返回的内容的内容类型。
	 * 浏览器会在某些情况下进行 MIME 查找，并不一定遵循此标题的值;
	 * 为了防止这种行为，可以将标题 X-Content-Type-Options 设置为 nosniff
	 *
	 * 在请求中 (如POST 或 PUT)，客户端告诉服务器实际发送的数据类型。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type
	 */
	"Content-Type"?:
		| "text/html; charset=utf-8"
		| "multipart/form-data"
		| "application/x-www-form-urlencoded"
		| "application/json"
		| string;
	/**
	 * Cookie 是一个 HTTP 请求标头，其中含有先前由服务器通过 Set-Cookie 标头投放或通过 JavaScript 的 Document.cookie 方法设置，然后存储到客户端的 HTTP cookie 。
	 * 这个标头是可选的，而且可能会被忽略，例如在浏览器的隐私设置里面设置为禁用 cookie。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie
	 */
	Cookie?: string;
	/**
	 *
	 * + https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Critical-CH
	 * @deprecated
	 */
	"Critical-CH"?: string;
	/**
	 * HTTP Cross-Origin-Embedder-Policy (COEP) 响应标头可防止文档加载未明确授予文档权限 (通过 CORP (en-US) 或者 CORS) 的任何跨域资源。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
	 */
	"Cross-Origin-Embedder-Policy"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
	 */
	"Cross-Origin-Opener-Policy"?: string;
	/**
	 * + 备注： 由于Chrome 浏览器中的一个 Bug, 设置 Cross-Origin-Resource-Policy（跨域资源策略）会使文件下载失败：当从设置了 CORP 请求头的资源服务器下载资源时，浏览器会阻止用户使用“保存”或“另存为”按钮将文件保存到本地。在决定生产环境中是否使用这一特性（CORP）之前需要慎重考虑。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
	 */
	"Cross-Origin-Resource-Policy"?: string;
	/**
	 * Date 是一个通用首部，其中包含了报文创建的日期和时间。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Date
	 */
	Date?: string;
	/**
	 * Device-Memory 是一个跟 Device Memory API (en-US) 相关的请求头，它跟 Client Hints (en-US) 请求头的作用相似，用来表示客户端设备内存的近似大小。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Device-Memory
	 * @deprecated
	 */
	"Device-Memory"?: string;
	/**
	 * Digest 响应 HTTP 头提供了请求资源一个 摘要 。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Digest
	 */
	Digest?: string;
	/**
	 * navigator.doNotTrack
	 *
	 * 请求首部 DNT (Do Not Track) 表明了用户对于网站追踪的偏好。它允许用户指定自己是否更注重个人隐私还是定制化内容。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT
	 * + 0 表示用户愿意目标站点追踪用户个人信息。
	 * + 1 表示用户不愿意目标站点追踪用户个人信息。
	 * @deprecated
	 */
	DNT?: "0" | "1";
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Downlink
	 */
	Downlink?: string;
	/**
	 * **DPR**请求头是“ 客户端提示” (en-US)消息头，它代表客户端设备的像素比 (DPR)，该比例是与每个 CSS 像素相对应的物理设备像素的数量。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DPR
	 * @deprecated
	 */
	DPR?: string;
	/**
	 * Early-Data 头（header）由某个中间者设置来表示请求已在 TLS early data 中传送，且表示 某个中间者理解 425 (Too Early) 状态码。
	 * Early-Data 头（header）不由请求的发起者设置 (例如，浏览器)。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Early-Data
	 * @deprecated
	 */
	"Early-Data"?: "1";
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ECT
	 * @deprecated
	 */
	ECT?: string;
	/**
	 * ETag HTTP 响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web 服务器不需要发送完整的响应。
	 * 而如果内容发生了变化，使用 ETag 有助于防止资源的同时更新相互覆盖（“空中碰撞”）。
	 *
	 * 如果给定 URL 中的资源更改，则一定要生成新的 ETag 值。比较这些 ETag 能快速确定此资源是否变化。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag
	 */
	ETag?: string;
	/**
	 * Expect 是一个请求消息头，包含一个期望条件，表示服务器只有在满足此期望条件的情况下才能妥善地处理请求。
	 *
	 * 规范中只规定了一个期望条件，即 Expect: 100-continue, 对此服务器可以做出如下回应：
	 * + 100 如果消息头中的期望条件可以得到满足，使得请求可以顺利进行的话，
	 * + 417 (Expectation Failed) 如果服务器不能满足期望条件的话；也可以是其他任意表示客户端错误的状态码（4xx）。
	 *
	 * 例如，如果请求中 Content-Length 的值太大的话，可能会遭到服务器的拒绝。
	 *
	 * 常见的浏览器不会发送 Expect 消息头，但是其他类型的客户端如 cURL 默认会这么做。
	 *
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect
	 */
	Expect?: string;
	/**
	 * Expect-CT 标头允许站点选择性地报告和/或执行证书透明度（Certificate Transparency）要求，来防止错误签发的网站证书的使用不被察觉。
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect-CT
	 */
	"Expect-CT"?: string;
	/**
	 * Expires 响应头包含日期/时间，即在此时候之后，响应过期。
	 *
	 * 无效的日期，比如 0，代表着过去的日期，即该资源已经过期。
	 *
	 * 如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires
	 */
	Expires?: string;
	/**
	 * Forwarded 首部中包含了代理服务器的客户端的信息，即由于代理服务器在请求路径中的介入而被修改或丢失的信息。
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Forwarded
	 */
	Forwarded?: string;
	/**
	 * 请求首部 From 中包含一个电子邮箱地址，这个电子邮箱地址属于发送请求的用户代理的实际掌控者的人类用户。
	 *
	 * 如果你在运行一个机器人代理程序（比如爬虫），那么 Form 首部应该随请求一起发送，这样的话，在服务器遇到问题的时候，例如机器人代理发送了过量的、不希望收到的或者不合法的请求，站点管理员可以联系到你。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/From
	 */
	From?: string;
	/**
	 * Host 请求头指明了请求将要发送到的服务器主机名和端口号。
	 *
	 * 如果没有包含端口号，会自动使用被请求服务的默认端口（比如 HTTPS URL 使用 443 端口，HTTP URL 使用 80 端口）。
	 *
	 * 所有 HTTP/1.1 请求报文中必须包含一个Host头字段。对于缺少Host头或者含有超过一个Host头的 HTTP/1.1 请求，可能会收到400（Bad Request）状态码。
	 *
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Host
	 */
	Host?: string;
	/**
	 * 请求首部 If-Match 的使用表示这是一个条件请求。在请求方法为 GET 和 HEAD 的情况下，服务器仅在请求的资源满足此首部列出的 ETag值时才会返回资源。
	 * 而对于 PUT 或其他非安全方法来说，只有在满足条件的情况下才可以将资源上传。
	 *
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match
	 */
	"If-Match"?: string;
	/**
	 * If-Modified-Since 是一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200 。
	 * 如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的 304 响应，而在 Last-Modified 首部中会带有上次修改时间。
	 * 不同于 If-Unmodified-Since, If-Modified-Since 只可以用在 GET 或 HEAD 请求中。
	 *
	 * 当与 If-None-Match 一同出现时，它（If-Modified-Since）会被忽略掉，除非服务器不支持 If-None-Match。
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since
	 */
	"If-Modified-Since"?: string;
	/**
	 * If-None-Match 是一个条件式请求首部。
	 * 对于 GETGET 和 HEAD 请求方法来说，当且仅当服务器上没有任何资源的 ETag 属性值与这个首部中列出的相匹配的时候，服务器端才会返回所请求的资源，响应码为 200 。
	 * 对于其他方法来说，当且仅当最终确认没有已存在的资源的 ETag 属性值与这个首部中所列出的相匹配的时候，才会对请求进行相应的处理。
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match
	 */
	"If-None-Match"?: string;
	/**
	 * If-Range HTTP 请求头字段用来使得 Range 头字段在一定条件下起作用：
	 * 当字段值中的条件得到满足时，Range 头字段才会起作用，同时服务器回复206 部分内容状态码，以及**Range** 头字段请求的相应部分；
	 * 如果字段值中的条件没有得到满足，服务器将会返回 200 OK 状态码，并返回完整的请求资源。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range
	 */
	"If-Range"?: string;
	/**
	 * HTTP 协议中的 If-Unmodified-Since 消息头用于请求之中，使得当前请求成为条件式请求：
	 * 只有当资源在指定的时间之后没有进行过修改的情况下，服务器才会返回请求的资源，或是接受 POST 或其他 non-safe 方法的请求。
	 * 如果所请求的资源在指定的时间之后发生了修改，那么会返回 412 (Precondition Failed) 错误。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/
	 */
	"If-Unmodified-Since"?: string;
	/**
	 * Keep-Alive 是一个通用消息头，允许消息发送者暗示连接的状态，还可以用来设置超时时长和最大请求数。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Keep-Alive
	 */
	"Keep-Alive"?: string;
	/**
	 * 非标准的**Large-Allocation** 响应头部是用来告诉浏览器加载该页面可能需要申请大内存。当前只有 Firefox 实现该特性，但是对其他浏览器也无损害。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Large-Allocation
	 * @deprecated
	 */
	"Large-Allocation"?: string;
	/**
	 * Last-Modified 是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。
	 * 由于精确度比 ETag 要低，所以这是一个备用机制。包含有 If-Modified-Since 或 If-Unmodified-Since 首部的条件请求会使用这个字段。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified
	 */
	"Last-Modified"?: string;
	/**
	 * HTTP 实体报头 Link 提供了序列化 HTTP 头部链接的方法。
	 * 它在语义上与 HTML 元素 <link> 相等。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link
	 */
	Link?: string;
	/**
	 * Location 首部指定的是需要将页面重新定向至的地址。
	 * 一般在响应码为 3xx 的响应中才会有意义。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Location
	 */
	Location?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Max-Forwards
	 */
	"Max-Forwards"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/NEL
	 */
	NEL?: string;
	/**
	 * 请求标头 Origin 表示了请求的来源（协议、主机、端口）。
	 * 例如，如果一个用户代理需要请求一个页面中包含的资源，或者执行脚本中的 HTTP 请求（fetch），那么该页面的来源（origin）就可能被包含在这次请求中。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin
	 */
	Origin?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin-Agent-Cluster
	 */
	"Origin-Agent-Cluster"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy
	 */
	"Permissions-Policy"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Pragma
	 * @deprecated
	 */
	Pragma?: string;
	/**
	 * The HTTP Proxy-Authenticate 是一个响应首部，指定了获取 proxy server（代理服务器）上的资源访问权限而采用的身份验证方式。
	 * 代理服务器对请求进行验证，以便它进一步传递请求。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authenticate
	 */
	"Proxy-Authenticate"?: string;
	/**
	 * Proxy-Authorization 是一个请求首部，其中包含了用户代理提供给代理服务器的用于身份验证的凭证。
	 * 这个首部通常是在服务器返回了 407 Proxy Authentication Required 响应状态码及 Proxy-Authenticate 首部后发送的。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authorization
	 */
	"Proxy-Authorization"?: string;
	/**
	 * The Range 是一个请求首部，告知服务器返回文件的哪一部分。在一个 Range 首部中，可以一次性请求多个部分，服务器会以 multipart 文件的形式将其返回。
	 * 如果服务器返回的是范围响应，需要使用 206 Partial Content 状态码。
	 * 假如所请求的范围不合法，那么服务器会返回 416 Range Not Satisfiable 状态码，表示客户端错误。
	 * 服务器允许忽略 Range 首部，从而返回整个文件，状态码用 200 。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Range
	 */
	Range?: string;
	/**
	 * Referer 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。
	 * 服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer
	 */
	Referer?: string;
	/**
	 * Referrer-Policy 首部用来监管哪些访问来源信息——会在 Referer 中发送——应该被包含在生成的请求当中
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy
	 */
	"Referrer-Policy"?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	/**
	 * 在 HTTP 协议中，响应首部 Retry-After 表示用户代理需要等待多长时间之后才能继续发送请求。这个首部主要应用于以下两种场景：
	 * + 当与 503 (Service Unavailable，当前服务不存在) 响应一起发送的时候，表示服务下线的预期时长。
	 * + 当与重定向响应一起发送的时候，比如 301 (Moved Permanently，永久迁移)，表示用户代理在发送重定向请求之前需要等待的最短时间。
	 *
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Retry-After
	 */
	"Retry-After"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/RTT
	 * @deprecated
	 */
	RTT?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Save-Data
	 * @deprecated
	 */
	"Save-Data"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
	 * @deprecated
	 */
	"Sec-CH-Prefers-Color-Scheme"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
	 * @deprecated
	 */
	"Sec-CH-Prefers-Reduced-Motion"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency
	 * @deprecated
	 */
	"Sec-CH-Prefers-Reduced-Transparency"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA
	 * @deprecated
	 */
	"Sec-CH-UA"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Arch
	 * @deprecated
	 */
	"Sec-CH-UA-Arch"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness
	 * @deprecated
	 */
	"Sec-CH-UA-Bitness"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version
	 * @deprecated
	 */
	"Sec-CH-UA-Full-Version"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
	 * @deprecated
	 */
	"Sec-CH-UA-Full-Version-List"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile
	 * @deprecated
	 */
	"Sec-CH-UA-Mobile"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Model
	 * @deprecated
	 */
	"Sec-CH-UA-Model"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Platform
	 * @deprecated
	 */
	"Sec-CH-UA-Platform"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version
	 * @deprecated
	 */
	"Sec-CH-UA-Platform-Version"?: string;
	/**
	 * Sec-Fetch-Dest Fetch 元数据请求标头指示请求的目标，即数据的来源以及如何使用这些获取到的数据。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Dest
	 */
	"Sec-Fetch-Dest"?: string;
	/**
	 * Sec-Fetch-Mode 获取元数据标头表明了一个请求的模式。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Mode
	 */
	"Sec-Fetch-Mode"?: string;
	/**
	 * Sec-Fetch-Site 获取元数据标头表明了一个请求发起者的来源与目标资源来源之间的关系。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Site
	 */
	"Sec-Fetch-Site"?: string;
	/**
	 * Sec-Fetch-User 获取元数据标头表明了一个导航请求是否由用户激活触发。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-User
	 */
	"Sec-Fetch-User"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-GPC
	 * @deprecated
	 */
	"Sec-GPC"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Purpose
	 */
	"Sec-Purpose"?: string;
	/**
	 * Sec-WebSocket-Accept 头（header）用在 websocket 开放握手中。它会出现在响应头中。
	 * 也就是说，这是由服务器发送到客户端的头（header），用以告知服务器愿发起一个 websocket 连接。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-WebSocket-Accept
	 */
	"Sec-WebSocket-Accept"?: string;
	/**
	 * Server 首部包含了处理请求的源头服务器所用到的软件相关信息。
	 *
	 * 应该避免使用过长或者过于详细的描述作为 Server 的值，因为这有可能泄露服务器的内部实现细节，有利于攻击者找到或者探测已知的安全漏洞。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Server
	 */
	Server?: string;
	/**
	 * Server-Timing 标头传达在一个给定请求 - 响应周期中的一个或多个参数和描述。
	 * 它用于在用户浏览器的开发工具或 PerformanceServerTiming (en-US) 接口中显示任何后端服务器定时参数（例如，数据库读/写、CPU 时间、文件系统访问等）。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Server-Timing
	 */
	"Server-Timing"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload
	 */
	"Service-Worker-Navigation-Preload"?: string;
	/**
	 * Set-Cookie HTTP 响应标头用于将 cookie 由服务器发送到用户代理，以便用户代理在后续的请求中可以将其发送回服务器。
	 * 要发送多个 cookie，则应在同一响应中发送多个 Set-Cookie 标头。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie
	 */
	"Set-Cookie"?: string;
	/**
	 * SourceMap HTTP 响应头链接生成的代码到一个 source map，使浏览器能够重建原始的资源然后显示在调试器里。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/SourceMap
	 */
	SourceMap?: string;
	/**
	 * HTTP Strict-Transport-Security（通常简称为 HSTS）响应标头用来通知浏览器应该只通过 HTTPS 访问该站点，并且以后使用 HTTP 访问该站点的所有尝试都应自动重定向到 HTTPS。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security
	 */
	"Strict-Transport-Security"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Supports-Loading-Mode
	 * @deprecated
	 */
	"Supports-Loading-Mode"?: string;
	/**
	 * TE 请求型头部用来指定用户代理希望使用的传输编码类型。(可以将其非正式称为 Accept-Transfer-Encoding，这个名称显得更直观一些)。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/TE
	 */
	TE?: string;
	/**
	 * 响应头 Timing-Allow-Origin 用于指定特定站点，以允许其访问Resource Timing API提供的相关信息，否则这些信息会由于跨源限制将被报告为零
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Timing-Allow-Origin
	 */
	"Timing-Allow-Origin"?: string;
	/**
	 * Tk 响应首部显示了对相应请求的跟踪情况。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Tk
	 */
	Tk?: "!" | "?" | "G" | "N" | "T" | "C" | "P" | "D" | "U";
	/**
	 * Trailer 是一个响应首部，允许发送方在分块发送的消息后面添加额外的元信息，这些元信息可能是随着消息主体的发送动态生成的，比如消息的完整性校验，消息的数字签名，或者消息经过处理之后的最终状态等。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Trailer
	 */
	Trailer?: string;
	/**
	 * Transfer-Encoding 消息首部指明了将 entity 安全传递给用户所采用的编码形式。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding
	 */
	"Transfer-Encoding"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade
	 */
	Upgrade?: string;
	/**
	 * Upgrade-Insecure-Requests 是一个请求首部，用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应，并且它可以成功处理 upgrade-insecure-requests CSP (en-US) 指令。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests
	 */
	"Upgrade-Insecure-Requests"?: string;
	/**
	 * User-Agent 首部包含了一个特征字符串，用来让网络协议的对端来识别发起请求的用户代理软件的应用类型、操作系统、软件开发商以及版本号。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent
	 */
	"User-Agent"?: string;
	/**
	 * Vary HTTP 响应标头描述了除方法和 URL 之外影响响应内容的请求消息。大多数情况下，这用于在使用内容协商时创建缓存键。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary
	 */
	Vary?: string;
	/**
	 * Via 是一个通用首部，是由代理服务器添加的，适用于正向和反向代理，在请求和响应首部中均可出现。
	 * 这个消息首部可以用来追踪消息转发情况，防止循环请求，以及识别在请求或响应传递链中消息发送者对于协议的支持能力。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via
	 */
	Via?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Viewport-Width
	 * @deprecated
	 */
	"Viewport-Width"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Want-Digest
	 * @deprecated
	 */
	"Want-Digest"?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Warning
	 * @deprecated
	 */
	Warning?: string;
	/**
	 *
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Width
	 * @deprecated
	 */
	Width?: string;
	/**
	 * HTTP WWW-Authenticate 响应标头定义了 HTTP 身份验证的方法（“质询”），它用于获取特定资源的访问权限。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/WWW-Authenticate
	 */
	"WWW-Authenticate"?: string;
	/**
	 * X-Content-Type-Options HTTP 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 Content-Type 首部中对 MIME 类型 的设定，而不能对其进行修改。
	 * 这就禁用了客户端的 MIME 类型嗅探行为，换句话说，也就是意味着网站管理员确定自己的设置没有问题。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options
	 */
	"X-Content-Type-Options"?: string;
	/**
	 * X-Frame-Options HTTP 响应头是用来给浏览器指示允许一个页面可否在 <frame>、<iframe>、<embed> 或者 <object> 中展现的标记。
	 * 站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免点击劫持 (en-US)攻击。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options
	 */
	"X-Frame-Options"?: string;
	/**
	 * HTTP X-XSS-Protection 响应头是 Internet Explorer，Chrome 和 Safari 的一个特性，当检测到跨站脚本攻击 (XSS (en-US)) 时，浏览器将停止加载页面。
	 * 若网站设置了良好的 Content-Security-Policy 来禁用内联 JavaScript ('unsafe-inline')，现代浏览器不太需要这些保护，但其仍然可以为尚不支持 CSP 的旧版浏览器的用户提供保护。
	 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-XSS-Protection
	 */
	"X-XSS-Protection"?: string;
	[key: string]: any;
}
declare interface HttpxRequestInit extends RequestInit {
	/**
	 * 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。
	 *
	 * 注意 GET 或 HEAD 方法的请求不能包含 body 信息。
	 */
	body?: BodyInit | null;
	/**
	 * 请求的 cache 模式：default、 no-store、 reload 、 no-cache、 force-cache 或者 only-if-cached
	 *
	 * + 默认值: no-cache
	 */
	cache?: RequestCache;
	/**
	 *  请求的 credentials，如 omit、same-origin 或者 include。
	 *
	 * 为了在当前域名内自动发送 cookie，必须提供这个选项
	 *
	 * 从 Chrome 50 开始，这个属性也可以接受 FederatedCredential (en-US) 实例或是一个 PasswordCredential (en-US) 实例。
	 *
	 * + 默认值: include
	 */
	credentials?: RequestCredentials;
	/**
	 * 请求的头信息，形式为 Headers 的对象或包含 ByteString 值的对象字面量。
	 */
	headers?: HeadersInit;
	/**
	 *  包括请求的 subresource integrity 值（例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）。
	 */
	integrity?: string;
	/**
	 * 保持连接
	 */
	keepalive?: boolean;
	/**
	 * 请求使用的方法，如 GET、POST。
	 *
	 * + 默认值: GET
	 */
	method?: HttpxMethod;
	/**
	 * 请求的模式，如 cors、no-cors 或者 same-origin。
	 * + 默认值: cors
	 */
	mode?: RequestMode;
	/**
	 * 可用的 redirect 模式：follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误），或者 manual (手动处理重定向)。
	 *
	 * 在 Chrome 中默认使用 follow（Chrome 47 之前的默认值是 manual）。
	 *
	 * + 默认值: follow
	 */
	redirect?: RequestRedirect;
	/**
	 * 一个 USVString 可以是 no-referrer、client 或一个 URL。默认是 client。
	 */
	referrer?: "no-referrer" | "client" | string;
	/**
	 * 指定了 HTTP 头部 referer 字段的值。
	 *
	 * 可能为以下值之一：no-referrer、 no-referrer-when-downgrade、origin、origin-when-cross-origin、 unsafe-url。
	 *
	 * + 默认值: origin-when-cross-origin
	 */
	referrerPolicy?: ReferrerPolicy;
	/**
	 * 用于设置请求信号的中止信号。
	 *
	 * + 默认值: 自己设置的signal中止信号
	 */
	signal?: AbortSignal | null;
	/**
	 * 只能为空。用于解除与任何窗口的请求的关联。
	 */
	window?: null;
}
/**
 * 请求的配置
 */
declare interface HttpxDetails {
	/**
	 * 网址
	 */
	url?: string;
	/**
	 * 请求方法
	 */
	method?: HttpxMethod;
	/**
	 * 超时时间，默认5000，可为空
	 *
	 * 当fetch为true时，该值不生效
	 */
	timeout?: number;
	/**
	 * 响应类型，默认document，可为空
	 */
	responseType?: keyof HttpxResponseMap;
	/**
	 * 请求头，可为空
	 */
	headers?: HttpxHeaders;
	/**
	 *  当使用post时，该值会生效，可为空
	 */
	data?: string | FormData;
	/**
	 * 当触发重定向的使用规则，默认follow，可为空
	 */
	redirect?: HttpxRedirect;
	/**
	 * 自定义Cookie，可为空
	 */
	cookie?: string;
	/**
	 * 以二进制模式发送数据字符串，可为空
	 */
	binary?: HttpxBinary;
	/**
	 * 是否缓存资源，默认true，可为空
	 */
	nocache?: boolean;
	/**
	 * 是否重新验证可能缓存的内容，默认true，可为空
	 */
	revalidate?: boolean;
	/**
	 * 将该对象添加到响应的属性中，可为空
	 */
	context?: UtilsNestedObjectWithToString;
	/**
	 * 重写mimeType，可为空
	 */
	overrideMimeType?: string;
	/**
	 * 是否匿名不发送Cookie，默认为false，可为空
	 */
	anonymous?: boolean;
	/**
	 * 是否使用fetch来发送请求，默认为false，可为空
	 */
	fetch?: boolean;
	/**
	 * 使用fetch请求的配置
	 */
	fetchInit?: HttpxRequestInit;
	/**
	 * 身份验证的用户名
	 */
	user?: string;
	/**
	 * 身份验证的密码
	 */
	password?: string;
	/**
	 * （可选）当请求被取消或中断，触发该回调
	 */
	onabort?: () => void;
	/**
	 * （可选）当请求异常，触发该回调，如404
	 */
	onerror?: (...args: any[]) => void;
	/**
	 * （可选）当请求超时，触发该回调
	 */
	ontimeout?: () => void;
	/**
	 * （可选）当请求开始，触发该回调
	 */
	onloadstart?: () => void;
	/**
	 * （可选）当请求成功时，触发该回调
	 */
	onload?: () => void;
	/**
	 * （可选）当请求状态改变，触发该回调
	 *
	 * fetch为true时该回调不触发
	 */
	onreadystatechange?: () => void;
	/**
	 * （可选）当请求上传文件进度改变，触发该回调
	 *
	 * fetch为true时该回调不触发
	 */
	onprogress?: () => void;
}
declare interface HttpxDetailsConfig extends HttpxDetails {
	/**
	 * （可选）是否输出请求配置
	 */
	logDetails?: boolean;
	/**
	 * 发送请求前的回调
	 * 如果返回false则阻止本次返回
	 * @param details 当前的请求配置
	 */
	beforeRequestCallBack?(details: HttpxDetails): boolean | void;
}
/**
 * 响应的数据的data
 */
declare interface HttpxAsyncResultData<T extends HttpxDetails> {
	/**
	 * 如果fetch为true，且返回的headers中的Content-Type存在text/event-stream或者是主动设置的responseType为stream
	 * 则存在该属性为true
	 */
	isStream?: boolean;
	/**
	 * 如果fetch为true，则存在该属性为true
	 */
	isFetch?: boolean;
	/**
	 * 当数据加载完毕后的，经过所有重定向后的最终URL
	 */
	finalUrl: string;
	/**
	 * 数据准备状态
	 * + 0 未初始化
	 * + 1 载入
	 * + 2 载入完成
	 * + 3 交互
	 * + 4 完成
	 *
	 * 当请求头fetch为true时，该值固定为4
	 */
	readyState: 0 | 1 | 2 | 3 | 4;
	/**
	 * 状态码，2xx为成功
	 */
	status: HttpxStatus;
	/**
	 * 关于status的解释
	 */
	statusText: "OK" | "" | string;
	/**
	 *  响应内容，根据responseType，如果是html，那就是Document类型，如果是json，那么类型是Object类型
	 */
	response: HttpxResponseMap[keyof HttpxResponseMap];
	/**
	 * 当请求头fetch为true时，该属性存在
	 */
	responseFetchHeaders?: Headers;
	/**
	 * 响应头的Headers
	 */
	responseHeaders: string;
	/**
	 * 响应的字符串
	 */
	responseText: string;
	/**
	 * 是请求中设置的responseType，没有设置的话默认为undefined
	 */
	responseType?: keyof HttpxResponseMap;
	/**
	 * the response data as XML document
	 */
	responseXML?: XMLDocument;
}
/**
 * 响应的数据
 */
declare interface HttpxAsyncResult<T extends HttpxDetails> {
	/**
	 * 请求状态，状态码为200为成功true，否则false
	 */
	status: boolean;
	/**
	 * 请求的数据，当status为false时，data中可能也存在数据
	 */
	data: HttpxAsyncResultData<T>;
	/**
	 * 请求的配置
	 */
	details: T;
	/**
	 * 请求的成功/失败消息
	 */
	msg: string;
	/**
	 * 当前触发响应的类型
	 */
	type: HttpxResponseCallBackType;
}

/** Httpx */
declare interface UtilsHttpxConstrustor {
	/**
	 * GET 请求
	 * @param details 配置
	 */
	get<T extends HttpxDetails>(details: T): Promise<HttpxAsyncResult<T>>;
	/**
	 * GET 请求
	 * @param url 网址
	 * @param details 配置
	 */
	get<T extends HttpxDetails>(
		url: string,
		details: T
	): Promise<HttpxAsyncResult<T>>;
	/**
	 * POST 请求
	 * @param details 配置
	 */
	post<T extends HttpxDetails>(details: T): Promise<HttpxAsyncResult<T>>;
	/**
	 * POST 请求
	 * @param url 网址
	 * @param details 配置
	 */
	post<T extends HttpxDetails>(
		url: string,
		details: T
	): Promise<HttpxAsyncResult<T>>;
	/**
	 * HEAD 请求
	 * @param details 配置
	 */
	head<T extends HttpxDetails>(details: T): Promise<HttpxAsyncResult<T>>;
	/**
	 * HEAD 请求
	 * @param url 网址
	 * @param details 配置
	 */
	head<T extends HttpxDetails>(
		url: string,
		details: T
	): Promise<HttpxAsyncResult<T>>;
	/**
	 * OPTIONS 请求
	 * @param details 配置
	 */
	options<T extends HttpxDetails>(details: T): Promise<HttpxAsyncResult<T>>;
	/**
	 * OPTIONS 请求
	 * @param url 网址
	 * @param details 配置
	 */
	options<T extends HttpxDetails>(
		url: string,
		details: T
	): Promise<HttpxAsyncResult<T>>;
	/**
	 * DELETE 请求
	 * @param details 配置
	 */
	delete<T extends HttpxDetails>(details: T): Promise<HttpxAsyncResult<T>>;
	/**
	 * DELETE 请求
	 * @param url 网址
	 * @param details 配置
	 */
	delete<T extends HttpxDetails>(
		url: string,
		details: T
	): Promise<HttpxAsyncResult<T>>;
	/**
	 * PUT 请求
	 * @param details 配置
	 */
	put<T extends HttpxDetails>(details: T): Promise<HttpxAsyncResult<T>>;
	/**
	 * PUT 请求
	 * @param url 网址
	 * @param details 配置
	 */
	put<T extends HttpxDetails>(
		url: string,
		details: T
	): Promise<HttpxAsyncResult<T>>;
	/**
	 * 覆盖全局配置
	 * @param details 配置
	 */
	config(details?: {
		[K in keyof HttpxDetailsConfig]?: HttpxDetailsConfig[K];
	}): void;
	/**
	 * 修改xmlHttpRequest
	 * @param httpRequest 网络请求函数
	 */
	setXMLHttpRequest(httpRequest: Function): void;
}

/** Httpx */
declare interface UtilsHttpx {
	new (xmlHttpRequest: Function): UtilsHttpxConstrustor;
}
