/**
 * 状态码
 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
 */
type HttpxStatus = 100 |
    101 |
    102 |
    103 |
    200 |
    201 |
    202 |
    203 |
    204 |
    205 |
    206 |
    207 |
    208 |
    300 |
    301 |
    302 |
    304 |
    307 |
    308 |
    401 |
    402 |
    403 |
    404 |
    405 |
    406 |
    407 |
    408 |
    409 |
    410 |
    411 |
    412 |
    413 |
    414 |
    415 |
    416 |
    417 |
    418 |
    421 |
    422 |
    423 |
    424 |
    425 |
    426 |
    428 |
    429 |
    431 |
    451 |
    500 |
    501 |
    502 |
    503 |
    504 |
    505 |
    506 |
    507 |
    508 |
    510 |
    511;

/**
 * HTTP 请求方法
 * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods
 */
type HttpxMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH"

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
    "Accept": string;
    /**
     * 头由服务器设置，以指定客户端应在后续请求中应包含哪些客户端 Client Hints (en-US) 提示头
     * + 备注： Client Hints (en-US) 只能在安全源（通过 TLS）上访问。所有安全的请求都应该持久化 Accept-CH 和 Accept-CH-Lifetime 头，以确保 Client Hints (en-US) 可靠地发送。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH
     * @deprecated
     */
    "Accept-CH": string;
    /**
     * 服务器设置 Accept-CH-Lifetime 标头以指定Accept-CH标头值的持久性，该值指定客户端应在后续请求中包括哪些Client Hints (en-US)标头。
     * + 备注： Client Hints (en-US)只能在安全源（通过 TLS）上访问。所有安全的请求都应该持久化 Accept-CH 和 Accept-CH-Lifetime 头，以确保Client Hints (en-US)可靠地发送。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-CH-Lifetime
     * @deprecated
     */
    "Accept-CH-Lifetime": string;
    /**
     * Accept-Charset 请求头用来告知（服务器）客户端可以处理的字符集类型。
     * 借助内容协商机制，服务器可以从诸多备选项中选择一项进行应用，并使用Content-Type 应答头通知客户端它的选择。
     * 浏览器通常不会设置此项值，因为每种内容类型的默认值通常都是正确的，但是发送它会更有利于识别。
     * 如果服务器不能提供任何可以匹配的字符集的版本，那么理论上来说应该返回一个 406（Not Acceptable，不被接受）的错误码。
     * 但是为了更好的用户体验，这种方法很少采用，取而代之的是将其忽略。
     * + 备注： 在早期版本的 HTTP/1.1 协议中，规定了一个默认的字符集 (ISO-8859-1)。但是现在情况不同了，目前每一种内容类型都有自己的默认字符集。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Charset
     */
    "Accept-Charset": string;
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
    "Accept-Encoding": string;
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
    "Accept-Language": string;
    /**
     * 服务器使用 HTTP 响应头 Accept-Patch 通知浏览器请求的媒体类型 (media-type) 可以被服务器理解。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Patch
     */
    "Accept-Patch": string;
    /**
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Post
     */
    "Accept-Post": string;
    /**
     * 服务器使用 HTTP 响应头 Accept-Ranges 标识自身支持范围请求 (partial requests)。字段的具体值用于定义范围请求的单位。
     * 当浏览器发现Accept-Ranges头时，可以尝试继续中断了的下载，而不是重新开始。
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges
     */
    "Accept-Ranges": "bytes" | "none";
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
    "Access-Control-Allow-Credentials": "true";
    /**
     * 响应首部 Access-Control-Allow-Headers 用于 preflight request（预检请求）中，列出了将会在正式请求的 Access-Control-Request-Headers 字段中出现的首部信息。
     * 简单首部，如 simple headers、Accept、Accept-Language、Content-Language、Content-Type（只限于解析后的值为 application/x-www-form-urlencoded、multipart/form-data 或 text/plain 三种 MIME 类型（不包括参数）），它们始终是被支持的，不需要在这个首部特意列出。
     * 如果请求中含有 Access-Control-Request-Headers 字段，那么这个首部是必要的。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
     */
    "Access-Control-Allow-Headers": string;
    /**
     * 响应首部 Access-Control-Allow-Methods 在对 preflight request.（预检请求）的应答中明确了客户端所要访问的资源允许使用的方法或方法列表。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
     */
    "Access-Control-Allow-Methods": string;
    /**
     * Access-Control-Allow-Origin 响应标头指定了该响应的资源是否被允许与给定的来源（origin）共享。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
     */
    "Access-Control-Allow-Origin": "*" | "<origin>" | "null";
    /**
     * 响应标头 Access-Control-Expose-Headers 允许服务器指示那些响应标头可以暴露给浏览器中运行的脚本，以响应跨源请求。
     * 默认情况下，仅暴露 CORS 安全列表的响应标头 (en-US)。
     * 如果想要让客户端可以访问到其他的标头，服务器必须将它们在 Access-Control-Expose-Headers 里面列出来。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
     */
    "Access-Control-Expose-Headers": string;
    /**
     * The Access-Control-Max-Age 这个响应头表示 preflight request （预检请求）的返回结果（即 Access-Control-Allow-Methods 和Access-Control-Allow-Headers 提供的信息）可以被缓存多久。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Max-Age
     */
    "Access-Control-Max-Age": string;
    /**
     * 请求头 Access-Control-Request-Headers 出现于 preflight request（预检请求）中，用于通知服务器在真正的请求中会采用哪些请求头。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers
     */
    "Access-Control-Request-Headers": string;
    /**
     * 请求头 Access-Control-Request-Method 出现于 preflight request（预检请求）中，用于通知服务器在真正的请求中会采用哪种 HTTP 方法。因为预检请求所使用的方法总是 OPTIONS ，与实际请求所使用的方法不一样，所以这个请求头是必要的。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method
     */
    "Access-Control-Request-Method": HttpxMethod;
    /**
     * Age 消息头里包含对象在缓存代理中存贮的时长，以秒为单位。
     * Age 的值通常接近于 0。表示此对象刚刚从原始服务器获取不久；其他的值则是表示代理服务器当前的系统时间与此应答中的通用头 Date 的值之差。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Age
     */
    "Age": string;
    /**
     * Allow 首部字段用于枚举资源所支持的 HTTP 方法的集合。
     * 若服务器返回状态码 405 Method Not Allowed，则该首部字段亦需要同时返回给客户端。
     * 如果 Allow 首部字段的值为空，说明资源不接受使用任何 HTTP 方法的请求。
     * 这是可能的，比如服务器需要临时禁止对资源的任何访问。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Allow
     */
    "Allow": string;
    /**
     * Alt-Svc 全称为“Alternative-Service”，直译为“备选服务”。
     * 该头部列举了当前站点备选的访问方式列表。一般用于在提供“QUIC”等新兴协议支持的同时，实现向下兼容。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Svc
     */
    "Alt-Svc": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Used
     */
    "Alt-Used": string;
    /**
     * HTTP Authorization 请求标头用于提供服务器验证用户代理身份的凭据，允许访问受保护的资源。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization
     */
    "Authorization": string;
    /**
     * Cache-Control 通用消息头字段，被用于在 http 请求和响应中，通过指定指令来实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control
     */
    "Cache-Control": string;
    /**
     * Clear-Site-Data 响应头，表示清除当前请求网站有关的浏览器数据（cookie，存储，缓存）。它让 Web 开发人员对浏览器本地存储的数据有更多控制能力。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Clear-Site-Data
     */
    "Clear-Site-Data": string;
    /**
     * Connection 通用标头控制网络连接在当前会话完成后是否仍然保持打开状态。如果发送的值是 keep-alive，则连接是持久的，不会关闭，允许对同一服务器进行后续请求。
     * 除去标准的逐段传输（hop-by-hop）头（Keep-Alive, Transfer-Encoding, TE, Connection, Trailer, Upgrade (en-US), Proxy-Authorization and Proxy-Authenticate），任何逐段传输头都需要在 Connection 头中列出，这样才能让第一个代理知道必须处理它们且不转发这些头。
     * 标准的逐段传输头也可以列出（常见的例子是 Keep-Alive，但这不是必须的）。
     * + 警告： 在 HTTP/2 和 HTTP/3 中，禁止使用特定于连接的标头字段，如 Connection 和 Keep-Alive。
     *   Chrome 和 Firefox 会在 HTTP/2 响应中忽略它们，但 Safari 遵循 HTTP/2 规范要求，不会加载包含这些字段的任何响应。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection
     * @deprecated
     */
    "Connection": "keep-alive" | "close";
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
    "Content-Disposition": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-DPR
     * @deprecated
     */
    "Content-DPR": string;
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
    "Content-Encoding": "gzip" | "compress" | "deflate" | "br";
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
    "Content-Language": string;
    /**
     * Content-Length 是一个实体消息首部，用来指明发送给接收方的消息主体的大小，即用十进制数字表示的八位元组的数目。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length
     */
    "Content-Length": string;
    /**
     * Content-Location 首部指定的是要返回的数据的地址选项。
     * 最主要的用途是用来指定要访问的资源经过内容协商后的结果的 URL。
     * 
     * Location 与 Content-Location是不同的，前者（Location ）指定的是一个重定向请求的目的地址（或者新创建的文件的 URL），而后者（ Content-Location）指向的是可供访问的资源的直接地址，不需要进行进一步的内容协商。
     * Location 对应的是响应，而 Content-Location 对应的是要返回的实体。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Location
     */
    "Content-Location": string;
    /**
     * 在 HTTP 协议中，响应首部 Content-Range 显示的是一个数据片段在整个文件中的位置。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Range
     */
    "Content-Range": string;
    /**
     * HTTP 响应头 Content-Security-Policy 允许站点管理者控制用户代理能够为指定的页面加载哪些资源。
     * 除了少数例外情况，设置的政策主要涉及指定服务器的源和脚本结束点。
     * 这将帮助防止跨站脚本攻击（Cross-Site Script）（XSS (en-US)）。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy
     */
    "Content-Security-Policy": string;
    /**
     * HTTP **Content-Security-Policy-Report-Only**响应头允许 web 开发人员通过监测 (但不强制执行) 政策的影响来尝试政策。
     * 这些违反报告由 JSON 文档组成通过一个 HTTP POST 请求发送到指定的 URI。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
     */
    "Content-Security-Policy-Report-Only": string;
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
    "Content-Type": "text/html; charset=utf-8" | "multipart/form-data" | "application/x-www-form-urlencoded" | "application/json" | string;
    /**
     * Cookie 是一个 HTTP 请求标头，其中含有先前由服务器通过 Set-Cookie 标头投放或通过 JavaScript 的 Document.cookie 方法设置，然后存储到客户端的 HTTP cookie 。
     * 这个标头是可选的，而且可能会被忽略，例如在浏览器的隐私设置里面设置为禁用 cookie。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie
     */
    "Cookie": string;
    /**
     * 
     * + https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Critical-CH
     * @deprecated
     */
    "Critical-CH": string;
    /**
     * HTTP Cross-Origin-Embedder-Policy (COEP) 响应标头可防止文档加载未明确授予文档权限 (通过 CORP (en-US) 或者 CORS) 的任何跨域资源。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
     */
    "Cross-Origin-Embedder-Policy": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
     */
    "Cross-Origin-Opener-Policy": string;
    /**
     * + 备注： 由于Chrome 浏览器中的一个 Bug, 设置 Cross-Origin-Resource-Policy（跨域资源策略）会使文件下载失败：当从设置了 CORP 请求头的资源服务器下载资源时，浏览器会阻止用户使用“保存”或“另存为”按钮将文件保存到本地。在决定生产环境中是否使用这一特性（CORP）之前需要慎重考虑。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
     */
    "Cross-Origin-Resource-Policy": string;
    /**
     * Date 是一个通用首部，其中包含了报文创建的日期和时间。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Date
     */
    "Date": string;
    /**
     * Device-Memory 是一个跟 Device Memory API (en-US) 相关的请求头，它跟 Client Hints (en-US) 请求头的作用相似，用来表示客户端设备内存的近似大小。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Device-Memory
     * @deprecated
     */
    "Device-Memory": string;
    /**
     * Digest 响应 HTTP 头提供了请求资源一个 摘要 。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Digest
     */
    "Digest": string;
    /**
     * navigator.doNotTrack
     * 
     * 请求首部 DNT (Do Not Track) 表明了用户对于网站追踪的偏好。它允许用户指定自己是否更注重个人隐私还是定制化内容。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT
     * + 0 表示用户愿意目标站点追踪用户个人信息。
     * + 1 表示用户不愿意目标站点追踪用户个人信息。
     * @deprecated
     */
    "DNT": "0" | "1";
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Downlink
     */
    "Downlink": string;
    /**
     * **DPR**请求头是“ 客户端提示” (en-US)消息头，它代表客户端设备的像素比 (DPR)，该比例是与每个 CSS 像素相对应的物理设备像素的数量。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DPR
     * @deprecated
     */
    "DPR": string;
    /**
     * Early-Data 头（header）由某个中间者设置来表示请求已在 TLS early data 中传送，且表示 某个中间者理解 425 (Too Early) 状态码。
     * Early-Data 头（header）不由请求的发起者设置 (例如，浏览器)。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Early-Data
     * @deprecated
     */
    "Early-Data": "1";
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ECT
     * @deprecated
     */
    "ECT": string;
    /**
     * ETag HTTP 响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web 服务器不需要发送完整的响应。
     * 而如果内容发生了变化，使用 ETag 有助于防止资源的同时更新相互覆盖（“空中碰撞”）。
     * 
     * 如果给定 URL 中的资源更改，则一定要生成新的 ETag 值。比较这些 ETag 能快速确定此资源是否变化。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag
     */
    "ETag": string;
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
    "Expect": string;
    /**
     * Expect-CT 标头允许站点选择性地报告和/或执行证书透明度（Certificate Transparency）要求，来防止错误签发的网站证书的使用不被察觉。
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect-CT
     */
    "Expect-CT": string;
    /**
     * Expires 响应头包含日期/时间，即在此时候之后，响应过期。
     * 
     * 无效的日期，比如 0，代表着过去的日期，即该资源已经过期。
     * 
     * 如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires
     */
    "Expires": string;
    /**
     * Forwarded 首部中包含了代理服务器的客户端的信息，即由于代理服务器在请求路径中的介入而被修改或丢失的信息。
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Forwarded
     */
    "Forwarded": string;
    /**
     * 请求首部 From 中包含一个电子邮箱地址，这个电子邮箱地址属于发送请求的用户代理的实际掌控者的人类用户。
     * 
     * 如果你在运行一个机器人代理程序（比如爬虫），那么 Form 首部应该随请求一起发送，这样的话，在服务器遇到问题的时候，例如机器人代理发送了过量的、不希望收到的或者不合法的请求，站点管理员可以联系到你。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/From
     */
    "From": string;
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
    "Host": string;
    /**
     * 请求首部 If-Match 的使用表示这是一个条件请求。在请求方法为 GET 和 HEAD 的情况下，服务器仅在请求的资源满足此首部列出的 ETag值时才会返回资源。
     * 而对于 PUT 或其他非安全方法来说，只有在满足条件的情况下才可以将资源上传。
     * 
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Match
     */
    "If-Match": string;
    /**
     * If-Modified-Since 是一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200 。
     * 如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的 304 响应，而在 Last-Modified 首部中会带有上次修改时间。
     * 不同于 If-Unmodified-Since, If-Modified-Since 只可以用在 GET 或 HEAD 请求中。
     * 
     * 当与 If-None-Match 一同出现时，它（If-Modified-Since）会被忽略掉，除非服务器不支持 If-None-Match。
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since
     */
    "If-Modified-Since": string;
    /**
     * If-None-Match 是一个条件式请求首部。
     * 对于 GETGET 和 HEAD 请求方法来说，当且仅当服务器上没有任何资源的 ETag 属性值与这个首部中列出的相匹配的时候，服务器端才会返回所请求的资源，响应码为 200 。
     * 对于其他方法来说，当且仅当最终确认没有已存在的资源的 ETag 属性值与这个首部中所列出的相匹配的时候，才会对请求进行相应的处理。
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match
     */
    "If-None-Match": string;
    /**
     * If-Range HTTP 请求头字段用来使得 Range 头字段在一定条件下起作用：
     * 当字段值中的条件得到满足时，Range 头字段才会起作用，同时服务器回复206 部分内容状态码，以及**Range** 头字段请求的相应部分；
     * 如果字段值中的条件没有得到满足，服务器将会返回 200 OK 状态码，并返回完整的请求资源。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Range
     */
    "If-Range": string;
    /**
     * HTTP 协议中的 If-Unmodified-Since 消息头用于请求之中，使得当前请求成为条件式请求：
     * 只有当资源在指定的时间之后没有进行过修改的情况下，服务器才会返回请求的资源，或是接受 POST 或其他 non-safe 方法的请求。
     * 如果所请求的资源在指定的时间之后发生了修改，那么会返回 412 (Precondition Failed) 错误。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/
     */
    "If-Unmodified-Since": string;
    /**
     * Keep-Alive 是一个通用消息头，允许消息发送者暗示连接的状态，还可以用来设置超时时长和最大请求数。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Keep-Alive
     */
    "Keep-Alive": string;
    /**
     * 非标准的**Large-Allocation** 响应头部是用来告诉浏览器加载该页面可能需要申请大内存。当前只有 Firefox 实现该特性，但是对其他浏览器也无损害。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Large-Allocation
     * @deprecated
     */
    "Large-Allocation": string;
    /**
     * Last-Modified 是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。
     * 由于精确度比 ETag 要低，所以这是一个备用机制。包含有 If-Modified-Since 或 If-Unmodified-Since 首部的条件请求会使用这个字段。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified
     */
    "Last-Modified": string;
    /**
     * HTTP 实体报头 Link 提供了序列化 HTTP 头部链接的方法。
     * 它在语义上与 HTML 元素 <link> 相等。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link
     */
    "Link": string;
    /**
     * Location 首部指定的是需要将页面重新定向至的地址。
     * 一般在响应码为 3xx 的响应中才会有意义。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Location
     */
    "Location": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Max-Forwards
     */
    "Max-Forwards": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/NEL
     */
    "NEL": string;
    /**
     * 请求标头 Origin 表示了请求的来源（协议、主机、端口）。
     * 例如，如果一个用户代理需要请求一个页面中包含的资源，或者执行脚本中的 HTTP 请求（fetch），那么该页面的来源（origin）就可能被包含在这次请求中。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin
     */
    "Origin": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin-Agent-Cluster
     */
    "Origin-Agent-Cluster": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy
     */
    "Permissions-Policy": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Pragma
     * @deprecated
     */
    "Pragma": string;
    /**
     * The HTTP Proxy-Authenticate 是一个响应首部，指定了获取 proxy server（代理服务器）上的资源访问权限而采用的身份验证方式。
     * 代理服务器对请求进行验证，以便它进一步传递请求。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authenticate
     */
    "Proxy-Authenticate": string;
    /**
     * Proxy-Authorization 是一个请求首部，其中包含了用户代理提供给代理服务器的用于身份验证的凭证。
     * 这个首部通常是在服务器返回了 407 Proxy Authentication Required 响应状态码及 Proxy-Authenticate 首部后发送的。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Proxy-Authorization
     */
    "Proxy-Authorization": string;
    /**
     * The Range 是一个请求首部，告知服务器返回文件的哪一部分。在一个 Range 首部中，可以一次性请求多个部分，服务器会以 multipart 文件的形式将其返回。
     * 如果服务器返回的是范围响应，需要使用 206 Partial Content 状态码。
     * 假如所请求的范围不合法，那么服务器会返回 416 Range Not Satisfiable 状态码，表示客户端错误。
     * 服务器允许忽略 Range 首部，从而返回整个文件，状态码用 200 。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Range
     */
    "Range": string;
    /**
     * Referer 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。
     * 服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer
     */
    "Referer": string;
    /**
     * Referrer-Policy 首部用来监管哪些访问来源信息——会在 Referer 中发送——应该被包含在生成的请求当中
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy
     */
    "Referrer-Policy": "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    /**
     * 在 HTTP 协议中，响应首部 Retry-After 表示用户代理需要等待多长时间之后才能继续发送请求。这个首部主要应用于以下两种场景：
     * + 当与 503 (Service Unavailable，当前服务不存在) 响应一起发送的时候，表示服务下线的预期时长。
     * + 当与重定向响应一起发送的时候，比如 301 (Moved Permanently，永久迁移)，表示用户代理在发送重定向请求之前需要等待的最短时间。
     * 
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Retry-After
     */
    "Retry-After": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/RTT
     * @deprecated
     */
    "RTT": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Save-Data
     * @deprecated
     */
    "Save-Data": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
     * @deprecated
     */
    "Sec-CH-Prefers-Color-Scheme": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
     * @deprecated
     */
    "Sec-CH-Prefers-Reduced-Motion": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency
     * @deprecated
     */
    "Sec-CH-Prefers-Reduced-Transparency": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA
     * @deprecated
     */
    "Sec-CH-UA": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Arch
     * @deprecated
     */
    "Sec-CH-UA-Arch": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness
     * @deprecated
     */
    "Sec-CH-UA-Bitness": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version
     * @deprecated
     */
    "Sec-CH-UA-Full-Version": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
     * @deprecated
     */
    "Sec-CH-UA-Full-Version-List": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile
     * @deprecated
     */
    "Sec-CH-UA-Mobile": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Model
     * @deprecated
     */
    "Sec-CH-UA-Model": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Platform
     * @deprecated
     */
    "Sec-CH-UA-Platform": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version
     * @deprecated
     */
    "Sec-CH-UA-Platform-Version": string;
    /**
     * Sec-Fetch-Dest Fetch 元数据请求标头指示请求的目标，即数据的来源以及如何使用这些获取到的数据。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Dest
     */
    "Sec-Fetch-Dest": string;
    /**
     * Sec-Fetch-Mode 获取元数据标头表明了一个请求的模式。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Mode
     */
    "Sec-Fetch-Mode": string;
    /**
     * Sec-Fetch-Site 获取元数据标头表明了一个请求发起者的来源与目标资源来源之间的关系。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-Site
     */
    "Sec-Fetch-Site": string;
    /**
     * Sec-Fetch-User 获取元数据标头表明了一个导航请求是否由用户激活触发。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Fetch-User
     */
    "Sec-Fetch-User": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-GPC
     * @deprecated
     */
    "Sec-GPC": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-Purpose
     */
    "Sec-Purpose": string;
    /**
     * Sec-WebSocket-Accept 头（header）用在 websocket 开放握手中。它会出现在响应头中。
     * 也就是说，这是由服务器发送到客户端的头（header），用以告知服务器愿发起一个 websocket 连接。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Sec-WebSocket-Accept
     */
    "Sec-WebSocket-Accept": string;
    /**
     * Server 首部包含了处理请求的源头服务器所用到的软件相关信息。
     * 
     * 应该避免使用过长或者过于详细的描述作为 Server 的值，因为这有可能泄露服务器的内部实现细节，有利于攻击者找到或者探测已知的安全漏洞。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Server
     */
    "Server": string;
    /**
     * Server-Timing 标头传达在一个给定请求 - 响应周期中的一个或多个参数和描述。
     * 它用于在用户浏览器的开发工具或 PerformanceServerTiming (en-US) 接口中显示任何后端服务器定时参数（例如，数据库读/写、CPU 时间、文件系统访问等）。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Server-Timing
     */
    "Server-Timing": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload
     */
    "Service-Worker-Navigation-Preload": string;
    /**
     * Set-Cookie HTTP 响应标头用于将 cookie 由服务器发送到用户代理，以便用户代理在后续的请求中可以将其发送回服务器。
     * 要发送多个 cookie，则应在同一响应中发送多个 Set-Cookie 标头。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie
     */
    "Set-Cookie": string;
    /**
     * SourceMap HTTP 响应头链接生成的代码到一个 source map，使浏览器能够重建原始的资源然后显示在调试器里。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/SourceMap
     */
    "SourceMap": string;
    /**
     * HTTP Strict-Transport-Security（通常简称为 HSTS）响应标头用来通知浏览器应该只通过 HTTPS 访问该站点，并且以后使用 HTTP 访问该站点的所有尝试都应自动重定向到 HTTPS。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security
     */
    "Strict-Transport-Security": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Supports-Loading-Mode
     * @deprecated
     */
    "Supports-Loading-Mode": string;
    /**
     * TE 请求型头部用来指定用户代理希望使用的传输编码类型。(可以将其非正式称为 Accept-Transfer-Encoding，这个名称显得更直观一些)。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/TE
     */
    "TE": string;
    /**
     * 响应头 Timing-Allow-Origin 用于指定特定站点，以允许其访问Resource Timing API提供的相关信息，否则这些信息会由于跨源限制将被报告为零
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Timing-Allow-Origin
     */
    "Timing-Allow-Origin": string;
    /**
     * Tk 响应首部显示了对相应请求的跟踪情况。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Tk
     */
    "Tk": "!" | "?" | "G" | "N" | "T" | "C" | "P" | "D" | "U";
    /**
     * Trailer 是一个响应首部，允许发送方在分块发送的消息后面添加额外的元信息，这些元信息可能是随着消息主体的发送动态生成的，比如消息的完整性校验，消息的数字签名，或者消息经过处理之后的最终状态等。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Trailer
     */
    "Trailer": string;
    /**
     * Transfer-Encoding 消息首部指明了将 entity 安全传递给用户所采用的编码形式。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding
     */
    "Transfer-Encoding": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade
     */
    "Upgrade": string;
    /**
     * Upgrade-Insecure-Requests 是一个请求首部，用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应，并且它可以成功处理 upgrade-insecure-requests CSP (en-US) 指令。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests
     */
    "Upgrade-Insecure-Requests": string;
    /**
     * User-Agent 首部包含了一个特征字符串，用来让网络协议的对端来识别发起请求的用户代理软件的应用类型、操作系统、软件开发商以及版本号。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent
     */
    "User-Agent": string;
    /**
     * Vary HTTP 响应标头描述了除方法和 URL 之外影响响应内容的请求消息。大多数情况下，这用于在使用内容协商时创建缓存键。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary
     */
    "Vary": string;
    /**
     * Via 是一个通用首部，是由代理服务器添加的，适用于正向和反向代理，在请求和响应首部中均可出现。
     * 这个消息首部可以用来追踪消息转发情况，防止循环请求，以及识别在请求或响应传递链中消息发送者对于协议的支持能力。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via
     */
    "Via": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Viewport-Width
     * @deprecated
     */
    "Viewport-Width": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Want-Digest
     * @deprecated
     */
    "Want-Digest": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Warning
     * @deprecated
     */
    "Warning": string;
    /**
     * 
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Width
     * @deprecated
     */
    "Width": string;
    /**
     * HTTP WWW-Authenticate 响应标头定义了 HTTP 身份验证的方法（“质询”），它用于获取特定资源的访问权限。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/WWW-Authenticate
     */
    "WWW-Authenticate": string;
    /**
     * X-Content-Type-Options HTTP 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 Content-Type 首部中对 MIME 类型 的设定，而不能对其进行修改。
     * 这就禁用了客户端的 MIME 类型嗅探行为，换句话说，也就是意味着网站管理员确定自己的设置没有问题。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options
     */
    "X-Content-Type-Options": string;
    /**
     * X-Frame-Options HTTP 响应头是用来给浏览器指示允许一个页面可否在 <frame>、<iframe>、<embed> 或者 <object> 中展现的标记。
     * 站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免点击劫持 (en-US)攻击。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options
     */
    "X-Frame-Options": string;
    /**
     * HTTP X-XSS-Protection 响应头是 Internet Explorer，Chrome 和 Safari 的一个特性，当检测到跨站脚本攻击 (XSS (en-US)) 时，浏览器将停止加载页面。
     * 若网站设置了良好的 Content-Security-Policy 来禁用内联 JavaScript ('unsafe-inline')，现代浏览器不太需要这些保护，但其仍然可以为尚不支持 CSP 的旧版浏览器的用户提供保护。
     * + https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-XSS-Protection
     */
    "X-XSS-Protection": string;
}
/**
 * 请求的配置
 */
