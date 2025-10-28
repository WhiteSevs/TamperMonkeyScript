export declare const QmsgEvent: {
    visibilitychange: {
        eventConfig: {
            /**
             * 添加visibilitychange事件监听
             * 当页面切换时，如果切换前的页面存在Qmsg实例且未关闭，切换后，页面活跃度会降低，导致setTimeout/setInterval失效或丢失事件
             * 监听visibilitychange，判断切换回来时，如果当前时间-开始时间大于timeout，则关闭
             * 如果设置了动画，使用close，否则使用destroy
             */
            callback(): void;
            option: AddEventListenerOptions;
        };
        /**
         * 监听事件
         */
        addEvent(): void;
        /**
         * 移除监听事件
         */
        removeEvent(): void;
    };
};
