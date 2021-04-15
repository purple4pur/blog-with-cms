import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'

import { PostContent } from 'containers'

const HELP = 
`## 小丛雨现在可以……

### 基础命令

| Command                                     | Description                | Example                  |
| :------------------------------------------ | :------------------------- | :----------------------- |
| \`/help\`, \`/帮助\`                            | 打开丛雨酱的帮助菜单       |                          |
| \`/ping\`                                     | 歪？是小丛雨吗？           |                          |
| \`/contact\`, \`/feedback\`, \`/反馈\` + \`[内容]\` | 有什么想对我的主人说的呢？ | \`/反馈 丛雨酱你不够可爱\` |

### 随机系列

| Command                                     | Description             | Example                 |
| :------------------------------------------ | :---------------------- | :---------------------- |
| \`/roll <number=100>\`                        | 在 \`[0, number]\` 里摇点 | \`/roll 20\`              |
| \`/roll [arg1] [arg2] <...>\`                 | 专治选择困难            | \`/roll 芳乃 丛雨 茉子\`  |
| \`/[...是不是/要不要...]\`, \`/[...有没有...]\` | 回答型人工智障          | \`/芳乃酱有没有你可爱？\` |

### 娱乐系列

| Command           | Description                      | Example |
| :---------------- | :------------------------------- | :------ |
| \`/sleep\`, \`/睡觉\` | 想睡觉啦？小丛雨发语音给你助眠！ |         |
| \`/晚安\`           | 见下文                           |         |
| \`/早\`             | 见下文                           |         |

#### \`/晚安\`、\`/早\` 命令详解

- \`/晚安\`：记录当前时间为你的入睡时间
- \`/早\`：记录当前时间为你的起床时间，且只会承认第一次收到命令时的时间

为了尽可能让记录的时间有意义，请正确地使用这两条命令：

1. 在睡前发 \`/晚安\`，然后马上睡觉
2. 早上醒来尽快发 \`/早\`，然后开始元气满满的新一天！

未来这些储存的时间还可能会有拓展应用，例如某一天的睡觉群排行（

### 非命令功能

- 复读（

[Github](https://github.com/purple4pur/murasame-chan)`

export default class MurasameChanHelp extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>丛雨酱帮助菜单</title>
        </Helmet>
        <PostContent content={HELP} />
      </>
    )
  }
}