declare interface HttpxDetails {
    /**
     * 网址
     */
    url: string;
    /**
     * 超时时间，默认5000，可为空
     */
    timeout: number | undefined;
    /**
     * 是否异步，默认false，可为空
     */
    async: boolean;
    /**
     * 响应类型，默认document，可为空
     */
    responseType: "arraybuffer" | "blob" | "json" | "stream" | "document" | undefined;
    /**
     * 请求头，可为空
     */
    headers: HttpxHeaders;
    /**
     *  当使用post时，该值会生效，可为空
     */
    data: string | undefined;
    /**
     * 当触发重定向的使用规则，默认follow，可为空
     */
    redirect: "follow" | "error" | "manual" | undefined;
    /**
     * 自定义Cookie，可为空
     */
    cookie: string | undefined;
    /**
     * 以二进制模式发送数据字符串，可为空
     */
    binary: Uint8ArrayConstructor | ArrayBufferConstructor | DataViewConstructor | Blob | File | undefined;
    /**
     * 是否缓存资源，默认true，可为空
     */
    nocache: boolean | undefined;
    /**
     * 是否重新验证可能缓存的内容，默认true，可为空
     */
    revalidate: boolean | undefined;
    /**
     * 将该对象添加到响应的属性中，可为空
     */
    context: object | undefined;
    /**
     * 重写mimeType，可为空
     */
    overrideMimeType: string | undefined;
    /**
     * 是否匿名不发送Cookie，默认为false，可为空
     */
    anonymous: boolean | undefined;
    /**
     * 是否使用fetch来发送请求，默认为false，可为空
     */
    fetch: boolean | undefined;
    /**
     * 身份验证的用户名
     */
    user: string | undefined;
    /**
     * 身份验证的密码
     */
    password: string | undefined;
    /**
     * 当请求被取消或中断，触发该回调，可为空
     */
    onabort: (() => void) | undefined;
    /**
     * 当请求异常，触发该回调，如404，可为空
     */
    onerror: (() => void) | undefined;
    /**
     * 当请求超时，触发该回调，可为空
     */
    ontimeout: (() => void) | undefined;
    /**
     * 当请求开始，触发该回调，可为空
     */
    onloadstart: (() => void) | undefined;
    /**
     * 当请求状态改变，触发该回调，可为空
     */
    onreadystatechange: (() => void) | undefined;
    /**
     * 当请求上传文件进度改变，触发该回调，可为空
     */
    onprogress: (() => void) | undefined;

}
/**
 * 响应的数据的data
 */
declare interface HttpxAsyncResultData {
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
    response: object | string | HTMLElement;
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
    responseType: string | undefined;
    /**
     * the response data as XML document
     */
    responseXML: XMLDocument | undefined;
}
/**
 * 响应的数据
 */
declare interface HttpxAsyncResult {
    /**
     * 请求状态，状态码为200为成功true，否则false
     */
    status: boolean;
    /**
     * 请求的数据，当status为false时，data中可能也存在数据
     */
    data: HttpxAsyncResultData;
    /**
     * 请求的配置
     */
    details: HttpxDetails;
    /**
     * 请求的成功/失败消息
     */
    msg: string;
    /**
     * 当前触发响应的类型
     */
    type: "onload" | "onerror" | "ontimeout" | "onabort"
}



declare interface UtilsDictionaryConstructor {
    /** 检查是否有某一个键 */
    has: (key: string) => boolean;
    /** 检查已有的键中是否以xx开头 */
    startsWith: (key: string) => boolean;
    /** 获取以xx开头的键的值 */
    getStartsWith: (key: string) => any;
    /** 为字典添加某一个值 */
    set: (key: string, val: any) => void;
    /** 删除某一个键 */
    delete: (key: string) => boolean;
    /** 获取某个键的值 */
    get: (key: string) => any;
    /** 返回字典中的所有值 */
    values: () => any[];
    /** 清空字典 */
    clear: () => void;
    /** 获取字典的长度 */
    size: () => number;
    /** 获取字典所有的键 */
    keys: () => string[];
    /** 返回字典本身 */
    getItems: () => object;
    /** 合并另一个字典 */
    concat: (data: object) => void;
}

/** 字典 */
declare interface UtilsDictionary {
    new(): UtilsDictionaryConstructor;
}

/** gbk编码 */
declare interface UtilsGBKEncoderConstructor {
    /** 编码 */
    encode(str: string): string;
    /** 解码 */
    decode(str: string): string;
}

/** gbk编码 */
declare interface UtilsGBKEncoder {
    new(): UtilsGBKEncoderConstructor;
}

/** GM_Cookie */
declare interface UtilsGMCookieContstructor {
    /**
     *  获取Cookie
     * @param paramDetails 
     * @param callback 
     * + cookies object[]
     * + error string|undefined
     **/
    list(
        paramDetails?: UtilsGMCookieListOptions,
        callback?: (data: UtilsGMCookieListResult[], error: TypeError) => void
    ): void;
    /**
     * 设置Cookie
     * @param paramDetails 
     * @param callback 
     */
    set(
        paramDetails?: UtilsGMCookieSetOptions,
        callback?: (error: TypeError) => void
    ): void;
    /**
     * 删除Cookie
     * @param paramDetails 
     * @param callback 
     */
    delete(
        paramDetails?: UtilsGMCookieDeleteOptions,
        callback?: (error: TypeError) => void
    ): void;
}

/** GM_Cookie */
declare interface UtilsGMCookie {
    new(): UtilsGMCookieContstructor;
}


declare interface UtilsGMMenuClickCallBackData {
    /** 菜单键名 */
    key: string;
    /** 是否启用 */
    enable: boolean;
    /** 点击前的enable值 */
    oldEnable: boolean;
    /** 触发的事件 */
    event: MouseEvent | KeyboardEvent;
    /** 将enable值写入本地的回调，设置参数false就不保存到本地 */
    storeValue: (enable: boolean) => void;
}

declare interface UtilsGMMenuOptions {
    /**（必须）菜单的本地键key，不可重复，会覆盖 */
    key: string;
    /**（必须）菜单的文本 */
    text: string;
    /** 菜单的开启状态，默认为false */
    enable: boolean | undefined;
    /** 使用条件：TamperMonkey版本>5.0，如果id和已注册的菜单id相同，可修改当前已注册菜单的options */
    id: number | undefined;
    /**  */
    accessKey: string | undefined;
    /** 自动关闭菜单，可不设置 */
    autoClose: boolean | undefined;
    /** 使用条件：TamperMonkey版本>5.0，使用菜单项的鼠标悬浮上的工具提示，可为空 */
    title: string | undefined;
    /** 点击菜单后自动刷新网页，默认为true */
    autoReload: boolean | undefined;
    /** 菜单的显示文本，未设置的话则自动根据enable在前面加上图标 */
    showText: (text: string, enable: boolean) => void;
    /** 点击菜单的回调 */
    callback: (data: UtilsGMMenuClickCallBackData) => void;
    /** 是否允许菜单进行存储值，默认true允许 */
    isStoreValue?: boolean;
}

declare interface UtilsGMMenuConstructorOptions {
    /** 配置，可为空 */
    data: UtilsGMMenuOptions[] | undefined;
    /** 全局菜单点击菜单后自动刷新网页，默认为true */
    autoReload: boolean | undefined;
    /** （必须）油猴函数@grant GM_getValue */
    GM_getValue: Function;
    /** （必须）油猴函数@grant GM_setValue */
    GM_setValue: Function;
    /** （必须）油猴函数@grant GM_registerMenuCommand */
    GM_registerMenuCommand: Function;
    /** （必须）油猴函数@grant GM_unregisterMenuCommand */
    GM_unregisterMenuCommand: Function;
}

/** GM_Menu */
declare interface UtilsGMMenuConstructor {
    /** 
     * 根据键值获取enable值
     * @param menuKey 菜单-键key
     **/
    get(menuKey: string): boolean;
    /** 
     * 根据键值获取enable值
     * @param menuKey 菜单-键key
     **/
    getEnable(menuKey: string): boolean;
    /** 
     * 根据键值获取text值
     * @param menuKey 菜单-键key
     **/
    getText(menuKey: string): string;
    /** 
     * 根据键值获取showText函数的值
     * @param menuKey 菜单-键key
     **/
    getShowTextValue(menuKey: string): string;
    /**
     * 获取当前已注册菜单的id
     * @param menuKey 菜单-键key
     */
    getMenuId(menuKey: string): number | undefined;
    /**
     * 根据键值获取accessKey值
     * @param menuKey 菜单-键key
     */
    getAccessKey(menuKey: string): string | undefined;
    /**
     * 根据键值获取autoClose值
     * @param menuKey 菜单-键key
     */
    getAutoClose(menuKey: string): boolean | undefined;
    /**
     * 根据键值获取autoReload值
     * @param menuKey 菜单-键key
     */
    getAutoReload(menuKey: string): boolean;
    /**
     * 根据键值获取callback函数
     * @param menuKey 菜单-键key
     */
    getCallBack(menuKey: string): () => void | undefined;
    /**
     * 获取当enable为true时默认显示在菜单中前面的emoji图标
     */
    getEnableTrueEmoji(): string;
    /**
     * 获取当enable为false时默认显示在菜单中前面的emoji图标
     */
    getEnableFalseEmoji(): string;
    /**
     * 获取本地存储的菜单外部的键名
     * @param keyName
     */
    getLocalStorageKeyName(keyName: string): string;
    /**
     * 设置菜单的值
     * @param menuKey 菜单-键key
     * @param value 需要设置的值
     */
    setValue(menuKey: string, value: any): void;
    /**
     * 设置菜单的值
     * @param menuKey 菜单-键key
     * @param value 需要设置的值
     */
    setEnable(menuKey: string, value: boolean): void;
    /**
     * 设置当enable为true时默认显示在菜单中前面的emoji图标
     * @param emojiString
     */
    setEnableTrueEmoji(emojiString: string): void;
    /**
     * 设置当enable为false时默认显示在菜单中前面的emoji图标
     * @param emojiString
     */
    setEnableFalseEmoji(emojiString: string): void;
    /**
     * 设置本地存储的菜单外部的键名
     * @param keyName
     */
    setLocalStorageKeyName(keyName: string): void;
    /**
     * 新增菜单数据
     * @param paramData
     */
    add(paramData: UtilsGMMenuConstructorOptions[] | UtilsGMMenuConstructorOptions): void;
    /**
     * 更新菜单数据
     * @param options 数据
     */
    update(options?: UtilsGMMenuConstructorOptions[] | UtilsGMMenuConstructorOptions | undefined): void;
    /**
     * 根据已注册菜单的id，来更新菜单配置，不会卸载菜单导致可能菜单选项可能会变化的情况
     * @param options 配置
     */
    updateOptionsWithId(options?: UtilsGMMenuConstructorOptions[] | UtilsGMMenuConstructorOptions | undefined): void;
    /**
     * 卸载菜单
     * @param menuId 已注册的菜单id
     */
    delete(menuId: number): void;
}

/** GM_Menu */
declare interface UtilsGMMenu {
    /**
     * @param details 传递的菜单配置
     */
    new(details: UtilsGMMenuConstructorOptions): UtilsGMMenuConstructor;
}

/** Hook */
declare interface UtilsHooksConstructor {
    /**
     * 在Function原型上添加自定义方法.hook和.unhook
     */
    initEnv(): void;
    /**
     * 删除在Function原型上添加的自定义方法.hook和.unhook
     */
    cleanEnv(): void;
}

/** Hook */
declare interface UtilsHooks {
    new(): UtilsHooksConstructor;
}

/** Httpx */
declare interface UtilsHttpxConstrustor {
    /**
     * GET 请求
     * @param args
     */
    get(...args: (string | HttpxDetails)[]): Promise<HttpxAsyncResult>;
    /**
     * POST 请求
     * @param args
     */
    post(...args: (string | HttpxDetails)[]): Promise<HttpxAsyncResult>;
    /**
     * HEAD 请求
     * @param args
     */
    head(...args: (string | HttpxDetails)[]): Promise<HttpxAsyncResult>;
    /**
     * OPTIONS 请求
     * @param args
     */
    options(...args: (string | HttpxDetails)[]): Promise<HttpxAsyncResult>;
    /**
     * DELETE 请求
     * @param args
     */
    delete(...args: (string | HttpxDetails)[]): Promise<HttpxAsyncResult>;
    /**
     * PUT 请求
     * @param args
     */
    put(...args: (string | HttpxDetails)[]): Promise<HttpxAsyncResult>;
    /**
     * 覆盖当前配置
     * @param details
     */
    config(details?: HttpxDetails): void;
}

/** Httpx */
declare interface UtilsHttpx {
    new(_GM_xmlHttpRequest_: () => void): UtilsHttpxConstrustor;
}

/** indexedDB */
declare interface UtilsIndexedDBConstructor {
    dbName: string;
    slqVersion: string;
    dbVersion: number;
    storeName: string;
    indexedDB: IDBFactory;
    db: object;
    store: null;
    errorCode: object;
    /**
     * 创建 “表”
     * @param dbName 表名
     */
    createStore(dbName: string): any;
    /**
     * 打开数据库
     * @param callback 回调
     * @param dbName 数据库名
     */
    open(callback: (store: object | {
        code: number,
        msg: string,
        error: Error
    }) => void, dbName: string): void;
    /**
     * 保存数据到数据库
     * @param key 数据key
     * @param value 数据值
     */
    save(key: string, value: any): Promise<{
        code: number;
        msg: string;
        success: boolean;
    }>;
    /**
     * 根据key获取值
     * @param key 数据key
     */
    get(key: string): Promise<{
        code: number;
        msg: string;
        data: any[];
        success: true;
    } | {
        code: number;
        msg: string;
        error: Error;
        result: any;
    }>;
    /**
     * 正则获取数据
     * @param key 数据键
     */
    regexpGet(key: string): Promise<{
        code: number;
        msg: string;
        data: any[];
        success: true;
    } | {
        code: number;
        msg: string;
        error: Error;
        result: any;
    }>;
    /**
     * 删除数据
     * @param key 数据键
     */
    delete(key: string): Promise<{
        code: number;
        msg: string;
        success: true;
    } | {
        code: number;
        msg: string;
        error: Error;
    }>;
    /**
     * 删除所有数据
     */
    deleteAll(): Promise<{
        code: number;
        msg: string;
        error: Error;
        result: any;
    } | {
        code: number;
        msg: string;
        success: true;
    }>;
}

/** indexedDB */
declare interface UtilsIndexedDB {
    /**
     * @param dbName 数据存储名，默认为：default_db
     * @param storeName 表名，默认为：default_form
     * @param dbVersion indexDB的版本号，默认为：1
     */
    new(dbName?: string, storeName?: string, dbVersion?: number): UtilsIndexedDBConstructor;
}

/** 请求的response配置 */
declare interface UtilsAjaxHookResponseOptions {
    /**
     * （重定向后的）Url
     */
    finalUrl: string;
    /**
     * 响应码
     */
    status: HttpxStatus;
    /**
     * 响应头
     */
    responseHeaders: HttpxHeaders;
    /**
     * 响应内容
     */
    response?: string | Blob | ArrayBuffer | XMLDocument | FormData;
    /**
     * 响应内容文本
     */
    responseText?: string;
}

/** hook请求的配置 */
declare interface UtilsAjaxHookRequestOptions {
    /**
     * 只读属性。一个字符串，表明请求类型是xhr还是fetch
     */
    type: "xhr";
    /**
     * 请求的Url
     */
    url: string;
    /**
     * 请求的url和method，可以直接修改
     */
    method: HttpxMethod;
    /**
     * 是否取消请求，设置为true即可取消本次请求
     */
    abort: boolean;
    /**
     * 请求头，可以直接修改
     */
    headers: HttpxHeaders;
    /**
     * 请求携带的数据，可以直接修改
     */
    data?: any;
    /**
     * 响应内容，必须通过一个回调函数进行读取和修改。
     * 
     * 响应内容为一个对象，包含finalUrl、status、responseHeaders和被读取的响应数据，除响应数据可修改，其他属性是只读的。
     * 
     * 响应数据是哪个属性取决于哪个属性被读取，xhr可能的属性为response、responseText、responseXML，fetch可能的属性为arrayBuffer、blob、formData、json、text。
     * 
     * 在控制台输出时，xhr响应将包含所有属性，但只有被读取过的属性具有明确的值。修改对应属性即可影响读取结果，进而实现响应数据的修改。
     */
    response?: (res: UtilsAjaxHookResponseOptions) => void;
    /**
     * 只读属性。异步请求为true，同步请求为false，异步特性无法作用于同步请求
     */
    async: boolean;
}

/** 过滤规则配置 */
declare interface UtilsAjaxHookFilterOptions {
    /**
     * 应是xhr或fetch
     */
    type?: "xhr" | "fetch";
    /**
     * 字符串或正则表达式，无需完全匹配
     */
    url?: string;
    /**
     * 请求方法
     */
    method?: HttpxMethod;
    /**
     * 是否异步
     */
    async?: boolean;
}

/** Utils.ajaxHooker */
declare interface UtilsAjaxHookResult {
    /**
     * 劫持
     * @example
        ajaxHooker.hook(request => {
            if (request.url === 'https://www.example.com/') {
                request.response = res => {
                    console.log(res);
                    res.responseText += 'test';
                };
            }
        });
      * @example
        // 异步特性无法作用于同步请求，但同步修改仍然有效
        // 你可以将以上所有可修改属性赋值为Promise，原请求将被阻塞直至Promise完成（若发生reject，数据将不会被修改）
        // 此特性可用于异步劫持。以下是一个异步修改响应数据的例子
        ajaxHooker.hook(request => {
            request.response = res => {
                const responseText = res.responseText; // 注意保存原数据
                res.responseText = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(responseText + 'test');
                    }, 3000);
                });
            };
        });

        // 也可以传入async回调函数以实现异步
        ajaxHooker.hook(async request => {
            request.data = await modifyData(request.data);
            request.response = async res => {
                res.responseText = await modifyResponse(res.responseText);
            };
        });
     */
    hook(callback: (request: UtilsAjaxHookRequestOptions) => void | Promise<undefined>): void;
    /**
     * 过滤
     * @example
        // 应于hook方法之前执行，此方法若尽早执行，有助于提升性能。
        // 为hook方法设置过滤规则，只有符合规则的请求才会触发hook。过滤规则是一个对象数组，参考下例
        ajaxHooker.filter([
            {type: 'xhr', url: 'www.example.com', method: 'GET', async: true},
            {url: /^http/},
        ]);
     */
    filter(filterOptions: UtilsAjaxHookFilterOptions[]): void;
    /**
     * 阻止xhr和fetch被改写
     * @example
        // 如果库劫持失败，可能是其他代码对xhr/fetch进行了二次劫持，protect方法会尝试阻止xhr和fetch被改写。应于document-start阶段尽早执行，部分网页下可能引发错误，谨慎使用。
        ajaxHooker.protect();
     */
    protect(): void;
    /**
     * 取消劫持
     * @example
        // 将xhr和fetch恢复至劫持前的状态，调用此方法后，hook方法不再生效。
        ajaxHooker.unhook();
     */
    unhook(): void;
}



declare interface UtilsGMCookieListOptions {
    /** 默认为当前的url */
    url: string;
    /** 默认为当前的域名(window.location.hostname) */
    domain: string;
    /** 需要检索的Cookie的名字 */
    name: string;
    /** 需要检索的Cookie的路径，默认为"/" */
    path: string;
}

declare interface UtilsGMCookieListResult {
    /** 为 window.location.hostname */
    domain: string;
    expirationDate: null;
    hostOnly: true;
    httpOnly: false;
    name: string;
    path: "/";
    sameSite: "unspecified";
    secure: true;
    session: false;
    value: string;
}

declare interface UtilsGMCookieSetOptions {
    /** 默认为当前的url */
    url: string;
    /** 默认为当前的域名(window.location.hostname) */
    domain: string;
    /** 需要检索的Cookie的名字 */
    name: string;
    /** 需要检索的Cookie的路径，默认为"/" */
    path: string;
    /** 值 */
    value: string;
    /**  */
    secure: boolean;
    /**  */
    httpOnly: boolean;
    /**  Cookie过期时间，默认为30天 */
    expirationDate: number;
}

declare interface UtilsGMCookieDeleteOptions {
    /** 默认为当前的url */
    url: string;
    /** 需要检索的Cookie的名字 */
    name: string;
}

/** Utils.Log的初始化配置 */
declare interface UtilsLogOptions {
    /** 是否输出Tag，false的话其它的颜色也不输出，默认为true */
    tag?: boolean;
    /** log.success的颜色，默认#0000FF */
    successColor?: string;
    /** log.warn的颜色，默认0 */
    warnColor?: string;
    /** log.error的颜色，默认#FF0000 */
    errorColor?: string;
    /** log.info的颜色，默认0 */
    infoColor?: string;
    /** 是否开启debug模式，true会在控制台每次调用时输出调用函数的所在位置，false不会输出位置，默认false */
    debug?: boolean;
    /** 当console输出超过logMaxCount数量自动清理控制台，默认false */
    autoClearConsole?: boolean;
    /** console输出的最高数量，autoClearConsole开启则生效，默认999 */
    logMaxCount?: boolean;
}

/** Utils.Log */
declare interface UtilsLogConstructor {
    /** 前面的TAG标志 */
    tag: string;
    /**
     * 控制台-普通输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    info(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-警告输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    warn(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-错误输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    error(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-成功输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    success(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-输出表格
     * @param msg
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     * @example
     * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
     */
    table(msg: object[], color?: string, otherStyle?: string): void;
    /**
     * 配置Log对象的颜色
     * @param paramDetails 配置信息
     */
    config(paramDetails: UtilsLogOptions): void;
    /** 禁用输出 */
    disable(): void;
    /** 恢复输出 */
    recovery(): void;
}

/** Utils.Log */
declare interface UtilsLog {
    /**
     * @param _GM_info_ 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}
     */
    new(_GM_info_: {
        script: {
            name: string,
        }
    }): UtilsLogConstructor;
}

/** Progress */
declare interface UtilsProgressConstructor {

}
/** Progress */
declare interface UtilsProgress {
    /**
     * @param paramConfig 配置信息
     */
    new(paramConfig: {
        /** canvas元素节点 */
        canvasNode?: HTMLCanvasElement;
        /** 绘制角度，默认：95 */
        deg: number;
        /** 进度，默认：0 */
        progress: number;
        /** 绘制的线宽度，默认：10 */
        lineWidth: number;
        /** 绘制的背景颜色，默认：#1e637c */
        lineBgColor: string;
        /** 绘制的线的颜色，默认：#25deff */
        lineColor: string;
        /** 绘制的字体颜色，默认：#000000 */
        textColor: string;
        /** 绘制的字体大小(px)，默认：22px */
        fontSize: string;
        /** 绘制的圆的半径，默认：50 */
        circleRadius: string;
        /** 控制绘制的函数 */
        draw?: () => void;
    }): UtilsProgressConstructor;
}

/** tryCatch */
declare interface UtilsTryCatch {
    run: UtilsTryCatch,
    config: UtilsTryCatch,
    error: UtilsTryCatch,
}

declare interface Utils {
    /** 版本 */
    version: string;
    /** 
     * JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
     * @param target 目标端
     * @param source 源端
     * @example
     * Utils.assign({"1":1,"2":{"3":3}}, {"2":{"3":4}});
     * > 
     * {
            "1": 1,
            "2": {
                "3": 4
            }
        }
     */
    assign(target?: object, source?: object): any;
    /**
     * ajax劫持库，支持xhr和fetch劫持。
     * + 来源：https://bbs.tampermonkey.net.cn/thread-3284-1-1.html
     * + 作者：cxxjackie
     * + 版本：1.3.3
     * + 文档：https://scriptcat.org/zh-CN/script-show-page/637/
     */
    ajaxHooker(): UtilsAjaxHookResult;
    /**
     * 根据坐标点击canvas元素的内部位置
     * @param canvasElement 画布元素
     * @param clientX X坐标，默认值0
     * @param clientY Y坐标，默认值0
     * @param view 触发的事件目标
     */
    canvasClickByPosition(canvasElement: HTMLCanvasElement, clientX?: number, clientY?: number, view?: Window & typeof globalThis): void;
    /**
     * 【手机】检测点击的地方是否在该元素区域内
     * @param element 需要检测的元素
     * @returns
     * + true 点击在元素上
     * + false 未点击在元素上
     * @example
     * Utils.checkUserClickInNode(document.querySelector(".xxx"));
     * > false
     **/
    checkUserClickInNode(element: Element | Node): boolean;
    /**
     * 函数重载实现
     * @example
     * let getUsers = Utils.createOverload();
     * getUsers.addImpl("",()=>{
     *    console.log("无参数");
     * });
     *
     * getUsers.addImpl("boolean",()=>{
     *    console.log("boolean");
     * });
     *
     * getUsers.addImpl("string",()=>{
     *    console.log("string");
     * });
     *
     * getUsers.addImpl("number","string",()=>{
     *    console.log("number string");
     * });
     */
    createOverload(): {
        /**
         * 前面的参数都是字符串，最后一个参数是函数
         */
        addImpl(...args: (string | Function)[]): void;
    };
    /**
     * 删除某个父元素，父元素可能在上层或上上层或上上上层...
     * @param element 当前元素
     * @param targetSelector 判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
     * @returns
     * + true 已删除
     * + false 未删除
     * @example
     * Utils.deleteParentNode(document.querySelector("a"),".xxx");
     * > true
     **/
    deleteParentNode(element: Node, targetSelector: string): boolean;
    /**
     * 字典
     * @example
     * let dictionary = new Utils.Dictionary();
     * let dictionary2 = new Utils.Dictionary();
     * dictionary.set("test","111");
     * dictionary.get("test");
     * > '111'
     * dictionary.has("test");
     * > true
     * dictionary.concat(dictionary2);
     **/
    Dictionary: UtilsDictionary;
    /**
     * 主动触发事件
     * @param element 元素
     * @param eventName 事件名称，可以是字符串，也可是字符串格式的列表
     * @param details （可选）赋予触发的Event的额外属性
     * + true 使用Proxy代理Event并设置获取isTrusted永远为True
     * + false (默认) 不对Event进行Proxy代理
     * @example
     * Utils.dispatchEvent(document.querySelector("input","input"))
     */
    dispatchEvent(
        element: HTMLElement,
        eventName: DOMUtils_EventType | DOMUtils_EventType[],
        details?: object
    ): void;
    /**
     * 下载base64格式的数据
     * @param base64Data	需要转换的base64数据
     * @param fileName	需要保存的文件名
     * @param isIFrame （可选）是否使用iframe进行下载
     * @example
     * Utils.downloadBase64("data:image/jpeg:base64/,xxxxxx");
     **/
    downloadBase64(base64Data: string, fileName: string, isIFrame?: boolean | undefined): void;
    /**
     * 选中页面中的文字，类似Ctrl+F的选中
     * @param str （可选）需要寻找的字符串，默认为空
     * @param caseSensitive（可选）默认false
     * + true 区分大小写
     * + false (默认) 不区分大小写
     * @returns
     * + true 找到
     * + false 未找到
     * + undefined 不可使用该Api
     * @example
     * Utils.findWebPageVisibleText("xxxxx");
     * > true
     **/
    findWebPageVisibleText(str?: string, caseSensitive?: boolean): boolean | void;
    /**
     * 定位元素上的字符串，返回一个迭代器
     * @param element 目标元素
     * @param text 需要定位的字符串
     * @param filter （可选）过滤器函数，返回值为true是排除该元素
     * @example
     * let textIterator = Utils.findElementsWithText(document.documentElement,"xxxx");
     * textIterator.next();
     * > {value: ?HTMLElement, done: boolean, next: Function}
     */
    findElementsWithText(
        element: HTMLElement | Element | Node,
        text: string,
        filter?: (element: Element) => boolean
    ): Generator<HTMLElement | ChildNode, void, any>;
    /**
     * 判断该元素是否可见，如果不可见，向上找它的父元素直至找到可见的元素
     * @param element
     * @example
     * let visibleElement = Utils.findVisibleElement(document.querySelector("a.xx"));
     * > <HTMLElement>
     */
    findVisibleElement(element: HTMLElement | Element | Node): HTMLElement | void;
    /**
     * 格式化byte为KB、MB、GB、TB、PB、EB、ZB、YB、BB、NB、DB
     * @param byteSize 字节
     * @param addType （可选）是否添加单位
     * + true (默认) 添加单位
     * + false 不添加单位
     * @returns
     * + {string} 当addType为true时，且保留小数点末尾2位
     * + {number} 当addType为false时，且保留小数点末尾2位
     * @example
     * Utils.formatByteToSize("812304");
     * > '793.27KB'
     * @example
     * Utils.formatByteToSize("812304",false);
     * > 793.27
     **/
    formatByteToSize<T extends boolean>(byteSize: number, addType?: T): T extends true ? string : number;
    /**
     * 应用场景: 当你想要获取数组形式的元素时，它可能是其它的选择器，那么需要按照先后顺序填入参数
     * 第一个是优先级最高的，依次下降，如果都没有，返回空列表
     * 支持document.querySelectorAll、$("")、()=>{return document.querySelectorAll("")}
     * @param NodeList
     * @example
     * Utils.getNodeListValue(
     *  document.querySelectorAll("div.xxx"),
     *  document.querySelectorAll("a.xxx")
     * );
     * > [...div,div,div]
     * @example
     * Utils.getNodeListValue(divGetFunction,aGetFunction);
     * > [...div,div,div]
     */
    getNodeListValue(...args: (NodeList | (() => HTMLElement))[]): Element[];
    /**
     * 获取格式化后的时间
     * @param text （可选）需要格式化的字符串或者时间戳，默认：new Date()
     * @param formatType （可选）格式化成的显示类型，默认：yyyy-MM-dd HH:mm:ss
     * + yyyy 年
     * + MM 月
     * + dd 天
     * + HH 时 (24小时制)
     * + hh 时 (12小时制)
     * + mm 分
     * + ss 秒
     * @returns {string}	返回格式化后的时间
     * @example
     * Utils.formatTime("2022-08-21 23:59:00","HH:mm:ss");
     * > '23:59:00'
     * @example
     * Utils.formatTime(1899187424988,"HH:mm:ss");
     * > '15:10:13'
     * @example
     * Utils.formatTime()
     * > '2023-1-1 00:00:00'
     **/
    formatTime(text?: string | number, formatType?: string): string;
    /**
     * 字符串格式的时间转时间戳
     * @param text	字符串格式的时间，例如：
     * + 2022-11-21 00:00:00
     * + 00:00:00
     * @returns 返回时间戳
     * @example
     * Utils.formatToTimeStamp("2022-11-21 00:00:00");
     * > 1668960000000
     **/
    formatToTimeStamp(text: string): number;
    /**
     * gbk格式的url编码,来自https://greasyfork.org/zh-CN/scripts/427726-gbk-url-js
     * @example
     * let gbkEncoder = new Utils.GBKEncoder();
     * gbkEncoder.encode("测试");
     * > '%B2%E2%CA%D4'
     * gbkEncoder.decode("%B2%E2%CA%D4");
     * > 测试
     */
    GBKEncoder: UtilsGBKEncoder,
    /**
     * 获取 transitionend 的在各个浏览器的兼容名
     */
    getTransitionEndNameList(): string[];
    /**
     * 获取 animationend 的在各个浏览器的兼容名
     */
    getAnimationEndNameList(): string[];
    /**
     * 获取NodeList或Array对象中的最后一个的值
     * @param targetObj
     * @returns
     * @example
     * Utils.getArrayLastValue(document.querySelectorAll("div"));
     * > div
     * @example
     * Utils.getArrayLastValue([1,2,3,4,5]);
     * > 5
     */
    getArrayLastValue(targetObj: NodeList | any[]): any;
    /**
     * 应用场景: 当想获取的元素可能是不同的选择器的时候，按顺序优先级获取
     * 参数类型可以是Element或者是Function
     * @returns 如果都没有的话，返回null
     * @example
     * // 如果a.aaa不存在的话，取a.bbb，这里假设a.aaa不存在
     * Utils.getArrayRealValue(document.querySelector("a.aaa"),document.querySelector("a.bbb"));
     * > a.bbb
     * @example
     * Utils.getArrayRealValue(()=>{return document.querySelector("a.aaa").href},()=>{document.querySelector("a.bbb").getAttribute("data-href")});
     * > javascript:;
     */
    getArrayRealValue(...args: (NodeList | (() => HTMLElement))[]): any;
    /**
     * 获取天数差异，如何获取某个时间与另一个时间相差的天数
     * @param timestamp1 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param timestamp2 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param type （可选）返回的数字的表达的类型，比如：年、月、天、时、分、秒、auto，默认天
     * @example
     * Utils.getDaysDifference(new Date().getTime());
     * > 0
     * @example
     * Utils.getDaysDifference(new Date().getTime(),undefined,"秒");
     * > 0
     */
    getDaysDifference(
        timestamp1?: number,
        timestamp2?: number,
        type?: "auto"
    ): string;
    /**
     * 获取天数差异，如何获取某个时间与另一个时间相差的天数
     * @param timestamp1 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param timestamp2 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param type （可选）返回的数字的表达的类型，比如：年、月、天、时、分、秒、auto，默认天
     * @example
     * Utils.getDaysDifference(new Date().getTime());
     * > 0
     * @example
     * Utils.getDaysDifference(new Date().getTime(),undefined,"秒");
     * > 0
     */
    getDaysDifference(
        timestamp1?: number,
        timestamp2?: number,
        type?: "年" | "月" | "天" | "时" | "分" | "秒"
    ): number;
    /**
     * 获取元素的选择器字符串
     * @param element
     * @example
     * Utils.getElementSelector(document.querySelector("a"))
     * > '.....'
     */
    getElementSelector(element: HTMLElement): string;
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue(1,3,5,7,9)
     * > 9
     */
    getMaxValue(...args: number[]): number;
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue([1,3,5])
     * > 5
     */
    getMaxValue(val: number[]): number;
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue({1:123,2:345,3:456},(key,value)=>{return parseInt(value)})
     * > 456
     */
    getMaxValue(val: object, handler: (key: any, value: any) => number): number;
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue([{1:123},{2:345},{3:456}],(index,value)=>{return parseInt(index)})
     * > 2
     */
    getMaxValue(val: object[], handler: (index: number, value: any) => number): number;
    /**
     * 获取页面中最大的z-index再+1
     * @example
     * Utils.getMaxZIndex();
     * > 1001
     **/
    getMaxZIndex(): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue(1,3,5,7,9)
     * > 1
     */
    getMinValue(...args: number[]): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue([1,3,5])
     * > 1
     */
    getMinValue(val: number[]): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue({1:123,2:345,3:456},(key,value)=>{return parseInt(value)})
     * > 123
     */
    getMinValue(val: object, handler: (key: any, value: any) => number): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue([{1:123},{2:345},{3:456}],(index,value)=>{return parseInt(index)})
     * > 0
     */
    getMinValue(val: object[], handler: (index: number, value: any) => number): number;
    /**
     * 获取随机的安卓手机User-Agent
     * @example
     * Utils.getRandomAndroidUA();
     * > 'Mozilla/5.0 (Linux; Android 10; MI 13 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.3490.40 Mobile Safari/537.36'
     **/
    getRandomAndroidUA(): string;
    /**
     * 获取随机值
     * @example
     * Utils.getRandomValue(1,9,6,99)
     * > 6
     */
    getRandomValue(...args: any[]): any;
    /**
     * 获取随机值
     * @example
     * Utils.getRandomValue([1,2,3])
     * > 3
     * @example
     * Utils.getRandomValue({1:"结果1",2:"结果2",3:"结果3"}})
     * > 结果2
     */
    getRandomValue(val: any[] | object): any;
    /**
     * 获取两个数之间随机值
     * @example
     * Utils.getRandomValue(1,9)
     * > 6
     */
    getRandomValue(val_1: number, val_2: number): any;
    /**
     * 获取随机值
     * @example
     * Utils.getRandomValue({1:1},{2:2})
     * > {1: 1}
     */
    getRandomValue(val_1: object, val_2: object): any;
    /**
     * 获取随机的电脑端User-Agent
     * + Mozilla/5.0：以前用于Netscape浏览器，目前大多数浏览器UA都会带有
     * + Windows NT 13：代表Window11系统
     * + Windows NT 10.0：代表Window10系统
     * + Windows NT 6.1：代表windows7系统
     * + WOW64：Windows-on-Windows 64-bit，32位的应用程序运行于此64位处理器上
     * + Win64：64位
     * + AppleWebKit/537.36：浏览器内核
     * + KHTML：HTML排版引擎
     * + like Gecko：这不是Geckeo 浏览器，但是运行起来像Geckeo浏览器
     * + Chrome/106.0.5068.19：Chrome版本号
     * + Safari/537.36：宣称自己是Safari？
     * @returns 返回随机字符串
     * @example
     * Utils.getRandomPCUA();
     * > 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5068.19 Safari/537.36'
     **/
    getRandomPCUA(): string;
    /**
     * 获取元素上的使用React框架的实例属性，目前包括reactFiber、reactProps、reactEvents、reactEventHandlers、reactInternalInstance
     * @param element 需要获取的目标元素
     * @returns
     * @example
     * Utils.getReactObj(document.querySelector("input"))?.reactProps?.onChange({target:{value:"123"}});
     */
    getReactObj(element: HTMLElement): {
        reactFiber: object,
        reactProps: object,
        reactEvents: object,
        reactEventHandlers: object;
        reactInternalInstance: object;
    } | void;
    /**
     * 获取文本的字符长度
     * @param text
     * @example
     * Utils.getTextLength("测试文本")
     * > 12
     */
    getTextLength(text: string): number;
    /**
     * 获取文本占据的空间大小，返回自动的单位，如12 Kb,14 K,20 MB，1 GB
     * @param text 目标字符串
     * @param addType （可选）是否添加单位
     * + true (默认) 自动添加单位
     * + false 不添加单位
     * @example
     * Utils.getTextStorageSize("测试文本");
     * > '12.00B'
     */
    getTextStorageSize<T extends boolean>(text: string, addType?: T): T extends true ? string : number;
    /**
     * 获取迅雷协议的Url
     * @param url Url链接或者其它信息
     */
    getThunderUrl(url: string): string;
    /**
     * 在页面中增加style元素，如果html节点存在子节点，添加子节点第一个，反之，添加到html节点的子节点最后一个
     * @param cssText css字符串
     * @returns 返回添加的CSS标签
     * @example
     * Utils.GM_addStyle("html{}");
     * > <style type="text/css">html{}</style>
     */
    GM_addStyle(cssText: string): HTMLStyleElement;
    /**
     * 对于GM_cookie的兼容写法，当无法使用GM_cookie时可以使用这个,但是并不完全兼容，有些写不出来且限制了httponly是无法访问的
     * @example
      let GM_cookie = new Utils.GM_Cookie();
      GM_cookie.list({name:"xxx_cookie_xxx"},function(cookies,error){
          if (!error) {
              console.log(cookies);
              console.log(cookies.value);
          } else {
              console.error(error);
          }
      });
      GM_cookie.set({name:"xxx_cookie_test_xxx",value:"这是Cookie测试值"},function(error){
          if (error) {
              console.error(error);
          } else {
              console.log('Cookie set successfully.');
          }
      })
      GM_cookie.delete({name:"xxx_cookie_test_xxx"},function(error){
          if (error) {
              console.error(error);
          } else {
              console.log('Cookie set successfully.');
          }
      })
     **/
    GM_Cookie: UtilsGMCookie;
    /**
     * 注册油猴菜单，要求本地存储的键名不能存在其它键名`GM_Menu_Local_Map`会冲突/覆盖
     * @example
      let GM_Menu = new Utils.GM_Menu({
        data: [
          {
            menu_key: "menu_key",
            text: "测试按钮",
            enable: true,
            accessKey: "a",
            autoClose: false,
            showText(text, enable) {
              return "[" + (enable ? "√" : "×") + "]" + text;
            },
            callback(data) {
              console.log("点击菜单，值修改为", data.enable);
            },
          },
        ],
        autoReload: false,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand,
      });
  
  
      // 获取某个菜单项的值
      GM_Menu.get("menu_key");
      > true
  
      // 获取某个菜单项的开启/关闭后显示的文本
      GM_Menu.getShowTextValue("menu_key");
      > √测试按钮
  
      // 添加键为menu_key2的菜单项
      GM_Menu.add({
        key:"menu_key2",
        text: "测试按钮2",
        enable: false,
        showText(text,enable){
          return "[" + (enable ? "√" : "×") + "]" + text;
        },
        callback(data){
          console.log("点击菜单，值修改为",data.enable);
        }
      });
      // 使用数组的方式添加多个菜单，如menu_key3、menu_key4
      GM_Menu.add([
        {
          key:"menu_key3",
          text: "测试按钮3",
          enable: false,
          showText(text,enable){
            return "[" + (enable ? "√" : "×") + "]" + text;
          },
          callback(data){
            console.log("点击菜单，值修改为",data.enable);
          }
        },
        {
          key:"menu_key4",
          text: "测试按钮4",
          enable: false,
          showText(text,enable){
            return "[" + (enable ? "√" : "×") + "]" + text;
          },
          callback(data){
            console.log("点击菜单，值修改为",data.enable);
          }
        }
      ]);
  
      // 更新键为menu_key的显示文字和点击回调
      GM_Menu.update({
        menu_key:{
          text: "更新后的测试按钮",
          enable: true,
          showText(text,enable){
            return "[" + (enable ? "√" : "×") + "]" + text;
          },
          callback(data){
            console.log("点击菜单更新后的测试按钮，新值修改为",data.enable);
          }
        }
      });
  
      // 删除键为menu_key的菜单
      GM_Menu.delete("menu_key");
     **/
    GM_Menu: UtilsGMMenu;
    /**
     * 基于Function prototype，能够勾住和释放任何函数
     * 
     * .hook
     * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
     * + hookFunc {string} 替换的hook函数
     * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
     * + methodName {string} 匿名函数需显式传入目标函数名eg:this.Begin = function(){....};}
     * 
     * .unhook
     * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
     * + funcName {string} 被Hook的函数名称
     * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
     * @example
      let hook = new Utils.Hooks();
      hook.initEnv();
      function myFunction(){
          console.log("我自己需要执行的函数");
      }
      function testFunction(){
          console.log("正常执行的函数");
      }
      testFunction.hook(testFunction,myFunction,window);
     **/
    Hooks: UtilsHooks;

    /**
     * 为减少代码量和回调，把GM_xmlhttpRequest封装
     * 文档地址: https://www.tampermonkey.net/documentation.php?ext=iikm
     * 其中onloadstart、onprogress、onreadystatechange是回调形式，onabort、ontimeout、onerror可以设置全局回调函数
     * @param _GM_xmlHttpRequest_ 油猴中的GM_xmlhttpRequest
     * @example
      let httpx = new Utils.Httpx(GM_xmlhttpRequest);
      let postResp = await httpx.post({
        url:url,
        data:JSON.stringify({
          test:1
        }),
        timeout: 5000
      });
      console.log(postResp);
      > {
        status: true,
        data: {responseText: "...", response: xxx,...},
        msg: "请求完毕",
        type: "onload",
      }
  
      if(postResp === "onload" && postResp.status){
      // onload
      }else if(postResp === "ontimeout"){
      // ontimeout
      }
     * @example
      // 也可以先配置全局参数
      let httpx = new Utils.Httpx(GM_xmlhttpRequest);
      httpx.config({
        timeout: 5000,
        async: false,
        responseType: "html",
        redirect: "follow",
      })
      // 优先级为 默认details < 全局details < 单独的details
     */
    Httpx: UtilsHttpx;
    /**
     * 浏览器端的indexedDB操作封装
     * @example
      let db = new Utils.indexedDB('web_DB', 'nav_text')
      let data = {name:'管理员', roleId: 1, type: 1};
      db.save('list',data).then((resolve)=>{
          console.log(resolve,'存储成功')
      })
  
      db.get('list').then((resolve)=>{
          console.log(resolve,'查询成功')
      })
  
      db.getPaging('list',20,10).then((resolve)=>{
          console.log(resolve,'查询分页偏移第20，一共10行成功');
      })
  
      db.delete('list').then(resolve=>{
          console.log(resolve,'删除成功---->>>>>>name')
      })
  
      db.deleteAll().then(resolve=>{
          console.log(resolve,'清除数据库---->>>>>>name')
      })
     **/
    indexedDB: UtilsIndexedDB;
    /**
     * 判断目标函数是否是Native Code
     * @param target
     * @returns
     * + true 是Native
     * + false 不是Native
     * @example
     * Utils.isNativeFunc(window.location.assign)
     * > true
     */
    isNativeFunc(target: Function): boolean;
    /**
     * 判断当前的位置是否位于页面底部附近
     * @param nearValue （可选）判断在页面底部的误差值，默认：50
     * @returns
     * + true 在底部附近
     * + false 不在底部附近
     */
    isNearBottom(nearValue?: number): boolean;
    /**
     * 判断对象是否是元素
     * @param target
     * @returns
     * + true 是元素
     * + false 不是元素
     * @example
     * Utils.isDOM(document.querySelector("a"))
     * > true
     */
    isDOM(target: any): boolean;
    /**
     * 判断浏览器是否支持全屏
     */
    isFullscreenEnabled(): boolean;
    /**
     * 判断对象是否是jQuery对象
     * @param target
     * @returns
     * + true 是jQuery对象
     * + false 不是jQuery对象
     * @example
     * Utils.isJQuery($("a"))
     * > true
     */
    isJQuery(target: any): boolean;
    /**
     * 判断当前设备是否是移动端
     * @param userAgent （可选）UA字符串，默认使用当前的navigator.userAgent
     * @returns
     * + true 是移动端
     * + false 不是移动端
     * @example
     * Utils.isPhone();
     * > true
     **/
    isPhone(userAgent?: string): boolean;
    /**
     * 判断对象是否不为空
     * @returns {boolean}
     * + true 不为空
     * + false 为空
     * @example
     * Utils.isNotNull("123");
     * > true
     */
    isNotNull(...args: any[]): boolean;
    /**
     * 判断对象或数据是否为空
     * String类型，如 ""、"null"、"undefined"、"   "
     * Number类型，如 0
     * Object类型，如 {}
     * @returns
     * + true 为空
     * + false 不为空
     * @example
      Utils.isNull({});
      > true
     * @example
      Utils.isNull([]);
      > true
     * @example
      Utils.isNull(" ");
      > true
     * @example
      Utils.isNull(function(){});
      > true
     * @example
      Utils.isNull(()=>{}));
      > true
     * @example
      Utils.isNull("undefined");
      > true
     * @example
      Utils.isNull("null");
      > true
     * @example
      Utils.isNull(" ", false);
      > true
     * @example
      Utils.isNull([1],[]);
      > false
     * @example
      Utils.isNull([],[1]);
      > false
     * @example
      Utils.isNull(false,[123]);
      > false
     **/
    isNull(...args: any[]): boolean;
    /**
     * 判断元素是否在页面中可见
     * @param element 需要检查的元素，可以是普通元素|数组形式的元素|通过querySelectorAll获取的元素数组
     * @param inView
     * + true 在窗口可视区域
     * + false 不在窗口可视区域
     * @returns
     * + true 可见
     * + false 不可见
     * @example
     * Utils.isVisible(document.documentElement)
     * > true
     */
    isVisible(element: HTMLElement[] | NodeList, inView?: boolean): boolean;
    /**
     * 判断是否是Via浏览器环境
     * @returns
     * + true 是Via
     * + false 不是Via
     * @example
     * Utils.isWebView_Via()
     * > false
     */
    isWebView_Via(): boolean;
    /**
     * 判断是否是X浏览器环境
     * @returns
     * + true 是X浏览器
     * + false 不是X浏览器
     * @example
     * Utils.isWebView_X()
     * > false
     */
    isWebView_X(): boolean;
    /**
     * 把对象内的value值全部取出成数组
     * @param target 目标对象
     * @returns 返回数组
     * @example
     * Utils.parseObjectToArray({"工具类":"jsonToArray","return","Array"});
     * > ['jsonToArray', 'Array']
     **/
    parseObjectToArray(target: object): any;
    /**
     * 监听某个元素键盘按键事件或window全局按键事件
     * 按下有值的键时触发，按下Ctrl\Alt\Shift\Meta是无值键。按下先触发keydown事件，再触发keypress事件。
     * @param target 需要监听的对象，可以是全局Window或者某个元素
     * @param eventName 事件名，默认keypress
     * @param callback 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
     * @example 
        Utils.listenKeyboard(window,(keyName,keyValue,otherKey,event)=>{
            if(keyName === "Enter"){
                console.log("回车按键的值是："+keyValue)
            }
            if(otherKey.indexOf("ctrl") && keyName === "Enter" ){
                console.log("Ctrl和回车键");
          }
        })
     * @example
    字母和数字键的键码值(keyCode)
      按键	键码	按键	键码	按键	键码	按键	键码
      A	65	J	74	S	83	1	49
      B	66	K	75	T	84	2	50
      C	67	L	76	U	85	3	51
      D	68	M	77	V	86	4	52
      E	69	N	78	W	87	5	53
      F	70	O	79	X	88	6	54
      G	71	P	80	Y	89	7	55
      H	72	Q	81	Z	90	8	56
      I	73	R	82	0	48	9	57
  
      数字键盘上的键的键码值(keyCode)	
      功能键键码值(keyCode)
      按键	键码	按键  	键码	按键	键码	按键	键码
      0	96	8	104	F1	112	F7	118
      1	97	9	105	F2	113	F8	119
      2	98	*	106	F3	114	F9	120
      3	99	+	107	F4	115	F10	121
      4	100	Enter	108	F5	116	F11	122
      5	101	-	109	F6	117	F12	123
      6	102	.	110	 	 	 	 
      7	103	/	111	 	 
      
      控制键键码值(keyCode)
      按键		键码	按键		键码	按键		键码	按键		键码
      BackSpace	8	Esc		27	→		39	-_		189
      Tab		9	Spacebar	32	↓		40	.>		190
      Clear		12	Page Up		33	Insert		45	/?		191
      Enter		13	Page Down	34	Delete		46	`~		192
      Shift		16	End		35	Num Lock	144	[{		219
      Control		17	Home		36	;:		186	\|		220
      Alt		18	←		37	=+		187	]}		221
      Cape Lock	20	↑		38	,<		188	'"		222
  
      多媒体键码值(keyCode)
      按键		键码
      音量加		175
      音量减		174
      停止		179
      静音		173
      浏览器		172
      邮件		180
      搜索		170
      收藏		171
     **/
    listenKeyboard(
        target: Window | Node | HTMLElement | typeof globalThis,
        eventName: "keyup" | "keypress" | "keydown",
        callback: (
            keyName: string,
            keyValue: string,
            otherCodeList: string[],
            event: KeyboardEvent
        ) => void
    ): {
        removeListen(): void;
    };
    /**
     * 自动锁对象，用于循环判断运行的函数，在循环外new后使用，注意，如果函数内部存在异步操作，需要使用await
     * @param callback 需要执行的函数
     * @param context （可选）函数作用域，默认：this(Utils)
     * @param delayTime （可选）延迟xx毫秒后解锁，默认：0
     * @example
      let lock = new Utils.LockFunction(()=>{console.log(1)}))
      lock.run();
      > 1
     * @example
      let lock = new Utils.LockFunction(()=>{console.log(1)}),true) -- 异步操作
      await lock.run();
      > 1
     **/
    LockFunction(
        callback: () => any | Promise<any>,
        context?: Function,
        delayTime?: number
    ): void;
    /**
     * 日志对象
     * @param _GM_info_ 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}
     * @example
      let log = new Utils.Log(GM_info);
      log.info("普通输出");
      > 普通输出
  
      log.success("成功输出");
      > 成功输出
  
      log.error("错误输出");
      > 错误输出
      
      log.warn("警告输出");
      > 警告输出
  
      log.tag = "自定义tag信息";
      log.info("自定义info的颜色","#e0e0e0");
      > 自定义info的颜色
  
      log.config({
        successColor: "#31dc02",
        errorColor: "#e02d2d",
        infoColor: "black",
      })
      log.success("颜色为#31dc02");
      > 颜色为#31dc02
     */
    Log: UtilsLog;
    /**
     * 合并数组内的JSON的值字符串
     * @param data 需要合并的数组
     * @param handleFunc 处理的函数|JSON的key
     * @example
     * Utils.mergeArrayToString([{"name":"数组内数据部分字段合并成字符串->"},{"name":"mergeToString"}],(item)=>{return item["name"]});
     * > '数组内数据部分字段合并成字符串->mergeToString'
     **/
    mergeArrayToString(data: any[], handleFunc?: (val: any) => any): string;
    /**
     * 监听页面元素改变并处理
     * @param target 需要监听的元素，如果不存在，可以等待它出现
     * @param observer_config MutationObserver的配置
     * @example
      Utils.mutationObserver(document.querySelector("div.xxxx"),{
        "callback":(mutations, observer)=>{},
        "config":{childList:true,attributes:true}
      });
     * @example
      Utils.mutationObserver(document.querySelectorAll("div.xxxx"),{
        "callback":(mutations, observer)=>{},
        "config":{childList:true,attributes:true}}
      );
     * @example
      Utils.mutationObserver($("div.xxxx"),{
      "callback":(mutations, observer)=>{},
      "config":{childList:true,attributes:true}}
      );
     **/
    mutationObserver(target: HTMLElement | Node | NodeList, observer_config: {
        config: MutationObserverInit;
        callback: MutationCallback;
    }): MutationObserver;
    /**
     * 去除全局window下的Utils，返回控制权
     * @example
     * let utils = Utils.noConflict();
     * > ...
     */
    noConflict(): Utils;
    /**
     * 恢复/释放该对象内的为function，让它无效/有效
     * @param needReleaseObject 需要操作的对象
     * @param needReleaseName 需要操作的对象的名字
     * @param functionNameList （可选）需要释放的方法，默认：全部方法
     * @param release （可选）
     * + true (默认) 释放该对象下的某些方法
     * + false 恢复该对象下的某些方法
     * @example
      // 释放该方法
      Utils.noConflictFunc(console,"console",["log"],true);
      console.log;
      > () => {}
  
     * @example
      // 恢复该方法
      Utils.noConflictFunc(console,"console",["log"],false);
      console.log;
      > ƒ log() { [native code] }
  
     * @example
      // 释放所有方法
      Utils.noConflictFunc(console,"console",[],true);
      console.debug;
      > () => {}
  
     * @example
      // 恢复所有方法
      Utils.noConflictFunc(console,"console",[],false);
      console.debug;
      > ƒ log() { [native code] }
     **/
    noConflictFunc(
        needReleaseObject: object,
        needReleaseName: string,
        functionNameList?: any[],
        release?: boolean): void;
    /**
     * base64转blob
     * @param dataUri base64的数据
     * @returns blob的链接
     * @example
     * Utils.parseBase64ToBlob("data:image/jpeg;base64,.....");
     * > blob://xxxxxxx
     **/
    parseBase64ToBlob(dataUri: string): string;
    /**
     * base64转File对象
     * @param dataUri base64的数据
     * @param fileName （可选）文件名，默认：example
     * @returns blob的链接
     * @example
     * Utils.parseBase64ToFile("data:image/jpeg;base64,.....","测试文件");
     * > object
     **/
    parseBase64ToFile(dataUri: string, fileName?: string): File;
    /**
     * 将正则匹配到的结果取出最后一个值并转换成int格式
     * @param matchList 正则匹配的列表
     * @param defaultValue 正则匹配的列表为空时，或者正则匹配的列表最后一项不为Int，返回该默认值0
     * @example
     * Utils.parseInt(["dadaadada123124","123124"],0);
     * > 123124
     *
     * @example
     * Utils.parseInt(null,0);
     * > 0
     * @example
     * Utils.parseInt(["aaaaaa"]);
     * > 0
     *
     * @example
     * Utils.parseInt(["aaaaaa"],"66");
     * > 66
     *
     * @example
     * Utils.parseInt(["aaaaaaa"],"aa");
     * > NaN
     **/
    parseInt(matchList?: any[], defaultValue?: number): number;
    /**
     * blob转File对象
     * @param blobUrl 需要转换的blob的链接
     * @param fileName （可选）转换成的File对象的文件名称，默认：example
     * @example
     * Utils.parseBlobToFile("blob://xxxxx");
     * > object
     **/
    parseBlobToFile(blobUrl: string, fileName?: string): Promise<File | Error>;
    /**
     * 解析CDATA格式的内容字符串
     * @param text 传入CDATA字符串
     * @returns 返回解析出的内容
     * @example
     * let xml = "<root><![CDATA[This is some CDATA content.]]></root>";
     * console.log(Utils.parseCDATA(xml));
     * > This is some CDATA content.
     */
    parseCDATA(text: string): string;
    /**
     * 【异步函数】File对象转base64
     * @param fileObj 需要转换的File对象
     * @example
     * await Utils.parseFileToBase64(object);
     * > 'data:image/jpeg:base64/,xxxxxx'
     **/
    parseFileToBase64(fileObj: File): Promise<string>;
    /**
     * 解析字符串
     * @param text 要解析的 DOMString。它必须包含 HTML、xml、xhtml+xml 或 svg 文档。
     * @param mimeType （可选）解析成的类型
     * + （默认）text/html
     * + text/xml
     * + application/xml
     * + application/xhtml+xml
     * + image/svg+xml
     * @example
     * Utils.parseFromString("<p>123<p>");
     * > #document
     */
    parseFromString(
        text: string,
        mimeType?: "text/html" | "text/xml" | "application/xml" | "application/xhtml+xml" | "image/svg+xml"
    ): HTMLElement | XMLDocument | SVGElement;
    /**
     * 阻止事件传递
     * @param element 要进行处理的元素
     * @param eventNameList （可选）要阻止的事件名|列表
     * @example
     * Utils.preventEvent(document.querySelector("a"),"click")
     * @example
     * Utils.preventEvent(event);
     */
    preventEvent(
        element: HTMLElement,
        eventNameList?: string | string[]
    ): boolean;
    /**
     * 在canvas元素节点上绘制进度圆圈
     * @example
      let progress = new Utils.Process({canvasNode:document.querySelector("canvas")});
      progress.draw();
     * **/
    Progress: UtilsProgress;
    /**
     * 劫持Event的isTrust为true，注入时刻，ducument-start
     * @param isTrustValue （可选）让isTrusted为true
     * @example
     * Utils.registerTrustClickEvent()
     */
    registerTrustClickEvent(isTrustValue?: boolean): void;
    /**
     * 将数字进行正/负转换
     * @param num 需要进行转换的数字
     */
    reverseNumber(num: number): number;
    /**
     * 将元素上的文本或元素使用光标进行选中
     *
     * 注意，如果设置startIndex和endIndex，且元素上并无可选则的坐标，那么会报错
     * @param element 目标元素
     * @param childTextNode 目标元素下的#text元素
     * @param startIndex （可选）开始坐标，可为空
     * @param endIndex （可选）结束坐标，可为空
     */
    selectElementText(
        element: HTMLElement | Element | Node,
        childTextNode: ChildNode,
        startIndex?: number,
        endIndex?: number
    ): void;
    /**
     * 复制到剪贴板
     * @param data 需要复制到剪贴板的文本
     * @param info （可选）默认：text/plain
     * @example
     * Utils.setClip({1:2});
     * > {"1":2}
     * @example
     * Utils.setClip( ()=>{
     *   console.log(1)
     * });
     * > ()=>{console.log(1)}
     * @example
     * Utils.setClip("xxxx");
     * > xxxx
     * @example
     * Utils.setClip("xxxx","html");
     * > xxxx
     * @example
     * Utils.setClip("xxxx","text/plain");
     * > xxxx
     **/
    setClip(data: any, info?: {
        type: string;
        mimetype: string;
    } | string): Promise<any>;
    /**
     * 【异步函数】等待N秒执行函数
     * @param callback 待执行的函数(字符串)
     * @param delayTime （可选）延时时间(ms)，默认：0
     * @example
     * await Utils.setTimeout(()=>{}, 2500);
     * > ƒ tryCatchObj() {}
     * @example
     * await Utils.setTimeout("()=>{console.log(12345)}", 2500);
     * > ƒ tryCatchObj() {}
     **/
    setTimeout(callback: (() => void) | string, delayTime?: number): Promise<any>;
    /**
     * 【异步函数】延迟xxx毫秒
     * @param delayTime （可选）延时时间(ms)，默认：0
     * @example
     * await Utils.sleep(2500)
     **/
    sleep(delayTime?: number): Promise<any>;
    /**
     * 向右拖动滑块
     * @param selector 选择器|元素
     * @param offsetX （可选）水平拖动长度，默认：window.innerWidth
     * @example
     * Utils.dragSlider("#xxxx");
     * @example
     * Utils.dragSlider("#xxxx",100);
     */
    dragSlider(selector: string | Element | Node, offsetX?: number): void;
    /**
     * 使目标元素进入全屏
     * @param element （可选）目标元素，默认：document.documentElement
     * @param options （可选）配置，一般不用
     * @example
     * Utils.enterFullScreen();
     */
    enterFullScreen(element: HTMLElement, options: FullscreenOptions | null): void;
    /**
     * 使浏览器退出全屏
     * @param element （可选）目标元素，默认：document.documentElement
     * @example
     * Utils.exitFullScreen();
     */
    exitFullScreen(element?: HTMLElement): Promise<void>;
    /**
     * 数组按照内部某个值的大小比对排序，如[{"time":"2022-1-1"},{"time":"2022-2-2"}]
     * @param data 数据|获取数据的方法
     * @param getPropertyValueFunc 数组内部项的某个属性的值的方法，参数为这个项
     * @param sortByDesc （可选）排序方式
     * + true (默认)倒序(值最大排第一个，如:6、5、4、3...)
     * + false 升序(值最小排第一个，如:1、2、3、4...)
     * @returns 返回比较排序完成的数组
     * @example
     * Utils.sortListByProperty([{"time":"2022-1-1"},{"time":"2022-2-2"}],(item)=>{return item["time"]})
     * > [{time: '2022-2-2'},{time: '2022-1-1'}]
     * @example
     * Utils.sortListByProperty([{"time":"2022-1-1"},{"time":"2022-2-2"}],(item)=>{return item["time"]},false)
     * > [{time: '2022-1-1'},{time: '2022-2-2'}]
     **/
    sortListByProperty<T extends any[] | NodeList>(data: T, getPropertyValueFunc: string | (() => any), sortByDesc?: boolean): T;
    /**
     * 字符串转正则，用于把字符串中不规范的字符进行转义
     * @param targetString 需要进行转换的字符串
     * @param flags 正则标志
     */
    stringToRegular(targetString: string, flags?: "g" | "i" | "m" | "u" | "y"): RegExp;
    /**
     * 字符串首字母转大写
     * @param targetString 目标字符串
     * @param otherStrToLowerCase （可选）剩余部分字符串转小写，默认false
     */
    stringTitleToUpperCase(targetString: string, otherStrToLowerCase?: boolean): string;
    /**
     * 字符串首字母转小写
     * @param targetString 目标字符串
     * @param otherStrToLowerCase （可选）剩余部分字符串转大写，默认false
     */
    stringTitleToLowerCase(targetString: string, otherStrToUpperCase?: boolean): string;
    /**
     * 字符串转Object对象，类似'{"test":""}' => {"test":""}
     * @param data
     * @param errorCallBack （可选）错误回调
     * @example
     * Utils.toJSON("{123:123}")
     * > {123:123}
     */
    toJSON(data: string, errorCallBack?: (error: Error) => void): object;
    /**
     * 提供一个封装了 try-catch 的函数，可以执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @returns 返回一个对象，其中包含 error 和 run 两个方法。
     * @example
     * Utils.tryCatch().error().run(()=>{console.log(1)});
     * > 1
     * @example
     * Utils.tryCatch().config({log:true}).error((error)=>{console.log(error)}).run(()=>{throw new Error('测试错误')});
     * > ()=>{throw new Error('测试错误')}出现错误
     */
    tryCatch(...args: any[]): UtilsTryCatch;
    /**
     * 数组去重，去除重复的值
     * @param uniqueArrayData 需要去重的数组
     * @param compareArrayData 用来比较的数组
     * @param compareFun 数组比较方法，如果值相同，去除该数据
     * @returns 返回去重完毕的数组
     * @example
     * Utils.uniqueArray([1,2,3],[1,2],(item,item2)=>{return item===item2 ? true:false});
     * > [3]
     *
     * @example
     * Utils.uniqueArray([1,2,3],[1,2]);
     * > [3]
     *
     * @example
     * Utils.uniqueArray([{"key":1,"value":2},{"key":2}],[{"key":1}],(item,item2)=>{return item["key"] === item2["key"] ? true:false});
     * > [{"key": 2}]
     **/
    uniqueArray(
        uniqueArrayData?: any[],
        compareArrayData?: any[],
        compareFun?: (item1: any, item2: any) => boolean
    ): any[];
    /**
     * 等待函数数组全部执行完毕，注意，每个函数的顺序不是同步
     * @param data 需要遍历的数组
     * @param handleFunc 对该数组进行操作的函数，该函数的参数为数组格式的参数,[数组下标，数组项]
     * @example
     * await Utils.waitArrayLoopToEnd([callback,callback,callback],xxxcallback);
     **/
    waitArrayLoopToEnd(data: any[] | HTMLElement[], handleFunc: Function): Promise<void[]>;
    /**
     * 等待指定元素出现，支持多个selector
     * @param nodeSelectors 一个或多个节点选择器，必须为字符串类型
     * @example
     * Utils.waitNode("div.xxx").then( element =>{
     *  console.log(element); // div.xxx => HTMLElement
     * })
     * @example
     * Utils.waitNode("div.xxx","a.xxx").then( (elementList)=>{
     *  console.log(elementList[0]); // div.xxx => HTMLElement
     *  console.log(elementList[1]); // a.xxx => HTMLElement
     * })
     */
    waitNode(...nodeSelectors: string[]): Promise<HTMLElement | HTMLElement[]>;
    /**
     * 在规定时间内，等待任意元素出现，支持多个selector，如果未出现，则关闭监听
     * @param nodeSelectorsList 一个或多个节点选择器，必须为字符串类型
     * @param maxTime （可选）xx毫秒(ms)后关闭监听，默认：0(ms)
     * @example
     * Utils.waitNodeWithInterval("a.xxx",30000).then(element=>{
     *   console.log(element);
     * })
     * @example
     * Utils.waitNodeWithInterval(["div.xxx","a.xxx"],30000).then(elementList=>{
     *   console.log(elementList[0]); // div.xxx => HTMLElement
     *   console.log(elementList[1]); // a.xxx => HTMLElement
     * })
     */
    waitNodeWithInterval(nodeSelectorsList?: string[] | string, maxTime?: number): Promise<HTMLElement | HTMLElement[]>;
    /**
     * 等待任意元素出现，支持多个selector
     * @param nodeSelectors 一个或多个节点选择器，必须为字符串类型
     * @example
     * Utils.waitAnyNode("div.xxx","a.xxx").then( element =>{
     *   console.log(element); // a.xxx => HTMLElement
     * })
     */
    waitAnyNode(...nodeSelectors: any[]): Promise<HTMLElement>;
    /**
     * 等待指定元素出现，支持多个selector
     * @param nodeSelectors
     * @returns 当nodeSelectors为数组多个时，
     * 返回如：[ NodeList, NodeList ]，
     * 当nodeSelectors为单个时，
     * 返回如：NodeList。
     * NodeList元素与页面存在强绑定，当已获取该NodeList，但是页面中却删除了，该元素在NodeList中会被自动删除
     * @example
     * Utils.waitNodeList("div.xxx").then( nodeList =>{
     *  console.log(nodeList) // div.xxx => NodeList
     * })
     * @example
     * Utils.waitNodeList("div.xxx","a.xxx").then( nodeListArray =>{
     *  console.log(nodeListArray[0]) // div.xxx => NodeList
     *  console.log(nodeListArray[1]) // a.xxx => NodeList
     * })
     */
    waitNodeList(...nodeSelectors: string[]): Promise<NodeList | NodeList[]>;
    /**
     * 等待任意元素出现，支持多个selector
     * @param nodeSelectors
     * @returns 返回NodeList
     * NodeList元素与页面存在强绑定，当已获取该NodeList，但是页面中却删除了，该元素在NodeList中会被自动删除
     * @example
     * Utils.waitAnyNodeList("div.xxx").then( nodeList =>{
     *  console.log(nodeList) // div.xxx => NodeList
     * })
     * @example
     * Utils.waitAnyNodeList("div.xxx","a.xxx").then( nodeList =>{
     *  console.log(nodeList) // a.xxx => NodeList
     * })
     */
    waitAnyNodeList(...nodeSelectors: string[]): Promise<NodeList>;
    /**
     * 等待对象上的属性出现
     * @param checkObj 检查的对象
     * @param checkPropertyName 检查的对象的属性名
     * @example
     * await Utils.waitProperty(window,"test");
     * console.log("test success set");
     *
     * window.test = 1;
     * > "test success set"
     *
     */
    waitProperty(
        checkObj: object | (() => object),
        checkPropertyName: string
    ): Promise<any>;
    /**
     * 在规定时间内等待对象上的属性出现
     * @param checkObj 检查的对象
     * @param checkPropertyName 检查的对象的属性名
     * @param intervalTimer （可选）检查间隔时间（ms），默认250ms
     * @param maxTime （可选）限制在多长时间内，默认-1(不限制时间)
     * @example
     * await Utils.waitPropertyByInterval(window,"test");
     * console.log("test success set");
     */
    waitPropertyByInterval(
        checkObj: object | (() => object),
        checkPropertyName: string | ((obj: any) => boolean),
        intervalTimer?: number,
        maxTime?: number
    ): Promise<any>;
    /**
     * 在规定时间内等待元素上的__vue__属性或者__vue__属性上的某个值出现出现
     * @param element 目标元素
     * @param propertyName vue上的属性名
     * @param timer （可选）间隔时间（ms），默认：250(ms)
     * @param maxTime（可选） 限制在多长时间内，默认：-1(不限制时间)
     * @param vueName （可选）vue挂载的属性名，默认：__vue__
     * @example
     * await Utils.waitVueByInterval(
     * function(){
     *    return document.querySelector("a.xx")
     * },
     * function(__vue__){
     *    return Boolean(__vue__.xxx == null);
     * },
     * 250,
     * 10000,
     * "__vue__"
     * )
     */
    waitVueByInterval(
        element: HTMLElement | (() => HTMLElement),
        propertyName: string | ((__vue__: any) => boolean),
        timer?: number,
        maxTime?: number,
        vueName?: "__vue__" | string
    ): Promise<void>;
    /**
     * 观察对象的set、get
     * @param target 观察的对象
     * @param propertyName 观察的对象的属性名
     * @param getCallBack （可选）触发get的回调，可以自定义返回特定值
     * @param setCallBack （可选）触发set的回调，参数为将要设置的value
     * @example
     * Utils.watchObject(window,"test",()=>{return 111;},(value)=>{console.log("test出现，值是",value)});
     *
     * window.test = 1;
     * > test出现，值是 1
     * console.log(window.test);
     * > 111;
     */
    watchObject(
        target: object,
        propertyName: string,
        getCallBack: (value: any) => void,
        setCallBack: (value: any) => void
    ): void;

}

declare var Utils: {
    prototype: Utils;
}